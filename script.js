const rgbColor = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const colection = document.querySelector('.colection');
const answer = document.querySelector('#answer');
const resetGame = document.querySelector('#reset-game');
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
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = randomRgb();
    colors[index] = balls[index].style.backgroundColor;
  }
}

function reference() {
  rgbColor.innerText = colors[randomNumber(6)];
}

colection.addEventListener('click', (event) => {
  const chosenColor = event.target.style.backgroundColor;
  (chosenColor === rgbColor.innerText) ? answer.innerText = 'Acertou!' : answer.innerText = 'Errou! Tente novamente!';
});

resetGame.addEventListener('click', () => {
  toColor();
  reference();
  answer.innerText = 'Escolha uma cor';
});

window.onload = function () {
  toColor();
  reference();
};
