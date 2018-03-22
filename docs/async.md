异步串行：

```javascript
const fs = require('fs')
const util = require('util')

// Node 通过核心模块 util 提供了一个非常便利的方法：promisify
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

// async function main() {
//   // 异步串行
//   // 小明
//   //    打酱油
//   //    买鱼
//   const dataA = await readFile('./data/a.txt', 'utf8')
//   const dataB = await readFile('./data/b.txt', 'utf8')
//   console.log(dataA, dataB)
// }

// main()
```

异步并行：

```javascript
// async function main() {
//   // 异步并行
//   // 不要加 await 关键字
//   // 得到的结果是 Promise 对象
//   const aTask = readFile('./data/a.txt', 'utf8')
//   const bTack = readFile('./data/b.txt', 'utf8')
//   const dataA = await aTask
//   const dataB = await bTack
//   console.log(dataA, dataB)
// }

// main()
```

