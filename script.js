

function aleatoryNumber() {
    const number = Math.floor(Math.random()*256)
    return number;
}
aleatoryNumber();

function colorGenerator() {
    const color = `rgb(${aleatoryNumber()}, ${aleatoryNumber()}, ${aleatoryNumber()})`
    return color;
}
colorGenerator();

function addColor() {
    let ball = document.querySelectorAll('.ball');

    for(let i = 0; i < ball.length; i++) {
        let insertColor = colorGenerator()
        ball[i].style.backgroundColor = insertColor;
    }
}
addColor();

function rbgTitle() {
    let title = document.querySelector('#rgb-color');
    let colorContainer = document.querySelectorAll('.ball');
    let aleatorySelect = Math.floor(Math.random()* 5);

    title.innerText = colorContainer[aleatorySelect].style.backgroundColor;
    
}
rbgTitle();

