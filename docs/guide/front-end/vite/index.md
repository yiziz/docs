---
title: Vite Configuration
---

# {{ $frontmatter.title }}

Each and every project will be unique regarding structure, expected outputs and general development needs. The following is intended to provide coverage for general expectations using Adobe's AEM Archetype as a reference.

## Recommended configuration

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
    outDir: 'dist',
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

See [module imports](../module-imports/) which explains the reasoning behind the rollup `output` structure.

### Specific build modes

By default Vite runs its DevServer in **development** mode but builds always run in **production** which is fine for non-AEM projects but AEM needs more control. The above configuration enables us to do things like the below.

```shell
vite build --mode development
# or
vite build --mode production
```

Now that you can build both development and production bundles, you can toggle between having features such as sourcemaps and console logging if you don't wish to test code outside of Vite's DevServer.

## Source structure

Where your inputs come from isn't important as Vite simply consumes anything you provide to it. It is, however, recommended that you consider your main website CSS and JavaScript separate entries.

The below example demonsrates this but you will need to keep in mind that the `input` keys should be unqiue otherwise rollup will automatically append an number to the end of the filename. See rollup's [input documentation](https://rollupjs.org/guide/en/#input) for more information.

```js
export default defineConfig(() => ({
  build: {
    rollupOptions: {
      input: {
        app: 'src/main/webpack/css/app.scss',
        bundle: 'src/main/webpack/js/app.ts',
      },
    },
  },
}));
```

## Plugins

Please refer to Vite's [plugin documentation](https://vitejs.dev/guide/using-plugins.html) for instructions on using plugins in Vite.

## Code output

The process of how your bundled code gets handled shouldn't change if you won't need it to. The design of AEM Vite enables you to use any structure you wish but recommends ours for the best compatibility. Tools such as Adobe's `aem-clientlib-generator` will work perfectly fine with AEM Vite as it is executed after a build.

## DevServer

If you want to customise how the Vite DevServer behaves you can do so via Vite's `server` configuration. By default Vite will attempt to start the server on port `3000` but will automatically increment to the next available port if `3000` is already in use. To ensure this doesn't happen, it is recommended to set a more specific port that you don't expect to change.

Please refer to Vite's [server api documention](https://vitejs.dev/config/#server-options) for more information.

```js
export default defineConfig(() => ({
  server: {
    port: 5000,
  },
}));
```
