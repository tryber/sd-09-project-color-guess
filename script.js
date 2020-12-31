const cor = document.querySelector('#rgb-color');
const ballsContainer = document.querySelector('#ballsContainer');
const answer = document.querySelector('#answer');
const reset = document.querySelector('#reset-game');
const score = document.querySelector('#score');
let scorePoints = 0;

function randomColor() {
  const color = `(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return color;
}

function rgbGuess() {
  cor.innerText = randomColor();
}

function randomizeBalls() {
  const balls = document.querySelectorAll('.ball');
  const posRight = Math.floor(Math.random() * 6);
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = `rgb${randomColor()}`;
  }
  balls[posRight].style.backgroundColor = `rgb${cor.innerText}`;
}

function compareColor(event) {
  if (event.target.style.backgroundColor === `rgb${cor.innerText}`) {
    answer.innerText = 'Acertou!';
    scorePoints += 3;
    score.innerText = `${scorePoints}`;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function checkColor(event) {
  if (event) {
    if (answer.innerText !== 'Acertou!') {
      compareColor(event);
    }
  }
}

function createBalls() {
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.addEventListener('click', checkColor);
    ballsContainer.appendChild(ball);
  }
}

function resetGame() {
  reset.addEventListener('click', function () {
    rgbGuess();
    const balls = document.querySelectorAll('.ball');
    for (let index = 0; index < 6; index += 1) {
      balls[index].remove();
    }
    createBalls();
    randomizeBalls();
    answer.innerText = 'Escolha uma cor';
  });
}

rgbGuess();
createBalls();
randomizeBalls();
checkColor();
resetGame();
