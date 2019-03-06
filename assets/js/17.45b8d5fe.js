(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{342:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第6章-文件操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第6章-文件操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 第6章 文件操作")]),t._v(" "),s("p",[s("strong",[t._v("学习目标")])]),t._v(" "),s("ul",[s("li",[t._v("理解同步和异步概念")]),t._v(" "),s("li",[t._v("掌握基本的文件读写")]),t._v(" "),s("li",[t._v("掌握 path 模块基本使用")]),t._v(" "),s("li",[t._v("理解文件操作的相对路径")])]),t._v(" "),s("h2",{attrs:{id:"同步和异步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步和异步","aria-hidden":"true"}},[t._v("#")]),t._v(" 同步和异步")]),t._v(" "),s("p",[t._v("fs模块对文件的几乎所有操作都有同步和异步两种形式，例如："),s("code",[t._v("readFile()")]),t._v(" 和 "),s("code",[t._v("readFileSync()")]),t._v("。")]),t._v(" "),s("p",[t._v("同步与异步文件系统调用的区别")]),t._v(" "),s("ul",[s("li",[t._v("同步调用立即执行，会阻塞后续代码继续执行，如果想要捕获异常需要使用 "),s("code",[t._v("try-catch")])]),t._v(" "),s("li",[t._v("异步调用不会阻塞后续代码继续执行，需要回调函数作为额外的参数，通常包含一个错误作为回调函数的第一个参数")]),t._v(" "),s("li",[t._v("异步调用通过判断第一个err对象来处理异常")]),t._v(" "),s("li",[t._v("异步调用结果往往通过回调函数来进行获取")])]),t._v(" "),s("p",[t._v("Node 只在文件IO操作中，提供了同步调用和异步调用两种形式，两者可以结合使用，\n但是推荐能使用异步调用解决问题的情况下，少用同步调用。")]),t._v(" "),s("p",[t._v("对于文件操作，Node 几乎为所有的文件操作 API 提供了同步操作和异步操作两种方式。")]),t._v(" "),s("ul",[s("li",[t._v("同步会阻塞程序的执行，效率低（知道就行）")]),t._v(" "),s("li",[t._v("异步相当于多找了一个人帮你干活，效率高")]),t._v(" "),s("li",[t._v("所以建议：尽量使用异步")])]),t._v(" "),s("h2",{attrs:{id:"常用-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用 API")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("API")]),t._v(" "),s("th",[t._v("作用")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("fs.access(path, callback)")]),t._v(" "),s("td",[t._v("判断路径是否存在")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fs.appendFile(file, data, callback)")]),t._v(" "),s("td",[t._v("向文件中追加内容")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fs.copyFile(src, callback)")]),t._v(" "),s("td",[t._v("复制文件")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fs.mkdir(path, callback)")]),t._v(" "),s("td",[t._v("创建目录")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fs.readDir(path, callback)")]),t._v(" "),s("td",[t._v("读取目录列表")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fs.rename(oldPath, newPath, callback)")]),t._v(" "),s("td",[t._v("重命名文件/目录")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fs.rmdir(path, callback)")]),t._v(" "),s("td",[t._v("删除目录")]),t._v(" "),s("td",[t._v("只能删除空目录")])]),t._v(" "),s("tr",[s("td",[t._v("fs.stat(path, callback)")]),t._v(" "),s("td",[t._v("获取文件/目录信息")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fs.unlink(path, callback)")]),t._v(" "),s("td",[t._v("删除文件")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fs.watch(filename[, options][, listener])")]),t._v(" "),s("td",[t._v("监视文件/目录")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("fs.watchFile(filename[, options], listener)")]),t._v(" "),s("td",[t._v("监视文件")]),t._v(" "),s("td")])])]),t._v(" "),s("h2",{attrs:{id:"案例：markdown-文件转换器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例：markdown-文件转换器","aria-hidden":"true"}},[t._v("#")]),t._v(" 案例：Markdown 文件转换器")]),t._v(" "),s("blockquote",[s("p",[t._v("需求：用户编写 md 格式的文件，实时的编译成 html 文件")])]),t._v(" "),s("h2",{attrs:{id:"监视文件-目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监视文件-目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 监视文件/目录")]),t._v(" "),s("ul",[s("li",[t._v("[fs.watch(filename"),s("a",{attrs:{href:"https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_watch_filename_options_listener",target:"_blank",rel:"noopener noreferrer"}},[t._v(", options][, listener])"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("[fs.watchFile(filename"),s("a",{attrs:{href:"https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_watchfile_filename_options_listener",target:"_blank",rel:"noopener noreferrer"}},[t._v(", options], listener)"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"文件流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件流","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件流")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_createreadstream_path_options",target:"_blank",rel:"noopener noreferrer"}},[t._v("fs.createReadStream(path[, options])"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_fs_createwritestream_path_options",target:"_blank",rel:"noopener noreferrer"}},[t._v("fs.createWriteStream(path[, options])"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"path-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-模块","aria-hidden":"true"}},[t._v("#")]),t._v(" path 模块")]),t._v(" "),s("blockquote",[s("p",[t._v("参考文档：https://nodejs.org/dist/latest-v9.x/docs/api/path.html")])]),t._v(" "),s("p",[s("code",[t._v("path")]),t._v(" 是 Node 本身提供的一个核心模块，专门用来处理路径。")]),t._v(" "),s("p",[t._v("使用它的第一步就是先加载：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'path'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"path-basename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-basename","aria-hidden":"true"}},[t._v("#")]),t._v(" path.basename")]),t._v(" "),s("blockquote",[s("p",[t._v("获取一个路径的文件名部分")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("basename")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/foo/bar/baz/asdf/quux.html'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: 'quux.html'")]),t._v("\n\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("basename")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/foo/bar/baz/asdf/quux.html'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'.html'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: 'quux'")]),t._v("\n")])])]),s("h3",{attrs:{id:"path-dirname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-dirname","aria-hidden":"true"}},[t._v("#")]),t._v(" path.dirname")]),t._v(" "),s("blockquote",[s("p",[t._v("获取一个路径的目录部分")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("dirname")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/foo/bar/baz/asdf/quux'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: '/foo/bar/baz/asdf'")]),t._v("\n")])])]),s("h3",{attrs:{id:"path-extname"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-extname","aria-hidden":"true"}},[t._v("#")]),t._v(" path.extname")]),t._v(" "),s("blockquote",[s("p",[t._v("获取一个路径的后缀名部分")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extname")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'index.html'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: '.html'")]),t._v("\n\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extname")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'index.coffee.md'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: '.md'")]),t._v("\n\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extname")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'index.'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: '.'")]),t._v("\n\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extname")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'index'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: ''")]),t._v("\n\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("extname")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'.index'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: ''")]),t._v("\n")])])]),s("h3",{attrs:{id:"path-parse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-parse","aria-hidden":"true"}},[t._v("#")]),t._v(" path.parse")]),t._v(" "),s("blockquote",[s("p",[t._v("将一个路径转换为一个对象，得到路径的各个组成部分")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("parse")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/home/user/dir/file.txt'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns:")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// { root: '/',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//   dir: '/home/user/dir',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//   base: 'file.txt',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//   ext: '.txt',")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//   name: 'file' }")]),t._v("\n")])])]),s("h3",{attrs:{id:"path-format-pathobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-format-pathobject","aria-hidden":"true"}},[t._v("#")]),t._v(" path.format(pathObject)")]),t._v(" "),s("blockquote",[s("p",[t._v("将具有特定属性的对象转换为一个路径")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// If `dir`, `root` and `base` are provided,")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// `${dir}${path.sep}${base}`")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// will be returned. `root` is ignored.")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("format")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  root"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/ignored'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  dir"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/home/user/dir'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  base"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'file.txt'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: '/home/user/dir/file.txt'")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// `root` will be used if `dir` is not specified.")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// If only `root` is provided or `dir` is equal to `root` then the")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// platform separator will not be included. `ext` will be ignored.")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("format")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  root"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  base"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'file.txt'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ext"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'ignored'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: '/file.txt'")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// `name` + `ext` will be used if `base` is not specified.")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("format")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  root"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'file'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ext"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'.txt'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: '/file.txt'")]),t._v("\n")])])]),s("h3",{attrs:{id:"path-join"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-join","aria-hidden":"true"}},[t._v("#")]),t._v(" path.join")]),t._v(" "),s("blockquote",[s("p",[t._v("将多个路径拼接为一个")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/foo'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'bar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'baz/asdf'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'quux'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'..'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: '/foo/bar/baz/asdf'")]),t._v("\n\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'bar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// throws 'TypeError: Path must be a string. Received {}'")]),t._v("\n")])])]),s("h3",{attrs:{id:"path-isabsolute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-isabsolute","aria-hidden":"true"}},[t._v("#")]),t._v(" path.isAbsolute")]),t._v(" "),s("blockquote",[s("p",[t._v("判断一个路径是否是绝对路径")])]),t._v(" "),s("p",[t._v("Unix:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isAbsolute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/foo/bar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isAbsolute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/baz/..'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isAbsolute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'qux/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),s("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isAbsolute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'.'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),s("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),s("p",[t._v("Windows:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isAbsolute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'//server'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isAbsolute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'\\\\\\\\server'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isAbsolute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'C:/foo/..'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isAbsolute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'C:\\\\foo\\\\..'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isAbsolute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'bar\\\\baz'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isAbsolute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'bar/baz'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),s("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("isAbsolute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'.'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),s("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),s("h3",{attrs:{id:"path-normalize-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-normalize-path","aria-hidden":"true"}},[t._v("#")]),t._v(" path.normalize(path)")]),t._v(" "),s("blockquote",[s("p",[t._v("将一个非标准路径标准化")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("normalize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/foo/bar//baz/asdf/quux/..'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: '/foo/bar/baz/asdf'")]),t._v("\n\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("normalize")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'C:\\\\temp\\\\\\\\foo\\\\bar\\\\..\\\\'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: 'C:\\\\temp\\\\foo\\\\'")]),t._v("\n")])])]),s("h3",{attrs:{id:"path-resolve-paths"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-resolve-paths","aria-hidden":"true"}},[t._v("#")]),t._v(" path.resolve([...paths])")]),t._v(" "),s("blockquote",[s("p",[t._v("类似于 "),s("code",[t._v("path.join()")]),t._v(" ，也是用来路径拼接")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/foo/bar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./baz'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: '/foo/bar/baz'")]),t._v("\n\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/foo/bar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/tmp/file/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Returns: '/tmp/file'")]),t._v("\n\npath"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'wwwroot'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'static_files/png/'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'../gif/image.gif'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// if the current working directory is /home/myself/node,")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'")]),t._v("\n")])])]),s("h2",{attrs:{id:"文件操作的相对路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件操作的相对路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 文件操作的相对路径")]),t._v(" "),s("blockquote",[s("p",[t._v("建议：以后操作文件使用相对路径都使用 "),s("code",[t._v("path.join()")]),t._v(" 方法结合 "),s("code",[t._v("__dirname")]),t._v(" 来避免问题。")])]),t._v(" "),s("h3",{attrs:{id:"路径分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路径分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 路径分类")]),t._v(" "),s("p",[t._v("和大多数路径规则一样，在 Node 中的路径规则同样遵守以下方式：")]),t._v(" "),s("ul",[s("li",[t._v("绝对路径\n"),s("ul",[s("li",[t._v("以 "),s("code",[t._v("/")]),t._v(" 开头的路径，例如 "),s("code",[t._v("/a/b/c")]),t._v(" "),s("ul",[s("li",[t._v("在 Linux 中就是操作系统的根路径")]),t._v(" "),s("li",[t._v("在 Windows 中是当前 JavaScript 脚本所属磁盘根路径")])])]),t._v(" "),s("li",[t._v("以 "),s("code",[t._v("c:/")]),t._v(" 开头的盘符路径，例如 "),s("code",[t._v("c:/a/b/c")])])])]),t._v(" "),s("li",[t._v("相对路径\n"),s("ul",[s("li",[t._v("以 "),s("code",[t._v("./")]),t._v(" 开头的相对路径，例如 "),s("code",[t._v("./a/b/c")]),t._v(" "),s("ul",[s("li",[t._v("在这里 "),s("code",[t._v("./")]),t._v(" 可以省略，"),s("code",[t._v("a/b/c")]),t._v(" 等价于 "),s("code",[t._v("./a/b/c")])]),t._v(" "),s("li",[t._v("注意，"),s("code",[t._v(".")]),t._v(" 不能省略，否则 "),s("code",[t._v("/a/b/c")]),t._v(" 就是一个绝对路径")])])]),t._v(" "),s("li",[t._v("以 "),s("code",[t._v("../")]),t._v(" 开头的相对路径，例如 "),s("code",[t._v("../a/b/c")])])])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 相对于当前路径")]),t._v("\nfs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("readFile")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'./README.md'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 相对当前路径，可以省略 ./")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 注意：加载模块中的标识路径不能省略 ./")]),t._v("\nfs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("readFile")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'README.md'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 绝对路径")]),t._v("\nfs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("readFile")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'c:/README.md'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 绝对路径，当前 js 脚本所处磁盘根目录")]),t._v("\nfs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("readFile")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/README.md'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"相对路径操作的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相对路径操作的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 相对路径操作的问题")]),t._v(" "),s("h3",{attrs:{id:"相对路径到底相对于谁？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相对路径到底相对于谁？","aria-hidden":"true"}},[t._v("#")]),t._v(" 相对路径到底相对于谁？")]),t._v(" "),s("h3",{attrs:{id:"如何解决某些时候相对路径带来的问题？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何解决某些时候相对路径带来的问题？","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何解决某些时候相对路径带来的问题？")]),t._v(" "),s("h3",{attrs:{id:"dirname-和-filename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dirname-和-filename","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("__dirname")]),t._v(" 和 "),s("code",[t._v("__filename")])]),t._v(" "),s("p",[t._v("在每个模块中，除了 "),s("code",[t._v("require")]),t._v("、"),s("code",[t._v("exports")]),t._v(" 等模块成员之外，还有两个特殊的成员：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("__dirname")]),t._v(" "),s("strong",[t._v("动态获取")]),t._v(" 当前文件模块所属目录的绝对路径")]),t._v(" "),s("li",[s("code",[t._v("__filename")]),t._v(" "),s("strong",[t._v("动态获取")]),t._v(" 当前文件的绝对路径")])]),t._v(" "),s("blockquote",[s("p",[t._v("dirname"),s("code",[t._v("和")]),t._v("__filename` 是不受执行 node 命令所属路径影响的")])]),t._v(" "),s("p",[t._v("###把相对路径转换为动态的绝对路径")]),t._v(" "),s("h3",{attrs:{id:"使用-path-join-方法解决拼接的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-path-join-方法解决拼接的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 "),s("code",[t._v("path.join()")]),t._v(" 方法解决拼接的问题")]),t._v(" "),s("h3",{attrs:{id:"路径使用整理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路径使用整理","aria-hidden":"true"}},[t._v("#")]),t._v(" 路径使用整理")]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("相对路径永远是相对于执行 node 命令所处的路径")])]),t._v(" "),s("li",[s("p",[t._v("绝对路径永远是绝对路径，"),s("code",[t._v("__dirname")]),t._v(" 永远不会受影响")])])]),t._v(" "),s("blockquote",[s("p",[t._v("注意：模块标识路径还是相对于文件模块本身，还这里的文件操作中的相对路径规则没有关系。")])])])},[],!1,null,null,null);e.options.__file="06-fs.md";a.default=e.exports}}]);