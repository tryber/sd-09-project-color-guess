function generateRandonNumber() {
  const number = Math.floor(Math.random() * 256) - 1;
  return number;
}

function gerenateRandonColor() {
  const colorArray = [];
  for (let index = 0; index < 3; index += 1) {
    if (index === 0) colorArray[index] = generateRandonNumber();
    else colorArray[index] = ` ${generateRandonNumber()}`;
  }
  const color = `rgb(${colorArray})`;
  return color;
}

function addTextColor() {
  const rgbColor = document.querySelector('#rgb-color');
  const ballColors = document.querySelectorAll('.ball');
  const index = Math.floor(Math.random() * ballColors.length);
  rgbColor.innerText = ballColors[index].style.backgroundColor.replace(/rgb/i, '');
}

function createBallWithColor() {
  const colorSection = document.querySelector('#color-section');
  const ballColor = document.createElement('div');
  ballColor.classList.add('ball');
  ballColor.style.backgroundColor = gerenateRandonColor();
  colorSection.appendChild(ballColor);
}

function createBallsSection() {
  for (let index = 0; index < 6; index += 1) {
    createBallWithColor();
  }
}

function increaseScore() {
  const answer = document.querySelector('#answer');
  const score = document.querySelector('#score');
  answer.innerText = 'Acertou!';
  score.innerText = parseInt(score.innerText, 10) + 3;
}

function decreaseScore() {
  const answer = document.querySelector('#answer');
  const score = document.querySelector('#score');
  const scoreValue = parseInt(score.innerText, 10);
  answer.innerText = 'Errou! Tente novamente!';
  if (scoreValue > 0) score.innerText = scoreValue - 1;
}

function colorSelection(event) {
  const rgbColor = document.querySelector('#rgb-color').innerText;
  const colorSelected = event.target.style.backgroundColor.replace(/rgb/i, '');
  if (rgbColor === colorSelected) increaseScore();
  else decreaseScore();
}

function resetGame() {
  const ballColors = document.querySelectorAll('.ball');
  const answer = document.querySelector('#answer');
  for (let index = 0; index < ballColors.length; index += 1) {
    ballColors[index].style.backgroundColor = gerenateRandonColor();
  }
  answer.innerText = 'Escolha uma cor';
  addTextColor();
}

function listners() {
  const colorSection = document.querySelector('#color-section');
  colorSection.addEventListener('click', colorSelection);
  const buttonReset = document.querySelector('#reset-game');
  buttonReset.addEventListener('click', resetGame);
}

window.onload = function () {
  createBallsSection();
  addTextColor();
  listners();
};
