const cor = document.querySelector('#rgb-color');
const ballsContainer = document.querySelector('#ballsContainer');
const answer = document.querySelector('#answer');

function randomColor() {
  const color = `(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return color;
}

function rgbGuess() {
  cor.innerText = randomColor();
}

function createBalls() {
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.addEventListener('click', checkColor);
    ballsContainer.appendChild(ball);
  }
}

function randomizeBalls() {
  const balls = document.querySelectorAll('.ball');
  const posRight = Math.floor(Math.random() * 6);
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = `rgb${randomColor()}`;
  }
  balls[posRight].style.backgroundColor = `rgb${cor.innerText}`;
}

function checkColor(event) {
  if (event) {
    if (event.target.style.backgroundColor === `rgb${cor.innerText}`) {
      answer.innerText = 'Acertou!'
    } else {
      answer.innerText = 'Errou! Tente novamente!'
    }
  }
}

rgbGuess();
createBalls();
randomizeBalls();
checkColor();
