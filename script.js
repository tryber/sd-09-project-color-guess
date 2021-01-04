const ball = document.querySelectorAll('.ball');
const text = document.querySelector('#answer');
const rgbText = document.querySelector('#rgb-color');

function coloringCircles() {
    for (let index = 0; index < ball.length; index += 1) {
        let rNumber = Math.floor(Math.random() * 256);
        let gNumber = Math.floor(Math.random() * 256);
        let bNumber = Math.floor(Math.random() * 256);
        ball[index].style.backgroundColor = `rgb(${rNumber}, ${gNumber}, ${bNumber})`;
    }
}
coloringCircles();

function randomRGBText() {
    let rNum = Math.floor(Math.random() * 256);
    let gNum = Math.floor(Math.random() * 256);
    let bNum = Math.floor(Math.random() * 256);
    rgbText.innerText = `(${rNum}, ${gNum}, ${bNum})`;
}
randomRGBText();

function initialMessage() {
    text.innerText = 'Escolha uma cor';
}
initialMessage();

function messageAboutEachColor(event) {
        if (event.target.style.backgroundColor !== rgbText.innerText) {
            text.innerText = 'Errou! Tente novamente!';
        } else {
            text.innerText = 'Acertou!';
        }
}
for (let index = 0; index < ball.length; index += 1) {
    ball[index].addEventListener('click', messageAboutEachColor);
}
