# CLAUDE.md

## 项目概述

这是 **微信公众号文章下载工具** 的文档站点，基于 [VitePress](https://vitepress.dev/) 构建。  
仓库地址：`wechat-article/docs`，主工具仓库：`wechat-article/wechat-article-exporter`。

该工具是一款开源免费的在线工具，支持批量下载微信公众号文章，导出为 Excel/JSON/HTML/TXT/Markdown/Word 等格式。

## 技术栈

- **静态站点生成器**：VitePress (v1.6.3+)
- **前端框架**：Vue 3
- **语言**：中文 (zh-CN)
- **插件**：
  - `vitepress-plugin-lightbox` - 图片灯箱效果
  - `vitepress-plugin-llms` - LLM 友好的 llms.txt 生成
  - `medium-zoom` - 图片缩放
  - `giscus` - 基于 GitHub Discussions 的评论系统

## 项目结构

```
docs/
├── .vitepress/
│   ├── config.ts          # VitePress 配置文件（导航、侧边栏、主题等）
│   ├── theme/
│   │   ├── Layout.vue     # 自定义布局（暗色模式切换动画 + medium-zoom）
│   │   ├── Comments.vue   # Giscus 评论组件
│   │   └── style.css      # 自定义主题样式
│   └── dist/              # 构建产物（已 gitignore）
├── src/                   # 文档源文件目录（VitePress srcDir）
│   ├── index.md           # 首页
│   ├── faq.md             # 常见问题
│   ├── get-started/       # 入门指南
│   ├── advanced/          # 进阶使用
│   ├── tutorials/         # 教程
│   ├── misc/              # 杂项（架构、域名、Features 等）
│   ├── others/            # 其他技术文档
│   ├── assets/            # 图片等静态资源
│   └── public/            # 公共静态文件（favicon、logo）
├── app/                   # Docker 部署相关文件（已 gitignore）
├── package.json
└── CLAUDE.md
```

## 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建产物
npm run preview
```

## 代码规范

- **TypeScript 零容忍**：遇到任何 TS 错误必须立即修复，无论是否由当前改动引入。不允许使用 `@ts-ignore` 或 `@ts-expect-error` 来绕过，除非第三方库确实缺少类型声明
- 所有 `.ts` 和 `.vue` 文件必须通过 TypeScript 类型检查

## 编写规范

- 所有文档内容使用 **中文** 撰写
- Markdown 图片使用 `![](../assets/...)` 相对路径引用
- 图片支持灯箱效果（通过 lightbox 插件自动处理）
- 代码块启用行号显示
- 图片启用懒加载
- 页面默认启用 Giscus 评论，可通过 frontmatter `comments: false` 关闭
- VitePress 的 `srcDir` 设置为 `src`，所有文档页面在 `src/` 目录下

## Git 规范

- 主分支：`master`
- 提交信息使用简短描述（参考历史提交风格如 "update"）
