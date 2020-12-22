function randomColorNumbers() {
  return Math.round(Math.random() * 255);
}

function createColorToBeGuessed() {
  const rgbNumbers = document.getElementById('rgb-color');
  rgbNumbers.innerText = `(${randomColorNumbers()}, ${randomColorNumbers()}, ${randomColorNumbers()})`;
}

window.onload = function () {
  createColorToBeGuessed();
}
