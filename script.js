const balls = document.querySelectorAll('.ball');
const rgbColor = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const ballContainer = document.querySelector('#ball-container');
const resetBt = document.querySelector('#reset-game');
const score = document.querySelector('#score');
let pontuacao = 0;

window.onload = function () {
  if (sessionStorage.score === undefined) {
    score.innerHTML = 0;
  } else {
    pontuacao = parseInt(sessionStorage.score, 10);
    score.innerHTML = pontuacao;
  }
};

function randomColor() {
  const colorR = Math.ceil(Math.random() * 256);
  const colorG = Math.ceil(Math.random() * 256);
  const colorB = Math.ceil(Math.random() * 256);
  return `rgb(${colorR}, ${colorG}, ${colorB})`;
}

function coloredBalls() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = randomColor();
  }
}
coloredBalls();

function colorValue() {
  const ballsIndex = Math.floor(Math.random() * balls.length);
  rgbColor.innerHTML = balls[ballsIndex].style.backgroundColor;
}
colorValue();

function pickTheColor() {
  ballContainer.addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === rgbColor.innerHTML) {
      answer.innerHTML = 'Acertou!';
      pontuacao += 3;
      sessionStorage.score = pontuacao;
      score.innerHTML = pontuacao;
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}
pickTheColor();

function resetGame() {
  resetBt.addEventListener('click', function () {
    window.location.reload();
  });
}
resetGame();
