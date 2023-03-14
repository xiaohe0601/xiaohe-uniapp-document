---
title: AppVideo 视频播放器
---

::: tip
本组件用于视频播放，APP-PLUS端使用iframe实现同层渲染
:::

### Props（全端支持）

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|vid <badge text="必传" type="warning" vertical="middle"></badge>|播放器id|String|-|-|
|src <badge text="必传" type="warning" vertical="middle"></badge>|要播放视频的资源地址|String|-|-|
|width|组件宽度|String|-|100%|
|height|组件高度|String|-|100%|
|border-radius|组件圆角|String|-|0|
|duration|指定视频时长|Number|-|-|
|autoplay|是否自动播放|Boolean|-|`false`|
|loop|是否循环播放|Boolean|-|`false`|
|muted|是否静音播放|Boolean|-|`false`|
|controls|是否显示默认播放控件|Boolean|-|`true`|
|poster|视频封面的图片网络资源地址|String|-|-|

### Props（非APP-PLUS端支持）
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|title|视频标题|String|-|-|
|direction|设置全屏时视频的方向，不指定则根据宽高比自动判断|Number|`0` / `90` / `-90`|-|
|initial-time|指定视频初始播放位置|Number|-|-|
|object-fit|当视频大小与video容器大小不一致时，视频的表现形式|String|contain / fill / cover|contain|
|vslide-gesture|在非全屏模式下，是否开启亮度与音量调节手势|Boolean|-|`false`|
|vslide-gesture-in-fullscreen|在全屏模式下，是否开启亮度与音量调节手势|Boolean|-|`true`|
|danmu-list|弹幕列表|Array|-|-|
|danmu-btn|是否显示弹幕按钮|Boolean|-|`false`|
|play-btn-position|播放按钮的位置|String|bottom / center|bottom|
|ad-unit-id|视频前贴广告单元ID|String|-|-|
|poster-for-crawler|用于给搜索等场景作为视频封面展示|String|-|-|
|auto-pause-if-navigate|当跳转到本小程序的其他页面时，是否自动暂停本页面的视频播放|Boolean|-|`true`|
|auto-pause-if-open-native|当跳转到其它微信原生页面时，是否自动暂停本页面的视频|Boolean|-|`true`|
|picture-in-picture-mode|设置小窗模式|String / Array|push / pop / `[]`|-|
|picture-in-picture-show-progress|是否在小窗模式下显示播放进度|Boolean|-|`false`|
|background-poster|进入后台音频播放后的通知栏图标（Android独有）|String|-|-|
|referrer-policy|referrer策略|String|origin / no-referrer|no-referrer|
|enable-danmu|是否展示弹幕|Boolean|-|`false`|
|enable-play-gesture|是否开启播放手势，即双击切换播放/暂停|Boolean|-|`true`|
|enable-progress-gesture|是否开启控制进度的手势|Boolean|-|`true`|
|enable-auto-rotation|是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效|Boolean|-|`false`|
|show-mute-btn|是否显示静音按钮|Boolean|-|`false`|
|show-progress|是否显示进度条|Boolean|-|`true`|
|show-fullscreen-btn|是否显示全屏按钮|Boolean|-|`true`|
|show-bottom-progress|是否展示底部进度条|Boolean|-|`true`|
|show-play-btn|是否显示视频底部控制栏的播放按钮|Boolean|-|`true`|
|show-center-play-btn|是否显示视频中间的播放按钮|Boolean|-|`true`|
|show-casting-button|是否显示投屏按钮|Boolean|-|`false`|
|show-snapshot-button|是否显示截屏按钮|Boolean|-|`true`|
|show-screen-lock-button|是否显示锁屏按钮|Boolean|-|`true`|
|show-background-playback-button|是否展示后台音频播放按钮|Boolean|-|`false`|

### Events（全端支持）

|事件|说明|回调参数|
|---|---|---|
|play|开始/继续播放|-|
|pause|暂停播放|-|
|ended|播放到末尾|-|
|timeupdate|播放进度变化|`event.detail = {currentTime, duration}`|
|waiting|视频出现缓冲|-|
|progress|加载进度变化|`event.detail = {buffered}`|
|loadedmetadata|视频元数据加载完成|`event.detail = {width, height, duration}`|

### Events（非APP-PLUS端支持）

|事件|说明|回调参数|
|---|---|---|
|error|视频播放出错|-|
|controlstoggle|切换controls显示隐藏|`event.detail = {show}`|
|seekcomplete|seek完成|`event.detail = {position}`|
|fullscreenchange|视频进入和退出全屏|`event.detail = {fullScreen, direction}`|
|enterpictureinpicture|播放器进入小窗|-|
|leavepictureinpicture|播放器退出小窗|-|

### Events（APP-PLUS端支持）

|事件|说明|回调参数|
|---|---|---|
|canplay|浏览器可以播放媒体文件了，但估计没有足够的数据来支撑播放到结束，不必停下来进一步缓冲内容|-|
|canplaythrough|浏览器估计它可以在不停止内容缓冲的情况下播放媒体直到结束|-|
|complete|OfflineAudioContext渲染完成|-|
|durationchange|duration属性的值改变时触发|-|
|emptied|视频停止播放，因为media已经到达结束点|-|
|loadeddata|media中的首帧已经完成加载|-|
|playing|由于缺乏数据而暂停或延迟后，播放准备开始|-|
|ratechange|播放速率发生变化|-|
|seeked|seek操作完成|-|
|seeking|seek操作开始|-|
|stalled|用户代理(UserAgent)正在尝试获取媒体数据，但数据意外未出现|-|
|suspend|媒体数据加载已暂停|-|
|volumechange|音量发生变化|-|

::: warning
由于 `APP-PLUS` 端使用 `iframe` 实现同层渲染，故 `events` 与 `非APP-PLUS` 端有所差异，且均无回调参数，下表中回调参数仅 `非APP-PLUS` 端有效，`APP-PLUS` 端可通过组件 `ref` 的 `instance` 属性访问 `video` 元素实例以及其他 `video` 组件相关操作，若与 `非APP-PLUS` 端有差异请注意条件编译。
:::

### 相关说明

- `video` 实例的使用（`APP-PLUS` 端为 `HTMLVideoElement`，`非APP-PLUS` 端为 `VideoContext`）

	```vue {3,11,14}
	<template>
	  <app-container>
	  	<app-video ref="video" vid="唯一的组件id" src="视频url"></app-video>
	  </app-container>
	</template>

	<script>
	  export default {
	    // 要确保能访问到AppVideo的ref，这里在onReady中操作仅作示例
	    onReady() {
	      const { instance } = this.$refs.video;

	      // 视频全屏播放（这里APP-PLUS端和非APP-PLUS端的api相同，所以无需条件编译）
	      instance.requestFullScreen();
	    }
	  }
	</script>
	```