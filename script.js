function randomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createBall(idName) {
  const father = document.querySelector('.ball-section')
  const ballCreate = document.createElement('div')
  ballCreate.id = idName;
  ballCreate.className = 'ball';
  father.appendChild(ballCreate);
}

function numberBall(number) {
  for (index = 1; index <= number; index += 1) {
    createBall(`ball-${index}`);
  }
}
numberBall(6);

function randomColorBall() {
  const ball = document.querySelectorAll('.ball');
  for (index = 0; index < ball.length; index += 1) {
    ball[index].style.backgroundColor = randomColor();
  }
}
randomColorBall();

//Referencia https://convertingcolors.com/blog/article/convert_hex_to_rgb_with_javascript.html
let aRgbHex = randomColor().match(/.{1,2}/g);
let aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16)
];

function colorText() {
  const color = document.querySelector('#rgb-color');
  const ball = document.querySelectorAll('.ball');
  color.innerHTML = ball[Math.floor(Math.random() * 6)].style.backgroundColor.slice(3)
}
colorText();