function randomColor () {
  // Arredondar para baixo para não cair no branco
  rComponent = Math.floor(Math.random()*255);
  gComponent = Math.floor(Math.random()*255);
  bComponent = Math.floor(Math.random()*255);
  return `(${rComponent}, ${gComponent}, ${bComponent})`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}

window.onload = function () {
  const mainContent = document.querySelector('.main-content');
  const rgbColor = document.createElement('p');
  rgbColor.id = 'rgb-color';
  rgbColor.innerText = randomColor();
  mainContent.appendChild(rgbColor);
}
