/* boot.js
   Runs the fake startup screen once per browser session, then gets out of
   the way. sessionStorage means it plays again on the next visit (new tab
   or after closing the browser), but not every time you click a nav tab. */
(function () {
  var boot = document.getElementById('boot-screen');
  if (!boot) return;

  var seen;
  try { seen = sessionStorage.getItem('bootSeen'); } catch (e) { seen = null; }
  if (seen) { boot.remove(); return; }

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var done = false;
  function finish() {
    if (done) return;
    done = true;
    try { sessionStorage.setItem('bootSeen', '1'); } catch (e) {}
    boot.classList.add('boot-done');
    setTimeout(function () { boot.remove(); }, 400);
  }

  if (reduceMotion) { finish(); return; }

  boot.addEventListener('click', finish);
  document.addEventListener('keydown', finish, { once: true });
  setTimeout(finish, 1800);
})();
