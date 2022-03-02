const http = require('http');
const WebSocket = require('websocket').server;

const server = http.createServer().listen(8080,() => {
  console.log('http://127.0.0.1:8080');
});

const wsServer = new WebSocket({
  httpServer: server,
  autoAcceptConnections: false
});

const conArr = [];
wsServer.on('request', (request) => {
  const connection = request.accept();
  conArr.push(connection);
  connection.on('message', (msg) => {
    conArr.forEach((item) => item.send(msg.utf8Data));
  })
});  