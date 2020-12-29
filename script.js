// Sort a rgb code
function sortRgb() {
  const rgbArray = [];
  for (let index = 0; index < 3; index += 1) {
    if (index === 0) {
      rgbArray.push(Math.round(Math.random() * 255));
    } else {
      rgbArray.push(` ${Math.round(Math.random() * 255)}`);
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

// Load RGB code in HTML
function loadRgbCode(container) {
  const section = createSection(container);
  section.id = 'rgb-color';
  section.innerText = `(${sortRgb()})`;
}

function loadBalls(container, amount) {
  for(let index = 0; index < amount; index += 1){
    const section = createSection(container);
    section.className = 'ball';
    section.style.backgroundColor = `rgb(${sortRgb()})`;
  }
}

// Load functions and event listeners at the window load
window.onload = function () {
  const container = document.querySelector('.main-page');
  const amountBalls = 6;
  loadRgbCode(container);
  loadBalls(container, amountBalls)
}