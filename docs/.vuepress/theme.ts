import { hopeTheme as HopeTheme, navbar as Navbar, sidebar as Sidebar } from "vuepress-theme-hope";

export default HopeTheme({
  hostname: "https://xiaohe-uniapp.myhdg.top",
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
          "app-video",
          "app-area-picker"
        ],
        "/utils": [{
          text: "xiaohejs",
          children: [
            { text: "文档首页", link: "https://xiaohejs.myhdg.top" },
            { text: "快速上手", link: "https://xiaohejs.myhdg.top/guide/getting-started.html" },
            { text: "工具列表", link: "https://xiaohejs.myhdg.top/utils" }
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
  repo: "https://github.com/xiaohe0601/uniapp-vue2-hbx-starter",
  editLink: false,
  displayFooter: true,
  copyright: `MIT License | Copyright ©️ 2022 <a href="https://github.com/xiaohe0601" target="_blank">小何同学</a>`,
  iconAssets: "iconfont",
  darkmode: "toggle",
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f"
  },
  fullscreen: true,
  pageInfo: ["Author", "Date", "Word", "ReadingTime", "Category", "Tag"],
  plugins: {
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
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
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
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