
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

function createBtnFire() {
  const buttonFire = document.createElement('button');
  buttonFire.id = 'fire';
  buttonFire.innerHTML = 'Set Fire';
  buttonFire.style.backgroundColor = 'red';
  document.getElementById('allBorderButtons').appendChild(buttonFire);
}

function createBtnWater() {
  const buttonWater = document.createElement('button');
  buttonWater.id = 'water';
  buttonWater.innerHTML = 'Float in Water';
  buttonWater.style.backgroundColor = 'blue';
  document.getElementById('allBorderButtons').appendChild(buttonWater);
}

function createBtnEarth() {
  const buttonEarth = document.createElement('button');
  buttonEarth.id = 'earth';
  buttonEarth.innerHTML = 'Feel the Nature';
  buttonEarth.style.backgroundColor = 'green';
  document.getElementById('allBorderButtons').appendChild(buttonEarth);
}

function createBtnsTitle() {
  const sectionText = document.createElement('p');
  sectionText.className = 'elements';
  sectionText.innerHTML = 'Choose your Element';
  document.getElementById('allBorderButtons').appendChild(sectionText);
}

function createMemeBtns() {
  for(let index = 0; index < 4; index += 1) {
    let buttonMeme = document.createElement('button');
    buttonMeme.id = `meme-${[index]}`;
    buttonMeme.className = `meme-${[index]}`;
    document.getElementById('allMemes').appendChild(buttonMeme);
  }
}

function createElementsBtns() {
createBtnFire();
createBtnWater();
createBtnEarth();
createBtnsTitle();
}

function createStructure() {
  createMainTitle();
  createTextInput();
  createInputImage();
  createTextOnContainer();
  createImageCountainer();
  createImgOutput();
  createMemeImage();
  createSectionForAllBtnMemes();
  createSectionForBtns();
}


function callAllStructure() {
  createStructure();
  createElementsBtns();
  createMemeBtns();
}

function setInputText() {
  const textInputed = document.getElementById('text-input');
  let textContainer = document.getElementById('meme-text');
  if(textInputed.value !== '') {
    textContainer.innerText = textInputed.value;
  }
}
function loadInputedFile(event) {
  let output = document.getElementById('output');
  let memeOutput = document.getElementById('memeOutput');
  let divSrc = document.getElementById('meme-image');
  if(output !== '') {
    output.src = URL.createObjectURL(event.target.files[0]);
    memeOutput.setAttribute('src', '');
    divSrc.setAttribute('src', '');
  } else {
    output.onload = function() {
      URL.revokeObjectURL(output.src);
    }
  }
}

function callListeners() {
  const textContainer = document.getElementById('text-input');
  textContainer.addEventListener('keyup', setInputText);
  const insertImage = document.getElementById('meme-insert');
  insertImage.addEventListener('change', loadInputedFile);
}

window.onload = function() {
  callAllStructure();
  callListeners();

}

