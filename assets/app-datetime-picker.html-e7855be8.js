import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as d,c as u,a as t,b as n,d as s,e as o}from"./app-1d4ad656.js";const c={},p=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"提示"),t("p",null,"本组件用于日期时间选择")],-1),i=t("h3",{id:"props",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#props","aria-hidden":"true"},"#"),n(" Props")],-1),r=t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值")])],-1),h=t("td",null,"是否展示选择器",-1),_=t("td",null,"Boolean",-1),m=t("td",null,"-",-1),k=t("td",null,[t("code",null,"false")],-1),v=t("tr",null,[t("td",null,"mode"),t("td",null,"选择器模式"),t("td",null,"String"),t("td",null,"date / time / year-month / datetime"),t("td",null,"date")],-1),b=t("td",null,"当前绑定值",-1),g=t("td",null,"String / Number",-1),f=t("td",null,"-",-1),y=t("td",null,"-",-1),x=t("tr",null,[t("td",null,"defaultValue"),t("td",null,[n("默认值 ("),t("code",null,"string"),n(" 或 "),t("code",null,"number"),n(" 类型为明确指定默认值，若为 "),t("code",null,"true"),n(" 则指定当前时间)")]),t("td",null,"String / Number / Boolean"),t("td",null,"-"),t("td",null,"-")],-1),N=t("tr",null,[t("td",null,"showToolbar"),t("td",null,"是否显示顶部的操作栏"),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"true")])],-1),B=t("tr",null,[t("td",null,"title"),t("td",null,"顶部标题"),t("td",null,"String"),t("td",null,"-"),t("td",null,"-")],-1),w=t("tr",null,[t("td",null,"maxDate"),t("td",null,"可选的最大时间"),t("td",null,"Number"),t("td",null,"-"),t("td",null,"10年之前")],-1),q=t("tr",null,[t("td",null,"minDate"),t("td",null,"可选的最小时间"),t("td",null,"Number"),t("td",null,"-"),t("td",null,"10年之后")],-1),S=t("tr",null,[t("td",null,"maxHour"),t("td",null,"可选的最大小时"),t("td",null,"Number"),t("td",null,"-"),t("td",null,[t("code",null,"23")])],-1),C=t("tr",null,[t("td",null,"minHour"),t("td",null,"可选的最小小时"),t("td",null,"Number"),t("td",null,"-"),t("td",null,[t("code",null,"0")])],-1),V=t("tr",null,[t("td",null,"maxMinute"),t("td",null,"可选的最大分钟"),t("td",null,"Number"),t("td",null,"-"),t("td",null,[t("code",null,"59")])],-1),T=t("tr",null,[t("td",null,"minMinute"),t("td",null,"可选的最小分钟"),t("td",null,"Number"),t("td",null,"-"),t("td",null,[t("code",null,"0")])],-1),D=t("tr",null,[t("td",null,"filter"),t("td",null,"选项过滤函数"),t("td",null,"Function"),t("td",null,"-"),t("td",null,"-")],-1),F=t("tr",null,[t("td",null,"formatter"),t("td",null,"选项格式化函数"),t("td",null,"Function"),t("td",null,"-"),t("td",null,"-")],-1),H=t("tr",null,[t("td",null,"loading"),t("td",null,"是否显示加载中状态"),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"false")])],-1),M=t("tr",null,[t("td",null,"confirmText"),t("td",null,"确认按钮的文字"),t("td",null,"String"),t("td",null,"-"),t("td",null,"确定")],-1),O=t("tr",null,[t("td",null,"cancelText"),t("td",null,"取消按钮的文字"),t("td",null,"String"),t("td",null,"-"),t("td",null,"取消")],-1),E=t("tr",null,[t("td",null,"itemHeight"),t("td",null,"各列中单个选项的高度"),t("td",null,"String / Number"),t("td",null,"-"),t("td",null,[t("code",null,"44")])],-1),I=t("tr",null,[t("td",null,"visibleItemCount"),t("td",null,"每列中可见选项的数量"),t("td",null,"Number"),t("td",null,"-"),t("td",null,[t("code",null,"5")])],-1),P=t("tr",null,[t("td",null,"asyncClose"),t("td",null,"是否异步关闭"),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"false")])],-1),j=t("tr",null,[t("td",null,"closeOnConfirm"),t("td",null,"点击确定按钮时是否关闭选择器"),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"true")])],-1),z=t("tr",null,[t("td",null,"closeOnClickOverlay"),t("td",null,"点击遮罩是否关闭选择器"),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"false")])],-1),A=t("tr",null,[t("td",null,"reserveIndexs"),t("td",null,[n("是否保留上次滚动位置 (若为 "),t("code",null,"false"),n(" 则会在每次展示时回到当前绑定值所在位置)")]),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"false")])],-1),G=t("tr",null,[t("td",null,"immediateChange"),t("td",null,[n("是否在手指松开时立即触发 "),t("code",null,"change"),n(" 事件")]),t("td",null,"Boolean"),t("td",null,"-"),t("td",null,[t("code",null,"true")])],-1),J=o(`<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:show</td><td><code>show</code> 的值改变</td><td><code>value</code>：选择器是否展示</td></tr><tr><td>input</td><td>点击确定</td><td><code>value</code>：当前选择的值</td></tr><tr><td>confirm</td><td>点击确定</td><td><code>value</code>：当前选择的值，<code>mode</code>：当前选择器模式</td></tr><tr><td>change</td><td>当选择值变化时触发</td><td><code>value</code>：当前选择的值，<code>mode</code>：当前选择器模式</td></tr><tr><td>cancel</td><td>点击取消</td><td>-</td></tr><tr><td>close</td><td>选择器关闭</td><td>-</td></tr></tbody></table><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>setFormatter</td><td>设置选项格式化函数 (为兼容微信小程序而暴露的内部方法)</td><td>formatter: <code>(type, value) =&gt; value</code> 格式化函数</td></tr></tbody></table><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-datetime-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:show.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span> <span class="token attr-name">default-value</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-datetime-picker</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 注意：示例中的变量名及方法名均为示意，实际情况应根据自己的业务场景按照实际意义命名，而无需跟prop同名</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function K(L,Q){const l=e("badge");return d(),u("div",null,[p,i,t("table",null,[r,t("tbody",null,[t("tr",null,[t("td",null,[n("show "),s(l,{text:"sync",type:"tip"})]),h,_,m,k]),v,t("tr",null,[t("td",null,[n("value "),s(l,{text:"v-model",type:"tip"})]),b,g,f,y]),x,N,B,w,q,S,C,V,T,D,F,H,M,O,E,I,P,j,z,A,G])]),J])}const W=a(c,[["render",K],["__file","app-datetime-picker.html.vue"]]);export{W as default};