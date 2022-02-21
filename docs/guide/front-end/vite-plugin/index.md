---
title: Vite Plugin
---

# {{ $frontmatter.title }}

Evolving AEM Vite has always and is a primary goal of the project. To ensure AEM Vite keeps up with ever-changing updates and feature inclusions within the Vite ecosystem we are providing a plugin that solves many challenges.

## Solving Challenges

The Java side of AEM Vite works quite well in small doses but it has some flaws which makes maintaining the replacement logic complex and time-consuming. Alongside this you would also need to refresh the page 2-to-3 times before AEM Vite would kick in due to how the internal HTTP requests are handled.

In addition to these points, A Vite specific plugin also aims to bring some boilerplate with it which will ultimately remove the need for complex configurations across projects.

## Installation

::: danger Prerelease version
Please be aware that the current public release is a prerelease version and is not intended for production use. If you do wish to use it you can raise [issues in GitHub repo](https://github.com/aem-vite/vite-aem-plugin/issues).
:::

Getting started is quick and simple. Run the below command to install the Vite AEM plugin.

```bash
npm install --save-dev @aem-vite/vite-aem-plugin
# or; yarn
yarn add -D @aem-vite/vite-aem-plugin
```

## Using The Plugin

This step couldn't be more simple. Run either the `serve` or `build` command for Vite and everything will work like magic.

```bash
vite serve
# or
vite build
```

By default `@aem-vite/vite-aem-plugin` enforces strict port mode when using the Vite DevServer which will automatically jump to the next available port if `3000` is unavailable.

## Configuration

```ts{1,6-9}
import { viteForAem } from '@aem-vite/vite-aem-plugin';

export default defineConfig(() => ({
  plugins: [
    // ... all other plugins
    viteForAem({
      contentPaths: ['<content path(s)>'],
      publicPath: '/etc.clientlibs/<project>/clientlibs/clientlib-site',
    }),
  ],
}));
```

### Plugin options

| Property Name                                                                                                   | Type     | Required |
| :-------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| **contentPaths**<br><small>A list of content paths (excluding `/content/`) to match ClientLib paths in.</small> | `array`  | Yes      |
| **publicPath**<br><small>The AEM proxy path to your ClientLib directory.</small>                                | `string` | Yes      |
| **rewriterOptions**<br><small>Enables the `@aem-vite/import-rewriter` plugin</small>                            | `object` | No       |

::: info rewriterOptions configuration
The `publicPath` option is automatically forwarded onto the import rewriter from `@aem-vite/vite-aem-plugin`.
:::

### Content path examples

The following are example paths in AEM:

- `/content/<project_one>/en/au`
- `/content/<project_one>/en/us`
- `/content/<project_one>/en/es`
- `/content/<project_two>/en/us/support`

There are two ways that path matching is applied:

1. Partially using the root content node name
2. Partially using a path segment below the root node

To match only the **US** path in project one and everything in **Project Two** we can use the following list.

```ts
{
  contentPaths: [
    '<project_one>/en/us',
    '<project_two>',
  ],
}
```

::: warning Slashes in paths
Adding slashes to the start or end of these paths will cause in the proxy matcher to fail and respond with 404 page served by Vite.
:::

## React Support

Whenever the Vite React plugin is detected the Vite AEM plugin will automatically inject the React fast refresh script.
