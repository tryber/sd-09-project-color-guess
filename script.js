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
  const circulos = document.getElementById('section');
  const color1 = document.getElementById('rgb-color').innerText;
  const text = document.getElementById('answer');
  circulos.addEventListener('click', function (event) {
    const color2 = event.target.style.backgroundColor;
    if (color2 === color1) {
      console.log(color2 === color2);
      text.innerText = 'Acertou!';
    } else {
      text.innerText = 'Errou! Tente novamente!';
    }
  });
}

// Reiniciar o jogo
function restartGame() {
  const btn = document.getElementById('reset-game');
  const text = document.getElementById('answer');
  btn.addEventListener('click', function () {
    window.location.reload();
  });
}

// Definir a cor a ser comparada
function mainColor() {
  const mainColor = document.getElementById('rgb-color');
  const num = randomNumber(6);
  const color = document.getElementsByClassName('ball')[num].style.backgroundColor;
  mainColor.innerText = color;
}

// Iniciar função após o carregamento da página
window.onload = function () {
  colorBall();
  mainColor();
  compareColor();
  restartGame();
};
