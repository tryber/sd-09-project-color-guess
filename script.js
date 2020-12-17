const balls = document.querySelectorAll('.ball');
const rgbColor = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const ballContainer = document.querySelector('#ball-container');
const resetBt = document.querySelector('#reset-game');
const score = document.querySelector('#score');

window.onload = function () {
  score.innerText = 0;
  if (sessionStorage.score === undefined) {
    score.innerText = 0;
  } else {
    score.innerText = sessionStorage.score;
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
  rgbColor.innerText = balls[ballsIndex].style.backgroundColor;
}
colorValue();

function pickTheColor() {
  ballContainer.addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === rgbColor.innerText) {
      answer.innerText = 'Acertou!';
      if (sessionStorage.score !== undefined) {
        let pontuacao = parseInt(sessionStorage.score, 10);
        pontuacao += 3;
        sessionStorage.score = pontuacao;
        score.innerText = pontuacao;
      } else {
        sessionStorage.score = 3;
        score.innerText = sessionStorage.score;
      }
    } else {
      answer.innerText = 'Errou! Tente novamente!';
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
