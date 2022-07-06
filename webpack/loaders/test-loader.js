const loaderUtils = require('loader-utils');

module.exports = function (sourceCode) {
  // 将 变量 a = 1 做字符串替换
  console.log('loader 运行了');
  // this 中内容太多了，使用第三方库 loader-utils 来处理
  console.log(this);
  const options = loaderUtils.getOptions(this)
  console.log(options);
  const reg = new RegExp(options.changeVal, "g");
  return sourceCode.replace(reg, 'const');
}