const colorToBeGuessedSpan = document.getElementById('rgb-color');

function getIntensityValue() {
  return Math.round(Math.random() * 255);
}

function getRandomRGB() {
  const r = getIntensityValue();
  const g = getIntensityValue();
  const b = getIntensityValue();
  return [r, g, b];
}

function getColorToBeGuessed() {
  const rgbArray = getRandomRGB();
  return `(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
}

const colorToBeGuessedCode = getColorToBeGuessed();
colorToBeGuessedSpan.innerText = colorToBeGuessedCode;

window.onload = function () {
}