import {defineConfig} from 'vitepress'

import lightbox from "vitepress-plugin-lightbox";

export default defineConfig({
  lang: "zh-CN",
  title: "公众号文章下载",
  description: "一款开源 & 免费的在线公众号文章下载工具",
  lastUpdated: true,
  srcDir: "src",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: "开始使用", link: "https://wechat-article-exporter.deno.dev/" },
      { text: "教程", link: "/get-started/usage" },
      { text: "Features", link: "/misc/features" },
      { text: "FAQ", link: "/faq" },
    ],
    outline: {
      label: '本页目录',
      level: 'deep',
    },

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "如何使用？", link: "/get-started/usage" },
          { text: "关于代理节点", link: "/get-started/proxy" },
          { text: "搭建私有代理节点", link: "/get-started/private-proxy" },
        ],
        collapsed: false,
      },
      {
        text: "Advanced",
        items: [
          { text: "获取 Credential 信息", link: "/advanced/credential" },
          { text: "自动获取 Credential", link: "/advanced/auto-detect-credential" },
          { text: "私有部署", link: "/advanced/private-deploy" },
          { text: "下载其他格式", link: "/advanced/format" },
          { text: "常见问题", link: "/faq" },
        ],
        collapsed: false,
      },
      {
        text: "Tutorials",
        items: [
          {
            text: "如何批量导出某个公众号的全部文章链接？",
            link: "/tutorials/export-article-links",
          },
        ],
        collapsed: false,
      },
      {
        text: "Misc",
        items: [
          { text: "Features", link: "/misc/features" },
          { text: "整体架构", link: "/misc/architecture" },
          { text: "申请内测", link: "/misc/insider" },
          { text: "QQ群", link: "/misc/qq-group" },
        ],
        collapsed: false,
      },
    ],

    footer: {
      // message: 'Released under the MIT License.',
      copyright: "版权所有 © 2024-2025 Jock",
    },

    editLink: {
      pattern: "https://github.com/wechat-article/docs/edit/main/docs/:path",
      text: "在 GitHub 上编辑该页面",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/wechat-article" },
    ],

    externalLinkIcon: true,
  },

  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },
});
