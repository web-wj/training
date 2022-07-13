const loaderUtils = require('loader-utils');

module.exports = function (sourceCode) {
  // 将 变量 a = 1 做字符串替换
  console.log('loader 运行了');
  // this 中内容太多了，使用第三方库 loader-utils 来处理
  const replaceSourceCode = sourceCode.replace('变量', 'const');
  const options = loaderUtils.getOptions(this)
  const reg = new RegExp(options.changeVal, "g");
  return replaceSourceCode.replace(reg, 'const');
}