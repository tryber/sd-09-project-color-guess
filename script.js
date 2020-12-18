function createBalls(n) {
  for (let i = 0; i < n; i += 1) {
    const divContainerBall = document.querySelector('#conteiner-ball');
    const divBall = document.createElement('div');
    divBall.className = 'ball';
    divContainerBall.appendChild(divBall);
  }
}

createBalls(6)

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

colorRandom(6);

function colorBalls() {
  const arrayBalls = document.querySelectorAll('.ball');
  const rgbColorlist = colorRandom(arrayBalls.length);
  for (let i = 0; i < arrayBalls.length; i += 1) {



  }
}

colorBalls();