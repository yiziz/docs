---
title: ClientLibs Support
---

# {{ $frontmatter.title }}

A simple solution to this problem would be to have another separate ClientLib structure containing only `js.txt`. Each ClientLib directory would have a unique name as outlined below.

| ClientLib Category      | `esModule` | `noModule` | `css.txt` | `js.txt` |
| ----------------------- | ---------- | ---------- | --------- | -------- |
| `clientlib-site.es`     | `true`     | `false`    | Yes       | Yes      |
| `clientlib-site.legacy` | `false`    | `true`     | No        | Yes      |

There is no real importance to how you name your ClientLibs as the order of how they get output is determined by your template policy.

## Update your template policy

It is important that in the above example that `clientlib-site.es` is generated first in the page source. To ensure this is the case, make sure your template policy is similar to the below.

```xml
<page jcr:primaryType="nt:unstructured">
  <policy
    jcr:primaryType="nt:unstructured"
    sling:resourceType="wcm/core/components/policy/policy"
    clientlibs="[clientlib-site.es,clientlib-site.legacy]"
    clientlibsJsHead="[clientlib-site.es,clientlib-site.legacy]"/>
</page>
```

This will vary from project-to-project, use the above as a guide only.

## How to test that things work?

Open DevTools in your browser and navigate to the Network tab (or equivalent). Refresh the page and filter by JS files. You should observe ClientLibs loading from `clientlib-site.es` when using a modern browser otherwise `clientlib-site.legacy`.

## What if I don't want ES modules?

Easy!

Simply have Vite build only legacy bundles by using the [`build.target`](https://vitejs.dev/config/#build-target) config option. From the above, simply omit `clientlib-site.es` and ensure your `clientlib-site.legacy` ClientLib contains both a `css.txt` and `js.txt` file.

Both the `esModule` and `noModule` properties won't be required in this case since we are no longer working with an ES module.
