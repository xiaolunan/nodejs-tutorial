## 回调地狱

![callback-hell.jpg](../media/callback-hell.jpg)

```javascript
const fs = require('fs')

fs.readFile('./data/a.txt', 'utf8', (err, dataA) => {
  if (err) {
    throw err
  }
  fs.readFile('./data/b.txt', 'utf8', (err, dataB) => {
    if (err) {
      throw err
    }

    fs.readFile('./data/c.txt', 'utf8', (err, dataC) => {
      if (err) {
        throw err
      }
      fs.writeFile('./data/d.txt', dataA + dataB + dataC, err => {
        if (err) {
          throw err
        }
        console.log('success')
      })
    })
  })
})

```



## Promise 概念

- 一个容器，用来封装一个异步任务
- 三种状态
  - Pending
  - Resolved
  - Rejected
- 成功调用 resolve
- 失败调用 reject

## Promise 基本用法

## 几个例子

实例一：Promise 版本的定时器

```javascript
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve()
    }, time)
  })
}

sleep(1000)
  .then(() => {
    console.log('吃饭')
    return sleep(2000)
  })
  .then(() => {
    console.log('睡觉')
    return sleep(3000)
  })
  .then(() => {
    console.log('坐火车回家')
  })
```

封装 Promise 版本的 `readFile` ：

```javascript
function readFile(...args) {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}

readFile('./data/a.txt', 'utf8')
  .then(data => {
    console.log(data)
  })
```

另一个例子：读取文件

```javascript
function readFile(...args) {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (err, data) => {
      err ? reject(err) : resolve(data)
    })
  })
}

function writeFile(...args) {
  return new Promise((resolve, reject) => {
    fs.writeFile(...args, err => {
      err ? reject(err) : resolve()
    })
  })
}

let ret = ''

readFile('./data/a.txt', 'utf8')
  .then(data => {
    ret += data
    return readFile('./data/b.txt', 'utf8')
  })
  .then(data => {
    ret += data
    return readFile('./data/c.txt', 'utf8')
  })
  .then(data => {
    ret += data
    // fs.writeFile('./data/e.txt', ret, err => {
    // })
    return writeFile('./data/e.txt', ret)
  })
  .then(() => {
    console.log('success')
  })
```

示例：封装 Promise 版本的 ajax

```javascript
var ajax = {}

ajax.get = function (url) {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.onload = function () {
      resolve(this.responseText)
    }
    oReq.open("get", url, true);
    oReq.send()
  })
}
```

带有业务的封装：

```javascript
var ajax = {}

ajax.get = function (url) {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.onload = function () {
      // callback(this.responseText)
      resolve(this.responseText)
    }
    oReq.open("get", url, true);
    oReq.send()
  })
}

function duquabc() {
  return new Promise((resolve, reject) => {
    let ret = ''
    ajax.get('./data/a.txt')
      .then(data => {
      ret += data
      return ajax.get('./data/b.txt')
    })
      .then(data => {
      ret += data
      return ajax.get('./data/c.txt')
    })
      .then(data => {
      ret += data
      resolve(ret)
    })
  })
}

duquabc().then(ret => {
  console.log(ret)
})
```

## 错误处理

- then 方法的第二个参数
  - 仅捕获 Promise 本身的异常
- catch 方法（推荐）
  - 不仅可以捕获 Promise 的异常
  - 还是可以捕获 resolve 函数中的异常
  - 如果后面还有 then 无法阻止
- then 方法无法被阻止

## Promise.all()

## Promise.race()

