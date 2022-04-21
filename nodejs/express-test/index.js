const express = require('express');
const parser = require('body-parser');

const app = express();

// 这个定义的一个普通的中间件, 局部使用
const mv1 = (req, res, next) => {
  console.log('这是一个普通的中间件！');
  next();
};
// 全局的中间件
app.use((req, res, next) => {
  console.log('这个第一个中间件!');
  next();
});

app.use(express.json());
app.use(parser.urlencoded({ extended: false }));

app.get('/', mv1, (req, res) => {
  res.send('HOME PAGE!');
});

app.post('/user', (req, res) => {
  // 使用 req.body 来获取请求体数据
  console.log(req.body);
  res.send('USER PAGE!');
});

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
});
