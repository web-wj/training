// 无效！！！
module.exports = (sourceCode) => {
  // 将 @primary-color 做字符串替换 var(--Theme-Color)
  // const replaceReg = new RegExp(': @primary-color', 'g');
  // return sourceCode.replace(replaceReg, ': var(--Primary-Color)');
  let flag = true;
  if (flag) {
    console.log('================================>sourceCode', sourceCode);
    flag = false;
  }
  return sourceCode;
};
