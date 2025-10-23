# 私有部署 - v2

::: warning 注意
v2版目前正在优化中，可能存在明显bug。
:::


## 获取授权
~~已赞助用户可在微信联系我免费获取授权码。~~

代码已完全开源，不需要授权码。


## 本地运行

> 需要 >= node22 环境

### 拉取代码

```shell
git clone git@github.com:wechat-article/wechat-article-exporter.git
```

### 切换到 v2 分支

```shell
git switch v2
```

### 安装依赖

```shell
yarn
```

或者

```shell
npm install
```

### 创建 .env 文件
在项目根目录创建一个`.env`文件，内容如下：

> 目前，`NUXT_PUBLIC_AGGRID_LICENSE`和`NUXT_SESSION_PASSWORD`是必填项，其他为可选项。

```text
# umami 网站统计
NUXT_PUBLIC_UMAMI_WEBSITE_ID=

# AG-Grid 企业版授权
NUXT_PUBLIC_AGGRID_LICENSE=jock@github.com{AG-bdLyizMP}_Enterprise_key_[v3]_[01]_MTc5MjU3Mjg4MDcxNQ==840eff537466da21d04c2a6c6cb8ef7a

# nuxt-auth-utils
# 可通过在项目中执行 npm run generate:pwd 生成
NUXT_SESSION_PASSWORD=

# OAuth for Github
NUXT_OAUTH_GITHUB_CLIENT_ID=
NUXT_OAUTH_GITHUB_CLIENT_SECRET=

# OAuth for Google
NUXT_OAUTH_GOOGLE_CLIENT_ID=
NUXT_OAUTH_GOOGLE_CLIENT_SECRET=

# 调试微信代理请求
NUXT_DEBUG_MP_REQUEST=false
```

### 启动

```shell
yarn dev
```

或者

```shell
npm run dev
```


## docker 运行

### 拉取镜像

```shell
docker pull ghcr.io/wechat-article/wechat-article-exporter:latest
```

### 启动容器

启动之前需要先准备环境变量文件`.env`，内容如上面所示。

> 镜像暴露的端口号为3000，内部存储目录为/app/.data

```shell
docker run -d --rm \
  --name wechat-article-exporter \
  -p 3000:3000 \
  --env-file .env \
  -v ./data:/app/.data \
  ghcr.io/wechat-article/wechat-article-exporter:latest
```


## 浏览器访问

浏览器打开 `http://localhost:3000` 即可使用专业版功能。
