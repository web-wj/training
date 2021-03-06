const vscode = require('vscode');
const message = require('./message.js');
const navigation = require('./navigation.js');
const progress = require('./progress.js');
const hover = require('./hover.js');
const tree = require('./tree.js');

function activate(context) {
  vscode.window.showInformationMessage('插件成功激活!');
  context.subscriptions.push(message);
  context.subscriptions.push(navigation);
  context.subscriptions.push(progress);
  context.subscriptions.push(hover);
  context.subscriptions.push(tree);
}

module.exports = {
    activate
}
