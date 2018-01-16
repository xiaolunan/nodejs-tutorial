## 起步

- 初始化
- 安装依赖
- 模板处理

## 路由设计

| 请求方法 | 请求路径             | get 参数 | post 参数                    | 备注       |
| ---- | ---------------- | ------ | -------------------------- | -------- |
| GET  | /studens         |        |                            | 渲染首页     |
| GET  | /students/new    |        |                            | 渲染添加学生页面 |
| POST | /studens/new     |        | name、age、gender、hobbies    | 处理添加学生请求 |
| GET  | /students/edit   | id     |                            | 渲染编辑页面   |
| POST | /studens/edit    |        | id、name、age、gender、hobbies | 处理编辑请求   |
| GET  | /students/delete | id     |                            | 处理删除请求   |

## 提取路由模块

router.js:

```javascript
/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */
var express = require('express')

// 1. 创建一个路由容器
var router = express.Router()

// 2. 把路由都挂载到 router 路由容器中
router.get('/students', function (req, res) {
})

router.get('/students/new', function (req, res) {
})

router.post('/students/new', function (req, res) {
})

router.get('/students/edit', function (req, res) {
})

router.post('/students/edit', function (req, res) {
})

router.get('/students/delete', function (req, res) {
})

// 3. 把 router 导出
module.exports = router
```

app.js:

```javascript
var router = require('./router')

// 挂载路由
app.use(router)
```

## 设计操作数据的 API 文件模块

```javascript
/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */


/**
 * 获取所有学生列表
 * return []
 */
exports.find = function () {
  
}

/**
 * 添加保存学生
 */
exports.save = function () {
  
}

/**
 * 更新学生
 */
exports.update = function () {
  
}

/**
 * 删除学生
 */
exports.delete = function () {
  
}
```

---
