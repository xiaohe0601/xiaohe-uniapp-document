---
title: AppNavbar 导航栏
---

::: tip
本组件用于自定义导航栏（即navbar）
:::

### Props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|show|是否展示导航栏（仅fixed时有效）|Boolean|-|`true`|
|fixed|是否固定在屏幕顶部展示|Boolean|-|`true`|
|placeholder|固定在屏幕顶部展示时是否在文档流中填充等高view|Boolean|-|`true`|
|border|是否展示下边框|Boolean|-|`true`|
|use-custom-slot|是否使用custom插槽（为了更好的兼容性，故需手动指定是否使用插槽）|Boolean|-|`false`|
|show-left|是否展示左侧内容|Boolean|-|`true`|
|use-left-slot|是否使用left插槽|Boolean|-|`false`|
|left-icon|左侧图标（u-icon中的图标）|String|-|arrow-left|
|left-text|左侧文字|String|-|返回|
|show-right|是否展示右侧内容|Boolean|-|`true`|
|use-right-slot|是否使用right插槽|Boolean|-|`false`|
|right-icon|右侧图标（u-icon中的图标）|String|-|-|
|right-text|右侧文字|String|-|-|
|use-center-slot|是否使用center插槽|Boolean|-|`false`|
|title|标题文字|String|-|-|
|title-width|标题宽度|String|-|var(--app-navbar__title_width)|
|text-color|文字颜色|String|-|var(--app-navbar__txt_color)|
|background-color|背景颜色|String|-|var(--color-bg-primary)|
|icon-size|左右图标大小|String|-|var(--app-navbar__icon_size)|
|icon-color|左右图标颜色|String|-|inherit|
|auto-back|点击navbar左侧是否触发navigateBack|Boolean|-|`true`|

### Events

|事件|说明|回调参数|
|---|---|---|
|left-tap|点击navbar左侧|-|
|right-tap|点击navbar右侧|-|

### Slots

|名称|说明|
|---|---|
|custom|标题栏内容（`use-custom-slot` 为 `true` 时有效）|
|left|标题栏内容（`use-left-slot` 为 `true` 且无 `custom` 时有效）|
|center|标题栏内容（`use-center-slot` 为 `true` 且无 `custom` 时有效）|
|right|标题栏内容（`use-right-slot` 为 `true` 且无 `custom` 时有效）|

### CssVars（样式定制）

|名称|说明|默认值|
|---|---|---|
|--app-navbar__body_border|下边框样式|2rpx solid rgba(0, 0, 0, 0.05)|
|--app-navbar__body_zindex|导航栏的z-index|50|
|--app-navbar__body_transition|导航栏的transition|top 0.3s ease-out|
|--app-navbar__title_width|标题宽度|300rpx|
|--app-navbar__txt_size|字体大小|32rpx|
|--app-navbar__txt_color|文字颜色|var(--color-txt-primary)|
|--app-navbar__icon_mright|左右侧图标 `margin-right`|8rpx|
|--app-navbar__icon_size|左右侧图标大小|32rpx|

### 自定义导航栏

- 项目中 `globalStyle.navigationStyle` 已设置为 `custom`，页面中若需导航栏可以使用 `AppNavbar` 组件或其他自定义方式实现

- `AppNavbar` 组件使用前需要先在 `/utils/config.js` 中配置 `route.navbar` 选项，如下所示

	```javascript
	{
	  route: {
	    navbar: {
	      // 首页按钮目标页面地址
	      backToHomePage: "/pages/home/index",
	      // 首页按钮重定向方式
	      backToHomeAction: "switchTab",
	      // 首页按钮排除页面 (即哪些页面永远不展示首页按钮，路径应该与pages.json中的path一致，无需以`/`开头)
	      backToHomeExcludes: ["pages/home/index", "pages/mine/index"]
	    }
	  }
	}
	```

- 自定义导航栏后页面级的下拉刷新时，自定义导航栏也会被一并下拉，若不满足需求可以使用 `z-paging` 或 `scroll-view` 等其他方式实现自定义下拉刷新，详细请查看[z-paging](../guide/others.md#z-paging)部分

- 注意：在有 `AppNavbar` 的页面中，若需要某个元素占满屏幕，需要考虑 `AppNavbar` 的`placeholder` 所占用的高度，一般来说有如下几种做法

	1. 使用 `css` 中的 `calc` 计算出页面中除去 `AppNavbar` 后剩余空间的高度

		- 使用 `VueX` 的 `getters`

			```vue {5,12,18}
			<template>
			  <app-container :percept="thePercept">
			    <app-navbar title="页面标题"></app-navbar>

			    <view :style="{height: `calc(100% - ${navigationBarHeight}px)`}">

			    </view>
			  </app-container>
			</template>

			<script>
			  import { mapGetters } from "vuex";

			  export default {
			    // ...
			    computed: {
			      ...mapGetters({
			        navigationBarHeight: "system/getNavigationBarHeight"
			      })
			    }
			    // ...
			  }
			</script>
			```

		- 使用 `Css` 变量

			```vue {5,13}
			<template>
			  <app-container :percept="thePercept">
			    <app-navbar title="页面标题"></app-navbar>

			    <view class="page-container">

			    </view>
			  </app-container>
			</template>

			<style lang="scss" scoped>
			  .page-container {
			    height: calc(100% - var(--app-navbar__body_height));
			  }
			</style>
			```

	1. 将 `AppNavbar` 的 `placeholder` 属性设置为 `false`，然后将元素高度设置为 `100%`，将与 `AppNavbar` 等高的元素放置在该元素的第一项

		- 使用 `VueX` 的 `getters`

			```vue {3,6,13,19,28}
			<template>
			  <app-container :percept="thePercept">
			    <app-navbar title="页面标题" :placeholder="false"></app-navbar>

			    <view class="page-container">
			      <view :style="{height: `${navigationBarHeight}px`}"></view>

			    </view>
			  </app-container>
			</template>

			<script>
			  import { mapGetters } from "vuex";

			  export default {
			    // ...
			    computed: {
			      ...mapGetters({
			        navigationBarHeight: "system/getNavigationBarHeight"
			      })
			    }
			    // ...
			  }
			</script>

			<style lang="scss" scoped>
			  .page-container {
			    height: 100%;
			  }
			</style>
			```

		- 使用 `Css` 变量

			```vue {3,6,14,18}
			<template>
			  <app-container :percept="thePercept">
			    <app-navbar title="页面标题" :placeholder="false"></app-navbar>

			    <view class="page-container">
			      <view class="page-container__cushion"></view>

			    </view>
			  </app-container>
			</template>

			<style lang="scss" scoped>
			  .page-container {
			    height: 100%;
			  }

			  .page-container__cushion {
			    height: var(--app-navbar__body_height);
			  }
			</style>
			```