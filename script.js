function generateRgbColor() {
  let number;
  let rgbColor = '';
  for (let index = 1; index <= 3; index += 1) {
    number = Math.floor(Math.random() * 256);
    if (index === 1) {
      rgbColor = `(${number}`;
    } else if (index === 2) {
      rgbColor += `, ${number}`;
    } else {
      rgbColor += `, ${number})`;
    }
  }
  return rgbColor;
}

function colectionColors() {
  const listColors = document.querySelectorAll('.ball');
  for (let index = 0; index < listColors.length; index += 1) {
    listColors[index].style.backgroundColor = `rgb${generateRgbColor()}`;
  }
}

window.onload = function () {
  const rgb = document.querySelector('#rgb-color');
  rgb.innerText = generateRgbColor();
  colectionColors();
};
