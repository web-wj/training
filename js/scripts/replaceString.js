const fs = require('fs');
const path = require('path');

const copyDir = (needCopyDirPath, copiedDirPath, fileName) => {

  fs.mkdirSync(copiedDirPath, { recursive: true });
  // const writeStream = fs.createWriteStream(copiedDirPath + fileName, { encoding: 'utf8'});
  // const readStream = fs.createReadStream(needCopyDirPath + fileName, { encoding: 'utf8'});
}

const replaceFileString = (filePath, fileName, dictionary) => {
  const needCopyDirPath = path.join(__dirname, `../${filePath}`);
  const copiedDirPath = needCopyDirPath.replace(filePath, 'test');
  copyDir(needCopyDirPath, copiedDirPath, fileName);
}


replaceFileString('docs', 'README.md');
