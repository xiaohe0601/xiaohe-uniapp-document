---
title: 权限
icon: safe
---

::: tip
项目中基于[权限插件](https://ext.dcloud.net.cn/plugin?id=594)二次封装了权限申请方法(`/utils/permission.js`)，用于确保用户已授予权限后才会继续执行逻辑，并且支持同时申请微信小程序、Android、iOS多端权限（亦可根据需要自行扩展其他端），也兼容了用户拒绝授权的场景
:::

### ensurePermissionAuthorized(scope, config) <badge text="async" type="info" vertical="middle"></badge>

确保用户已授予对应权限

#### 参数

- scope：`EnsurePermissionAuthorizedScope` 权限范围

- config：`EnsurePermissionAuthorizedConfig` 授权请求配置

#### 类型

##### EnsurePermissionAuthorizedScope

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|mp|小程序权限的scope|string|参考微信小程序官方文档|-|
|android|Android权限的permissionId|string|参考Android官方文档|-|
|ios|iOS权限的permissionId|string|参考iOS官方文档|-|

##### EnsurePermissionAuthorizedConfig

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|settings|拒绝授权时是否跳转至设置页|boolean|-|`true`|
|modalTitle|申请权限弹窗标题|string|-|权限申请|
|modalContent|申请权限弹窗内容|string|-|-|

::: details 使用示例（点击展开查看）
```javascript
// 申请定位权限
await ensurePermissionAuthorized({
  mp: "scope.userLocation",
  android: "android.permission.ACCESS_FINE_LOCATION",
  ios: "location"
}, {
  modalContent: "您已拒绝授予定位权限，需要手动开启定位权限，是否立即跳转至设置页面？"
});

// 权限申请成功后，继续执行逻辑
const { longitude, latitude } = await uni.pro.getLocation({
  type: "gcj02",
  isHighAccuracy: true
});
console.log("经纬度", longitude, latitude);
```
:::

#### 附录

##### iOS部分权限清单（详细请查阅iOS官方文档）

|参数|说明|
|---|---|
|location|位置|
|push|推送|
|camera|摄像头|
|photoLibrary|相册|
|record|麦克风|
|contact|通讯录|
|calendar|日历|
|memo|备忘录|

##### Android部分权限清单（详细请查阅Android官方文档）

|参数|说明|
|---|---|
|android.permission.ACCESS_FINE_LOCATION|位置权限|
|android.permission.ACCESS_COARSE_LOCATION|模糊位置权限|
|android.permission.CAMERA|摄像头权限|
|android.permission.READ_EXTERNAL_STORAGE|外部存储(含相册)读取权限|
|android.permission.WRITE_EXTERNAL_STORAGE|外部存储(含相册)写入权限|
|android.permission.RECORD_AUDIO|麦克风权限|
|android.permission.READ_CONTACTS|通讯录读取权限|
|android.permission.WRITE_CONTACTS|通讯录写入权限|
|android.permission.READ_CALENDAR|日历读取权限|
|android.permission.WRITE_CALENDAR|日历写入权限|
|android.permission.READ_SMS|短信读取权限|
|android.permission.SEND_SMS|短信发送权限|
|android.permission.RECEIVE_SMS|接收新短信权限|
|android.permission.READ_PHONE_STATE|获取手机识别码等信息的权限|
|android.permission.CALL_PHONE|拨打电话权限|
|android.permission.READ_CALL_LOG|获取通话记录权限|