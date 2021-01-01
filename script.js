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

  const colorButtons = document.createElement('nav');
  mainSection.appendChild(colorButtons);

  const buttonColor1 = document.createElement('button');
  buttonColor1.className = 'ball';
  buttonColor1.style.backgroundColor = `rgb${generateRandomRGB()}`;  
  colorButtons.appendChild(buttonColor1)
  const buttonColor2 = document.createElement('button');
  buttonColor2.className = 'ball';
  buttonColor2.style.backgroundColor = `rgb${generateRandomRGB()}`;  
  colorButtons.appendChild(buttonColor2)
  const buttonColor3 = document.createElement('button');
  buttonColor3.className = 'ball';
  buttonColor3.style.backgroundColor = `rgb${generateRandomRGB()}`;  
  colorButtons.appendChild(buttonColor3)
  const buttonColor4 = document.createElement('button');
  buttonColor4.className = 'ball';
  buttonColor4.style.backgroundColor = `rgb${generateRandomRGB()}`;  
  colorButtons.appendChild(buttonColor4)
  const buttonColor5 = document.createElement('button');
  buttonColor5.className = 'ball';
  buttonColor5.style.backgroundColor = `rgb${generateRandomRGB()}`;  
  colorButtons.appendChild(buttonColor5)
  const buttonColor6 = document.createElement('button');
  buttonColor6.className = 'ball';
  buttonColor6.style.backgroundColor = `rgb${generateRandomRGB()}`;  
  colorButtons.appendChild(buttonColor6)
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
