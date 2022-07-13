const fs = require("fs");
const path = require("path");

function main() {
  const dirPath = path.join(__dirname, "../docs");
  findFilesByType(dirPath, '.md');
}

/**
 * 读取文件夹中的指定文件
 * @param {*} dirPath 需要读取的文件路径
 * @param {*} fileType 指定文件的类型
 */
function findFilesByType(dirPath, fileType) {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => { 
    const fileStat = fs.statSync(dirPath + file);
    console.log('===============>fileStat', fileStat);
  })
}

// function replaceStr(filePath, replaceDictionary) {

// }
main();

// https://blog.csdn.net/qq_34832846/article/details/88125645