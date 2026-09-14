/* RemoteBox outbound-link registry.
 *
 * Вендорская ссылка:  <a data-out="rdpm" href="https://rdp.monster/">RDP Monster</a>
 * Партнёрский URL включается полем `affiliate` — тогда ссылка получает
 * rel="sponsored nofollow noopener" и на странице раскрывается дисклеймер.
 *
 * Пока ни одна программа не зарегистрирована, поэтому affiliate: null везде —
 * сайт отдаёт честные адреса, а не битые партнёрские ссылки.
 */
window.SITELINKS = {
  rdpm:      { url: "https://rdp.monster/",     affiliate: null },
  digitalocean: { url: "https://www.digitalocean.com/", affiliate: null },
  hetzner:   { url: "https://www.hetzner.com/", affiliate: null },
  vultr:     { url: "https://www.vultr.com/",   affiliate: null },
  contabo:   { url: "https://contabo.com/",     affiliate: null }
};

(function () {
  "use strict";

  function upgrade() {
    var registry = window.SITELINKS || {};
    var links = document.querySelectorAll("a[data-out]");
    var marked = 0;

    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var entry = registry[a.getAttribute("data-out")];
      if (!entry) { continue; }

      if (entry.affiliate) {
        a.href = entry.affiliate;
        a.rel = "sponsored nofollow noopener";
        marked++;
      } else {
        a.href = entry.url;
        a.rel = "noopener";
      }
      a.target = "_blank";
    }

    if (marked > 0) {
      var notes = document.querySelectorAll(".sponsored-note");
      for (var j = 0; j < notes.length; j++) { notes[j].hidden = false; }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", upgrade);
  } else {
    upgrade();
  }
})();
