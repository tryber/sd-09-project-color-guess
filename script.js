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
  const section = document.createElement('p');
  container.appendChild(section);
  return section;
}

// Load RGB code in HTML
function loadRgbCode() {
  const container = document.querySelector('.main-page');
  const section = createSection(container);
  section.id = 'rgb-color';
  section.innerText = `(${sortRgb()})`;
}

// Load functions and event listeners at the window load
window.onload = function () {
  loadRgbCode();
}