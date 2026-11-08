/* ---------- Learning is fun!: home screen, the shared theme, and moving between sections ---------- */
var LF = (function () {
  var TOKENS = ['paper', 'ink', 'ink-soft', 'key', 'key-edge', 'line', 'accent', 'accent-edge', 'accent-ink',
    'slot', 'good', 'bad', 'focus', 'face', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6'];
  var THEMES = {
    minty: { name: 'Frog Pond', buddy: '🐸', auto: true,
      c: ['#EAF6F1', '#173A3F', '#527678', '#FFFFFF', '#B7D2CA', '#C3DCD5', '#FFC93C', '#D99F00', '#173A3F',
        '#FFE9A6', '#1A8754', '#C43D27', '#2F6FED', '#173A3F', '#26A69A', '#FFB703', '#FF7F5C', '#7CB342', '#4FA3E0', '#A98BDB'],
      hi: 'Hi! Pick a game.', done: 'Toad-ally brilliant round!',
      yay: ['Toad-ally right!', 'Ribbit-ing work!', 'Hop, hop, hooray!', 'Leaps ahead!', 'Un-frog-ettable!'] },
    kitty: { name: 'Kitty', buddy: '🐱',
      c: ['#FFF0F6', '#4A1942', '#8A5A80', '#FFFFFF', '#F0B8D4', '#F5C6DD', '#FF8FC7', '#E05C9F', '#4A1942',
        '#FFC9E3', '#1F8A5B', '#C2314F', '#7A3FD1', '#4A1942', '#FF6FB5', '#B388FF', '#FFC857', '#5ED3C6', '#FF9A8B', '#8EC5FF'],
      hi: 'Meow! Pick a game.', done: 'Purr-fect round!',
      yay: ['Purr-fect!', 'Meow-velous!', 'Paw-some!', 'Claw-some work!', 'The cat’s whiskers!'] },
    race: { name: 'Race Car', buddy: '🏎️',
      c: ['#F2F3F5', '#15181D', '#5A6270', '#FFFFFF', '#BFC5CE', '#CCD1D9', '#E10600', '#9E0400', '#FFFFFF',
        '#FFE45C', '#14803C', '#B3261E', '#0B63CE', '#15181D', '#E53935', '#FFC400', '#1E88E5', '#43A047', '#FB8C00', '#8E99A8'],
      hi: 'Start your engines! Pick a game.', done: 'You took the chequered flag!',
      yay: ['Vroom! Correct!', 'Full speed ahead!', 'Pole position!', 'Turbo brain!', 'Green light, go!'] },
    wizard: { name: 'Wizard', buddy: '🧙', dark: true,
      c: ['#171A3A', '#F3EEFF', '#AEB0DA', '#252A57', '#0C0E24', '#3D4380', '#FFD86B', '#B8922A', '#2A1F05',
        '#353B78', '#8FE3C0', '#FFA0A8', '#B9A2FF', '#171A3A', '#B58CFF', '#FFD86B', '#5FD4E6', '#FF8FCF', '#8FE38F', '#FFA55C'],
      hi: 'Greetings! Pick a game.', done: 'That was pure magic!',
      yay: ['Magical!', 'Spell-binding!', 'Wand-erful!', 'Abraca-correct!', 'Pure wizardry!'] },
    ocean: { name: 'Ocean', buddy: '🐙',
      c: ['#E6F6FB', '#0E3350', '#4A7089', '#FFFFFF', '#AAD3E3', '#BDDDEA', '#FF8A65', '#D9602F', '#0E3350',
        '#FFE2B8', '#12805C', '#C43D27', '#1565C0', '#0E3350', '#1FA2C9', '#FF8A65', '#37C8AB', '#FFC94D', '#7C9CF0', '#F58FB4'],
      hi: 'Splash! Pick a game.', done: 'You made a real splash!',
      yay: ['Fin-tastic!', 'Whale done!', 'O-fish-ally right!', 'Making waves!', 'Sea-riously good!'] },
    space: { name: 'Space', buddy: '👽', dark: true,
      c: ['#0E1326', '#EEF2FF', '#9AA6CC', '#1B2242', '#060914', '#2F3A6B', '#5CE1E6', '#2A9CA1', '#062426',
        '#26305C', '#8FE38F', '#FF9C9C', '#FFD86B', '#0E1326', '#5CE1E6', '#FF7AD9', '#FFD86B', '#9B8CFF', '#7BE08A', '#FF9A5C'],
      hi: 'Greetings, earthling! Pick a game.', done: 'That round was out of this world!',
      yay: ['Out of this world!', 'Stellar!', 'Blast off!', 'Rocket brain!', 'Astro-nomical!'] },
    dino: { name: 'Dino', buddy: '🦖',
      c: ['#F1F6E4', '#263A1B', '#5F7551', '#FFFFFF', '#BFD3A6', '#CFDDBB', '#FF9F1C', '#C77400', '#2B1B00',
        '#FFE3AE', '#2E7D32', '#C43D27', '#2F6FED', '#263A1B', '#6BBF3B', '#FF9F1C', '#3FA7A0', '#E4C13E', '#E8734A', '#8C7AE6'],
      hi: 'Rawr! Pick a game.', done: 'A roar-some round!',
      yay: ['Roar-some!', 'Dino-mite!', 'T-rex-cellent!', 'Stomping good!', 'Jurassic genius!'] },
    poop: { name: 'Poop', buddy: '💩',
      c: ['#FBF3E4', '#3B2414', '#7A5A45', '#FFFFFF', '#DCC7A8', '#E6D5BB', '#8B5A2B', '#5E3A17', '#FFFFFF',
        '#FFE08A', '#2E7D32', '#C43D27', '#2F6FED', '#3B2414', '#C68A4E', '#F4C542', '#6FC2E8', '#8BC34A', '#F28B82', '#D9B48A'],
      hi: 'Plop! Pick a game.', done: 'You are number one at number twos!',
      yay: ['Plop-tastic!', 'Number one!', 'Un-poo-lievable!', 'Flushed with success!', 'Stinking good!'] },
    fox: { name: 'Fox', buddy: '🦊',
      c: ['#FFF4E8', '#3A1F0F', '#80583F', '#FFFFFF', '#F0CBA8', '#F5D9BD', '#F26B1D', '#B8480A', '#3A1F0F',
        '#FFDDB8', '#2E7D32', '#B3261E', '#2F6FED', '#3A1F0F', '#F5823A', '#FFC145', '#C98B5E', '#7FB069', '#EE6C73', '#5DA9E9'],
      hi: 'Yip! Pick a game.', done: 'You out-foxed every question!',
      yay: ['Fox-cellent!', 'Sly and speedy!', 'Clever cub!', 'Out-foxed it!', 'Quick as a fox!'] },
    forest: { name: 'Forest', buddy: '🐻', dark: true,
      c: ['#16261C', '#F1F5E9', '#A9BDA6', '#213528', '#0C160F', '#3A5743', '#E0A458', '#A8742C', '#2A1A05',
        '#2F4A37', '#9BE38F', '#FF9C8A', '#9CC2FF', '#16261C', '#7FB069', '#E0A458', '#C97B4A', '#6EC5B8', '#E8D174', '#D98880'],
      hi: 'Big bear hug! Pick a game.', done: 'Bear-y well done!',
      yay: ['Bear-illiant!', 'Paws-itively right!', 'Grrr-eat!', 'Un-bear-ably good!', 'Sweet as honey!'] },
    peacock: { name: 'Peacock', buddy: '🦚', dark: true,
      c: ['#0B2B33', '#EFFBF8', '#9CC4C4', '#123C46', '#051A1F', '#24606B', '#F2C14E', '#B88A1E', '#2A1F05',
        '#1B4F5B', '#8FE3A8', '#FFA08E', '#C9A6FF', '#0B2B33', '#1FBFB8', '#4C9BFF', '#7ED957', '#F2C14E', '#9B6BFF', '#FF7AB6'],
      hi: 'Ta-da! Pick a game.', done: 'Time to show off those feathers!',
      yay: ['Fan-tastic!', 'Show-stopping!', 'Feather-perfect!', 'Proud as a peacock!', 'Dazzling!'] },
    ballet: { name: 'Ballet', buddy: '🧑‍🩰',
      c: ['#FBF4F1', '#3D2A3A', '#7D6677', '#FFFFFF', '#E5CFD4', '#EEDDE0', '#E8A0B4', '#C4788F', '#3D2A3A',
        '#F6D9E0', '#2F7D5B', '#B93A52', '#6C5CE7', '#3D2A3A', '#F2A7B8', '#C9B6E4', '#A8D8D0', '#F6D38B', '#9EC5E8', '#E9A08B'],
      hi: 'Curtain up! Pick a game.', done: 'Bravo! A standing ovation!',
      yay: ['Bravo!', 'On pointe!', 'Twirl-tastic!', 'Encore!', 'Graceful work!'] }
  };
  var STORE = 'learning-fun';
  var $ = function (id) { return document.getElementById(id); };
  var SCREENS = ['hub', 'lf-themes', 'lf-feedback', 'app-m', 'app-r', 'app-f', 'app-c', 'app-z'];
  var APP = { maths: 'app-m', read: 'app-r', flags: 'app-f', codes: 'app-c', zoo: 'app-z', feedback: 'lf-feedback' };
  /* light, dark, or following the device: for the few colours a section sets for itself (the zoo's element families) */
  function tone(t) { document.documentElement.setAttribute('data-tone', t.auto ? 'auto' : t.dark ? 'dark' : 'light'); }
  var api = { theme: 'peacock', onTheme: [], apps: {}, THEMES: THEMES };
  var lastSaid = '';
  api.T = function () { return THEMES[api.theme] || THEMES.peacock; };
  /* picked: a buddy was chosen on this device before. welcomed: the welcome picker has been seen.
     Devices that had a buddy before the welcome screen existed still see it once, with their buddy already chosen. */
  var picked = false, welcomed = false, welcoming = false;
  function save() { try { localStorage.setItem(STORE, JSON.stringify({ theme: api.theme, welcomed: welcomed })); } catch (e) {} }
  function load() {
    try {
      var d = JSON.parse(localStorage.getItem(STORE) || '{}');
      if (d && THEMES[d.theme]) { api.theme = d.theme; picked = true; }
      if (d && d.welcomed === true) welcomed = true;
    } catch (e) {}
  }
  function applyTheme(id) {
    api.theme = THEMES[id] ? id : 'peacock';
    var t = api.T(), rs = document.documentElement.style, i;
    for (i = 0; i < TOKENS.length; i++) {
      if (t.auto) rs.removeProperty('--' + TOKENS[i]); else rs.setProperty('--' + TOKENS[i], t.c[i]);
    }
    if (t.auto) rs.removeProperty('color-scheme'); else rs.setProperty('color-scheme', t.dark ? 'dark' : 'light');
    tone(t);
    var buddies = document.querySelectorAll('[data-buddy]');
    for (i = 0; i < buddies.length; i++) buddies[i].textContent = t.buddy;
    $('hub-bubble').textContent = t.hi.replace('Pick a game.', 'What shall we learn?');
    $('hub-theme-name').textContent = t.name;
    $('hub-wheel').style.background = 'conic-gradient(' + t.c[14] + ' 0 25%, ' + t.c[15] + ' 0 50%, ' +
      t.c[16] + ' 0 75%, ' + t.c[6] + ' 0)';
    renderThemes();
    api.onTheme.forEach(function (fn) { try { fn(api.theme); } catch (e) {} });
  }
  function renderThemes() {
    var box = $('lf-theme-grid');
    box.textContent = '';
    Object.keys(THEMES).forEach(function (id) {
      var t = THEMES[id], b = document.createElement('button');
      b.type = 'button'; b.className = 'lf-tile'; b.id = 'lf-theme-' + id; b.dataset.theme = id;
      b.setAttribute('aria-pressed', id === api.theme && !(welcoming && !picked) ? 'true' : 'false');
      b.style.background = t.c[0]; b.style.color = t.c[1]; b.style.borderColor = t.c[5];
      var top = document.createElement('span'), em = document.createElement('span'),
        nm = document.createElement('span'), sw = document.createElement('span');
      top.className = 'lf-tile-top';
      em.className = 'lf-tile-emoji'; em.textContent = t.buddy; em.setAttribute('aria-hidden', 'true');
      nm.className = 'lf-tile-name'; nm.textContent = t.name;
      sw.className = 'lf-swatches'; sw.setAttribute('aria-hidden', 'true');
      [6, 14, 15, 16, 17, 18].forEach(function (k) {
        var dot = document.createElement('i');
        dot.style.background = t.c[k];
        sw.appendChild(dot);
      });
      top.appendChild(em); top.appendChild(nm);
      b.appendChild(top); b.appendChild(sw);
      box.appendChild(b);
    });
  }
  function nice() {
    var pool = api.T().yay, s;
    do { s = pool[Math.floor(Math.random() * pool.length)]; } while (pool.length > 1 && s === lastSaid);
    lastSaid = s;
    return s;
  }
  api.hop = function (el) { if (!el) return; el.classList.remove('hop'); void el.offsetWidth; el.classList.add('hop'); };
  function pickTheme(id) {
    picked = true;
    if (welcoming) welcomed = true;
    applyTheme(id);
    save();
    $('lf-themes-bubble').textContent = nice() + (welcoming ? ' Tap Let’s go when you’re ready.' : '');
    if (welcoming) $('lf-go-wrap').hidden = false;
    api.hop($('lf-themes-buddy'));
    var again = $('lf-theme-' + id);
    if (again) again.focus({ preventScroll: true });
  }
  function show(id) {
    SCREENS.forEach(function (s) { $(s).hidden = s !== id; });
    $('go-feedback').hidden = id === 'lf-feedback';   /* no link to the page you're already on */
    window.scrollTo(0, 0);
  }
  /* The home buddy is a little helper. A tap on it or its bubble brings up a tip about something
     the kids might not have found yet; tips come in a shuffled order, all before any repeats. Until the
     first tap, it gives a little wave now and then to say "tap me" (three times at most per visit). */
  var TIPS = [
    'Tip: in Multiplication, tap the dots to turn them around.',
    'Tip: tap a number in a times sum to split it into parts.',
    'Tip: switch on ⏱️ Timed before a maths game to race the clock.',
    'Tip: in Division, tap the dots to share them out.',
    'Tip: Number play can chunk a number into equal groups.',
    'Tip: in Flags, get a flag right 3 times in a row to learn it.',
    'Tip: the NATO Radio room spells out anything you type.',
    'Tip: in the Potion Lab, try mixing 2 H and 1 O.',
    'Tip: switch on ✨ Power-up in the zoo to dress up the elements.',
    'Tip: letter friends are two letters that work as a team.',
    'Tip: tap My buddy to pick a new buddy.',
    'Tip: in Magic e, look at the little word without the e.',
    'Tip: Reading has stories to read, page by page.',
    'Tip: at the end of a round, you can feed me a snack!'
  ];
  var tipOrder = [], tipAt = 0, waveTimer = 0, waved = 0, tapped = false;
  function nextTip() {
    if (tipAt >= tipOrder.length) {
      tipOrder = TIPS.map(function (x, i) { return i; });
      for (var i = tipOrder.length - 1; i > 0; i--) {
        var k = Math.floor(Math.random() * (i + 1)), sw = tipOrder[i]; tipOrder[i] = tipOrder[k]; tipOrder[k] = sw;
      }
      tipAt = 0;
    }
    $('hub-bubble').textContent = TIPS[tipOrder[tipAt++]];
    api.hop($('hub-buddy'));
    tapped = true;
    clearTimeout(waveTimer);
  }
  function invite() {
    clearTimeout(waveTimer);
    if (tapped || waved >= 3) return;
    waveTimer = setTimeout(function () {
      var b = $('hub-buddy');
      if ($('hub').hidden || tapped) return;
      b.classList.remove('hop', 'wave'); void b.offsetWidth; b.classList.add('wave');
      waved++;
      invite();
    }, waved ? 15000 : 6000);
  }
  api.home = function () { show('hub'); waved = 0; invite(); };
  /* welcome: the buddy picker as a first screen, with a title instead of Home, and Let's go once a buddy is picked */
  function welcome(on) {
    welcoming = on;
    $('lf-themes-back').hidden = on;
    $('lf-themes-title').className = on ? 'lf-title' : 'lf-vh';
    $('lf-themes-title').textContent = on ? 'Pick your buddy!' : 'Pick a buddy';
    $('lf-go-wrap').hidden = !(on && picked);
    renderThemes();
  }
  api.open = function (which) {
    if (which === 'themes') {
      welcome(false);
      $('lf-themes-bubble').textContent = 'Pick a buddy you like!';
      show('lf-themes');
      return;
    }
    if (!APP[which]) return;
    show(APP[which]);
    var app = api.apps[which];
    if (app && app.show) app.show();
  };
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-home]')) { api.home(); return; }
    if (e.target.closest('#lf-go')) { welcomed = true; save(); welcome(false); api.home(); return; }
    if (e.target.closest('#hub-buddy-btn, #hub-bubble')) { nextTip(); return; }
    var g = e.target.closest('[data-go]');
    if (g) { api.open(g.getAttribute('data-go')); return; }
    var t = e.target.closest('#lf-theme-grid button[data-theme]');
    if (t) pickTheme(t.dataset.theme);
  });
  api.paint = function () {
    load();
    var t = api.T(), rs = document.documentElement.style;
    for (var i = 0; i < TOKENS.length; i++) { if (t.auto) rs.removeProperty('--' + TOKENS[i]); else rs.setProperty('--' + TOKENS[i], t.c[i]); }
    if (!t.auto) rs.setProperty('color-scheme', t.dark ? 'dark' : 'light');
    tone(t);
  };
  api.start = function () {
    /* the name in the footer comes from js/my-settings.js; without it the line just reads "© 2026" */
    var who = String((window.MY_SETTINGS && MY_SETTINGS.name) || '').trim();
    $('lf-copy').textContent = '© 2026' + (who ? ' ' + who : '');
    load(); applyTheme(api.theme);
    if (welcomed) { show('hub'); invite(); return; }
    welcome(true);
    $('lf-themes-bubble').textContent = picked ? 'Hi! I’m your learning buddy. Keep me, or pick someone new!'
      : 'Hi! Who will be your learning buddy?';
    show('lf-themes');
  };
  return api;
})();


LF.paint();
