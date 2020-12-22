function randomColor() {
  let letters = '0123456789ABCDEF';
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
  for (index = 1; index <= number; index += 1) {
    createBall(`ball-${index}`);
  }
}

function randomColorBall() {
  const ball = document.querySelectorAll('.ball');
  for (index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = randomColor();
  }
}

//Referencia https://convertingcolors.com/blog/article/convert_hex_to_rgb_with_javascript.html
let aRgbHex = randomColor().match(/.{1,2}/g);
let aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16)
];

function colorText() {
  const color = document.querySelector('#rgb-color');
  const ball = document.querySelectorAll('.ball');
  color.innerHTML = ball[Math.floor(Math.random() * 6)].style.backgroundColor.slice(3);
}

function colorCorrect(origin) {
  const correct = document.querySelector('#rgb-color');
  const mensagem = document.querySelector('#answer');
  let correctColor = `rgb${correct.innerHTML}`;
  let originColor = origin.target.style.backgroundColor;
  if (correctColor === originColor) {
    mensagem.innerHTML = 'Acertou'; 
  } else {
    mensagem.innerHTML = 'Errou! Tente novamente!';
  }
}

function loopBall() {
  const ballTotal = document.querySelectorAll('.ball');
  for (index = 0; index < ballTotal.length; index += 1) {
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
  for (index = 0; index < removeBall.length; index += 1) {
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
