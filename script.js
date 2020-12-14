const title = document.querySelector('#rgb-color');
const ballContainer = document.querySelectorAll('.ball');
const guesser = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
const score = document.querySelector('#score');


function aleatoryNumber() {
    const number = Math.floor(Math.random() * 256);
    return number;
}
aleatoryNumber();

function colorGenerator() {
    let color = `rgb(${aleatoryNumber()}, ${aleatoryNumber()}, ${aleatoryNumber()})`;
    return color;
}
colorGenerator();

function addColor() {
    for (let i = 0; i < ballContainer.length; i += 1) {
      const insertColor = colorGenerator();
      ballContainer[i].style.backgroundColor = insertColor;
    }
}
addColor();


function rbgTitle() {
    const aleatorySelect = Math.floor(Math.random() * 5);
     title.innerText = ballContainer[aleatorySelect].style.backgroundColor;  
}
rbgTitle();

function guessColor() {
    let counter = 0;
    for (let i = 0; i < ballContainer.length; i += 1) {
        ballContainer[i].addEventListener('click', () => {
            const colorContainer = ballContainer[i].style.backgroundColor;
            const titleContent = title.innerText;

            switch (true) {
                case colorContainer === titleContent:
                    guesser.innerText = 'Acertou!';
                    counter += 3;
                    score.innerHTML = counter;
                    break;

                default:
                    guesser.innerText = 'Errou! Tente novamente!';
                    break;
            }
            launcher();
        })
    };
}
guessColor();

function resetGame() {
    resetBtn.addEventListener('click', () => {
        guesser.innerText = 'Escolha uma cor';
        launcher();
    })
}
resetGame();


function launcher() {
    addColor();
    rbgTitle();   
}
