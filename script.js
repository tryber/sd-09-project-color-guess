let colors = [];

const randomColor = function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `(${red} , ${green} , ${blue})`;
  return color;
};

const displayColors = function () {
  const colorsContainer = document.querySelector('.colors-container');
  for (let index = 0; index < 6; index += 1) {
    const color = randomColor();
    colors.push(color);
    const divElement = document.createElement('div');
    divElement.className = 'ball';
    divElement.style.backgroundColor = `rgb${color}`;
    colorsContainer.appendChild(divElement);
  }
};

const ramdomSelectColor = function () {
  const index = Math.floor(Math.random() * 6);
  return index;
}

const displayColorRGB = function () {
  const colorRGB = document.getElementById('rgb-color');
  const index = ramdomSelectColor();
  colorRGB.innerText = colors[index];
}

window.onload = function () {
  displayColors();
  displayColorRGB();
}
