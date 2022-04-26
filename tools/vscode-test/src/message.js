const vscode = require('vscode');

module.exports = vscode.commands.registerCommand('vscode-test.helloWorld', function () {
  vscode.window.showInformationMessage('第一个demo弹出信息!');
  vscode.window.showWarningMessage('第一个警告信息')
  vscode.window.showErrorMessage('第一个错误信息!');
});

// 第一次打开 ts 文件会弹提示框
// module.exports = (() => {
//   vscode.window.showInformationMessage('打开了 ts 文件!');
// })()
