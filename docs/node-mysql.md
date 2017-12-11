# 使用 Node 操作 MySQL 数据库

> 参考文档：https://github.com/mysqljs/mysql

<!-- MarkdownTOC -->

- [安装](#%E5%AE%89%E8%A3%85)
- [Hello World](#hello-world)
- [连接池连接](#%E8%BF%9E%E6%8E%A5%E6%B1%A0%E8%BF%9E%E6%8E%A5)
- [query 使用](#query-%E4%BD%BF%E7%94%A8)
  - [`.query(sqlString, callback)`](#querysqlstring-callback)
  - [`.query(sqlString, values, callback)`](#querysqlstring-values-callback)
  - [`.query(options, callback)`](#queryoptions-callback)

<!-- /MarkdownTOC -->

## 安装

```shell
npm install mysql
```

## Hello World

```javascript
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
```

## 连接池连接

```javascript
var mysql = require('mysql');
var pool  = mysql.createPool({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret',
  database : 'my_db'
});

pool.getConnection(function(err, connection) {
  // Use the connection
  connection.query('SELECT something FROM sometable', function (error, results, fields) {
    // 释放回连接池
    connection.release();

    // 处理错误
    if (error) throw error;

    // ...
  });
});
```

## query 使用

### `.query(sqlString, callback)`

```javascript
connection.query('SELECT * FROM `books` WHERE `author` = "David"', function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
});
```

### `.query(sqlString, values, callback)`

```javascript
connection.query('SELECT * FROM `books` WHERE `author` = ?', ['David'], function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
});
```

另一个例子：

```javascript
connection.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId], function (error, results, fields) {
  if (error) throw error;
  // ...
});
```

还可以是一个对象：

```javascript
var post  = {id: 1, title: 'Hello MySQL'};
var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
  if (error) throw error;
  // Neat!
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
```

### `.query(options, callback)`

```javascript
connection.query({
  sql: 'SELECT * FROM `books` WHERE `author` = ?',
  timeout: 40000, // 40s
  values: ['David']
}, function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
});
```
