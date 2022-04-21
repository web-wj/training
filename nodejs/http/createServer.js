const http =  require('http');

const server = http.createServer();

// http 实例上绑定事件
server.on('request', (req, res) => {
  const url = req.url;
  const method = req.method;
  const str = `Your require url is ${url}, and method is ${method},中文乱码`;
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end(str);
});

server.listen('80', () => {
  console.log('server running at http://127.0.0.1');
})