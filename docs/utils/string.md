---
title: StringUtils 字符串
---

### isEmptyString(str, trim = `false`)

是否为空字符串

#### 参数

- str：`string | null` 字符串

- trim：`boolean` 是否trim()

#### 返回

`boolean` 是否为空字符串

::: details 使用示例（点击展开查看）
```javascript
const str1 = null;
const str2 = "";
const str3 = " ";
const str4 = "some string";

isEmptyString(str1);
// => true

isEmptyString(str2);
// => true

isEmptyString(str3, true);
// => true

isEmptyString(str4);
// => false
```
:::

### isNotEmptyString(str, trim = `false`)

是否不为空字符串

#### 参数

- str：`string | null` 字符串

- trim：`boolean` 是否trim()

#### 返回

`boolean` 是否不为空字符串

::: details 使用示例（点击展开查看）
```javascript
const str1 = null;
const str2 = "";
const str3 = " ";
const str4 = "some string";

isNotEmptyString(str1);
// => false

isNotEmptyString(str2);
// => false

isNotEmptyString(str3, true);
// => false

isNotEmptyString(str4);
// => true
```
:::

### splitString(str, separator = `","`)

分割字符串，与 `String#split` 差别是当 `str` 为 `null` 或者 `""` 时的返回值为 `[]`，并且会先去除首尾的分隔符再进行分割

#### 参数

- str：`string | null` 待分割字符串

- separator：`string` 分隔符

#### 返回

`string[]`：字符串分割结果

::: details 使用示例（点击展开查看）
```javascript
const str1 = null;
const str2 = "";
const str3 = "some,string";
const str4 = ";some;string;";

splitString(str1);
// => []

splitString(str2);
// => []

splitString(str3);
// => ["some", "string"]

splitString(str4, ";");
// => ["some", "string"]
// 字符串首尾的分隔符被去掉了，如果使用String#split的返回值为 ["", "some", "string", ""]
```
:::

### toHumpString(str)

字符串下划线风格转驼峰风格

#### 参数

- str：`string | null` 待转换字符串

#### 返回

`string | null` 驼峰风格的字符串

::: details 使用示例（点击展开查看）
```javascript
const str1 = null;
const str2 = "some_string";

toHumpString(str1);
// => null

toHumpString(str2);
// => "someString"
```
:::

### toUnderlineString

字符串驼峰风格转下划线风格

#### 参数

- str：`string | null` 待转换字符串

#### 返回

`string | null` 下划线风格的字符串

::: details 使用示例（点击展开查看）
```javascript
const str1 = null;
const str2 = "someString";

toUnderlineString(str1);
// => null

toUnderlineString(str2);
// => "some_string"
```
:::

### convertRelativePath(value, options = `{baseUrl: #Config.http.sourceBaseUrl, domain: null}`)

转换相对路径，为相对路径Url拼接基地址 [网络请求](../guide/network.md)

#### 参数

- value：`string | null` 源路径

- options：`ConvertRelativePathOptions` 转换配置

#### 类型

##### ConvertRelativePathOptions

|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|baseUrl|路径基地址|string|-|`Config.http.sourceBaseUrl`|
|domain|域名|string / null|-|-|

#### 返回

`string | null` 转换后的路径

::: details 使用示例（点击展开查看）
```javascript
const url1 = null;
const url2 = "/someurl";
const url3 = "someurl";
const url4 = "https://someurl";

convertRelativePath(url1);
// => null

convertRelativePath(url2);
// => "#路径基地址/someurl"

convertRelativePath(url3);
// => "#路径基地址/someurl"
// 自动添加了斜杠

convertRelativePath(url4);
// => "https://someurl"
// 如果源路径带有协议头或者开头部分与baseUrl相同，则原样返回
```
:::