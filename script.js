if (localStorage.length > 0) {
  document.querySelector('span').innerText = localStorage.getItem('score');
}

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

function drawRgb() {
  const ballColorsList = document.querySelectorAll('.ball');
  const drawContainerColor = document.querySelector('#rgb-color');
  const index = Math.floor(Math.random() * 6);
  const randomRgb = ballColorsList[index];
  drawContainerColor.innerText = randomRgb.style.background.slice(3);
}

/* Requisito 3 & 4 - Deve conter 6 circulos de cores como opçoes, todos com a classe ball;
As cores devem ser geradas dinamicamente ao carregar a pagina */

function setBallColor() {
  const myBallsList = document.querySelectorAll('.ball');
  myBallsList.forEach((ball) => {
    ball.style.background = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  });
}

setBallColor();

drawRgb();

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

/* Requisito 7
- crie um placar que incremente 3 pontos em cada acerto;
- id = score;
- ao reiniciar a página o score nao deve ser resetado.
*/

function scoreBoard(resultValue) {
  let myPoints = Number(document.querySelector('span').innerText);
  if (resultValue === true) {
    myPoints += 3;
    document.querySelector('span').innerText = myPoints;
  }
  localStorage.setItem('score', myPoints);
}

function gameResult(resultValue) {
  const resultMessage = document.querySelector('#answer');
  if (resultValue === false) {
    return (resultMessage.innerText = 'Errou! Tente novamente!');
  }
  scoreBoard(resultValue);
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
  });
}

resetColors();
