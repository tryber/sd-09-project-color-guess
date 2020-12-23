const rgbColor = document.querySelector('#rgb-color');
const balls = document.querySelectorAll('.ball');
const colection = document.querySelector('.colection');
const answer = document.querySelector('#answer');
const resetGame = document.querySelector('#reset-game');
const score = document.querySelector('#score');
const colors = [];
let repeatedClick = true;
let scoreboard = 0;

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
    balls[index].addEventListener('click', changeScoreboard);
  }
}

function reference() {
  rgbColor.innerText = colors[randomNumber(6)];
}

colection.addEventListener('click', (event) => {
  const chosenColor = event.target.style.backgroundColor;

  if (chosenColor === rgbColor.innerText) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
});

function changeScoreboard(event) {
  let selectedColor = event.target.style.backgroundColor;
  if (selectedColor === rgbColor.innerText && repeatedClick === true) {
    scoreboard += 3;
    repeatedClick = false;
  }
  score.innerText = scoreboard;
}

resetGame.addEventListener('click', () => {
  toColor();
  reference();
  answer.innerText = 'Escolha uma cor';
  repeatedClick = true;
});

window.onload = function () {
  toColor();
  reference();
};
