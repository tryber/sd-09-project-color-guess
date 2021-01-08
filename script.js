let points = 0;

// Gerar número aleatório
function randomNumber(num) {
  const number = Math.floor(Math.random() * num);
  return number;
}

// Gerar cor aleatória
function randomColor() {
  const rgb = `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
  return rgb;
}

// Atribuir cor aos círculos
function colorBall() {
  const balls = document.getElementsByClassName('ball');
  for (let index = 0; index < balls.length; index += 1) {
    const color = randomColor();
    balls[index].style.backgroundColor = color;
  }
}

// Comparar a cor escolhida
function compareColor() {
  const circles = document.getElementById('container');
  const color1 = document.getElementById('rgb-color').innerText;
  const text = document.getElementById('answer');
  circles.addEventListener('click', function (event) {
    const color2 = event.target.style.backgroundColor;
    const score = document.getElementById('score');
    const classTest = event.target.className;
    if (classTest !== 'container') {
      if (color2 === color1) {
        text.innerText = 'Acertou!';
        points += 3;
        score.innerHTML = points;
      } else {
        text.innerText = 'Errou! Tente novamente!';
      }
    }
  });
}

// Definir a cor a ser comparada
function mainColor() {
  const colorMain = document.getElementById('rgb-color');
  const num = randomNumber(6);
  const color = document.getElementsByClassName('ball')[num].style.backgroundColor;
  colorMain.innerText = color;
}

// Reiniciar o jogo
function restartGame() {
  const btn = document.getElementById('reset-game');
  btn.addEventListener('click', function () {
    document.getElementById('answer').innerText = 'Escolha uma cor';
    colorBall();
    mainColor();
    compareColor();
  });
}

// Adiciona rodapé à página
function createFooter() {
  const container = document.querySelector('body');
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.classList.add('footer');
  footer.innerText = 'Project Color Guess - Projeto Bônus - Bloco 5 - Trybe 🚀 - Criado por: Cleber Lopes Teixeira - Turma 09 - 2021 ©️';
  container.appendChild(footer);
}

// Iniciar função após o carregamento da página
window.onload = function () {
  colorBall();
  mainColor();
  compareColor();
  restartGame();
  createFooter();
};
