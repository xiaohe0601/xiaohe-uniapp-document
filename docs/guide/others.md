---
title: 其他
icon: file
---

### [UView UI](https://www.uviewui.com)

::: info
由于 `UView UI` 的组件都将 `virtualHost` 属性设置为 `true`，其目的是将 `微信小程序` 中的自定义节点设置成虚拟的，使其更加接近Vue组件的表现，能更好的使用flex属性，但是这同时也导致了一些问题，比如微信小程序端不直接给 `uview-ui` 的组件添加 `class`。`manifest` 中的 `mergeVirtualHostAttributes` 参数为 `true` 时，虽然可以合并 `class` 至 `uview-ui` 组件上，但是经测试并不能成功应用自定义 `class` 的属性，所以为了能够更好的多端兼容，若需要给 `uview-ui` 的组件添加 `class` 时，在其外层使用 `view` 包裹，并将 `class` 添加至外层 `view` 上，然后样式中在外层 `class` 下选择 `uview-ui` 组件的 `class` 进而去修改样式，示例如下
:::

```vue {3-5,10-17}
<template>
  <app-container :percept="percept">
    <view class="my-button">
      <u-button text="这是一个按钮"></u-button>
    </view>
  </app-container>
</template>

<style lang="scss" scoped>
  .my-button {
    // 若在scoped节点下，需要使用::v-deep包裹，反之，若不在scoped节点下则无须使用::v-deep
    ::v-deep {
      .u-button {
        background-color: red;
      }
    }
  }
</style>
```

- `UView UI` 组件库目前尚存在一些缺陷或参数缺失，已发现部分如下所示

	- 项目中已修复缺陷或添加参数，并且已向 `UView UI` 官方仓库提交PR，等官方合入PR并更新版本后，会及时更新当前项目中的 `UView UI` 版本，若自行更新组件版本时，请注意当前修改项

	- `u-input` (`/uni_modules/uview-ui/components/u-input/u-input.vue`)

		- 强制input处于同层状态：`<input` 新增 `always-embed`

		- `focus` 事件参数缺失：`onFocus(event) {` 新增 `this.$emit("focus", event);`

	- `u--input` (`/uni_modules/uview-ui/components/u-input/u--input.vue`)

		- `focus` 事件参数缺失：`@focus="e => $emit('focus', e)"`

	- `u-picker` (`/uni_modules/uview-ui/components/u-picker/u-picker.vue`)

		- 小程序端深色模式支持：`<picker-view` 新增 `mask-class="uni-picker-view-mask"`

	- `u-datetime-picker` (`/uni_modules/uview-ui/components/u-datetime-picker`)

		- 滚动到最后一项时需等待动画结束才能正确确认，新增 `immediateChange` 参数

			- `/props.js`：新增 `immediateChange: { type: Boolean, default: uni.$u.props.picker.immediateChange }`

			- `/u-datetime-picker.vue`：`<u-picker` 新增 `:immediateChange="immediateChange"`

	- `u-swipe-action-item` (`/uni_modules/uview-ui/components/u-swipe-action-item`)

		- 修复 `open`、`close` 事件缺失以及添加 `change` 事件

			- `/u-swipe-action-item.vue`：`watch` 组件的 `status` 属性并 `emit` 对应的事件

				```javascript
				watch: {
				  // 在watch模块中添加如下代码
				  status(value) {
				    this.$emit(value)
				    this.$emit('change', value)
				  }
				}
				```

		- 添加打开状态对应的 `class`

			- `/u-swipe-action-item.vue`：`<view class="u-swipe-action-item"` 新增 `:class="[status]"`

		- 修复 `show` 属性无法动态修改

			- `/wxs.js`：添加对 `show` 属性的监听，并调用对应方法控制打开状态，可使用如下代码覆盖 `wxs.js` 文件

				```javascript
				export default {
				  watch: {
				    show(value) {
				      this.setState(value ? "open" : "close");
				    }
				  },
				  methods: {
				    // 关闭时执行
				    closeHandler() {
				      this.status = "close";
				    },
				    setState(status) {
				      this.status = status;
				    },
				    closeOther() {
				      // 尝试关闭其他打开的单元格
				      this.parent && this.parent.closeOther(this);
				    }
				  }
				}
				```

