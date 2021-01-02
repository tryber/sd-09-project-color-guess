const rgbColor = document.getElementById('rgb-color');
const balls = document.getElementsByClassName('ball');
const colorGuess = document.getElementById('colors');
const answer = document.getElementById('answer');
const resetBtn = document.getElementById('reset-game');

function randomColor() {
  let rgb = 'rgb(';
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);
  rgb += `${red}, ${green}, ${blue})`;
  return rgb;
}

function colorFill() {
  rgbColor.innerText = randomColor().split('rgb')[1];
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = randomColor();
  }
  balls[Math.ceil((Math.random() * balls.length)) - 1].style.backgroundColor = `rgb${rgbColor.innerText}`;
}

colorFill();

function checkAnswer(event) {
  if (event.target.style.backgroundColor === `rgb${rgbColor.innerText}`) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

colorGuess.addEventListener('click', checkAnswer);

function reset() {
  colorFill();
  answer.innerText = 'Escolha uma cor';
}

resetBtn.addEventListener('click', reset);
