import{_ as e,c as s,a as t,b as n,t as o,d as c,o as p}from"./app.4e698dd0.js";const _='{"title":"Structure","description":"","frontmatter":{"title":"Structure"},"headers":[{"level":2,"title":"ClientLibs","slug":"clientlibs"},{"level":3,"title":"Configuration","slug":"configuration"},{"level":2,"title":"Template policy(s)","slug":"template-policy-s"}],"relativePath":"guide/front-end/structure/index.md","lastUpdated":1636353606456}',l={},r={id:"frontmatter-title",tabindex:"-1"},i=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(`__VP_STATIC_START__<p>Considerations about varying project structures have been taken into account as much as possible. Examples can only provide so much detail so the below is what is considered best-case for AEM Vite.</p><h2 id="clientlibs" tabindex="-1">ClientLibs <a class="header-anchor" href="#clientlibs" aria-hidden="true">#</a></h2><p>The ideal structure recommended for ClientLibs is as below.</p><div class="language-"><pre><code>/apps/&lt;project&gt;/clientlibs/core.header/
/apps/&lt;project&gt;/clientlibs/core.header/resources/
/apps/&lt;project&gt;/clientlibs/core.header/css.txt
/apps/&lt;project&gt;/clientlibs/core.header/js.txt
/apps/&lt;project&gt;/clientlibs/core.footer/
/apps/&lt;project&gt;/clientlibs/core.footer/resources/
/apps/&lt;project&gt;/clientlibs/core.footer/js.txt
</code></pre></div><p>A structure such as this allows us to accomplish two key things:</p><ol><li>Separation of header CSS &amp; JS</li><li>Non-blocking JavaScript which loads after the DOM has been loaded</li></ol><h3 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h3><p>Here is how each ClientLib would be configured.</p><table><thead><tr><th>ClientLib Category</th><th>allowProxy</th><th>esModule</th><th>css.txt</th><th>js.txt</th></tr></thead><tbody><tr><td><code>&lt;project&gt;.core.header</code></td><td><code>true</code></td><td><code>true</code></td><td>Yes</td><td>Yes</td></tr><tr><td><code>&lt;project&gt;.core.footer</code></td><td><code>true</code></td><td><code>true</code></td><td>No</td><td>Yes</td></tr></tbody></table><h2 id="template-policy-s" tabindex="-1">Template policy(s) <a class="header-anchor" href="#template-policy-s" aria-hidden="true">#</a></h2><p>Your template policy(s) will also need to be updated to support this structure. The below is an example of how to achieve this.</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>page</span> <span class="token attr-name"><span class="token namespace">jcr:</span>primaryType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nt:unstructured<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>policy</span>
    <span class="token attr-name"><span class="token namespace">jcr:</span>primaryType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nt:unstructured<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">sling:</span>resourceType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wcm/core/components/policy/policy<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">clientlibs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&lt;project&gt;.core.header,&lt;project&gt;.core.footer]<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">clientlibsJsHead</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[&lt;project&gt;.core.header]<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>page</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,12);function d(a,h,k,g,b,m){return p(),s("div",null,[t("h1",r,[n(o(a.$frontmatter.title)+" ",1),i]),u])}var y=e(l,[["render",d]]);export{_ as __pageData,y as default};
