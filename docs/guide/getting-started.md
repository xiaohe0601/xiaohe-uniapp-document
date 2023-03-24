---
title: 快速上手
icon: light
---

1. 获取项目代码（以及后续更新项目基础代码说明）

	- <badge text="推荐" type="tip" vertical="middle"></badge> `clone` 项目代码至本地，后续通过 `git` 更新项目基础代码

		1. 按需修改项目文件夹名称，`CMD`（或 `Git Bash` 等其他工具）切换至项目目录

		1. 修改模板默认远程名称（`origin` -> `template`）

			```bash
			git remote rename origin template
			```

		1. 新增个人项目 `git` 远程地址（`origin`）

			```bash
			git remote add origin https://git地址
			```

			- 注意：个人项目代码推送的远程地址应该是 `origin`，不要推送到 `template`，示例如下

				```bash
				git push origin 分支名称
				```

		1. 后续若需更新项目基础代码，使用 `pull` 命令并解决冲突即可（合并代码推荐使用 `WebStorm` 或其他可视化 `git` 工具）

			```bash
			git pull template main
			```

	- `download` 项目代码至本地，后续手动更新项目基础代码

1. 使用最新版 `HBuilderX` 打开项目，进入 `manifest.json` 文件

	- 基础配置

		- uni-app应用标识(AppID)：点击 `重新获取` 按钮以获取自己的AppID，或者在源码视图中填写已有的 `appid`

		- 应用名称、应用版本名称、应用版本号：根据实际情况填写

	- 小程序配置

		- 小程序AppID：填写自己的小程序AppID，申请方式参考各家小程序官方文档

1. 进入项目根目录，执行 `yarn` <badge text="推荐" type="tip"></badge> 或 `npm install` 安装依赖

	::: code-tabs#npm
	@tab yarn
	```bash
	yarn
	```

	@tab npm
	```bash
	npm install
	```
	:::

	::: warning
	不要混用依赖管理工具，以免造成各种奇怪的问题。
	:::

1. [运行项目](https://uniapp.dcloud.net.cn/quickstart-hx.html#%E8%BF%90%E8%A1%8Cuni-app)

1. [发行项目(即所谓的打包)](https://uniapp.dcloud.net.cn/quickstart-hx.html#%E5%8F%91%E5%B8%83uni-app)