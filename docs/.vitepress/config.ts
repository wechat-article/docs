import {defineConfig} from 'vitepress'

import lightbox from "vitepress-plugin-lightbox";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "公众号文章导出",
  description: "一款开源 & 免费的公众号文章导出工具",
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: 'https://wechat-article-exporter.deno.dev/' },
      { text: '教程', link: '/get-started/usage' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: '如何使用？', link: '/get-started/usage' },
          { text: '关于代理节点', link: '/get-started/proxy' },
          { text: '搭建私有代理节点', link: '/get-started/private-proxy' },
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: '获取 Credentials 信息', link: '/advanced/credentials' },
          { text: '私有部署', link: '/advanced/private-deploy' },
        ],
      }
    ],

    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Jock'
    },

    editLink: {
      pattern: 'https://github.com/wechat-article/docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑该页面'
    },
    // lastUpdated: {
    //   text: '最后更新于',
    //   formatOptions: {
    //     dateStyle: 'short',
    //     timeStyle: 'medium'
    //   }
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wechat-article' }
    ]
  },

  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
})
