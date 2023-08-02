---
title: 内置过滤器
icon: filter
---

::: tip
过滤器(filter)的用法请查阅 [过滤器 | Vue官方文档](https://v2.cn.vuejs.org/v2/guide/filters.html)
:::

### defaults(value, def = `"-"`)

默认值，当 `value` 为空时返回 `def`

#### 参数

- value：`string | null` 字符串

- def：`string` 缺省值

#### 返回

`string | null` 处理结果

::: details 使用示例（点击展开查看）
```vue
<template>
  <view>
    <text>{{ str1 | defaults }}</text>
    <!-- => "-" -->

    <text>{{ str2 | defaults }}</text>
    <!-- => "-" -->

    <text>{{ str2 | defaults("暂无数据") }}</text>
    <!-- => "暂无数据" -->

    <text>{{ str3 | defaults }}</text>
    <!-- => "some string" -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      str1: null,
      str2: "",
      str3: "some string"
    };
  };
};
</script>
```
:::

### sources(value, options = `{base: #Config.http.sourceBaseUrl, prefix: null}`)

转换相对路径，为相对路径Url拼接基地址 [网络请求](../guide/network.md)

::: info
详细请查看[StringUtils.convertUrl](https://xiaohejs.xiaohe.ink/utils/string.html#stringutils-converturl)，该过滤器为其引用，此处不再赘述
:::

::: details 使用示例（点击展开查看）
```vue
<template>
  <view>
    <image :src="url | sources"></image>
    <!-- => "#路径基地址/some_url" -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      url: "/some_url"
    };
  };
};
</script>
```
:::