---
title: 网络请求
icon: network
---

::: tip
项目中对uniapp的网络请求方法做了许多实用的封装，让网络请求不再繁琐，仅需1行代码即可发起请求。(`/utils/network.js`)
:::

### 请求方式

- `network.js` 中对不同的请求方式导出了相应的方法，所有的方法都基于统一的 `_request` 方法实现，除请求方式不同以外，其余用法均一致

	- GET：`_get(url, data, config)`

	- DELETE：`_delete(url, data, config)`

	- HEAD：`_head(url, data, config)`

	- OPTIONS：`_options(url, data, config)`

	- POST：`_post(url, data, config)`

	- PUT：`_put(url, data, config)`

	- TRACE：`_trace(url, data, config)`

	- CONNECT：`_connect(url, data, config)`

- `url` 参数传递全局配置(`/utils/config.js`)中请求基地址(`http.requestBaseUrl`)之后的路径即可，若需要请求其他基地址的接口，则直接传递全路径

- 其中 `_get` 方法比较特殊，其 `data` 参数会拼接至url末尾作为query部分，其他方法则会将其添加至请求体中

- 另外，除以上请求方式外，还有两个特殊的请求，分别是上传和下载，也提供了一致的使用方式

	- 上传：`_upload(url, path, progress, config)`

		- `path` 参数为uniapp文件临时路径，可通过 `uni.chooseMedia` 等API获取

		- `progress` 参数为上传进度回调函数

	- 下载：`_download(url, progress, config)`

		- `progress` 参数为下载进度回调函数

