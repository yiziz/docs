---
title: Dynamic Imports
---

# {{ $frontmatter.title }}

Vite uses rollup under the hood which supports dynamic imports just like webpack and other bundlers but it has a small _flaw_. Well, not so much a flaw but rather a consideration that was never put to thought simply because of how AEM ClientLibs work.

The import rewriter takes the ES module import paths and converts them into AEM friendly paths automatically.

## Rollup plugin

AEM Vite provides a rollup plugin that will rewrite dynamic import paths to your `/etc.clientlibs` proxy path.

```bash
npm install --save-dev @aem-vite/import-rewriter
# or; yarn
yarn add -D @aem-vite/import-rewriter
```

## Configuration

Getting this plugin configured is really simple, all it requires is the current Vite command and your public path.

```js{1,6-10}
import aemViteImportRewriter from '@aem-vite/import-rewriter';

export default defineConfig(({ command }) => ({
  plugins: [
    // ... all other plugins before, 'aemViteImportRewriter' must be last
    aemViteImportRewriter({
      command,
      publicPath: '/etc.clientlibs/<project>/clientlibs/',
    }),
  ],
}));
```

### Properties

| Property Name                                                                                                    | Type     | Required |
| :--------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| **command**<br><small>The type of build Vite is currently executing. This can be: **serve** or **build**</small> | `string` | Yes      |
| **publicPath**<br><small>The AEM proxy path to your ClientLibs directory</small>                                 | `string` | Yes      |

## How this works

Under the hood `es-module-lexer` is used to parse the rollup chunk source and identifies all of the `import` statements. Once identified, they are parsed and all instances that use path patterns such as `./` or `../` will get replaced with `publicPath` configured in your plugin configuration.

By rewriting the imports we solve another issue and that is we prevent Vite adding duplicate imports via its dynamic import polyfill transformer.
