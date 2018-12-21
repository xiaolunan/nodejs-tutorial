# 第13章 综合案例



## 学习目标

- 能够理解 MVC 模式在项目中的意义
- 能够完成基础的项目骨架
- 能够理解基本的路由设计方式
- 能够掌握模板引擎 layout 布局的使用
- 能够掌握表格拖拽排序的处理流程

- 分类管理
  - 能够使用传统方式完成添加分类
  - 能够使用传统方式完成分类列表展示
  - 能够使用传统方式完成编辑分类
  - 能够使用传统方式完成删除分类
- 用户管理
  - 能够使用Ajax方式添加管理员
  - 能够使用Ajax方式展示管理员列表
  - 能够使用Ajax方式完成编辑管理员
  - 能够使用Ajax方式完成删除管理员
- 用户登录
  - 能够使用传统方式完成用户登录
  - 能够使用Ajax方式完成用户登录

- 文章管理
  - 能够使用Ajax方式完成发布新文章
  - 能够通过查看文档掌握富文本编辑器的使用
  - 能够理解分页技术的交互过程
  - 能够通过查看文档使用客户端分页插件
  - 能够使用Ajax方式完成展示文章列表
  - 能够使用Ajax方式完成编辑文章
  - 能够使用Ajax方式完成删除文章
- 评论管理
  - 能够使用Ajax+分页方式展示评论列表
  - 能够使用Ajax方式删除评论
  - 能够使用Ajax方式操作评论的通过状态
- 网站设置
  - 能够掌握传统方式的表单文件提交前后端处理流程
  - 能够掌握Ajax异步表单文件提交前后端处理流程
  - 能够使用Ajax方式完成网站基本信息设置
- 图片轮播管理
  - 能够使用Ajax方式完成添加轮播项
  - 能够使用Ajax方式展示轮播列表
  - 能够使用Ajax方式编辑轮播项
  - 能够使用Ajax方式删除轮播项
- 菜单管理
  - 能够使用Ajax方式完成添加导航菜单项
  - 能够使用Ajax方式展示导航菜单列表
  - 能够使用Ajax方式编辑导航菜单项
  - 能够使用Ajax方式删除导航菜单项

- 客户端前台
  - 能够使用Ajax方式加载轮播图列表
  - 能够使用Ajax+分页方式加载内容列表
  - 能够使用动态路由导航方式加载内容详情
  - 能够使用Ajax方式完成发布评论
  - 能够使用Ajax+异步分页（加载更多）方式完成评论列表展示



## 课堂测试





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

## 使用 markdown 富文本编辑器

- https://github.com/lepture/editor


