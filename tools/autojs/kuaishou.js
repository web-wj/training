/**
 * Project: 快手福利任务
 * Author: Forece
 * Description: 自动化执行快手每日福利任务
 * Auto.js 版本: 4.1.1 Alpha2
 */
 
function runTask() {
  text('福利').findOne().click()
  sleep(35000)
  back()
  sleep(1000)
  if (text('放弃奖励').exists()) {
    text('放弃奖励').click()
    sleep(1000)
  }
  if (text('再看一个').exists()) {
    text('再看一个').click()
    sleep(35000)
    back()
    sleep(1000)
    if (text('放弃奖励').exists()) {
      text('放弃奖励').click()
      sleep(1000)
    }
  }
}
 
for (var i = 0; i < 9; i++) {
  runTask()
}
 