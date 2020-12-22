function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

function colorText() {
    const color = document.querySelector('#rgb-color');
    color.innerHTML = `(${hexToRgb(randomColor())})`;
}
colorText();
