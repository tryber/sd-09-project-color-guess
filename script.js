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

window.onload = function () {
  buildTitle();
  buildColorToGuess();
}
