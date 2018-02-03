该案例以 Node.js 中文开源技术社区 [CNode](http://cnodejs.org/) 为原型。

## Step 0. 创建一个远程仓库

1. 在 GitHub 上创建一个仓库 `ithub`
2. 使用 Git 将远程仓库下载到本地 `git clone 远程仓库地址`

## Step 1. 初始化目录结构

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

## 导入模板

下载模板到本地：

```shell
git clone https://github.com/lipengzhou/ithub-template.git
```

将模板中的 `public` 和 `views` 拷贝到项目中。

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

## 用户注册

客户端 JavaScript 代码：

```javascript
$('#signup_form').on('submit', handleSignup)

function handleSignup(e) {
  // 因为表单有一个默认的同步提交行为，所以我们需要给它阻止掉
  // 1. e.preventDefault()
  // 2. return false
  e.preventDefault()
  var formData = $(this).serialize()
  $.ajax({
    url: '/signup',
    type: 'post',
    data: formData,
    dataType: 'json',
    success: function (data) {
      var code = data.code
      switch (code) {
        case 0:
          window.location.href = '/'
          break
          case 1:
          window.alert('邮箱已存在')
          break
          case 2:
          window.alert('昵称已存在')
          break
      }
    },
    error: function (err) {
      console.log(err)
    }
  })
}
```

服务器 JavaScript 代码：

```javascript
exports.handleSignup = (req, res) => {
  // 1. 获取表单提交的 POST 请求体数据
  // 2. 数据校验
  //    普通数据格式校验
  //    业务数据校验
  // 3. 校验通过，持久化存储用户注册的数据
  // 4. 保持登陆状态
  // 5. 发送响应，告诉客户端注册成功了
  const body = req.body
  db.query('SELECT * FROM `users` WHERE `email`=?', [body.email], (err, results) => {
    if (err) {
      return res.status(500).send(`Server Internal Error: ${err.message}`)
    }
    // 如果数组中有一个元素，则说明邮箱已存在
    if (results[0]) {
      // res.json 方法接收一个对象
      // 该方法会帮你把对象转成 json 格式字符串然后发送给客户端
      return res.status(200).json({
        code: 1, // 1 表示邮箱已存在
        message: '邮箱已存在'
      })
    }
    db.query('SELECT * FROM `users` WHERE `nickname`=?', [body.nickname], (err, results) => {
      if (err) {
        return res.status(500).send(`Server Internal Error: ${err.message}`)
      }
      // 如果数组中有一个元素，则说明邮箱已存在
      if (results[0]) {
        // res.json 方法接收一个对象
        // 该方法会帮你把对象转成 json 格式字符串然后发送给客户端
        return res.status(200).json({
          code: 2, // 1 表示邮箱已存在
          message: '昵称已存在'
        })
      }

      // 数据校验成功，然后就可以真正的持久化存储用户信息了
      // 密码 md5 加密 md5
      // 添加创建时间和更新时间 moment
      body.password = md5(`${md5(body.password)}${secret}`)
      body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
      body.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss')

      db.query('INSERT INTO `users` SET ?', body, (err, ret) => {
        if (err) {
          return res.status(500).send(`Server Internal Error: ${err.message}`)
        }
        if (ret.affectedRows !== 1) {
          return res.status(500).send(`注册失败`)
        }

        // 我们接下来要为注册保持登陆状态
        // 利用 Session 来保持登陆状态
        // 为了方便我们在其它业务中使用用户 id ，所以这里直接就把用户 id 也存储到了 Session 数据中了
        body.id = ret.insertId

        // 注册成功，记录 Session 中保持登陆状态
        req.session.user = body

        res.status(200).json({
          code: 0,
          message: '注册成功'
        })
      })
    })
  })
}
```



## 用户登陆

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

