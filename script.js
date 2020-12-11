const rgbColorText = document.getElementById('rgb-color');
const balls = document.getElementsByClassName('ball');
const answer = document.getElementById('answer');
const ballsList = document.getElementById('balls-list')

function ramdomRGB() {
  const ramdomColor = Math.floor(Math.random() * 256);
  return ramdomColor;
}

function generateRandomColor() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.background = `rgb(${ramdomRGB()}, ${ramdomRGB()}, ${ramdomRGB()})`;
  }
}

function colorToGuess() {
  const colorSelected = balls[Math.floor(Math.random() * 6)];
  rgbColorText.innerHTML = colorSelected.style.background;
}

function checkAnswer() {
  ballsList.addEventListener('click', function (event) {
    if (event.target.style.background === rgbColorText.innerText) {
      answer.innerHTML = 'Acertou!';
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}

// function compareAnswer() {
//   if (target.style.background === colorSelected.style.background) {
//     answer.innerHTML = 'Acertou!';
//   } else {
//     answer.innerHTML = 'Errou! Tente novamente!';
//   }
// }


//chamadas
generateRandomColor();
colorToGuess();
checkAnswer();
