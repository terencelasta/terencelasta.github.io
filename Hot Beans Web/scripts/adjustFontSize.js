let currentSize = 16;

function changeFontSize(x) {
  currentSize += x;
  document.getElementById('textContent').style.fontSize = currentSize + 'px';
}

function resetFontSize() {
  currentSize = 16;
  document.getElementById('textContent').style.fontSize = currentSize + 'px';
}
