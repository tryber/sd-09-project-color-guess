const cor = document.querySelector('#rgb-color');
const ballsContainer = document.querySelector('#ballsContainer');

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
    ballsContainer.appendChild(ball);
  }
}

function randomizeBalls() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = 'rgb' + randomColor();
  }
}

rgbGuess();
createBalls();
randomizeBalls();
