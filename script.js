// função que preenche o html com circulos variando pelo nivel "valor" dificuldade

function createcircles(dificultyLevel) {
  const sectionCircles = document.querySelector('#circles');
  for (let index = 0; index < dificultyLevel; index += 1) {
    const newCircle = document.createElement('span');
    newCircle.className = 'circle';
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
  const sectionCircles = document.querySelector('#circles');
  for (let index = 0; index < sectionCircles.childElementCount; index += 1) {
    sectionCircles.children[index].style.backgroundColor = randomColor();
  }
}

// função que sortea um numero das cores já criadas e aplica o valor no elemento "#rgb-color"

function chooseColor() {
  const paragraph = document.querySelector('#rgb-color');
  const sectionCircles = document.querySelector('#circles');
  const min = 0;
  const max = sectionCircles.childElementCount;
  const raffle = Math.floor(Math.random() * (max - min)) + min;
  paragraph.innerText = sectionCircles.children[raffle].style.backgroundColor.slice(3);
}

// função que verifica e valida o score

createcircles(6);
paintCircles();
chooseColor();