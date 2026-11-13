/* Яндекс Метрика (счётчик 114228579): посещения + цель «download» — нажатие на ссылку установщика.
   Статистику видит только владелец счётчика в metrika.yandex.ru. */
(function (m, e, t, r, i, k, a) {
  m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
  m[i].l = 1 * new Date();
  for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
  k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=114228579", "ym");
ym(114228579, "init", {ssr: true, webvisor: true, clickmap: true, ecommerce: "dataLayer",
  referrer: document.referrer, url: location.href, accurateTrackBounce: true, trackLinks: true});
document.addEventListener("click", function (ev) {
  var a = ev.target && ev.target.closest && ev.target.closest('a[href$=".exe"]');
  if (a) ym(114228579, "reachGoal", "download");
});
