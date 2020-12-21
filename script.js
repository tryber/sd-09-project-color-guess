const colorToBeGuessedSpan = document.getElementById('rgb-color');

function getIntensityValue() {
  return Math.round(Math.random() * 255);
}

function getRandomRGB() {
  const r = getIntensityValue();
  const g = getIntensityValue();
  const b = getIntensityValue();
  return `(${r}, ${g}, ${b})`;
}

const colorToBeGuessedCode = getRandomRGB();
colorToBeGuessedSpan.innerText = colorToBeGuessedCode;

window.onload = function () {
}