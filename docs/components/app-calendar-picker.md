---
title: AppCalendarPicker 日历选择器
---

::: tip
本组件用于单/多个日期选择以及日期范围选择
:::

### Props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|show <badge text="sync" type="tip"></badge>|是否展示选择器|Boolean|-|`false`|
|mode|选择器模式|String|single / multiple / range|single|
|title|标题|String|-|选择日期|
|defaultDate|默认选中日期|Number / Array|-|-|
|minDate|最小可选日期|String / Number|-|`0`|
|maxDate|最大可选日期|String / Number|-|`0`|
|maxCount|最多可选多少个日期|Number|-|`Number.MAX_SAFE_INTEGER`|
|maxRange|日期区间最多可选天数|Number|-|`Number.MAX_SAFE_INTEGER`|
|monthNum|最多展示的月份数量|Number|-|`12`|
|allowSameDay|是否允许日期范围的起止日期为同一天|Boolean|-|`true`|
|readonly|是否为只读状态|Boolean|-|`false`|
|prompt|是否为禁止确定状态|Boolean|-|`false`|
|disableButton|是否强制禁用确定按钮|Boolean|-|`false`|
|showTitle|是否显示标题|Boolean|-|`true`|
|showSubtitle|是否显示副标题|Boolean|-|`false`|
|showLunar|是否显示农历|Boolean|-|`true`|
|showMark|是否显示月份背景文字|Boolean|-|`false`|
|showConfirm|是否展示确定按钮|Boolean|-|`true`|
|showRangePrompt|范围选择超过最多可选天数时是否展示提示文案|Boolean|-|`true`|
|startText|范围选择开始日期底部文字|String|-|开始|
|endText|范围选择截止日期底部文字|String|-|截止|
|rangePrompt|范围选择超过最多可选天数时的提示文案|String|-|-|
|confirmText|确定按钮文字|String|-|确定|
|confirmDisabledText|确定按钮处于禁用状态时的文字|String|-|确定|
|closeOnConfirm|点击确定按钮时是否关闭选择器|Boolean|-|`true`|
|closeOnClickOverlay|点击遮罩是否关闭选择器|Boolean|-|`false`|
|color|主题色|String|-|#04a971|
|monthWidth|手动指定月份宽度|Number|-|-|
|rowHeight|日期行高|Number|-|`uni.$u.getPx("120rpx")`|
|transformLandscape|外部是否使用了 `transform` 实现横屏|Boolean|-|`false`|

### Events

|事件|说明|回调参数|
|---|---|---|
|update:show|`show` 的值改变|`value`：选择器是否展示|
|confirm|点击确定|`mode` 取值：`single` -> 单个日期时间戳，`multiple` -> 多个日期时间戳数组，`range` -> 开始截止两个日期时间戳数组|
|close|选择器关闭|-|

### 使用示例

``` vue
<template>
  <app-calendar-picker :show.sync="show" @confirm="confirm"></app-calendar-picker>
</template>

<script>
// 注意：示例中的变量名及方法名均为示意，实际情况应根据自己的业务场景按照实际意义命名，而无需跟prop同名
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    confirm(value){
      console.log("日历选择器确定", value);
    }
  }
};
</script>
```