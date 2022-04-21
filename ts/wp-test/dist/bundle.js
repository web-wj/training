/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ (function() {

eval("\n// 函数参数定义参数很有必要\nfunction sumTwoNum(a, b) {\n    return a + b;\n}\nlet result = sumTwoNum(123, 465);\nconsole.log(result);\n// 字面量, 感觉像常量了！\nlet zimianliang;\n// zimianliang = 12;\n// 联合类型\nlet sex;\nsex = \"male\";\nsex = \"female\";\n// sex = \"hello\";\n// any ==》相当于使用 js 了！可以赋值给其他任意变量！\nlet d;\nd = 10;\nd = 'hello';\nd = true;\n// unknown ==》相当于 any！但是不可以赋值给其他任意变量！类型安全的 any\nlet e;\ne = 10;\ne = 'hello';\ne = true;\nlet s;\ns = d;\n// 类型断言 as <>\n// s = e as string;\ns = e;\n// 设置函数返回值 void 返回空值 undefined null 而 never 啥也不返回\nfunction fn() {\n}\n// 对象的限制通常需要限制包含的属性\nlet obj;\nobj = {};\nobj = function () { };\nlet objA;\nobjA = { name: 'tim' };\nobjA = { name: 'tim', age: 18 };\n// 函数的限制通常是参数的个数，返回值\nlet fn1;\nfn1 = function (a, b) {\n    return a + b;\n};\n// 表示字符串数组\nlet sameTypeArr;\nlet sameTypeArr2;\n// tuple 元组，固定长度的数组\nlet h;\nh = [1, '2'];\n// enum 枚举\nvar Gender;\n(function (Gender) {\n    Gender[Gender[\"male\"] = 1] = \"male\";\n    Gender[Gender[\"female\"] = 0] = \"female\";\n})(Gender || (Gender = {}));\n;\nlet objB;\nobjB = {\n    name: 'tim',\n    gneder: Gender.male\n};\n// 同时满足 &\nlet objC;\nlet k;\nk = 5;\n// tsc xxx.ts -w\n// tsc 直接编译所有文件夹里面的 ts 文件，需要和配置文件 tsconfig.json 搭配使用\n// tsc -w\n\n\n//# sourceURL=webpack://test/./src/test.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/test.ts"]();
/******/
/******/ })()
;
