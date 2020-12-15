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
  randomRgb.innerText = `(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

setRandomRgb();

/* Requisito 3 & 4 - Deve conter 6 circulos de cores como opçoes, todos com a classe ball;
As cores devem ser geradas dinamicamente ao carregar a pagina */

function setBallColor() {
  const myBallsList = document.querySelectorAll('.ball');
  myBallsList.forEach((ball) => {
    ball.style.background = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  });
}

setBallColor();

/* Requisito 5: quando clicar em um circulo, exibir se esta correto ou nao
- id = answer;
- texto = Escolha uma cor
- se correto, texto = Acertou!
- se errado, texto = Errou! Tente novamente!
*/

function resetClassBalls() {
  const myBallsList = document.querySelectorAll('.ball');
  myBallsList.forEach((ball) => {
    ball.className = 'ball';
  });
}

function isCorrect(eventTargetBackground) {
  const randomColor = `rgb${document.querySelector('#rgb-color').innerText}`;
  if (eventTargetBackground === randomColor) {
    return true;
  }
  return false;
}

function gameResult(resultValue) {
  const resultMessage = document.querySelector('#answer');
  if (resultValue === false) {
    return (resultMessage.innerText = 'Errou! Tente novamente!');
  }
  return (resultMessage.innerText = 'Acertou!');
}

function selectedColor() {
  const ballsContainer = document.querySelector('.container');
  ballsContainer.addEventListener('click', (event) => {
    resetClassBalls();
    event.target.className = 'selected ball';
    const resultValue = isCorrect(event.target.style.background);
    gameResult(resultValue);
  });
}

selectedColor();

/* Requisito 6
- criar um botao pra resetar o jogo (as cores);
- id = reset-game;
- elemento answer volta ao estado inicial;
*/ 

function resetColors() {
  const resetButton = document.querySelector('#reset-game');
  resetButton.addEventListener('click', () => {
    window.location.reload();
  })
}

resetColors();
