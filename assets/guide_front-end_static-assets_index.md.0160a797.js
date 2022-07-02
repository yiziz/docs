import{_ as e,c as n,a as s,b as o,t,d as l,o as p}from"./app.6acac23c.js";const f=JSON.parse('{"title":"Static Assets","description":"","frontmatter":{"title":"Static Assets"},"headers":[{"level":2,"title":"Importing Static Assets","slug":"importing-static-assets"},{"level":2,"title":"Usage with React","slug":"usage-with-react"},{"level":2,"title":"Known Issues","slug":"known-issues"}],"relativePath":"guide/front-end/static-assets/index.md","lastUpdated":1656731217000}'),r={name:"guide/front-end/static-assets/index.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),D=l(`<p>Prior to Vite <code>2.6</code> there was no way to resolve static assets in JavaScript and CSS without some clunky workarounds. However, as of <code>2.6</code> and greater this is fixed.</p><h2 id="importing-static-assets" tabindex="-1">Importing Static Assets <a class="header-anchor" href="#importing-static-assets" aria-hidden="true">#</a></h2><p>Based on where you set your <code>publicDir</code> will depend on the base path, but for this we will assume it is <code>src/assets</code>.</p><p>To include an asset in both JavaScript and CSS we can do the following:</p><div class="language-scss"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@font-face</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Open Sans</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> normal</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">src</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">local</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/src/assets/fonts/open-sans/open-sans-v27-latin-300.woff2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">woff2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/src/assets/fonts/open-sans/open-sans-v27-latin-300.woff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">woff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="usage-with-react" tabindex="-1">Usage with React <a class="header-anchor" href="#usage-with-react" aria-hidden="true">#</a></h2><p>When using assets such as SVG&#39;s with React the path will become relative to the assets directory. The reason for this is how Vite&#39;s React plugin handles static assets by converting them into components as required. For instance, if we have an asset called <code>vue-logo.svg</code> we would import it using the below.</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VueLogo </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../../assets/vue-logo.svg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>The above example assumes where your React component lives so please update it to reflect your project structure.</p><h2 id="known-issues" tabindex="-1">Known Issues <a class="header-anchor" href="#known-issues" aria-hidden="true">#</a></h2><p>The only current issue known to us is a warning that appears in the terminal output for Vite asset transformations. This occurs because we&#39;re including <code>/src</code> in the path which when using Vite standalone isn&#39;t required. Prepending <code>/src</code> is required for AEM projects as it enforces the correct processing of such assets during <code>build</code> tasks.</p>`,11);function y(a,F,d,h,u,C){return p(),n("div",null,[s("h1",c,[o(t(a.$frontmatter.title)+" ",1),i]),D])}var g=e(r,[["render",y]]);export{f as __pageData,g as default};