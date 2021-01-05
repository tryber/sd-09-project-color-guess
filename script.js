function randomColorNumbers() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

let colorOfTheRound = randomColorNumbers();
const circles = document.getElementsByClassName('ball');
const rgbNumbers = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const totalScore = document.getElementById('score');
let result = 0;
totalScore.innerText = result;

function createColorToBeGuessed() {
  rgbNumbers.innerText = colorOfTheRound.slice(3);
}

function createBackgroundCircle() {
  for (let index = 0; index < 6; index += 1) {
    circles[index].style.backgroundColor = randomColorNumbers();
  }
}

function chosenColor() {
  const chosenIndex = Math.round(Math.random() * 5);
  for (let index = 0; index < circles.length; index += 1) {
    if (index === chosenIndex) {
      circles[index].style.backgroundColor = colorOfTheRound;
      circles[index].classList.add('right-answer');
    } else {
      circles[index].style.backgroundColor = randomColorNumbers();
      circles[index].classList.remove('right-answer');
    }
  }
}

function checkAnswer() {
  const allCircles = document.getElementById('allCircles');
  answer.innerText = 'Escolha uma cor';
  allCircles.addEventListener('click', function (event) {
    if (event.target.classList.contains('right-answer')) {
      answer.innerText = 'Acertou!';
      result += 3;
      totalScore.innerText = result;
      event.target.classList.remove('right-answer');
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  });
}

function resetButton() {
  const button = document.getElementById('reset-game');
  button.addEventListener('click', function () {
    for (let index = 0; index < circles.length; index += 1) {
      circles[index].style.backgroundColor = randomColorNumbers();
    }
    colorOfTheRound = randomColorNumbers();
    chosenColor();
    rgbNumbers.innerText = colorOfTheRound.slice(3);
    answer.innerText = 'Escolha uma cor';
  });
}

window.onload = function () {
  createColorToBeGuessed();
  createBackgroundCircle();
  chosenColor();
  checkAnswer();
  resetButton();
}
