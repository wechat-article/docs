---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 公众号文章下载神器
  text: 
  tagline: 一款 开源 & 免费 的公众号文章下载神器
  image:
    src: /logo.png
    alt: 公众号文章下载
  actions:
    - theme: brand
      text: 文档
      link: /get-started/usage
    - theme: alt
      text: GitHub
      link: https://github.com/wechat-article/wechat-article-exporter
    - theme: alt
      text: 前往使用
      link: https://exporter.wxdown.online/

features:
  - title: 无需安装
    details: 在线使用，不需要配置本地环境 (下载评论数据时需要配合本地的抓包软件)
  - title: 私有化部署
    details: 支持 docker 私有化部署，数据完全由自己控制
  - title: 支持多公众号
    details: 可以添加多个公众号(数量无限制)，批量抓取文章链接
  - title: 元数据
    details: 支持抓取阅读量、点赞量、评论等各种元数据 (使用配套的wxdown-service程序)
  - title: 数据导出
    details: 支持导出 excel/json/html/txt/markdown/word 格式，后续会支持pdf格式
  - title: 文章过滤
    details: 导出时支持丰富的过滤条件，包括标题、摘要、发布时间、是否原创、阅读量、点赞量、转发量、作者、文章类型、媒体时长等
  - title: 合集下载
    details: 支持公众号内合集文章的批量下载
  - title: 内嵌的音视频
    details: 支持内嵌的音视频下载
  - title: API (内测中)
    details: 支持通过 API 调用
  - title: RSS (计划中)
    details: 支持 RSS 订阅
---
