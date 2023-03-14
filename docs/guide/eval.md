---
title: 动态执行
icon: back-stage
---

::: danger 注意
目前采用该技术的微信小程序已无法通过审核，请谨慎使用
:::

::: note 微信小程序审核驳回信息
你好，当前提审的小程序包中可能含有页面文件采用内置JavaScript解释器（如eval5、estime、evil-eval等）的方式，动态执行JS代码、对小程序wxml代码进行热更新。出于安全考虑，建议你立即调整技术方案，去除相关内容，消除风险。[参考文档](https://developers.weixin.qq.com/community/minihome/doc/0000ae500e4fd0541f2ea33755b801)
:::

::: tip
小程序中若需要使用第三方JavaScript库时，本身仅支持 `npm` 或直接下载等方式将其静态存入项目中，而不支持网页端的 `script` 方式引入网络资源，且有主包大小限制。当需要使用某些本身体积较大的JavaScript库（例如 `echarts` 等）并且业务场景中只能将其存入主包的情况时，则会超出主包大小限制，此时可采用项目中 `/utils/script.js` 中所提供的 `dynamicRequire` 方法来实现动态引入网络资源
:::

- 方法内部对所加载的JavaScript库按照 `url` 做了缓存，当需要加载一个网络JavaScript库时，加载顺序如下

	1. 运行时内存

	1. 持久化存储

	1. 网络请求

- 由于网络请求是耗时操作，并且程序会将所加载的库缓存至 `Storage` 中，所以需要加载的JavaScript库不宜过大（单库大小 < `1M`，总大小 < `10M`）。加载过大的网络库对用户的网络性能及手机性能有更高的要求，所以请尽量采用更小的库来实现，例如使用 `dayjs` 替代 `moment`

- `script.js` 中提供了多个方法，且均有各自的配置参数，具体请参看文件中的注释信息（`/utils/script.js`），此处不再赘述

::: info
使用前先安装相关依赖（`eval5`）
:::

::: code-tabs#npm
@tab yarn
```bash
yarn add eval5
```

@tab npm
```bash
npm install eval5
```
:::

::: details 使用示例（点击展开查看）

```javascript
import { dynamicRequire } from "@/utils/script.js";

// await方式（推荐）
{
  async onLoad() {
    const { echarts } = await dynamicRequire("echarts的cdn地址");

    console.log("加载成功", echarts);
  }
}

// Promise方式
{
  async onLoad() {
    dynamicRequire("echarts的cdn地址").then(({ echarts }) => {
      console.log("加载成功", echarts);
    });
  }
}
```

``` javascript
// 实际应用场景中建议使用全局配置管理cdn地址以便于维护
// /utils/config.js
{
  // ...
  cdn: {
    echarts: "echarts的cdn地址"
  }
  // ...
}

{
  async onLoad() {
    const { echarts } = await dynamicRequire(Config.cdn.echarts);

    console.log("加载成功", echarts);
  }
}
```
:::