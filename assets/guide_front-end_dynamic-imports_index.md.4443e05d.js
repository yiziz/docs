import{o as t,c as e,a,b as n,t as s,d as o}from"./app.678b45c3.js";const i='{"title":"Dynamic Imports","description":"","frontmatter":{"title":"Dynamic Imports"},"headers":[{"level":2,"title":"Rollup plugin","slug":"rollup-plugin"},{"level":2,"title":"Configuration","slug":"configuration"},{"level":3,"title":"Properties","slug":"properties"},{"level":2,"title":"How this works","slug":"how-this-works"},{"level":3,"title":"Circular imports","slug":"circular-imports"}],"relativePath":"guide/front-end/dynamic-imports/index.md","lastUpdated":1623590006977}',r={},l={id:"frontmatter-title"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o('<p>Vite uses rollup under the hood which supports dynamic imports just like webpack and other bundlers but it has a small <em>flaw</em>. Well, not so much a flaw but rather a consideration that was never put to thought simply because of how AEM ClientLibs work.</p><p>The import rewriter takes the ES module import paths and converts them into AEM friendly paths automatically.</p><h2 id="rollup-plugin"><a class="header-anchor" href="#rollup-plugin" aria-hidden="true">#</a> Rollup plugin</h2><p>AEM Vite provides a rollup plugin that will rewrite dynamic import paths to your <code>/etc.clientlibs</code> proxy path.</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @aem-vite/import-rewriter\n<span class="token comment"># or; yarn</span>\n<span class="token function">yarn</span> <span class="token function">add</span> -D @aem-vite/import-rewriter\n</code></pre></div><h2 id="configuration"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Getting this plugin configured is really simple, all it requires is the current Vite command and your public path.</p><div class="language-js"><div class="highlight-lines"><div class="highlighted"> </div><br><br><br><br><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><div class="highlighted"> </div><br><br></div><pre><code><span class="token keyword">import</span> aemViteImportRewriter <span class="token keyword">from</span> <span class="token string">&#39;@aem-vite/import-rewriter&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> command <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ... all other plugins before, &#39;aemViteImportRewriter&#39; must be last</span>\n    <span class="token function">aemViteImportRewriter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      command<span class="token punctuation">,</span>\n      publicPath<span class="token operator">:</span> <span class="token string">&#39;/etc.clientlibs/&lt;project&gt;/clientlibs/&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="properties"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3><table><thead><tr><th style="text-align:left;">Property Name</th><th>Type</th><th>Required</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>caching</strong><br><small>Instruct import rewriter how to handle AEM caching</small></td><td><code>object</code></td><td>No</td></tr><tr><td style="text-align:left;"><strong>command</strong><br><small>The type of build Vite is currently executing. This can be: <strong>serve</strong> or <strong>build</strong></small></td><td><code>string</code></td><td>Yes</td></tr><tr><td style="text-align:left;"><strong>publicPath</strong><br><small>The AEM proxy path to your ClientLibs directory</small></td><td><code>string</code></td><td>Yes</td></tr></tbody></table><h4 id="caching"><a class="header-anchor" href="#caching" aria-hidden="true">#</a> Caching</h4><table><thead><tr><th style="text-align:left;">Property Name</th><th>Type</th><th>Required</th><th>Default</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>enabled</strong><br><small>Should caching support be utilised during builds?</small></td><td><code>boolean</code></td><td>Yes</td><td>-</td></tr><tr><td style="text-align:left;"><strong>keyFormat</strong><br><small>Long term cache key format</small></td><td><code>boolean</code></td><td>Yes</td><td><code>lc-%s-lc</code></td></tr><tr><td style="text-align:left;"><strong>minification</strong><br><small>Should <code>.min</code> be added to the import path?</small></td><td><code>boolean</code></td><td>No</td><td><code>false</code></td></tr></tbody></table><h2 id="how-this-works"><a class="header-anchor" href="#how-this-works" aria-hidden="true">#</a> How this works</h2><p>Under the hood <code>es-module-lexer</code> is used to parse the rollup chunk source and identifies all of the <code>import</code> statements. Once identified, they are parsed and all instances that use path patterns such as <code>./</code> or <code>../</code> will get replaced with <code>publicPath</code> configured in your plugin configuration.</p><p>By rewriting the imports we solve another issue and that is we prevent Vite adding duplicate imports via its dynamic import polyfill transformer.</p><h3 id="circular-imports"><a class="header-anchor" href="#circular-imports" aria-hidden="true">#</a> Circular imports</h3><p>In addition to handling import paths, the main entry path is also rewritten to the correct AEM ClientLib path to ensure ES module imports behave correctly in AEM.</p>',17);r.render=function(o,i,r,c,h,u){return t(),e("div",null,[a("h1",l,[p,n(" "+s(o.$frontmatter.title),1)]),d])};export default r;export{i as __pageData};
