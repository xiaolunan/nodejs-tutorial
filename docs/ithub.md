该案例以 Node.js 中文开源技术社区 [CNode](http://cnodejs.org/) 为原型。

## 准备

```
.
├── node_modules
├── public 存储客户端页面需要的样式、js脚本、img图片等静态资源
├── views 存储所有的视图模板文件
├── app.js 应用程序启动入口
├── .gitignore Git忽略文件
├── package.json 项目包说明文件，用来存储项目名称，第三方包依赖等信息
├── package-lock.json
└── README.md 项目说明文件
```

## MVC

- [维基百科 - MVC](https://zh.wikipedia.org/wiki/MVC)

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

## 导入数据表

- 新建数据库 `ithub`
- 在数据库上右键 -> 运行 SQL 文件

## 在案例中使用 mysql 操作数据数据库

```javascript
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ithub'
})

module.exports = connection
```

## 分支操作

```shell
# 查看所有本地分支
git branch

# 查看本地分支+远程分支
git branch -a

# 将远程分支拉到本地并切换到该分支
git checkout -b 分支名称 origin/远程分支名称
```



## 用户注册

## 用户登陆

## 发表话题

## 查看话题

## 修改话题

## 删除话题



