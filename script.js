const colorToBeGuessedSpan = document.getElementById('rgb-color');
const ballsContainerDiv = document.getElementById('balls-container');

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