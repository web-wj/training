const fs = require('fs')

// const dict = {
//   '群脉CEP': 'cep',
//   '群脉零售': 'retail',
//   '群脉会员': 'loyalty',
//   '群脉SCRM': 'scrm',
//   '上海群之脉信息科技有限公司': 'company',
//   '群脉': 'qunmai',
//   'MAI': 'mai',
// }

const replaceString = (filePath, fileName) => {
  const destFilePath = filePath.replace('docs', 'docs2')
  fs.mkdirSync(destFilePath, { recursive: true })
  const writeStream = fs.createWriteStream(destFilePath + fileName, { encoding: 'utf8'})
  const readStream = fs.createReadStream(filePath + fileName, { encoding: 'utf8'})
  readStream.on('readable', () => {
    const content = readStream.read()
    if (content !== null) {
      const reg=/(.*)群脉(.*)/g // 这里要遍历 dict 替换，注意顺序
      const contentReplaced = content.replace(reg,"$1{{ $var.qunmai }}$2")
      writeStream.write(contentReplaced)
    } else {
      writeStream.end()
    }
  })
}

const findMdFiles = (currentRootDir) => {
  const files = fs.readdirSync(currentRootDir)
  files.forEach(function (item, index) {
    const fileStat = fs.statSync(currentRootDir + item)
    if (fileStat.isDirectory() === true && item !== 'images') {
      // console.log('directory =====', item)
      findMdFiles(currentRootDir + item + '/')
    } else {
      const mdFileRegex = /\.md$/
      if (mdFileRegex.exec(item)) {
        console.log('find md file ===', currentRootDir + item)
        // replaceString(currentRootDir + item)
      }
    }
  })
}

fs.rmdirSync('./docs2/', { recursive: true, force: true })
// findMdFiles('./docs/')

replaceString('./docs/workspace/', 'README.md')
