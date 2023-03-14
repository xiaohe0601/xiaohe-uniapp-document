---
title: AppAreaPicker 地区选择器
---

::: tip
本组件用于地区选择，传入地区编码即可自动定位至目标地区
:::

### Props

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|code|地区编码|String|-|`null`|
|show（支持 `.sync`）|是否展示选择器|Boolean|-|`false`|
|title|选择器标题|String|-|-|
|level|选择地区层级|Number|-|`3`|
|codeLevelLength|每级地区编码长度|Number|-|`2`|
|codePadChar|地区编码右补字符|String|-|0|
|confirmText|确定按钮文字|String|-|确定|
|cancelText|取消按钮文字|String|-|取消|

### Events

|事件|说明|回调参数|
|---|---|---|
|update:show|show的值改变|value：选择器是否展示|
|confirm|点击确定|indexs：各列选中项索引，value：各列选中项的值，values：各列列表数据|

### 相关说明

- `codeLevelLength` 和 `codePadChar` 两个参数应根据接口实际数据修改默认值或通过组件参数传入

	- 这里以成都市锦江区的标准区划代码为例

		- 锦江区的编码为 51 01 04

		- 成都市的编码为 51 01 00

		- 四川省的编码为 51 00 00

		- 通过以上示例可总结出该编码每一级的长度(`codeLevelLength`)为2，地区编码补齐时右补字符(`codePadChar`)为0

- 组件本身不提供地区数据，需要自行提供接口并改造数据查询相关部分（注意 `AppAreaPicker.vue` 文件的注释中带😀的部分）

	1. 根据实际情况import对应的接口定义，该接口需要可以通过父级地区code查询子地区列表，示例如下

		```javascript
		import { apiQueryAreasByAdcode } from "@/service/index.js";
		```

	1. 改造 `methods` 中的 `requestAreasByAdcode(adcode)` 方法用于获取地区数据

		```javascript
		async requestAreasByAdcode(adcode = "") {
		  try {
		    this.loading = true;

		    // 😀 根据实际情况调用接口查询指定区域下的子区域列表

		    // const { data } = await apiQueryAreasByAdcode({
		    //   "code": adcode
		    // });

		    // 😀 如果接口返回数据结构不是 {code, name, children} 的话，需要手动做一下转换
		    // code：区域编码
		    // name：区域名称
		    // children：子区域列表（这里的值固定设置为null）

		    // return data.map((item) => ({
		    //   code: item.code,
		    //   name: item.name,
		    //   children: null
		    // }));

		    // 😀 接口调整完成后，移除下面这一行
		    return [];
		  } catch {
		    return [];
		  } finally {
		    this.loading = false;
		  }
		}
		```

### 使用示例

```vue
<template>
  <app-container>
    <app-area-picker :show.sync="show"
                     :code="code"
                     @confirm="confirm"></app-area-picker>
  </app-container>
</template>

<script>
  // 注意：示例中的变量名及方法名均为示意，实际情况应根据自己的业务场景按照实际意义命名，而无需跟prop同名
  export default {
    data() {
      return {
        show: false,
        code: null
      }
    },
    methods: {
      confirm({ indexs, value, values }) {
        console.log("地区选择器确定", indexs, value, values);
      }
    }
  }
</script>
```