const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');

const log = content => console.log(chalk.green(content));

module.exports = async () => {
  // 打印欢迎页面
  clear();
  const welcomeTip = await figlet('portal Welcome!');
  log(welcomeTip);
}