const path = require('path');

const dateFormat = require(path.join(__dirname, 'src/dateFormat'));
const htmlEscape = require(path.join(__dirname, 'src/htmlEscape'));

module.exports = {
	...dateFormat,
	...htmlEscape
}

