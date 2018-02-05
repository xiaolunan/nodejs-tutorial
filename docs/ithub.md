该案例以 Node.js 中文开源技术社区 [CNode](http://cnodejs.org/) 为原型。

## 准备

1. 在 GitHub 上创建一个仓库 `ithub`
2. 使用 Git 将远程仓库下载到本地 `git clone 远程仓库地址`

### 初始化目录结构

```
.
├── node_modules
├── controllers 控制器
├── models 模型
├── public 静态资源
├── views 视图
├── app.js 应用程序启动入口
├── config.js 应用配置文件
├── .gitignore Git忽略文件
├── package.json 项目包说明文件，用来存储项目名称，第三方包依赖等信息
├── package-lock.json
└── README.md 项目说明文件
```

在 app.js 中写入以下内容：

```javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

### 导入模板

下载模板到本地：

```shell
git clone https://github.com/lipengzhou/ithub-template.git
```

将模板中的 `public` 和 `views` 拷贝到项目中。

### MVC

- [维基百科 - MVC](https://zh.wikipedia.org/wiki/MVC)

### 导入数据表

- 新建数据库 `ithub`
- 在数据库上右键 -> 运行 SQL 文件

## 数据库设计

### 用户表

### 话题表

### 话题分类表

### 评论表

## 路由设计

| 请求方法 | 请求路径                   | 说明       |
| ---- | ---------------------- | -------- |
| GET  | /                      | 渲染首页     |
| GET  | /signin                | 渲染登陆页面   |
| POST | /signin                | 处理登陆请求   |
| GET  | /signup                | 渲染注册页面   |
| POST | /signup                | 处理注册请求   |
| POST | /signout               | 处理退出请求   |
| GET  | /topic/create          | 渲染发布话题页面 |
| POST | /topic/create          | 处理发布请求请求 |
| GET  | /topic/:topicID        | 渲染话题详情页面 |
| GET  | /topic/:topicID/edit   | 渲染编辑话题页面 |
| POST | /topic/:topicID/edit   | 处理编辑话题请求 |
| POST | /topic/:topicID/delete | 处理删除话题请求 |
| POST |                        | 发表评论     |
|      |                        | 修改评论     |
|      |                        | 删除评论     |
|      |                        | 个人主页     |
|      |                        | 基本信息     |
|      |                        | 设置       |

## 提取路由和控制器模块

## 杂项

- 拷贝 `resources` 中的 `public` 和 `views` 到案例根目录
- `npm i bootstrap jquery`
- 开放 public 和 node_modules 静态资源

## 按照路由走通页面渲染

- 配置模板引擎
- 根据不同路由渲染页面

## 用户注册

## 用户登陆

## 用户退出

## 发表话题

## 查看话题

## 修改话题

## 删除话题

## 案例代码查看

```shell
# 下载到本地
git clone https://github.com/lipengzhou/itcast-nodejs.git
```

查看所有的标签（我针对每一大步都打了标签，方便切换）：

```shell
# 查看所有标签
git tag

# 查看带有注释的标签
# 注意：使用 git-bash 查看，因为有中文
git tag -n
```

切换指定标签：

```shell
git checkout -f 标签名称

# 例如切换到 step-2
git checkout -f step-2
```

