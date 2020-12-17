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