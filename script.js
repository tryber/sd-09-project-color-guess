// função que preenche o html com circulos variando pelo nivel "valor" dificuldade

function createcircles(dificultyLevel) {
  const sectionCircles = document.querySelector('#circles-section');
  for (let index = 0; index < dificultyLevel; index += 1) {
    const newCircle = document.createElement('span');
    newCircle.className = 'ball';
    sectionCircles.appendChild(newCircle);
  }
}

// funcões que criam cores randomicas e preencher os circulos criados

function randomColor() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function paintCircles() {
  const sectionCircles = document.querySelector('#circles-section');
  for (let index = 0; index < sectionCircles.childElementCount; index += 1) {
    sectionCircles.children[index].style.backgroundColor = randomColor();
  }
}

// função que sortea um numero das cores já criadas e aplica o valor no elemento "#rgb-color"

function chooseColor() {
  const paragraph = document.querySelector('#rgb-color');
  const sectionCircles = document.querySelector('#circles-section');
  const min = 0;
  const max = sectionCircles.childElementCount;
  const raffle = Math.floor(Math.random() * (max - min)) + min;
  paragraph.innerText = sectionCircles.children[raffle].style.backgroundColor.slice(3);
}

// função que verifica e valida o score

function verifiyRgbScore(elementOne, elementTwo) {
  let score = document.querySelector('#score');
  console.log(elementOne.style.backgroundColor.slice(3));
  console.log(elementTwo.innerText);
  if (elementOne.style.backgroundColor.slice(3) === elementTwo.innerText) {
    const value = score.innerText;
    let sum = Number(value) + 3;
    score.innerText = sum;
    resetGame();
  } else {
    resetGame();
  }
}

function matchColors() {
  const paragraph = document.querySelector('#rgb-color');
  const sectionCircles = document.querySelector('#circles-section');
  for (let index = 0; index < sectionCircles.childElementCount; index += 1) {
    sectionCircles.children[index].addEventListener('click', function () {
    verifiyRgbScore(sectionCircles.children[index], paragraph);
    });
  }
  
}

// função adiciona reset game ao botão "resetar cores"

function aplyResetbuttons() {
  const button = document.querySelector('#reset');
  button.addEventListener('click', function() {
    resetGame();
  });
}

// função reseta as cores e o valor a ser descoberto

function resetGame() {
  paintCircles();
  chooseColor();
}

// funcões de inicialização

createcircles(6);
paintCircles();
chooseColor();
matchColors();
aplyResetbuttons()
