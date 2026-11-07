/* ---------- Flags: pick regions, answer four-choice questions, learn a flag by getting it right 3 times in a row ---------- */
(function () {
  var $ = function (id) { return document.getElementById('f-' + id); };
  var ROOT = document.getElementById('app-f');
  var D = FLAGDATA, INFO = D.INFO, M = D.MAP;
  var STORE = 'learning-fun-flags';
  var TARGET = 3;
  var ACTIVE = 6;    /* how many flags are being practised at once; a new one joins each time one is learned */
  var SAMPLES = { na: ['CA', 'US', 'MX'], sa: ['BR', 'AR', 'CO'], eu: ['FR', 'DE', 'IT'], as: ['JP', 'IN', 'KR'],
    af: ['KE', 'ZA', 'NG'], ca: ['CA-QC', 'CA-ON', 'CA-NU'] };
  var GROUP = {};   /* flag -> its look-alike group */
  D.LOOK.forEach(function (g) { g[1].forEach(function (c) { GROUP[c] = g; }); });
  var REGION = {};  /* region id -> list of flags */
  D.REGIONS.forEach(function (r) { REGION[r[0]] = r[2]; });

  var P = { regions: [], look: false };
  try {
    var saved = JSON.parse(localStorage.getItem(STORE) || '{}');
    if (Array.isArray(saved.regions)) P.regions = saved.regions.filter(function (r) { return REGION[r]; });
    P.look = saved.look === true;
  } catch (e) {}
  function save() { try { localStorage.setItem(STORE, JSON.stringify(P)); } catch (e) {} }

  var S = null;      /* this session */
  var lastFact = {};

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function flagHTML(code) {
    var i = INFO[code];
    return i.img ? '<img class="fimg" src="' + i.img + '" width="' + i.w + '" height="' + i.h + '" alt="">'
      : '<span class="femo" aria-hidden="true">' + i.e + '</span>';
  }
  function view(id) {
    ['menu', 'quiz', 'report'].forEach(function (v) { $(v).hidden = v !== id; });
    window.scrollTo(0, 0);
  }

  /* ---------- Menu ---------- */
  function deckFor() {
    var codes = [];
    D.REGIONS.forEach(function (r) { if (P.regions.indexOf(r[0]) >= 0) codes = codes.concat(r[2]); });
    if (P.look) codes = codes.filter(function (c) { return GROUP[c]; });
    return codes;
  }
  function renderMenu() {
    var box = $('regions');
    box.innerHTML = D.REGIONS.map(function (r) {
      var on = P.regions.indexOf(r[0]) >= 0, n = r[2].length;
      return '<button type="button" class="region" id="f-reg-' + r[0] + '" data-region="' + r[0] + '" aria-pressed="' + on + '">' +
        '<span class="tick" aria-hidden="true">✓</span>' +
        '<span class="samples" aria-hidden="true">' + SAMPLES[r[0]].map(flagHTML).join('') + '</span>' +
        '<span class="rname">' + esc(r[1]) + '</span><span class="rcount">' + n + ' flags</span></button>';
    }).join('');
    $('look').setAttribute('aria-pressed', String(P.look));
    var deck = deckFor(), hint = $('hint');
    if (!P.regions.length) hint.textContent = 'Pick one or more regions.';
    else if (!deck.length) hint.textContent = 'None of these flags are look-alikes. Pick another region.';
    else hint.textContent = deck.length + (deck.length === 1 ? ' flag' : ' flags') + ' to learn.';
    $('start').disabled = !deck.length;
  }
  function showMenu() { renderMenu(); view('menu'); }

  /* ---------- A session ---------- */
  function startSession() {
    var deck = deckFor();
    if (!deck.length) return;
    S = { deck: deck, st: {}, turn: 0, cur: null, last: null, due: [], answered: false, order: [], queue: shuffle(deck), active: [] };
    deck.forEach(function (c) { S.st[c] = { streak: 0, learned: false, hist: [] }; });
    refill();
    buildMap();
    view('quiz');
    nextQuestion();
  }
  function learnedCount() { return S.deck.filter(function (c) { return S.st[c].learned; }).length; }
  function renderProgress() {
    var n = learnedCount(), all = S.deck.length;
    $('progress').innerHTML = '<b>' + n + '</b> of ' + all + ' learned';
    $('meter').style.width = (all ? n / all * 100 : 0) + '%';
  }
  function refill() {
    S.active = S.active.filter(function (c) { return !S.st[c].learned; });
    while (S.active.length < ACTIVE && S.queue.length) S.active.push(S.queue.shift());
  }
  /* Questions come from a small working set of flags. Missed flags come back about three questions later;
     otherwise new flags and missed ones are more likely. */
  function pickNext() {
    refill();
    var open = S.active;
    if (!open.length) return null;
    S.turn++;
    for (var i = 0; i < S.due.length; i++) {
      var d = S.due[i];
      if (d.at <= S.turn && d.c !== S.last && !S.st[d.c].learned) { S.due.splice(i, 1); return d.c; }
    }
    var cand = open.filter(function (c) { return c !== S.last; });
    if (!cand.length) cand = open;
    var weights = cand.map(function (c) {
      var st = S.st[c];
      return !st.hist.length ? 3 : st.streak === 0 ? 2 : 1;
    });
    var total = weights.reduce(function (a, b) { return a + b; }, 0), r = Math.random() * total;
    for (i = 0; i < cand.length; i++) { r -= weights[i]; if (r <= 0) return cand[i]; }
    return cand[cand.length - 1];
  }
  /* four names: the right one, look-alikes from the same family, then others from the same region */
  function choicesFor(code) {
    var opts = [code], g = GROUP[code];
    var mates = shuffle(g ? g[1].filter(function (c) { return c !== code && INFO[c]; }) : []);
    mates.slice(0, P.look ? 3 : 1).forEach(function (c) { opts.push(c); });
    var pool = shuffle(REGION[INFO[code].r].filter(function (c) { return opts.indexOf(c) < 0; }));
    while (opts.length < 4 && pool.length) opts.push(pool.pop());
    return shuffle(opts);
  }
  function nextQuestion() {
    var code = pickNext();
    if (!code) return finish();
    S.cur = code; S.last = code; S.answered = false;
    if (S.order.indexOf(code) < 0) S.order.push(code);
    var card = $('card'), flag = $('flag');
    card.className = 'flagcard';
    flag.innerHTML = flagHTML(code);
    flag.classList.remove('pop'); void flag.offsetWidth; flag.classList.add('pop');
    var v = $('verdict');
    v.className = 'bubble verdict';
    v.textContent = INFO[code].prov ? 'Which province or territory has this flag?' : 'Which country has this flag?';
    $('name').hidden = true; $('proper').hidden = true;
    renderStreak(code);
    $('answers').innerHTML = choicesFor(code).map(function (c, k) {
      return '<button type="button" class="key" id="f-ans-' + k + '" data-pick="' + c + '">' + esc(INFO[c].n) + '</button>';
    }).join('');
    $('answers').hidden = false;
    $('dunno').hidden = false;
    $('reveal').hidden = true;
    renderProgress();
  }
  function renderStreak(code) {
    var st = S.st[code], dots = '';
    for (var k = 0; k < TARGET; k++) dots += '<i class="' + (k < st.streak ? 'on' : '') + '"></i>';
    var left = TARGET - st.streak;
    $('streak').innerHTML = st.learned ? dots + ' <b>Learned! ⭐</b>'
      : dots + ' <span>' + (st.hist.length ? left + ' more in a row to learn it' : 'New flag') + '</span>';
  }
  function answer(pick) {
    if (S.answered) return;
    S.answered = true;
    var code = S.cur, st = S.st[code], info = INFO[code], ok = pick === code, wasLearned = st.learned;
    st.hist.push(pick === null ? 's' : ok ? 'r' : 'w');
    if (ok) {
      st.streak++;
      if (st.streak >= TARGET) st.learned = true;
    } else {
      st.streak = 0;
      S.due = S.due.filter(function (d) { return d.c !== code; });
      S.due.push({ c: code, at: S.turn + 3 });
    }
    var card = $('card'), v = $('verdict');
    card.className = 'flagcard ' + (ok ? 'good' : pick === null ? 'skip' : 'bad');
    if (ok) { v.className = 'bubble verdict good'; v.textContent = st.learned && !wasLearned ? 'Yes! You learned this one!' : 'Yes! That’s right.'; }
    else if (pick === null) { v.className = 'bubble verdict'; v.textContent = 'Here it is:'; }
    else { v.className = 'bubble verdict bad'; v.textContent = 'Not quite. You picked ' + INFO[pick].n + '.'; }
    $('flag').setAttribute('aria-label', 'Flag of ' + info.n);
    $('name').textContent = info.n; $('name').hidden = false;
    $('proper').textContent = info.p; $('proper').hidden = !info.p;
    renderStreak(code);
    $('answers').hidden = true;
    $('dunno').hidden = true;
    showOnMap(code);
    $('fact').innerHTML = '<b>Did you know?</b> ' + esc(pickFact(code));
    $('reveal').hidden = false;
    $('next').textContent = learnedCount() === S.deck.length ? 'See how I did' : 'Next flag';
    renderProgress();
    if (ok) hop($('buddy'));
  }
  /* Each flag's three facts come in a shuffled order and all are shown before any repeats,
     so getting a flag right three times in a row shows all three. */
  var factBag = {};
  function pickFact(code) {
    var f = INFO[code].f, bag = factBag[code];
    if (!bag || !bag.length) {
      bag = factBag[code] = shuffle(f.map(function (x, k) { return k; }));
      if (bag.length > 1 && bag[0] === lastFact[code]) bag.push(bag.shift());
    }
    var k = bag.shift();
    lastFact[code] = k;
    return f[k];
  }
  function hop(el) { el.classList.remove('hop'); void el.offsetWidth; el.classList.add('hop'); }

  /* ---------- Map: built once, then the right shape lights up and the view zooms to it ---------- */
  var mapBuilt = false, shapes = {}, provShapes = {}, lit = null;
  function buildMap() {
    if (mapBuilt) return;
    var svg = $('map'), html = '<g class="land">';
    Object.keys(M.world).forEach(function (k) { html += '<path data-c="' + k + '" d="' + M.world[k] + '"/>'; });
    html += '</g><g class="provs">';
    Object.keys(M.prov).forEach(function (k) { html += '<path data-p="' + k + '" d="' + M.prov[k] + '"/>'; });
    html += '</g><circle class="pin" id="f-pin" r="10" cx="0" cy="0"/><circle class="pin-dot" id="f-pindot" r="3" cx="0" cy="0"/>';
    svg.innerHTML = html;
    Array.prototype.forEach.call(svg.querySelectorAll('path[data-c]'), function (p) { shapes[p.getAttribute('data-c')] = p; });
    Array.prototype.forEach.call(svg.querySelectorAll('path[data-p]'), function (p) { provShapes[p.getAttribute('data-p')] = p; });
    mapBuilt = true;
  }
  function showOnMap(code) {
    var svg = $('map'), info = INFO[code], K = M.K, el, box;
    if (lit) lit.classList.remove('hi');
    if (info.prov) { el = provShapes[info.prov]; box = M.pbox[info.prov]; }
    else { el = shapes[code]; box = M.box[code]; }
    svg.classList.toggle('canada', !!info.prov);
    if (el) { el.classList.add('hi'); lit = el; } else lit = null;
    var cx, cy, w, h;
    if (box) { cx = (box[0] + box[2]) / 2; cy = (box[1] + box[3]) / 2; w = (box[2] - box[0]) * 2.6; h = (box[3] - box[1]) * 2.6; }
    else { cx = info.ll[0]; cy = info.ll[1]; w = 0; h = 0; }
    w = Math.max(w, 36 * K); h = Math.max(h, 18 * K);
    if (w < h * 2) w = h * 2; else h = w / 2;
    w = Math.min(w, M.w); h = Math.min(h, M.h);
    var x = Math.max(0, Math.min(M.w - w, cx - w / 2)), y = Math.max(0, Math.min(M.h - h, cy - h / 2));
    svg.setAttribute('viewBox', [x, y, w, h].map(Math.round).join(' '));
    svg.setAttribute('aria-label', 'Map showing where ' + info.n + ' is');
    /* small places get a ring so they can be found */
    var small = !el || info.s || (box && (box[2] - box[0]) < 3 * K);
    var pin = $('pin'), dot = $('pindot');
    var px = box ? cx : info.ll[0], py = box ? cy : info.ll[1];
    pin.setAttribute('cx', px); pin.setAttribute('cy', py); pin.setAttribute('r', Math.round(w / 28));
    dot.setAttribute('cx', px); dot.setAttribute('cy', py); dot.setAttribute('r', Math.round(w / 110));
    pin.style.display = small ? '' : 'none';
    dot.style.display = small && !el ? '' : 'none';
  }

  /* ---------- End of a session ---------- */
  function finish() {
    if (!S) return showMenu();
    var seen = S.order, learned = S.deck.filter(function (c) { return S.st[c].learned; }), all = S.deck.length;
    if (!seen.length) return showMenu();
    var right = 0, wrong = 0, skip = 0;
    seen.forEach(function (c) { S.st[c].hist.forEach(function (h) { if (h === 'r') right++; else if (h === 'w') wrong++; else skip++; }); });
    $('done-title').textContent = learned.length === all ? 'You learned all ' + all + ' flags!'
      : learned.length ? 'You learned ' + learned.length + (learned.length === 1 ? ' flag!' : ' flags!') : 'Good practice!';
    $('done-sub').textContent = right + ' right, ' + wrong + ' wrong' + (skip ? ', ' + skip + ' don’t know' : '') +
      (learned.length < all ? '. ' + (all - learned.length) + ' still to learn.' : '.');
    var sayBox = $('say');
    if (window.LF && LF.sayInto) LF.sayInto(sayBox); else sayBox.textContent = LF.T().hi;
    var rows = seen.slice().sort(function (a, b) {
      var la = S.st[a].learned ? 1 : 0, lb = S.st[b].learned ? 1 : 0;
      return la - lb || INFO[a].n.localeCompare(INFO[b].n);
    }).map(function (c) {
      var st = S.st[c];
      return '<li>' + flagHTML(c) + '<span class="rn"><b>' + esc(INFO[c].n) + '</b><span class="marks">' +
        st.hist.map(function (h) {
          return '<span class="mk ' + h + '" title="' + (h === 'r' ? 'Right' : h === 'w' ? 'Wrong' : 'Didn’t know') + '">' +
            (h === 'r' ? '✓' : h === 'w' ? '✗' : '?') + '</span>';
        }).join('') + '</span></span>' +
        (st.learned ? '<span class="star" role="img" aria-label="Learned">⭐</span>' : '<span></span>') + '</li>';
    }).join('');
    var unseen = all - seen.length;
    $('list').innerHTML = rows + (unseen ? '<li class="sub">' + unseen + (unseen === 1 ? ' flag' : ' flags') + ' not shown yet.</li>' : '');
    var bits = '';
    if (learned.length) {
      for (var k = 0; k < 30; k++) {
        bits += '<i style="left:' + Math.round(Math.random() * 96) + '%;background:var(--d' + (k % 6 + 1) +
          ');animation-delay:' + (Math.random() * 0.9).toFixed(2) + 's"></i>';
      }
    }
    $('confetti').innerHTML = bits;
    view('report');
  }

  /* ---------- Wiring ---------- */
  $('regions').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-region]');
    if (!b) return;
    var r = b.dataset.region, i = P.regions.indexOf(r);
    if (i >= 0) P.regions.splice(i, 1); else P.regions.push(r);
    save(); renderMenu();
    var again = document.getElementById('f-reg-' + r);
    if (again) again.focus({ preventScroll: true });
  });
  $('look').addEventListener('click', function () { P.look = !P.look; save(); renderMenu(); });
  $('start').addEventListener('click', startSession);
  $('answers').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-pick]');
    if (b) answer(b.dataset.pick);
  });
  $('dunno').addEventListener('click', function () { answer(null); });
  $('next').addEventListener('click', nextQuestion);
  $('stop').addEventListener('click', finish);
  $('report-back').addEventListener('click', showMenu);
  $('to-menu').addEventListener('click', showMenu);
  $('again').addEventListener('click', startSession);
  /* keyboard: 1 to 4 answer, 0 for "I don't know", Enter for the next flag */
  document.addEventListener('keydown', function (e) {
    if (ROOT.hidden || $('quiz').hidden || e.metaKey || e.ctrlKey || e.altKey) return;
    if (!S.answered && e.key >= '1' && e.key <= '4') {
      var b = document.getElementById('f-ans-' + (Number(e.key) - 1));
      if (b) { answer(b.dataset.pick); e.preventDefault(); }
    } else if (!S.answered && e.key === '0') { answer(null); e.preventDefault(); }
    else if (S.answered && e.key === 'Enter' && !(document.activeElement && document.activeElement.closest('.back'))) {
      nextQuestion(); e.preventDefault();
    }
  });

  LF.onTheme.push(function () { $('menu-bubble').textContent = LF.T().hi.replace('Pick a game.', 'Which flags shall we learn?'); });
  LF.apps.flags = { show: showMenu };
  renderMenu();
})();
