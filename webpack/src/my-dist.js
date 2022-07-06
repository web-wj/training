// var bbb = 'bbb';

(function(modules) {
  // 用于缓存模块的导出结果
  let moduleExports = {};
  // 提供 require 函数, 相当于运行一个模块，并得到导出结果 moduleId 模块路径
  // 防止与 node 环境下的 webpack 同名
  function __webpack_require__(moduleId) {
    if (moduleExports[moduleId]) {
      return moduleExports[moduleId];
    }
    const fnc = modules[moduleId];
    let module = {
      exports: {}
    };
    fnc(module, module.exports, __webpack_require__);
    const result = module.exports;
    moduleExports[moduleId] = result
    return result;
  }
  // 执行入口文件的内容
  __webpack_require__('./src/index.js');
})({
  "./src/index.js": function(module, exports, __webpack_require__) {
    console.log('hello webpack');
    console.log('index module');
    const a = __webpack_require__('./src/a.js');
    console.log(a);
  },
  "./src/a.js": function(module, exports, __webpack_require__) {
    console.log('module a!!!');
    module.exports = 'a';
  }
})

// console.log(bbb);
