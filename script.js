const paragraphRGB = document.querySelector('#rgb-color');
const btnRGB = document.querySelector('#reset-game');
const answer = document.querySelector('#answer');
const score = document.querySelector('#score');
const balls = document.querySelectorAll('.ball');
let result = 0;

// Gerar uma sequencia RGB aleatória
function rgbGenerator() {
  return `RGB(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Colorir os background das bolas com a função que cria uma cor aleatória
function colorBalls() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = rgbGenerator();
  }
}

// Capturar a cor de 1 das bolas aleatoriamente e imprimir o seu valor em RGB na tela
function rgbTitle() {
  const sortBall = balls[(Math.floor(Math.random() * 6))].style.backgroundColor.slice(3);
  paragraphRGB.innerText = sortBall;
}

// Ao acertar a cor ele irá imprimir na tela o resultado do score somando 3 mais a
// palavra Acertou, caso erre irá imprimir na tela Errou.
function clickBall(event) {
  if (event.target.style.backgroundColor.slice(3) === paragraphRGB.innerText) {
    result += 3;
    score.innerText = `Placar: ${result}`;
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

// Incrementar o método addEventListener nas bolas
function addListener() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', clickBall);
  }
}

// Recarregar as função de cores nas bolas e a impressão do RGB na tela
function loadFunctions() {
  answer.innerText = 'Escolha uma cor';
  colorBalls();
  rgbTitle();
}

// Botão que irá chamar a função de recarregar as cores e o RGB na tela
btnRGB.addEventListener('click', loadFunctions);

// Iniciar as funções ao abrir a página (Cores das bolas - RGB na tela - addEventListener nas bolas)
colorBalls();
rgbTitle();
addListener();
