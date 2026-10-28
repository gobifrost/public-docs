# Bifrost public documentation

This repository contains the source for Bifrost product documentation published at [gobifrost.com/docs](https://gobifrost.com/docs). It is documentation only, not an installable copy of the Bifrost application. The Bifrost application's AGPL license remains unchanged.

The documentation tree lives in `src/content/docs/docs/`. Documentation assets live in `src/assets/public-docs/`, and documentation-specific components live in `src/components/docs/`. The sidebar is configured in `config/starlight.mjs`; screenshot capture support uses `screenshots.yaml` and fixtures.

## Preview and checks

Use Node.js 24 and the committed npm lockfile.

```sh
npm ci
npm run dev
```

Before opening a pull request, run:

```sh
npm run check
npm test
npm run build
```

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing a change. Please also follow the [Code of Conduct](CODE_OF_CONDUCT.md) and [security reporting guidance](SECURITY.md).

## Licensing

Unless a file says otherwise, original documentation and original screenshots are available under [CC BY 4.0](LICENSE). New code snippets, preview code, and build tooling are available under the [MIT License](LICENSE-CODE). Existing third-party and extracted materials keep their original notices and terms. See [NOTICE.md](NOTICE.md) for the scope of these licenses and trademark terms.
