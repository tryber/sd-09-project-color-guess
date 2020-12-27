const rgbColor = document.querySelector('#rgb-color');
const scoreText = document.querySelector('#score');
const colorsContainer = document.querySelector('#colors-container');
const answer = document.querySelector('#answer');
let score = 0;

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgbArray = [red, green, blue];
  const color = `rgb(${rgbArray})`;
  return color;
}

function generateColorBalls() {
  for (let index = 0; index < 6; index += 1) {
    const color = document.createElement('div');
    color.className = 'ball';
    color.style.backgroundColor = generateRandomColor();
    colorsContainer.appendChild(color);
  }
}

function generateRGBColor() {
  const balls = document.querySelectorAll('.ball');
  const randomBall = balls[Math.floor(Math.random() * 6)].style.backgroundColor
  rgbColor.innerText = randomBall;
}

function removeColorBalls() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    colorsContainer.removeChild(balls[index]);
  }
}

function checkAnswer() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', function () {
      const ballColor = balls[index].style.backgroundColor;
      if (ballColor === rgbColor.innerText) {
        score += 3;
        scoreText.innerText = `Placar: ${score}`
        answer.innerText = 'Acertou!';
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}

function resetGame() {
  removeColorBalls();
  generateColorBalls();
  checkAnswer()
  generateRGBColor();
  scoreText.innerText = `Placar: ${score}`;
  answer.innerText = 'Escolha uma cor';
}

window.onload = function () {
  resetGame();

  const resetButton = document.querySelector('#reset-game');
  resetButton.addEventListener('click', resetGame);
};
