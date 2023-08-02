import { hopeTheme as HopeTheme, navbar as Navbar, sidebar as Sidebar } from "vuepress-theme-hope";

export default HopeTheme({
  hostname: "https://xiaohe-uniapp.xiaohe.ink",
  author: {
    name: "小何同学",
    url: "https://github.com/xiaohe0601",
    email: "HeDianGeng0601@outlook.com"
  },
  locales: {
    "/": {
      navbar: Navbar(["/guide", "/config", "/components", "/utils", "/about"]),
      sidebar: Sidebar({
        "/guide": [
          "feature",
          "getting-started",
          "project-structure",
          "page-structure",
          "network",
          "theme",
          "permission",
          "eval",
          "mixin",
          "filter",
          "others"
        ],
        "/config": [
          "global",
          "environment"
        ],
        "/components": [
          "app-container",
          "app-navbar",
          "app-tabbar",
          "app-safearea",
          "app-navigator",
          "app-modal",
          "app-picker",
          "app-area-picker",
          "app-datetime-picker",
          "app-datetime-range-picker",
          "app-calendar-picker",
          "app-link-scroller",
          "app-video"
        ],
        "/utils": [{
          text: "xiaohejs",
          children: [
            { text: "文档首页", link: "https://xiaohejs.xiaohe.ink" },
            { text: "快速上手", link: "https://xiaohejs.xiaohe.ink/guide/getting-started.html" },
            { text: "工具列表", link: "https://xiaohejs.xiaohe.ink/utils" }
          ]
        }, {
          text: "内置",
          children: ["device"]
        }],
        "/about": [
          "changelog",
          "discuss",
          "license",
          "xiaohe"
        ]
      })
    }
  },
  logo: "/logo.svg",
  repo: "https://github.com/xiaohe0601/xiaohe-uniapp",
  editLink: false,
  displayFooter: true,
  copyright: `MIT License | Copyright ©️ 2022 <a href="https://github.com/xiaohe0601" target="_blank">小何同学</a>`,
  iconAssets: "iconfont",
  darkmode: "toggle",
  themeColor: true,
  fullscreen: true,
  pageInfo: ["Author", "Date", "Word", "ReadingTime", "Category", "Tag"],
  plugins: {
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      footnote: true,
      gfm: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      vuePlayground: true
    },
    copyCode: {
      duration: 1000,
      showInMobile: true,
      fancy: false
    }
  }
});