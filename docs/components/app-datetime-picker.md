---
title: AppDatetimePicker 日期时间选择器
---

::: tip
本组件用于日期时间选择
:::

### Props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|show <badge text="sync" type="tip"></badge>|是否展示选择器|Boolean|-|`false`|
|mode|选择器模式|String|date / time / year-month / datetime|date|
|value <badge text="v-model" type="tip"></badge>|当前绑定值|String / Number|-|-|
|defaultValue|默认值 (`string` 或 `number` 类型为明确指定默认值，若为 `true` 则指定当前时间)|String / Number / Boolean|-|-|
|showToolbar|是否显示顶部的操作栏|Boolean|-|`true`|
|title|顶部标题|String|-|-|
|maxDate|可选的最大时间|Number|-|10年之前|
|minDate|可选的最小时间|Number|-|10年之后|
|maxHour|可选的最大小时|Number|-|`23`|
|minHour|可选的最小小时|Number|-|`0`|
|maxMinute|可选的最大分钟|Number|-|`59`|
|minMinute|可选的最小分钟|Number|-|`0`|
|filter|选项过滤函数|Function|-|-|
|formatter|选项格式化函数|Function|-|-|
|loading|是否显示加载中状态|Boolean|-|`false`|
|confirmText|确认按钮的文字|String|-|确定|
|cancelText|取消按钮的文字|String|-|取消|
|itemHeight|各列中单个选项的高度|String / Number|-|`44`|
|visibleItemCount|每列中可见选项的数量|Number|-|`5`|
|asyncClose|是否异步关闭|Boolean|-|`false`|
|closeOnConfirm|点击确定按钮时是否关闭选择器|Boolean|-|`true`|
|closeOnClickOverlay|点击遮罩是否关闭选择器|Boolean|-|`false`|
|reserveIndexs|是否保留上次滚动位置 (若为 `false` 则会在每次展示时回到当前绑定值所在位置)|Boolean|-|`false`|
|immediateChange|是否在手指松开时立即触发 `change` 事件|Boolean|-|`true`|

### Events

|事件|说明|回调参数|
|---|---|---|
|update:show|`show` 的值改变|`value`：选择器是否展示|
|input|点击确定|`value`：当前选择的值|
|confirm|点击确定|`value`：当前选择的值，`mode`：当前选择器模式|
|change|当选择值变化时触发|`value`：当前选择的值，`mode`：当前选择器模式|
|cancel|点击取消|-|
|close|选择器关闭|-|

### Methods

|名称|说明|参数|
|---|---|---|
|setFormatter|设置选项格式化函数 (为兼容微信小程序而暴露的内部方法)|formatter: `(type, value) => value` 格式化函数|

### 使用示例

``` vue
<template>
  <app-datetime-picker v-model="value" :show.sync="show" mode="date" default-value></app-datetime-picker>
</template>

<script>
// 注意：示例中的变量名及方法名均为示意，实际情况应根据自己的业务场景按照实际意义命名，而无需跟prop同名
export default {
  data() {
    return {
      show: false,
      value: null
    };
  }
};
</script>
```