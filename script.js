const balls = document.querySelectorAll('.ball');

function randomColor() {
  const colorR = Math.ceil(Math.random() * 256);
  const colorG = Math.ceil(Math.random() * 256);
  const colorB = Math.ceil(Math.random() * 256);
  return `rgb(${colorR}, ${colorG}, ${colorB})`;
}

function coloredBalls() {
  for (let index = 0; index < balls.length; index += 1){
    balls[index].style.backgroundColor = randomColor();
  }
}
coloredBalls();
