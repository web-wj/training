const fs = require('fs');
const handlebars = require('handlebars');

module.exports = async () => {
  // 获取路由列表
  const list = fs.readdirSync('./src/views')
    .filter(r => r !== 'Home.vue')
    .map(route => ({
      name: route.replace('.vue', '').toLowerCase(),
      file: route,
    }));

  // 生成路由文件
  compile({list}, './src/router/index.js', './src/template/router.js.hbs');

  // 生成主文件
  compile({list}, './src/App.vue', './src/template/App.vue.hbs');

  /**
   * 模板编译
   * @param {*} meta 数据定义
   * @param {*} filePath 目标文件
   * @param {*} templatePath 模板文件
   */
  function compile(meta, filePath, templatePath) {
    if (fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString();
      // 柯里化，工厂模式
      const result = handlebars.compile(content)(meta);
      fs.writeFileSync(filePath, result);
      console.log(`😀${filePath} 创建成功！`);
    }
  }
}