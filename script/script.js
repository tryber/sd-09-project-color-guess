const bolas = document.getElementsByClassName('ball');
const textoCor = document.getElementById('rgb-color');
const textoResposta = document.getElementById('answer');
const botaoReiniciar = document.getElementById('reset-game');
const placar = document.getElementById('score');
const caixa = document.querySelector('.div-still');
let numero = 0;
const cores = [];

function numeroAleatorio(mul) {
  const numero = Math.floor(Math.random() * mul);
  return numero;
};

function corAleatoria() {
  const rgb = `rgb(${numeroAleatorio(256)}, ${numeroAleatorio(256)}, ${numeroAleatorio(256)})`;
  return rgb;
}

function bordaCaixa() {
  caixa.style.border = `10px solid ${corAleatoria()}`;
}
bordaCaixa();

placar.textContent = window.sessionStorage.getItem('score') || 0;
numero = parseInt(placar.textContent);

function cliqueNaBola(event) {
  const corSelecionada = event.target.style.backgroundColor;
  if (corSelecionada === textoCor.textContent) {
    textoResposta.textContent = "Acertou!";
    caixa.style.border = `10px solid rgb(33 193 53)`;
    numero += 3;
    placar.textContent = numero;
    // aqui soma mais 3 para o placar...
  } else {
    textoResposta.textContent = "Errou! Tente novamente!";
    caixa.style.border = `10px solid rgb(193 33 33)`;
    if (numero === 0) {
      numero = 1;
    }
    placar.textContent = numero -= 1;
  }
  window.sessionStorage.setItem('score', numero);
}

  for (let bola = 0; bola < bolas.length; bola += 1) {
  const cor = corAleatoria();
  bolas[bola].style.backgroundColor = cor;
  cores[bola] = cor;
    // botaoReiniciar.style.backgroundColor = corAleatoria();
    bolas[bola].addEventListener('click', cliqueNaBola);
  }

function adicionarCorAleatoria(){
  textoCor.textContent = cores[numeroAleatorio(6)];
}
adicionarCorAleatoria();

function reiniciaJogo() {
  window.location.reload();
}
botaoReiniciar.addEventListener('click', reiniciaJogo);
