export function init(navigateTo) {
  [].slice.call(document.querySelectorAll('.btn-manual')).forEach(function (el) {
    el.addEventListener('click', () => navigateTo('./views/manual/manual.html', document.getElementById('manualBtn')));
  });

  document
    .getElementById('verManual')
    .addEventListener('click', () => navigateTo('./views/manual/manual.html', document.getElementById('manualBtn')));

  document
    .getElementById('verForm')
    .addEventListener('click', () => navigateTo('./views/teste/teste.html', document.getElementById('testeBtn')));

  document
    .getElementById('verForum')
    .addEventListener('click', () => navigateTo('./views/forum/forum.html', document.getElementById('forumBtn')));
}
