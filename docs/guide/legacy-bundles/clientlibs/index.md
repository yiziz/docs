---
title: ClientLibs Support
---

# {{ $frontmatter.title }}

A simple solution to this problem would be to have another separate ClientLib structure containing only `js.txt`. Each ClientLib directory would have a unique name as outlined below.

| ClientLib Name       | `esModule` | `noModule` | `css.txt` | `js.txt` |
| -------------------- | ---------- | ---------- | --------- | -------- |
| `<clientlib>.es`     | `true`     | `false`    | Yes       | Yes      |
| `<clientlib>.legacy` | `false`    | `true`     | No        | Yes      |

There is no real importance to how you name your ClientLibs as the order of how they get output is determined by your template policy.

## Update your template policy

It is important that in the above example that `<clientlib>.es` is generated first in the page source. To ensure this is the case, make sure your template policy is similar to the below.

```xml
<page jcr:primaryType="nt:unstructured">
  <policy
    clientlibs="[<clientlib>.es,<clientlib>.legacy]"
    clientlibsJsHead="[]">
  </policy>
</page>
```

This will vary from project-to-project, use the above as a guide only.

## How to test that things work?

Open DevTools in your browser and navigate to the Network tab (or equivalent). Refresh the page and filter by JS files. You should observe ClientLibs loading from `<clientlib>.es` when using a modern browser otherwise `<clientlib>.legacy`.

## What if I don't want ES modules?

Easy!

Simply have Vite build only legacy bundles by using the [`build.target` config option](https://vitejs.dev/config/#build-target). From the above, simply omit `<clientlib>.es` and ensure your `<clientlib>.legacy` ClientLib contains both a `css.txt` and `js.txt` file.

Both the `esModule` and `noModule` properties won't be required in this case since we are no longer working with an ES module.
