function randomRgb() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

const color = randomRgb();
const rgbValue = document.getElementById('rgb-color');
rgbValue.innerText = color.slice(3);

window.onload = function () {

};
