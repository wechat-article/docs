import {defineConfig} from 'vitepress'

import lightbox from "vitepress-plugin-lightbox";

export default defineConfig({
  lang: "zh-CN",
  title: "公众号文章下载",
  description: "一款开源 & 免费的在线公众号文章下载工具",
  lastUpdated: true,
  srcDir: 'src',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  ignoreDeadLinks: true,

  themeConfig: {
    nav: [
      { text: '开始使用', link: 'https://wechat-article-exporter.deno.dev/' },
      { text: '教程', link: '/get-started/usage' },
      { text: 'FAQ', link: '/faq' },
    ],
    outlineTitle: "本页目录",

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: '如何使用？', link: '/get-started/usage' },
          { text: '关于代理节点', link: '/get-started/proxy' },
          { text: '搭建私有代理节点', link: '/get-started/private-proxy' },
        ],
        collapsed: false,
      },
      {
        text: 'Advanced',
        items: [
          { text: '获取 Credentials 信息', link: '/advanced/credentials' },
          { text: '私有部署', link: '/advanced/private-deploy' },
          { text: '下载其他格式', link: '/advanced/format' },
          { text: '常见问题', link: '/faq' },
        ],
        collapsed: false,
      },
      {
        text: 'Tutorials',
        items: [
          { text: '如何批量导出某个公众号的全部文章链接？', link: '/tutorials/export-article-links' },
        ],
      },
      {
        text: 'Misc',
        items: [
          { text: '整体架构', link: '/misc/architecture' },
          { text: '成为内测用户', link: '/misc/insider' },
          { text: 'QQ群', link: '/misc/qq-group' },
        ],
        collapsed: false,
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
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wechat-article' }
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
      lazyLoading: true
    }
  },
})
