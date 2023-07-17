---
title: AppPicker 选择器
---

::: tip
本组件用于单列或多列选项选择
:::

### Props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|show <badge text="sync" type="tip"></badge>|是否展示选择器|Boolean|-|`false`|
|value <badge text="v-model" type="tip"></badge>|当前绑定值|Boolean|-|-|
|showToolbar|是否显示顶部的操作栏|Boolean|-|`true`|
|title|顶部标题|String|-|-|
|columns|每一列的数据列表|Array|-|`[]`|
|singleColumn|是否为单列模式 (若为true，则columns只需要传递1维数组，内部会自动构造为u-picker所需的二维数组)|Boolean|-|`true`|
|loading|是否显示加载中状态|Boolean|-|`false`|
|confirmText|确认按钮的文字|String|-|确定|
|cancelText|取消按钮的文字|String|-|取消|
|itemHeight|各列中单个选项的高度|String / Number|-|`44`|
|visibleItemCount|每列中可见选项的数量|Number|-|`5`|
|uniqueKey|唯一标识键名 (对应的属性值应即为v-model的值，亦用于定位当前选中位置)|String|-|id|
|keyName|展示文本属性键名|String|-|text|
|asyncClose|是否异步关闭|Boolean|-|`false`|
|closeOnConfirm|点击确定按钮时是否关闭选择器|Boolean|-|`true`|
|closeOnClickOverlay|点击遮罩是否关闭选择器|Boolean|-|`false`|
|defaultIndex|各列的默认索引|Array|-|`[]`|
|reserveIndexs|是否保留上次滚动位置 (若为 `false` 则会在每次展示时回到当前绑定值所在位置)|Boolean|-|`false`|
|immediateChange|是否在手指松开时立即触发 `change` 事件|Boolean|-|`true`|

### Events

|事件|说明|回调参数|
|---|---|---|
|update:show|`show` 的值改变|`value`：选择器是否展示|
|input|点击确定|`value`：选中行唯一标识值 (`singleColumn` 为 `false` 时，返回数组表示各列选中行的唯一标识值)|
|confirm|点击确定|`indexs`：各列选中项索引，`value`：各列选中项的值，`values`：各列列表数据|
|change|当选择值变化时触发|`indexs`：各列选中项索引，`value`：各列选中项的值，`values`：各列列表数据，`index`：当前变化列选中项索引，`columnIndex`：当前变化列索引|
|cancel|点击取消|-|
|close|选择器关闭|-|

### Methods

|名称|说明|参数|
|---|---|---|
|setIndexs|设置对应列的选择值 [链接](https://www.uviewui.com/components/picker.html#methods)|index: `number`，setLastIndex: `boolean`|
|setColumnValues|设置对应列选项的所有值 [链接](https://www.uviewui.com/components/picker.html#methods)|columnIndex: `number`，values: `array`|

### 使用示例

``` vue
<template>
  <app-picker v-model="current" :show.sync="show" :columns="columns"></app-picker>
</template>

<script>
// 注意：示例中的变量名及方法名均为示意，实际情况应根据自己的业务场景按照实际意义命名，而无需跟prop同名
export default {
  data() {
    return {
      show: false,
      current: null,
      // 注意跟u-picker的差异，因为singleColumn默认为true，当单列选择时只需要传一维数组即可
      columns: [{id: 1, text: "选项1"}, {id: 2, text: "选项2"}, {id: 3, text: "选项3"}]
    };
  }
};
</script>
```