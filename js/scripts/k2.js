const fs = require('fs');

const dict = {
  测试: 'ceshi',
  用户: 'user'
};

const replaceString = (filePath, fileName) => {
  let content = fs.readFileSync(filePath + fileName, { encoding: 'utf8' });
  if (content !== null) {
    for (const key of Object.keys(dict)) {
      const reg = new RegExp(`${key}`, 'gm');
      content = content.replace(reg, `{{ $var.${dict[key]} }}`);
    }
    fs.writeFileSync(filePath + fileName, content, { encoding: 'utf8' });
  }
};

const findMdFiles = (currentRootDir) => {
  const files = fs.readdirSync(currentRootDir);
  files.forEach((item) => {
    const fileStat = fs.statSync(currentRootDir + item);
    if (fileStat.isDirectory() === true && item !== 'images') {
      findMdFiles(`${currentRootDir + item}/`);
    } else {
      const mdFileRegex = /\.md$/;
      if (mdFileRegex.exec(item)) {
        console.warn(currentRootDir + item);
        replaceString(currentRootDir, item);
      }
    }
  });
};

findMdFiles('./docs/');

// 单个文件调试使用
// replaceString('./docs/settings/', 'README.md')
