import{_ as n,W as s,X as a,a1 as t}from"./framework-b90dbfae.js";const e={},p=t(`<h3 id="arrayutils-flat2tree-array-options" tabindex="-1"><a class="header-anchor" href="#arrayutils-flat2tree-array-options" aria-hidden="true">#</a> ArrayUtils.flat2tree(array, options = <code>{}</code>)</h3><p>扁平数组转树形结构数组</p><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4><ul><li><p>array：<code>any[]</code> 扁平数组</p></li><li><p>options：<code>Flat2TreeOptions</code> 配置项</p></li></ul><h4 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h4><h5 id="flat2treeoptions" tabindex="-1"><a class="header-anchor" href="#flat2treeoptions" aria-hidden="true">#</a> Flat2TreeOptions</h5><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>节点唯一标识属性名</td><td>string</td><td>-</td><td>id</td></tr><tr><td>parentKey</td><td>父节点唯一标识属性名</td><td>string</td><td>-</td><td>pid</td></tr><tr><td>processor</td><td>节点数据处理器</td><td>(item: any) =&gt; item: any</td><td>-</td><td><code>(item) =&gt; (item)</code></td></tr></tbody></table><h4 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h4><p><code>any[]</code> 树形结构数组</p><details class="hint-container details"><summary>使用示例（点击展开查看）</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test1&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test2&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test3&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test4&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test5&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test6&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

ArrayUtils<span class="token punctuation">.</span><span class="token function">flat2tree</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt;</span>
<span class="token comment">// [{</span>
<span class="token comment">//   id: 1,</span>
<span class="token comment">//   pid: 0,</span>
<span class="token comment">//   name: &quot;test1&quot;,</span>
<span class="token comment">//   children: [{</span>
<span class="token comment">//     id: 2,</span>
<span class="token comment">//     pid: 1,</span>
<span class="token comment">//     name: &quot;test2&quot;,</span>
<span class="token comment">//     children: [{</span>
<span class="token comment">//       id: 3,</span>
<span class="token comment">//       pid: 2,</span>
<span class="token comment">//       name: &quot;test3&quot;</span>
<span class="token comment">//     }]</span>
<span class="token comment">//   }]</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 4,</span>
<span class="token comment">//   pid: 0,</span>
<span class="token comment">//   name: &quot;test4&quot;,</span>
<span class="token comment">//   children: [{</span>
<span class="token comment">//     id: 5,</span>
<span class="token comment">//     pid: 4,</span>
<span class="token comment">//     name: &quot;test5&quot;</span>
<span class="token comment">//   }]</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 6,</span>
<span class="token comment">//   pid: 0,</span>
<span class="token comment">//   name: &quot;test6&quot;</span>
<span class="token comment">// }]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="arrayutils-tree2flat-array-options" tabindex="-1"><a class="header-anchor" href="#arrayutils-tree2flat-array-options" aria-hidden="true">#</a> ArrayUtils.tree2flat(array, options = <code>{}</code>)</h3><p>树形结构数组转扁平数组</p><h4 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h4><ul><li><p>array：<code>any[]</code> 树形结构数组</p></li><li><p>options：<code>Tree2FlatOptions</code> 配置项</p></li></ul><h4 id="类型-1" tabindex="-1"><a class="header-anchor" href="#类型-1" aria-hidden="true">#</a> 类型</h4><h5 id="tree2flatoptions" tabindex="-1"><a class="header-anchor" href="#tree2flatoptions" aria-hidden="true">#</a> Tree2FlatOptions</h5><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>childrenKey</td><td>子节点集合属性名</td><td>string</td><td>-</td><td>children</td></tr><tr><td>processor</td><td>节点数据处理器</td><td>(item: any) =&gt; item: any</td><td>-</td><td><code>(item) =&gt; (item)</code></td></tr></tbody></table><h4 id="返回-1" tabindex="-1"><a class="header-anchor" href="#返回-1" aria-hidden="true">#</a> 返回</h4><p><code>any[]</code> 扁平数组</p><details class="hint-container details"><summary>使用示例（点击展开查看）</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test3&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test4&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test5&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test6&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

ArrayUtils<span class="token punctuation">.</span><span class="token function">tree2flat</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt;</span>
<span class="token comment">// [{</span>
<span class="token comment">//   id: 1,</span>
<span class="token comment">//   name: &quot;test1&quot;</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 2,</span>
<span class="token comment">//   name: &quot;test2&quot;</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 3,</span>
<span class="token comment">//   name: &quot;test3&quot;</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 4,</span>
<span class="token comment">//   name: &quot;test4&quot;</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 5,</span>
<span class="token comment">//   name: &quot;test5&quot;</span>
<span class="token comment">// }, {</span>
<span class="token comment">//   id: 6,</span>
<span class="token comment">//   name: &quot;test6&quot;</span>
<span class="token comment">// }]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="arrayutils-recursivetraversal-array-options" tabindex="-1"><a class="header-anchor" href="#arrayutils-recursivetraversal-array-options" aria-hidden="true">#</a> ArrayUtils.recursiveTraversal(array, options = <code>{}</code>)</h3><p>递归遍历树形结构数组</p><h4 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h4><ul><li><p>array：<code>any[]</code> 树形结构数组</p></li><li><p>options：<code>RecursiveTraversalOptions</code> 配置项</p></li></ul><h4 id="类型-2" tabindex="-1"><a class="header-anchor" href="#类型-2" aria-hidden="true">#</a> 类型</h4><h5 id="recursivetraversaloptions" tabindex="-1"><a class="header-anchor" href="#recursivetraversaloptions" aria-hidden="true">#</a> RecursiveTraversalOptions</h5><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>childrenKey</td><td>子节点集合属性名</td><td>string</td><td>-</td><td>children</td></tr><tr><td>parent</td><td>父节点数据</td><td>any</td><td>-</td><td>-</td></tr><tr><td>processor</td><td>节点数据处理器</td><td>(item: any, parent: any) =&gt; void</td><td>-</td><td>-</td></tr></tbody></table><details class="hint-container details"><summary>使用示例（点击展开查看）</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test1&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test2&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test3&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test4&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test5&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;test6&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

ArrayUtils<span class="token punctuation">.</span><span class="token function">recursiveTraversal</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">processor</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> parent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; 依次为 test3、test2、test1、test5、test4、test6 对象本身及其父节点的引用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,28),o=[p];function i(l,r){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","array.html.vue"]]);export{d as default};
