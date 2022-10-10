async function navigateTo(route, button) {
  const content = document.getElementById('app');
  if (button) {
    const actualActive = document.querySelectorAll('.active-link');
    actualActive.forEach((actual) => actual.classList.remove('active-link'));
    button.classList.add('active-link');
  } else {
    const actualActive = document.querySelectorAll('.active-link');
    actualActive.forEach((actual) => actual.classList.remove('active-link'));
    document.getElementById('homeBtn').classList.add('active-link');
  }

  const file = await fetch(route);
  const html = await file.text();

  content.innerHTML = html;

  const jsModule = await import(`${route.replace('html', 'js')}`);
  jsModule.init();
}

navigateTo('./views/inicio/inicio.html');


// FONT-SIZE
let fontLvl = 1;

function increaseFont() {
  const fonts = document.querySelectorAll('.dyn-font');
  if (fontLvl >= 3) return;
  fontLvl++;
  for (const i in fonts) {
    const element = fonts[i];
    if (typeof fonts[i] != 'object') return;
    const compStyles = window.getComputedStyle(element);
    const fs = compStyles.getPropertyValue('font-size');
    element.style.fontSize = `${parseFloat(fs) + 5}px`;
  }
}

function decreaseFont() {
  const fonts = document.querySelectorAll('.dyn-font');
  if (fontLvl <= 1) return;
  fontLvl--;
  for (const i in fonts) {
    const element = fonts[i];
    if (typeof fonts[i] != 'object') return;
    const compStyles = window.getComputedStyle(element);
    const fs = compStyles.getPropertyValue('font-size');
    element.style.fontSize = `${parseFloat(fs) - 5}px`;
  }
}

// ALTO CONTRAST
const Contrast = {
  storage: 'contrastState',
  cssClass: 'contrast',
  currentState: null,
  check: checkContrast,
  getState: getContrastState,
  setState: setContrastState,
  toogle: toogleContrast,
  updateView: updateViewContrast
};

window.toggleContrast = function () { Contrast.toogle(); };

Contrast.check();

function checkContrast() {
  this.updateView();
}

function getContrastState() {
  return localStorage.getItem(this.storage) === 'true';
}

function setContrastState(state) {
  localStorage.setItem(this.storage, '' + state);
  this.currentState = state;
  this.updateView();
}

function updateViewContrast() {
  var body = document.body;
  
  if (!body) return;

  if (this.currentState === null)
      this.currentState = this.getState();

  if (this.currentState)
      body.classList.add(this.cssClass);
  else
      body.classList.remove(this.cssClass);
}

function toogleContrast() {
  this.setState(!this.currentState);
  if(this.currentState) {
    document.getElementById('logo').src = './img/logo_high_contrast.svg';
  } else {
    document.getElementById('logo').src = './img/logo.svg';
  }
}

// ZOOM NAS IMAGENS

