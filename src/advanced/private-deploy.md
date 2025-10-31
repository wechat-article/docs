# 私有部署


## 本地运行

> 需要 >= node22 环境

### 拉取代码

```shell
git clone git@github.com:wechat-article/wechat-article-exporter.git
```

### 安装依赖

```shell
yarn
```

或者

```shell
npm install
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
  -v ./data:/app/.data \
  ghcr.io/wechat-article/wechat-article-exporter:latest
```


## 浏览器访问

浏览器打开 `http://localhost:3000` 即可使用专业版功能。
