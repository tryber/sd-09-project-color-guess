function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createBall(idName) {
  const father = document.querySelector('.ball-section');
  const ballCreate = document.createElement('div');
  ballCreate.id = idName;
  ballCreate.className = 'ball';
  father.appendChild(ballCreate);
  idName = document.querySelector(`#${idName}`);
}

function numberBall(number) {
  for (let index = 1; index <= number; index += 1) {
    createBall(`ball-${index}`);
  }
}

function randomColorBall() {
  const ball = document.querySelectorAll('.ball');
  for (let index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = randomColor();
  }
}

function colorText() {
  const color = document.querySelector('#rgb-color');
  const ball = document.querySelectorAll('.ball');
  color.innerHTML = ball[Math.floor(Math.random() * 6)].style.backgroundColor.slice(3);
}

function scoreText() {
  const score = 0;
  localStorage.setItem('score', JSON.stringify(score));
  const scoreTotal = document.querySelector('#score');
  scoreTotal.innerText = `Placar: ${score}`;
}

function colorCorrect(origin) {
  const correct = document.querySelector('#rgb-color');
  const mensagem = document.querySelector('#answer');
  const scoreTotal = document.querySelector('#score');
  let score = JSON.parse(localStorage.getItem('score'));
  const correctColor = `rgb${correct.innerHTML}`;
  const originColor = origin.target.style.backgroundColor;
  if (correctColor === originColor) {
    mensagem.innerHTML = 'Acertou!';
    score += 3;
    scoreTotal.innerText = `Placar: ${score}`;
    localStorage.setItem('score', JSON.stringify(score));
  } else {
    mensagem.innerHTML = 'Errou! Tente novamente!';
  }
}

function loopBall() {
  const ballTotal = document.querySelectorAll('.ball');
  for (let index = 0; index < ballTotal.length; index += 1) {
    ballTotal[index].addEventListener('click', colorCorrect);
  }
}

function createButton(idName, string) {
  const father = document.querySelector('.button-section');
  const button = document.createElement('button');
  button.id = idName;
  button.innerText = string;
  father.appendChild(button);
}

function resetGame() {
  const removeBall = document.querySelectorAll('.ball');
  const mensagem = document.querySelector('#answer');
  for (let index = 0; index < removeBall.length; index += 1) {
    removeBall[index].remove();
  }
  mensagem.innerText = 'Escolha uma cor';
  numberBall(6);
  randomColorBall();
  colorText();
  loopBall();
}

createButton('reset-game', 'Reset Game');
const buttonReset = document.querySelector('#reset-game');
buttonReset.addEventListener('click', resetGame);

numberBall(6);
randomColorBall();
colorText();
loopBall();
scoreText();
