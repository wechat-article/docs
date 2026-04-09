# 关于更换域名的一些事

本文记录了项目域名变化的历史，帮助用户了解各个地址之间的关系。

## 域名变更历史

| 时间 | 域名 | 平台 | 状态 |
|------|------|------|------|
| 早期 | `wechat-article-exporter.deno.dev` | Deno Deploy | 已重定向 |
| 中期 | `exporter.wxdown.online` | Cloudflare | 已停用 |
| 现在 | **`down.mptext.top`** | Cloudflare | **当前使用** |

文档站点：

| 时间 | 域名 | 状态 |
|------|------|------|
| 早期 | `wechat-article-docs.deno.dev` | 已停用 |
| 中期 | `docs.wxdown.online` | 已停用 |
| 现在 | **`docs.mptext.top`** | **当前使用** |

## 变更原因

- **Deno Deploy → Cloudflare**：`deno.dev` 域名在国内被屏蔽，迁移至 Cloudflare 以提升国内访问体验
- **wxdown.online → mptext.top**：旧 Cloudflare 账号无法登录，域名无法绑定新账号，因此启用新域名

## 旧域名状态

`wxdown.online` 域名已于 2026 年 4 月过期，相关网站已不可用。

::: warning 数据迁移提醒
由于工具数据存储在浏览器的 IndexedDB 中，且与域名绑定，旧域名下缓存的数据已无法访问。如有重要数据，建议使用 [私有部署](../advanced/private-deploy) 方案以确保域名一致性。
:::

## 当前地址

- **工具地址**：https://down.mptext.top
- **文档地址**：https://docs.mptext.top
- **GitHub**：https://github.com/wechat-article
