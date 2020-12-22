const colorsGuess = document.querySelector('#colors-guess');
const colorParagraph = document.querySelector('#rgb-color');

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

function colorGuess() {
  colorParagraph.innerHTML = colorRandomPalette();
}
colorGuess();

function gerateColorsOptions() {
  for (let index = 0; index < 6; index += 1) {
    const circleOfColors = document.createElement('div');
    circleOfColors.className = 'ball';
    circleOfColors.style.backgroundColor = colorRandomPalette();
    colorsGuess.appendChild(circleOfColors);
  }
}
gerateColorsOptions();