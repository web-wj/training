module.exports = class FileInfo {
  constroction() {

  };
  apply(compiler) {
    // console.log('在初始化阶段执行，文件改变不会再次触法！');
    compiler.hooks.emit.tap('fileInfo-plugin', (compilation) => {
      const list = [];
      for(const key in compilation.assets) {
        const size = compilation.assets[key].size();
        const str = `打包后的文件：【${key}】
文件大小：${size/1000}KB`;
        list.push(str);
      };
      const fileInfoStr = list.join('\n\n');
      compilation.assets['res.txt'] = {
        source() {
          return fileInfoStr;
        },
      }
    })
  }
}