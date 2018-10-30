## Node.js 是什么

以下引自 [Node.js 官网](https://nodejs.org/en/)：


> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
> Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
> Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.


- Node.js 是一个构建于 [Chrome V8 JavaScript 引擎](https://zh.wikipedia.org/wiki/V8_(JavaScript%E5%BC%95%E6%93%8E)) 之上的一个 JavaScript 运行时
- Node.js 采用 **事件驱动**，**非阻塞IO模型** 使得它轻量和高效
- Node.js 包生态系统 [npm](https://www.npmjs.com/) 是世界上最大的开源库生态系统

Node.js 不是一种独立的语言，与 PHP、Python、Perl、Ruby 的“既是语言也是平台”不同。Node.js 也不是一个 JavaScript 框架，不同于 CakePHP、Django、Rails。Node.js 更不是浏览器端的库，不能与 jQuery、ExtJS 相提并论。Node.js 是一个让 JavaScript 运行在服务端的开发平台，它让 JavaScript 成为脚本语言世界的一等公民，在服务端堪与 Java、PHP、Python、Perl、Ruby 平起平坐。

## Node 的特点

- 事件驱动
- 非阻塞 IO（异步） 模型
- 单线程
- 跨平台



## Node 的运行机制

多线程处理机制：

![多线程处理模型](./assets/多线程处理模型.jpg)

传统的 Web 服务器（Apache、Tomcat、IIS）：

- 请求进来
- Web 服务器开启一个线程来处理用户请求
- 同一时间有 n 请求，服务器就需要开启 n 个线程
  - 一个线程最少得消耗 8MB 内存
  - 对于一个 8GB 内存的服务器来说，它能应对的并发数是 1024 * 8 / 8 = 1024个并发



事件驱动处理模型：

- Node 中低层封装了一堆的异步操作 API
  - 文件操作
  - 网络操作
  - ...
- JavaScript 语言本身是单线程的

![event-loop](./assets/eventloop.jpg)

## Node 发展历史

> 以下内容节选自：[来自朴灵大大的 -- Node.js 简史](https://cnodejs.org/topic/555d3d54e684c4c8088a0d78)

Node.js不是凭空出现的项目，也**不是某个Web前端工程师为了完成将JavaScript应用到服务端的理想而在实验室里捣鼓出来的**。它的出现主要归功于**Ryan Dahl历时多年的研究**，以及一个恰到好处的节点。2008年**V8随着Chrome浏览器**的出世，JavaScript 脚本语言的执行效率得到质的提升，这给Ryan Dahl带来新的启示，他原本的研究工作与V8之间碰撞出火花，于是带来了一个基于事件的高性能Web服务器。

![ryan-dahl](./assets/ryandahl.jpg)

上图为Node.js创始人Ryan Dahl。

Ryan Dahl的经历比较奇特，他并非科班出身的开发者，在2004年的时候他还在纽约的罗彻斯特大学数学系读博士，期间有研究一些分形、分类以及p-adic分析，这些都跟开源和编程没啥关系。2006年，也许是厌倦了读博的无聊，他产生了『世界那么大，我想去看看』的念头，做出了退学的决定，然后一个人来到智利的Valparaiso小镇。那时候他尚不知道找一个什么样的工作来糊口，期间他曾熬夜做了一些不切实际的研究，如如何通过云进行通信。下面是这个阶段他产出的中间产物，与后来苹果发布的iCloud似乎有那么点相似。

从那起，Ryan Dahl不知道是否因为生活的关系，他开始学习网站开发了，走上了码农的道路。那时候Ruby on Rails很火，他也不例外的学习了它。从那时候开始，Ryan Dahl的生活方式就是接项目，然后去客户的地方工作，在他眼中，拿工资和上班其实就是去那里旅行。此后他去过很多地方，如阿根廷的布宜诺斯艾利斯、德国的科隆、奥地利的维也纳。

Ryan Dahl经过两年的工作后，成为了高性能Web服务器的专家，从接开发应用到变成专门帮客户解决性能问题的专家。期间他开始写一些开源项目帮助客户解决**Web服务器的高并发性能问题**，尝试过的语言有Ruby、C、Lua。当然这些尝试都最终失败了，只有其中通过C写的HTTP服务库libebb项目略有起色，基本上算作libuv的前身。这些失败各有各的原因，Ruby因为虚拟机性能太烂而无法解决根本问题，C代码的性能高，但是让业务通过C进行开发显然是不太现实的事情，Lua则是已有的同步I/O导致无法发挥性能优势。虽然经历了失败，但Ryan Dahl大致的感觉到了解决问题的关键是要通过**事件驱动**和**异步I/O**来达成目的。

在他快绝望的时候，**V8引擎**来了。V8满足他关于高性能Web服务器的想象：

**没有历史包袱，没有同步I/O**。不会出现一个同步I/O导致事件循环性能急剧降低的情况。
**V8性能足够好**，远远比Python、Ruby等其他脚本语言的引擎快。
**JavaScript语言的闭包特性非常方便**，比C中的回调函数好用。
于是在2009年的2月，按新的想法他提交了项目的第一行代码，这个项目的名字最终被定名为 `node`。

**2009年5月**，Ryan Dahl正式向外界宣布他做的这个项目。2009年底，Ryan Dahl在柏林举行的JSConf EU会议上发表关于Node.js的演讲，之后Node.js逐渐流行于世。

以上就是**Node.js项目的由来，是一个专注于实现高性能Web服务器优化的专家，几经探索，几经挫折后，遇到V8而诞生的项目**。



Node 版本发展阶段：

1.0之前等了6年，而从1.0到8.0，只用了2年时间。

- 从v0.1到0.12用了6年
- 2015-01-14发布了v1.0.0版本（io.js）
- 2.x（io.js）
- 3.x（io.js）
- 2015年09月Node.js基金会已发布Node.js V4.0版 与io.js合并后的第一个版本
- 2015年10月Node.jsv4.2.0将是首个lts长期支持版本
- 2016年底发布到4.2.4 && 5.4.0
- 2016年3月20日v4.4.0 LTS（长期支持版本）和v5.9.0 Stable（稳定版本）
- 2016 年底 v6.0 支持95%以上的es6特性 ， v7.0通过flag支持async函数，99%的es6特性
- 2017年2月发布v7.6版本，可以不通过flag使用async函数

![enter image description here](./assets/489283f0-1b98-11e7-a4a6-57c560a3eb5c.png)

## 为什么要学习 Node

- 增加职业竞争力
- 企业需求
- 进一步理解 Web
- 大前端必备技能
- 为了更好的学习前端框架

## Node 能做什么

> [知乎 - JavaScript能做什么，该做什么？](https://www.zhihu.com/question/20796866)
> Atwood's Law: any application that can be written in JavaScript, will eventually be written in JavaScript.
> 凡是能用 JavaScript 写出来的，最终都会用 JavaScript写出来。

- Web 服务器
- 命令行工具
- 网络爬虫
- 桌面应用程序开发（Electron）
- ......

## 这门课程你能学到啥？

- 更进一步的理解 B/S 编程模型
- 模块化编程
- Node常用API
- JavaScript 异步编程
  + 回调函数
  + Promise
  + Generator
  + async/await 函数
- Express Web 开发框架
- Ecmascript 6
- ...

## 一些资源

- [Node.js 官方文档](https://nodejs.org/en/docs/)
- [Node.js 中文文档（非官方）](http://nodejs.cn/)
- [深入浅出 Node.js](https://read.douban.com/ebook/12053349/)
- [Node.js 权威指南](https://book.douban.com/subject/25892704/)
- [Node.js 实战](https://book.douban.com/subject/25870705/)
- [Node.js 实战](https://book.douban.com/subject/25867920/)
- [Node.js实战（第2季）](https://book.douban.com/subject/26642320/)
- [Node.js 中文社区](http://cnodejs.org/)
- [Node.js 包教不包会](https://github.com/alsotang/node-lessons)
- [EcmaScript 6 入门](http://es6.ruanyifeng.com/)
- [七天学会 NodeJS](https://github.com/nqdeng/7-days-nodejs)
- ......
