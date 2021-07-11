---
title: Permissions
---

# {{ $frontmatter.title }}

Prior to AEM Vite v2.1.0, the `type` attribute that defined the script as a module was not set due to AEM Vite not having permission to read the ClientLib properties. To ensure things have the correct behaviour, you are required to make your ClientLibs authorizable.

## Access control

The first thing you will need to do is create a `.content.xml` file in your ClientLibs folder or the folder that you store your ClientLibs within. Add the following as its contents.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0" xmlns:rep="internal"
    jcr:mixinTypes="[rep:AccessControllable]"
    jcr:primaryType="nt:folder"/>
```

## rep:policy

The final step is to allow the AEM Vite `aem-vite-clientlibs` user access to any ClientLibs under AEM Vite control. Create a file called `_rep_policy.xml` in the same folder as where you stored your `.content.xml` file.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:rep="internal" jcr:primaryType="rep:ACL">
    <allow
        jcr:primaryType="rep:GrantACE"
        rep:principalName="aem-vite-clientlibs"
        rep:privileges="{Name}[jcr:all]"/>
</jcr:root>
```
