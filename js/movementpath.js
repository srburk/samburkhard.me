// movementpath.js

var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');
resize();

var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
// document.addEventListener('mouseenter', setPosition);

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function changeColor() {
  return '#424242'
}


function draw(e, color) {

  // Draw the dot
  ctx.beginPath();
  ctx.fillStyle = changeColor();
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI*2, true);
  ctx.fill();
}
