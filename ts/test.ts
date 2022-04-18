// 函数参数定义参数很有必要
function sumTwoNum(a: number, b: number): number{
  return a + b;
}
let result = sumTwoNum(123, 465);
console.log(result);

// 字面量, 感觉像常量了！
let zimianliang: 10;
zimianliang = 12;
// 联合类型
let sex: "male" | "female";
sex = "male";
sex = "female";
sex = "hello";

// any ==》相当于使用 js 了！
let d: any;
d = 10;
d = 'hello';
d = true;