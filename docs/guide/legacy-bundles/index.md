---
title: What are Legacy Bundles?
---

# {{ $frontmatter.title }}

A legacy bundle is code that wasn't compiled as an ES module. This is quite common in the enterprise space where browsers such as IE11 are still required in some capacity.

## Reasons for supporting them

1. Your client or business may have intranet websites that rely on older browsers
2. You don't have knowlegde of which devices you need to support
3. You aren't ready to solely adopt ES modules yet _(most likely)_

## How do I build them for AEM?

This question isn't strictly related to AEM, more so Vite. Please refer to the [browser compatibility](https://vitejs.dev/guide/build.html#browser-compatibility) section of Vite's documentation which explains how to add legacy support to your bundles.
