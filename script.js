const balls = document.getElementsByClassName('ball')

function ramdomRGB() {
  const ramdomColor = Math.ceil(Math.random() * 255);
  return ramdomColor;
}

function generateRandomColor() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.background = `rgb(${ramdomRGB()}, ${ramdomRGB()}, ${ramdomRGB()})`
  }
}

//chamadas
ramdomRGB();
generateRandomColor();
