const e = require('./export');

console.log('当前的模块', e);

// CommonJS 规定
// 每个模块内部，module 变量代表当前的模块，module.exports 是对外接口。