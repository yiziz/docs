import{_ as i,c as a,a as e,b as r,t as o,d as n,o as s}from"./app.c73c0345.js";const y='{"title":"Migrate to v2.x","description":"","frontmatter":{"title":"Migrate to v2.x"},"headers":[{"level":2,"title":"Circular imports","slug":"circular-imports"},{"level":3,"title":"What does import rewriter do?","slug":"what-does-import-rewriter-do"},{"level":2,"title":"Caching","slug":"caching"},{"level":3,"title":"AEM as a Cloud Service","slug":"aem-as-a-cloud-service"},{"level":3,"title":"ACS Commons Versioned ClientLibs","slug":"acs-commons-versioned-clientlibs"},{"level":2,"title":"Additional notes","slug":"additional-notes"},{"level":3,"title":"js.txt support","slug":"js-txt-support"}],"relativePath":"guide/migrate-to-v2/index.md","lastUpdated":1655129411000}',d={name:"guide/migrate-to-v2/index.md"},l={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=n('<p>The v2.x releases and above now brings full support for circular imports along with cache support in ClientLib paths. To get the most out of AEM Vite, ensure you update your POM version to <code>2.0.3</code> or greater and <code>@aem-vite/import-rewriter</code> to <code>2.0.0</code> or greater.</p><h2 id="circular-imports" tabindex="-1">Circular imports <a class="header-anchor" href="#circular-imports" aria-hidden="true">#</a></h2><p>ES modules bring the ability to import certain exports from an already loaded module without the browser needing to parse it again. This brings vast improvements to JavaScript runtime performance, but AEM doesn&#39;t natively support this behaviour.</p><p>AEM uses ClientLibs which are a custom combinator that reads inputs, and creates a single output. A core problem of such a solution is it prevents us from being able to experience ES modules as intended. But with AEM Vite&#39;s import rewriter plugin for Vite \u2013 this is now automatically handled for you.</p><h3 id="what-does-import-rewriter-do" tabindex="-1">What does import rewriter do? <a class="header-anchor" href="#what-does-import-rewriter-do" aria-hidden="true">#</a></h3><p>The AEM Vite import rewriter plugin will scan through your rollup entry configuration and identify the main JavaScript entry (when possible). Upon finding a valid entry, import rewriter will then look through any generated chunks and replace the <code>import</code> path with the correct AEM ClientLib path.</p><p>This is a very important step in bringing additional modern technologies into AEM without the need of doing it per project.</p><h2 id="caching" tabindex="-1">Caching <a class="header-anchor" href="#caching" aria-hidden="true">#</a></h2><p>AEM as a Cloud Service (AEMaaCS) brings native support for long term cache support which was not previously supported by AEM Vite. Through some careful plotting, AEM Vite is able to generate a matching MD5 checksum when enabled in the import rewriter.</p><h3 id="aem-as-a-cloud-service" tabindex="-1">AEM as a Cloud Service <a class="header-anchor" href="#aem-as-a-cloud-service" aria-hidden="true">#</a></h3><p>AEM Vite is setup by default to use the cache key format for AEMaaCS. All you need to do is configure the <code>caching</code> property. Please see the <a href="./../front-end/dynamic-imports/#caching">caching configuration</a> for more information.</p><h3 id="acs-commons-versioned-clientlibs" tabindex="-1">ACS Commons Versioned ClientLibs <a class="header-anchor" href="#acs-commons-versioned-clientlibs" aria-hidden="true">#</a></h3><p>In addition to supporting AEMaaCS, AEM Vite also supports the ACS Commons Versioned ClientLibs plugin. Configuring support in your project is as simple as adding the <code>keyFormat</code> property with an empty string value to your <a href="./../front-end/dynamic-imports/#caching">caching configuration</a>.</p><h2 id="additional-notes" tabindex="-1">Additional notes <a class="header-anchor" href="#additional-notes" aria-hidden="true">#</a></h2><p>There are some additional things to note so please read the below carefully.</p><h3 id="js-txt-support" tabindex="-1">js.txt support <a class="header-anchor" href="#js-txt-support" aria-hidden="true">#</a></h3><p>AEM Vite only supports a single entry in the <code>js.txt</code> file. If you need multiple entry files, you will need to create a new ClientLib as this is a limitation of AEM ClientLib&#39;s - rather than AEM Vite.</p>',17);function p(t,u,m,g,f,b){return s(),a("div",null,[e("h1",l,[r(o(t.$frontmatter.title)+" ",1),c]),h])}var w=i(d,[["render",p]]);export{y as __pageData,w as default};
