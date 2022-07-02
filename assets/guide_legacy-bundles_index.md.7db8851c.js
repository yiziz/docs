import{_ as o,c as a,a as e,b as r,t as s,d as i,o as n}from"./app.6acac23c.js";const y=JSON.parse('{"title":"What are Legacy Bundles?","description":"","frontmatter":{"title":"What are Legacy Bundles?"},"headers":[{"level":2,"title":"Reasons for supporting them","slug":"reasons-for-supporting-them"},{"level":2,"title":"How do I build them for AEM?","slug":"how-do-i-build-them-for-aem"}],"relativePath":"guide/legacy-bundles/index.md","lastUpdated":1656731217000}'),d={name:"guide/legacy-bundles/index.md"},l={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=i('<p>A legacy bundle is code that wasn&#39;t compiled as an ES module. This is quite common in the enterprise space where browsers such as IE11 are still required in some capacity.</p><h2 id="reasons-for-supporting-them" tabindex="-1">Reasons for supporting them <a class="header-anchor" href="#reasons-for-supporting-them" aria-hidden="true">#</a></h2><ol><li>Your client or business may have intranet websites that rely on older browsers</li><li>You don&#39;t have knowlegde of which devices you need to support</li><li>You aren&#39;t ready to solely adopt ES modules yet <em>(most likely)</em></li></ol><h2 id="how-do-i-build-them-for-aem" tabindex="-1">How do I build them for AEM? <a class="header-anchor" href="#how-do-i-build-them-for-aem" aria-hidden="true">#</a></h2><p>This question isn&#39;t strictly related to AEM, more so Vite. Please refer to the <a href="https://vitejs.dev/guide/build.html#browser-compatibility" target="_blank" rel="noopener noreferrer">browser compatibility</a> section of Vite&#39;s documentation which explains how to add legacy support to your bundles.</p>',5);function u(t,p,m,_,f,b){return n(),a("div",null,[e("h1",l,[r(s(t.$frontmatter.title)+" ",1),h]),c])}var w=o(d,[["render",u]]);export{y as __pageData,w as default};