// Selectors
const balls = document.querySelectorAll('.ball');
const text = document.querySelector('.rgb-color');

// Functions
function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

balls.forEach((ball) => {
  ball.style.backgroundColor = randomColor();
})

// Event listener