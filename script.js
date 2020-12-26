function generateRgbColor() {
  let number;
  let rgbColor = '';
  for (let index = 1; index <= 3; index += 1) {
    number = Math.floor(Math.random() * 256);
      switch (index) {
        case 1:
          rgbColor = '(' + number;
          break;
        case 2:
          rgbColor += ', ' + number;
          break;
        case 3:
          rgbColor += ', ' + number + ')';
        }
  }
  return rgbColor;
}

window.onload = function() {
  const rgb = document.querySelector('#rgb-color');
  rgb.innerText = generateRgbColor();
};
