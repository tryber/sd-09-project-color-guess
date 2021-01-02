const colors = document.getElementById('colors');
const balls = document.getElementsByClassName('ball');

function randomColor() {
  let rgb = 'rgb(';
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);
  rgb += red + ', ' + green + ', ' + blue + ')';
  return rgb;
}

function colorFill() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = randomColor();
  }
}

colorFill();
