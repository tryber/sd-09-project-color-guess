// Generate random rgb code
function GenerateRandomRgb() {
  const rgbArray = [];
  for (let index = 0; index < 3; index += 1) {
    if (index === 0) {
      rgbArray.push(Math.round(Math.random() * 255));
    } else {
      rgbArray.push(` ${Math.floor(Math.random() * 255)}`);
    }
  }
  return rgbArray;
}

// Create a element Section in HTML
function createSection(container) {
  const section = document.createElement('section');
  container.appendChild(section);
  section.className = 'sections';
  return section;
}

// Create a element paragraph in HTML
function createParagraph(container) {
  const paragraph = document.createElement('p');
  container.appendChild(paragraph);
  return paragraph;
}

// Create a element div in HTML
function createDiv(container) {
  const div = document.createElement('div');
  container.appendChild(div);
  return div;
}

// Create element button in HTML
function createButton(container) {
  const button = document.createElement('button');
  container.appendChild(button);
  return button;
}

// Load RGB code in HTML
function loadRgbCode(container) {
  const section = createSection(container);
  section.id = 'paragraph-section';
  const paragraph = createParagraph(section);
  paragraph.id = 'rgb-color';
  paragraph.innerText = `(${GenerateRandomRgb()})`;
}

// Load element p with score at page
function loadScore() {
  const section = document.querySelector('#paragraph-section');
  const paragraph = createParagraph(section);
  paragraph.id = 'score';
  if (sessionStorage.getItem('score') === null){
    paragraph.innerText = `Score: ${sessionStorage.setItem('score', 0)}`;
  } else {
    paragraph.innerText = `Score: ${sessionStorage.getItem('score')}`;
  }
}

// Remove element p at HTML with id 'score'
function removeScore() {
  const section = document.querySelector('#paragraph-section');
  const score = document.querySelector('#score');
  section.removeChild(score);
}

// If the selected ball is the correct, store the background color value in session storage to prevent the score from being increased in the same round if the user click in the correct ball more times, and call function that update score
function checkSelectedBall(event) {
  const answer = document.querySelector('#answer');
  if ((event.target.className === 'ball') && (answer.innerText === 'Acertou!')) {
    const selectedBall = event.target.style.backgroundColor;
    const previousBall = sessionStorage.getItem('previous-ball');
    if (previousBall !== selectedBall) {
      sessionStorage.setItem('previous-ball', selectedBall);
      updateScore();
    }
  }
}

// Set item with key 'score' in Session Storage with value +3 and update score at HTML
function updateScore() {
  const points = parseInt(sessionStorage.getItem('score'));
  sessionStorage.setItem('score', points + 3);
  removeScore();
  loadScore();
}

// Define the background color of balls(div)
function setBackgroundColor(ball, index, draw) {
  const rgbColor = `rgb${document.querySelector('#rgb-color').innerText}`;
  if (index === draw) {
    ball.style.backgroundColor = rgbColor;
  } else {
    ball.style.backgroundColor = `rgb(${GenerateRandomRgb()})`;
  }
}

// Load Balls (divs elements) in HTML
function loadBalls(container, amount) {
  const section = createSection(container);
  section.id = 'balls-section';
  const numberDraw = Math.floor(Math.random() * amount);
  for (let index = 0; index < amount; index += 1) {
    const ball = createDiv(section);
    ball.className = 'ball';
    setBackgroundColor(ball, index, numberDraw);
  }
}

// Load a element p in HTML with answer text
function loadAnswer(container) {
  const section = createSection(container);
  section.id = 'answer-section';
  const paragraph = createParagraph(section);
  paragraph.innerText = 'Escolha uma cor';
  paragraph.id = 'answer';
}

// Check if the selected ball is the correct
function checkAnswer(event) {
  if (event.target.className === 'ball') {
    const answer = document.querySelector('#answer');
    const rgbColor = `rgb${document.querySelector('#rgb-color').innerText}`;
    const target = event.target;
    if (target.style.backgroundColor === rgbColor) {
      answer.innerText = 'Acertou!';
    } else {
      answer.innerText = 'Errou! Tente novamente!';
    }
  }
}

// Load button reset game at page 
function loadButtonResetGame(container) {
  const section = createSection(container);
  section.id = 'buttons-section';
  const button = createButton(section);
  button.innerText = 'Reset Game';
  button.id = 'reset-game';
}

// Reload page HTML
function reloadPage() {
  location.reload();
}

// Load button reset score at page 
function loadButtonResetScore() {
  const section = document.querySelector('#buttons-section');
  const button = createButton(section);
  button.innerText = 'Reset Score';
  button.id = 'reset-score';
}

// Set item with key 'score' in Session Storage with value 0 and update score at HTML
function resetScore() {
  sessionStorage.setItem('score', 0);
  removeScore();
  loadScore();
};


// Load functions and event listeners at the window load
window.onload = function () {
  const container = document.querySelector('.main-page');
  const amountBalls = 6;
  loadRgbCode(container);
  loadScore();
  loadBalls(container, amountBalls)
  loadAnswer(container);
  loadButtonResetGame(container);
  loadButtonResetScore();
  const balls = document.querySelector('#balls-section');
  const buttonResetGame = document.querySelector('#reset-game');
  const buttonResetScore = document.querySelector('#reset-score');
  balls.addEventListener('click', checkAnswer);
  buttonResetGame.addEventListener('click', reloadPage);
  balls.addEventListener('click', checkSelectedBall);
  buttonResetScore.addEventListener('click', resetScore);
};
