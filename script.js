function addTitle() {
  const header = document.querySelector("header");
  const title = document.createElement("h1");
  title.id = "title";
  title.innerText = "Color Guess!!";
  header.appendChild(title);
}

window.onload = function () {
  addTitle();
};
