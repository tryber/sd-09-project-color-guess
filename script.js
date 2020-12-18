const valoresRGB = randomRGB();
const rgbDaVez = `rgb${randomRGB()}`;
function addTitle() {
  const header = document.querySelector("header");
  const title = document.createElement("h1");
  title.id = "title";
  title.style.color = rgbDaVez;
  title.innerText = "Color Guess!!";
  header.appendChild(title);
}

function addRBG() {
  const main = document.querySelector("main");  
  const title = document.createElement("h2");
  title.id = "rgb-color";
  title.style.color = rgbDaVez;
  title.innerText = valoresRGB;
  main.appendChild(title);
}

function randomRGB() {
  let num1 = Math.round(Math.random() * 255);
  let num2 = Math.round(Math.random() * 255);
  let num3 = Math.round(Math.random() * 255);
  return `(${num1}, ${num2}, ${num3})`
}

// function randomMatchColorCircle(){
let bolaDaVez = Math.round(Math.random() * 6)  
// }

function addCircles() {
  const div = document.querySelector('div');
  for (let index = 0; index < 6; index += 1) {   
    const circle = document.createElement('div');
    circle.classList.add('ball');
    circle.style.backgroundColor = 'rgb' + randomRGB();
    circle.style.display = 'inline-block';
    circle.style.width = '100px';
    circle.style.height = '100px';
    circle.style.borderRadius = '50%';
    circle.style.border = '1px solid black';
    circle.style.marginRight = '10px';
    if (index == bolaDaVez){
    alert('a resposta é ' + (index+1))
    circle.style.backgroundColor = rgbDaVez;
    }
    div.appendChild(circle);
  }
}

window.onload = function () {
  addTitle();
  addRBG();
  addCircles();
};
