let score = 0;

function generateRandomColor() {
  const red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const rgbString = red + ' , ' + green + ' , ' + blue;
  const color = 'rgb(' + rgbString + ')';
  return color;
}

function generateColorBalls() {
  const colorsContainer = document.querySelector('#colors-container');
  for (let index = 0; index < 6; index += 1) {
    const color = document.createElement('div');
    color.className = 'ball';
    color.style.backgroundColor = generateRandomColor();
    colorsContainer.appendChild(color);
  }
}

function removeColorBalls() {
  const ballString = document.querySelectorAll('.ball');
  for (let index = 0; index < ballString.length; index += 1) {
    const colorsContainer = document.querySelector('#colors-container');
    colorsContainer.removeChild(ballString[index]);
  }
}

function resetGame() {
  const rgbColorText = document.querySelector('#rgb-color');
  const scoreText = document.querySelector('#score');
  const answerText = document.querySelector('#answer');
  removeColorBalls()
  generateColorBalls();
  rgbColorText.innerText = generateRandomColor();
  scoreText.innerText = 'Placar: ' + score;
  answerText.innerText = 'Escolha uma cor';
}

window.onload = function () {
  resetGame();

  const resetButton = document.querySelector('#reset-game');
  resetButton.addEventListener('click', resetGame);
};
