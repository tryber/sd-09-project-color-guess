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
      text.innerText = 'Acertou!';
    } else {
      text.innerText = 'Errou! Tente novamente!';
    }
  });
}

// Iniciar função após o carregamento da página
window.onload = function () {
  colorBall();
  compareColor();
};
