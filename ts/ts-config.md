```json
{
  "include": [
    "ts/*.ts"
  ],
  "exclude": [],
  "extends": "./base.json",
  "files": [],
  "compilerOptions": {
    // 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'es2022', 'esnext'
    "target": "ES3",
    "module": "es2015",
    // 指定项目中使用的库,一般情况下不需要改
    "lib": [],
    // 解析后的目录
    "outDir": "./dist",
    // 合并到同一个文件，一般使用打包工具配置
    "outFile": "./dist/test.js",
    // 是否编译 js 文件
    "allowJs": false,
    // 检查 js 文件
    "checkJs": false,
    // 是否移除注释
    "removeComments": false,
    // 所有的严格检查都开启
    "strict": true,
    // 不生成编译后的文件，没卵用
    "noEmit": false,
    // 当有错误时不生成编译后文件,还挺有用的。。。
    "noEmitOnError": false,
    // 不允许隐式的 anys
    "noImplicitAny": false,
    // 不允许不明确类型的 this
    "noImplicitThis": true,
    // 严格检查空值
    "strictNullChecks": false
  }
}
```
