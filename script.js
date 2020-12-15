// Só para ajudar a mexer com as cores
function hexToRbg (hexcode){
  hexcode = hexcode.toUpperCase();
  const correspondence = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
    A : 10,
    B : 11,
    C : 12,
    D : 13,
    E : 14,
    F : 15,
  }
let rComponent = (correspondence[hexcode[0]]*16 + correspondence[hexcode[1]]);
let gComponent = (correspondence[hexcode[2]]*16 + correspondence[hexcode[3]]);;
let bComponent = (correspondence[hexcode[4]]*16 + correspondence[hexcode[5]]);;

return `rgb(${rComponent} , ${gComponent} , ${bComponent})`;
}

const myColorExchange = '457b9d';

document.querySelector('#hexToRGB').innerText = `#${myColorExchange} é ${hexToRbg(myColorExchange)}`;

// O javascript vem aqui
function generateRandomColor() {
  const rPart = Math.floor(Math.random() * 256);
  const gPart = Math.floor(Math.random() * 256);
  const bPart = Math.floor(Math.random() * 256);
  return (`(${rPart} , ${gPart} , ${bPart})`)
}

function pickRandom(array) {
  let randElement = Math.floor(Math.random() * array.length);
  return randElement;
}

function generateBalls() { 
  let colorArray = [];
  for ( let index = 0; index < 6; index += 1){
    const myColor = generateRandomColor();
    colorArray.push(myColor);
    
    const myColorBall = document.createElement('div');
    myColorBall.className = 'ball';
    myColorBall.style.backgroundColor = `rgb${myColor}`;
    document.querySelector('.color-palette-buttons').appendChild(myColorBall);
  }
  document.querySelector('#rgb-color').innerText = colorArray[pickRandom(colorArray)];
}

generateBalls();