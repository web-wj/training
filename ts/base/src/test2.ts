// function fn(a:any): any{
//   return a;
// }

// 遇到类型不明确的，使用泛型，避免跳过类型检测，T类型的泛型
function fn<T>(a: T): T{
  console.log(a);
  return a;
}

fn(10);

interface Inter{
  length: number;
}
function fn1<T extends Inter>(a: T):number {
  console.log(a.length);
  return a.length;
}

fn1('456');