const fs = require("fs");
const path = require("path");

/**
 * 将文件中的成绩格式转换一下显示的形式
 */
fs.readFile(path.join(__dirname, "/test/gradesOld.md"), "utf8", (err, data) => {
	if (err) {
		return console.log("文件读取失败", err.message);
	}
	const newGrades = data.replace(/=/gi, ":").split(" ").join("\r\n");
	fs.writeFile(path.join(__dirname, "/test/gradesNew.md"), newGrades, (err) => {
		if (err) {
			return console.log("写入文件失败，失败信息：", err.message);
		}
		console.log("写入文件成功");
	});
});

