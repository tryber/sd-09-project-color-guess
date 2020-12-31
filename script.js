const cor = document.querySelector('#rgb-color');

function randomColor() {
  let color = `(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return color;
}

function rgbGuess() {
  cor.innerText = randomColor();
}
  
rgbGuess();
