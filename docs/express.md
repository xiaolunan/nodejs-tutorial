原生的 http 模块在某些方面表现不足以应对我们的开发需求，所以我们就需要使用框架来加快我们的开发效率，框架的目的就是提高效率，让我们的代码更高度统一。
在 Node 中，有很多 Web 开发框架，我们这里以学习 `Express` 为主。

## Express 介绍

- Express 是一个基于 Node.js 平台，快速、开放、极简的 web 开发框架。


- 作者：[tj](https://github.com/tj)
  - [tj 个人博客](http://tjholowaychuk.com/)
  - 知名的开源项目创建者和协作者
  - Express、commander、ejs、co、Koa...
  - 已经离开 Node 社区，转 Go 了
  - [知乎 - 如何看待 TJ 宣布退出 Node.js 开发，转向 Go？](https://www.zhihu.com/question/24373004)
- 丰富的 API 支持，强大而灵活的中间件特性
- Express 不对 Node.js 已有的特性进行二次抽象，只是在它之上扩展了 Web 应用所需的基本功能
- 有很多[流行框架](http://expressjs.com/en/resources/frameworks.html)基于 Express


- [Express 官网](http://expressjs.com/)
- [Express 中文文档（非官方）](http://www.expressjs.com.cn/)
- [Express GitHub仓库](https://github.com/expressjs/express)



## 起步

### 安装

> 参考文档：http://expressjs.com/en/starter/installing.html

```shell
# 创建并切换到 myapp 目录
mkdir myapp
cd myapp

# 初始化 package.json 文件
npm init -y

# 安装 express 到项目中
npm i express
```

### Hello World

> 参考文档：http://expressjs.com/en/starter/hello-world.html

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

### 基本路由

> 参考文档：http://expressjs.com/en/starter/basic-routing.html

路由（Routing）是由一个 URI（或者叫路径标识）和一个特定的 HTTP 方法（GET、POST 等）组成的，涉及到应用如何处理响应客户端请求。

每一个路由都可以有一个或者多个处理器函数，当匹配到路由时，这个/些函数将被执行。

路由的定义的结构如下：

```javascript
app.METHOD(PATH, HANDLER)
```

其中：

- `app` 是 express 实例
- `METHOD` 是一个 [HTTP 请求方法](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)
- `PATH` 是服务端路径（定位标识）
- `HANDLER` 是当路由匹配到时需要执行的处理函数

下面是一些基本示例。

Respond with `Hello World!` on the homepage:

```javascript
// 当你以 GET 方法请求 / 的时候，执行对应的处理函数
app.get('/', function (req, res) {
  res.send('Hello World!')
})
```

Respond to POST request on the root route (`/`), the application’s home page:

```javascript
// 当你以 POST 方法请求 / 的时候，指定对应的处理函数
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```

Respond to a PUT request to the `/user` route:

```javascript
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```

Respond to a DELETE request to the `/user` route:

```typescript
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```

For more details about routing, see the [routing guide](http://expressjs.com/en/guide/routing.html).

## 处理静态资源

> 参考文档：http://expressjs.com/en/starter/static-files.html

```javascript
// 开放 public 目录中的资源
// 不需要访问前缀
app.use(express.static('public'))

// 开放 files 目录资源，同上
app.use(express.static('files'))

// 开放 public 目录，限制访问前缀
app.use('/public', express.static('public'))

// 开放 public 目录资源，限制访问前缀
app.use('/static', express.static('public'))

// 开放 publi 目录，限制访问前缀
// path.join(__dirname, 'public') 会得到一个动态的绝对路径
app.use('/static', express.static(path.join(__dirname, 'public')))
```

## 使用模板引擎

> 参考文档：
>
> - [Using template engines with Express](http://expressjs.com/en/guide/using-template-engines.html)

我们可以使用模板引擎处理服务端渲染，但是 Express 为了保持其极简灵活的特性并没有提供类似的功能。

同样的，Express 也是开放的，它支持开发人员根据自己的需求将模板引擎和 Express 结合实现服务端渲染的能力。

### 配置使用 art-template 模板引擎

> 参考文档：
>
> - [art-template 官方文档](https://aui.github.io/art-template/)

这里我们以 [art-template](https://github.com/aui/art-template) 模板引擎为例演示如何和 Express 结合使用。



安装：

```shell
npm install art-template express-art-template
```

配置：

```javascript
// 第一个参数用来配置视图的后缀名，这里是 art ，则你存储在 views 目录中的模板文件必须是 xxx.art
// app.engine('art', require('express-art-template'))

// 这里我把 art 改为 html
app.engine('html', require('express-art-template'))
```

使用示例：

```javascript
app.get('/', function (req, res) {
  // render 方法默认会去项目的 views 目录中查找 index.html 文件
  // render 方法的本质就是将读取文件和模板引擎渲染这件事儿给封装起来了
  res.render('index.html', {
    title: 'hello world'
  })
})
```

如果希望修改默认的 `views` 视图渲染存储目录，可以：

```javascript
// 第一个参数 views 是一个特定标识，不能乱写
// 第二个参数给定一个目录路径作为默认的视图查找目录
app.set('views', 目录路径)
```

### 其它常见模板引擎

JavaScript 模板引擎有很多，并且他们的功能都大抵相同，但是不同的模板引擎也各有自己的特色。

大部分 JavaScript 模板引擎都可以在 Node 中使用，下面是一些常见的模板引擎。

- ejs
- handlebars
- jade
  - 后改名为 pug
- nunjucks

## 在 Express 获取表单 POST 请求体数据

> 参考文档：
>
> - [GitHub - body-parser](https://github.com/expressjs/body-parser)

在 Express 中没有内置获取表单 POST 请求体的 API，这里我们需要使用一个第三方包：`body-parser`。

安装：

```shell
npm install --save body-parser
```

配置：

```javascript
var express = require('express')
// 0. 引包
var bodyParser = require('body-parser')

var app = express()

// 配置 body-parser
// 只要加入这个配置，则在 req 请求对象上会多出来一个属性：body
// 也就是说你就可以直接通过 req.body 来获取表单 POST 请求体数据了
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
```

使用：

```javascript
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  // 可以通过 req.body 来获取表单 POST 请求体数据
  res.end(JSON.stringify(req.body, null, 2))
})
```

## 在 Express 配置使用 `express-session` 插件

> 参考文档：https://github.com/expressjs/session

安装：

```shell
npm install express-session
```

配置：

```javascript
// 该插件会为 req 请求对象添加一个成员：req.session 默认是一个对象
// 这是最简单的配置方式，暂且先不用关心里面参数的含义
app.use(session({
  // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
  // 目的是为了增加安全性，防止客户端恶意伪造
  secret: 'itcast',
  resave: false,
  saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}))
```

使用：

```javascript
// 添加 Session 数据
req.session.foo = 'bar'

// 获取 Session 数据
req.session.foo
```

提示：默认 Session 数据是内存存储的，服务器一旦重启就会丢失，真正的生产环境会把 Session 进行持久化存储。

---

## 路由

> 参考文档：
>
> - [Routing](http://expressjs.com/en/guide/routing.html)

一个非常基础的路由：

```javascript
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
```

### 路由方法

```javascript
// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
```

### 路由路径

This route path will match requests to the root route, /.

```javascript
app.get('/', function (req, res) {
  res.send('root')
})
```

This route path will match requests to /about.

```javascript
app.get('/about', function (req, res) {
  res.send('about')
})
```

This route path will match requests to /random.text.

```javascript
app.get('/random.text', function (req, res) {
  res.send('random.text')
})
```

Here are some examples of route paths based on string patterns.

This route path will match acd and abcd.

```javascript
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})
```

This route path will match abcd, abbcd, abbbcd, and so on.

```javascript
app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})
```

This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

```javascript
app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})
```

This route path will match /abe and /abcde.

```javascript
app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})
```

Examples of route paths based on regular expressions:

This route path will match anything with an “a” in the route name.

```javascript
app.get(/a/, function (req, res) {
  res.send('/a/')
})
```

This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

```javascript
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})
```

#### 动态路径

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

定义动态的路由路径：

```javascript
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
```

### 路由处理方法

### app.route()

### express.Router

Create a router file named router.js in the app directory, with the following content:

```javascript
const express = require('express')

const router = express.Router()

router.get('/', function (req, res) {
  res.send('home page')
})

router.get('/about', function (req, res) {
  res.send('About page')
})

module.exports = router
```

Then, load the router module in the app:

```javascript
const router = require('./router')

// ...

app.use(router)
```

## 中间件

> 参考文档：
>
> - [Writing middleware for use in Express apps](http://expressjs.com/en/guide/writing-middleware.html)
> - [Using middleware](http://expressjs.com/en/guide/using-middleware.html)

## 错误处理

> 参考文档：
>
> - [Error handling](http://expressjs.com/en/guide/error-handling.html)

## API

> 参考文档：
>
> - [4.x API](http://expressjs.com/en/4x/api.html)