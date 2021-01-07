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
  for(let index = 0; index < balls.length; index += 1) {
    const color = randomColor();
    balls[index].style.backgroundColor = color;
  }
}

// Iniciar função após o carregamento da página
window.onload = function () {
  colorBall();
}
