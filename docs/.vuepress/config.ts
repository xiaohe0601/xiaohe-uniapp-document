import { defineUserConfig } from "vuepress";

import { searchProPlugin } from "vuepress-plugin-search-pro";

import theme from "./theme";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "xiaohe-uniapp",
      description: "🚀 一个开箱即用的uniapp脚手架"
    }
  },
  theme: theme,
  plugins: [
    searchProPlugin({
      indexContent: true,
      customFields: [{
        // @ts-ignore
        getter: (page) => page.frontmatter.category,
        formatter: {
          "/": "分类：$content"
        }
      }, {
        // @ts-ignore
        getter: (page) => page.frontmatter.tag,
        formatter: {
          "/": "标签：$content"
        }
      }]
    })
  ]
});