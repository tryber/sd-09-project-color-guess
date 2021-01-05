const colors = [];
let colorSelected = '';
let placar = 0;

// Gerando a cor RGB
function randomColor(maxSize) {
  colors.length = 0;
  for (let indexColor = 0; indexColor < maxSize; indexColor += 1) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    colors.push(`rgb(${red}, ${green}, ${blue})`);
  }
  return colors;
}

function removeAllColors() {
  const colorsElement = document.querySelectorAll('.ball');

  for (let cont = 0; cont < colorsElement.length; cont += 1) {
    colorsElement[cont].remove();
  }
}

// Criando a seção de cores e imprime de uma das cores geradas
function createColorRGB(maxSize) {
  removeAllColors();
  randomColor(maxSize);

  const ramdomNumber = (Math.floor(Math.random() * colors.length));
  colorSelected = colors[ramdomNumber];

  for (let index = 0; index < colors.length; index += 1) {
    const elementHTML = document.createElement('div');
    elementHTML.classList.add('ball');
    elementHTML.style.backgroundColor = colors[index];

    document.querySelector('#colors').appendChild(elementHTML);
  }

  document.getElementById('rgb-color').innerText = colors[ramdomNumber];
  document.querySelector('#answer').innerText = 'Escolha uma cor';
  document.querySelector('#score').innerText = placar;
}

// Selecionando a Cor
document.querySelector('#colors').addEventListener('click', function (event) {
  if (event.target.style.backgroundColor === colorSelected) {
    document.getElementById('answer').innerText = 'Acertou!';
    placar += 3;
  } else {
    if (placar > 0) {
      placar -= 1;
    }
    document.getElementById('answer').innerText = 'Errou! Tente novamente!';
  }
  document.querySelector('#score').innerText = placar;
});

document.querySelector('#reset-game').addEventListener('click', function () {
  createColorRGB(6);
});

window.onload = function () {
  createColorRGB(6);
};
