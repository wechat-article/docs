# 私有部署


## 本地运行

> 需要 node >=22 环境

### 拉取代码

```shell
git clone git@github.com:wechat-article/wechat-article-exporter.git
```

### 安装依赖

```shell
yarn
```


### 启动

```shell
yarn dev
```


## docker 运行

### 拉取镜像

```shell
docker pull ghcr.io/wechat-article/wechat-article-exporter:latest
```

### 启动容器

> 容器暴露的端口号为3000，内部存储目录为/app/.data

```shell
docker run -d --rm \
  --name wechat-article-exporter \
  -p 3000:3000 \
  -v .data:/app/.data \
  ghcr.io/wechat-article/wechat-article-exporter:latest
```

## 浏览器访问

浏览器打开 `http://localhost:3000` 即可使用专业版功能。


## Vercel 快速部署

### 一键部署

点击下方按钮一键部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wechat-article/wechat-article-exporter)

### 手动部署

1. Fork 本项目到你的 GitHub 账号

2. 在 Vercel 中导入项目
   - 访问 [Vercel](https://vercel.com)
   - 点击 "Add New..." → "Project"
   - 选择你 Fork 的项目仓库

3. 配置项目
   - Framework Preset: 选择 `Nuxt.js`
   - Root Directory: 保持默认 `./`
   - Build Command: 保持默认或使用 `yarn build`
   - Output Directory: 保持默认 `.output/public`

4. 配置环境变量（可选）
   - 在项目设置中添加所需的环境变量（见下方环境变量说明）

5. 点击 "Deploy" 完成部署


## 环境变量

某些功能需要设置环境变量，比如访客统计、错误日志上报、AG-Grid授权码等。

以下列出了所有支持的环境变量，本地运行时可直接在项目根目录创建`.env`文件，docker运行时可通过`--env-file .env`选项传入环境变量启动。

### AG-Grid 企业版授权

```dotenv
# AG-Grid 企业版授权
NUXT_AGGRID_LICENSE=
```

### 调试微信代理请求(仅开发环境支持)

```dotenv
# 调试微信代理请求 (仅开发环境(development)支持)
NUXT_DEBUG_MP_REQUEST=true
```

### umami 网站统计

```dotenv
# umami 网站统计
# https://umami.nuxt.dev/api/configuration
NUXT_UMAMI_ID=
NUXT_UMAMI_HOST=
```

### sentry
```dotenv
# sentry
# https://docs.sentry.io/platforms/javascript/guides/nuxt/manual-setup/
NUXT_SENTRY_DSN=
NUXT_SENTRY_ORG=
NUXT_SENTRY_PROJECT=
NUXT_SENTRY_AUTH_TOKEN=
```

### kv绑定
```dotenv
# KV绑定(本地/docker)
NITRO_KV_DRIVER=fs
NITRO_KV_BASE=.data/kv

# KV绑定(cloudflare)
#NITRO_KV_DRIVER=cloudflare-kv-binding
```
