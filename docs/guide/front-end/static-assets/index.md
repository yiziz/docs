---
title: Static Assets
---

# {{ $frontmatter.title }}

Vite handles static assets natively which is great because it eliminates the need for clunky configurations and maintenance. A downside to how it does manage assets, however, is by default it serves them using an absolute path and without an origin. When using the DevServer, this results in your static assets being loaded from AEM rather than Vite.

To overcome this, the existing `@aem-vite/import-rewriter` plugin has been updated to include an additional rewriter for CSS files.

## Rollup plugin

To get started, simply add `@aem-vite/import-rewriter` as a dependency in your project.

```bash
npm install --save-dev @aem-vite/import-rewriter
# or; yarn
yarn add -D @aem-vite/import-rewriter
```

## Configuration

Getting this plugin configured is really simple, all it requires is the local assets path and your ClientLib public path.

As can be seen below, `publicPath` checks the Vite `command` that was executed and applies either the Vite DevServer URL or the AEM CLientLib public path. This is important as when using the DevServer, a clear distintion is needed to ensure Vite is serving assets rather than AEM.

```js{1,6-13}
import { aemViteCSSImportRewriter } from '@aem-vite/import-rewriter';

export default defineConfig(({ command }) => ({
  plugins: [
    // ... all other plugins before, 'aemViteCSSImportRewriter' must be last
    {
      ...aemViteCSSImportRewriter({
        assetsBasePath: '/src/assets',
        publicPath: command === 'serve' ? 'http://localhost:3000/assets' : '/etc.clientlibs/<project>/clientlibs/',
      }),

      enforce: 'post',
    },
  ],
}));
```

### Properties

| Property Name                                                                                                                      | Type     | Required |
| :--------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| **assetsBasePath**<br><small>The absolute path used in your CSS to load static assets.</small>                                     | `string` | Yes      |
| **publicPath**<br><small>The AEM proxy path to your ClientLibs directory; or the Vite DevServer path when working locally.</small> | `string` | Yes      |

## How this works

Nothing too complex is going on here, `aemViteCSSImportRewriter` will simply find and replace all instances of the `assetsBasePath` with the provided `publicPath`. This process is extremely quick and occurs during Rollup's `transform` stage which is just before the file is written.

After that, it is all pure magic!
