function formatDate(time){
	const date = new Date(time);

	const year = padZero(date.getFullYear());
	const	month = padZero(date.getMonth() + 1);//月份是从0开始的
	const	day = padZero(date.getDate());
	const	hour = padZero(date.getHours());
	const	min = padZero(date.getMinutes());
  const sec = padZero(date.getSeconds());	
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
};
function padZero(n){
  return n > 9 ? n : '0' + n;
}

module.exports = {
  formatDate
}