---
title: 主题
icon: palette
---

::: tip
项目中采用了主流高效的[CssVar](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var)方式实现了主题切换，并且提供了方便易用的配置
:::

1. 首先需要定义主题相关的css变量(`/styles/theme.scss`)

	- 项目中css变量的命名规范

		- 基础css变量：`--属性-名称: 变量值;`（例如：`--color-divider: #dadbde;` 指的是分割线颜色）

		- 模块或组件中的css变量：`--模块或组件名称__内部的某个元素_元素的属性: 变量值;`（例如：`--app-tabbar__body_height: 120rpx;` 指的是AppTabbar组件主体内容的高度）

		- 其中 `--color-accent` 为主题色，可根据产品实际情况修改

		- 字体颜色有4种定义，即 `--color-txt-primary`、`--color-txt-secondary`、`--color-txt-tertiary`、`--color-txt-other`，分别指的是UI设计规范中的由深至浅的4级字体颜色，可根据UI中的实际情况配置相应的颜色，或者增加/删除字体颜色等级

		- 背景颜色有2种定义，即 `--color-bg-primary` 和 `--color-bg-normal` 分别是指主要背景颜色和普通背景颜色，亦可根据实际情况修改

	- `theme.scss` 中包含了3个模块，其中 `.app-container` 下定义的是所有主题均有效的css变量，`.app-container.app-theme-light` 和 `.app-container.app-theme-dark` 下定义的是默认的 `light` 和 `dark` 两个主题下分别有效的css变量

1. 编写页面样式时，若需要目标颜色跟随主题变化，则不再使用固定的颜色值，而是使用 `theme.scss` 中定义的css变量，当主题切换时颜色即可自动变化，例如：`color: var(--color-txt-primary);`

1. 若需要手动修改主题，可调用 `/store/modules/theme.js` 中的 `setCurrentTheme`，例如：`this.$store.commit("theme/setCurrentTheme", {appTheme: "dark", brightness: "dark"});`

1. 若需要获取当前的主题信息 `/store/modules/theme.js` 中亦提供了相关的 `getters` 用于查询当前状态，也可根据实际情况扩展其他的 `getter` 用于适配主题变化

::: info
下方是一段提供用户手动切换主题功能的示例代码
:::

```vue {48,49,55-58,60-63,66,69}
<template>
  <app-container :percept="thePercept">
    <app-navbar title="首页" :show-left="false"></app-navbar>

    <view class="theme-demo">
      <text class="theme-demo__tips">主题切换示例</text>

      <view class="theme-demo-item">
        <text class="theme-demo-item__label">深色模式</text>
        <view class="theme-demo-item__switch">
          <u-switch :value="currentIsDarkTheme"
                    active-color="var(--color-accent)"
                    @change="toggleDarkTheme"></u-switch>
        </view>
      </view>

      <view class="theme-demo-item">
        <text class="theme-demo-item__label">跟随系统</text>
        <view class="theme-demo-item__switch">
          <u-switch :value="themeWithSystem"
                    active-color="var(--color-accent)"
                    @change="toggleThemeWithSystem"></u-switch>
        </view>
      </view>
    </view>

    <app-tabbar :current="0"></app-tabbar>

    <app-safearea :cushion-height="140"></app-safearea>
  </app-container>
</template>

<script>
  import AppTabbar from "@/components/AppTabbar.vue";

  import lifecycleMixin from "@/mixins/lifecycle.js";

  import { mapGetters } from "vuex";

  export default {
    components: { AppTabbar },
    mixins: [lifecycleMixin],
    data() {
      return {};
    },
    computed: {
      ...mapGetters({
        currentIsDarkTheme: "theme/currentIsDarkTheme",
        themeWithSystem: "theme/isThemeWithSystem"
      })
    },
    methods: {
      toggleDarkTheme(value) {
        if (value) {
          this.$store.commit("theme/setCurrentTheme", {
            appTheme: "dark",
            brightness: "dark"
          });
        } else {
          this.$store.commit("theme/setCurrentTheme", {
            appTheme: "light",
            brightness: "light"
          });
        }

        this.$store.commit("theme/setThemeWithSystem", { themeWithSystem: false });
      },
      toggleThemeWithSystem(value) {
        this.$store.commit("theme/setThemeWithSystem", { themeWithSystem: value });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .theme-demo {
    padding: 0 var(--app-main__space_horizontal);
    margin: var(--app-main__space_vertical) 0;
  }

  .theme-demo-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20rpx;
  }

  .theme-demo__tips {
    font-size: 24rpx;
    color: var(--color-txt-tertiary);
  }

  .theme-demo-item__label {
    font-size: 30rpx;
  }

  .theme-demo-item__switch {
    margin-left: 20rpx;
  }
</style>
```