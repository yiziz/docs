import{_ as a,c as n,a as s,b as l,t as p,d as e,o as t}from"./app.c73c0345.js";const h='{"title":"Permissions","description":"","frontmatter":{"title":"Permissions"},"headers":[{"level":2,"title":"Access control","slug":"access-control"},{"level":2,"title":"rep:policy","slug":"rep-policy"}],"relativePath":"guide/backend/permissions/index.md","lastUpdated":1655129411000}',r={name:"guide/backend/permissions/index.md"},c={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),F=e(`<p>Ensuring the <code>type=&quot;module&quot;</code> attribute is set for ClientLibs is import for AEM Vite to work. AEM Vite provide an authorizable user (<code>aem-vite-clientlibs</code>) that you will need to apply via a <code>rep:policy</code>.</p><h2 id="access-control" tabindex="-1">Access control <a class="header-anchor" href="#access-control" aria-hidden="true">#</a></h2><p>The first thing you will need to do is create a <code>.content.xml</code> file in your ClientLibs folder or the folder that you store your ClientLibs within. Add the following as its contents.</p><div class="language-xml"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#F07178;">xml</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">jcr</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">root</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">jcr</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.jcp.org/jcr/1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">nt</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.jcp.org/jcr/nt/1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">rep</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">internal</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">jcr</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">mixinTypes</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[rep:AccessControllable]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">jcr</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">primaryType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nt:folder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="rep-policy" tabindex="-1">rep:policy <a class="header-anchor" href="#rep-policy" aria-hidden="true">#</a></h2><p>The final step is to allow the AEM Vite <code>aem-vite-clientlibs</code> user access to any ClientLibs under AEM Vite control. Create a file called <code>_rep_policy.xml</code> in the same folder as where you stored your <code>.content.xml</code> file.</p><div class="language-xml"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#F07178;">xml</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">jcr</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">root</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">jcr</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.jcp.org/jcr/1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">rep</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">internal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">jcr</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">primaryType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rep:ACL</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">allow</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">jcr</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">primaryType</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rep:GrantACE</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">rep</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">principalName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">aem-vite-clientlibs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">rep</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">privileges</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{Name}[jcr:all]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">jcr</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">root</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,7);function y(o,i,d,u,C,E){return t(),n("div",null,[s("h1",c,[l(p(o.$frontmatter.title)+" ",1),D]),F])}var m=a(r,[["render",y]]);export{h as __pageData,m as default};
