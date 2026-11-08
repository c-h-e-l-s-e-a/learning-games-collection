(function () {
  var $ = function (id) { return document.getElementById(id); };
  var MAX = 12;
  var STORE = 'times-tables-pad';

  var TRY_AGAIN = ['Not quite. Have another go.', 'Close! Try again.', 'Not that one. Try once more.'];
  var SIGN = { times: '×', minus: '−' };
  var WORD = { times: 'times', plus: 'plus', minus: 'minus', divide: 'divided by' };
  SIGN.plus = '+';
  SIGN.divide = '÷';
  var BIG_EMOJI = ['🏆', '🥇', '🏅', '👑'];
  var waves = [];

  /* Themes: each one is a full colour palette, an emoji buddy and the nice things it says.
     Colours are listed in TOKENS order. "auto" keeps the page's own light and dark colours. */
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
  /* What the buddy shares on the finish screen: a haiku and a joke per theme, plus kind words. */
  var FUN = {
    minty: {
      h: ['Green frog on a log\ncounts the lily pads by twos\nthen leaps to the next',
        'Rain taps on the pond\nevery ripple makes a ring\ncount them as they grow',
        'Ribbit goes the frog\none more answer, one more hop\nthe pond cheers for you'],
      j: ['Why are frogs so happy?\nThey eat whatever bugs them!',
        'What do frogs order at a restaurant?\nFrench flies!',
        'What happens when a frog’s car breaks down?\nIt gets toad away!'] },
    kitty: {
      h: ['Soft paws on the keys\nevery answer lands just right\ntime for a cat nap',
        'Whiskers twitch with pride\nyou chased every number down\nnow purr in the sun',
        'Curled up on the page\na small cat guards your answers\nshe thinks you are great'],
      j: ['What is a cat’s favourite colour?\nPurr-ple!',
        'What do you call a pile of kittens?\nA meow-ntain!',
        'Why was the cat sitting on the computer?\nTo keep an eye on the mouse!'] },
    race: {
      h: ['Engines hum and wait\ngreen light, numbers flying past\nyou cross the line first',
        'Wheels warm, eyes ahead\nevery corner, one more fact\nthe flag waves for you',
        'Pit stop for the brain\nnew thoughts and a sip of juice\nthen back on the track'],
      j: ['What is a race car’s favourite snack?\nFast food!',
        'Why did the racing car go to bed early?\nIt was wheely tyre-d!',
        'What do you get when dinosaurs crash their cars?\nTyrannosaurus wrecks!'] },
    wizard: {
      h: ['A wave of the wand\nnumbers dance out of the hat\nyour brain is the spell',
        'Old book, dusty spell\nturns a hard sum into gold\nthe secret is you',
        'Owl upon the roof\nhoots the answer to the moon\nyou knew it first, though'],
      j: ['How do wizards do their sums?\nWith a spell-culator!',
        'What do you call a wizard from outer space?\nA flying sorcerer!',
        'Why do wizards brush their teeth three times a day?\nTo stop bat breath!'] },
    ocean: {
      h: ['Eight arms wave hello\neach one counting something new\ndeep sea, deeper thoughts',
        'Bubbles float up high\neach one holds a tiny thought\npop, there goes a sum',
        'Waves count on the shore\none, two, three, and back again\nthe sea never stops'],
      j: ['How many tickles make an octopus laugh?\nTen-tickles!',
        'Why did the crab never share?\nBecause it was shellfish!',
        'What do you call a fish with no eyes?\nA fsh!'] },
    space: {
      h: ['Stars beyond counting\nbut you counted anyway\nblast off, little star',
        'Rocket on the pad\nten, nine, eight, you know the rest\nlift off, clever one',
        'Moon dust on your boots\nfootprints made of right answers\nthey will last for years'],
      j: ['How do you plan a party in space?\nYou planet!',
        'Why did the sun go to school?\nTo get brighter!',
        'What is an astronaut’s favourite key on the keyboard?\nThe space bar!'] },
    dino: {
      h: ['Big feet shake the ground\ntiny arms still count to ten\nroar for your good work',
        'Long neck in the trees\nnibbling numbers leaf by leaf\nfull of facts by noon',
        'Fossils in the rock\nprove that big things start out small\nso did what you learned'],
      j: ['What do you call a dinosaur that never gives up?\nA try-try-try-ceratops!',
        'What do you call a sleeping dinosaur?\nA dino-snore!',
        'Why can’t you hear a pterodactyl in the bathroom?\nBecause the P is silent!'] },
    poop: {
      h: ['Plop goes the answer\nright where it was meant to land\nflush with success now',
        'Tiny swirl of brown\nsmiling on a shiny throne\nking of all the sums',
        'Whoosh goes the big flush\nwrong answers swirl down the drain\nonly right ones stay'],
      j: ['Why did the toilet paper roll down the hill?\nTo get to the bottom!',
        'What did one toilet say to the other?\nYou look a bit flushed!',
        'What is brown and sticky?\nA stick!'] },
    fox: {
      h: ['Quick fox in the leaves\nsniffing out the right answers\ntail held high and proud',
        'Red tail in the snow\npaw prints lead to the answer\nclever little fox',
        'Fox cubs in the den\npractise pouncing every day\nthat is how they learn'],
      j: ['What is a fox’s favourite dance?\nThe fox-trot!',
        'What do you call a fox with a carrot in each ear?\nAnything you like. It can’t hear you!',
        'Why did the fox cross the road?\nTo look for the chicken!'] },
    forest: {
      h: ['Bear beneath the pines\ncounting acorns one by one\nhoney for your brain',
        'Tall trees, quiet path\na bear hums the times tables\nbirds join in the song',
        'Sleepy winter cave\nbear dreams of numbers and jam\nwakes up knowing more'],
      j: ['What do you call a bear with no teeth?\nA gummy bear!',
        'What do you call a wet bear?\nA drizzly bear!',
        'How do bears keep their den cool?\nBear conditioning!'] },
    peacock: {
      h: ['One hundred bright eyes\nopen in a fan of blue\nall of them saw you',
        'Feathers green and gold\nspread wide like a hand of cards\nevery one a win',
        'Proud bird on the lawn\nstruts as if it solved them all\nbut that was you, friend'],
      j: ['Why do peacocks love getting the answer right?\nAny excuse to show off!',
        'Why does the peacock get invited to every party?\nIt always brings its own fan club!',
        'What is a peacock’s favourite game?\nShow and tail!'] },
    ballet: {
      h: ['Toes point, numbers twirl\nevery step lands on the beat\ntake a bow, well done',
        'Soft light on the stage\none small leap, then another\nthat is how you soar',
        'Practice at the barre\nthe same steps, day after day\nthen the curtain lifts'],
      j: ['Why are ballerinas so good at maths?\nThey always stay on pointe!',
        'What is a ballerina’s favourite number?\nTwo-two!',
        'Why do dancers make great friends?\nThey always keep you on your toes!'] }
  };
  var KIND = [
    'You kept going, question after question. That is how brains get stronger.',
    'Every answer you worked out today makes the next one easier.',
    'Mistakes along the way are part of learning. You kept trying, and that is the brave part.',
    'I saw how hard you concentrated. I am proud of you.',
    'That was a whole round of answers! Go and tell someone what you just did.',
    'Practice like this adds up. Future you says thank you.'
  ];
  var bags = {}, lastSaidAt = {};
  var YAY = ['You got it!', 'Nice one!', 'Spot on!', 'Keep it up!', 'Yes!'];
  var theme = 'minty', lastSaid = '';

  var mode = 'menu';
  var tables = [2];
  var ALL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var seconds = ALL.slice();
  /* addition: each number is 0 to 10, and the answer is never bigger than sumMax.
     subtraction: the number you take away from is never bigger than minusMax. */
  var SUM_OPTIONS = [5, 10, 15, 20];
  var sumMax = 20, minusMax = 10;
  /* how many right answers make a round, chosen for each game on its setup page */
  var COUNT_OPTIONS = [10, 25, 50, 100];
  var count = { times: 25, divide: 25, plus: 25, minus: 25 };
  var stats = { times: { solved: 0, ms: 0 }, divide: { solved: 0, ms: 0 }, plus: { solved: 0, ms: 0 }, minus: { solved: 0, ms: 0 } };
  /* division: the numbers to divide by, and the answers to practise */
  var divBy = [2], divAns = ALL.slice();
  /* Timed, kept for each game: on = a stopwatch runs and the game goes straight on after a right answer;
     off = no clock, and the game stops for a look (dots or number line) after each answer.
     Stored as "speed", its old name, so earlier settings carry over. */
  var speed = { times: false, divide: false, plus: false, minus: false };
  var clock = 0;
  var deck = [], q = null, typed = '', misses = 0, phase = 'ask', timer = 0;
  var dots = [], grid = { rows: 1, cols: 1 }, turned = false;
  /* times: each number of the sum can be split into parts, { a: [5, 1, 1] or null, b: ... };
     the panels behind the parts of the picture; the gap between panels, in dots */
  var split = { a: null, b: null }, stageParts = [], SPLIT_GAP = 1;

  function rand(a, b) { return a + Math.random() * (b - a); }
  function randInt(a, b) { return Math.floor(rand(a, b + 1)); }
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify({ v: 2, tables: tables, seconds: seconds, divBy: divBy, divAns: divAns, sumMax: sumMax, minusMax: minusMax, count: count, speed: speed, theme: theme, bags: bags })); } catch (e) {}
  }
  function load() {
    try {
      var d = JSON.parse(localStorage.getItem(STORE) || 'null');
      if (d && Array.isArray(d.tables)) return d;
    } catch (e) {}
    return null;
  }
  function cleanTables(t, fallback) {
    var out = (Array.isArray(t) ? t : []).filter(function (n) { return Number.isInteger(n) && n >= 1 && n <= MAX; });
    return out.length ? out : fallback;
  }
  function answerOf(f) { return mode === 'times' ? f.a * f.b : mode === 'divide' ? f.a / f.b : mode === 'plus' ? f.a + f.b : f.a - f.b; }

  /* ---------- Themes and the buddy ---------- */
  function T() { return THEMES[theme] || THEMES.minty; }
  function applyTheme(id) {
    theme = THEMES[id] ? id : 'minty';
    $('menu-bubble').textContent = T().hi;
  }
  function nice() {
    var pool = T().yay.concat(YAY), s;
    do { s = pool[Math.floor(Math.random() * pool.length)]; } while (s === lastSaid);
    lastSaid = s;
    return s;
  }
  function hop(el) {
    el.classList.remove('hop'); void el.offsetWidth; el.classList.add('hop');
  }
  /* Finish screen only: the buddy says one thing, a haiku or a joke. Each theme's haiku and jokes are
     shuffled into a random order and all used once before any repeats; the place in that order
     is kept between visits and across page updates. */
  function finishMessages() {
    var f = FUN[theme] || FUN.minty, t = T(), at = Math.max(0, Object.keys(THEMES).indexOf(theme)), out = [], k;
    f.h.forEach(function (x) { out.push({ verse: x }); });
    f.j.forEach(function (x) { out.push({ text: x }); });
    return out;
  }
  var sayTo = null;
  function sayLine(text, cls) {
    var el = document.createElement('span');
    el.className = cls;
    el.textContent = text;
    (sayTo || $('finish-text')).appendChild(el);
  }
  function finishSay(target) {
    var all = finishMessages(), bag = bags[theme], i, j, swap, m;
    if (Array.isArray(bag)) {
      bag = bag.filter(function (n) { return Number.isInteger(n) && n >= 0 && n < all.length; });
    }
    if (!Array.isArray(bag) || !bag.length) {
      bag = all.map(function (x, n) { return n; });
      for (i = bag.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        swap = bag[i]; bag[i] = bag[j]; bag[j] = swap;
      }
      if (bag.length > 1 && bag[bag.length - 1] === lastSaidAt[theme]) {
        swap = bag[0]; bag[0] = bag[bag.length - 1]; bag[bag.length - 1] = swap;
      }
    }
    i = bag.pop();
    lastSaidAt[theme] = i;
    bags[theme] = bag;
    save();
    m = all[i];
    sayTo = target || $('finish-text');
    sayTo.textContent = '';
    if (m.verse) {
      /* poetry convention: a verse line too long for the page turns over with a hanging indent */
      sayLine('A haiku for you:', 'say-label');
      m.verse.split('\n').forEach(function (line) { sayLine(line, 'verse-line'); });
    } else {
      m.text.split('\n').forEach(function (line) { sayLine(line, 'say-line'); });
    }
  }

  /* ---------- Menu and games ---------- */
  function leaveGame() {
    clearTimeout(timer);
    stopParty();
    $('finish').hidden = true;
    stopClock();
    stopTick();
  }
  function showMenu() {
    leaveGame();
    mode = 'menu';
    $('game').hidden = true;
    $('setup').hidden = true;
    $('play').hidden = true;
    $('menu').hidden = false;
  }
  /* ---------- Setup: which numbers, how many questions, and timed or not, before each game ---------- */
  var NAME = { times: 'Multiplication', divide: 'Division', plus: 'Addition', minus: 'Subtraction' };
  var SETUP_SAY = 'Pick your numbers, then press Start.';
  function openSetup(m) {
    leaveGame();
    mode = m;
    $('menu').hidden = true;
    $('game').hidden = true;
    $('play').hidden = true;
    $('setup').hidden = false;
    $('setup-title').textContent = NAME[m];
    $('setup-bubble').textContent = SETUP_SAY;
    $('tables').hidden = m !== 'times' && m !== 'divide';
    $('sumpick').hidden = m !== 'plus' && m !== 'minus';
    $('first-label').textContent = m === 'divide' ? 'Dividing by' : 'First number';
    $('second-label').textContent = m === 'divide' ? 'Answers' : 'Second number';
    $('sum-label').textContent = m === 'minus' ? 'Biggest number' : 'Biggest answer';
    if (m === 'times' || m === 'divide') renderChips();
    if (m === 'plus' || m === 'minus') renderSumChips();
    renderCountChips();
    renderTimed();
    window.scrollTo(0, 0);
  }
  function setupSay(text) {
    $('setup-bubble').textContent = text;
    hop($('setup-buddy'));
  }
  function renderCountChips() {
    var box = $('chips-count');
    box.textContent = '';
    COUNT_OPTIONS.forEach(function (v) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.id = 'count-' + v;
      b.dataset.count = v;
      b.textContent = v;
      b.setAttribute('aria-pressed', v === count[mode] ? 'true' : 'false');
      b.setAttribute('aria-label', v + ' questions');
      box.appendChild(b);
    });
  }
  function pickCount(v) {
    count[mode] = v;
    save();
    renderCountChips();
    var again = $('count-' + v);
    if (again) again.focus({ preventScroll: true });
  }
  function renderTimed() {
    var on = speed[mode];
    $('timed').setAttribute('aria-checked', on ? 'true' : 'false');
    $('timed-sub').textContent = on ? 'On: a clock runs, and it’s straight on to the next question.'
      : hasLine() ? 'Off: take your time, with a number line after each answer.'
      : 'Off: take your time, with a look at the dots after each answer.';
  }
  function toggleTimed() {
    speed[mode] = !speed[mode];
    save();
    renderTimed();
    hop($('setup-buddy'));
  }
  /* Start: a fresh round with the chosen settings */
  function openGame(m) {
    leaveGame();
    mode = m;
    stats[m] = { solved: 0, ms: 0 };
    $('menu').hidden = true;
    $('setup').hidden = true;
    $('game').hidden = false;
    $('qop').textContent = SIGN[m];
    $('clock').hidden = !speed[m];
    renderTally();
    renderClock();
    q = null;
    buildDeck();
    nextQuestion();
    if (speed[m]) startTick();
    window.scrollTo(0, 0);
  }

  /* ---------- Questions ---------- */
  function buildDeck() {
    deck = [];
    var a, b;
    if (mode === 'times') {
      tables.forEach(function (t) { seconds.forEach(function (s) { deck.push({ a: t, b: s }); }); });
    } else if (mode === 'divide') {
      /* 24 ÷ 6: every answer times every number to divide by */
      divBy.forEach(function (d) { divAns.forEach(function (n) { deck.push({ a: d * n, b: d }); }); });
    } else if (mode === 'plus') {
      for (a = 0; a <= 10; a++) for (b = 0; b <= 10; b++) if (a + b <= sumMax) deck.push({ a: a, b: b });
    } else {
      for (a = 0; a <= minusMax; a++) for (b = 0; b <= a; b++) deck.push({ a: a, b: b });
    }
    for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = deck[i]; deck[i] = deck[j]; deck[j] = t;
    }
    var top = deck[deck.length - 1];
    if (q && deck.length > 1 && top.a === q.a && top.b === q.b) {
      deck[deck.length - 1] = deck[0]; deck[0] = top;
    }
  }
  function nextQuestion() {
    clearTimeout(timer);
    if (!deck.length) buildDeck();
    q = deck.pop();
    typed = ''; misses = 0; phase = 'ask';
    $('qa').textContent = q.a;
    $('qb').textContent = q.b;
    $('question').setAttribute('aria-label', q.a + ' ' + WORD[mode] + ' ' + q.b + ' equals');
    $('go').textContent = 'Check';
    /* the hint only shows until the first correct answer; after that the line stays quiet */
    setMsg(stats[mode].solved > 0 ? '' : speed[mode] ? 'The clock is running! Tap the answer, then press Check.'
      : 'Tap the answer, then press Check.', '');
    renderSlot('');
    $('cheer-emoji').hidden = true;
    $('cheer-emoji').textContent = '';
    cheerSaid = '';
    $('nline').hidden = true;
    $('stage').hidden = false;
    buildDots();
    startClock();
  }
  function renderSlot(state) {
    var s = $('slot');
    s.textContent = typed || '?';
    s.className = 'slot' + (typed ? '' : ' empty') + (state ? ' ' + state : '');
  }
  function setMsg(text, cls) {
    var m = $('msg');
    $('msg-text').textContent = text;
    m.className = 'msg bubble' + (cls ? ' ' + cls : '') + (!text && $('cheer-emoji').hidden ? ' quiet' : '');
  }
  function renderTally() {
    var st = stats[mode];
    if (!st) return;
    $('solved').textContent = st.solved + ' of ' + count[mode];
  }

  function pressDigit(d) {
    if (phase === 'reveal' || phase === 'finish' || phase === 'line') return;
    if (typed.length >= 3) return;
    if (typed === '0') typed = '';
    typed += d;
    renderSlot('');
  }
  function pressDelete(all) {
    if (phase !== 'ask') return;
    typed = all ? '' : typed.slice(0, -1);
    renderSlot('');
  }
  function submit() {
    if (phase === 'finish') return;   /* the finish screen has its own buttons */
    if (phase === 'line') { afterLine(); return; }
    if (phase !== 'ask') { nextQuestion(); return; }
    if (typed === '') { setMsg('Tap a number first.', ''); return; }
    var answer = answerOf(q), st = stats[mode];
    if (Number(typed) === answer) {
      stopClock();
      st.solved++;
      renderTally();
      var last = st.solved >= count[mode];
      renderSlot('good');
      hop($('game-buddy'));
      if (!speed[mode]) {
        /* learning mode: stop for a look (the number line for adding and taking away, a cheer for times),
           and only Next moves on, to the finish screen if that was the last of the round.
           The clock is stopped while it shows. */
        phase = 'line'; lineThen = last ? 'finish' : '';
        if (hasLine()) { showLine(); setMsg('', ''); } else cheer();
        $('go').textContent = 'Next';
        return;
      }
      if (last) {
        /* end of the round: show the last answer in green for a moment, then the big party */
        phase = 'finish';
        $('stage').classList.add('joy');
        timer = setTimeout(showFinish, 500);
        return;
      }
      /* speed mode: no stopping between questions, straight on to the next one */
      nextQuestion();
      return;
    }
    misses++;
    if (misses >= 3) {
      phase = 'reveal';
      stopClock();
      typed = String(answer);
      renderSlot('bad');
      setMsg($('qa').textContent + ' ' + SIGN[mode] + ' ' + $('qb').textContent + ' = ' + answer + '. You’ll get another turn at this one soon.', '');
      deck.splice(Math.max(0, deck.length - 2), 0, { a: q.a, b: q.b });
      $('go').textContent = 'Next';
      if (hasLine() && !speed[mode]) showLine();
      return;
    }
    typed = '';
    renderSlot('bad shake');
    setMsg(TRY_AGAIN[(misses - 1) % TRY_AGAIN.length], 'bad');
  }

  /* ---------- Number line for addition and subtraction ----------
     Addition: 0 to the first number in one colour, then the jump of the second number in the other colour
     (the same colours as the ten-frame dots). A jump that passes 10 is split there, to show "make ten".
     Subtraction: 0 to the first number, then a jump back by the second number; the part taken away is
     drawn dashed, like the taken-away dots. */
  function hasLine() { return mode === 'plus' || mode === 'minus'; }
  function showLine() {
    var minus = mode === 'minus';
    var a = Number($('qa').textContent), b = Number($('qb').textContent), land = minus ? a - b : a + b;
    var max = minus ? (minusMax <= 5 ? 5 : a <= 10 ? 10 : minusMax)
      : sumMax <= 5 ? 5 : land <= 10 ? 10 : Math.max(sumMax, land);
    var W = 360, H = 128, pad = 16, Y = 92, i;
    var x = function (n) { return +(pad + n * (W - 2 * pad) / max).toFixed(1); };
    var bridge = !minus && a < 10 && land > 10;
    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" aria-hidden="true">';
    svg += '<line class="nl-base" x1="' + x(0) + '" y1="' + Y + '" x2="' + x(max) + '" y2="' + Y + '"/>';
    function bar(n1, n2, cls) {
      return '<rect class="' + cls + '" x="' + x(n1) + '" y="' + (Y - 5) + '" width="' + (x(n2) - x(n1)) + '" height="10" rx="5"/>';
    }
    if (minus) {
      if (land) svg += bar(0, land, 'nl-sec a');
      if (b) svg += bar(land, a, 'nl-taken');
    } else {
      if (a) svg += bar(0, a, 'nl-sec a');
      if (b) svg += bar(a, land, 'nl-sec b');
    }
    if (bridge) svg += '<line class="nl-ten" x1="' + x(10) + '" y1="' + (Y - 6) + '" x2="' + x(10) + '" y2="' + (Y + 6) + '"/>';
    for (i = 0; i <= max; i++) {
      var big = i % 5 === 0;
      svg += '<line class="nl-tick" x1="' + x(i) + '" y1="' + (Y + 7) + '" x2="' + x(i) + '" y2="' + (Y + (big ? 15 : 11)) + '"/>';
      var near = i !== 0 && !(bridge && i === 10) && i !== a && i !== land && (Math.abs(i - a) <= 1 || Math.abs(i - land) <= 1);
      var show = max <= 10 || (big && !near) || i === a || i === land || (bridge && i === 10);
      if (show) {
        var cls = i === land ? 'nl-num ans' : (i === a || (bridge && i === 10)) ? 'nl-num nl-key' : 'nl-num';
        svg += '<text class="' + cls + '" x="' + x(i) + '" y="' + (Y + (i === land ? 33 : 30)) + '">' + i + '</text>';
      }
    }
    /* an arc over a jump; lo and hi keep the first jump taller than a jump back, so their labels never meet */
    function arc(n1, n2, cls, label, lo, hi, arrow) {
      var x1 = x(n1), x2 = x(n2), h = Math.max(lo, Math.min(hi, Math.abs(x2 - x1) * 0.45)), mid = (x1 + x2) / 2;
      var cy = Y - 8 - 2 * h, out = '<path class="nl-arc ' + cls + '" d="M' + x1 + ' ' + (Y - 8) + ' Q' + mid + ' ' + cy + ' ' + x2 + ' ' + (Y - 8) + '"/>';
      if (arrow) {
        var dx = x2 - mid, dy = (Y - 8) - cy, len = Math.sqrt(dx * dx + dy * dy) || 1, ux = dx / len, uy = dy / len;
        var bx = x2 - ux * 8, by = (Y - 8) - uy * 8;
        out += '<path class="nl-arrow" d="M' + x2 + ' ' + (Y - 8) + ' L' + (bx - uy * 4.5).toFixed(1) + ' ' + (by + ux * 4.5).toFixed(1) +
          ' L' + (bx + uy * 4.5).toFixed(1) + ' ' + (by - ux * 4.5).toFixed(1) + 'Z"/>';
      }
      return out + '<text class="nl-lab" x="' + mid + '" y="' + (Y - 14 - h) + '">' + label + '</text>';
    }
    if (minus) {
      if (a) svg += arc(0, a, 'a', a, 22, 32);
      if (b) svg += arc(a, land, 'b', '−' + b, 10, 16, true);
    } else {
      if (a) svg += arc(0, a, 'a', a, 14, 32);
      if (b && bridge) svg += arc(a, 10, 'b', '+' + (10 - a), 14, 32) + arc(10, land, 'b', '+' + (land - 10), 14, 32);
      else if (b) svg += arc(a, land, 'b', '+' + b, 14, 32);
    }
    svg += '<circle class="nl-dot" cx="' + x(land) + '" cy="' + Y + '" r="7"/>';
    svg += '<g class="nl-buddy" id="nl-buddy" transform="translate(' + x(0) + ',0)"><text x="0" y="27">' + T().buddy + '</text></g>';
    svg += '</svg>';
    var box = $('nline');
    box.innerHTML = svg;
    $('stage').hidden = true;
    box.hidden = false;
    var words = minus
      ? (!b ? a + ' take away 0 is still ' + a + '.' : 'Start at ' + a + ', jump back ' + b + ', and land on ' + land + '.')
      : !b ? a + ' and 0 more is still ' + a + '.'
      : bridge ? a + ' and ' + (10 - a) + ' makes 10, and ' + (land - 10) + ' more makes ' + land + '.'
      : a + ' and ' + b + ' more makes ' + land + '.';
    $('cap').textContent = words;
    box.setAttribute('aria-label', 'Number line: ' + words);
    /* the buddy jumps the sections the arcs show: 0 to the first number, then the second number in one go
       (forward to add, back to take away; split at 10 when a sum passes 10) */
    var bud = document.getElementById('nl-buddy'), still = calm && calm.matches, chunks = [];
    if (a) chunks.push([0, a]);
    if (bridge) { chunks.push([a, 10]); chunks.push([10, land]); } else if (b) chunks.push([a, land]);
    if (still || !chunks.length) { bud.setAttribute('transform', 'translate(' + x(land) + ',0)'); return; }
    var plan = [], at = 0, start = 0;
    chunks.forEach(function (c) {
      var w = Math.abs(x(c[1]) - x(c[0])), dur = Math.round(Math.max(320, Math.min(650, 160 + w * 3)));
      plan.push({ from: x(c[0]), to: x(c[1]), t0: at, dur: dur, h: Math.max(12, Math.min(30, w * 0.25)) });
      at += dur + 180;
    });
    function frame(now) {
      if (!bud.isConnected) return;
      if (!start) start = now;
      var e = now - start, px = plan[plan.length - 1].to, py = 0, more = false;
      for (var n = 0; n < plan.length; n++) {
        var pl = plan[n];
        if (e < pl.t0) { px = pl.from; more = true; break; }
        if (e < pl.t0 + pl.dur) {
          var f = (e - pl.t0) / pl.dur;
          px = pl.from + (pl.to - pl.from) * f; py = -pl.h * 4 * f * (1 - f); more = true; break;
        }
      }
      bud.setAttribute('transform', 'translate(' + px.toFixed(1) + ',' + py.toFixed(1) + ')');
      if (more) requestAnimationFrame(frame);
    }
    setTimeout(function () { requestAnimationFrame(frame); }, 250);
  }
  /* ---------- Times, learning mode: a little cheer after each right answer ----------
     A themed "well done", a happy emoji, a hop from the dots, and the sum said the way the dots read
     (2 × 3 is two rows of three: "Two threes make 6."). */
  var CHEER_EMOJI = ['⭐', '🌟', '✨', '🎉', '👏', '🙌', '💪', '🥳', '🏅', '💯', '🤩', '😄'];
  var NUM_WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  var GROUP_WORD = ['zeros', 'ones', 'twos', 'threes', 'fours', 'fives', 'sixes', 'sevens', 'eights', 'nines', 'tens', 'elevens', 'twelves'];
  var cheerSaid = '', lastEmoji = '';
  function groupsOf(count, per) { return count === 1 ? 'one ' + NUM_WORD[per] : NUM_WORD[count] + ' ' + GROUP_WORD[per]; }
  /* "Two threes make 6." When a number is split, the two parts and how they add up:
     "Six sixes and one six: 36 + 6 = 42." */
  function listWords(w) { return w.length === 1 ? w[0] : w.slice(0, -1).join(', ') + ' and ' + w[w.length - 1]; }
  /* "Two threes make 6." Split, the parts and how they add up: "Six sixes and one six: 36 + 6 = 42.",
     or with lots of parts, "That's 15 + 15 + 6 + 6 = 42." */
  function timesFact() {
    var rows = turned ? q.b : q.a, per = turned ? q.a : q.b, sp = splitParts(), s;
    if (!sp.rows && !sp.cols) s = rows === 1 ? 'one ' + NUM_WORD[per] + ' is ' + per : groupsOf(rows, per) + ' make ' + rows * per;
    else {
      var rP = sp.rows || [rows], cP = sp.cols || [per], nums = [], words = null;
      rP.forEach(function (r) { cP.forEach(function (c) { nums.push(r * c); }); });
      if (nums.length <= 3 && !sp.cols) words = rP.map(function (r) { return groupsOf(r, per); });
      else if (nums.length <= 3 && !sp.rows) words = cP.map(function (c) { return groupsOf(rows, c); });
      s = (words ? listWords(words) + ': ' : 'that’s ') + nums.join(' + ') + ' = ' + rows * per;
    }
    return s.charAt(0).toUpperCase() + s.slice(1) + '.';
  }
  /* division: the times fact that goes with it, the way the dots read: "Four sixes make 24, so 24 ÷ 6 = 4." */
  function divideFact() {
    var n = q.a / q.b, rows = turned ? q.b : n, per = turned ? n : q.b;
    var s = rows === 1 ? 'one ' + NUM_WORD[per] + ' is ' + q.a : groupsOf(rows, per) + ' make ' + q.a;
    return s.charAt(0).toUpperCase() + s.slice(1) + ', so ' + q.a + ' ÷ ' + q.b + ' = ' + n + '.';
  }
  function cheerText() { setMsg(cheerSaid + ' ' + (mode === 'divide' ? divideFact() : timesFact()), 'yay'); }
  function cheer() {
    var e = $('cheer-emoji'), st = $('stage'), pick;
    do { pick = CHEER_EMOJI[Math.floor(Math.random() * CHEER_EMOJI.length)]; } while (pick === lastEmoji);
    lastEmoji = pick;
    cheerSaid = nice();
    e.textContent = pick;
    e.hidden = false;
    e.classList.remove('pop'); void e.offsetWidth; e.classList.add('pop');
    cheerText();
    st.classList.remove('joy'); void st.offsetWidth; st.classList.add('joy');
  }

  /* after the number line or the cheer: the next question, or the finish screen if that was the last of the round */
  var lineThen = '';
  function afterLine() {
    if (lineThen === 'finish') { lineThen = ''; phase = 'finish'; showFinish(); return; }
    nextQuestion();
  }

  /* ---------- Finish line: a party when the round's questions are all solved ---------- */
  /* The clock only runs while a question is waiting for an answer. In a timed game it shows in the
     bar as a stopwatch and on the finish screen; untimed games don't show it at all. */
  function startClock() { if (!clock) clock = Date.now(); }
  function stopClock() {
    var st = stats[mode];
    if (clock && st) st.ms = (st.ms || 0) + (Date.now() - clock);
    clock = 0;
  }
  var tick = 0;
  function clockMs() { var st = stats[mode]; return st ? (st.ms || 0) + (clock ? Date.now() - clock : 0) : 0; }
  function renderClock() {
    var t = Math.floor(clockMs() / 1000);
    $('clock-time').textContent = Math.floor(t / 60) + ':' + ('0' + t % 60).slice(-2);
  }
  function startTick() { stopTick(); tick = setInterval(renderClock, 250); }
  function stopTick() { clearInterval(tick); tick = 0; }
  function fmtTime(ms) {
    var total = Math.max(1, Math.round((ms || 0) / 1000)), m = Math.floor(total / 60), s = total % 60;
    if (!m) return s + (s === 1 ? ' second' : ' seconds');
    return m + ' min ' + s + ' s';
  }
  function showFinish() {
    var n = stats[mode].solved;
    stopTick();
    renderClock();
    $('finish-time').textContent = speed[mode] ? 'Your time: ' + fmtTime(stats[mode].ms) : '';
    $('finish-time').hidden = !speed[mode];
    $('finish-title').textContent = n + ' solved!';
    finishSay();
    if (LF.petInto) LF.petInto($('finish-pet'));
    $('finish').hidden = false;
    $('finish-more').focus({ preventScroll: true });
    bigCelebrate();
  }

  /* end of a round: one gentle shower of confetti, nothing more */
  function bigCelebrate() {
    waves.push(setTimeout(function () { celebrate('confetti', true); }, 150));
  }
  /* leaving the finish screen: stop the confetti still on its way, so it doesn't fall over the next game */
  function stopParty() {
    waves.forEach(clearTimeout);
    waves = [];
    parts = [];
    cancelAnimationFrame(raf);
    if (ctx) ctx.clearRect(0, 0, W, H);
  }

  /* ---------- Dot picture ---------- */
  function addDot(r, c, colour, gone) {
    var el = document.createElement('span');
    el.className = 'dot';
    el.style.setProperty('--c', 'var(--d' + colour + ')');
    el.style.animationDelay = ((r + c) * 35) + 'ms';
    $('stage').appendChild(el);
    dots.push({ el: el, r: r, c: c, gone: gone });
  }
  function buildDots() {
    var st = $('stage'), r, c, i;
    st.textContent = '';
    st.classList.remove('joy');
    dots = []; turned = false; split = { a: null, b: null }; stageParts = [];
    if (mode === 'times') {
      /* a rows of b, one colour per row */
      grid = { rows: q.a, cols: q.b };
      for (r = 0; r < q.a; r++) for (c = 0; c < q.b; c++) addDot(r, c, r % 6 + 1, false);
    } else if (mode === 'divide') {
      /* a dots in rows of b: the answer is how many rows. Turned, the same dots shared into b rows. */
      grid = { rows: q.a / q.b, cols: q.b };
      for (r = 0; r < grid.rows; r++) for (c = 0; c < q.b; c++) addDot(r, c, r % 6 + 1, false);
    } else if (mode === 'plus') {
      /* ten-frames: the first number fills from the left and the second carries on after it,
         so the empty spaces show how many more make ten. Tapping swaps which number goes first. */
      var total = q.a + q.b, el, isA;
      grid = { frames: total > 10 ? 2 : 1 };
      for (i = 0; i < grid.frames * 10; i++) {
        isA = i < q.a;
        el = document.createElement('span');
        el.className = 'dot' + (i >= total ? ' empty' : '');
        if (i < total) el.style.setProperty('--c', 'var(--d' + (isA ? 1 : 3) + ')');
        el.style.animationDelay = (i * 25) + 'ms';
        st.appendChild(el);
        dots.push({ el: el, s0: i, s1: i >= total ? i : (isA ? q.b + i : i - q.a), gone: false });
      }
    } else {
      /* ten-frame: rows of five, the last b dots are the ones taken away */
      grid = { rows: Math.max(1, Math.ceil(q.a / 5)), cols: Math.max(1, Math.min(q.a, 5)) };
      for (i = 0; i < q.a; i++) addDot(Math.floor(i / 5), i % 5, Math.floor(i / 5) ? 5 : 1, i >= q.a - q.b);
    }
    paintGone();
    layout(true);
    caption();
  }
  function paintGone() {
    for (var i = 0; i < dots.length; i++) dots[i].el.classList.toggle('gone', dots[i].gone && !turned);
  }
  /* times: the parts of the rows number and of the columns number, as drawn (null = not split) */
  function splitParts() {
    if (mode !== 'times' || !q) return { rows: null, cols: null };
    return { rows: split[turned ? 'b' : 'a'], cols: split[turned ? 'a' : 'b'] };
  }
  /* for each row (or column): [which part it is in, its place in that part] */
  function partOf(list, n) {
    var out = [];
    (list || [n]).forEach(function (len, p) { for (var o = 0; o < len; o++) out.push([p, o]); });
    return out;
  }
  function layout(snap) {
    var st = $('stage');
    if (!q || !dots.length) return;
    var W = st.clientWidth, H = st.clientHeight;
    if (!W || !H) return;
    var swap = turned && (mode === 'times' || mode === 'divide'), rows, cols;
    if (mode === 'plus') { rows = 2; cols = grid.frames === 2 ? 10.5 : 5; }
    else { rows = swap ? grid.cols : grid.rows; cols = swap ? grid.rows : grid.cols; }
    /* split numbers open gaps across the rows and down the columns, with a panel behind each block of dots */
    var sp = splitParts(), rP = sp.rows || [rows], cP = sp.cols || [cols], rAt = partOf(sp.rows, rows), cAt = partOf(sp.cols, cols);
    var gy = (rP.length - 1) * SPLIT_GAP, gx = (cP.length - 1) * SPLIT_GAP, m = gx || gy ? 0.2 : 0;
    var s = Math.min(W / (cols + gx + m), H / (rows + gy + m), 40);
    var ox = (W - (cols + gx) * s) / 2, oy = (H - (rows + gy) * s) / 2, d = s * 0.8, pad = s * 0.1;
    if (snap) st.classList.add('snap');
    for (var i = 0; i < dots.length; i++) {
      var p = dots[i], e = p.el.style, r, c;
      if (mode === 'plus') {
        /* slot -> ten-frame position; the second frame sits half a dot to the right of the first */
        var sl = turned ? p.s1 : p.s0, k = sl % 10;
        r = Math.floor(k / 5); c = Math.floor(sl / 10) * 5.5 + k % 5;
      } else { r = swap ? p.c : p.r; c = swap ? p.r : p.c; }
      /* times: every row is one group of the second number, so each row gets one colour, turned or not */
      if (mode === 'times' || mode === 'divide') e.setProperty('--c', 'var(--d' + (r % 6 + 1) + ')');
      var rg = sp.rows ? rAt[r][0] * SPLIT_GAP : 0, cg = sp.cols ? cAt[c][0] * SPLIT_GAP : 0;
      e.left = (ox + (c + cg) * s + pad) + 'px';
      e.top = (oy + (r + rg) * s + pad) + 'px';
      e.width = d + 'px'; e.height = d + 'px';
      e.fontSize = d + 'px';
    }
    var boxes = [];
    if (gx || gy) {
      var y0 = 0;
      rP.forEach(function (rn) {
        var x0 = 0;
        cP.forEach(function (cn) { boxes.push([x0, y0, cn, rn]); x0 += cn + SPLIT_GAP; });
        y0 += rn + SPLIT_GAP;
      });
    }
    placeParts(st, stageParts, boxes, ox, oy, s);
    st.classList.toggle('faces', d >= 20);
    if (snap) { void st.offsetWidth; st.classList.remove('snap'); }
  }
  /* boxes are [x, y, w, h] in dot cells; each panel reaches a little past its dots. Panels are made as
     needed and sit behind the dots. One that is just appearing jumps into place and fades in. */
  function placeParts(st, list, boxes, ox, oy, s) {
    while (list.length < boxes.length) {
      var np = document.createElement('span');
      np.className = 'part';
      st.insertBefore(np, st.firstChild);
      list.push(np);
    }
    list.forEach(function (p, i) {
      var b = boxes[i], was = p.classList.contains('on'), e = p.style;
      if (!b) { p.classList.remove('on'); return; }
      if (!was) e.transition = 'none';
      e.left = (ox + (b[0] - 0.1) * s) + 'px';
      e.top = (oy + (b[1] - 0.1) * s) + 'px';
      e.width = ((b[2] + 0.2) * s) + 'px';
      e.height = ((b[3] + 0.2) * s) + 'px';
      e.borderRadius = Math.max(8, s * 0.35) + 'px';
      if (!was) { void p.offsetWidth; e.transition = ''; }
      p.classList.add('on');
    });
  }
  /* Splitting, for the times sums and for number play:
     tapping a number breaks 1 off it, 7 -> (6 + 1) -> and the 6 again -> (5 + 1 + 1);
     tapping a + moves one over it, (6 + 1) -> (5 + 2) -> ... -> (1 + 6), and the next tap joins them, back to 7. */
  function splitOp(list, z, kind, i) {
    var p = (list || [z]).slice();
    if (kind === 'part') {
      if (!(p[i] > 1)) return list;
      p.splice(i, 1, p[i] - 1, 1);
    } else {
      if (!(i >= 0 && i < p.length - 1)) return list;
      p[i]--; p[i + 1]++;
      if (!p[i]) p.splice(i, 1);
    }
    return p.length > 1 ? p : null;
  }
  /* a number of a times sum as tap targets: 7, or (5 + 1 + 1) with every number above 1 and every + tappable */
  function addPieces(box, key, z, list, pre) {
    var p = list || [z];
    function add(cls, text, data, id, label) {
      var e = document.createElement('span');
      e.className = cls;
      e.textContent = text;
      if (data) {
        e.id = id;
        e.setAttribute('role', 'button');
        e.tabIndex = 0;
        e.setAttribute('aria-label', label);
        e.dataset.key = key;
        e.dataset[data[0]] = data[1];
      }
      box.appendChild(e);
    }
    if (p.length > 1) box.appendChild(document.createTextNode('('));
    p.forEach(function (n, i) {
      if (i) add('tap-p', ' + ', ['plus', i - 1], pre + 's-' + key + '-' + (i - 1), 'Move one from ' + p[i - 1] + ' over to ' + n);
      add(n > 1 ? 'tap-n' : 'tap-1', String(n), n > 1 ? ['part', i] : null, pre + 'p-' + key + '-' + i, 'Split ' + n);
    });
    if (p.length > 1) box.appendChild(document.createTextNode(')'));
  }
  function pieceOf(t) {
    var plus = t.hasAttribute('data-plus');
    return { key: t.dataset.key, kind: plus ? 'plus' : 'part', i: Number(plus ? t.dataset.plus : t.dataset.part) };
  }
  /* the tapped piece (or the first piece, if it is gone) gives a little hop, and keeps the focus for keyboards */
  function hopPiece(id, key, pre, keyboard) {
    var el = $(id) || $(pre + 'p-' + key + '-0');
    if (!el) return;
    el.classList.remove('swapped'); void el.offsetWidth; el.classList.add('swapped');
    if (keyboard) el.focus({ preventScroll: true });
  }
  function spoken(el) { return el.textContent.replace(/[()]/g, '').replace(/\s*\+\s*/g, ' plus '); }
  function rowsOf(r, p) { return r + (r === 1 ? ' row' : ' rows') + ' of ' + p; }
  function splitTap(t, keyboard) {
    if (mode !== 'times' || !q || phase === 'finish') return;
    var w = pieceOf(t), next = splitOp(split[w.key], q[w.key], w.kind, w.i), id = t.id;
    if (next === split[w.key]) return;
    split[w.key] = next;
    layout(false);
    caption();
    if (phase === 'line' && cheerSaid) cheerText();
    hopPiece(id, w.key, 'q', keyboard);
  }
  /* a long split sum shrinks to fit the line */
  function fitQuestion() {
    var el = $('question'), size;
    el.style.fontSize = '';
    if (!el.classList.contains('split') || !el.clientWidth) return;
    size = parseFloat(getComputedStyle(el).fontSize);
    while (el.scrollWidth > el.clientWidth + 1 && size > 16) { size -= 2; el.style.fontSize = size + 'px'; }
  }
  function nDots(n) { return n === 1 ? '1 dot' : n + ' dots'; }
  function caption() {
    var text, label;
    /* the sum always reads the way the picture is drawn */
    var swap = turned && (mode === 'times' || mode === 'plus');
    var ka = swap ? 'b' : 'a', kb = swap ? 'a' : 'b', fa = q[ka], fb = q[kb], qa = $('qa'), qb = $('qb');
    var anySplit = mode === 'times' && !!(split.a || split.b);
    qa.textContent = '';
    qb.textContent = '';
    if (mode === 'times') {
      /* in times, the numbers can be tapped to split them */
      addPieces(qa, ka, fa, split[ka], 'q');
      addPieces(qb, kb, fb, split[kb], 'q');
    } else {
      qa.textContent = fa;
      qb.textContent = fb;
    }
    $('question').classList.toggle('split', anySplit);
    $('question').setAttribute('aria-label', spoken(qa) + ' ' + WORD[mode] + ' ' + spoken(qb) + ' equals');
    fitQuestion();
    if (mode === 'times') {
      var rows = turned ? q.b : q.a, per = turned ? q.a : q.b, sp = splitParts();
      var t = !anySplit ? rowsOf(rows, per) :
        (sp.rows ? sp.rows.join(' + ') : rows) + (!sp.rows && rows === 1 ? ' row of ' : ' rows of ') + (sp.cols ? sp.cols.join(' + ') : per);
      text = anySplit ? t + '. Tap a number to split it again, or a + to move one over.' :
        turned ? t + '. Same dots, same answer!' : t + '. Tap the dots to turn, or a number to split.';
      label = 'Dot picture: ' + t + '. Press to turn it.';
    } else if (mode === 'divide') {
      var nRows = q.a / q.b;
      if (!turned) {
        text = nDots(q.a) + ' in rows of ' + q.b + ': how many rows? Tap to share them out.';
        label = 'Dot picture: ' + nDots(q.a) + ' in rows of ' + q.b + '. Press to share them into ' + q.b + ' rows.';
      } else {
        text = nDots(q.a) + ' shared into ' + q.b + (q.b === 1 ? ' row' : ' rows') + ': how many in each?';
        label = 'Dot picture: ' + nDots(q.a) + ' shared into ' + q.b + ' rows. Press to put them in rows of ' + q.b + '.';
      }
      if (nRows === q.b) text = nDots(q.a) + ' in rows of ' + q.b + ': how many rows?';
    } else if (mode === 'plus') {
      if (!(q.a + q.b)) {
        text = 'No dots at all.';
        label = 'Dot picture: no dots.';
      } else {
        var t2 = nDots(fa) + ' and ' + fb + ' more';
        text = turned ? t2 + '. Same dots, same answer!' : t2 + '. Tap the dots to swap them.';
        label = 'Dot picture in ten-frames: ' + t2 + '. Press to swap.';
      }
    } else if (q.a === 0) {
      text = 'No dots, and nothing to take away.';
      label = 'Dot picture: no dots.';
    } else if (q.b === 0) {
      text = nDots(q.a) + ', take away none.';
      label = 'Dot picture: ' + text;
    } else if (turned) {
      text = 'All ' + nDots(q.a) + ' are back. Tap to take ' + q.b + ' away.';
      label = 'Dot picture: ' + nDots(q.a) + '. Press to take ' + q.b + ' away.';
    } else {
      text = nDots(q.a) + ', take away ' + q.b + '. Tap to put them back.';
      label = 'Dot picture: ' + nDots(q.a) + ', ' + q.b + ' taken away. Press to put them back.';
    }
    $('cap').textContent = text;
    $('stage').setAttribute('aria-label', label);
  }
  function turn() {
    if (mode === 'minus' && (q.a === 0 || q.b === 0)) return;
    if (mode === 'plus' && !(q.a + q.b)) return;
    var moves = mode === 'times' || mode === 'plus' || mode === 'divide';
    turned = !turned;
    if (moves) layout(false); else paintGone();
    caption();
    /* the cheer's sentence follows the dots when they turn */
    if (phase === 'line' && (mode === 'times' || mode === 'divide') && cheerSaid) cheerText();
    if (moves) ['qa', 'qb'].forEach(function (id) {
      var el = $(id);
      el.classList.remove('swapped'); void el.offsetWidth; el.classList.add('swapped');
    });
  }

  /* ---------- Number play: pick a number, chunk it into equal groups or break it into parts ---------- */
  var PG_MAX = 144;
  var PART_COLOURS = [1, 3, 5, 2, 4, 6];
  /* sp: in "Chunk it", the numbers of the sum split into parts: d is the group size picked, q is n ÷ d */
  var pg = { n: 12, mode: 'chunk', d: 3, turned: false, cuts: [], dots: [], parts: [], sp: { d: null, q: null }, last: null, built: false };
  /* prime factors with repeats, smallest first: 12 -> [2, 2, 3] */
  function primeFactors(n) {
    var out = [], p = 2;
    while (n > 1) {
      while (n % p === 0) { out.push(p); n /= p; }
      p++;
      if (p * p > n && n > 1) { out.push(n); break; }
    }
    return out;
  }
  /* "10 + 10 + ... + 4" gets long, so runs of three or more equal parts are written as a product */
  function sumText(parts) {
    if (parts.length <= 6) return parts.join(' + ');
    var out = [], i = 0, j;
    while (i < parts.length) {
      j = i;
      while (j < parts.length && parts[j] === parts[i]) j++;
      out.push(j - i >= 3 ? (j - i) + ' × ' + parts[i] : parts.slice(i, j).join(' + '));
      i = j;
    }
    return out.join(' + ');
  }
  var pgTimer = 0;
  function divisorsOf(n) {
    var out = [];
    for (var i = 1; i <= n; i++) if (n % i === 0) out.push(i);
    return out;
  }
  function showPlay() {
    window.scrollTo(0, 0);
    mode = 'play';
    $('menu').hidden = true;
    $('play').hidden = false;
    pgSetN(pg.n, !pg.built);
  }
  function pgSetN(value, force) {
    var n = Math.max(1, Math.min(PG_MAX, Math.round(Number(value)) || 1)), i;
    $('pg-n').value = n;
    if (n === pg.n && !force) return;
    pg.n = n;
    pg.built = true;
    var divs = divisorsOf(n);
    if (divs.indexOf(pg.d) < 0) pg.d = divs.length > 2 ? divs[Math.floor((divs.length - 1) / 2)] : 1;
    pg.turned = false;
    pg.cuts = [];
    pg.sp = { d: null, q: null };
    var st = $('pg-stage');
    st.textContent = '';
    pg.parts = [];
    pg.dots = [];
    for (i = 0; i < n; i++) {
      var el = document.createElement('span');
      el.className = 'dot';
      el.dataset.i = i;
      st.appendChild(el);
      pg.dots.push(el);
    }
    pgRender(true);
  }
  /* how wide to draw one group: up to ten in a row, bigger groups as a neat rectangle */
  function blockWidth(c) {
    if (c <= 10) return c;
    for (var w = Math.ceil(Math.sqrt(c)); w <= 12; w++) if (c % w === 0) return w;
    return 10;
  }
  function pgParts() {
    var cuts = pg.cuts.slice().sort(function (a, b) { return a - b; }), parts = [], from = 0;
    cuts.forEach(function (c) { parts.push([from, c]); from = c + 1; });
    parts.push([from, pg.n - 1]);
    return parts;
  }
  /* chunk it: the parts of the number of groups and of the group size, as drawn (null = not split) */
  function pgSplit() {
    if (pg.mode !== 'chunk') return { count: null, per: null };
    return { count: pg.sp[pg.turned ? 'd' : 'q'], per: pg.sp[pg.turned ? 'q' : 'd'] };
  }
  function pgRender(snap) {
    var n = pg.n, panels = [[]], assign = [], grid2 = [1, 1], i;
    if (pg.mode === 'chunk') {
      /* n dots in groups of d; turning swaps to d groups, each dot keeping its first group's colour.
         Split the number of groups: each part's groups get their own panel.
         Split the group size: every group breaks into pieces, each size of piece in its own panel,
         each piece keeping its group's colour. Both split: a grid of panels. */
      var size = pg.d, groups = n / size, per = pg.turned ? groups : size, count = pg.turned ? size : groups, sp = pgSplit();
      var cP = sp.count || [count], pP = sp.per || [per], cAt = partOf(sp.count, count), pAt = partOf(sp.per, per), J = pP.length;
      var blk = function (x) { return { n: x, w: blockWidth(x) }; };
      panels = [];
      cP.forEach(function (cn) {
        pP.forEach(function (pn) {
          var bl = [];
          for (var t = 0; t < cn; t++) bl.push(blk(pn));
          panels.push(bl);
        });
      });
      grid2 = [cP.length, J];
      for (i = 0; i < n; i++) {
        var g = Math.floor(i / size), k = i % size, ci = pg.turned ? k : g, pi = pg.turned ? g : k;
        assign.push({ p: cAt[ci][0] * J + pAt[pi][0], b: cAt[ci][1], k: pAt[pi][1], c: 'var(--d' + (g % 6 + 1) + ')' });
      }
    } else {
      /* each part sits apart from the others, in rows of ten */
      pgParts().forEach(function (pt, p) {
        var len = pt[1] - pt[0] + 1;
        panels[0].push({ n: len, w: Math.min(len, 10) });
        for (var j = pt[0]; j <= pt[1]; j++) assign.push({ p: 0, b: p, k: j - pt[0], c: 'var(--d' + PART_COLOURS[p % 6] + ')' });
      });
    }
    pg.last = { panels: panels, assign: assign, grid: grid2 };
    pgPlace(snap);
    pgTools();
    pgWords();
  }
  /* groups go in lines no wider than L */
  function packBlocks(blocks, L, gap) {
    var x = 0, y = 0, lineH = 0, usedW = 0, pos = [];
    blocks.forEach(function (b) {
      if (x > 0 && x + b.w > L + 1e-6) { y += lineH + gap; x = 0; lineH = 0; }
      pos.push([x, y]);
      usedW = Math.max(usedW, x + b.w);
      x += b.w + gap;
      lineH = Math.max(lineH, b.h);
    });
    return { pos: pos, w: usedW, h: y + lineH };
  }
  /* lay the groups out in lines, trying each line width and keeping the one with the biggest dots.
     Split panels sit in a grid, one row of panels per part of the number of groups and one column per part
     of the group size, or the other way round, whichever fits bigger. */
  function pgPlace(snap) {
    var st = $('pg-stage'), W = st.clientWidth, H = st.clientHeight, L0 = pg.last;
    if (!L0 || !W || !H) return;
    var panels = L0.panels, assign = L0.assign, I = L0.grid[0], J = L0.grid[1], many = I * J > 1, gap = 0.8, m = many ? 0.2 : 0;
    var maxW = 0, sumW = 0, best = null, i, L;
    panels.forEach(function (bl) {
      var w = -gap;
      bl.forEach(function (bk) { bk.h = Math.ceil(bk.n / bk.w); maxW = Math.max(maxW, bk.w); w += bk.w + gap; });
      sumW = Math.max(sumW, w);
    });
    function consider(packs, offs, w, h) {
      var s0 = Math.min(W / (w + m), H / (h + m), 44);
      if (!best || s0 > best.s + 1e-6) best = { s: s0, packs: packs, offs: offs, w: w, h: h };
    }
    function arrange(packs, tr) {
      var R = tr ? J : I, C = tr ? I : J, colW = [], rowH = [], xs = [], ys = [], x = 0, y = 0, j;
      for (j = 0; j < C; j++) colW.push(0);
      for (j = 0; j < R; j++) rowH.push(0);
      var rc = packs.map(function (pk, idx) {
        var a = Math.floor(idx / J), b = idx % J, r = tr ? b : a, c = tr ? a : b;
        colW[c] = Math.max(colW[c], pk.w);
        rowH[r] = Math.max(rowH[r], pk.h);
        return [r, c];
      });
      colW.forEach(function (w) { xs.push(x); x += w + SPLIT_GAP; });
      rowH.forEach(function (h) { ys.push(y); y += h + SPLIT_GAP; });
      consider(packs, packs.map(function (pk, idx) {
        var r = rc[idx][0], c = rc[idx][1];
        return [xs[c] + (colW[c] - pk.w) / 2, ys[r] + (rowH[r] - pk.h) / 2];
      }), x - SPLIT_GAP, y - SPLIT_GAP);
    }
    for (L = maxW; L <= Math.max(maxW, Math.ceil(sumW)); L += 1) {
      var packs = panels.map(function (bl) { return packBlocks(bl, L, gap); });
      if (!many) consider(packs, [[0, 0]], packs[0].w, packs[0].h);
      else { arrange(packs, false); arrange(packs, true); }
    }
    var s = best.s, ox = (W - best.w * s) / 2, oy = (H - best.h * s) / 2, d = s * 0.8, pad = s * 0.1;
    if (snap) st.classList.add('snap');
    for (i = 0; i < pg.dots.length; i++) {
      var a = assign[i], bk = panels[a.p][a.b], p = best.packs[a.p].pos[a.b], o = best.offs[a.p], e = pg.dots[i].style;
      e.left = (ox + (o[0] + p[0] + a.k % bk.w) * s + pad) + 'px';
      e.top = (oy + (o[1] + p[1] + Math.floor(a.k / bk.w)) * s + pad) + 'px';
      e.width = d + 'px'; e.height = d + 'px'; e.fontSize = d + 'px';
      e.setProperty('--c', a.c);
    }
    placeParts(st, pg.parts, many ? best.packs.map(function (pk, j) { return [best.offs[j][0], best.offs[j][1], pk.w, pk.h]; }) : [], ox, oy, s);
    st.classList.toggle('faces', d >= 20);
    if (snap) { void st.offsetWidth; st.classList.remove('snap'); }
  }
  function pgTools() {
    var box = $('pg-tools'), n = pg.n;
    ['chunk', 'break'].forEach(function (m) { $('pg-mode-' + m).setAttribute('aria-pressed', m === pg.mode ? 'true' : 'false'); });
    box.textContent = '';
    function add(id, label, data, pressed, aria) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.id = id;
      b.textContent = label;
      Object.keys(data).forEach(function (k) { b.dataset[k] = data[k]; });
      if (pressed !== null) b.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      if (aria) b.setAttribute('aria-label', aria);
      box.appendChild(b);
    }
    if (pg.mode === 'chunk') {
      divisorsOf(n).forEach(function (d) { add('pg-div-' + d, String(d), { div: d }, d === pg.d, 'Groups of ' + d); });
    } else {
      if (n > 10) add('pg-act-tens', 'Tens and ones', { act: 'tens' }, null);
      if (n % 2 === 0) add('pg-act-halves', 'Halves', { act: 'halves' }, null);
      if (pg.cuts.length) add('pg-act-join', 'Join back', { act: 'join' }, null);
    }
  }
  function pgWords() {
    var n = pg.n, divs = divisorsOf(n), root = Math.round(Math.sqrt(n)), eq = [], note, fact;
    if (n === 1) fact = '1 is special: its only divisor is 1.';
    else if (divs.length === 2) fact = n + ' is a prime number: only 1 and ' + n + ' divide it evenly.';
    else if (root * root === n) fact = n + ' is a square number: ' + root + ' × ' + root + '.';
    else fact = n + ' has ' + divs.length + ' divisors.';
    if (divs.length > 2) fact += ' Prime factors: ' + primeFactors(n).join(' × ') + '.';
    if (pg.mode === 'chunk') {
      var size = pg.d, groups = n / size, gN = pg.turned ? size : groups, per = pg.turned ? groups : size, sp = pgSplit();
      /* the numbers of the times sum can be tapped to split them, like in the times tables */
      var head = [{ key: pg.turned ? 'd' : 'q', z: gN }, ' × ', { key: pg.turned ? 'q' : 'd', z: per }];
      if (!sp.count && !sp.per) {
        eq = [head.concat(' = ' + n), n + ' ÷ ' + per + ' = ' + gN];
        note = (pg.turned ? 'Now ' : '') + gN + (gN === 1 ? ' group of ' : ' groups of ') + per + '. ' +
          (pg.turned ? 'Same dots!' : 'Tap the dots to swap.') + (gN > 1 || per > 1 ? ' Tap a number in the sum to split it.' : '');
      } else {
        var cP = sp.count || [gN], pP = sp.per || [per], nums = [];
        cP.forEach(function (c) { pP.forEach(function (pp) { nums.push(c * pp); }); });
        eq = [head.concat(' = ' + n), nums.join(' + ') + ' = ' + n];
        note = cP.join(' + ') + (!sp.count && gN === 1 ? ' group of ' : ' groups of ') + pP.join(' + ') +
          '. Tap a number to split it again, or a + to move one over.';
      }
    } else {
      var parts = pgParts().map(function (pt) { return pt[1] - pt[0] + 1; });
      eq = [parts.length > 1 ? n + ' = ' + sumText(parts) : String(n)];
      if (parts.length > 1) {
        note = 'Tap a dot to break after it, or the last dot of a part to join it back.';
      } else {
        note = n > 1 ? 'Tap a dot to break the number after it.' : 'Pick a bigger number to break apart.';
      }
    }
    var box = $('pg-eq'), said = [];
    box.textContent = '';
    eq.forEach(function (t) {
      var s = document.createElement('span');
      (Array.isArray(t) ? t : [t]).forEach(function (bit) {
        if (typeof bit === 'string') { s.appendChild(document.createTextNode(bit)); return; }
        addPieces(s, bit.key, bit.z, pg.sp[bit.key], 'pg');
      });
      box.appendChild(s);
      said.push(spoken(s));
    });
    $('pg-note').textContent = note + ' ' + fact;
    $('pg-stage').setAttribute('aria-label', 'Dot picture: ' + said.join(', ') + '. ' + note);
  }

  /* ---------- Addition and subtraction: biggest number picker ---------- */
  function renderSumChips() {
    var box = $('chips-sum'), cur = mode === 'minus' ? minusMax : sumMax;
    box.textContent = '';
    SUM_OPTIONS.forEach(function (v) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.id = 'sum-' + v;
      b.dataset.sum = v;
      b.textContent = v;
      b.setAttribute('aria-pressed', v === cur ? 'true' : 'false');
      b.setAttribute('aria-label', (mode === 'minus' ? 'Numbers up to ' : 'Answers up to ') + v);
      box.appendChild(b);
    });
  }
  function pickSumMax(v) {
    if (mode === 'minus') minusMax = v; else sumMax = v;
    save();
    renderSumChips();
    var again = $('sum-' + v);
    if (again) again.focus({ preventScroll: true });
  }

  /* ---------- Table picker ---------- */
  function pickList(which) {
    if (mode === 'divide') return which === 'first' ? divBy : divAns;
    return which === 'first' ? tables : seconds;
  }
  function renderChips() {
    ['first', 'second'].forEach(function (which) {
      var box = $('chips-' + which), list = pickList(which);
      box.textContent = '';
      for (var n = 1; n <= MAX; n++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'chip';
        b.id = which + '-' + n;
        b.dataset.pick = which;
        b.dataset.n = n;
        b.textContent = n;
        b.setAttribute('aria-pressed', list.indexOf(n) >= 0 ? 'true' : 'false');
        box.appendChild(b);
      }
    });
  }
  function pickChanged(focusId) {
    save();
    renderChips();
    var again = $(focusId);
    if (again) again.focus({ preventScroll: true });
  }
  function togglePick(which, n) {
    var list = pickList(which), i = list.indexOf(n);
    if (i >= 0) {
      if (list.length === 1) { setupSay('Keep at least one number switched on.'); return; }
      list.splice(i, 1);
    } else {
      list.push(n);
    }
    pickChanged(which + '-' + n);
  }
  function pickAll(which) {
    var list = pickList(which);
    list.length = 0;
    for (var n = 1; n <= MAX; n++) list.push(n);
    pickChanged('all-' + which);
  }

  /* ---------- Celebrations (canvas) ---------- */
  var cv = $('party'), ctx = cv.getContext('2d');
  var W = 0, H = 0, parts = [], raf = 0, prev = 0;
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');

  function fit() {
    var d = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = Math.round(W * d); cv.height = Math.round(H * d);
    ctx.setTransform(d, 0, 0, d, 0, 0);
  }
  /* party colours come from the current theme's palette */
  var paint = [];
  function loadPaint() {
    var cs = getComputedStyle(document.documentElement);
    paint = ['--d1', '--d2', '--d3', '--d4', '--d5', '--d6', '--accent'].map(function (k) {
      return cs.getPropertyValue(k).trim();
    }).filter(Boolean);
  }
  function colour() {
    return paint.length ? paint[Math.floor(Math.random() * paint.length)] : '#FFC93C';
  }
  function P(o) {
    return Object.assign({ x: 0, y: 0, vx: 0, vy: 0, g: 0, drag: 1, rot: rand(0, 6.28), vr: 0,
      size: 8, shape: 'rect', life: 2, age: 0, delay: 0, wa: 0, wf: 0, ph: rand(0, 6.28), col: '#fff' }, o);
  }
  function celebrate(kind, add) {
    if (calm && calm.matches) return;
    fit();
    loadPaint();
    if (!add) parts = [];
    var hue = rand(0, 360), spread = [25, 60, 180][randInt(0, 2)], i, n;
    if (kind === 'confetti') {
      n = randInt(90, 140);
      for (i = 0; i < n; i++) parts.push(P({
        x: rand(0, W), y: rand(-H * 0.35, -10), vx: rand(-40, 40), vy: rand(120, 300), g: 240,
        vr: rand(-9, 9), size: rand(7, 13), wa: rand(20, 70), wf: rand(2, 5),
        shape: 'rect', life: 3.2, col: colour(hue, spread)
      }));
    } else if (kind === 'fireworks') {
      var bursts = randInt(3, 5);
      for (var b = 0; b < bursts; b++) {
        var bx = rand(W * 0.15, W * 0.85), by = rand(H * 0.12, H * 0.5), bh = hue + b * rand(40, 90);
        n = randInt(24, 34);
        for (i = 0; i < n; i++) {
          var a = (i / n) * 6.283 + rand(-0.1, 0.1), sp = rand(120, 300);
          parts.push(P({ x: bx, y: by, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 170, drag: 0.965,
            size: rand(2.5, 4.5), shape: 'dot', life: rand(0.9, 1.4), delay: b * rand(0.18, 0.3), col: colour(bh, 18) }));
        }
      }
    } else if (kind === 'balloons') {
      n = randInt(10, 16);
      for (i = 0; i < n; i++) parts.push(P({
        x: rand(W * 0.05, W * 0.95), y: H + rand(30, 220), vy: -rand(230, 380),
        size: rand(18, 30), wa: rand(15, 45), wf: rand(1.5, 3), rot: 0,
        shape: 'balloon', life: 3.4, col: colour(hue, spread)
      }));
    } else if (kind === 'stars') {
      var r = $('question').getBoundingClientRect();
      var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      n = randInt(26, 40);
      for (i = 0; i < n; i++) {
        var sa = rand(0, 6.283), ss = rand(160, 430);
        parts.push(P({ x: cx, y: cy, vx: Math.cos(sa) * ss, vy: Math.sin(sa) * ss - 120, g: 300, drag: 0.985,
          vr: rand(-6, 6), size: rand(8, 17), shape: 'star', life: rand(1.4, 2), col: colour(hue, spread) }));
      }
    } else if (kind === 'cannons') {
      for (var side = 0; side < 2; side++) {
        n = randInt(40, 60);
        for (i = 0; i < n; i++) {
          var ca = rand(0.9, 1.4), cs = rand(H * 0.7, H * 1.25), dir = side ? -1 : 1;
          parts.push(P({ x: side ? W : 0, y: H, vx: Math.cos(ca) * cs * dir * rand(0.5, 1), vy: -Math.sin(ca) * cs,
            g: H * 1.1, drag: 0.985, vr: rand(-10, 10), size: rand(7, 12), shape: i % 4 ? 'rect' : 'dot',
            life: 2.8, col: colour(hue + side * rand(60, 160), spread) }));
        }
      }
    } else {
      n = randInt(18, 28);
      for (i = 0; i < n; i++) parts.push(P({
        x: rand(0, W), y: rand(H * 0.25, H * 0.95), vy: -rand(40, 120), wa: rand(10, 30), wf: rand(1, 3),
        size: rand(10, 34), shape: 'ring', life: rand(1.1, 1.9), delay: rand(0, 0.6), col: colour(hue, spread)
      }));
    }
    cancelAnimationFrame(raf);
    prev = performance.now();
    raf = requestAnimationFrame(frame);
  }

  function frame(now) {
    var dt = Math.min((now - prev) / 1000, 0.05);
    prev = now;
    ctx.clearRect(0, 0, W, H);
    var alive = [];
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      if (p.delay > 0) { p.delay -= dt; alive.push(p); continue; }
      p.age += dt;
      var k = Math.pow(p.drag, dt * 60);
      p.vx *= k; p.vy = p.vy * k + p.g * dt;
      p.x += (p.vx + Math.sin(p.age * p.wf + p.ph) * p.wa) * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
      if (p.age > p.life || p.y > H + 80 || p.y < -120) continue;
      alive.push(p);
      draw(p);
    }
    parts = alive;
    if (parts.length) raf = requestAnimationFrame(frame);
    else ctx.clearRect(0, 0, W, H);
  }
  function draw(p) {
    var fade = Math.max(0, Math.min(1, (p.life - p.age) / 0.4));
    ctx.save();
    ctx.globalAlpha = fade;
    ctx.translate(p.x, p.y);
    ctx.fillStyle = p.col; ctx.strokeStyle = p.col;
    if (p.shape === 'rect') {
      ctx.rotate(p.rot);
      ctx.scale(1, Math.cos(p.age * 6 + p.ph));
      ctx.fillRect(-p.size / 2, -p.size * 0.7, p.size, p.size * 1.4);
    } else if (p.shape === 'dot') {
      ctx.beginPath(); ctx.arc(0, 0, p.size, 0, 6.283); ctx.fill();
    } else if (p.shape === 'ring') {
      var grow = p.size * (0.5 + p.age / p.life);
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(0, 0, grow, 0, 6.283); ctx.stroke();
      ctx.globalAlpha = fade * 0.18; ctx.fill();
    } else if (p.shape === 'star') {
      ctx.rotate(p.rot);
      ctx.beginPath();
      for (var s = 0; s < 10; s++) {
        var rr = s % 2 ? p.size * 0.45 : p.size, an = s * Math.PI / 5 - Math.PI / 2;
        ctx.lineTo(Math.cos(an) * rr, Math.sin(an) * rr);
      }
      ctx.closePath(); ctx.fill();
    } else if (p.shape === 'balloon') {
      var sway = Math.sin(p.age * p.wf + p.ph) * 0.12;
      ctx.rotate(sway);
      ctx.beginPath(); ctx.ellipse(0, 0, p.size * 0.82, p.size, 0, 0, 6.283); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-4, p.size - 1); ctx.lineTo(4, p.size - 1); ctx.lineTo(0, p.size + 6); ctx.closePath(); ctx.fill();
      ctx.globalAlpha = fade * 0.6; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(0, p.size + 6);
      ctx.quadraticCurveTo(8, p.size + 26, 0, p.size + 46); ctx.stroke();
      ctx.globalAlpha = fade * 0.35; ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.ellipse(-p.size * 0.3, -p.size * 0.4, p.size * 0.16, p.size * 0.28, -0.5, 0, 6.283); ctx.fill();
    }
    ctx.restore();
  }

  /* ---------- Wiring ---------- */
  $('menu').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-game]');
    if (b) openSetup(b.dataset.game);
  });
  $('back').addEventListener('click', function () { openSetup(mode); });
  $('setup-back').addEventListener('click', showMenu);
  $('start').addEventListener('click', function () { openGame(mode); });
  $('timed').addEventListener('click', toggleTimed);
  $('chips-count').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-count]');
    if (b) pickCount(Number(b.dataset.count));
  });
  $('open-play').addEventListener('click', showPlay);
  $('play-back').addEventListener('click', showMenu);
  $('pg-minus').addEventListener('click', function () { pgSetN(pg.n - 1); });
  $('pg-plus').addEventListener('click', function () { pgSetN(pg.n + 1); });
  $('pg-dice').addEventListener('click', function () {
    var n;
    do { n = 2 + Math.floor(Math.random() * 99); } while (n === pg.n);
    pgSetN(n);
  });
  $('pg-n').addEventListener('input', function () {
    var v = this.value;
    clearTimeout(pgTimer);
    if (v !== '') pgTimer = setTimeout(function () { pgSetN(v); }, 450);
  });
  $('pg-n').addEventListener('change', function () { clearTimeout(pgTimer); pgSetN(this.value); });
  $('pg-modes').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-pgmode]');
    if (!b || b.dataset.pgmode === pg.mode) return;
    pg.mode = b.dataset.pgmode;
    pg.turned = false;
    pg.sp = { d: null, q: null };
    pgRender(false);
  });
  /* chunk it: the numbers of the times sum split like the times tables ones */
  function pgSplitTap(t, keyboard) {
    var w = pieceOf(t), z = w.key === 'd' ? pg.d : pg.n / pg.d, next = splitOp(pg.sp[w.key], z, w.kind, w.i), id = t.id;
    if (next === pg.sp[w.key]) return;
    pg.sp[w.key] = next;
    pgRender(false);
    hopPiece(id, w.key, 'pg', keyboard);
  }
  $('pg-eq').addEventListener('click', function (e) {
    var t = e.target.closest('[data-key]');
    if (t) pgSplitTap(t, e.detail === 0);
  });
  $('pg-eq').addEventListener('keydown', function (e) {
    var t = e.target.closest && e.target.closest('[data-key]');
    if (!t || (e.key !== 'Enter' && e.key !== ' ')) return;
    e.preventDefault(); pgSplitTap(t, true);
  });
  $('pg-tools').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    var id = b.id, c;
    if (b.dataset.div) { pg.d = Number(b.dataset.div); pg.turned = false; pg.sp = { d: null, q: null }; }
    else if (b.dataset.act === 'tens') { pg.cuts = []; for (c = 9; c < pg.n - 1; c += 10) pg.cuts.push(c); }
    else if (b.dataset.act === 'halves') pg.cuts = [pg.n / 2 - 1];
    else if (b.dataset.act === 'join') pg.cuts = [];
    pgRender(false);
    var again = $(id) || $('pg-mode-' + pg.mode);
    if (again) again.focus({ preventScroll: true });
  });
  $('pg-stage').addEventListener('click', function (e) {
    if (pg.mode === 'chunk') { pg.turned = !pg.turned; pgRender(false); return; }
    var dot = e.target.closest('.dot');
    if (!dot) return;
    var i = Number(dot.dataset.i), at = pg.cuts.indexOf(i);
    if (i >= pg.n - 1) return;
    if (at >= 0) pg.cuts.splice(at, 1); else pg.cuts.push(i);
    pgRender(false);
  });
  $('finish-more').addEventListener('click', function () { openGame(mode); });
  $('finish-pet').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-a]');
    if (b && !b.disabled && LF.petTap) LF.petTap(b);
  });
  $('finish-menu').addEventListener('click', function () { openSetup(mode); });
  $('pad').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.d !== undefined) pressDigit(b.dataset.d);
    else if (b.id === 'del') pressDelete();
    else if (b.id === 'go') submit();
  });
  $('tables').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.all) pickAll(b.dataset.all);
    else if (b.dataset.pick) togglePick(b.dataset.pick, Number(b.dataset.n));
  });
  $('chips-sum').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-sum]');
    if (b) pickSumMax(Number(b.dataset.sum));
  });
  $('stage').addEventListener('click', turn);
  /* the numbers of a times sum: tap to split, tap a + to move one over */
  $('question').addEventListener('click', function (e) {
    var t = e.target.closest('[data-key]');
    if (t) splitTap(t, e.detail === 0);
  });
  $('question').addEventListener('keydown', function (e) {
    var t = e.target.closest && e.target.closest('[data-key]');
    if (!t || (e.key !== 'Enter' && e.key !== ' ')) return;
    e.preventDefault(); e.stopPropagation(); splitTap(t, true);
  });
  $('slot').addEventListener('click', function () { pressDelete(true); });
  document.addEventListener('keydown', function (e) {
    if (!stats[mode] || $('game').hidden || e.metaKey || e.ctrlKey || e.altKey) return;
    var el = document.activeElement;
    var own = el && el.closest && el.closest('.chip, .all, .back, .finish');
    if (e.key >= '0' && e.key <= '9' && e.key.length === 1) { pressDigit(e.key); e.preventDefault(); }
    else if (e.key === 'Backspace') { pressDelete(); e.preventDefault(); }
    else if (e.key === 'Enter' && !own) { submit(); e.preventDefault(); }
  });
  window.addEventListener('resize', fit);
  window.addEventListener('resize', fitQuestion);
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stopClock();
    else if (stats[mode] && !$('game').hidden && phase === 'ask') startClock();
  });
  if (window.ResizeObserver) {
    new ResizeObserver(function () { layout(true); }).observe($('stage'));
    new ResizeObserver(function () { pgPlace(true); }).observe($('pg-stage'));
  } else window.addEventListener('resize', function () { layout(true); pgPlace(true); });

  function start(data) {
    var saved = load();
    data = data || {};
    tables = cleanTables(data.tables || (saved && saved.tables), [2]);
    seconds = cleanTables(data.seconds || (saved && saved.seconds), ALL.slice());
    /* settings saved before the tables went up to 12: "all ten" becomes "all twelve" */
    if (saved && !saved.v && !data.seconds && seconds.length === 10) { seconds = ALL.slice(); save(); }
    var sm = Number(data.sumMax || (saved && saved.sumMax));
    if (SUM_OPTIONS.indexOf(sm) >= 0) sumMax = sm;
    var mm = Number(data.minusMax || (saved && saved.minusMax));
    if (SUM_OPTIONS.indexOf(mm) >= 0) minusMax = mm;
    var cs = data.count || (saved && saved.count);
    if (cs && typeof cs === 'object') ['times', 'divide', 'plus', 'minus'].forEach(function (k) {
      if (COUNT_OPTIONS.indexOf(cs[k]) >= 0) count[k] = cs[k];
    });
    var sp = data.speed || (saved && saved.speed);
    if (sp && typeof sp === 'object') ['times', 'divide', 'plus', 'minus'].forEach(function (k) { speed[k] = sp[k] === true; });
    divBy = cleanTables(data.divBy || (saved && saved.divBy), [2]);
    divAns = cleanTables(data.divAns || (saved && saved.divAns), ALL.slice());
    if (data.stats && data.stats.times && data.stats.minus) stats = data.stats;
    ['times', 'divide', 'plus', 'minus'].forEach(function (k) { if (!stats[k]) stats[k] = { solved: 0, ms: 0 }; });
    if (data.pgN) pg.n = Math.max(1, Math.min(PG_MAX, Math.round(Number(data.pgN)) || 12));
    if (data.pgMode === 'chunk' || data.pgMode === 'break') pg.mode = data.pgMode;
    var kept = data.bags || (saved && saved.bags);
    if (kept && typeof kept === 'object' && !Array.isArray(kept)) bags = kept;
    applyTheme(LF.theme);
    fit();
    if (data.mode && stats[data.mode]) openSetup(data.mode);
    else if (data.mode === 'play') showPlay();
    else showMenu();
  }
  start({});
  LF.onTheme.push(applyTheme);
  LF.sayInto = finishSay;
  LF.apps.maths = { show: showMenu };
})();
