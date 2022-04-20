const path = require('path');

module.exports = {
  entry: "./src/test.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
        arrowFunction: false // 关闭webpack的箭头函数，可选
    }
  },
  mode: "development",
  module: {
    rules: [
        {
            test: /\.ts$/,
            use: {
                loader: "ts-loader"
            },
            exclude: /node_modules/
        }
    ]
  },
}
