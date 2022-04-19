// 函数参数定义参数很有必要
function sumTwoNum(a, b) {
    return a + b;
}
var result = sumTwoNum(123, 465);
console.log(result);
// 字面量, 感觉像常量了！
var zimianliang;
// zimianliang = 12;
// 联合类型
var sex;
sex = "male";
sex = "female";
// sex = "hello";
// any ==》相当于使用 js 了！可以赋值给其他任意变量！
var d;
d = 10;
d = 'hello';
d = true;
// unknown ==》相当于 any！但是不可以赋值给其他任意变量！类型安全的 any
var e;
e = 10;
e = 'hello';
e = true;
var s;
s = d;
// 类型断言 as <>
// s = e as string;
s = e;
// 设置函数返回值 void 返回空值 undefined null 而 never 啥也不返回
function fn() {
}
// 对象的限制通常需要限制包含的属性
var obj;
obj = {};
obj = function () { };
var objA;
objA = { name: 'tim' };
objA = { name: 'tim', age: 18 };
// 函数的限制通常是参数的个数，返回值
var fn1;
fn1 = function (a, b) {
    return a + b;
};
// 表示字符串数组
var sameTypeArr;
var sameTypeArr2;
// tuple 元组，固定长度的数组
var h;
h = [1, '2'];
// enum 枚举
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 0] = "female";
})(Gender || (Gender = {}));
;
var objB;
objB = {
    name: 'tim',
    gneder: Gender.male
};
// 同时满足 &
var objC;
var k;
k = 5;
// tsc xxx.ts -w
// tsc 直接编译所有文件夹里面的 ts 文件，需要和配置文件 tsconfig.json 搭配使用
// tsc -w
var test2 = 123;
