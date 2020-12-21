function randomRgb() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

const color = randomRgb();
const rgbValue = document.getElementById('rgb-color');
rgbValue.innerText = color.slice(3);

function createColors() {
  const section = document.getElementById('colors');
  for (let index = 0; index < 6; index += 1) {
    const circle = document.createElement('div');
    circle.classList.add('ball');
    circle.style.backgroundColor = randomRgb();
    section.appendChild(circle);
  }
}

window.onload = function () {
  createColors();
};
