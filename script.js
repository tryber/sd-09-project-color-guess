function createDivsBall(n) {
  for (let i = 0; i < n; i += 1) {
    const divContainerBall = document.querySelector('#conteiner-ball');
    const divBall = document.createElement('div');
    divBall.className = 'ball';
    divContainerBall.appendChild(divBall);
  }
}

function colorRandom(n) {
  const rgbColorlist = [];
  for (let i = 0; i < n; i += 1) {
    const rgbColor = [];
    for ( let j = 0; j < 3; j += 1) {
      rgbColor.push(Math.floor(Math.random() * 256));
    }
    rgbColorlist.push(rgbColor);
  }
  return rgbColorlist;
}

function colorBalls() {
  const arrayBalls = document.querySelectorAll('.ball');
  const rgbColorlist = colorRandom(arrayBalls.length);
  for (let i = 0; i < arrayBalls.length; i += 1) {
    arrayBalls[i].style.backgroundColor = `rgb(${rgbColorlist[i]})`;
  }
  return rgbColorlist;
}

function reset() {
  colorBalls();
  colorToFind()
}

function createBalls(amount) {
  createDivsBall(amount);
  colorRandom(amount);
  colorBalls();
  colorToFind()

}

function colorToFind() {
  const textColorToFind = document.querySelector('#rgb-color');
  const colorList = colorBalls();
  textColorToFind.innerHTML =  `(${colorList[Math.floor(Math.random() * 6 )]})`;
}
createBalls(6);

const btnReset = document.querySelector('#reset-game');
btnReset.addEventListener('click', reset);


