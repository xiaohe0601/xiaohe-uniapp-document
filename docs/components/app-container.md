---
title: AppContainer 页面容器
---

::: tip
本组件用于容纳页面内的所有元素，并向子元素提供Css变量，实现主题切换等功能。注意：本组件应为页面的根组件
:::

### Props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|percept|所在页面是否被展示（传入 `lifecycleMixin` 中的 `percept`）|Boolean|-|`false`|
|lifecycle|所在页面生命周期（传入 `lifecycleMixin` 中的 `lifecycle`）|String|-|`null`|
|background-color|背景颜色|String|-|var(--color-bg-normal)|
|status-front-color|状态栏前景色（若为 `auto` 则会根据当前主题的 `brightness` 自动变化颜色，详细请查看[主题](../guide/theme.md)部分）|String|auto / #ffffff / #000000|auto|
|status-background-color|状态栏背景色（`auto` 同上）|String|auto / 16进制颜色值|auto|

### Slots

|名称|说明|
|---|---|
|default|页面内容|

### CssVars（样式定制）

|名称|说明|默认值|
|---|---|---|
|--app-main__space_vertical|纵向空隙大小|20rpx|
|--app-main__space_horizontal|横向空隙大小|22rpx|
|--app-main__txt_size|文字大小|28rpx|
|--app-main__txt_weight|文字字重|400|
|--app-main__txt_color|文字颜色|var(--color-txt-primary)|

### CssVars（组件提供）

|名称|说明|
|---|---|
|--app-navbar__status_height|状态栏高度|
|--app-navbar__title_height|标题栏高度|
|--app-navbar__body_height|导航栏高度（= 状态栏高度 + 标题栏高度）|
|--app-navbar__status_color|计算后的状态栏前景色（对应 `status-front-color`）|
|--app-navbar__status_background|计算后的状态栏背景色（对应 `status-background-color`）|
|--app-safearea__body_top|上方安全区域大小|
|--app-safearea__body_right|右侧安全区域大小|
|--app-safearea__body_bottom|下方安全区域大小|
|--app-safearea__body_left|左侧安全区域大小|
|--app-scroller__cushion_height|`app-scroller` 垫高高度，详细请查看[z-paging](../guide/others.md#z-paging)部分|

### 相关说明

- 项目中的主题切换采用的是 `CssVar` 方案，由于小程序端目前无法给 `page` 直接添加 `class` 从而导致需要采用一个 `view`（即 `AppContainer`）做为根容器，用于接受主题相关 `class` 并承载页面内容滚动。但是这将导致页面滚动相关事件(`onPageScroll`、`onReachBottom` 等)无法触发，若需监听页面滚动事件，可通过 `scroll-view` 等方式实现（相关注意事项请查看[自定义导航栏](./app-navbar.md#自定义导航栏)部分）
