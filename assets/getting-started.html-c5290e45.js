import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as u,c as h,a as e,d as l,b as n,w as a,e as c}from"./app-1d4ad656.js";const m={},g=e("p",null,"获取项目代码（以及后续更新项目基础代码说明）",-1),_=e("code",null,"clone",-1),v=e("code",null,"git",-1),b=c(`<ol><li><p>按需修改项目文件夹名称，<code>CMD</code>（或 <code>Git Bash</code> 等其他工具）切换至项目目录</p></li><li><p>修改模板默认远程名称（<code>origin</code> -&gt; <code>template</code>）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">rename</span> origin template
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>新增个人项目 <code>git</code> 远程地址（<code>origin</code>）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin https://git地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>注意：个人项目代码推送的远程地址应该是 <code>origin</code>，不要推送到 <code>template</code>，示例如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin 分支名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>后续若需更新项目基础代码，使用 <code>pull</code> 命令并解决冲突即可（合并代码推荐使用 <code>WebStorm</code> 或其他可视化 <code>git</code> 工具）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull template main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,1),f=e("li",null,[e("p",null,[e("code",null,"download"),n(" 项目代码至本地，后续手动更新项目基础代码")])],-1),k=c("<li><p>使用最新版 <code>HBuilderX</code> 打开项目，进入 <code>manifest.json</code> 文件</p><ul><li><p>基础配置</p><ul><li><p>uni-app应用标识(AppID)：点击 <code>重新获取</code> 按钮以获取自己的AppID，或者在源码视图中填写已有的 <code>appid</code></p></li><li><p>应用名称、应用版本名称、应用版本号：根据实际情况填写</p></li></ul></li><li><p>小程序配置</p><ul><li>小程序AppID：填写自己的小程序AppID，申请方式参考各家小程序官方文档</li></ul></li></ul></li>",1),x=e("code",null,"yarn",-1),A=e("code",null,"npm install",-1),B=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),E=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),n(),e("span",{class:"token function"},"install"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),y=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,"不要混用依赖管理工具，以免造成各种奇怪的问题。")],-1),C={href:"https://uniapp.dcloud.net.cn/quickstart-hx.html#%E8%BF%90%E8%A1%8Cuni-app",target:"_blank",rel:"noopener noreferrer"},I={href:"https://uniapp.dcloud.net.cn/quickstart-hx.html#%E5%8F%91%E5%B8%83uni-app",target:"_blank",rel:"noopener noreferrer"};function D(w,N){const o=t("badge"),p=t("CodeTabs"),d=t("ExternalLinkIcon");return u(),h("div",null,[e("ol",null,[e("li",null,[g,e("ul",null,[e("li",null,[l(o,{text:"推荐",type:"tip"}),n(),_,n(" 项目代码至本地，后续通过 "),v,n(" 更新项目基础代码"),b]),f])]),k,e("li",null,[e("p",null,[n("进入项目根目录，执行 "),x,n(),l(o,{text:"推荐",type:"tip"}),n(" 或 "),A,n(" 安装依赖")]),l(p,{id:"90",data:[{id:"yarn"},{id:"npm"}],"tab-id":"npm"},{title0:a(({value:i,isActive:s})=>[n("yarn")]),title1:a(({value:i,isActive:s})=>[n("npm")]),tab0:a(({value:i,isActive:s})=>[B]),tab1:a(({value:i,isActive:s})=>[E]),_:1}),y]),e("li",null,[e("p",null,[e("a",C,[n("运行项目"),l(d)])])]),e("li",null,[e("p",null,[e("a",I,[n("发行项目(即所谓的打包)"),l(d)])])])])])}const T=r(m,[["render",D],["__file","getting-started.html.vue"]]);export{T as default};