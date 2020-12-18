// https: //developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomRGB(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRgbInPage() {
  const p = document.createElement('p');
  // h2.innerText = `(${getRandomRGB(0, 255)}), (${getRandomRGB(0, 255)}), (${getRandomRGB(0, 255)})`;
  p.innerText = '(168, 34, 1)';
  p.style.background = 'black';
  p.style.color = 'white';
  p.style.padding = '5px';
  const paiH2 = document.querySelector('#rgb-color');
  paiH2.appendChild(p);
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

/* function generateColorsCircles() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i <= 4; i += 1) {
    balls[i] = createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);
  }
  balls == createPalleteColors('rgb(168, 34, 1)');
}
generateColorsCircles(); */

createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);
createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);
createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);
createPalleteColors('rgb(168, 34, 1)');
createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);
createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);

function createAnswer() {
  const divAnswer = document.querySelector('#answer');
  const colors = document.querySelector('#colors');
  const crazyText = document.createElement('p');
  crazyText.innerText = 'Escolha uma cor';
  divAnswer.appendChild(crazyText);

  colors.addEventListener('click', function (e) {
    if (e.target.style.backgroundColor === 'rgb(168, 34, 1)') {
      crazyText.innerText = 'Acertou!';
      crazyText.style.color = 'green';
    } else {
      crazyText.innerText = 'Errou! Tente novamente!';
      crazyText.style.color = 'red';
    }
  });
}
createAnswer();
