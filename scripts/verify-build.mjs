import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const dist=path.join(root,'dist');
async function walk(dir) { return (await Promise.all((await readdir(dir,{withFileTypes:true})).map(e => e.isDirectory()?walk(path.join(dir,e.name)):path.join(dir,e.name)))).flat(); }
const files=(await walk(path.join(dist,'docs'))).filter(f => f.endsWith('.html'));
const errors=[];let editable=0;
for (const file of files) {
  const html=await readFile(file,'utf8');
  const relative=path.relative(dist,file);
  // Redirect pages have no article. Every actual docs article must be editable.
  if (html.includes('sl-markdown-content') && !relative.endsWith('404.html')) {
    const edit=/href="(https:\/\/github\.com\/gobifrost\/public-docs\/edit\/main\/[^"?#]+)"/.exec(html);
    if (!edit) errors.push(`${relative}: missing GitHub edit link`);
    else {
      const source=decodeURIComponent(edit[1].split('/edit/main/')[1]);
      try { await access(path.join(root,source));editable++; } catch { errors.push(`${relative}: edit link does not point to a source file (${source})`); }
    }
  }
  for (const match of html.matchAll(/href="(\/docs(?:\/[^"?#]*)?)(?:[?#][^"]*)?"/g)) {
    const url=decodeURIComponent(match[1]);
    const clean=url.replace(/^\//,'').replace(/\/$/,'');
    const candidates=[path.join(dist,clean),path.join(dist,clean,'index.html'),path.join(dist,clean+'.html')];
    let exists=false;
    for (const candidate of candidates) { try { await access(candidate);exists=true;break; } catch {} }
    if (!exists) errors.push(`${relative}: broken documentation link ${url}`);
  }
}
if(errors.length) { console.error([...new Set(errors)].join('\n'));process.exitCode=1; }
else console.log(`Verified ${files.length} docs HTML routes, ${editable} GitHub edit links, and internal docs links.`);
