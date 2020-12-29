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

// Load RGB code in HTML
function loadRgbCode(container) {
  const section = createSection(container);
  section.className = 'sections';
  const paragraph = createParagraph(section);
  paragraph.id = 'rgb-color';
  paragraph.innerText = `(${GenerateRandomRgb()})`;
}

// Define the background color of balls(div)
function setBackgroundColor(ball, index, draw) {
  const rgbColor = `rgb${document.querySelector('#rgb-color').innerText}`;
  if (index === draw){
    ball.style.backgroundColor = rgbColor;
  } else {
    ball.style.backgroundColor = `rgb(${GenerateRandomRgb()})`;
  }
}

// Load Balls (divs elements) in HTML
function loadBalls(container, amount) {
  const section = createSection(container);
  const numberDraw = Math.floor(Math.random() * amount);
  section.className = 'sections';
  for(let index = 0; index < amount; index += 1){
    const ball = createDiv(section);
    ball.className = 'ball';
    setBackgroundColor(ball, index, numberDraw);
  }
}

// Load a element p in HTML with answer text
function loadAnswer(container) {
  const section = createSection(container);
  section.className = 'sections';
  const paragraph = createParagraph(section);
  paragraph.innerText = 'Escolha uma cor';
  paragraph.id = 'answer';
}

// Check if the selected ball is the correct
function checkAnswer(event) {
  if (event.target.className === 'ball'){
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

// Load functions and event listeners at the window load
window.onload = function () {
  const container = document.querySelector('.main-page');
  const amountBalls = 6;
  loadRgbCode(container);
  loadBalls(container, amountBalls)
  loadAnswer(container);
  document.querySelectorAll('.sections')[1].addEventListener('click', checkAnswer);
}