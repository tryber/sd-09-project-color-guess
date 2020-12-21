function randomRGB() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

const rgbDaVez = randomRGB();
const header = document.getElementById('title');
const paragraph = document.getElementById('rgb-color');
paragraph.innerHTML = rgbDaVez.slice(3);

window.onload = function () {
  randomRGB();
}