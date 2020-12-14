// função Injetando rgb aleatório no parágrafo
function randomColor() {
    const colorsList = document.querySelectorAll('.ball');
    const rgbColor = document.getElementById('rgb-color');
    rgbColor.innerText = colorsList[Math.floor(Math.random() * 6)].style.backgroundColor;
  }

window.onload = function () {
  //  Gerando divs com cores aleatórias
  const colorsDiv = document.getElementById('colors');
  for (let index = 0; index < 6; index += 1) {
    const divElement = document.createElement('div');
    divElement.className = 'ball';
    divElement.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
    colorsDiv.appendChild(divElement);
  }

  randomColor();
};

let points = 0;
// Função jogar
function play() {
  const ballClick = document.querySelector('#colors');
  ballClick.addEventListener('click', function (event) {
    const eventRgb = event.target.style.backgroundColor;
    const answer = document.querySelector('#rgb-color').innerText;
    if (eventRgb === answer) {
      document.querySelector('#answer').innerText = 'Acertou!';
      points += 3;
      document.querySelector('#score').innerText = `Pontos: ${points}`;
    } else {
      document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
    }
  });
}

play();

// Função resetar jogo
function resetGame() {
  const resetBtn = document.getElementById('reset-game');
  resetBtn.addEventListener('click', function() {
    const listOfColors = document.querySelectorAll('.ball');
    for (let index = 0; index < 6; index += 1) {
        listOfColors[index].style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
    }
    randomColor();
    document.querySelector('#answer').innerText = 'Escolha uma cor';
  });
}

resetGame();
