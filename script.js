// https: //developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomRGB(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const selectedNumbers = '(168, 34, 1)';
const selectedRGB = 'rgb(168, 34, 1)';
const selectedRandomColor = `rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`;

function createRgbInPage() {
  const p = document.createElement('p');
  p.innerText = selectedNumbers;
  p.style.marginTop = '20px';
  p.id = 'correct';
  const paiH2 = document.querySelector('#rgb-color');
  paiH2.appendChild(p);
}
createRgbInPage();

function createPalleteColors(color) {
  const divColor = document.createElement('div');
  divColor.className = 'ball';
  divColor.style.background = color;
  divColor.border = '1px solid black';
  const divColorPai = document.querySelector('#colors');
  divColorPai.appendChild(divColor);
}

function generateColorsCircles() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i <= 4; i += 1) {
    balls[i] = createPalleteColors(`rgb(${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)}, ${getRandomRGB(0, 255)})`);
  }
}
generateColorsCircles();
createPalleteColors(selectedRGB);

function createAnswer(rightColor) {
  const divAnswer = document.querySelector('#answer');
  const colors = document.querySelector('#colors');
  const crazyText = document.createElement('p');
  crazyText.innerText = 'Escolha uma cor';
  crazyText.id = 'text';
  divAnswer.appendChild(crazyText);

  colors.addEventListener('click', function (e) {
    if (e.target.style.backgroundColor === rightColor) {
      crazyText.innerText = 'Acertou!';
      crazyText.style.color = 'green';
    } else {
      crazyText.innerText = 'Errou! Tente novamente!';
      crazyText.style.color = 'red';
    }
  });
}
createAnswer(selectedRGB);

function sortBalls() {
  // https://stackoverflow.com/questions/25175798/how-to-shuffle-a-nodelist
  let list = document.querySelector('#colors'),
    i;
  for (i = list.children.length; i >= 0; i -= 1) {
    list.appendChild(list.children[Math.random() * i | 0]);
  }
}
sortBalls();

function createBtnReload() {
  const btn = document.createElement('button');
  btn.style.padding = '5px';
  btn.id = 'reset-game';
  btn.innerText = 'Reset game';
  const btnPai = document.querySelector('#buttons');
  btnPai.appendChild(btn);

  btn.addEventListener('click', function () {
    const p = document.querySelector('#correct');
    const paiP = document.querySelector('#rgb-color');
    const balls = document.querySelectorAll('.ball');

    p.innerText = selectedRandomColor;
    paiP.appendChild(p);
    balls.forEach((e) => e.parentNode.removeChild(e));
    generateColorsCircles();
    createPalleteColors(selectedRandomColor);
    const divAnswer = document.querySelector('#answer');
    const text = document.querySelector('#text');

    divAnswer.removeChild(text);
    createAnswer(selectedRandomColor);
    sortBalls();
  });
}
createBtnReload();

function createScore() {
  const p = document.createElement('p');
  p.id = 'placar';
  p.innerText = 'Pontuação: ';
  const paiP = document.querySelector('#score');
  paiP.appendChild(p);

  const scoreSpan = document.createElement('span');
  scoreSpan.id = 'num';
  const colors = document.querySelector('#colors');

  let score = 0;
  scoreSpan.innerText = score;
  p.appendChild(scoreSpan);

  colors.addEventListener('click', function (e) {
    e.preventDefault();
    const answer = document.querySelector('#answer');
    const text = document.querySelector('#text');
    if (text.innerText === 'Acertou!') {
      score += 3;
      scoreSpan.innerText = score;
      p.appendChild(scoreSpan);
    }
  });
}
createScore();
