const escape = require('escape-formatdate');
const newDate = escape.formatDate(new Date());
console.log(newDate);

const htmlStr = '<div id="wrapper"></div>';
const escapeHtml = escape.escapeHtml(htmlStr);
console.log(escapeHtml);
const unescapeHtml = escape.unescapeHtml(escapeHtml);
console.log(unescapeHtml);