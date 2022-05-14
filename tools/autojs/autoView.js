for (var i = 1; i < 9999; i++) {
  var x1 = device.width / 2 + random(0, 10)
  var y1 = (device.height / 6) * 5 + random(0, 10)
  var x2 = device.width / 2 + random(0, 10)
  var y2 = device.height / 6 + random(0, 50)
  var swipe_time = 450 + random(0, 30)
  var sleep_time = 2000 + random(1000, 5000)
  swipe(x1, y1, x2, y2, swipe_time)
  sleep(sleep_time)
}
