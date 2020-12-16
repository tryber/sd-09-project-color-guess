function generateRandonNumber() {
  const number = Math.floor(Math.random() * 256) - 1;
  return number;
}

function gerenateRandonColor() {
  const colorArray = [];
  for (let index = 0; index < 3; index += 1) {
    if (index === 0) colorArray[index] = generateRandonNumber();
    else colorArray[index] = ` ${generateRandonNumber()}`;
  }
  const color = `(${colorArray})`;
  return color;
}

function addColorText() {
  const rgbColor = document.querySelector('#rgb-color');
  rgbColor.innerText = gerenateRandonColor();
}

function createBallWithColor() {
  const colorSection  = document.querySelector('#color-section');
  const ballColor = document.createElement('div');
  ballColor.classList.add('ball');
  ballColor.style.backgroundColor = `rgb${gerenateRandonColor()}`;
  colorSection.appendChild(ballColor);
}

function ballSection() {
  for (let index = 0; index < 6; index += 1) {
    createBallWithColor();
  }
}

window.onload = function () {
  addColorText();
  gerenateRandonColor();
  ballSection();
};
