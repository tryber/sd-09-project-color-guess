function randomRgb() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

const chosenColor = randomRgb();
const rgbValue = document.getElementById('rgb-color');
rgbValue.innerText = chosenColor.slice(3);
const answer = document.getElementById('answer');
answer.innerText = 'Escolha uma cor';

function createColors() {
  const section = document.getElementById('colors');
  for (let index = 0; index < 6; index += 1) {
    const circles = document.createElement('div');
    circles.classList.add('ball');
    circles.style.backgroundColor = randomRgb();
    section.appendChild(circles);
  }
}

function chosenCircle() {
  const circles = document.getElementsByClassName('ball');
  const chosen = Math.round(Math.random() * 5);
  for (let index = 0; index < circles.length; index += 1) {
    if (index === chosen) {
      circles[index].style.backgroundColor = chosenColor;
    }
  }
}

function checkAnswer() {
  const circles = document.getElementById('colors');
  const answer = document.getElementById('answer');
  circles.addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === chosenColor) {
      answer.innerText = 'Acertou!'
    } else {
      answer.innerText = 'Errou! Tente novamente!'
    }
  });
}

window.onload = function () {
  createColors();
  chosenCircle();
  checkAnswer();
};
