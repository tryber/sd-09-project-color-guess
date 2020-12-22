function randomRgb() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

let chosenColor = randomRgb();
const rgbValue = document.getElementById('rgb-color');
rgbValue.innerText = chosenColor.slice(3);
const answer = document.getElementById('answer');
answer.innerText = 'Escolha uma cor';
const score = document.getElementById('get-score');
let result = 0;
score.innerText = result;

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
      circles[index].classList.add('chosen');
    } else {
      circles[index].classList.remove('chosen');
    }
  }
}

function checkAnswer() {
  const circles = document.getElementById('colors');
  circles.addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === chosenColor) {
      answer.innerText = 'Acertou!';
      if (event.target.classList.contains('chosen')) {
        result += 3;
        score.innerText = result;
        event.target.classList.remove('chosen');
      }
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  });
}

function clickResetGame() {
  const button = document.getElementById('reset-game');
  const circles = document.getElementsByClassName('ball');
  button.addEventListener('click', function () {
    for (let index = 0; index < 6; index += 1) {
      circles[index].style.backgroundColor = randomRgb();
    }
    chosenColor = randomRgb();
    rgbValue.innerText = chosenColor.slice(3);
    chosenCircle();
    answer.innerText = 'Escolha uma cor';
  });
}

function clickResetScore() {
  const button = document.getElementById('reset-score');
  button.addEventListener('click', function () {
    result = 0;
    score.innerText = result;
  });
}

window.onload = function () {
  createColors();
  chosenCircle();
  checkAnswer();
  clickResetGame();
  clickResetScore();
};
