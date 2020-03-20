// cursorChange.js

var cursorElement = document.getElementById('cursor'),
  x = -50,
  y = -50;

document.addEventListener('mousemove', moveCursorElement);

function moveCursorElement(e) {

  cursorElement.style.left = e.clientX + x + 'px';
  cursorElement.style.top = e.clientY + y + 'px';
}