- `app.scss` 中内置了一些全局样式用于 `UView UI` 组件适配深色模式切换，可根据需要自行扩展其他组件，使用方式如下

	```vue
	<!-- app-image（图片的width、height可以直接使用css添加至外层view） -->
	<view class="app-image">
	  <u-image src="图片url"></u-image>
	</view>

	<!-- app-popup（app-modal、app-picker同理） -->
	<view class="app-popup">
	  <u-popup :show="show"></u-popup>
	</view>

	<!-- app-parse -->
	<view class="app-parse">
	  <u-parse content="富文本内容"></u-parse>
	</view>

	<!-- 横向按钮组 -->
	<view class="app-buttons horizontal">
	  <view class="app-button">
	    <u-button text="按钮1"></u-button>
	  </view>
	  <view class="app-button">
	    <u-button text="按钮2"></u-button>
	  </view>
	</view>

	<!-- 纵向按钮组 -->
	<view class="app-buttons vertical">
	  <view class="app-button">
	    <u-button text="按钮1"></u-button>
	  </view>
	  <view class="app-button">
	    <u-button text="按钮2"></u-button>
	  </view>
	</view>
	```

### [z-paging](https://z-paging.zxlee.cn)

- `z-paging` 组件目前尚存在一些缺陷，已发现部分如下所示

	- 项目中已修复缺陷，并且已向 `z-paging` 官方仓库提交PR，目前PR已被合入主分支，等官方更新版本后，会及时更新当前项目中的 `z-paging` 版本，若自行更新组件版本时，请注意当前修改项

	- <badge text="已修复" type="tip"></badge>~~`empty` (`/uni_modules/z-paging/components/z-paging/js/modules/empty.js`)~~

		- ~~修复 `auto-hide-empty-view-when-loading` 为 `false` 且列表不为空时，加载中时列表底部仍然会出现空数据视图~~

			- ~~`115行`：`this.totalData.length` -> `this.realTotalData.length`~~

- 项目中针对 `z-paging` 基于CssVar做了一些安全区域和主题切换方面的适配，使用方式及配置项如下

	```vue
	<app-container :percept="percept">
	  <app-navbar title="页面标题"></app-navbar>

	  <!-- 若需要修改css变量，建议在外层view的class或style中配置 -->
	  <view class="app-scroller" :style="{height: `calc(100% - ${navigationBarHeight}px)`}">
	    <z-paging ref="scroller" v-model="records" @query="requestRecords">

	      <!-- 列表内容 -->

	    </z-paging>
	  </view>
	</app-container>
	```

	> CssVars（样式定制）

	|名称|说明|默认值|
	|---|---|---|
	|--app-scroller__cushion_height|底部安全区域高度|`safeAreaInsets.bottom + uni.upx2px(60)`|
	|--app-scroller__bktop_size|返回顶部按钮大小|76rpx|
	|--app-scroller__bktop_right|返回顶部按钮右侧间距|var(--app-main__space_horizontal)|
	|--app-scroller__bktop_bottom|返回顶部按钮底部间距（会自动添加底部安全区域高度）|40rpx|
	|--app-scroller__bktop_zindex|返回顶部按钮z-index|10|

### 默认依赖

#### [dayjs](https://dayjs.fenxianglu.cn)

::: info 说明
Day.js是一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间
:::

::: note
`/utils/dayjs.js` 中有相关配置（可自行修改），并且已添加至Vue实例中(`$date`)，可参考官方文档使用，若不需要可直接移除依赖及相关配置文件
:::

#### [lodash](https://www.lodashjs.com)

::: info 说明
Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库
:::

::: note
若不需要可自行移除，并改造项目中依赖该库的相关方法，涉及的方法如下
:::

- /components/AppAreaPicker.vue

	- `_.get`

	- `_.set`

	- `_.last`

	- `_.cloneDeep`

	- `_.padEnd`

	- `_.findIndex`