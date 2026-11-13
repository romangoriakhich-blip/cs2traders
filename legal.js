// Язык страницы документов: тот же, что выбран на главной (localStorage cs2t_lang); китайский — английская версия.
(function () {
  let l = 'ru';
  try { l = localStorage.getItem('cs2t_lang') || ''; } catch (e) { l = ''; }
  if (!l) l = (navigator.language || 'ru').toLowerCase().startsWith('ru') ? 'ru' : 'en';
  function set(x) {
    document.documentElement.lang = x === 'ru' ? 'ru' : 'en';
    document.querySelectorAll('.langs button').forEach(b => b.classList.toggle('on', b.dataset.v === (x === 'ru' ? 'ru' : 'en')));
    try { localStorage.setItem('cs2t_lang', x); } catch (e) {}
  }
  document.querySelectorAll('.langs button').forEach(b => b.onclick = () => set(b.dataset.v));
  set(l);
})();
