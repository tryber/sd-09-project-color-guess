function randomColorNumbers() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

let colorOfTheRound = randomColorNumbers();
const circles = document.getElementsByClassName('ball');

function createColorToBeGuessed() {
  const rgbNumbers = document.getElementById('rgb-color');
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
    } else {
      circles[index].style.backgroundColor = randomColorNumbers();
    }
  }
}

function checkAnswer() {
  const allCircles = document.getElementById('allCircles');
  let answer = document.getElementById('answer');
  answer.innerText = 'Escolha uma cor';
  allCircles.addEventListener('click',function (event) {
    if (event.target.style.backgroundColor === colorOfTheRound) {
      answer.innerText = 'Acertou!'
    } else {
      answer.innerText = 'Errou! Tente novamente!'
    }
  });
}

window.onload = function () {
  createColorToBeGuessed();
  createBackgroundCircle();
  chosenColor();
  checkAnswer()
}
