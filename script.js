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

function createParagraph(container) {
  const paragraph = document.createElement('p');
  container.appendChild(paragraph);
  return paragraph;
}

function loadRgbCode() {
  const container = document.querySelector('.rgb-section');
  const paragraph = createParagraph(container);
  paragraph.id = 'rgb-color';
  paragraph.innerText = `(${sortRgb()})`;
}

window.onload = function () {
  loadRgbCode();
}