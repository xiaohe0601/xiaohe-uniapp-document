import{_ as e,W as o,X as p,Y as n,a0 as s,Z as c,$ as d,a1 as a,C as i}from"./framework-d7afda32.js";const l={},r=a(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>项目中对uniapp的网络请求方法做了许多实用的封装，让网络请求不再繁琐，仅需1行代码即可发起请求。(<code>/utils/network.js</code>)</p></div><h3 id="请求方式" tabindex="-1"><a class="header-anchor" href="#请求方式" aria-hidden="true">#</a> 请求方式</h3><ul><li><p><code>network.js</code> 中对不同的请求方式导出了相应的方法，所有的方法都基于统一的 <code>_request</code> 方法实现，除请求方式不同以外，其余用法均一致</p><ul><li><p>GET：<code>_get(url, data, config)</code></p></li><li><p>DELETE：<code>_delete(url, data, config)</code></p></li><li><p>HEAD：<code>_head(url, data, config)</code></p></li><li><p>OPTIONS：<code>_options(url, data, config)</code></p></li><li><p>POST：<code>_post(url, data, config)</code></p></li><li><p>PUT：<code>_put(url, data, config)</code></p></li><li><p>TRACE：<code>_trace(url, data, config)</code></p></li><li><p>CONNECT：<code>_connect(url, data, config)</code></p></li></ul></li><li><p><code>url</code> 参数传递全局配置(<code>/utils/config.js</code>)中请求基地址(<code>http.requestBaseUrl</code>)之后的路径即可，若需要请求其他基地址的接口，则直接传递全路径</p></li><li><p>其中 <code>_get</code> 方法比较特殊，其 <code>data</code> 参数会拼接至url末尾作为query部分，其他方法则会将其添加至请求体中</p></li><li><p>另外，除以上请求方式外，还有两个特殊的请求，分别是上传和下载，也提供了一致的使用方式</p><ul><li><p>上传：<code>_upload(url, path, progress, config)</code></p><ul><li><p><code>path</code> 参数为uniapp文件临时路径，可通过 <code>uni.chooseMedia</code> 等API获取</p></li><li><p><code>progress</code> 参数为上传进度回调函数</p></li></ul></li><li><p>下载：<code>_download(url, progress, config)</code></p><ul><li><code>progress</code> 参数为下载进度回调函数</li></ul></li></ul></li><li><p>以上方法中的 <code>config</code> 参数详细请查看下方<a href="#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE">请求配置</a>部分</p></li><li><p>接口定义推荐写在 <code>service</code> 目录下，按不同的模块或接口类型区分不同的js文件定义，并且在 <code>/service/index.js</code> 中统一导出，示例如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /service/user.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> _post <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/utils/network.js&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 简单示例（微信code登录）
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">apiSignInByWxCode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">_post</span><span class="token punctuation">(</span><span class="token string">&quot;/sys/sign/in/wx-code&quot;</span><span class="token punctuation">,</span> 	data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 若要覆盖全局配置或默认配置，则在config中传递对应的参数，例如该请求在业务异常时不会弹出错误提示
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">apiRequestNoToast</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">_post</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">toastError</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /service/index.js</span>

<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&quot;./user.js&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> apiSignInByWxCode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/service/index.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> uni<span class="token punctuation">.</span>pro<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在async方法中可直接使用await，若业务无异常则直接解构出data即可</span>
<span class="token comment">// 若需处理异常情况，请查看下方(#异常处理)部分</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">apiSignInByWxCode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> code
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 也可以使用Promise形式</span>
<span class="token function">apiSignInByWxCode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> code
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>注意:</strong> 上方示例中解构出的 <code>data</code> 是后端服务统一响应体中的数据字段，若需要获取原始数据，可解构出 <code>raw</code> 字段</p></li><li><p>针对不同后端服务统一响应体的字段不同的情况，可在全局配置(<code>/utils/config.js</code>)中配置 <code>http.fieldCode</code>、<code>http.fieldMessage</code>、<code>http.fieldData</code> 字段，详细请查看下方<a href="#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE">请求配置</a>部分</p></li></ul><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h3><div class="hint-container info"><p class="hint-container-title">名词解释</p><p>我们通常认为的请求异常即为接口响应的 <code>code</code> 字段值与定义的成功值（例如 <code>200</code>）不同</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一般的业务异常直接弹出错误提示并且终止后续的逻辑执行即可，<code>token</code> 异常则退出登录，这些情况项目中已自动处理，若有其他的业务需要可手动 <code>catch</code> 请求方法，在请求异常的情况下做自己的业务，示例如下</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> apiSignInByWxCode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/service/index.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> uni<span class="token punctuation">.</span>pro<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">apiSignInByWxCode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> code
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 业务正常情况</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里可以处理异常情况</span>

  <span class="token comment">// err = { ...response, state, data, raw }</span>
  <span class="token comment">// 其中state的取值可在/utils/config.js中配置，详细请查看下方[请求配置](#请求配置)部分</span>
<span class="token punctuation">}</span>

<span class="token function">apiSignInByWxCode</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;code&quot;</span><span class="token operator">:</span> code
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 业务正常情况</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Promise形式同理</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此处涉及的相关配置项，如 <code>code</code> 字段的请求成功值、<code>token</code> 失效值等，亦查看下方<a href="#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE">请求配置</a>部分</li></ul><h3 id="加载动画" tabindex="-1"><a class="header-anchor" href="#加载动画" aria-hidden="true">#</a> 加载动画</h3><ul><li><p>当请求长时间未收到响应时，会自动展示加载中的弹窗（即 <code>uni.showLoading</code>），加载动画的延迟时间可在全局配置中的 <code>http.requestLoadingDelay</code> 配置，若请求在此时间内响应，则不会显示加载动画</p></li><li><p>加载动画提示文字等其他配置项，详细请查看下方<a href="#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE">请求配置</a>部分</p></li></ul><h3 id="token处理" tabindex="-1"><a class="header-anchor" href="#token处理" aria-hidden="true">#</a> Token处理</h3><ul><li><p>当 <code>storage</code> 中存在 <code>token</code> 时，请求会自动携带至 <code>header</code> 中，<code>token</code> 存储位置可在全局配置的 <code>storage.token</code> 中配置</p></li><li><p>存取 <code>token</code> 方式如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Config <span class="token keyword">from</span> <span class="token string">&quot;@/utils/config.js&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 模拟登录</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">apiSignIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 存储token</span>
uni<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span>Config<span class="token punctuation">.</span>storage<span class="token punctuation">.</span>token<span class="token punctuation">,</span> data<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 取出token</span>
<span class="token keyword">const</span> token <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span>Config<span class="token punctuation">.</span>storage<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="中断请求" tabindex="-1"><a class="header-anchor" href="#中断请求" aria-hidden="true">#</a> 中断请求</h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在某些场景下，当请求还未响应时，可以手动中断请求，此时可在 <code>config</code> 中传入 <code>signal</code> 属性，请求发起时，请求 <code>task</code> 会回传至<code>signal.task</code> 属性，示例如下</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 接口定义，传入signal属性至config参数中</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">apiRequestTest</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> signal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">_post</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">{</span>signal<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定义信号量，用于接收请求task</span>
<span class="token keyword">const</span> signal <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 发起请求，传入signal即可</span>
<span class="token function">apiRequestTest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;some&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> signal<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在发起请求后，在请求响应前的某个时机可以通过操作task中断请求</span>
signal<span class="token punctuation">.</span>task<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 亦可使用空安全运算符</span>
signal<span class="token punctuation">.</span>task<span class="token operator">?.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求配置" tabindex="-1"><a class="header-anchor" href="#请求配置" aria-hidden="true">#</a> 请求配置</h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>请求配置分为全局配置和自定义配置</p></div><h4 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h4><blockquote><p><code>/utils/config.js</code> 中的 <code>http</code> 部分</p></blockquote><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>requestBaseUrl</td><td>请求基地址，即请求url中相同的前缀部分（例如域名、项目前缀等）</td><td>string</td><td>-</td><td><code>p<wbr>rocess.env.UNI_APP_REQUEST_BASE_URL</code></td></tr><tr><td>sourceBaseUrl</td><td>资源基地址，用于图片、视频等网络地址相对路径拼接统一的前缀</td><td>string</td><td>-</td><td><code>p<wbr>rocess.env.UNI_APP_SOURCE_BASE_URL</code></td></tr><tr><td>requestTimeout</td><td>请求超时（单位：ms）</td><td>number</td><td>-</td><td><code>10 * 1000</code></td></tr><tr><td>requestLoadingDelay</td><td>加载动画延迟时间（单位：ms）（若请求在此时间内响应，则不会显示加载动画）</td><td>number</td><td>-</td><td><code>600</code></td></tr><tr><td>requestAcceptType</td><td>请求接受数据类型</td><td>string</td><td>-</td><td>application/json</td></tr><tr><td>requestContentType</td><td>😀 请求发送数据类型</td><td>string</td><td>application/json，application/x-www-form-urlencoded，其他</td><td>application/json</td></tr><tr><td>enableHttp2</td><td>启用HTTP2</td><td>boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>enableQuic</td><td>启用QUIC</td><td>boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>enableCache</td><td>启用Cache</td><td>boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>tokenKey</td><td>😀 请求Header中Token的key</td><td>string</td><td>-</td><td>Authorization</td></tr><tr><td>tokenPrefix</td><td>😀 请求Header中Token的前缀</td><td>string</td><td>-</td><td>-</td></tr><tr><td>fieldCode</td><td>😀 响应内容字段 - code</td><td>string</td><td>-</td><td>code</td></tr><tr><td>fieldMessage</td><td>😀 响应内容字段 - message</td><td>string</td><td>-</td><td>message</td></tr><tr><td>fieldData</td><td>😀 响应内容字段 - data</td><td>string</td><td>-</td><td>data</td></tr><tr><td>codeSuccess</td><td>😀 业务状态 - 操作成功</td><td>number</td><td>-</td><td><code>200</code></td></tr><tr><td>codeAuthError</td><td>😀 业务状态 - 登录失效</td><td>number</td><td>-</td><td><code>401</code></td></tr><tr><td>stateSuccess</td><td>state - 业务正常</td><td>number</td><td>-</td><td><code>100</code></td></tr><tr><td>stateBusinessError</td><td>state - 业务异常（即 <code>data[fieldCode]</code> 与 <code>codeSuccess</code> 不相等）</td><td>number</td><td>-</td><td><code>0</code></td></tr><tr><td>stateRequestError</td><td>state - 请求异常</td><td>number</td><td>-</td><td><code>-1</code></td></tr><tr><td>stateHttpError</td><td>state - HTTP状态异常</td><td>number</td><td>-</td><td><code>-2</code></td></tr><tr><td>stateUnknownError</td><td>state - 未知异常</td><td>number</td><td>-</td><td><code>-3</code></td></tr><tr><td>stateRequestAbort</td><td>state - 请求取消</td><td>number</td><td>-</td><td><code>-4</code></td></tr><tr><td>redirectAuthPage</td><td>😀 登录失效重定向页面地址</td><td>string</td><td>-</td><td>-</td></tr><tr><td>redirectAuthAction</td><td>😀 登录失效页重定向方式</td><td>string / null</td><td><code>null</code> / reLaunch / switchTab / navigateTo</td><td><code>null</code></td></tr></tbody></table><h4 id="自定义配置" tabindex="-1"><a class="header-anchor" href="#自定义配置" aria-hidden="true">#</a> 自定义配置</h4><blockquote><p>接口定义中的 <code>config</code> 参数</p></blockquote><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>请求URL</td><td>string</td><td>请求地址的相对路径或全路径</td><td>-</td></tr><tr><td>method</td><td>请求方式</td><td>string</td><td>GET / DELETE / HEAD / OPTIONS / POST / PUT / TRACE / CONNECT</td><td>-</td></tr><tr><td>data</td><td>请求参数</td><td>any</td><td>-</td><td>-</td></tr><tr><td>timeout</td><td>请求超时</td><td>number</td><td>-</td><td><code>Config.http.requestTimeout</code></td></tr><tr><td>header</td><td>请求header</td><td>Record&lt;string, string&gt;</td><td>-</td><td>-</td></tr><tr><td>dataType</td><td>返回数据格式</td><td>string</td><td>json / 其他</td><td>json</td></tr><tr><td>responseType</td><td>响应数据类型</td><td>string</td><td>text / arraybuffer</td><td>text</td></tr><tr><td>toastError</td><td>是否提示错误信息</td><td>boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>showLoading</td><td>是否显示加载动画</td><td>boolean</td><td>-</td><td><code>true</code></td></tr><tr><td>loadingText</td><td>加载文字</td><td>string</td><td>-</td><td>请稍候</td></tr><tr><td>ignoreLoadingDelay</td><td>是否忽略等待弹窗延时（若为 <code>true</code>，等待弹窗会在请求开始时立即显示）</td><td>boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>ignoreToken</td><td>是否跳过自动添加token</td><td>boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>signal</td><td>信号量（若提供则会将网络请求task回传至 <code>task</code> 属性，可用于中断请求等）</td><td>any</td><td>-</td><td>-</td></tr><tr><td>third</td><td>是否为第三方请求（若为 <code>true</code>，则直接返回响应内容，不会进行进一步处理）</td><td>boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>authNotRedirect</td><td>是否禁用登录失效重定向</td><td>boolean</td><td>-</td><td><code>false</code></td></tr><tr><td>authRedirectPage</td><td>登录失效重定向页面地址</td><td>string</td><td>-</td><td><code>Config.http.redirectAuthPage</code></td></tr><tr><td>authRedirectAction</td><td>登录失效重定向方式</td><td>string</td><td><code>null</code> / reLaunch / switchTab / navigateTo</td><td><code>Config.http.redirectAuthAction</code></td></tr><tr><td>key</td><td>(仅 <code>_upload</code>) FormData上传时文件的key</td><td>string</td><td>-</td><td>file</td></tr><tr><td>extra</td><td>(仅 <code>_upload</code>) FormData上传时的附加信息（会在上传时携带在FormData中）</td><td>Record&lt;string, any&gt;</td><td>-</td><td>-</td></tr></tbody></table><h4 id="相关说明" tabindex="-1"><a class="header-anchor" href="#相关说明" aria-hidden="true">#</a> 相关说明</h4>`,24),u=a(`<li><p>上方<a href="#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE">全局配置</a>中带😀的参数是第一次接口对接时需要特别注意的地方，应当根据后端接口文档定义中的规定字段配置对应的值，部分示例如下</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请求成功&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;some&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 假设请求响应体如上方所示，那么对应的字段配置如下</span>
<span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">http</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fieldCode</span><span class="token operator">:</span> <span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fieldMessage</span><span class="token operator">:</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fieldData</span><span class="token operator">:</span> <span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">codeSuccess</span><span class="token operator">:</span> <span class="token number">200</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>再举一个例子</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ret&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;请求成功&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;res&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;some&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 假设请求响应体如上方所示，那么对应的字段配置如下</span>
<span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">http</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fieldCode</span><span class="token operator">:</span> <span class="token string">&quot;ret&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fieldMessage</span><span class="token operator">:</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fieldData</span><span class="token operator">:</span> <span class="token string">&quot;res&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">codeSuccess</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),k=n("code",null,"requestBaseUrl",-1),v=n("code",null,"sourceBaseUrl",-1),m=a(`<li><p>内置 <code>filter</code> 中的 <code>sources</code> 可用于快速拼接 <code>sourceBaseUrl</code> 前缀，用法如下</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url | sources<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>由于小程序中不支持 <code>FormData</code>，若接口要求传递 <code>FormData</code> 类型数据，分为如下几种情况</p><ul><li><p>参数中不包含文件，将 <code>requestContentType</code> 修改为 <code>application/x-www-form-urlencoded</code>，或将单个请求的自定义配置 <code>header</code> 中的 <code>content-type</code> 修改为 <code>application/x-www-form-urlencoded</code>，单个请求的示例如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">apiRequestByFormData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">_post</span><span class="token punctuation">(</span><span class="token string">&quot;接口地址&quot;</span>，data，<span class="token punctuation">{</span>
  <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;content-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>参数中包含一个文件，则使用 <code>_upload</code> 方法定义接口，将文件临时路径传至 <code>path</code> 参数，除文件外的其他参数传至自定义配置中的 <code>extra</code> 属性即可，示例如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">apiRequestByFormData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">_upload</span><span class="token punctuation">(</span><span class="token string">&quot;接口地址&quot;</span><span class="token punctuation">,</span> path<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">extra</span><span class="token operator">:</span> data
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>参数中包含多个文件，小程序中不支持多文件同时上传，无法实现（此时需要后端修改逻辑，例如提供单文件上传接口，前端通过 <code>Promise.all</code> 等方式实现多文件上传）</p></li></ul></li>`,2);function b(g,h){const t=i("RouterLink");return o(),p("div",null,[r,n("ul",null,[u,n("li",null,[n("p",null,[k,s(" 和 "),v,s(" 的默认取值是对应的环境变量，关于环境变量的使用请查看"),c(t,{to:"/config/environment.html"},{default:d(()=>[s("环境变量")]),_:1}),s("部分")])]),m])])}const f=e(l,[["render",b],["__file","network.html.vue"]]);export{f as default};
