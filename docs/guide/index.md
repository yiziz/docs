---
title: Overview
---

# {{ $frontmatter.title }}

## What is AEM Vite?

AEM Vite – also referred to as Vite for AEM – is a powerful plugin that enables a simple and modern development experience when working without needing to spend hours messing around in configuration files.

AEM Vite uses [Vite](https://vitejs.dev), if you didn't catch that already, which provdes one of the fastest build experiences and will make your AEM development journey all the more easier.

## How does it work?

Through pure magic :star2:!

Seriously though, AEM Vite uses a Sling request filter that:

- Automatically identifies if a request matches the [OSGI configuration](./configuration/)
- Detects when the Vite DevServer is running
- Finds and strips away your desired AEM ClientLibs
- Injects the Vite client scripts :100:

All of this happens in real-time and is 100% transparent. This means less time deploying front end code and more time developing.

## AEM support

AEM 6.5.7+ and AEMaaCS are fully supported.

## Front end framework support

AEM Vite supports all of the [currently available](https://vitejs.dev/guide/backend-integration.html) DevServer experiences.

For more information about HMR support for your framework, refer to Vite's [HMR](https://vitejs.dev/guide/features.html#hot-module-replacement) documentation.
