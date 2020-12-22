const colorsGuess = document.querySelector('#colors-guess');
const colorParagraph = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');

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
  let rgbColors = [];
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
  return randomColor, colorsRGB[randomColor];
}
const paragraphColor = getColorsOption(colorsGenerate);

function paragraphRgbColor(colorSelect) {
  const colorToString = colorSelect.toString();
  const selectedColor =  colorParagraph.innerHTML = colorToString;
  return selectedColor;
}
const paragraphRgb = paragraphRgbColor(paragraphColor);

function answers(rgbColor) {
  const splitString = rgbColor.split(',').join(', ');
  colorsGuess.addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === splitString) {
      answer.innerHTML = 'Acertou!';
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }  
  });
}
answers(paragraphRgb);
