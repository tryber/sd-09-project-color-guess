const randomColor = function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red} , ${green} , ${blue})`;
  return color;
};


const displayColors = function () {
  const colorsContainer = document.querySelector('.colors-container');
  let colors = [];
  for (let index = 0; index < 6; index += 1) {
    const color = randomColor();
    colors.push(color);
    const divElement = document.createElement('div');
    divElement.className = 'ball';
    divElement.style.backgroundColor = color;
    colorsContainer.appendChild(divElement);
  }
  console.log(colors);
}

window.onload = function () {
  displayColors();
}
