// 函数参数定义参数很有必要
function sumTwoNum(a: number, b: number): number{
  return a + b;
}
let result = sumTwoNum(123, 465);
console.log(result);

// 字面量, 感觉像常量了！
let zimianliang: 10;
// zimianliang = 12;
// 联合类型
let sex: "male" | "female";
sex = "male";
sex = "female";
// sex = "hello";

// any ==》相当于使用 js 了！可以赋值给其他任意变量！
let d: any;
d = 10;
d = 'hello';
d = true;

// unknown ==》相当于 any！但是不可以赋值给其他任意变量！类型安全的 any
let e: unknown;
e = 10;
e = 'hello';
e = true;

let s:string;

s = d;
// 类型断言 as <>
// s = e as string;
s = <string>e;


// 设置函数返回值 void 返回空值 undefined null 而 never 啥也不返回
function fn() {

}

// 对象的限制通常需要限制包含的属性
let obj: object;
obj = {};
obj = function() {};

let objA: {name: string, [propName: string]: any};

objA = {name: 'tim'};
objA = {name: 'tim', age: 18};

// 函数的限制通常是参数的个数，返回值
let fn1: (n1: number, n2: number) => number;
fn1 = function (a, b): number{
  return a +  b;
}

// 表示字符串数组
let sameTypeArr: string[];
let sameTypeArr2: Array<string>;

// tuple 元组，固定长度的数组
let h: [number, string];
h = [1, '2'];

// enum 枚举
enum Gender {
  male = 1,
  female = 0
};

let objB: {name: string, gneder: Gender};
objB = {
  name: 'tim',
  gneder: Gender.male
};

// 同时满足 &
let objC: {name: string} & {age: number};

// let k: 1 | 2 | 3 | 4 | 5; 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
k = 5;

// tsc xxx.ts -w
// tsc 直接编译所有文件夹里面的 ts 文件，需要和配置文件 tsconfig.json 搭配使用
// tsc -w
