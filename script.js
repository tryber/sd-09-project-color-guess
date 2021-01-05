let score = 0;
// Observei PR de Henrique Brito Elias para fazer o task bonus

function buildTitle() {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Advinhe a cor 😎';
  document.body.appendChild(title);
}

function buildRandomColorNumbers() {
  const color = `(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return color;
}

function buildColorToGuessArea() {
  const colorToGuessArea = document.createElement('div');
  colorToGuessArea.id = 'color-to-guess-area';
  document.body.appendChild(colorToGuessArea);
}

function buildColorToGuess() {
  const colorToGuessArea = document.querySelector('#color-to-guess-area');
  const colorToGuess = document.createElement('p');
  colorToGuess.id = 'rgb-color';
  colorToGuess.innerText = `${buildRandomColorNumbers()}`;
  colorToGuessArea.appendChild(colorToGuess);
}

function buildRandomCircleColors(index, colorToGuessPosition) {
  const colorToGuess = document.querySelector('#rgb-color');
  let rgbText = '';
  if (index === colorToGuessPosition) {
    rgbText = `rgb${colorToGuess.innerText}`;
    return rgbText;
  }
  rgbText = `rgb${buildRandomColorNumbers()}`;
  return rgbText;
}

function buildAnswer() {
  const answer = document.createElement('h2');
  answer.id = 'answer';
  answer.innerText = 'Escolha uma cor';
  document.body.appendChild(answer);
}

function findResult(evt) {
  const answer = document.querySelector('#answer');
  const colorToGuess = document.querySelector('#rgb-color');
  const prizeColor = `rgb${colorToGuess.innerText}`;
  const clickedColor = evt.target.style.backgroundColor;
  const circles = document.querySelectorAll('.ball');
  const scoreNumber = document.querySelector('#score');
  if (prizeColor === clickedColor) {
    answer.innerText = 'Acertou!';
    score += 3;
    scoreNumber.innerHTML = score;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    score -= 1;
    scoreNumber.innerHTML = score;
  }
  for (let index = 0; index < circles.length; index += 1) {
    circles[index].removeEventListener('click', findResult);
  }
}

function buildCircles(circleArea) {
  const circleAmount = 6;
  const colorToGuessPosition = Math.floor(Math.random() * circleAmount);
  for (let index = 0; index < circleAmount; index += 1) {
    const circle = document.createElement('div');
    circle.className = 'ball';
    circle.style.backgroundColor = `${buildRandomCircleColors(index, colorToGuessPosition)}`;
    circleArea.appendChild(circle);
    circle.addEventListener('click', findResult);
  }
}

function buildCircleArea() {
  const circleArea = document.createElement('div');
  circleArea.id = 'circle-area';
  document.body.appendChild(circleArea);
  buildCircles(circleArea);
}

function resetGame() {
  const colorToGuessArea = document.querySelector('#color-to-guess-area');
  const answer = document.querySelector('#answer');
  const circleArea = document.querySelector('#circle-area');
  answer.innerText = 'Escolha uma cor';
  colorToGuessArea.removeChild(colorToGuessArea.firstChild);
  buildColorToGuess();
  while (circleArea.firstChild) {
    circleArea.removeChild(circleArea.firstChild);
  }
  buildCircles(circleArea);
}

function buildResetButton() {
  const resetButton = document.createElement('button');
  resetButton.id = 'reset-game';
  resetButton.innerText = 'Resetar jogo';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function buildScore() {
  const circleArea = document.querySelector('#circle-area');
  const scoreText = document.createElement('p');
  scoreText.innerText = 'Placar: ';
  const scoreNumber = document.createElement('h3');
  scoreNumber.id = 'score';
  scoreNumber.innerHTML = score;
  document.body.insertBefore(scoreText, circleArea);
  document.body.insertBefore(scoreNumber, circleArea);
}

window.onload = function () {
  buildTitle();
  buildColorToGuessArea();
  buildColorToGuess();
  buildCircleArea();
  buildRandomCircleColors();
  buildAnswer();
  buildResetButton();
  buildScore();
};
