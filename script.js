
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

function createTextOnContainer() {
  const memeText = document.createElement('p');
  memeText.id = 'meme-text';
  document.getElementById('meme-image-container').appendChild(memeText);
}

function createInputImage() {
  const inputImage = document.createElement('input');
  inputImage.id = 'meme-insert';
  inputImage.type = 'file', accept="image/*";
  document.getElementById('meme-image-container').appendChild(inputImage);
}

function createImageCountainer() {
  const imageContainer = document.createElement('div');
  imageContainer.id = 'meme-image';
  document.getElementById('meme-image-container').appendChild(imageContainer);
}

function createImgOutput() {
  const img = document.createElement('img');
  img.id = 'output';
  img.src = '';
  document.getElementById('meme-image').appendChild(img);
}

function createMemeImage() {
  const memeImg = document.createElement('img');
  memeImg.id = 'memeOutput';
  memeImg.src = '';
  document.getElementById('meme-image').appendChild(memeImg);
}

function createSectionForAllBtnMemes() {
  const buttonMemesSection = document.createElement('section');
  buttonMemesSection.id = 'allMemes';
  document.body.appendChild(buttonMemesSection);
}

function createSectionForBtns() {
  const buttonBorderSection = document.createElement('section');
  buttonBorderSection.id = 'allBorderButtons';
  document.body.appendChild(buttonBorderSection);
}
