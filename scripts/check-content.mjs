import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const root = fileURLToPath(new URL('../', import.meta.url));
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? walk(path.join(dir,e.name)) : path.join(dir,e.name)))).flat();
}
const errors = [];
const pages = (await walk(path.join(root,'src/content/docs'))).filter(f => /\.mdx?$/.test(f));
for (const file of pages) {
  const text = await readFile(file,'utf8');
  const label = path.relative(root,file);
  try {
    const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
    const data = yaml.load(frontmatter?.[1] ?? '');
    if (!data || typeof data.title !== 'string' || !data.title.trim()) errors.push(`${label}: a title is required`);
    if (data?.draft) errors.push(`${label}: keep unpublished drafts out of the public source`);
  } catch(e) { errors.push(`${label}: ${e.message}`); }
  // Check references in prose, not sample imports inside fenced code blocks.
  const prose = text.replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1\s*$/gm,'');
  for (const match of prose.matchAll(/["'(]((?:\.\.\/)+(?:assets|components)\/[^"')\n]+)["')]/g)) {
    const target = path.resolve(path.dirname(file),decodeURIComponent(match[1]));
    if (!target.startsWith(root)) { errors.push(`${label}: reference escapes the repository`); continue; }
    try { await access(target); } catch { errors.push(`${label}: missing ${match[1]}`); }
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode=1; }
else console.log(`Checked titles and local asset/component references for ${pages.length} documentation pages.`);
