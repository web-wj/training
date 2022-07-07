// console.log('hello webpack');
// console.log('index module');

// const a = require('./a');
// // ccc.a();
// console.log(a);

// 处理样式
// const content = require('./assets/style.css');
// console.log(content); 

// 处理图片
var src = require("./assets/webpack.png")
console.log(src);
var img = document.createElement("img")
img.src = src;
document.body.appendChild(img);