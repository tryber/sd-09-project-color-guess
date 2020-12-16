function generateRandonNumber() {
  return number = Math.floor(Math.random() * 256 ) - 1;
}

function gerenateRandonColor() {
  let colorArray = [];
  for (index = 0; index < 3; index += 1) {
    if (index === 0) colorArray[index] = generateRandonNumber();
    else colorArray[index] = ` ${generateRandonNumber()}`;
  }
  const color = `(${colorArray})`;
  return color;
}

function addColorText() {
  let rgbColor = document.querySelector('#rgb-color');
  rgbColor.innerText = gerenateRandonColor();
}

window.onload = function () {
  addColorText();
  gerenateRandonColor();
}