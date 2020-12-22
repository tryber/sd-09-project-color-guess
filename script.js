const colorsGuess = document.querySelector('#colors-guess');
const colorParagraph = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const buttons = document.querySelector('#buttons');
const score = document.querySelector('#score');

function colorRandomPalette() {
  const allColors = [];
  for (let index = 0; index < 3; index += 1) {
    const colorRandom = Math.floor(Math.random() * 255) + 1;
    allColors.push(colorRandom);
  }
  const cors = allColors.toString();
  const result = `rgb(${cors})`;
  return result;
}

function gerateColorsOptions() {
  const rgbColors = [];
  for (let index = 0; index < 6; index += 1) {
    const circleOfColors = document.createElement('div');
    circleOfColors.className = 'ball';
    rgbColors.push(circleOfColors.style.backgroundColor = colorRandomPalette());
    colorsGuess.appendChild(circleOfColors);
  }
  return rgbColors;
}
const colorsGenerate = gerateColorsOptions();

function getColorsOption(colorsRGB) {
  const randomColor = Math.floor(Math.random() * colorsRGB.length);
  return colorsRGB[randomColor];
}
const paragraphColor = getColorsOption(colorsGenerate);

function paragraphRgbColor(colorSelect) {
  const colorToString = colorSelect.toString();
  const splitString = colorToString.split(',').join(', ');
  colorParagraph.innerHTML = splitString;
  return splitString;
}
const paragraphRgb = paragraphRgbColor(paragraphColor);

function answers(rgbColor) {
  colorsGuess.addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === rgbColor) {
      answer.innerHTML = 'Acertou!';
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}
answers(paragraphRgb);

function buttonResetGame() {
  const restart = document.createElement('button');
  restart.id = 'reset-game';
  restart.innerHTML = 'Reiniciar Jogo';
  buttons.appendChild(restart);
  restart.addEventListener('click', function () {
    location.reload();
  });
}
buttonResetGame();

function gamePoints(rgbColor, test) {
  let count = 3;
  if (localStorage.length > 0) {
    count = test + 3;
  }
  colorsGuess.addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === rgbColor) {
      score.innerHTML = count;
      const points = score.innerHTML;
      count += 3;
      localStorage.setItem('checkPoints', points);
    }
  });
}
let test = localStorage.checkPoints;
test = parseInt(test);
gamePoints(paragraphRgb, test);

function pageLoadPoinst() {
  let allPoints = JSON.parse(localStorage.getItem('checkPoints'));
  if (allPoints > 0) {
  score.innerHTML = allPoints;
  } else {
    score.innerHTML = 0;
  }
}

window.onload = function () {
  pageLoadPoinst();
};
