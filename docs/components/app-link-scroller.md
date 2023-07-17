---
title: AppLinkScroller 联动滚动器
---

::: tip
本组件用于联动滚动，左侧点击可控制右侧滚动，右侧滚动可自动定位并高亮左侧位置
:::

### Props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|current <badge text="sync" type="tip"></badge>|当前左侧选中位置索引|Number|-|`0`|
|categoryItemIdPrefix <badge text="必传" type="danger"></badge>|左侧元素id前缀|String|-|-|
|contentItemIdPrefix <badge text="必传" type="danger"></badge>|右侧元素id前缀|String|-|-|
|contentItemClass <badge text="必传" type="danger"></badge>|右侧元素class|String|-|-|
|threshold|当前组件距离容器顶部高度 (若组件所在页面采用自定义导航栏则需要额外加上自定义导航栏的高度)|Number|-|`0`|
|persist|右侧滚动自动定位左侧位置时预留高度|Number|-|`uni.upx2px(300)`|
|tolerant|右侧滚动自动定位左侧位置时容错高度 (防止左侧定位选中到上一个位置)|Number|-|`uni.upx2px(4)`|
|enablePassive|开启passive特性 (能优化一定的滚动性能，注意查看[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#enablePassiveEvent)相关问题)|Boolean|-|`true`|

### Events

|事件|说明|回调参数|
|---|---|---|
|update:current|当前左侧选中位置变化|`value`：当前左侧选中位置索引|

### Slots

|名称|说明|
|---|---|
|categories|左侧内容|
|contents|右侧内容|

### CssVars（样式定制）

|名称|说明|默认值|
|---|---|---|
|--app-link-scroller__scroll_width--categories|左侧宽度|210rpx|

### Methods

|名称|说明|参数|
|---|---|---|
|scrollToCategoryIndex|控制左侧滚动至指定位置|index: `number` 目标位置|
|scrollToContentIndex|控制右侧滚动至指定位置 (当点击左侧item后，需通过ref手动调用该方法，详细请查看下方示例)|index: `number` 目标位置|

### 使用示例

``` vue {4,5,6,10,13,21,22}
<template>
  <app-link-scroller ref="scroller"
                     :current.sync="current"
                     category-item-id-prefix="category-"
                     content-item-class="content-item"
                     content-item-id-prefix="content-">
    <view slot="categories">
      <view v-for="(item, index) in contents"
            :key="item.id"
            :id="`category-${index}`"
            class="category-item"
            :class="{'current': current === index}"
            @tap="$refs.scroller.scrollToContentIndex(index)">
        <!-- 内容 -->
      </view>
    </view>
  
    <view slot="contents">
      <view v-for="(item, index) in contents"
            :key="item.id"
            :id="`content-${index}`"
            class="content-item">
        <!-- 内容 -->
      </view>
    </view>
  </app-link-scroller>
</template>

<script>
// 注意：示例中的变量名及方法名均为示意，实际情况应根据自己的业务场景按照实际意义命名，而无需跟prop同名
export default {
  data() {
    return {
      current: 0,
      contents: [{id: 1, list: []}, {id: 2, list: []}, {id: 3, list: []}]
    };
  }
};
</script>
```