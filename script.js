
function createMainTitle() {
  const createTitle = document.createElement('h1');
  createTitle.innerText = 'Meme Generator';
  document.getElementById('meme-image-container').appendChild(createTitle);
}

function createTextInput() {
  const createInput = document.createElement('input');
  createInput.id = 'text-input';
  createInput.type = 'text';
  createInput.maxLength = 60;
  document.getElementById('meme-image-container').appendChild(createInput);
}
