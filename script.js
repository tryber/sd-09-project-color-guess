const rgbColorText = document.getElementById('rgb-color');
const balls = document.getElementsByClassName('ball');
const answer = document.getElementById('answer');
const ballsList = document.getElementById('balls-list');
const btnReset = document.getElementById('reset-game');
const btnResetScore = document.getElementById('reset-score');
const score = document.getElementById('score');
let totalScore = 0;
if (localStorage.getItem('Pontuação jogo descubra a cor JAF') === null) {
  score.innerHTML = 0;
} else {
  totalScore = parseFloat(localStorage.getItem('Pontuação jogo descubra a cor JAF'));
  score.innerHTML = totalScore;
}

function ramdomRGB() {
  const ramdomColor = Math.floor(Math.random() * 256);
  return ramdomColor;
}

function generateRandomColor() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.background = `rgb(${ramdomRGB()}, ${ramdomRGB()}, ${ramdomRGB()})`;
  }
}

function colorToGuess() {
  const colorSelected = balls[Math.floor(Math.random() * 6)];
  rgbColorText.innerHTML = colorSelected.style.background;
}

function checkAnswer() {
  ballsList.addEventListener('click', function (event) {
    if (event.target.style.background === rgbColorText.innerText) {
      answer.innerHTML = 'Acertou!';
      totalScore += 3;
      localStorage.setItem('Pontuação jogo descubra a cor JAF', totalScore);
      score.innerHTML = totalScore;
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}

function resetReloadPage() {
  btnReset.addEventListener('click', function () {
    window.location.reload();
  });
}

function resetSavedScore() {
  btnResetScore.addEventListener('click', function () {
    let initialScore = 0;
    localStorage.setItem('Pontuação jogo descubra a cor JAF', initialScore);
    window.location.reload();
  });
}

// chamadas
generateRandomColor();
colorToGuess();
checkAnswer();
resetReloadPage();
resetSavedScore();
