import{_ as e,W as a,X as s,Y as t,a0 as l,Z as d,$ as o,a1 as r,C as u}from"./framework-b90dbfae.js";const _={},c=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"提示"),t("p",null,"本组件用于容纳页面内的所有元素，并向子元素提供Css变量，实现主题切换等功能。注意：本组件应为页面的根组件")],-1),h=t("h3",{id:"props",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#"),l(" Props")],-1),i=t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值")])],-1),p=t("tr",null,[t("td",null,"percept"),t("td",null,[l("所在页面是否被展示（传入 "),t("code",null,"lifecycleMixin"),l(" 中的 "),t("code",null,"thePercept"),l("）")]),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"false")])],-1),b=t("tr",null,[t("td",null,"lifecycle"),t("td",null,[l("所在页面生命周期（传入 "),t("code",null,"lifecycleMixin"),l(" 中的 "),t("code",null,"theLifecycle"),l("）")]),t("td",null,"String"),t("td",null,"-"),t("td",null,[t("code",null,"null")])],-1),f=t("tr",null,[t("td",null,"background-color"),t("td",null,"背景颜色"),t("td",null,"String"),t("td",null,"-"),t("td",null,"var(--color-bg-normal)")],-1),g=t("td",null,"status-front-color",-1),m=t("code",null,"auto",-1),v=t("code",null,"brightness",-1),x=t("td",null,"String",-1),y=t("td",null,"auto / #ffffff / #000000",-1),C=t("td",null,"auto",-1),A=t("tr",null,[t("td",null,"status-background-color"),t("td",null,[l("状态栏背景色（"),t("code",null,"auto"),l(" 同上）")]),t("td",null,"String"),t("td",null,"auto / 16进制颜色值"),t("td",null,"auto")],-1),k=r('<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>页面内容</td></tr></tbody></table><h3 id="cssvars-样式定制" tabindex="-1"><a class="header-anchor" href="#cssvars-样式定制" aria-hidden="true">#</a> CssVars（样式定制）</h3><table><thead><tr><th>名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>--app-main__space_vertical</td><td>纵向空隙大小</td><td>20rpx</td></tr><tr><td>--app-main__space_horizontal</td><td>横向空隙大小</td><td>22rpx</td></tr><tr><td>--app-main__txt_size</td><td>文字大小</td><td>28rpx</td></tr><tr><td>--app-main__txt_weight</td><td>文字字重</td><td>400</td></tr><tr><td>--app-main__txt_color</td><td>文字颜色</td><td>var(--color-txt-primary)</td></tr></tbody></table><h3 id="cssvars-组件提供" tabindex="-1"><a class="header-anchor" href="#cssvars-组件提供" aria-hidden="true">#</a> CssVars（组件提供）</h3>',5),E=t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"说明")])],-1),B=t("tr",null,[t("td",null,"--app-navbar__status_height"),t("td",null,"状态栏高度")],-1),S=t("tr",null,[t("td",null,"--app-navbar__title_height"),t("td",null,"标题栏高度")],-1),V=t("tr",null,[t("td",null,"--app-navbar__body_height"),t("td",null,"导航栏高度（= 状态栏高度 + 标题栏高度）")],-1),w=t("tr",null,[t("td",null,"--app-navbar__status_color"),t("td",null,[l("计算后的状态栏前景色（对应 "),t("code",null,"status-front-color"),l("）")])],-1),z=t("tr",null,[t("td",null,"--app-navbar__status_background"),t("td",null,[l("计算后的状态栏背景色（对应 "),t("code",null,"status-background-color"),l("）")])],-1),N=t("tr",null,[t("td",null,"--app-safearea__body_top"),t("td",null,"上方安全区域大小")],-1),L=t("tr",null,[t("td",null,"--app-safearea__body_right"),t("td",null,"右侧安全区域大小")],-1),P=t("tr",null,[t("td",null,"--app-safearea__body_bottom"),t("td",null,"下方安全区域大小")],-1),R=t("tr",null,[t("td",null,"--app-safearea__body_left"),t("td",null,"左侧安全区域大小")],-1),F=t("td",null,"--app-scroller__cushion_height",-1),M=t("code",null,"app-scroller",-1),T=t("h3",{id:"相关说明",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关说明","aria-hidden":"true"},"#"),l(" 相关说明")],-1),W=t("code",null,"CssVar",-1),X=t("code",null,"page",-1),Y=t("code",null,"class",-1),Z=t("code",null,"view",-1),$=t("code",null,"AppContainer",-1),j=t("code",null,"class",-1),q=t("code",null,"onPageScroll",-1),D=t("code",null,"onReachBottom",-1),G=t("code",null,"scroll-view",-1);function H(I,J){const n=u("RouterLink");return a(),s("div",null,[c,h,t("table",null,[i,t("tbody",null,[p,b,f,t("tr",null,[g,t("td",null,[l("状态栏前景色（若为 "),m,l(" 则会根据当前主题的 "),v,l(" 自动变化颜色，详细请查看"),d(n,{to:"/guide/theme.html"},{default:o(()=>[l("主题")]),_:1}),l("部分）")]),x,y,C]),A])]),k,t("table",null,[E,t("tbody",null,[B,S,V,w,z,N,L,P,R,t("tr",null,[F,t("td",null,[M,l(" 垫高高度，详细请查看"),d(n,{to:"/guide/others.html#z-paging"},{default:o(()=>[l("z-paging")]),_:1}),l("部分")])])])]),T,t("ul",null,[t("li",null,[l("项目中的主题切换采用的是 "),W,l(" 方案，由于小程序端目前无法给 "),X,l(" 直接添加 "),Y,l(" 从而导致需要采用一个 "),Z,l("（即 "),$,l("）做为根容器，用于接受主题相关 "),j,l(" 并承载页面内容滚动。但是这将导致页面滚动相关事件("),q,l("、"),D,l(" 等)无法触发，若需监听页面滚动事件，可通过 "),G,l(" 等方式实现（相关注意事项请查看"),d(n,{to:"/components/app-navbar.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AF%BC%E8%88%AA%E6%A0%8F"},{default:o(()=>[l("自定义导航栏")]),_:1}),l("部分）")])])])}const O=e(_,[["render",H],["__file","app-container.html.vue"]]);export{O as default};