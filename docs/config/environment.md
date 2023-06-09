---
title: 环境变量
icon: variable
---

::: tip
由于项目采用的是HBuilderX创建方式，默认不支持类似于Vue cli创建方式的env环境变量，故项目中模仿Vue cli使用 `dotenv` 实现了env环境变量，具体实现可查看 `vue.config.js`，也可根据实际需要做对应修改
:::

::: info
- 之所以不采用Vue cli创建项目，是因为HBuilderX对cli项目的支持并不友好，例如不能自动跳转文件对应页面，App在线打包时基础库更新麻烦等

- 同时因为HBuilderX创建的项目使用的编译器是集成在HBuilderX中的，所以当HBuilderX有新版本时请及时更新，以免造成一些未知的异常
:::

::: warning
虽然是模仿Vue cli的环境变量，但是项目中对其做出了一些优化以及差异化，例如支持了除字符串以外的其他数据类型、修改了变量前缀等，具体使用规范如下
:::

### 命名规范

1. key：全大写下划线命名，并且以`UNI_APP_`开头（`ENVIRONMENT`除外）

	```env
	UNI_APP_EXAMPLE
	```

### 取值规范

1. value与key之间使用（`=`）符号连接，中间不添加`空格`，并且值不加引号（`""`、`''`、` `` `），同时禁止换行

	```env
	UNI_APP_EXAMPLE=this is example
	```

### 注释规范

1. 以（`#`）符号开头并且与注释内容之间以一个`空格`隔开

	```env
	# 这里是注释内容
	```

### 值的类型

1. 默认情况下，会自动解析值的类型（包括 `number` 、 `boolean` 、 `null` 、 `undefined` 以及 `Json` 类型），若无法解析则会以 `string` 类型处理

	```env
	UNI_APP_EXAMPLE=true
	```

2. 若需要强制为 `string` 类型，则以（\`）符号开头即可

	```env
	UNI_APP_EXAMPLE=`true
	```

### 指定环境

::: info
`ENVIRONMENT` 可指定当前环境（影响配置文件读取位置）
:::

::: note ENVIRONMENT 可选值及对应配置文件读取位置
`default`：运行时 -> .env.development，发行时 -> .env.production

`其他值`：.env.[ENVIRONMENT]
:::

```env
# .env 所有环境均会读取该文件

# 指定当前环境
ENVIRONMENT=default

# 一些其他的环境变量，所有环境都能访问到
UNI_APP_TEST=test
```

```env
# .env.development 开发环境会读取该文件，亦可在.env中手动指定ENVIRONMENT为development

# 请求基地址
UNI_APP_REQUEST_BASE_URL=http://192.168.0.1:8888
# 资源基地址
UNI_APP_SOURCE_BASE_URL=http://192.168.0.1:8888
```

```env
# .env.local 可在.env中手动指定ENVIRONMENT为local，则会读取该文件
# 该文件已在.gitignore中忽略，可用于本地调试时使用（若需使用请手动创建该文件）

# 请求基地址
UNI_APP_REQUEST_BASE_URL=http://192.168.0.1:8888
# 资源基地址
UNI_APP_SOURCE_BASE_URL=http://192.168.0.1:8888
```