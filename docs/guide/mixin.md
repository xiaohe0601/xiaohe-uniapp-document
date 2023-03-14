---
title: 内置混入
icon: material
---

::: tip
混入(mixin)的用法请查阅 [混入 | Vue官方文档](https://v2.cn.vuejs.org/v2/guide/mixins.html)
:::

### indexMixin

::: note 说明
`/mixins/index.js` 是全局注册的混入，Vue实例中可通过 `this` 访问
:::

::: warning
请谨慎使用全局混入，因为它会影响每个单独创建的Vue实例（包括第三方组件）
:::

::: info
默认包含的内容如下所示
:::

#### computed

- `AppConfig`：全局配置的引用

#### methods

- `preventDefault()`：只是一个空方法

- `destroyToastTimer()`：一般在页面或组件销毁时调用，用以销毁未关闭的 `Toast` 定时器，防止内存泄漏或其他业务异常（按需使用）

### lifecycleMixin

::: note 说明
`/mixins/lifecycle.js` 用于存储当前页面的生命周期变化，以便于页面内组件可感知其所在页面当前所处的生命周期（仅能在pages.json中配置的页面使用），一般用于 `AppContainer` 组件
:::

::: info
使用示例请参考[页面结构](./page-structure.md)部分
:::

### echartsMixin

::: note 说明
`/mixins/echarts.js` 提供了3个 `echarts` 相关的封装方法，旨在降低uniapp中 `echarts` 的使用难度以及减少重复代码（基于DCloud插件市场中的[百度图表 echarts](https://ext.dcloud.net.cn/plugin?id=4899)实现）
:::

::: info
使用示例如下所示
:::

```vue {3,8,13,17}
<template>
  <app-container>
    <l-echart ref="charts" class="charts"></l-echart>
  </app-container>
</template>

<script>
  import echartsMixin from "@/mixins/echarts.js";

  import chartsOption from "这里是自己的echarts配置数据路径";

  export default {
    mixins: [echartsMixin],
    methods: {
      async testUpdateChartsOption() {
        // 只需一行即可实现图表的创建及更新，无需判断图表实例是否存在，方法内部会自动处理图表实例的创建及缓存
        await this.updateEchartsOption(this.$refs.charts, "chartsInstance", chartsOption);
      }
    }
  }
</script>
```

::: warning
注意需要根据实际情况修改文件中 `echarts` 的 `import` 来源，或者可以使用[动态执行](./eval.md)部分中所提到的 `dynamicRequire` 进行改造，改造示例如下
:::

```javascript {6,8,11,17,22,24,25,30}
// /mixins/echarts.js

// 该示例中仅提供变化部分，其余保持原样

// 添加下面2行引入相关方法及配置
import Config from "@/utils/config.js";

import { dynamicRequire } from "@/utils/script.js";

// 移除下面这1行
import * as echarts from "echarts";

export default {
  // 根据需要在data中添加echarts加载状态标志量
  data() {
    return {
      echartsLoaded: false
    }
  },
  // 添加mounted方法以加载echarts库
  async mounted() {
    const { echarts } = await dynamicRequire(Config.cdn.echarts);

    this.echarts = echarts;
    this.echartsLoaded = true;
  },
  methods: {
    ensureEchartsInstance(ref, instanceKey) {
      // 添加下面这1行
      const { echarts } = this;

      // 以下为原本的方法实现
      // ...
    }
  }
}
```

::: danger
目前采用[动态执行](./eval.md)技术的微信小程序已无法通过审核，请谨慎使用
:::