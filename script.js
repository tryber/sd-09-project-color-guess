const colorToBeGuessedSpan = document.getElementById('rgb-color');
const ballsContainerDiv = document.getElementById('balls-container');
const answerParagraph = document.getElementById('answer');
const resetGameButton = document.getElementById('reset-game');
const scoreSpan = document.getElementById('score');
let colors = [];
let colorToBeGuessedIndex;
let colorToBeGuessedCode;
let score = 0;

function setPropertiesToNewElement(element, propertiesObject) {
  const propertiesKeys = Object.keys(propertiesObject);
  for (let index = 0; index < propertiesKeys.length; index += 1) {
    const key = propertiesKeys[index];
    element[key] = propertiesObject[key];
  }
}

function createNewElement(tag, propertiesObject) {
  const newElement = document.createElement(tag);
  setPropertiesToNewElement(newElement, propertiesObject);
  return newElement;
}

function getRandomValue(max) {
  return Math.round(Math.random() * max);
}

function getRandomRGB() {
  const r = getRandomValue(255);
  const g = getRandomValue(255);
  const b = getRandomValue(255);
  return `(${r}, ${g}, ${b})`;
}

function drawColorsIndex() {
  return getRandomValue(colors.length - 1);
}

function createBallElements() {
  for (let index = 0; index < 6; index += 1) {
    const ballElement = createNewElement('div', {
      className: 'ball',
    });
    const ballColor = getRandomRGB();
    colors.push(ballColor);
    ballElement.style.backgroundColor = `rgb${ballColor}`;
    ballElement.id = index;
    ballsContainerDiv.appendChild(ballElement);
  }
}

function updateScore() {
  scoreSpan.innerText = score;
}

function guessColor(event) {
  const element = event.target;
  const elementHasBallClass = element.classList.contains('ball');
  if (elementHasBallClass) {
    const isTheRightColor = parseInt(event.target.id, 10) === colorToBeGuessedIndex;
    if (isTheRightColor) {
      answerParagraph.innerText = 'Acertou!';
      score += 3;
      updateScore();
    } else {
      answerParagraph.innerText = 'Errou! Tente novamente!';
    }
  }
}

function resetColors() {
  const nodeList = document.querySelectorAll('.ball');
  for (let index = 0; index < nodeList.length; index += 1) {
    nodeList[index].remove();
  }
}

function loadGame() {
  colors = [];
  resetColors();
  updateScore();
  answerParagraph.innerText = 'Escolha uma cor';
  createBallElements();
  colorToBeGuessedIndex = drawColorsIndex();
  colorToBeGuessedCode = colors[colorToBeGuessedIndex];
  colorToBeGuessedSpan.innerText = colorToBeGuessedCode;
}

function setBallsContainerEvent() {
  ballsContainerDiv.addEventListener('click', guessColor);
}

function setResetGameEvent() {
  resetGameButton.addEventListener('click', loadGame);
}

window.onload = function () {
  loadGame();
  setBallsContainerEvent();
  setResetGameEvent();
};
