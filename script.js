window.onload = function(){
    //  Gerando divs com cores aleatórias
    let colorsDiv = document.getElementById('colors');
    for(let index = 0; index < 6; index += 1){
        let divElement = document.createElement('div');
        divElement.className = 'ball';
        divElement.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
        colorsDiv.appendChild(divElement);
    };

    randomColor();
}

// Injetando rgb aleatório no parágrafo
function randomColor(){
    let colorsList = document.querySelectorAll('.ball');
    let rgbColor = document.getElementById('rgb-color');
    rgbColor.innerText = colorsList[Math.floor(Math.random() * 6)].style.backgroundColor;
}


let points = 0;

// Função jogar
function play(){
    let ballClick = document.querySelector('#colors');
    ballClick.addEventListener('click', function(event){
        let eventRgb = event.target.style.backgroundColor;
        let answer = document.querySelector('#rgb-color').innerText;
        if (eventRgb === answer){
            document.querySelector('#right-wrong').innerText = 'Acertou!';
            points += 3;
            document.querySelector('#score').innerText = `Pontos: ${points}`;
        } else {
            document.querySelector('#right-wrong').innerText = 'Errou! Tente novamente!';
        }
    });
};

play();

// Função resetar jogo
function resetGame(){
    let resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', function(){
        let listOfColors = document.querySelectorAll('.ball');
        for(let index = 0; index < 6; index += 1){
            listOfColors[index].style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
        }
        randomColor();
    });
};

resetGame();