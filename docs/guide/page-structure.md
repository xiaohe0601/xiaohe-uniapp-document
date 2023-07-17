---
title: 页面结构
icon: mobile
---

### 代码示例

```vue {2,3,7,12,16}
<template>
  <app-container :percept="percept"> <!-- 页面容器 -->
    <app-navbar title="页面标题"></app-navbar> <!-- 导航栏 -->

    <!-- 页面内容 -->

    <app-safearea></app-safearea> <!-- 安全区域 -->
  </app-container>
</template>

<script>
import lifecycleMixin from "@/mixins/lifecycle.js";

export default {
  // 页面生命周期 mixin
  mixins: [lifecycleMixin],
  data() {
    return {};
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>

</style>
```

::: info
上方示例是一个页面的基本框架
:::

### 示例解析

1. 将 `lifecycleMixin` 引入(`import`)并混入(`mixin`)当前页面

1. `AppContainer` 组件作为页面的根元素（已全局导入，无需 `import`），并将 `lifecycleMixin` 中的 `percept` 传给 `AppContainer` 的 `percept` 参数

1. 若页面需要导航栏，则添加 `AppNavbar` 组件至页面中（已全局导入，无需 `import`），组件 `fixed` 参数默认为 `true`，导航栏会自动固定在页面最上方，并且在文档流中添加一个导航栏同等高度的 `placeholder` 来填充导航栏的位置，详细请查看[自定义导航栏](../components/app-navbar.md#自定义导航栏)

2. 根据需要可以在页面中可滚动到屏幕底部的元素末尾添加 `AppSafearea` 组件来垫高滚动内容，详细请查看[安全区域](../components/app-safearea.md#安全区域)
