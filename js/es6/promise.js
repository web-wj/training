function sendMessage(name, onFulffiled, onRejected) {
  console.log(`给 ${name} 女神发送消息`);
  setTimeout(() => {
    if(Math.random() < 0.1) {
      onFulffiled(`表白成功。`)
    } else {
      onRejected(`表白失败。。。。`)
    }
  }, 1000)
}

// 若失败在失败的回调中再发送给另一个人，回调里面套回调。。。。。。。
// sendMessage('王富贵', (success)=> {console.log(success )}, (err)=> {console.log(err)})

// const pro = new Promise((resolve, reject)=>{ 
//   console.log('开始百米赛跑');
//   const duration = Math.floor(Math.random() * 5000);
//   setTimeout(() => {
//     if(Math.random() < 0.8) {
//       resolve(duration);
//     } else {
//       reject('脚扭伤了');
//     }
//   }, duration);
// });
  
// console.log(pro);
// pro.then(
//   (data) => { console.log(`我跑了 ${data/1000} s`)},
//   (reason) => { console.log(`${reason}`)}
// );

function deploy(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, duration);
  });
}
deploy(1000).then(() => console.log('finish'))