/* Requisito 2 - mostrar o texto rgb a ser adivinhado;
   id = rgb-color;
   formato (168, 34, 1) => exemplo;
*/

function randomNumber() {
  let randomNumber = parseInt(Math.random() * 1000, 10);
  while (randomNumber > 255) {
    randomNumber = parseInt(Math.random() * 1000, 10);
    if (randomNumber <= 255) {
      break;
    }
  }
  return randomNumber;
}

function setRandomRgb() {
  const randomRgb = document.querySelector('#rgb-color');
  randomRgb.innerText = `(${randomNumber()} ,${randomNumber()} ,${randomNumber()})`;
}

setRandomRgb();
