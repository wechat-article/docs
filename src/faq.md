# 常见问题 (FAQ)

[[toc]]


## 出现 `200002:invalid args` 如何解决？

出现该错误的原因可能是多方面的，需要逐一排查。

首先确认扫码登录时使用的是 **服务号** 或者 **公众号**，而非 **小程序**，如下图所示：

![使用公众号登录](assets/usage/wechat-login.png)

其次，由于该项目的原理是基于公众号后台的公众号文章搜索功能，因此目标公众号必须开启 **允许通过名称搜索** 才能获取到文章数据，如下图所示：

![公众号隐私设置](assets/faq/account-privacy-setting.png)

某些公众号搜索不到也可能是因为没有开启这个选项导致的。

## 登录页面为什么不显示二维码？

这通常出现在私有部署的网站，由于微信返回的相关 cookie 使用了 `secure` 属性，所以要求网站必须开启 https 才能携带 cookie。

> `localhost`和`127.0.0.1`访问不受该规则限制。


## 如何获取评论和阅读量、点赞量、转发量这些数据？

这些数据都需要使用微信用户的信息才能抓取到，所以需要先获取用户的这些信息(本程序称之为 **Credentials**)，然后设置到网站中，才能抓取这些数据。

具体如何获取微信用户的信息(Credentials)，可以查看 [抓取 Credentials](advanced/wxdown-service.md)。


## 为什么已加载的消息数和消息总数会差几条呢？

![account list](assets/faq/account-list.png)

首先要弄清楚 **消息** 和 **文章** 的区别。

下面这个图里框选的就是2条消息，每条消息可能会包含多篇文章。

![wechat message](assets/faq/wechat-message.png)

网站的【公众号管理】这个列表里面【已加载消息数】就是指的抓取到的这个消息数量，是准确的，【消息总数】是微信接口返回的一个字段，叫`total_count`，这个是我猜的消息总数，所以不一定准确。

## 文章下载页面的文章数量为什么不一样？

![](assets/faq/download-count-not-match.png)

这是因为网站设置里默认启用了【隐藏已删除文章】的选项，可以手动关闭这个选项，这两个数字就一致了。

![](assets/faq/setting-hide-deleted.png)

## 如何检查请求失败原因？

有时候可能因为各种原因导致获取数据失败，此时需要一步步进行排查，其中最主要的就是检查网络请求。

下面就说明一下如何自行排查网络请求

### 第一步，打开浏览器的开发者工具面板

菜单如下：
![](assets/faq/devtools-menu.png)

或者在网页上右键，选择【inspect】
![](assets/faq/devtools-contextmenu.png)

### 第二步，捕获请求

切换到【网络】面板，然后点击左边的清空按钮，将之前的网络请求清空，进行全新的捕获。
![](assets/faq/network-panel.png)

这一步做完之后，就可以在页面上进行操作了，比如抓取评论。操作完成后，网络面板就会记录所有的网络请求，可以点开对应的网络请求查看返回的具体内容。
如果对网络请求不了解，也可以将请求的内容截图发群里咨询大佬们解答。

## 请求出现`429`状态码

公共代理当天的额度用完了，要么搭建自己专属的私有代理([搭建私有代理](get-started/private-proxy.md))，要么等第二天8点刷新额度。

参考 https://github.com/wechat-article/wechat-article-exporter/issues/119

## 目标公众号 Credential 未设置

出现在抓取【阅读量】或【留言内容】时，表示该公众号对应的`Credential`还未获取到，或者已过期。
参考 [抓取 Credential](advanced/wxdown-service.md) 教程设置该公众号的Credential，然后再抓取相关数据。

## 无法打开此文件夹，因为其中含有系统文件
在导出时选择了包含有系统文件的目录，比如【下载目录】、【文档目录】等，可以自己手动创建一个目录用于存放导出文件。

## 如何清理数据

项目中的大部分数据(除单篇文章下载外)都存储在浏览器本地的 IndexedDB 数据库中，清理方式有以下2种：

### 方法 1. 在【公众号管理】菜单中选择对应公众号，然后进行【删除】

> 这种方式可针对某个公众号进行删除

![](assets/faq/delete-1.png)


### 方法 2. 使用 Chrome 开发者工具

> 这种方式删除所有的公众号数据

1. 右键点击页面空白处，选择“检查”或按 F12 键打开开发者工具（DevTools）。
2. 在开发者工具窗口中，切换到“Application”（应用）标签页。
3. 在左侧面板的“Storage”（存储）部分，展开“IndexedDB”。
4. 找到与该网站相关的数据库（exporter.wxdown.online）。
5. 点击右侧的【删除数据库】

![](assets/faq/delete-2.png)

### 方法 3: 通过 Chrome 设置清除站点数据

> 这种方式删除所有的网站数据

1. 在 Chrome 地址栏输入`chrome://settings/content/all?searchSubpage=mptext.top`并回车，进入“所有站点”页面。
2. 点击站点旁边的箭头展开详情，找到`down.mptext.top`域名。
3. 点击右侧的垃圾桶图标删除该站点的所有存储数据（包括 IndexedDB、Cookies 等）。
4. 确认后，数据将被删除。

![](assets/faq/delete-3.png)
