const colorToBeGuessedSpan = document.getElementById('rgb-color');
const ballsContainerDiv = document.getElementById('balls-container');
const colors = [];

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

function createBallElements() {
  for (let index = 0; index < 6; index += 1) {
    const ballElement = createNewElement('div', {
      className: 'ball',
    });
    const ballColor = getRandomRGB();
    colors.push(ballColor);
    ballElement.style.backgroundColor = `rgb${ballColor}`;
    ballsContainerDiv.appendChild(ballElement);
  }
}

function getIntensityValue() {
  return Math.round(Math.random() * 255);
}

function getRandomRGB() {
  const r = getIntensityValue();
  const g = getIntensityValue();
  const b = getIntensityValue();
  return `(${r}, ${g}, ${b})`;
}

window.onload = function () {
  const colorToBeGuessedCode = getRandomRGB();
  colorToBeGuessedSpan.innerText = colorToBeGuessedCode;
  createBallElements();
  console.log(colors);
}
