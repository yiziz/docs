---
title: Installation
---

# {{ $frontmatter.title }}

Installation is straightforward and easy!

## Using a release package

The simple method to get AEM Vite installed is by downloading the latest release from GitHub. Download the `aem-vite.all.zip` file, upload it using the CRXDE package manager and install it.

https://github.com/cshawaus/aem-vite/releases/latest

## Using a Maven dependency

::: tip Recommendation
This method is recommended as it ensures everyone working on the project and all environments are using the same version of AEM Vite.
:::

Add the `aem-vite.all` package as a Maven dependency in your apps `pom.xml` file.

```xml
<dependency>
  <groupId>xyz.cshaw</groupId>
  <artifactId>aem-vite.all</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <scope>provided</scope>
</dependency>
```

Next, add the following to your [FileVault](https://jackrabbit.apache.org/filevault/overview.html) configuration; remembering to change the `<target>` path to suit your project structure.

```xml
<embedded>
  <groupId>xyz.cshaw</groupId>
  <artifactId>aem-vite.all</artifactId>
  <type>zip</type>
  <target>/apps/${appId}-packages/application/install</target>
</embedded>
```
