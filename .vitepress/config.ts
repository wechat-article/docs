import {defineConfig} from 'vitepress'

import llmstxt, {copyOrDownloadAsMarkdownButtons} from 'vitepress-plugin-llms'
import lightbox from "vitepress-plugin-lightbox";


export default defineConfig({
    lang: "zh-CN",
    title: "公众号文章下载",
    description: "一款开源 & 免费的在线公众号文章下载工具",
    lastUpdated: true,
    srcDir: "src",

    head: [
        ["link", {rel: "icon", href: "/favicon.ico"}],
        ["meta", {property: "og:type", content: "website"}],
        ["meta", {property: "og:title", content: "公众号文章下载"}],
        ["meta", {property: "og:description", content: "一款开源 & 免费的在线公众号文章下载工具"}],
        ["meta", {property: "og:url", content: "https://down.mptext.top/"}],
        ["meta", {property: "og:image", content: "/logo.png"}],
        ["meta", {name: "twitter:card", content: "summary"}],
        ["meta", {name: "twitter:title", content: "公众号文章下载"}],
        ["meta", {name: "twitter:description", content: "一款开源 & 免费的在线公众号文章下载工具"}],
    ],
    ignoreDeadLinks: true,

    themeConfig: {
        logo: '/logo.png',
        nav: [
            {text: "开始使用", link: "https://down.mptext.top/"},
            {text: "教程", link: "/get-started/usage"},
            {text: "功能特性", link: "/misc/features"},
            {text: "常见问题(FAQ)", link: "/faq"},
        ],
        outline: {
            label: "本页导航",
            level: "deep",
        },
        sidebar: [
            {
                text: "快速入门",
                items: [
                    {text: "介绍", link: "/get-started/introduction"},
                    {text: "快速上手", link: "/get-started/usage"},
                    {text: "关于代理节点", link: "/get-started/proxy"},
                    {
                        text: "搭建私有代理节点",
                        link: "/get-started/private-proxy",
                    },
                ],
                collapsed: false,
            },
            {
                text: "进阶使用",
                items: [
                    // {
                    //     text: "获取 Credential 信息",
                    //     link: "/advanced/credential",
                    // },
                    {
                        text: "抓取 Credential (wxdown程序版)(推荐)",
                        link: "/advanced/wxdown-service",
                    },
                    {
                        text: "抓取 Credential (mitmproxy插件版)",
                        link: "/advanced/auto-detect-credential",
                    },
                    {
                        text: "私有部署",
                        link: "/advanced/private-deploy",
                    },
                    {text: "常见问题(FAQ)", link: "/faq"},
                    {text: "API 使用说明", link: "/advanced/api"},
                ],
                collapsed: false,
            },
            {
                text: "教程",
                items: [
                    {
                        text: "如何批量导出某个公众号的全部文章链接？",
                        link: "/tutorials/export-article-links",
                    },
                ],
                collapsed: false,
            },
            {
                text: "其他",
                items: [
                    {text: "功能特性", link: "/misc/features"},
                    {text: "关于更换域名的一些事", link: "/misc/domain"},
                    {text: "整体架构", link: "/misc/architecture"},
                    {text: "QQ群", link: "/misc/qq-group"},
                ],
                collapsed: false,
            },
        ],
        search: {provider: "local"},
        footer: {
            message: 'Released under the MIT License.',
            copyright: "版权所有 © 2024-2026 Jock",
        },

        editLink: {
            pattern:
                "https://github.com/wechat-article/docs/edit/master/src/:path",
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
            {icon: "github", link: "https://github.com/wechat-article"},
        ],

        externalLinkIcon: true,
    },

    markdown: {
        config: (md) => {
            // Use lightbox plugin
            md.use(lightbox, {});
            md.use(copyOrDownloadAsMarkdownButtons)
        },
        lineNumbers: true,
        image: {
            lazyLoading: true,
        },
    },
    vite: {
        plugins: [
            llmstxt(),
            {
                name: 'markdown-charset',
                configureServer(server) {
                    server.middlewares.use((req: { url?: string }, res, next) => {
                        if (req.url?.endsWith('.md') || req.url?.endsWith('.txt')) {
                            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                        }
                        next()
                    })
                },
            },
        ],
    }
});
