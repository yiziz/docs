---
title: Vite Configuration
---

# {{ $frontmatter.title }}

Each and every project will be unique regarding structure, expected outputs and general development needs. The following is intended to provide coverage for general expectations using Adobe's AEM Archetype as a reference.

## Example Config

Below is an example `vite.config.js` which intentionally uses the `vite-tsconfig-paths` as Adobe have adopted TypeScript in their archetype.

What you can see is the same output structures being used align to the [structure](/guide/front-end/structure/) described previously. Some other things that are also going on:

- Disables brotli compression calculations (saves 2-5 seconds per prod build)
- Disables the `manifest.json` file
- Disables minification when running in **development** mode
- Disables sourcemaps when not using the Vite DevServer

```js
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }) => ({
  build: {
    brotliSize: false,
    manifest: false,
    minify: mode === 'development' ? false : 'terser',
    outDir: 'path/to/output/dir',
    sourcemap: command === 'serve' ? 'inline' : false,

    rollupOptions: {
      output: {
        assetFileNames: '<project>.header/resources/[ext]/[name][extname]',
        chunkFileNames: '<project>.footer/resources/chunks/[name].[hash].js',
        entryFileNames: '<project>.footer/resources/js/[name].js',
      },
    },
  },

  plugins: [tsconfigPaths()],
}));
```

### Specific build modes

By default Vite runs its DevServer in **development** mode but builds always run in **production** which is fine for non-AEM projects but AEM needs more control. The above configuration enables us to do things like the below.

```shell
vite build --mode development
# or
vite build --mode production
```
