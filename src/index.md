---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 公众号文章下载神器
  text: 开源 & 免费
  tagline: 无需注册，无需付费，代码完全开源，数据完全由你掌控
  image:
    src: /logo.png
    alt: 公众号文章下载
  actions:
    - theme: brand
      text: 快速上手
      link: /get-started/usage
    - theme: alt
      text: GitHub
      link: https://github.com/wechat-article/wechat-article-exporter

features:
  - title: 无需安装
    icon:
      src: /icons/cloud.svg
    details: 在线使用，不需要配置本地环境 (下载评论和阅读量等数据时需要配合本地的抓包软件)
  - title: 支持多公众号
    icon:
      src: /icons/users.svg
    details: 可以添加多个公众号(数量无限制)，批量抓取文章链接
  - title: 元数据
    icon:
      src: /icons/chart.svg
    details: 支持抓取阅读量、点赞量、评论等各种元数据 (使用配套的wxdown-service程序)
  - title: 数据导出
    icon:
      src: /icons/download.svg
    details: 支持导出 excel/json/html/txt/markdown/word 格式，后续会支持pdf格式
  - title: 文章过滤
    icon:
      src: /icons/filter.svg
    details: 导出时支持丰富的过滤条件，包括标题、摘要、发布时间、是否原创、阅读量、点赞量、转发量、作者、文章类型、媒体时长等
  - title: 合集下载
    icon:
      src: /icons/folder.svg
    details: 支持公众号内合集文章的批量下载
  - title: 私有化部署
    icon:
      src: /icons/server.svg
    details: 支持 docker 私有化部署，数据完全由自己控制
    link: /advanced/private-deploy
    linkText: 开始部署
  - title: API
    icon:
      src: /icons/code.svg
    details: 支持通过 API 调用
    link: /advanced/api
  - title: RSS (计划中)
    icon:
      src: /icons/rss.svg
    details: 支持 RSS 订阅
---

<div class="home-section">

## <span class="section-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span> 快速开始，三步上手

<div class="steps">
<div class="step">
<div class="step-number">1</div>
<div class="step-content">
<h3>扫码登录</h3>
<p>使用微信扫描二维码，登录公众号后台</p>
</div>
</div>
<div class="step">
<div class="step-number">2</div>
<div class="step-content">
<h3>搜索公众号</h3>
<p>输入公众号名称，添加到列表</p>
</div>
</div>
<div class="step">
<div class="step-number">3</div>
<div class="step-content">
<h3>批量抓取 & 导出</h3>
<p>选择文章，抓取文章内容并一键导出</p>
</div>
</div>
</div>

</div>

<div class="home-section">

## <span class="section-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></span> 支持的导出格式

<div class="format-grid">
<div class="format-item" style="--accent: #2563eb;">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
<span>HTML</span>
</div>
<div class="format-item" style="--accent: #7c3aed;">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
<span>Markdown</span>
</div>
<div class="format-item" style="--accent: #059669;">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
<span>Excel</span>
</div>
<div class="format-item" style="--accent: #d97706;">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
<span>JSON</span>
</div>
<div class="format-item" style="--accent: #0891b2;">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
<span>TXT</span>
</div>
<div class="format-item" style="--accent: #6366f1;">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
<span>Word</span>
</div>
</div>

</div>

<div class="home-section">

## <span class="section-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></span> 常见问题

<div class="faq-list">
<details>
<summary>需要安装什么软件吗？</summary>
<p>不需要！直接在浏览器中打开即可使用，无需安装任何软件。如需抓取阅读量等元数据，需要配合 wxdown-service 程序。</p>
</details>
<details>
<summary>支持哪些公众号？</summary>
<p>支持所有微信公众号，包括订阅号和服务号，数量没有限制。(某些公众号关闭了搜索功能，此类公众号暂不支持。)</p>
</details>
<details>
<summary>数据是否安全？</summary>
<p>完全安全。工具开源可审计，支持私有化部署，数据不经过任何第三方服务器。</p>
</details>
<details>
<summary>是否完全免费？</summary>
<p>是的，本工具完全免费且开源，遵循 MIT 协议，你可以自由使用和修改。</p>
</details>
</div>

</div>

<div class="home-section ai-section">
<h2>
<span class="section-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/><circle cx="12" cy="14" r="2"/><path d="M12 16v2"/></svg></span> 投喂 AI
</h2>
<p>将本站文档提供给 AI 助手，获取更精准的使用帮助：</p>
<div class="ai-links">
<a href="/llms.txt">llms.txt<span class="ai-link-desc">文档索引</span></a>
<a href="/llms-full.txt">llms-full.txt<span class="ai-link-desc">完整文档</span></a>
</div>
</div>

<style>
.home-section {
  max-width: 1152px;
  margin: 0 auto;
  padding: 40px 24px;
}

.home-section h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5em;
  margin-bottom: 32px;
  border: none !important;
  padding-bottom: 0 !important;
}

.section-icon {
  display: inline-flex;
  align-items: center;
}

/* 三步上手 */
.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .steps {
    grid-template-columns: 1fr;
  }
}

.step {
  display: flex;
  gap: 16px;
  padding: 24px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.dark .step:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.step-number {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1em;
}

.step-content h3 {
  margin: 0 0 4px;
  font-size: 1.05em;
}

.step-content p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  line-height: 1.6;
}

/* 导出格式 */
.format-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

@media (max-width: 768px) {
  .format-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.format-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 16px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: var(--accent);
  font-weight: 600;
  font-size: 0.95em;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.format-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.dark .format-item:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

/* FAQ */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-list details {
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  padding: 0;
  overflow: hidden;
}

.faq-list summary {
  padding: 16px 20px;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s ease;
}

.faq-list summary::before {
  content: '▶';
  font-size: 0.7em;
  color: var(--vp-c-brand-1);
  transition: transform 0.2s ease;
}

.faq-list details[open] summary::before {
  transform: rotate(90deg);
}

.faq-list summary:hover {
  color: var(--vp-c-brand-1);
}

.faq-list details p {
  margin: 0;
  padding: 0 20px 16px;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}

/* AI section */
.ai-section {
  padding-bottom: 60px;
}

.ai-links {
  display: flex;
  gap: 16px;
}

.ai-links a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 16px 32px;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  font-weight: 600;
  font-size: 0.95em;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ai-links a:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.dark .ai-links a:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.ai-link-desc {
  font-size: 0.8em;
  font-weight: 400;
  color: var(--vp-c-text-3);
}
</style>
