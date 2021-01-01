function createStructure() {
  const bodyChild = document.querySelector('body');
  const mainSection = document.createElement('section');
  bodyChild.appendChild(mainSection);

  const mainTitle = document.createElement('h1');
  mainTitle.innerHTML = 'Can you guess the color?'
  mainTitle.id = 'title'
  mainSection.appendChild(mainTitle);
}

window.onload = function() {
  createStructure()

}