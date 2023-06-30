import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as d}from"./app-5f31eb94.js";const a={},l=d(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于项目采用的是HBuilderX创建方式，默认不支持类似于Vue cli创建方式的env环境变量，故项目中模仿Vue cli使用 <code>dotenv</code> 实现了env环境变量，具体实现可查看 <code>vue.config.js</code>，也可根据实际需要做对应修改</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><ul><li><p>之所以不采用Vue cli创建项目，是因为HBuilderX对cli项目的支持并不友好，例如不能自动跳转文件对应页面，App在线打包时基础库更新麻烦等</p></li><li><p>同时因为HBuilderX创建的项目使用的编译器是集成在HBuilderX中的，所以当HBuilderX有新版本时请及时更新，以免造成一些未知的异常</p></li></ul></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>虽然是模仿Vue cli的环境变量，但是项目中对其做出了一些优化以及差异化，例如支持了除字符串以外的其他数据类型、修改了变量前缀等，具体使用规范如下</p></div><h3 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h3><ol><li><p>key：全大写下划线命名，并且以<code>UNI_APP_</code>开头（<code>ENVIRONMENT</code>除外）</p><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code>UNI_APP_EXAMPLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="取值规范" tabindex="-1"><a class="header-anchor" href="#取值规范" aria-hidden="true">#</a> 取值规范</h3><ol><li><p>value与key之间使用（<code>=</code>）符号连接，中间不添加<code>空格</code>，并且值不加引号（<code>&quot;&quot;</code>、<code>&#39;&#39;</code>、<code>\`\`</code>），同时禁止换行</p><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code>UNI_APP_EXAMPLE=this is example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="注释规范" tabindex="-1"><a class="header-anchor" href="#注释规范" aria-hidden="true">#</a> 注释规范</h3><ol><li><p>以（<code>#</code>）符号开头并且与注释内容之间以一个<code>空格</code>隔开</p><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code># 这里是注释内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="值的类型" tabindex="-1"><a class="header-anchor" href="#值的类型" aria-hidden="true">#</a> 值的类型</h3><ol><li><p>默认情况下，会自动解析值的类型（包括 <code>number</code> 、 <code>boolean</code> 、 <code>null</code> 、 <code>undefined</code> 以及 <code>Json</code> 类型），若无法解析则会以 <code>string</code> 类型处理</p><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code>UNI_APP_EXAMPLE=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>若需要强制为 <code>string</code> 类型，则以（\`）符号开头即可</p><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code>UNI_APP_EXAMPLE=\`true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="指定环境" tabindex="-1"><a class="header-anchor" href="#指定环境" aria-hidden="true">#</a> 指定环境</h3><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><code>ENVIRONMENT</code> 可指定当前环境（影响配置文件读取位置）</p></div><div class="hint-container note"><p class="hint-container-title">ENVIRONMENT 可选值及对应配置文件读取位置</p><p><code>default</code>：运行时 -&gt; .env.development，发行时 -&gt; .env.production</p><p><code>其他值</code>：.env.[ENVIRONMENT]</p></div><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code># .env 所有环境均会读取该文件

# 指定当前环境
ENVIRONMENT=default

# 一些其他的环境变量，所有环境都能访问到
UNI_APP_TEST=test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code># .env.development 开发环境会读取该文件，亦可在.env中手动指定ENVIRONMENT为development

# 请求基地址
UNI_APP_REQUEST_BASE_URL=http://192.168.0.1:8888
# 资源基地址
UNI_APP_SOURCE_BASE_URL=http://192.168.0.1:8888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code># .env.local 可在.env中手动指定ENVIRONMENT为local，则会读取该文件
# 该文件已在.gitignore中忽略，可用于本地调试时使用（若需使用请手动创建该文件）

# 请求基地址
UNI_APP_REQUEST_BASE_URL=http://192.168.0.1:8888
# 资源基地址
UNI_APP_SOURCE_BASE_URL=http://192.168.0.1:8888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),s=[l];function c(r,v){return n(),i("div",null,s)}const u=e(a,[["render",c],["__file","environment.html.vue"]]);export{u as default};
