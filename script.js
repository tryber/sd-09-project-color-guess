function buildTitle() {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Advinhe a cor 😎';
  document.body.appendChild(title);
}

function buildRandomColorNumbers() {
const min = 0;
const max = 255;
return color = `(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function buildColorToGuess() {
  const colorToGuess = document.createElement('p');
  colorToGuess.id = 'rgb-color';
  colorToGuess.innerText = `${buildRandomColorNumbers()}`;
  document.body.appendChild(colorToGuess);
}

function buildRandomCircleColors(index, colorToGuessPosition) {
  const colorToGuess = document.querySelector('#rgb-color');
  let rgbText = '';
  if (index === colorToGuessPosition) {
    return rgbText = `rgb${colorToGuess.innerText}`;
  } else {
    return rgbText = `rgb${buildRandomColorNumbers()}`;
  }
}

function buildCircles() {
  const circleAmount = 6;
  const colorToGuessPosition = Math.floor(Math.random() * circleAmount);
  for (let index = 0; index < circleAmount; index += 1) {
    const circle = document.createElement('div');
    circle.className = 'ball';
    circle.style.backgroundColor = `${buildRandomCircleColors(index, colorToGuessPosition)}`;
    document.body.appendChild(circle);
    circle.addEventListener('click', findResult);
  }
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
  if (prizeColor === clickedColor) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

window.onload = function () {
  buildTitle();
  buildColorToGuess();
  buildCircles();
  buildRandomCircleColors();
  buildAnswer();
}
