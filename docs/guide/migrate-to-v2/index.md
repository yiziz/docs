---
title: Migrate to v2.x
---

# {{ $frontmatter.title }}

The v2.x releases and above now brings full support for circular imports along with cache support in ClientLib paths. To get the most out of AEM Vite, ensure you update your POM version to `2.0.3` or greater and `@aem-vite/import-rewriter` to `2.0.0` or greater.

## Circular imports

ES modules bring the ability to import certain exports from an already loaded module without the browser needing to parse it again. This brings vast performance improvements to JavaScript performance, but AEM doesn't natively support this.

AEM uses ClientLibs which are a custom combinator that reads inputs and creates a single output. A core problem of such a solution is it prevents us from being able to experience such technologies. But with AEM Vite's import rewriter plugin for Vite, this is now automatically handled for you.

### What does import rewriter do?

The AEM Vite import rewriter plugin will scan through your rollup entry configuration and identify the main JavaScript entry (when possible). Upon finding a valid entry, import rewriter will then look through any generated chunks and replace the `import` path with the correct AEM ClientLib path.

This is a very important step in bringing additional modern development technologies into AEM without the need of working it on per project.

### js.txt support

AEM Vite only supports a single entry in the `js.txt` file. If you need multiple entry files, you will need to create a new ClientLib as this is a limitation of AEM ClientLib's - rather than AEM Vite.

## Caching

AEM as a Cloud Service (AEMaaCS) brings native support for long term cache support which was not previously supported by AEM Vite. Through some careful plotting, AEM Vite is able to generate a matching MD5 checksum when enabled in the import rewriter.

### AEM as a Cloud Service

AEM Vite is setup by default to use the cache key format for AEMaaCS. All you need to do is configure the `caching` property. Please see the [caching configuration](../front-end/dynamic-imports/#caching) for more information.

### ACS Commons Versioned ClientLibs

In addition to supporting AEMasCS, AEM Vite also supports the ACS Commons Versioned ClientLibs plugin. Configuring support in your project is as simple as adding the `keyFormat` property with an empty string value to your [caching configuration](../front-end/dynamic-imports/#caching).
