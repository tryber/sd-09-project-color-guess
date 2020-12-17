function randomColor() {
  const rComponent = Math.round(Math.random() * 255);
  const gComponent = Math.round(Math.random() * 255);
  const bComponent = Math.round(Math.random() * 255);
  return `(${rComponent}, ${gComponent}, ${bComponent})`;
}

/*
Método para embralhar array descrito no vídeo abaixo:

https://www.youtube.com/watch?v=5sNGqsMpW1E&feature=emb_logo
*/
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const temp = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

function setOptions(secretColor) {
  const balls = document.querySelectorAll('.ball');
  let ballsColors = [secretColor];
  for (let index = 1; index < balls.length; index += 1) {
    ballsColors.push(randomColor());
  }
  ballsColors = shuffle(ballsColors);
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = `rgb${ballsColors[index]}`;
  }
}

window.onload = function () {
  // Cria rgb da cor secreta
  const mainContent = document.querySelector('.main-content');
  const rgbColor = document.createElement('p');
  rgbColor.id = 'rgb-color';
  rgbColor.className = 'rgb-color-style';
  rgbColor.innerText = randomColor();
  mainContent.prepend(rgbColor);

  // Popula opções
  setOptions(rgbColor.innerText);
};

// Atualização do placar
function updateScore() {
  const scoreScreen = document.querySelector('#score');
  const scoreNumber = scoreScreen.innerText.match(/\d+/g);
  const newScore = Number(scoreNumber.join('')) + 3;
  scoreScreen.innerText = scoreScreen.innerText.replace(scoreNumber, newScore);
}

// Evento de click nas opções
function checkGuess(event) {
  const selectedOption = event.target;
  const answer = document.querySelector('#answer');
  const secretColor = document.querySelector('#rgb-color');
  if (selectedOption.style.backgroundColor === `rgb${secretColor.innerText}`) {
    answer.innerText = 'Acertou!';
    answer.className = 'correct';
    updateScore();
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    answer.className = 'wrong';
  }
}

// Evento de highlight hover nas opções
function highlight(event) {
  const hoveredBall = event.target;
  hoveredBall.classList.add('hightlighted-ball');
}

// Evento de desativa;cão do highlight
function unhighlight(event) {
  const unhoveredBall = event.target;
  unhoveredBall.classList.remove('hightlighted-ball');
}


function ballsEvent() {
  const balls = document.querySelectorAll('.ball');
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', checkGuess);
    balls[index].addEventListener('mouseover', highlight);
    balls[index].addEventListener('mouseleave', unhighlight);
  }
}

ballsEvent();

// Refresh das cores
function resetGameEvent() {
  const refreshBtn = document.querySelector('#reset-game');
  refreshBtn.addEventListener('click', function () {
    const rgbColor = document.querySelector('#rgb-color');
    rgbColor.innerText = randomColor();
    setOptions(rgbColor.innerText);
    const answer = document.querySelector('#answer');
    answer.innerText = 'Escolha uma cor';
    answer.classList = 'no-answer';
  });
}

resetGameEvent();

// Links do Github e do LinkedIn
function socialMediaLink() {
  const githubIcon = document.querySelector('.fa-github');
  githubIcon.addEventListener('click', function () {
    window.open('https://github.com/rach-vp', '_blank');
  });
  const linkedinIcon = document.querySelector('.fa-linkedin');
  linkedinIcon.addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/raquel-pican%C3%A7o-384736107/', '_blank');
  });
}

socialMediaLink();
