const ball = document.querySelectorAll('.ball');
const text = document.querySelector('#answer');
const rgbText = document.querySelector('#rgb-color');
const button = document.querySelector('#reset-game');
let points = 0;

function coloringCircles() {
  for (let index = 0; index < ball.length; index += 1) {
    const rNumber = Math.floor(Math.random() * 256);
    const gNumber = Math.floor(Math.random() * 256);
    const bNumber = Math.floor(Math.random() * 256);
    ball[index].style.backgroundColor = `rgb(${rNumber}, ${gNumber}, ${bNumber})`;
  }
  const newIndex = Math.floor(Math.random() * 6);
  ball[newIndex].style.backgroundColor = `rgb${rgbText.innerText}`;
}
coloringCircles();

function resetButton() {
    const rNum = Math.floor(Math.random() * 256);
    const gNum = Math.floor(Math.random() * 256);
    const bNum = Math.floor(Math.random() * 256);
    rgbText.innerText = `(${rNum}, ${gNum}, ${bNum})`;
    coloringCircles();
  }
  resetButton();
  button.addEventListener('click', resetButton);

function scoreSum() {
  const score = document.querySelector('#score');
  points += 3;
  score.innerText = `Placar: ${points}`;
}

function initialMessage() {
  text.innerText = 'Escolha uma cor';
}
initialMessage();
button.addEventListener('click', initialMessage);

function messageAboutEachColor(event) {
  if (event.target.style.backgroundColor !== `rgb${rgbText.innerText}`) {
    text.innerText = 'Errou! Tente novamente!';
  } else {
    text.innerText = 'Acertou!';
    scoreSum();
  }
}
for (let index = 0; index < ball.length; index += 1) {
  ball[index].addEventListener('click', messageAboutEachColor);
}
