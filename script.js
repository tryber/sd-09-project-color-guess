function colorRandom() {
  let random = 'rgb('
  random += `${Math.ceil(Math.random() * 255)}, `;
  random += `${Math.ceil(Math.random() * 255)}, `;
  random += `${Math.ceil(Math.random() * 255)}) `;
  return random;
}
colorRandom()

function colorPalette() {
  document.querySelector('#circle-one').style.backgroundColor = colorRandom();
  document.querySelector('#circle-two').style.backgroundColor = colorRandom();
  document.querySelector('#circle-three').style.backgroundColor = colorRandom();
  document.querySelector('#circle-four').style.backgroundColor = colorRandom();
  document.querySelector('#circle-five').style.backgroundColor = colorRandom();
  document.querySelector('#circle-six').style.backgroundColor = colorRandom();
}
colorPalette()

function randomText() {
  let text = document.querySelector('#rgb-color')
  let ball = document.querySelectorAll('.ball')
  let myArray = [];
  
  for (let index = 0; index < ball.length; index += 1) {
    myArray.push(ball[index].style.backgroundColor)
  }

  let textRandom = myArray[Math.floor(Math.random()*myArray.length)];

  text.innerText = textRandom.replace(/rgb/g,'');  
}
randomText();

function hitAndMiss() {
  let textHitAndMiss = document.querySelector('#answer')
  let ballHits = document.querySelectorAll('.ball')
  let text = document.querySelector('#rgb-color')

  for(let index = 0; index < ballHits.length; index += 1) {
  ballHits[index].addEventListener('click', function() {
      if (text.innerText === ballHits[index].style.backgroundColor.replace(/rgb/g,'')) {
        textHitAndMiss.innerText = 'Acertou!'
      } else {
        textHitAndMiss.innerText = 'Errou! Tente novamente!'
      }
    }
  )}
}
hitAndMiss();