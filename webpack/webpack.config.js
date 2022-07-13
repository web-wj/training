const { VueLoaderPlugin } = require('vue-loader');
// const fileInfo = require('./plugins/fileInfo');
const path = require('path');

// module.exports = {
//   mode: "development",
//   entry: "./src/test-loader.js",
//   module: {
//       rules: [
//         // 从上往下匹配，但是从下往上运行
//           {
//               test: /test-loader\.js$/, //正则表达式，匹配模块的路径
//               use: ["./loaders/test-loader.js?changeVal=未知数", "./loaders/loader1.js"]
//                 // options: {
//                 //     changeVal: "未知数"
//                 // }
//                //匹配到了之后，使用哪些加载器
//           }, //规则1
//           {
//               test: /test-loader\.js$/, //正则表达式，匹配模块的路径
//               use: ["./loaders/loader1.js", "./loaders/loader2.js"] //匹配到了之后，使用哪些加载器
//           } //规则2
//       ], //模块的匹配规则
//   }
// }

// 处理样式
// module.exports = {
//     module: {
//         rules: [{
//             test: /.css$/,
//             use: "./loaders/style-loader"
//         }]
//     }
// }

// 处理图片
// module.exports = {
//     mode: "development",
//     devtool: "source-map",
//     module: {
//         rules: [
//             {
//                 test: /\.(png)|(jpg)|(gif)$/,
//                 use: [{
//                     loader: "./loaders/img-loader.js",
//                     options: {
//                         limit: 3000, //3000字节以上使用图片，3000字节以内使用base64
//                         filename: "img-[contenthash:5].[ext]"
//                     }
//                 }]
//             }
//         ]
//     }
// }

// plugin 练习
// module.exports = {
//     mode: "development",
//     devtool: "source-map",
//     // watch: true,
//     output: {
//         library: 'abc',
//     },
//     plugins: [
//         new fileInfo(),
//     ],
//     stats: {
//         colors: true,
//         modules: false,
//     }
// }

// vue-loader 的使用
// module.exports = {
//     entry: path.resolve(__dirname, 'vue-loader/sfc.vue'),
//     module: {
//         rules: [
//             {
//                 test: /\.vue$/,
//                 use: ['vue-loader']
//             }
//         ]
//     },
//     plugins: [
//         new VueLoaderPlugin(),
//     ]
// }

module.exports = {
    entry: './src/test-b.js',
    // module: {
    //     rules: [
    //         {
    //             test: /\.vue$/,
    //             use: ['vue-loader']
    //         }
    //     ]
    // },
    // plugins: [
    //     new VueLoaderPlugin(),
    // ]
}
