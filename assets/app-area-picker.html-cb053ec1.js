import{_ as n,W as s,X as a,a1 as t}from"./framework-d7afda32.js";const e={},p=t(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>本组件用于地区选择，传入地区编码即可自动定位至目标地区</p></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>code</td><td>地区编码</td><td>String</td><td>-</td><td><code>null</code></td></tr><tr><td>show（支持 <code>.sync</code>）</td><td>是否展示选择器</td><td>Boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>title</td><td>选择器标题</td><td>String</td><td>-</td><td>-</td></tr><tr><td>level</td><td>选择地区层级</td><td>Number</td><td>-</td><td><code>3</code></td></tr><tr><td>codeLevelLength</td><td>每级地区编码长度</td><td>Number</td><td>-</td><td><code>2</code></td></tr><tr><td>codePadChar</td><td>地区编码右补字符</td><td>String</td><td>-</td><td>0</td></tr><tr><td>confirmText</td><td>确定按钮文字</td><td>String</td><td>-</td><td>确定</td></tr><tr><td>cancelText</td><td>取消按钮文字</td><td>String</td><td>-</td><td>取消</td></tr></tbody></table><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>update:show</td><td>show的值改变</td><td>value：选择器是否展示</td></tr><tr><td>confirm</td><td>点击确定</td><td>indexs：各列选中项索引，value：各列选中项的值，values：各列列表数据</td></tr></tbody></table><h3 id="相关说明" tabindex="-1"><a class="header-anchor" href="#相关说明" aria-hidden="true">#</a> 相关说明</h3><ul><li><p><code>codeLevelLength</code> 和 <code>codePadChar</code> 两个参数应根据接口实际数据修改默认值或通过组件参数传入</p><ul><li><p>这里以成都市锦江区的标准区划代码为例</p><ul><li><p>锦江区的编码为 51 01 04</p></li><li><p>成都市的编码为 51 01 00</p></li><li><p>四川省的编码为 51 00 00</p></li><li><p>通过以上示例可总结出该编码每一级的长度(<code>codeLevelLength</code>)为2，地区编码补齐时右补字符(<code>codePadChar</code>)为0</p></li></ul></li></ul></li><li><p>组件本身不提供地区数据，需要自行提供接口并改造数据查询相关部分（注意 <code>AppAreaPicker.vue</code> 文件的注释中带😀的部分）</p><ol><li><p>根据实际情况import对应的接口定义，该接口需要可以通过父级地区code查询子地区列表，示例如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> apiQueryAreasByAdcode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/service/index.js&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>改造 <code>methods</code> 中的 <code>requestAreasByAdcode(adcode)</code> 方法用于获取地区数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">requestAreasByAdcode</span><span class="token punctuation">(</span>adcode <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token comment">// 😀 根据实际情况调用接口查询指定区域下的子区域列表</span>

    <span class="token comment">// const { data } = await apiQueryAreasByAdcode({</span>
    <span class="token comment">//   &quot;code&quot;: adcode</span>
    <span class="token comment">// });</span>

    <span class="token comment">// 😀 如果接口返回数据结构不是 {code, name, children} 的话，需要手动做一下转换</span>
    <span class="token comment">// code：区域编码</span>
    <span class="token comment">// name：区域名称</span>
    <span class="token comment">// children：子区域列表（这里的值固定设置为null）</span>

    <span class="token comment">// return data.map((item) =&gt; ({</span>
    <span class="token comment">//   code: item.code,</span>
    <span class="token comment">//   name: item.name,</span>
    <span class="token comment">//   children: null</span>
    <span class="token comment">// }));</span>

    <span class="token comment">// 😀 接口调整完成后，移除下面这一行</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ul><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-container</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-area-picker</span> <span class="token attr-name">:show.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span>
                     <span class="token attr-name">:code</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span>
                     <span class="token attr-name">@confirm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>confirm<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-area-picker</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-container</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 注意：示例中的变量名及方法名均为示意，实际情况应根据自己的业务场景按照实际意义命名，而无需跟prop同名</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> indexs<span class="token punctuation">,</span> value<span class="token punctuation">,</span> values <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;地区选择器确定&quot;</span><span class="token punctuation">,</span> indexs<span class="token punctuation">,</span> value<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function o(l,i){return s(),a("div",null,c)}const u=n(e,[["render",o],["__file","app-area-picker.html.vue"]]);export{u as default};
