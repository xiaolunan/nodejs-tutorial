## 目录结构

```
.
├── node_modules npm安装的第三方包目录，使用 npm 装包会自动创建
│   ├── bootstrap html页面需要使用的样式库
│   └── mime 在 Node 中需要使用它处理 Content-Type
├── public 页面需要使用的公共资源，例如 css、img、js（客户端js） 等
│   ├── css
│   ├── fonts
│   ├── img
│   └── ...
├── views 所有视图页面（只存储 html 文件）
│   ├── fabiao.html
│   └── index.html
├── app.js 服务端程序入口文件，执行该文件会启动我们的 Web 服务器
├── package.json 项目包说明文件，存储第三方包依赖等信息
└── package-lock.json npm的包锁定文件，用来锁定第三方包的版本和提高npm下载速度
```

## 开放静态资源

## 处理展示视图页面

## 配置使用 art-template 模板引擎

> 参见：Express - 使用模板引擎

## 首页留言列表渲染

## 处理表单 post 提交

> 参见：Express - 解析表单 post 请求体

## 处理发表留言功能

## 案例总结
