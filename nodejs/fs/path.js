const path = require('path')
const fpath = 'a/b/c/d.html'

// 路径的拼接用 path.join 
// 最后文件的名称获取用 path.basename
console.log(path.basename(fpath))
console.log(path.basename(fpath, '.html'))
// 获取路径中的文件扩展名带 .
console.log(path.extname(fpath))

