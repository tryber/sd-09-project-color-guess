const balls = document.querySelectorAll('.ball');
const rgbColor = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const ballContainer = document.querySelector('#ball-container');
const resetBt = document.querySelector('#reset-game');
const score = document.querySelector('#score');
let scorePoints = 0;

// if (sessionStorage.score === undefined) {
//   score.innerHTML = scorePoints;
// } else {
//   scorePoints = parseInt(sessionStorage.score, 10);
//   score.innerHTML = scorePoints;
// }

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
      scorePoints += 3;
      score.innerHTML = scorePoints;
      // sessionStorage.score = scorePoints;
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}
pickTheColor();

function resetGame() {
  resetBt.addEventListener('click', function () {
    // window.location.reload();
    coloredBalls();
    colorValue();
    answer.innerHTML = 'Escolha uma cor';
  });
}
resetGame();
