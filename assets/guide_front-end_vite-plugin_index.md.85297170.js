import{_ as a,c as n,a as s,b as t,t as l,d as o,o as p}from"./app.6acac23c.js";const v=JSON.parse('{"title":"Vite Plugin","description":"","frontmatter":{"title":"Vite Plugin"},"headers":[{"level":2,"title":"Solving Challenges","slug":"solving-challenges"},{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Using The Plugin","slug":"using-the-plugin"},{"level":2,"title":"Configuration","slug":"configuration"},{"level":3,"title":"Plugin options","slug":"plugin-options"},{"level":3,"title":"Content path examples","slug":"content-path-examples"},{"level":2,"title":"React Support","slug":"react-support"}],"relativePath":"guide/front-end/vite-plugin/index.md","lastUpdated":1656731217000}'),i={name:"guide/front-end/vite-plugin/index.md"},r={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(`<p>Evolving AEM Vite has always and is a primary goal of the project. To ensure AEM Vite keeps up with ever-changing updates and feature inclusions within the Vite ecosystem we are providing a plugin that solves many challenges.</p><h2 id="solving-challenges" tabindex="-1">Solving Challenges <a class="header-anchor" href="#solving-challenges" aria-hidden="true">#</a></h2><p>The Java side of AEM Vite works quite well in small doses but it has some flaws which makes maintaining the replacement logic complex and time-consuming. Alongside this you would also need to refresh the page 2-to-3 times before AEM Vite would kick in due to how the internal HTTP requests are handled.</p><p>In addition to these points, A Vite specific plugin also aims to bring some boilerplate with it which will ultimately remove the need for complex configurations across projects.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>Getting started is quick and simple. Run the below command to install the Vite AEM plugin.</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --save-dev @aem-vite/vite-aem-plugin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or; yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add -D @aem-vite/vite-aem-plugin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or; pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm add -D @aem-vite/vite-aem-plugin</span></span>
<span class="line"></span></code></pre></div><h2 id="using-the-plugin" tabindex="-1">Using The Plugin <a class="header-anchor" href="#using-the-plugin" aria-hidden="true">#</a></h2><p>This step couldn&#39;t be more simple. Run either the <code>serve</code> or <code>build</code> command for Vite and everything will work like magic.</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">vite serve</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># or</span></span>
<span class="line"><span style="color:#A6ACCD;">vite build</span></span>
<span class="line"></span></code></pre></div><p>By default <code>@aem-vite/vite-aem-plugin</code> enforces strict port mode when using the Vite DevServer. This will automatically jump to the next available port if <code>3000</code> is unavailable.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><div class="language-ts"><span class="copy"></span><div class="highlight-lines"><div class="highlighted">\xA0</div><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br><br></div><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">viteForAem</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@aem-vite/vite-aem-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ... all other plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">viteForAem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">contentPaths</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;content path(s)&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">publicPath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/etc.clientlibs/&lt;project&gt;/clientlibs/clientlib-site</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Please refer to the <a href="/guide/front-end/vite/">vite configuration</a> and <a href="/guide/front-end/dynamic-imports/">dynamic imports</a> documentation for more information about the <code>publicPath</code> option.</p></div><h3 id="plugin-options" tabindex="-1">Plugin options <a class="header-anchor" href="#plugin-options" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">Property Name</th><th>Type</th><th>Required</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>aem</strong><br><small>Set the hostname and port of your AEM instance.</small></td><td><code>object</code></td><td>No</td></tr><tr><td style="text-align:left;"><strong>contentPaths</strong><br><small>A list of content paths (excluding <code>/content/</code>) to match ClientLib paths in.</small></td><td><code>array</code></td><td>Yes</td></tr><tr><td style="text-align:left;"><strong>publicPath</strong><br><small>The AEM proxy path to your ClientLib directory.</small></td><td><code>string</code></td><td>Yes</td></tr><tr><td style="text-align:left;"><strong>rewriterOptions</strong><br><small>Enables the <code>@aem-vite/import-rewriter</code> plugin</small></td><td><code>object</code></td><td>No</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">Note for <code>rewriterOptions</code> configuration</p><p>The <code>publicPath</code> option is automatically forwarded onto the import rewriter from <code>@aem-vite/vite-aem-plugin</code>.</p></div><h3 id="content-path-examples" tabindex="-1">Content path examples <a class="header-anchor" href="#content-path-examples" aria-hidden="true">#</a></h3><p>The following are example paths in AEM:</p><ul><li><code>/content/&lt;project_one&gt;/en/au</code></li><li><code>/content/&lt;project_one&gt;/en/us</code></li><li><code>/content/&lt;project_one&gt;/en/es</code></li><li><code>/content/&lt;project_two&gt;/en/us/support</code></li></ul><p>There are two ways that path matching is applied:</p><ol><li>Partially using the root content node name</li><li>Partially using a path segment below the root node</li></ol><p>To match only the <strong>US</strong> path in project one and everything in <strong>Project Two</strong> we can use the following list.</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">contentPaths</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;project_one&gt;/en/us</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;project_two&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Slashes in paths</p><p>Adding slashes to the start or end of these paths will cause in the proxy matcher to fail and respond with 404 page served by Vite.</p></div><h2 id="react-support" tabindex="-1">React Support <a class="header-anchor" href="#react-support" aria-hidden="true">#</a></h2><p>Whenever the <code>@vitejs/plugin-react</code> plugin is detected, the AEM Vite plugin will automatically inject the React fast refresh script.</p>`,27);function h(e,g,y,u,D,m){return p(),n("div",null,[s("h1",r,[t(l(e.$frontmatter.title)+" ",1),c]),d])}var f=a(i,[["render",h]]);export{v as __pageData,f as default};