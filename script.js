const answer = document.querySelector('#answer');
const balls = document.querySelectorAll('.ball');
const resetGame = document.querySelector('#reset-game');
const rgbColor = document.querySelector('#rgb-color');
const score = document.querySelector('#score');
// const answerOptions = document.querySelector('#answer-options');

function randomRGB() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return (`rgb(${red}, ${green}, ${blue})`);
}

function setCorrectAnswer() {
  const correctAnswer = balls[Math.floor(Math.random() * 6)].style.backgroundColor.slice(3);
  rgbColor.innerText = correctAnswer;
}

function setCircleColors() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = randomRGB();
  }
}

function colorGuessing(event) {
  const playerAnswer = event.target.style.backgroundColor.slice(3);
  let answerText = 'Errou! Tente novamente!';
  if (playerAnswer === rgbColor.innerText) {
    answerText = 'Acertou!';
    score.innerText = parseInt(score.innerText, 10) + 3;
  }
  answer.innerText = answerText;
}

function restartGame() {
  answer.innerText = 'Escolha uma cor';
  setCircleColors();
  setCorrectAnswer();
}

function addEventListeners() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', colorGuessing);
  }
  resetGame.addEventListener('click', restartGame);
}

setCircleColors();
setCorrectAnswer();
addEventListeners();
