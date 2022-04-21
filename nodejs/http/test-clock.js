const fs = require('fs');
const path = require('path');
const http = require('http');

const originalFile = path.join(__dirname, '/clock/clock.html');
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script[\s\S]*>[\s\S]*<\/script>/;
// 利用正则将文件拆分成三部分，然后开启服务对应路由显示不同的内容。
function init(original){
  fs.readFile(original, 'utf-8', (err, data) => {
    if(err) {
      return console.log("文件读取失败", err.message);
    }
    const originalStr = data;
    resolveCss(originalStr);
    resolveJs(originalStr);
    resolveHtml(originalStr);
  })
}

function resolveCss(str){
  const newCss = regStyle.exec(str)[0].replace('<style>', '').replace('</style>', '');
  writeFile('./clock/index.css', newCss);
}

function resolveJs(str){
  const newJs = regScript.exec(str)[0].replace('<script type="text/javascript">', '').replace('</script>', '');
  writeFile('./clock/index.js', newJs);
}

function resolveHtml(str){
  const newHtml = str.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript, '<script type="text/javascript" src="./index.js"></script>');
  writeFile('./clock/index.html', newHtml);
}

function writeFile(filePath, newStr){
  fs.writeFile(path.join(__dirname, filePath), newStr, (err) => {
    if(err) {
      return console.log("文件写入失败", err.message);
    }
  });
}

function httpServe(){
  const server = http.createServer();
  server.on('request', (req, res) => {
    const url = req.url;
    let fPath = '';
    if(url === '/'){
      fPath = path.join(__dirname, './clock/index.html');
    }else {
      fPath = path.join(__dirname, './clock', url);
    }
    fs.readFile(fPath, 'utf-8', (err, data) => {
      if(err){
        return res.end("Not find the page! ERROR CODE: 404");
      }
      res.end(data);
    });
  });
  server.listen('80', () => {
    console.log('server running at http://127.0.0.1');
  });
}

init(originalFile);
httpServe();