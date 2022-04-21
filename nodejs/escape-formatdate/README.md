## 安装
```
npm install escape-formatdate
```

## 导入
```js
const escape = require('escape-formatdate');
```

## 格式化时间的使用
```js
const newDate = escape.formatDate(new Date());
console.log(newDate); // 2022-02-04 09:48:05
```

## 转义HTML的使用
```js
const htmlStr = '<div id="wrapper"></div>';
const escapeHtml = escape.escapeHtml(htmlStr);
console.log(escapeHtml); // &lt;div id=&quot;wrapper&quot;&gt;&lt;/div&gt;
const unescapeHtml = escape.unescapeHtml(escapeHtml);
console.log(unescapeHtml); // <div id="wrapper"></div>
```

## 开源协议
```
ISC
```