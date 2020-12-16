// Só para ajudar a mexer com as cores
function calculateColor(hex1, hex2) {
  hex1 *= 16;
  return (hex1 + hex2);
}

function hexToRbg(hexcode) {
  hexcode = hexcode.toUpperCase();
  const correspondence = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };

  const rComponent = calculateColor(correspondence[hexcode[0]], correspondence[hexcode[1]]);
  const gComponent = calculateColor(correspondence[hexcode[2]], correspondence[hexcode[3]]);
  const bComponent = calculateColor(correspondence[hexcode[4]], correspondence[hexcode[5]]);

  return `rgb(${rComponent}, ${gComponent}, ${bComponent})`;
}

const myColorExchange = '2d6a4f';

document.querySelector('#hexToRGB').innerText = `#${myColorExchange} é ${hexToRbg(myColorExchange)}`;

// O javascript vem aqui
let gameOver = false;

function generateRandomColor() {
  const rPart = Math.floor(Math.random() * 256);
  const gPart = Math.floor(Math.random() * 256);
  const bPart = Math.floor(Math.random() * 256);
  return (`(${rPart}, ${gPart}, ${bPart})`);
}

function pickRandom(array) {
  const randElement = Math.floor(Math.random() * array.length);
  return randElement;
}

function chooseBall(self) {
  if (!gameOver) {
    const choosenRGB = `rgb${document.querySelector('#rgb-color').innerText}`;
    const choosenBall = self.target.style.backgroundColor;
    if (choosenRGB === choosenBall) {
      document.querySelector('#answer').innerText = 'Acertou!';
      document.querySelector('.color-palette-buttons').style.boxShadow = '-5px 5px green';
      document.querySelector('.color-palette-buttons').style.border = '5px dashed green';
      document.querySelector('#score').innerText = Number(document.querySelector('#score').innerText) + 3;
    } else {
      document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
      document.querySelector('.color-palette-buttons').style.boxShadow = '-5px 5px red';
      document.querySelector('.color-palette-buttons').style.border = '5px dotted red';
    }
  } else {
    alert('Esse round já acabou');
  }
  gameOver = true;
}

function generateBalls() {
  const colorArray = [];
  document.querySelector('.color-palette-buttons').innerHTML = '';
  for (let index = 0; index < 6; index += 1) {
    const myColor = generateRandomColor();
    colorArray.push(myColor);

    const myColorBall = document.createElement('div');
    myColorBall.className = 'ball';
    myColorBall.style.backgroundColor = `rgb${myColor}`;
    myColorBall.addEventListener('click', chooseBall);
    document.querySelector('.color-palette-buttons').appendChild(myColorBall);
  }
  document.querySelector('#rgb-color').innerText = colorArray[pickRandom(colorArray)];
}

generateBalls();

function resetGame() {
  document.querySelector('#answer').innerText = 'Escolha uma cor';
  document.querySelector('.color-palette-buttons').removeAttribute('style');
  generateBalls();
  gameOver = false;
  // pontuacao
}

function generateResetButton() {
  const resetBtn = document.createElement('button');
  resetBtn.id = 'reset-game';
  resetBtn.innerText = 'Iniciar Nova Rodada';
  resetBtn.addEventListener('click', resetGame);
  document.querySelector('.extra-buttons').appendChild(resetBtn);
}

generateResetButton();
