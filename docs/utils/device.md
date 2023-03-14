---
title: DeviceUtils 设备
---

### px2upx(px = `null`, digits = `2`)

px转upx(rpx)

#### 参数

- px：`number | string | null` px数值

- digits：`number` 小数位数

#### 返回

`number` upx(rpx)数值

::: details 使用示例（点击展开查看）
```javascript
const px = 375;

px2upx(px);
// => 750
// 注意：此处仅为示例，px和rpx不是2倍关系（只有在屏幕宽度为375px时才刚好为2倍）
```
:::

#### 相关说明

- 若需要upx(rpx)转px，直接使用 [uni.upx2px](https://uniapp.dcloud.net.cn/api/ui/font.html#upx2px) 即可