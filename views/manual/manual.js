const topicos = ['w3c', 'visu', 'api'];

export function init() {
  loadEvents();
  fetch(`./views/manual/topicos/w3c.html`)
    .then((response) => response.text())
    .then((html) => {
      document.querySelector('#topico').innerHTML = html;
    });
}

function loadEvents() {
  [].slice.call(document.querySelectorAll('.btn-topico')).forEach(function (btn) {
    btn.addEventListener('click', loadTopico);
  });
}

function loadTopico() {
  const id = this.id;
  const url = `./views/manual/topicos/${id}.html`;

  if (topicos.indexOf(id) === -1) return;

  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.querySelector('#topico').innerHTML = html;
    });
}
