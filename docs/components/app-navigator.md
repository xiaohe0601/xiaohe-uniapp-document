---
title: AppNavigator 页面链接
---

::: tip
本组件用于快速跳转对应页面
:::

### Props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|url|跳转链接|String|-|-|
|openType|跳转方式|String|navigate / redirect / switchTab / reLaunch / navigateBack / exit|navigate|
|delta|回退的层数 (`openType` 为 `"navigateBack"` 时有效)|Number|-|`1`|
|hoverClass|点击时的样式类|String|-|u-hover-class|
|hoverStopPropagation|是否阻止本节点的祖先节点出现点击态|Boolean|-|`false`|
|hoverStartTime|按住后多久出现点击态|Number|-|`50`|
|hoverStayTime|手指松开后点击态保留时间|Number|-|`Config.defaults.viewHoverStayTime`|
|target|在哪个目标上发生跳转|String|self / miniProgram|self|
|appId|目标小程序的appId (`target` 为 `"miniProgram"` 时有效)|String|-|-|
|path|打开小程序的页面路径 (`target` 为 `"miniProgram"` 时有效)|String|-|-|
|extraData|传递给目标小程序的数据 (`target` 为 `"miniProgram"` 时有效)|Object|-|-|
|version|目标小程序的版本 (`target` 为 `"miniProgram"` 时有效)|String|develop / trial / release|release|
|shortLink|跳转短链 (`target` 为 `"miniProgram"` 时有效)|String|-|-|

### Events

|事件|说明|回调参数|
|---|---|---|
|success|跳转成功 (`target` 为 `"miniProgram"` 时有效)|-|
|fail|跳转成功 (`target` 为 `"miniProgram"` 时有效)|-|
|complete|跳转成功 (`target` 为 `"miniProgram"` 时有效)|-|

### Slots

|名称|说明|
|---|---|
|default|内容|

### 使用示例

``` vue
<template>
  <app-navigator url="目标页面url">
    <!-- 内容 -->
  </app-navigator>
</template>
```