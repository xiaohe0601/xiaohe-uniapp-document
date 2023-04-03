---
title: AppTabbar 底部导航栏
---

::: tip
本组件用于自定义底部导航栏（即tabbar）
:::

### Props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|current|当前选中的tabbar-item下标|Number|-|`0`|
|show|是否展示tabbar|Boolean|-|`true`|
|round|是否展示圆角（圆角大小：`--app-tabbar__body_radius`）|Boolean|-|`false`|
|border|是否展示上边框（边框样式：`--app-tabbar__body_border`）|Boolean|-|`true`|

#### AppTabbarItem

|属性|说明|类型|可选值|默认值|
|---|---|---|---|---|
|text|名称（展示文字）|string|-|-|
|path|页面路径|string|-|-|
|icon|图标（图片绝对路径）|string|-|-|
|iconSelected|选中状态图标（图片绝对路径）|string|-|-|
|iconfont|字体图标（优先级高于icon）|string|-|-|
|badgeKey|badge取值（需提供Vuex中的getters）|string|-|-|

### Events

|事件|说明|回调参数|
|---|---|---|
|input|当前选中组件名称变化|value：当前选中组件名称|

### CssVars（样式定制）

|名称|说明|默认值|
|---|---|---|
|--app-tabbar__body_height|高度|120rpx|
|--app-tabbar__body_radius|上圆角大小|0|
|--app-tabbar__body_border|上边框样式|2rpx solid rgba(0, 0, 0, 0.04)|
|--app-tabbar__body_background|背景颜色|var(--color-bg-primary)|
|--app-tabbar__body_zindex|tabbar的z-index|50|
|--app-tabbar__body_transition|tabbar的transition|bottom 0.3s ease-out|
|--app-tabbar__item_width|tab item宽度|120rpx|
|--app-tabbar__icon_size|图标大小|56rpx|
|--app-tabbar__icon_fontsize|图标的font-size（使用iconfont字段时有效）|50rpx|
|--app-tabbar__txt_mtop|文字的margin-top|6rpx|
|--app-tabbar__txt_size|文字大小|24rpx|
|--app-tabbar__txt_weight|文字字重|500|
|--app-tabbar__txt_color|文字颜色|#bbbdd4|
|--app-tabbar__txt_color--selected|文字颜色（选中状态）|var(--color-accent)|
|--app-tabbar__badge_top--dot|圆点型badge的top|0|
|--app-tabbar__badge_right--dot|圆点型badge的right|20rpx|
|--app-tabbar__badge_size--dot|圆点型badge大小|14rpx|
|--app-tabbar__badge_radius--dot|圆点型badge圆角大小|50%|
|--app-tabbar__badge_top--text|文字型badge的top|-10rpx|
|--app-tabbar__badge_right--text|文字型badge的left|10rpx|
|--app-tabbar__badge_size--text|文字型badge文字大小|20rpx|
|--app-tabbar__badge_padding--text|文字型badge内边距|0 10rpx|
|--app-tabbar__badge_radius--text|文字型badge圆角大小|20rpx|
|--app-tabbar__badge_color|文字型badge文字颜色|#ffffff|
|--app-tabbar__badge_background|badge背景颜色|#fc3b3b|

### 自定义Tabbar

1. 首先需要在 `pages.json` 中的 `tabBar.list` 中填写 `tabbar` 页面的路径（其中仅需填写 `pagePath` 字段），示例如下

	```json
	{
	  "tabBar": {
	    // #ifdef MP-WEIXIN || MP-QQ || MP-TOUTIAO
	    "custom": true,
	    // #endif
	    // #ifdef MP-ALIPAY
	    "customize": true,
	    // #endif
	    // #ifdef APP-PLUS || H5
	    "height": "0.01px",
	    "borderStyle": "#00000000",
	    // #endif
	    "list": [{
	      "pagePath": "pages/home/index"
	    }, {
	      "pagePath": "pages/mine/index"
	    }]
	  }
	}
	```

	- 使用条件编译开启对应平台的 `自定义tabBar` 配置项，由于 `APP-PLUS || H5` 端未提供 `tabBar.custom` 选项，所以这里将 `height` 设置为 `0.01px`，并将 `borderStyle` 设置为 `#00000000`，以实现隐藏 `tabbar` 的效果

	- 若目标平台未提供 `自定义tabBar` 配置项，则在 `App.vue` 中的 `onLaunch` 调用 `uni.hideTabBar()` 以隐藏 `原生tabBar`

	- 若目标平台未提供 `原生tabBar`，则需要自行通过其他方式实现

1. 在 `/utils/config.js` 中配置 `route.tabbar.list` 选项，可配置的字段参考上方 `AppTabbarItem` 表格中的说明，示例如下

	```javascript
	{
	  route: {
	    tabbar: {
	      list: [{
	        text: "首页",
	        path: "/pages/home/index",
	        icon: "/static/icons/tabbar_home.png",
	        iconSelected: "/static/icons/tabbar_home_selected.png"
	      }, {
	        text: "我的",
	        path: "/pages/mine/index",
	        icon: "/static/icons/tabbar_mine.png",
	        iconSelected: "/static/icons/tabbar_mine_selected.png"
	      }]
	    }
	  }
	}
	```

	- 注意 `path` 字段和 `pages.json` 中 `pagePath` 字段的差异，这里需要填写以 `/` 开始的页面绝对路径

1. 接下来即可使用 `AppTabbar` 组件，示例如下

	```vue
	<template>
	  <app-container :percept="thePercept">
	    <app-navbar title="首页" :show-left="false"></app-navbar>


	    <app-tabbar :current="0"></app-tabbar>

	    <app-safearea :cushion-height="140"></app-safearea>
	  </app-container>
	</template>
	```

	- 其中 `app-tabbar` 上的 `current` 属性应填写当前页面在 `route.tabbar.list` 中的下标，比如上方的示例是“首页”，他在 `route.tabbar.list` 中的下标是 `0`，所以 `current` 应该传值 `0`

	- 另外需要注意 `AppTabbar` 是 `fixed` 在页面上的，所以会挡住页面底部的内容，需要在可滚动部分的最后一项添加一个垫高（注意考虑安全区域），可以如上方所示使用 `AppSafearea` 组件