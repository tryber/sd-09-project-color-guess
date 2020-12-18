const corDaVez = 'rgb' + randomRGB();

function addTitle() {
  const header = document.querySelector("header");
  const title = document.createElement("h1");
  title.id = "title";
  title.style.color = corDaVez;
  title.innerText = "Color Guess!!";
  header.appendChild(title);
}

function addRBG() {
  const main = document.querySelector("main");  
  const title = document.createElement("h2");
  title.id = "rgb-color";
  title.style.color = corDaVez;
  title.innerText = randomRGB();
  main.appendChild(title);
}

function randomRGB() {
  let num1 = Math.round(Math.random() * 255);
  let num2 = Math.round(Math.random() * 255);
  let num3 = Math.round(Math.random() * 255);
  return `(${num1}, ${num2}, ${num3})`
}

window.onload = function () {
  addTitle();
  addRBG();
};
