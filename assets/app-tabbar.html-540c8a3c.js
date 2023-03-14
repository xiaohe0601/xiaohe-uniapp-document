import{_ as t,W as a,X as n,a1 as s}from"./framework-d7afda32.js";const e={},p=s(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>本组件用于自定义底部导航栏（即tabbar）</p></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前选中的tabbar-item下标</td><td>Number</td><td>-</td><td><code>0</code></td></tr><tr><td>show</td><td>是否展示tabbar</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>round</td><td>是否展示圆角（圆角大小：<code>--app-tabbar__body_radius</code>）</td><td>Boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>border</td><td>是否展示上边框（边框样式：<code>--app-tabbar__body_border</code>）</td><td>Boolean</td><td>-</td><td><code>true</code></td></tr></tbody></table><h4 id="apptabbaritem" tabindex="-1"><a class="header-anchor" href="#apptabbaritem" aria-hidden="true">#</a> AppTabbarItem</h4><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>名称（展示文字）</td><td>string</td><td>-</td><td>-</td></tr><tr><td>path</td><td>页面路径</td><td>string</td><td>-</td><td>-</td></tr><tr><td>icon</td><td>图标（图片绝对路径）</td><td>string</td><td>-</td><td>-</td></tr><tr><td>iconSelected</td><td>选中状态图标（图片绝对路径）</td><td>string</td><td>-</td><td>-</td></tr><tr><td>iconfont</td><td>字体图标（优先级高于icon）</td><td>string</td><td>-</td><td>-</td></tr><tr><td>badgeKey</td><td>badge取值（需提供Vuex中的getters）</td><td>string</td><td>-</td><td>-</td></tr></tbody></table><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>事件</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>input</td><td>当前选中组件名称变化</td><td>value：当前选中组件名称</td></tr></tbody></table><h3 id="cssvars-样式定制" tabindex="-1"><a class="header-anchor" href="#cssvars-样式定制" aria-hidden="true">#</a> CssVars（样式定制）</h3><table><thead><tr><th>名称</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>--app-tabbar__body_height</td><td>高度</td><td>120rpx</td></tr><tr><td>--app-tabbar__body_radius</td><td>上圆角大小</td><td>0</td></tr><tr><td>--app-tabbar__body_border</td><td>上边框样式</td><td>2rpx solid rgba(0, 0, 0, 0.04)</td></tr><tr><td>--app-tabbar__body_background</td><td>背景颜色</td><td>var(--color-bg-primary)</td></tr><tr><td>--app-tabbar__body_zindex</td><td>tabbar的z-index</td><td>50</td></tr><tr><td>--app-tabbar__body_transition</td><td>tabbar的transition</td><td>bottom 0.3s ease-out</td></tr><tr><td>--app-tabbar__item_width</td><td>tab item宽度</td><td>120rpx</td></tr><tr><td>--app-tabbar__icon_size</td><td>图标大小</td><td>56rpx</td></tr><tr><td>--app-tabbar__icon_fontsize</td><td>图标的font-size（使用iconfont字段时有效）</td><td>50rpx</td></tr><tr><td>--app-tabbar__txt_mtop</td><td>文字的 <code>margin-top</code></td><td>6rpx</td></tr><tr><td>--app-tabbar__txt_size</td><td>文字大小</td><td>24rpx</td></tr><tr><td>--app-tabbar__txt_weight</td><td>文字字重</td><td>500</td></tr><tr><td>--app-tabbar__txt_color</td><td>文字颜色</td><td>#bbbdd4</td></tr><tr><td>--app-tabbar__txt_color--selected</td><td>文字颜色（选中状态）</td><td>var(--color-accent)</td></tr><tr><td>--app-tabbar__badge_size--dot</td><td>圆点型badge大小</td><td>10rpx</td></tr><tr><td>--app-tabbar__badge_size--text</td><td>文字型badge文字大小</td><td>20rpx</td></tr><tr><td>--app-tabbar__badge_radius--text</td><td>文字型badge圆角大小</td><td>20rpx</td></tr><tr><td>--app-tabbar__badge_color</td><td>文字型badge文字颜色</td><td>#ffffff</td></tr><tr><td>--app-tabbar__badge_background</td><td>badge背景颜色</td><td>#ff6d2c</td></tr></tbody></table><h3 id="自定义tabbar" tabindex="-1"><a class="header-anchor" href="#自定义tabbar" aria-hidden="true">#</a> 自定义Tabbar</h3><ol><li><p>首先需要在 <code>pages.json</code> 中的 <code>tabBar.list</code> 中填写 <code>tabbar</code> 页面的路径（其中仅需填写 <code>pagePath</code> 字段），示例如下</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// #ifdef MP-WEIXIN || MP-QQ || MP-TOUTIAO</span>
    <span class="token property">&quot;custom&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// #endif</span>
    <span class="token comment">// #ifdef MP-ALIPAY</span>
    <span class="token property">&quot;customize&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// #endif</span>
    <span class="token comment">// #ifdef APP-PLUS || H5</span>
    <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.01px&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;borderStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#00000000&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// #endif</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/home/index&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/mine/index&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>使用条件编译开启对应平台的 <code>自定义tabBar</code> 配置项，由于 <code>APP-PLUS || H5</code> 端未提供 <code>tabBar.custom</code> 选项，所以这里将 <code>height</code> 设置为 <code>0.01px</code>，并将 <code>borderStyle</code> 设置为 <code>#00000000</code>，以实现隐藏 <code>tabbar</code> 的效果</p></li><li><p>若目标平台未提供 <code>自定义tabBar</code> 配置项，则在 <code>App.vue</code> 中的 <code>onLaunch</code> 调用 <code>uni.hideTabBar()</code> 以隐藏 <code>原生tabBar</code></p></li><li><p>若目标平台未提供 <code>原生tabBar</code>，则需要自行通过其他方式实现</p></li></ul></li><li><p>在 <code>/utils/config.js</code> 中配置 <code>route.tabbar.list</code> 选项，可配置的字段参考上方 <code>AppTabbarItem</code> 表格中的说明，示例如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">route</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tabbar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/pages/home/index&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;/static/icons/tabbar_home.png&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">iconSelected</span><span class="token operator">:</span> <span class="token string">&quot;/static/icons/tabbar_home_selected.png&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;我的&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/pages/mine/index&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;/static/icons/tabbar_mine.png&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">iconSelected</span><span class="token operator">:</span> <span class="token string">&quot;/static/icons/tabbar_mine_selected.png&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意 <code>path</code> 字段和 <code>pages.json</code> 中 <code>pagePath</code> 字段的差异，这里需要填写以 <code>/</code> 开始的页面绝对路径</li></ul></li><li><p>接下来即可使用 <code>AppTabbar</code> 组件，示例如下</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-container</span> <span class="token attr-name">:percept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>thePercept<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-navbar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>首页<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:show-left</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-navbar</span><span class="token punctuation">&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-tabbar</span> <span class="token attr-name">:current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-tabbar</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-safearea</span> <span class="token attr-name">:cushion-height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>140<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-safearea</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-container</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>其中 <code>app-tabbar</code> 上的 <code>current</code> 属性应填写当前页面在 <code>route.tabbar.list</code> 中的下标，比如上方的示例是“首页”，他在 <code>route.tabbar.list</code> 中的下标是 <code>0</code>，所以 <code>current</code> 应该传值 <code>0</code></p></li><li><p>另外需要注意 <code>AppTabbar</code> 是 <code>fixed</code> 在页面上的，所以会挡住页面底部的内容，需要在可滚动部分的最后一项添加一个垫高（注意考虑安全区域），可以如上方所示使用 <code>AppSafearea</code> 组件</p></li></ul></li></ol>`,11),o=[p];function d(c,r){return a(),n("div",null,o)}const i=t(e,[["render",d],["__file","app-tabbar.html.vue"]]);export{i as default};
