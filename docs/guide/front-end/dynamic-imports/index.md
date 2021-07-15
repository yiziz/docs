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

Getting this plugin configured is really simple, all it requires is your ClientLib public path.

::: warning 'command' no longer exists
As of v3.0.0, the `command` option no longer exists in favour of using Vite's `apply` property which bring a slight performance gain with it.
:::

```js{1,6-13}
import aemViteImportRewriter from '@aem-vite/import-rewriter';

export default defineConfig(() => ({
  plugins: [
    // ... all other plugins before, 'aemViteImportRewriter' must be last
    {
      ...aemViteImportRewriter({
        publicPath: '/etc.clientlibs/<project>/clientlibs/',
      }),

      apply: 'build',
      enforce: 'pre',
    },
  ],
}));
```

### Properties

| Property Name                                                                                                                      | Type     | Required |
| :--------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| **caching**<br><small>Instruct import rewriter how to handle AEM caching.</small>                                                  | `object` | No       |
| **mainEntryPath**<br><small>Custom entry path for your Vite configuration. This is automatically identified in most cases.</small> | `string` | No       |
| **publicPath**<br><small>The AEM proxy path to your ClientLibs directory.</small>                                                  | `string` | Yes      |

#### Caching

| Property Name                                                                   | Type      | Required | Default    |
| :------------------------------------------------------------------------------ | --------- | -------- | ---------- |
| **enabled**<br><small>Should caching support be utilised during builds?</small> | `boolean` | Yes      | -          |
| **keyFormat**<br><small>Long term cache key format.</small>                     | `string`  | No       | `lc-%s-lc` |
| **minification**<br><small>Should `.min` be added to the import path?</small>   | `boolean` | No       | `false`    |

## How this works

Under the hood `es-module-lexer` is used to parse the rollup chunk source and identifies all of the `import` statements. Once identified, they are parsed and all instances that use path patterns such as `./` or `../` will get replaced with `publicPath` configured in your plugin configuration.

By rewriting the imports we solve another issue and that is we prevent Vite adding duplicate imports via its dynamic import polyfill transformer.

### Circular imports

In addition to handling import paths, the main entry path is also rewritten to the correct AEM ClientLib path to ensure ES module imports behave correctly in AEM.
