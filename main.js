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
