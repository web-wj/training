const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const open = require('open');

const log = content => console.log(chalk.green(content));
const { clone } = require('./clone');
const spawn = async (...args) => {
  const { spawn } = require('child_process');
  return new Promise(resolve => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout);
    proc.stderr.pipe(process.stderr);
    proc.on('close', () => {
      resolve();
    })
  })
}

module.exports = async (name) => {
  // 打印欢迎页面
  clear();
  const welcomeTip = await figlet('cli Welcome!');
  log(`${welcomeTip}\n`);

  // 下载模板项目
  log(`🚀 创建项目： ${name}\n`);
  await clone('github:web-wj/cli-template', name);

  // 自动安装依赖
//   log('✈ 安装依赖......\n');
//   await spawn('npm', ['install'], {cwd: `./${name}`});
//   log(`
// 🔨 安装完成
// To get Start:
// ===========================
//      cd ${name}
//      npm run serve
// ===========================
//   `);

  // 启动
  // open(`http:localhost:8080`);
  // await spawn('npm ', ['run', 'serve'], {cwd: `./${name}`});
}
