const bolas = document.getElementsByClassName('ball');
const textoCor = document.getElementById('rgb-color');
const textoResposta = document.getElementById('answer');
const botaoReiniciar = document.getElementById('reset-game');
const placar = document.getElementById('score');
var numero = 0;
const cores = [];

function numeroAleatorio(mul) {
    const numero = Math.floor(Math.random() * mul);
    return numero;
};

function corAleatoria() {
    const rgb = `rgb(${numeroAleatorio(256)}, ${numeroAleatorio(256)}, ${numeroAleatorio(256)})`;
    return rgb;
}

placar.textContent = window.sessionStorage.getItem('score') || 0;
numero = parseInt(placar.textContent);

function cliqueNaBola(event) {
    const corSelecionada = event.target.style.backgroundColor;
    if (corSelecionada === textoCor.textContent) {
        textoResposta.textContent = "Acertou!";
        placar.textContent = numero = numero + 3;
        // aqui soma mais 3 para o placar...
    } else {
        textoResposta.textContent = "Errou! Tente novamente!";
        if (numero === 0) {
            numero = 1;
        }
        placar.textContent = numero = numero - 1;
    }
    window.sessionStorage.setItem('score', numero);
}

for (let bola = 0; bola < bolas.length; bola++) {
    const cor = corAleatoria();
    bolas[bola].style.backgroundColor = cor;
    cores[bola] = cor;
    botaoReiniciar.style.backgroundColor = corAleatoria();
    bolas[bola].addEventListener('click', cliqueNaBola);
}

function adicionarCorAleatoria(){
    textoCor.textContent = cores[numeroAleatorio(6)]
}

adicionarCorAleatoria();

function reiniciaJogo() {
    window.location.reload();
}

botaoReiniciar.addEventListener('click', reiniciaJogo);