- 以上方法中的 `config` 参数详细请查看下方[请求配置](#请求配置)部分

- 接口定义推荐写在 `service` 目录下，按不同的模块或接口类型区分不同的js文件定义，并且在 `/service/index.js` 中统一导出，示例如下

	```javascript
	// /service/user.js

	import { _post } from "@/utils/network.js";

	/**
	 * 简单示例（微信code登录）
	 */
	export const apiSignInByWxCode = (data) => _post("/sys/sign/in/wx-code", 	data);

	/**
	 * 若要覆盖全局配置或默认配置，则在config中传递对应的参数，例如该请求在业务异常时不会弹出错误提示
	 */
	export const apiRequestNoToast = () => _post("/test", {}, {
	  toastError: false
	});
	```

	```javascript
	// /service/index.js

	export * from "./user.js";
	```

	```javascript
	import { apiSignInByWxCode } from "@/service/index.js";

	const { code } = await uni.pro.login();

	// 在async方法中可直接使用await，若业务无异常则直接解构出data即可
	// 若需处理异常情况，请查看下方(#异常处理)部分
	const { data } = await apiSignInByWxCode({
	  "code": code
	});
	console.log(data);

	// 也可以使用Promise形式
	apiSignInByWxCode({
	  "code": code
	}).then(({ data }) => {
	  console.log(data);
	});
	```

- **注意:** 上方示例中解构出的 `data` 是后端服务统一响应体中的数据字段，若需要获取原始数据，可解构出 `raw` 字段

- 针对不同后端服务统一响应体的字段不同的情况，可在全局配置(`/utils/config.js`)中配置 `http.fieldCode`、`http.fieldMessage`、`http.fieldData` 字段，详细请查看下方[请求配置](#请求配置)部分

### 异常处理

:::info 名词解释
我们通常认为的请求异常即为接口响应的 `code` 字段值与定义的成功值（例如 `200`）不同
:::

::: tip
一般的业务异常直接弹出错误提示并且终止后续的逻辑执行即可，`token` 异常则退出登录，这些情况项目中已自动处理，若有其他的业务需要可手动 `catch` 请求方法，在请求异常的情况下做自己的业务，示例如下
:::

```javascript
import { apiSignInByWxCode } from "@/service/index.js";

const { code } = await uni.pro.login();

try {
  const { data } = await apiSignInByWxCode({
    "code": code
  });

  // 业务正常情况
} catch(err) {
  // 这里可以处理异常情况

  // err = { ...response, state, data, raw }
  // 其中state的取值可在/utils/config.js中配置，详细请查看下方[请求配置](#请求配置)部分
}

apiSignInByWxCode({
  "code": code
}).then(({ data }) => {
  // 业务正常情况
}).catch((err) => {
  // Promise形式同理
});
```
- 此处涉及的相关配置项，如 `code` 字段的请求成功值、`token` 失效值等，亦查看下方[请求配置](#请求配置)部分

### 加载动画

- 当请求长时间未收到响应时，会自动展示加载中的弹窗（即 `uni.showLoading`），加载动画的延迟时间可在全局配置中的 `http.requestLoadingDelay` 配置，若请求在此时间内响应，则不会显示加载动画

- 加载动画提示文字等其他配置项，详细请查看下方[请求配置](#请求配置)部分

### Token处理

- 当 `storage` 中存在 `token` 时，请求会自动携带至 `header` 中，`token` 存储位置可在全局配置的 `storage.token` 中配置

- 存取 `token` 方式如下

	```javascript
	import Config from "@/utils/config.js";

	// 模拟登录
	const { data } = await apiSignIn();

  // 存储token
	uni.setStorageSync(Config.storage.token, data.token);

  // 取出token
  const token = uni.getStorageSync(Config.storage.token);
	```

### 中断请求

::: info
在某些场景下，当请求还未响应时，可以手动中断请求，此时可在 `config` 中传入 `signal` 属性，请求发起时，请求 `task` 会回传至`signal.task` 属性，示例如下
:::

```javascript
// 接口定义，传入signal属性至config参数中
export const apiRequestTest = (data, signal) => _post("", data, {signal});

// 定义信号量，用于接收请求task
const signal = {};
// 发起请求，传入signal即可
apiRequestTest({
  "some": "value"
}, signal);

// 在发起请求后，在请求响应前的某个时机可以通过操作task中断请求
signal.task.abort();
// 亦可使用空安全运算符
signal.task?.abort();
```

### 请求配置

::: info
请求配置分为全局配置和自定义配置
:::

#### 全局配置

> `/utils/config.js` 中的 `http` 部分

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|requestBaseUrl|请求基地址，即请求url中相同的前缀部分（例如域名、项目前缀等）|string|-|`process.env.UNI_APP_REQUEST_BASE_URL`|
|sourceBaseUrl|资源基地址，用于图片、视频等网络地址相对路径拼接统一的前缀|string|-|`process.env.UNI_APP_SOURCE_BASE_URL`|
|requestTimeout|请求超时（单位：ms）|number|-|`10 * 1000`|
|requestLoadingDelay|加载动画延迟时间（单位：ms）（若请求在此时间内响应，则不会显示加载动画）|number|-|`600`|
|requestAcceptType|请求接受数据类型|string|-|application/json|
|requestContentType|😀 请求发送数据类型|string|application/json，application/x-www-form-urlencoded，其他|application/json|
|enableHttp2|启用HTTP2|boolean|-|`false`|
|enableQuic|启用QUIC|boolean|-|`false`|
|enableCache|启用Cache|boolean|-|`false`|
|tokenKey|😀 请求Header中Token的key|string|-|Authorization|
|tokenPrefix|😀 请求Header中Token的前缀|string|-|-|
|fieldCode|😀 响应内容字段 - code|string|-|code|
|fieldMessage|😀 响应内容字段 - message|string|-|message|
|fieldData|😀 响应内容字段 - data|string|-|data|
|codeSuccess|😀 业务状态 - 操作成功|number|-|`200`|
|codeAuthError|😀 业务状态 - 登录失效|number|-|`401`|
|stateSuccess|state - 业务正常|number|-|`100`|
|stateBusinessError|state - 业务异常（即 `data[fieldCode]` 与 `codeSuccess` 不相等）|number|-|`0`|
|stateRequestError|state - 请求异常|number|-|`-1`|
|stateHttpError|state - HTTP状态异常|number|-|`-2`|
|stateUnknownError|state - 未知异常|number|-|`-3`|
|stateRequestAbort|state - 请求取消|number|-|`-4`|
|redirectAuthPage|😀 登录失效重定向页面地址|string|-|-|
|redirectAuthAction|😀 登录失效页重定向方式|string / null|`null` / reLaunch / switchTab / navigateTo|`null`|

#### 自定义配置

> 接口定义中的 `config` 参数

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|url|请求URL|string|请求地址的相对路径或全路径|-|
|method|请求方式|string|GET / DELETE / HEAD / OPTIONS / POST / PUT / TRACE / CONNECT|-|
|data|请求参数|any|-|-|
|timeout|请求超时|number|-|`Config.http.requestTimeout`|
|header|请求header|Record<string, string>|-|-|
|dataType|返回数据格式|string|json / 其他|json|
|responseType|响应数据类型|string|text / arraybuffer|text|
|toastError|是否提示错误信息|boolean|-|`true`|
|showLoading|是否显示加载动画|boolean|-|`true`|
|loadingText|加载文字|string|-|请稍候|
|ignoreLoadingDelay|是否忽略等待弹窗延时（若为 `true`，等待弹窗会在请求开始时立即显示）|boolean|-|`false`|
|ignoreToken|是否跳过自动添加token|boolean|-|`false`|
|signal|信号量（若提供则会将网络请求task回传至 `task` 属性，可用于中断请求等）|any|-|-|
|third|是否为第三方请求（若为 `true`，则直接返回响应内容，不会进行进一步处理）|boolean|-|`false`|
|authNotRedirect|是否禁用登录失效重定向|boolean|-|`false`|
|authRedirectPage|登录失效重定向页面地址|string|-|`Config.http.redirectAuthPage`|
|authRedirectAction|登录失效重定向方式|string|`null` / reLaunch / switchTab / navigateTo|`Config.http.redirectAuthAction`|
|key|(仅 `_upload`) FormData上传时文件的key|string|-|file|
|extra|(仅 `_upload`) FormData上传时的附加信息（会在上传时携带在FormData中）|Record<string, any>|-|-|

#### 相关说明

- 上方[全局配置](#全局配置)中带😀的参数是第一次接口对接时需要特别注意的地方，应当根据后端接口文档定义中的规定字段配置对应的值，部分示例如下

	```json
	{
	  "code": 200,
	  "message": "请求成功",
	  "data": {
	    "some": "value"
	  }
	}
	```

	```javascript
	// 假设请求响应体如上方所示，那么对应的字段配置如下
	{
	  // ...
	  http: {
	    fieldCode: "code",
	    fieldMessage: "message",
	    fieldData: "data",
	    codeSuccess: 200
	  }
	  // ...
	}
	```

	> 再举一个例子

	```json
	{
	  "ret": 0,
	  "msg": "请求成功",
	  "res": {
	    "some": "value"
	  }
	}
	```

	```javascript
	// 假设请求响应体如上方所示，那么对应的字段配置如下
	{
	  // ...
	  http: {
	    fieldCode: "ret",
	    fieldMessage: "msg",
	    fieldData: "res",
	    codeSuccess: 0
	  }
	  // ...
	}
	```

- `requestBaseUrl` 和 `sourceBaseUrl` 的默认取值是对应的环境变量，关于环境变量的使用请查看[环境变量](../config/environment.md)部分

- 内置 `filter` 中的 `sources` 可用于快速拼接 `sourceBaseUrl` 前缀，用法如下

	```vue
	<image :src="url | sources"></image>
	```

- 由于小程序中不支持 `FormData`，若接口要求传递 `FormData` 类型数据，分为如下几种情况

	- 参数中不包含文件，将 `requestContentType` 修改为 `application/x-www-form-urlencoded`，或将单个请求的自定义配置 `header` 中的 `content-type` 修改为 `application/x-www-form-urlencoded`，单个请求的示例如下

		```javascript
		export const apiRequestByFormData = (data) => _post("接口地址"，data，{
		  header: {
		    "content-type": "application/x-www-form-urlencoded"
		  }
		});
		```

	- 参数中包含一个文件，则使用 `_upload` 方法定义接口，将文件临时路径传至 `path` 参数，除文件外的其他参数传至自定义配置中的 `extra` 属性即可，示例如下

		```javascript
		export const apiRequestByFormData = (path, data) => _upload("接口地址", path, null, {
		  key: "file",
		  extra: data
		});
		```

	- 参数中包含多个文件，小程序中不支持多文件同时上传，无法实现（此时需要后端修改逻辑，例如提供单文件上传接口，前端通过 `Promise.all` 等方式实现多文件上传）