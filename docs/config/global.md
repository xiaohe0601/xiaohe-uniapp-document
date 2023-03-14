---
title: 全局配置
icon: window
---

::: tip
`/utils/config.js` 为项目的全局配置文件
:::

::: warning
请勿运行时修改配置文件数据，以免造成意料之外的错误
:::

::: info
除了[网络请求](../guide/network.md)和[自定义Tabbar](../components/app-tabbar.md#自定义tabbar)部分提到的配置以外，还有一些其他可配置项如下所示
:::

#### 默认值 `Config.defaults`

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|currentTheme|默认主题|AppTheme（见下表说明）|-|`{appTheme: "light", brightness: "light"}`|
|systemTheme|默认系统主题（仅不支持获取系统主题时使用，程序获取到系统主题时将会被更新）|string|light / dark|light|
|themeWithSystem|默认主题是否跟随系统|boolean|-|`true`|
|statusBarHeight|默认状态栏高度（单位：px）（初始状态下使用，程序获取到状态栏高度时将会被更新）|number|-|`20`|
|titleBarHeight|默认标题栏高度（单位：px）（在App或H5等不能获取标题栏高度的环境中使用）|number|-|`40`|

##### AppTheme

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|appTheme|App主题（可自行扩展，详细请查看[主题](../guide/theme.md)部分）|string|light / dark|-|
|brightness|主题亮度（一般用于控制状态栏颜色等）|string|light / dark|-|

#### 持久化存储 `Config.storage`

|参数|说明|默认值|
|---|---|---|
|currentTheme|当前主题|CURRENT_THEME|
|themeWithSystem|主题是否跟随系统|THEME_WITH_SYSTEM|
|token|token|TOKEN|

::: info
建议在使用 `Storage` 相关API时，其中的 `key` 使用全局的常量以方便维护，示例如下
:::

```javascript
import Config from "@/utils/config.js";

uni.setStorageSync(Config.storage.token, "这是一个token");

const token = uni.getStorageSync(Config.storage.token);
```