// 转义HTML
function escapeHtml(htmlStr){
	return htmlStr.replace(/<|>|"|&/g, (match)=> {
		switch(match) {
			case '<': return '&lt;'
			case '>': return '&gt;'
			case '"': return '&quot;'
			case '&': return '&amp;'
		}
	})
}
// 还原转义的HTML
function unescapeHtml(htmlStr){
	return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g, (match)=> {
		switch(match) {
			case '&lt;': return '<'
			case '&gt;': return '>'
			case '&quot;': return '"'
			case '&amp;': return '&'
		}
	})
}
module.exports = {
  escapeHtml,
  unescapeHtml
}