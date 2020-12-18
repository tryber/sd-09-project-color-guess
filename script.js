function createBalls(n) {
  for (let i = 0; i < n; i += 1) {
    const divContainerBall = document.querySelector('#conteiner-ball');
    const divBall = document.createElement('div');
    divBall.className = 'ball';
    divContainerBall.appendChild(divBall);
  }
}