function buildTitle() {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Advinhe a cor 😎';
  document.body.appendChild(title);
}

function buildRandomColorNumbers() {
const min = 0;
const max = 255;
return color = `(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function buildColorToGuess() {
  const colorToGuess = document.createElement('p');
  colorToGuess.id = 'rgb-color';
  colorToGuess.innerText = `${buildRandomColorNumbers()}`;
  document.body.appendChild(colorToGuess);
}

function buildColorCircles() {
  const circleAmount = 6;
  for (let index = 0; index < circleAmount; index += 1) {
    const circle = document.createElement('div');
    circle.className = 'ball';
    document.body.appendChild(circle);
  }
}

window.onload = function () {
  buildTitle();
  buildColorToGuess();
  buildColorCircles();
}
