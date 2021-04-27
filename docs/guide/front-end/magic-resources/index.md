---
title: Magic Resources
---

# {{ $frontmatter.title }}

Due to the way Vite generates outputs, `import` statements will become relative which in the context of AEM won't work. Lets say that we have a ClientLib located at:

> /etc.clientlibs/project/clientlibs/my-clientlib.js

Within `my-clientlib.js` lets assume that a module by the name of `modulea.js` needs to be imported by is been requested using:

> ../../resources/modulea.js

What you will see in your browser is a 404 request error for `modulea.js` because the request URI will end up looking something like:

> /etc.clientlibs/project/resources/modulea.js
