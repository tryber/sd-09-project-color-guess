function createStructure() {
  const bodyChild = document.querySelector('body');
  const mainSection = document.createElement('section');
  bodyChild.appendChild(mainSection);

  const mainTitle = document.createElement('h1');
  mainTitle.innerHTML = 'Can you guess the color?';
  mainTitle.id = 'title';
  mainSection.appendChild(mainTitle);

  const rgbText = document.createElement('h3');
  rgbText.innerHTML = generateRandomRGB();
  rgbText.id = 'rgb-color';
  mainSection.appendChild(rgbText);

  const placar = document.createElement('p')
  placar.innerHTML = `Placar: ${score()}`
  placar.id = 'score'
  mainSection.appendChild(placar)
}

function generateRandomRGB() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);  
  return `(${r}, ${g}, ${b})`; 
}

function score() {
  return Math.random()*10
}




window.onload = function() {
  createStructure();
  generateRandomRGB();
}
