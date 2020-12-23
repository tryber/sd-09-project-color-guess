const rgbColor = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const colors = [];

function randomNumber(multiply) {
  const number = Math.floor(Math.random() * multiply);
  return number;
}

function randomRgb() {
  const R = randomNumber(256);
  const G = randomNumber(256);
  const B = randomNumber(256);

  return `rgb(${R}, ${G}, ${B})`;
}

function toColor() {
  for (ball of balls) {
    ball.style.backgroundColor = randomRgb();
    colors.push(ball.style.backgroundColor);
  }
}

function reference() {
  rgbColor.innerText = colors[randomNumber(6)];
}

window.onload = function () {
  toColor();
  reference();
}
