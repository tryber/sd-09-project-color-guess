const rgbColor = document.querySelector('#rgb-color');
const scoreText = document.querySelector('#score');
const colorsContainer = document.querySelector('#colors-container');
const answer = document.querySelector('#answer');
let score = 0;

function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgbArray = [red, green, blue];
  const color = `rgb(${rgbArray})`;
  return color;
}

function checkAnswer(event) {
  const ballColor = event.style.backgroundColor;
  if (ballColor === rgbColor.innerText) {
    score += 3;
    scoreText.innerText = `Placar: ${score}`;
    answer.innerText = 'Acertou!';
  } else {
    score -= 1;
    scoreText.innerText = `Placar: ${score}`;
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function generateColorBalls() {
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.style.backgroundColor = randomColor();
    ball.addEventListener('click', function () {
      checkAnswer(ball);
      ball.style.border = 'none';
      ball.style.width = '0';
    });
    colorsContainer.appendChild(ball);
  }
}

function generateRGBColor() {
  const balls = document.querySelectorAll('.ball');
  const randomBall = balls[Math.floor(Math.random() * 6)].style.backgroundColor;
  rgbColor.innerText = randomBall;
}

function removeColorBalls() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    colorsContainer.removeChild(balls[index]);
  }
}

function resetGame() {
  const body = document.querySelector('body');
  body.style.backgroundImage = `linear-gradient(to right, ${randomColor()}, ${randomColor()})`;
  removeColorBalls();
  generateColorBalls();
  generateRGBColor();
  scoreText.innerText = `Placar: ${score}`;
  answer.innerText = 'Escolha uma cor';
}

window.onload = function () {
  const resetButton = document.querySelector('#reset-game');
  resetButton.addEventListener('click', resetGame);
  resetGame();
};
