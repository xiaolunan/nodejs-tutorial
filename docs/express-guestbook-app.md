> 案例Github仓库地址：https://github.com/lipengzhou/express-guestbook-case

## 零、准备

完整目录结构如下：

```
.
├── node_modules npm安装的第三方包目录，使用 npm 装包会自动创建
├── public 页面需要使用的静态资源
│   ├── css
│   ├── js
│   ├── img
│   └── ...
├── views 所有视图页面（只存储 html 文件）
│   ├── publish.html
│   └── index.html
├── app.js 服务端程序入口文件，执行该文件会启动我们的 Web 服务器
├── db.json 这里充当我们的数据库
├── README.md 项目说明文档
├── package.json 项目包说明文件，存储第三方包依赖等信息
└── package-lock.json npm的包锁定文件，用来锁定第三方包的版本和提高npm下载速度
```

```shell
# 创建项目目录
mkdir guestbook

# 进入项目目录
cd guestbook

# 初始化 package.json 文件
npm init -y

# 将 Express 安装到项目中
npm install express
```



## 一、Hello World

```javascript
// 0. 加载 Express
const express = require('express')

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express()

// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get('/', (req, res) => {
  res.send('hello world')
})

// 3. 监听端口号，启动 Web 服务
app.listen(3000, () => console.log('app listening on port 3000!'))
```

## 二、配置模板引擎

> 参见：Express - 使用模板引擎

## 三、路由设计

| 请求方法 | 请求路径     | 作用              |
| ---- | -------- | --------------- |
| GET  | /        | 渲染 index.html   |
| GET  | /publish | 渲染 publish.html |
| POST | /publish | 处理发表留言          |

```javascript
app.get('/', function (req, res) {
  // ...
})

app.get('/publish', function (req, res) {
  // ...
})

app.post('/publish', function (req, res) {
  // ...
})
```

## 四、走通页面渲染跳转

```javascript
app.get('/', function (req, res) {
  res.render('index.html')
})

app.get('/publish', function (req, res) {
  res.render('publish.html')
})
```

## 五、安装处理 Bootstrap 样式文件

安装 `bootstrap` 到项目中：

```shell
npm install bootstrap
```

将 `node_modules` 目录开放出来：

```javascript
app.use('/node_modules/', express.static('./node_modules/'))
```

## 六、将数据库中的 post 渲染到首页

JavaScript 后台处理：

```javascript
app.get('/', function (req, res) {
  fs.readFile('./db.json', function (err, data) {
    if (err) {
      return res.render('500.html', {
        errMessage: err.message
      })
    }
    try {
      data = JSON.parse(data.toString())
      res.render('index.html', {
        posts: data.posts
      })
    } catch (err) {
      return res.render('500.html', {
        errMessage: err.message
      })
    }
  })
})
```

index.html 页面模板字符串：

```html
<ul class="list-group">
  {{ each posts }}
  <li class="list-group-item">
    <span class="badge">{{ $value.time }}</span>
    <span>{{ $value.name }}</span>说：<span>{{ $value.content }}</span>
  </li>
  {{ /each }}
</ul>
```



## 七、配置解析表单 post 请求体

> 参见：Express - 解析表单 post 请求体

## 八、处理 publish 表单提交

```javascript
app.post('/publish', function (req, res) {
  var body = req.body

  fs.readFile('./db.json', function (err, data) {
    if (err) {
      return res.render('500.html', {
        errMessage: err.message
      })
    }
    try {
      data = JSON.parse(data.toString())
      var posts = data.posts
      var last = posts[posts.length - 1]

      // 生成数据添加到 post 数组中
      posts.unshift({
        id: last ? last.id + 1: 1,
        name: body.name,
        content: body.content,
        time: moment().format('YYYY-MM-DD HH:mm:ss') // moment 是一个专门用来处理时间的 JavaScript 库
      })

      // 把对象转成字符串存储到文件中
      // try-catch 无法捕获异步代码的异常
      fs.writeFile('./db.json', JSON.stringify(data), function (err) {
        if (err) {
          return res.render('500.html', {
            errMessage: err.message
          })
        }
        // 代码执行到这里，说明写入文件成功了
        // 在 Express 中，我们可以使用 res.redirect() 实现服务端重定向的功能
        res.redirect('/')
      })
    } catch (err) {
      return res.render('500.html', {
        errMessage: err.message
      })
    }
  })
})
```

## 九、案例优化：提取数据操作模块

```javascript
const {readFile, writeFile} = require('fs')

const dbPath = './db.json'

exports.getDb = getDb

// 封装带来的好处：
//    1. 可维护性
//    2. 其次才是重用
exports.addPost = (post, callback) => {
  getDb((err, dbData) => {
    if (err) {
      return callback(err)
    }
    
    // 获取数组中最后一个元素
    const last = dbData.posts[dbData.posts.length - 1]
    
    // 添加数据的 id 自动增长
    post.id = last ? last.id + 1 : 1

    // 创建时间
    post.createdAt = '2018-2-2 11:57:06'

    // 将数据添加到数组中（这里还并没有持久化存储）
    dbData.posts.push(post)

    // 将 dbData 对象转成字符串持久化存储到文件中
    const dbDataStr = JSON.stringify(dbData)

    writeFile(dbPath, dbDataStr, err => {
      if (err) {
        return callback(err)
      }

      // Express 为 res 响应对象提供了一个工具方法：redirect 可以便捷的重定向
      // res.redirect('/')
      callback(null)
    })
  })
}

function getDb (callback) {
  readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data))
  })
}

```

## 十、案例总结

