import{_ as t,c as s,a as e,b as n,t as a,d as r,o as l}from"./app.e3d84d55.js";const f=JSON.parse('{"title":"Configuration","description":"","frontmatter":{"title":"Configuration"},"headers":[{"level":2,"title":"OSGI configuration","slug":"osgi-configuration"},{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"Automatic injection?","slug":"automatic-injection"},{"level":3,"title":"ClientLib categories","slug":"clientlib-categories"},{"level":3,"title":"Content paths","slug":"content-paths"},{"level":3,"title":"Manual injection selector","slug":"manual-injection-selector"},{"level":3,"title":"DevServer protocol","slug":"devserver-protocol"},{"level":3,"title":"DevServer hostname","slug":"devserver-hostname"},{"level":3,"title":"DevServer Docker","slug":"devserver-docker"},{"level":3,"title":"DevServer port","slug":"devserver-port"},{"level":3,"title":"DevServer entrypoints","slug":"devserver-entrypoints"},{"level":3,"title":"Using React?","slug":"using-react"},{"level":2,"title":"Example configuration","slug":"example-configuration"},{"level":2,"title":"Remote debugging","slug":"remote-debugging"}],"relativePath":"guide/backend/configuration/index.md","lastUpdated":1656664739000}'),c={name:"guide/backend/configuration/index.md"},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(`<div class="warning custom-block"><p class="custom-block-title">Deprecation Notice</p><p>Please be aware that the ClientLib filtering functionality in the AEM Vite plugin for AEM is now deprecated and will be discontinued in the near future. A Vite specifc plugin will be made available that enhances the local development experience. See <a href="./../../front-end/vite-plugin/">Vite Plugin</a> for additional information.</p></div><p>AEM Vite provides a factory configuration which enables multiple different front end setups to be used at the same time. This means that you can work on multiple codebases without ever having to stop and switch between configurations.</p><h2 id="osgi-configuration" tabindex="-1">OSGI configuration <a class="header-anchor" href="#osgi-configuration" aria-hidden="true">#</a></h2><p>Within your projects OSGI configuration folder, create a new file called:</p><blockquote><p>dev.aemvite.aem.impl.ViteDevServerConfigImpl-project.cfg.json</p></blockquote><p>Because AEM Vite allows factories, you can create as many projects as you would like and you only need to replace <code>project</code> with something unqiue.</p><div class="info custom-block"><p class="custom-block-title">.cfg.json not working?</p><p>If using <code>.cfg.json</code> doesn&#39;t work for you, switch to the XML format <code>.config.xml</code>. Read more about about creating <a href="https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/deploying/configuring-osgi.html?lang=en" target="_blank" rel="noopener noreferrer">OSGI configuration</a> files.</p></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="automatic-injection" tabindex="-1">Automatic injection? <a class="header-anchor" href="#automatic-injection" aria-hidden="true">#</a></h3><p>Use automatic injection which detects Vite&#39;s DevServer and strips away any defined ClientLibs along with injecting Vite&#39;s client module.</p><p><strong>Key:</strong> <code>automatic.injection</code><br><strong>Type:</strong> <code>Boolean</code><br><strong>Default:</strong> <code>true</code></p><h3 id="clientlib-categories" tabindex="-1">ClientLib categories <a class="header-anchor" href="#clientlib-categories" aria-hidden="true">#</a></h3><p>A list of ClientLib categories that will be used to strip certain CSS/JS from the page.</p><p><strong>Key:</strong> <code>clientlib.categories</code><br><strong>Type:</strong> <code>String[]</code></p><h3 id="content-paths" tabindex="-1">Content paths <a class="header-anchor" href="#content-paths" aria-hidden="true">#</a></h3><p>A list of content paths where injection should occur.</p><p><strong>Key:</strong> <code>content.paths</code><br><strong>Type:</strong> <code>String[]</code></p><h3 id="manual-injection-selector" tabindex="-1">Manual injection selector <a class="header-anchor" href="#manual-injection-selector" aria-hidden="true">#</a></h3><p>A custom selector to use when automatic injection is disabled. You can enable AEM Vite by adding your custom selector to the content URL. E.g.</p><blockquote><p>/content/project/mypage.vite.html</p></blockquote><p><strong>Key:</strong> <code>manual.injection.selector</code><br><strong>Type:</strong> <code>String</code><br><strong>Default:</strong> <code>vite</code></p><h3 id="devserver-protocol" tabindex="-1">DevServer protocol <a class="header-anchor" href="#devserver-protocol" aria-hidden="true">#</a></h3><p>Which protocol should be used to contact Vite&#39;s DevServer?</p><p><strong>Key:</strong> <code>devserver.protocol</code><br><strong>Type:</strong> <code>String</code><br><strong>Accepts:</strong> <code>http</code> or <code>https</code><br><strong>Default:</strong> <code>http</code></p><h3 id="devserver-hostname" tabindex="-1">DevServer hostname <a class="header-anchor" href="#devserver-hostname" aria-hidden="true">#</a></h3><p>Which hostname should be used to contact Vite&#39;s DevServer?</p><p><strong>Key:</strong> <code>devserver.hostname</code><br><strong>Type:</strong> <code>String</code><br><strong>Default:</strong> <code>localhost</code></p><h3 id="devserver-docker" tabindex="-1">DevServer Docker <a class="header-anchor" href="#devserver-docker" aria-hidden="true">#</a></h3><p>Enable this option if your AEM instance is running within Docker. This will ensure that the DevServer check works correctly via <code>http://host.docker.internal</code>.</p><p><strong>Key:</strong> <code>devserver.docker</code><br><strong>Type:</strong> <code>Boolean</code><br><strong>Default:</strong> <code>false</code></p><h3 id="devserver-port" tabindex="-1">DevServer port <a class="header-anchor" href="#devserver-port" aria-hidden="true">#</a></h3><p>Which port should be used to contact Vite&#39;s DevServer?</p><p><strong>Key:</strong> <code>devserver.port</code><br><strong>Type:</strong> <code>Integer</code><br><strong>Default:</strong> <code>3000</code></p><h3 id="devserver-entrypoints" tabindex="-1">DevServer entrypoints <a class="header-anchor" href="#devserver-entrypoints" aria-hidden="true">#</a></h3><p>A list of entry points to inject onto the page.</p><p><strong>Key:</strong> <code>devserver.entrypoints</code><br><strong>Type:</strong> <code>String[]</code></p><h3 id="using-react" tabindex="-1">Using React? <a class="header-anchor" href="#using-react" aria-hidden="true">#</a></h3><p>Enable this option is enabled when using React to ensure things work correctly. Ensure you install the <code>@vitejs/plugin-react-refresh</code> Vite plugin too which ensures HMR works correctly.</p><p><strong>Key:</strong> <code>using.react</code><br><strong>Type:</strong> <code>Boolean</code><br><strong>Default:</strong> <code>false</code></p><h2 id="example-configuration" tabindex="-1">Example configuration <a class="header-anchor" href="#example-configuration" aria-hidden="true">#</a></h2><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">automatic.injection</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">clientlib.categories</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;project&gt;.base</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">content.paths</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/content/&lt;project&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">manual.injection.selector</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devserver.protocol</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devserver.hostname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devserver.docker</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devserver.port</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devserver.entrypoints</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/js/main.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">using.react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="remote-debugging" tabindex="-1">Remote debugging <a class="header-anchor" href="#remote-debugging" aria-hidden="true">#</a></h2><p>It is possible to have AEM Vite installed on a non-local environment which opens up the possiblity of remote debugging.</p><p>This &quot;feature&quot; is a game-changer for AEM as it provides a simple way of debugging code locally while testing it against a real environment. The simpliest way of achieving this is by using a service such as ngrok to proxy your local Vite DevServer. Within your remote AEM environment, navigate to <strong>/system/console/configMgr</strong> and update the <code>ViteDevServerConfigImpl</code> configuration protocol, hostname and port if required to your proxy.</p><p>Once setup, visit any page using your configured ClientLibs and you will see your local Vite DevServer being injected.</p>`,45);function u(o,g,h,D,y,v){return l(),s("div",null,[e("h1",i,[n(a(o.$frontmatter.title)+" ",1),p]),d])}var b=t(c,[["render",u]]);export{f as __pageData,b as default};
