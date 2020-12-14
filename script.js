const title = document.querySelector('#rgb-color');
const ballContainer = document.querySelectorAll('.ball');
const guesser = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
let score = document.querySelector('#score')


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
    for(let i = 0; i < ballContainer.length; i++) {
        let insertColor = colorGenerator()
        ballContainer[i].style.backgroundColor = insertColor;
    }
}
addColor();


function rbgTitle() {
    let aleatorySelect = Math.floor(Math.random()* 5);
    title.innerText = ballContainer[aleatorySelect].style.backgroundColor;  
}
rbgTitle();

function guessColor() {
    for(let i = 0; i < ballContainer.length; i++) {
        ballContainer[i].addEventListener('click', () => {
            let colorContainer = ballContainer[i].style.backgroundColor;
            let titleContent = title.innerText;

            switch(titleContent) {
                case colorContainer:
                    guesser.innerText = 'Acertou!';
                    break;

                case colorContainer:
                    guesser.innerText = 'Errou! Tente novamente!';
                    break;
     
            }
            launcher();
        })
    }
}
guessColor();

function resetGame() {
    resetBtn.addEventListener('click', ()=> {
        guesser.innerText = 'Escolha uma cor';
        score.innerHTML = 0
        launcher();
    })
}
resetGame();

function scoreCounter() {
    let counter = 0
    for(let i = 0; i < ballContainer.length; i++) {
        ballContainer[i].addEventListener('click', () => {
            let colorContainer = ballContainer[i].style.backgroundColor;
            let titleContent = title.innerText;
            switch(titleContent) {
                case colorContainer:
                    console.log(counter)
                    counter++;
                    score.innerHTML = counter;
                    break;
            }
        })
    }

}
scoreCounter();


function launcher() {
    addColor();
    rbgTitle();   
}

