function createStructure() {
  const bodyChild = document.querySelector('body');
  const mainSection = document.createElement('section');
  mainSection.id = 'mainSection';
  mainSection.className = 'mainSection'
  bodyChild.appendChild(mainSection);

  const mainTitle = document.createElement('h1');
  mainTitle.innerHTML = '🎨 Can you guess the color? 🎨';
  mainTitle.id = 'title';
  mainTitle.className = 'title';
  mainSection.appendChild(mainTitle);

  const rgbText = document.createElement('h3');
  rgbText.id = 'rgb-color';
  rgbText.className = 'rgb-color'
  mainSection.appendChild(rgbText);
  
  const placar = document.createElement('p');
  placar.innerHTML = 'Placar: 0';
  placar.id = 'score';
  placar.className = 'score'
  mainSection.appendChild(placar);

  const colorButtons = document.createElement('section');
  colorButtons.id = 'colorsSection';
  colorButtons.className = 'colorSection';
  mainSection.appendChild(colorButtons);

  const dinamicText = document.createElement('p');
  dinamicText.innerHTML = 'Escolha uma cor';
  dinamicText.id = 'answer';
  mainSection.appendChild(dinamicText);

  const sectionChangeGame = document.createElement('section');
  sectionChangeGame.id = 'dificult-reset';
  sectionChangeGame.className = 'dificult-reset';
  mainSection.appendChild(sectionChangeGame);

  const buttonDificult = document.createElement('button');
  buttonDificult.id = 'buttonDificult';
  buttonDificult.innerHTML = 'Dificult';
  buttonDificult.className = 'changeGameButtons';
  sectionChangeGame.appendChild(buttonDificult);

  const inputDificult = document.createElement('select');
  inputDificult.id = 'changeDificult';
  inputDificult.className = 'changeDificult';  
  sectionChangeGame.appendChild(inputDificult);

  const buttonReset = document.createElement('button');
  buttonReset.id = 'reset-game';
  buttonReset.className = 'changeGameButtons'
  buttonReset.innerHTML = 'Reset Game';
  sectionChangeGame.appendChild(buttonReset);
}
//  cria os 6 circulos iniciais
let base = 6;
function createCircle() {
  for(let index = 0; index < base; index += 1) {
    const div = document.createElement('div');
    div.className = 'ball';
    document.getElementById('colorsSection').appendChild(div);
  }
}
//  adiciona cor e listeners aos circulos
function addColorAndEventsToCircles() {
  const allBalls = document.getElementsByClassName('ball');
  for(let index = 0; index < allBalls.length; index += 1) {
    allBalls[index].style.backgroundColor = `rgb${generateRandomRGB()}`;
    allBalls[index].addEventListener('click', checkAnswer);
    allBalls[index].addEventListener('click', inputScore);
  }
}
//  gera cores randomicas excluindo 'rgb' somente com os números
function generateRandomRGB() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  return `(${r}, ${g}, ${b})`;
}
//  adiciona valor ao placar conforme resultado do jogo
let result = 0;
function inputScore() {
  let checkResult = document.getElementById('answer');
  let checkScore = document.getElementById('score');
  if(checkResult.innerText === 'Acertou!') {
    result +=  3;
    checkScore.innerText = `Placar: ${result}`;
  } else if (checkResult.innerText === 'Errou! Tente novamente!') {
    result -=  1;
    checkScore.innerText = `Placar: ${result}`;
  }
}
//  gera um numero aleatorio entre 0 e 5 e aplica como indice do circulo para retornar um rgb de seleção aleatoria
function random(min, max) {
  let teste = document.getElementsByClassName('ball');
  min = Math.ceil(0);
  max = Math.floor(6);
  let result = Math.floor(Math.random() * (max - min)) + min;
  return teste[result].style.backgroundColor.slice(3)
}
//  aplica resultado da função random retirando 3 primeiros characteres
function setRgbTextToGuess() {
  const rgbText = document.getElementById('rgb-color');
  rgbText.innerHTML = random();
}
//  função com listeners para cada botão, essa função deve verificar innerHtml de h3 se é = o botão apertado
function checkAnswer(event) {
  let pressedButton = event.target.style.backgroundColor.slice(3);
  let checkResult = document.getElementById('rgb-color');
  let printResult = document.getElementById('answer');
  if(pressedButton === checkResult.innerText) {
    printResult.innerHTML = 'Acertou!';
  } else {
    printResult.innerHTML = 'Errou! Tente novamente!';
  }
}
// reinicia as cores do jogo
function resetGame() {
  let resetColors = document.getElementsByClassName('ball');
  for(let index = 0; index < resetColors.length; index += 1 ) {
    resetColors[index].style.backgroundColor = `rgb${generateRandomRGB()}`;
  }
  setRgbTextToGuess();
  document.getElementById('answer').innerHTML = 'Escolha uma cor';
}
// criando opções para seletor de dificuldade
let dificultLevels = 5
function chooseDificult() {  
  for(let index = 0; index < dificultLevels; index += 1) {
    let chooserOptions = document.createElement('option');
    chooserOptions.className = 'dificultNames';    
    document.getElementById('changeDificult').appendChild(chooserOptions);  
  }
  setNameOnDificult()  
}
//  incrementando valor e nomes as dificuldades
function setNameOnDificult() {
  let setNames = document.getElementsByClassName('dificultNames')
  for(let index = 0; index < setNames.length; index += 1) {
    setNames[0].innerHTML = 'very easy'
    setNames[0].value = 0 
    setNames[1].innerHTML = 'easy'
    setNames[1].value = 6 
    setNames[2].innerHTML = 'medium'
    setNames[2].value = 12 
    setNames[3].innerHTML = 'hard'
    setNames[3].value = 18
    setNames[4].innerHTML = 'very hard'
    setNames[4].value = 24 
  }
}
//  selecionar value pra aplicar como base para dificuldade
function getSelected() {
  let chooser = document.getElementById('changeDificult');
  let chooserValue = chooser.options[chooser.selectedIndex];
  return chooserValue.value;
}
//  função não está funcionando corretamente, 'color to guess esta selecionando somente 6 primeiros circulos
//  função esta somando numero de circulos ao inves de alterar o numero de circulos
//  função para aplicar dificuldade
function aplySelected() {
base = getSelected();
setRgbTextToGuess();
createCircle();
addColorAndEventsToCircles();
resetGame();
}

function listeners() {
  const buttonReset = document.getElementById('reset-game');
  buttonReset.addEventListener('click', resetGame);
  const buttonDificult = document.getElementById('buttonDificult');
  buttonDificult.addEventListener('click', aplySelected);
}

window.onload = function() {
  createStructure();  
  createCircle();
  inputScore();
  addColorAndEventsToCircles();
  generateRandomRGB();
  setRgbTextToGuess();
  listeners();
  chooseDificult();  
};
