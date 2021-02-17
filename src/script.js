function generateRandomValue() {
  const randonColorValue = Math.round(Math.random() * 255);

  return randonColorValue;
}

function paintTheBalls() {
  const ballsNodeList = document.querySelectorAll(".ball");

  ballsNodeList.forEach((ball) => {
    ball.style.backgroundColor = `rgb(${generateRandomValue()}, ${generateRandomValue()}, ${generateRandomValue()})`;
  });
}

function setTheCurrentColor() {
  const ballsNodeList = document.querySelectorAll(".ball");
  const randomBallIndex = Math.floor(Math.random() * ballsNodeList.length);
  const currentColorTextElement = document.querySelector("#rgb-color");

  currentColorTextElement.innerText =
    ballsNodeList[randomBallIndex].style.backgroundColor;
}

function listenToResetGameButton() {
  const resetGameButton = document.querySelector("#reset-game");
  const answerText = document.querySelector("#answer");

  resetGameButton.addEventListener("click", () => {
    paintTheBalls();
    setTheCurrentColor();
    answerText.innerText = "Escolha uma cor";
  });
}

function listenToBallsSection() {
  const ballsSection = document.querySelector(".balls");
  const currentColorTextElement = document.querySelector("#rgb-color");
  const scoreSpan = document.querySelector("#score");
  const answerText = document.querySelector("#answer");

  ballsSection.addEventListener("click", (event) => {
    if (event.target.className === "ball") {
      if (
        event.target.style.backgroundColor === currentColorTextElement.innerText
      ) {
        scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
        answerText.innerText = "Acertou!";

        paintTheBalls();
        setTheCurrentColor();
      } else {
        if (parseInt(scoreSpan.innerText) !== 0) {
          scoreSpan.innerText = parseInt(scoreSpan.innerText) - 1;
        }

        answerText.innerText = "Errou! Tente novamente!";

        paintTheBalls();
        setTheCurrentColor();
      }
    }
  });
}

window.onload = () => {
  paintTheBalls();
  listenToResetGameButton();
  setTheCurrentColor();
  listenToBallsSection();
};
