// https: //developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomRGB(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRgbInPage() {
  const h2 = document.createElement('h2');
  // h2.innerText = `(${getRandomRGB(0, 255)}), (${getRandomRGB(0, 255)}), (${getRandomRGB(0, 255)})`;
  h2.innerText = '(168, 34, 1)';
  const paiH2 = document.querySelector('#rgb-color');
  paiH2.appendChild(h2);
}
createRgbInPage();

function createPalleteColors(color) {
  const divColor = document.createElement('div');
  divColor.className = 'ball';
  divColor.style.background = color;
  divColor.border = '1px solid black';
  const divColorPai = document.querySelector('#colors');
  divColorPai.appendChild(divColor);
}
createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);
createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);
createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);
createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);
createPalleteColors('rgb(168, 34, 1)');
createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);
