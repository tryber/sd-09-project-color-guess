window.onload = function(){
    //  Gerando divs com cores aleatórias
    let colorsDiv = document.getElementById('colors');
    for(let index = 0; index < 6; index += 1){
        let divElement = document.createElement('div');
        divElement.className = 'ball';
        divElement.style.backgroundColor = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
        colorsDiv.appendChild(divElement);
    };

    // Injetando rgb aleatório no parágrafo
    let colorsList = document.querySelectorAll('.ball');
    let rgbColor = document.getElementById('rgb-color');
    rgbColor.innerText = colorsList[Math.floor(Math.random() * 6)].style.backgroundColor;
}