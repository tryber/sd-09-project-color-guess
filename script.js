// Selectors
const balls = document.querySelectorAll('.ball');
const text = document.querySelector('#rgb-color');
let answer = '';

// Functions
function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

function coloringBalls() {
  balls.forEach((ball) => {
    ball.style.backgroundColor = randomColor();
  })
}
coloringBalls();

function correctBall() {
  answer = balls[Math.floor(Math.random()*balls.length)];
  text.innerText = answer.style.backgroundColor;
}
correctBall();

// Event listener
