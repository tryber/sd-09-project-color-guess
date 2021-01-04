const ball = document.querySelectorAll('.ball');
const text = document.querySelector('#answer');
const rgbText = document.querySelector('#rgb-color');
const button = document.querySelector('#reset-game');

function coloringCircles() {
  for (let index = 0; index < ball.length; index += 1) {
    let rNumber = Math.floor(Math.random() * 256);
    let gNumber = Math.floor(Math.random() * 256);
    let bNumber = Math.floor(Math.random() * 256);
    ball[index].style.backgroundColor = `rgb(${rNumber}, ${gNumber}, ${bNumber})`;
  }
}
coloringCircles();

function scoreSum() {
  const score = document.querySelector('#score');
  let points = 0;
  points += 3;
  score.innerText = `Placar: ${points}`;
  localStorage.setItem('score', points);
}

function resetButton() {
  let rNum = Math.floor(Math.random() * 256);
  let gNum = Math.floor(Math.random() * 256);
  let bNum = Math.floor(Math.random() * 256);
  rgbText.innerText = `(${rNum}, ${gNum}, ${bNum})`;
  localStorage.getItem('score');
}
resetButton();
button.addEventListener('click', resetButton);

function initialMessage() {
  text.innerText = 'Escolha uma cor';
}
initialMessage();
button.addEventListener('click', initialMessage);

function messageAboutEachColor(event) {
  if (event.target.style.backgroundColor !== rgbText.innerText) {
    text.innerText = 'Errou! Tente novamente!';
  } else {
    text.innerText = 'Acertou!';
    scoreSum();
  }
}
for (let index = 0; index < ball.length; index += 1) {
  ball[index].addEventListener('click', messageAboutEachColor);
}
