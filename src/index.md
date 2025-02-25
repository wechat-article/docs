---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 微信公众号文章导出
  text: 
  tagline: 一款 开源 & 免费 的公众号文章导出工具
  image:
    src: /logo.png
    alt: 公众号文章导出
  actions:
    - theme: brand
      text: 开始使用
      link: https://wechat-article-exporter.deno.dev/
    - theme: alt
      text: 查看教程
      link: /get-started/usage

features:
  - title: 无需安装
    details: 在线使用，不需要配置复杂的本地环境 (下载评论数据时需要配合本地的抓包软件)
  - title: 支持搜索
    details: 支持公众号搜索，号内文章搜素（标题关键字）
  - title: 文章导出
    details: 导出 HTML 格式，保证高保真还原文章版式
  - title: 文章过滤
    details: 导出时支持文章过滤，包括作者、标题、发布时间、是否原创、所属合集等
  - title: 合集下载
    details: 支持公众号内合集文章的批量导出
  - title: 内嵌的音视频
    details: 支持内嵌的音视频导出
  - title: 元数据
    details: 支持评论、阅读量、点赞量等各种元数据的抓取
  - title: 格式转换 (开发中)
    details: 支持将导出的 HTML 原始格式转为 PDF / 图片 / Markdown 等格式
  - title: API (开发中)
    details: 支持通过 API 调用
---

## 界面

### 抓取指定公众号文章链接
![](assets/index/index-1.png)

### 文章导出
![](assets/index/index-2.png)

### 合集下载
![](assets/index/index-3.png)

### 使用队列多线程下载
![](assets/index/index-4.png)

<a href="https://wechat-article-exporter.deno.dev/" target="_blank">前往使用</a>
