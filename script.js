// https: //developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomRGB(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRgbInPage() {
  const h2 = document.createElement('h2');
  h2.innerText = `(${getRandomRGB(0, 255)}), (${getRandomRGB(0, 255)}), (${getRandomRGB(0, 255)})`;
  const paiH2 = document.querySelector('#rgb-color');
  paiH2.appendChild(h2);
}
createRgbInPage();

