
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

function buttonFire() {
  const fire = document.getElementById('meme-image-container');
  if (fire.classList.value.includes('fire')) {
    fire.classList.remove('fire');
  } else {
    fire.classList.add('fire');
    fire.classList.remove('water', 'earth');
  }
}

function buttonWater() {
  const water = document.getElementById('meme-image-container');
  if (water.classList.value.includes('water')) {
    water.classList.remove('water');
  } else {
    water.classList.add('water');
    water.classList.remove('fire', 'earth');
  }
}

function buttonEarth() {
  const earth = document.getElementById('meme-image-container');
  if (earth.classList.value.includes('earth')) {
    earth.classList.remove('earth');
  } else {
    earth.classList.add('earth');
    earth.classList.remove('fire', 'water');
  }
}

function setMeme1() {
  let output = document.getElementById('output');
  if(output.src === 'http://127.0.0.1:5500/imgs/meme1.png') {
    output.setAttribute('src', '');
  } else {
    output.setAttribute('src','http://127.0.0.1:5500/imgs/meme1.png');
  }
}

function setMeme2() {
  let output = document.getElementById('output');
  let memes = document.getElementById('memeOutput');
  let divSrc = document.getElementById('meme-image');
  if(memes.src === 'http://127.0.0.1:5500/imgs/meme2.png') {
    memes.setAttribute('src', '');
    divSrc.setAttribute('src', '');
    output.setAttribute('src', '');
  } else {
    memes.src = 'http://127.0.0.1:5500/imgs/meme2.png';
    divSrc.setAttribute('src','http://127.0.0.1:5500/imgs/meme2.png');
    output.setAttribute('src','http://127.0.0.1:5500/imgs/meme2.png');
  }
}

function setMeme3() {
  let output = document.getElementById('output');
  let memes = document.getElementById('memeOutput');
  let divSrc = document.getElementById('meme-image');
  if(memes.src === 'http://127.0.0.1:5500/imgs/meme3.png') {
    memes.setAttribute('src', '');
    divSrc.setAttribute('src', '');
    output.setAttribute('src', '');
  } else {
    memes.src = 'http://127.0.0.1:5500/imgs/meme3.png';
    divSrc.setAttribute('src','http://127.0.0.1:5500/imgs/meme3.png');
    output.setAttribute('src','http://127.0.0.1:5500/imgs/meme3.png');
  }
}

function setMeme4() {
  let output = document.getElementById('output');
  let memes = document.getElementById('memeOutput');
  let divSrc = document.getElementById('meme-image');
  if(memes.src === 'http://127.0.0.1:5500/imgs/meme4.png') {
    memes.setAttribute('src', '');
    divSrc.setAttribute('src', '');
    output.setAttribute('src', '');
  } else {
    memes.src = 'http://127.0.0.1:5500/imgs/meme4.png';
    divSrc.setAttribute('src','http://127.0.0.1:5500/imgs/meme4.png');
    output.setAttribute('src','http://127.0.0.1:5500/imgs/meme4.png');
  }
}

function playFire() {
  let fire = document.getElementById('playFireBG');
  let water = document.getElementById('playWaterBG');
  let earth = document.getElementById('playEarthBG');
  if (fire.style.display === "block") {
    fire.style.display = "none";
    water.style.display = "none";
    earth.style.display = "none";
  } else {
    fire.style.display = "block";
    water.style.display = "none";
    earth.style.display = "none";
  }
  fire.play();
}

function playWater() {
  let fire = document.getElementById('playFireBG');
  let water = document.getElementById('playWaterBG');
  let earth = document.getElementById('playEarthBG');
  if (water.style.display === "block") {
    fire.style.display = "none";
    water.style.display = "none";
    earth.style.display = "none";
  } else {
    water.style.display = "block";
    fire.style.display = "none";
    earth.style.display = "none";
  }
  water.play();
}

function playEarth() {
  let fire = document.getElementById('playFireBG');
  let water = document.getElementById('playWaterBG');
  let earth = document.getElementById('playEarthBG');
  if (earth.style.display === "block") {
    fire.style.display = "none";
    water.style.display = "none";
    earth.style.display = "none";

  } else {
    earth.style.display = "block";
    water.style.display = "none";
    fire.style.display = "none";
  }
  earth.play();
}

function callListeners() {
  const textContainer = document.getElementById('text-input');
  textContainer.addEventListener('keyup', setInputText);
  const insertImage = document.getElementById('meme-insert');
  insertImage.addEventListener('change', loadInputedFile);
  const eventButtonFire = document.getElementById('fire');
  eventButtonFire.addEventListener('click', buttonFire);
  eventButtonFire.addEventListener('click', playFire);
  const eventButtonWater = document.getElementById('water');
  eventButtonWater.addEventListener('click', buttonWater);
  eventButtonWater.addEventListener('click', playWater);
  const eventButtonEarth = document.getElementById('earth');
  eventButtonEarth.addEventListener('click', buttonEarth);
  eventButtonEarth.addEventListener('click', playEarth);
  const firstButtonMeme = document.getElementById('meme-1');
  firstButtonMeme.addEventListener('click', setMeme1);
  const secondButtonMeme = document.getElementById('meme-2');
  secondButtonMeme.addEventListener('click', setMeme2);
  const thirdButtonMeme = document.getElementById('meme-3');
  thirdButtonMeme.addEventListener('click', setMeme3);
  const fourthButtonMeme = document.getElementById('meme-4');
  fourthButtonMeme.addEventListener('click', setMeme4);
}

window.onload = function() {
  callAllStructure();
  callListeners();
}

