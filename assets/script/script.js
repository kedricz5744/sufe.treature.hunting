// 背景跟随鼠标移动，产生视差效果
document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / -200; //X轴偏移

    const y = (window.innerHeight - e.pageY * speed) / -200; //Y轴偏移

    layer.style.transform = `translateX(${x}mm) translateY(${y}mm)`;
  });
}
// 获取当前系统时间，并输出到 div1里
function time() {
  var date = new Date();
  var hour = date.getHours();
  hour = hour > 9 ? hour : "0" + hour;
  var minutes = date.getMinutes();
  minutes = minutes > 9 ? minutes : "0" + minutes;
  var str = hour + ":" + minutes;
  var div1 = document.getElementById("div1");
  div1.innerHTML = str;
}
setInterval(time, 0);
// 判断音乐是否播放
window.onload = function () {
  setInterval("toggleSound()", 100);
};

function toggleSound() {
  var music = document.getElementById("vd"); //获取ID

  if (music.paused) {
    //判读是否播放
    music.paused = false;
    music.play(); //没有就播放
  }
}
