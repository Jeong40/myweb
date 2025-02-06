//钟表小子（bushi
function updateClock() {
  const now = new Date();

  // 获取当前时间
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // 计算指针角度
  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 每小时30度，每分钟0.5度
  const minuteDeg = minutes * 6 + seconds * 0.1; // 每分钟6度，每秒钟0.1度
  const secondDeg = seconds * 6; // 每秒钟6度

  // 更新指针角度
  document.getElementById('hour-hand').style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById('minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById('second-hand').style.transform = `rotate(${secondDeg}deg)`;
}

//更新速度1s
setInterval(updateClock, 1000);


