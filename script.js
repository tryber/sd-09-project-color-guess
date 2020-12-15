/* Requisito 2 - mostrar o texto rgb a ser adivinhado;
   id = rgb-color;
   formato (168, 34, 1) => exemplo;
*/

function randomNumber() {
  let magicNumber = parseInt(Math.random() * 1000, 10);
  while (magicNumber > 255) {
    magicNumber = parseInt(Math.random() * 1000, 10);
    if (magicNumber <= 255) {
      break;
    }
  }
  return magicNumber;
}

function setRandomRgb() {
  const randomRgb = document.querySelector('#rgb-color');
  randomRgb.innerText = `(${randomNumber()} ,${randomNumber()} ,${randomNumber()})`;
}

setRandomRgb();
