const vscode = require('vscode');
const path = require('path');

module.exports = vscode.languages.registerHoverProvider('javascript', {
  provideHover(document, position, token) {
    const fileName = document.fileName;
    const workDir = path.dirname(fileName);
    const word = document.getText(document.getWordRangeAtPosition(position));
    // 支持markdown语法
    return new vscode.Hover(
    `### 我就是返回的信息!
      fileName: ${fileName}
      workDir: ${workDir}
      word: ${word}
  `);
  }
 }
);
// token: keoreklskcblsfzv4b55grmuynw2ubqmce2747mwuh6sjhq4zota
