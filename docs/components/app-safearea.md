---
title: AppSafearea 安全区域
---

::: tip
本组件用于安全区域占位，且可提供额外垫高
:::

### Props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|direction|安全区域方向|String|top / right / bottom / left|bottom|
|cushion|是否垫高|Boolean|-|`true`|
|cushion-height|垫高高度（单位：rpx）|Number|-|`60`|

### 安全区域

- 一般情况，直接将 `AppSafearea` 添加至 `AppContainer` 末尾

	```vue {7}
	<template>
	  <app-container :percept="percept">
	    <app-navbar title="页面标题"></app-navbar>

	    <!-- 页面内容 -->

	    <app-safearea></app-safearea>
	  </app-container>
	</template>
	```

- 若页面内包含可滚动到屏幕底部的元素，则将 `AppSafearea` 添加至滚动元素末尾

	```vue {8}
	<template>
	  <app-container :percept="percept">
	    <app-navbar title="页面标题"></app-navbar>

	    <view :style="{height: `calc(100% - ${navigationBarHeight}px)`}">
	      <!-- 页面内容 -->

	      <app-safearea></app-safearea>
	    </view>
	  </app-container>
	</template>
	```

- 若页面包含 `fixed` 到屏幕底部的元素，则将 `AppSafearea` 添加至 `fixed` 元素底部并将 `cushion` 属性设置为 `false`，同时页面中可滚动元素末尾也需要添加 `AppSafearea` 并将 `cushion-height` 设置为 `fixed` 元素的高度（单位：`rpx`）

	```vue {7,11}
	<template>
	  <app-container :percept="percept">
	    <app-navbar title="页面标题"></app-navbar>

	    <!-- 页面内容 -->

	    <app-safearea :cushion-height="100"></app-safearea>

	    <view class="page-footer">
	      <view class="page-footer__inner"></view>
	      <app-safearea :cushion="false"></app-safearea>
	    </view>
	  </app-container>
	</template>

	<style lang="scss" scoped>
	  .page-footer {
	    position: fixed;
	    right: 0;
	    bottom: 0;
	    left: 0;
	  }

	  .page-footer__inner {
	    height: 100rpx;
	  }
	</style>
	```
