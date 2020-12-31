function opcoesCores(param) {
    let colorPallette = document.querySelector('.tableColor');
    for (let key = 0; key < param; key += 1) {
      let colunaPallete = document.createElement('button');
      colunaPallete.className = 'ball';
        const cor = 'rgb(' + Math.floor(Math.random(255) * (255 + 1)) + ',' + Math.floor(Math.random(255) * (255 + 1)) + ',' + Math.floor(Math.random(255) * (255 + 1)) + ')';
        colunaPallete.style.backgroundColor = `${cor}`;
        colunaPallete.id = `${cor}`;
        colorPallette.appendChild(colunaPallete);
        }
      
      colorPallette.appendChild(colunaPallete);
}
  opcoesCores(6);