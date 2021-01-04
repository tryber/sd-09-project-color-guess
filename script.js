function buildTitle() {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Advinhe a cor 😎';
  document.body.appendChild(title);
}

window.onload = function () {
  buildTitle();
}
