---
title: Structure
---

# {{ $frontmatter.title }}

Considerations about varying project structures have been taken into account as much as possible. Examples can only provide so much detail so the below is what is considered best-case for AEM Vite.

## ClientLibs

The ideal structure recommended for ClientLibs is as below.

```
/apps/<project>/clientlibs/core.header/
/apps/<project>/clientlibs/core.header/resources/
/apps/<project>/clientlibs/core.header/css.txt
/apps/<project>/clientlibs/core.header/js.txt
/apps/<project>/clientlibs/core.footer/
/apps/<project>/clientlibs/core.footer/resources/
/apps/<project>/clientlibs/core.footer/js.txt
```

A structure such as this allows us to accomplish two key things:

1. Separation of header CSS & JS
2. Non-blocking JavaScript which loads after the DOM has been loaded

### Configuration

Here is how each ClientLib would be configured.

| ClientLib Category      | allowProxy | esModule | css.txt | js.txt |
| ----------------------- | ---------- | -------- | ------- | ------ |
| `<project>.core.header` | `true`     | `true`   | Yes     | Yes    |
| `<project>.core.footer` | `true`     | `true`   | No      | Yes    |

## Template policy(s)

Your template policy(s) will also need to be updated to support this structure. The below is an example of how to achieve this.

```xml
<page jcr:primaryType="nt:unstructured">
  <policy
    jcr:primaryType="nt:unstructured"
    sling:resourceType="wcm/core/components/policy/policy"
    clientlibs="[<project>.core.header,<project>.core.footer]"
    clientlibsJsHead="[<project>.core.header]"/>
</page>
```
