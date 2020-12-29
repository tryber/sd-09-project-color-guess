// funcões que criam cores randomicas e preencher os circulos criados

function randomColor() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function paintCircles() {
  const circles = document.querySelectorAll('.ball');
  for (let index = 0; index < circles.length; index += 1) {
    circles[index].style.backgroundColor = randomColor();
  }
}

// função que sortea um numero das cores já criadas e aplica o valor no elemento "#rgb-color"

function chooseColor() {
  const paragraph = document.querySelector('#rgb-color');
  const circles = document.querySelectorAll('.ball');
  const min = 0;
  const max = circles.length;
  const raffle = Math.floor(Math.random() * (max - min)) + min;
  paragraph.innerText = circles[raffle].style.backgroundColor.slice(3);
}

// função reseta as cores e o valor a ser descoberto

function resetGame() {
  paintCircles();
  chooseColor();
}

// função que verifica e valida o score e local storage

function initialScore() {
  const scoreBoard = document.querySelector('#score');
  if(localStorage.length === 0) {
    localStorage.setItem('score', 0);
    scoreBoard.innerText = 0;
  } else {
    scoreBoard.innerText = localStorage.getItem('score');
  }
}

resetGame();
initialScore()
