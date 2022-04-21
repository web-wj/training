const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/test.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
        arrowFunction: false // 关闭webpack的箭头函数，可选
    }
  },
  mode: "production",
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
}
