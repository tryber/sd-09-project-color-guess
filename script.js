// Selectors
const balls = document.querySelectorAll('.ball');
const text = document.querySelector('#rgb-color');
const question = document.querySelector('#answer');
const btnReset = document.querySelector('#reset-game');
const score = document.querySelector('#score');
let placar = 0;
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
  });
}
coloringBalls();

function correctBall() {
  answer = balls[Math.floor(Math.random() * balls.length)];
  text.innerText = answer.style.backgroundColor;
}
correctBall();

function questionAnswer() {
  balls.forEach((ball) => {
    ball.addEventListener('click', (event) => {
      if (event.target.style.backgroundColor === text.innerText) {
        question.innerText = 'Acertou!';
        placar += 3;
        score.innerText = `Placar: ${placar}`
      } else {
        question.innerText = 'Errou! Tente novamente!';
      }
    });
  });
}
questionAnswer();



// Event listener
btnReset.addEventListener('click', () => {
  coloringBalls();
  correctBall();
  question.innerText = 'Escolha uma cor';
})
