# Contributing

Thanks for helping keep the Bifrost documentation accurate and useful. Small, focused pull requests are easiest to review and publish.

## Before you start

Use Node.js 24 and the committed npm lockfile:

```sh
npm ci
npm run dev
```

Documentation pages belong under `src/content/docs/docs/`. Put documentation assets in `src/assets/public-docs/` and documentation-specific components in `src/components/docs/`. Update `config/starlight.mjs` when a page needs sidebar navigation. Screenshot capture uses `screenshots.yaml` and its fixtures.

Do not edit generated files or reference code. Ask a maintainer before changing license provenance, moving a large section, or restructuring navigation.

## Write a focused change

Start with a concrete reader problem and the outcome the page should provide. Explain the affected page and version behavior, including the evidence for any product claim. Keep existing slugs stable. If a rename or removal needs a redirect, include that redirect in the same change.

Use examples that are safe to publish. Do not include customer data, credentials, tokens, screenshots containing private information, or other secrets. Include before-and-after screenshots when a visual change affects the rendered documentation.

## Verify locally

Run the complete local check set before opening a pull request:

```sh
npm run check
npm test
npm run build
```

Describe the commands you ran and their results in the pull request. If a check cannot run, explain why and state the remaining uncertainty.

## Review and merge

External pull requests need maintainer review before merge. Maintainer-authored changes still go through a pull request and the same required checks. Request independent review for changes to build, licensing, or publication behavior.

Maintainers should keep `main` protected: require pull requests, the `docs-quality` status check, and resolved conversations. Do not allow direct pushes, force pushes, or branch deletion. First-time external contributions require maintainer review before merge.

The [CODEOWNERS](.github/CODEOWNERS) file routes review requests to the owners for documentation, configuration, scripts, and lockfiles.

## Publication

After a maintainer merges a documentation PR, the private website checks for approved updates hourly. It opens a revision-update PR, validates the combined website, and merges the update after its checks pass. Vercel then publishes the website. Maintainers can trigger the sync manually when a change needs to go live sooner.

You can preview and contribute here without access to the private website. A successful documentation build is required before merge; publication also depends on the combined website build succeeding.
