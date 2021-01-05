function randomRGB() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

let rgbDaVez = randomRGB();
const rgbValue = document.getElementById('rgb-color');
rgbValue.innerText = rgbDaVez.slice(3);
const answer = document.getElementById('answer');
answer.innerText = 'Escolha uma cor';
const score = document.getElementById('get-score');
let result = 0;
score.innerText = result;

function createCircles() {
  const section = document.getElementById('circles');
  for (let index = 0; index < 6; index += 1) {
    const circle = document.createElement('div');
    circle.classList.add('ball');
    circle.style.backgroundColor = randomRGB();
    section.appendChild(circle);
  }
}

function chosenCircle() {
  const circles = document.getElementsByClassName('ball');
  const sorteio = Math.round(Math.random() * 5);
  for (let index = 0; index < circles.length; index += 1) {
    if (index === sorteio) {
      circles[index].style.backgroundColor = rgbDaVez;
      circles[index].classList.add('hit');
    } else {
      circles[index].classList.remove('hit');
    }
  }
}

function checkAnswer() {
  const circles = document.getElementById('circles');
  circles.addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === rgbDaVez) {
      answer.innerText = 'Acertou!';
      if (event.target.classList.contains('hit')) {
        result += 3;
        score.innerText = result;
        event.target.classList.remove('hit');
      }
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  });
}

function clickResetButton() {
  const button = document.getElementById('reset-game');
  const circles = document.getElementsByClassName('ball');
  button.addEventListener('click', function () {
    for (let index = 0; index < circles.length; index += 1) {
      circles[index].style.backgroundColor = randomRGB();
    }
    rgbDaVez = randomRGB();
    chosenCircle();
    rgbValue.innerText = rgbDaVez.slice(3);
    answer.innerText = 'Escolha uma cor';
  });
}

window.onload = function () {
  createCircles();
  chosenCircle();
  checkAnswer();
  clickResetButton();
};
