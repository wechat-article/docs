# 私有部署 - 专业版

::: warning 注意

1. 专业版目前仅支持 **已赞助用户** 部署，功能与网站 (https://exporter.wxdown.online) 完全一致。
2. 仅支持 Docker 部署。
3. 目前正在优化中，暂时不对外开放。
:::


## 获取授权
已赞助用户可在微信联系我免费获取授权码。


## 拉取镜像

```shell
docker pull jooooock/wechat-article-exporter:latest
```

## 启动容器

启动容器的方式有下面 2 种，根据你自己的情况选择其中一种：

### 1. 命令行启动

```shell
docker run -d --rm -p 3000:3000 -v /app/.data:/app/.data -e EMAIL=[your_email] -e LICENSE=[your_license] jooooock/wechat-article-exporter:latest
```

### 2. Docker 桌面程序启动

启动参数如下：

![](../assets/deploy/docker-desktop-launch.png)

启动成功可直接点击这里打开浏览器：
![](../assets/deploy/docker-launch-success.png)


## 浏览器访问

浏览器打开 `http://localhost:3000` 即可使用专业版功能。
