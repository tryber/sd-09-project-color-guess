const balls = document.querySelectorAll('.ball');

function randomRGB() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return (`rgb(${red}, ${green}, ${blue})`);
}

function coloringCircles() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = randomRGB();
  }
  console.log('coloringCircles');
}
coloringCircles();
