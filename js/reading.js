(function(){
  var $ = function(id){ return document.getElementById("r-" + id); };
/* the word lists and stories live in data/reading.js */
  var WORDS = READING_DATA.WORDS, SENTENCES = READING_DATA.SENTENCES, SIGHT = READING_DATA.SIGHT, HEART = READING_DATA.HEART, MAGIC = READING_DATA.MAGIC, WAND = READING_DATA.WAND, MSENT = READING_DATA.MSENT, VTEAM = READING_DATA.VTEAM, VSENT = READING_DATA.VSENT, EXTRA = READING_DATA.EXTRA, STORIES = READING_DATA.STORIES, FUN = READING_DATA.FUN, FRIENDS = READING_DATA.FRIENDS, FSENT = READING_DATA.FSENT;


  /* Themes, as in Times Tables Pad: a full colour palette (in TOKENS order), an emoji buddy and what it says.
     Here each buddy also has snacks and a poop line. The colours themselves are set by the home screen. */
  var THEMES = {
    minty:{ name:'Frog Pond', buddy:'🐸', auto:true,
      c:['#EAF6F1','#173A3F','#527678','#FFFFFF','#B7D2CA','#C3DCD5','#FFC93C','#D99F00','#173A3F',
        '#FFE9A6','#1A8754','#C43D27','#2F6FED','#173A3F','#26A69A','#FFB703','#FF7F5C','#7CB342','#4FA3E0','#A98BDB'],
      hi:'Hi! Pick a game.', done:'Toad-ally brilliant round!', plop:'Hop, hop, plop!', foods:['🪰','🐛','🦟','🦗'],
      yay:['Toad-ally great!','Ribbit-ing work!','Hop, hop, hooray!','Leaps ahead!','Un-frog-ettable!'] },
    kitty:{ name:'Kitty', buddy:'🐱',
      c:['#FFF0F6','#4A1942','#8A5A80','#FFFFFF','#F0B8D4','#F5C6DD','#FF8FC7','#E05C9F','#4A1942',
        '#FFC9E3','#1F8A5B','#C2314F','#7A3FD1','#4A1942','#FF6FB5','#B388FF','#FFC857','#5ED3C6','#FF9A8B','#8EC5FF'],
      hi:'Meow! Pick a game.', done:'Purr-fect round!', plop:'Oops. Not in the litter box!', foods:['🐟','🥛','🍤','🧀'],
      yay:['Purr-fect!','Meow-velous!','Paw-some!','Claw-some work!','The cat’s whiskers!'] },
    halloween:{ name:'Halloween', buddy:'👻', dark:true,
      c:['#1B1325','#FDF3E3','#BBA8C9','#2C2038','#0E0915','#4A3760','#FF8A1F','#B85A00','#26130A',
        '#3A2A4D','#9BE37A','#FF8F8F','#C9A6FF','#1B1325','#FF8A1F','#9B6BFF','#7ED957','#FFD23F','#FF5E7E','#5CC8FF'],
      hi:'Boo! Pick a game.', done:'Spook-tacular round!', plop:'A spooky surprise!', foods:['🍬','🍭','🎃','🍫'],
      yay:['Boo-tiful!','Spook-tacular!','Fang-tastic!','Wickedly good!','Un-boo-lievable!'] },
    race:{ name:'Race Car', buddy:'🏎️',
      c:['#F2F3F5','#15181D','#5A6270','#FFFFFF','#BFC5CE','#CCD1D9','#E10600','#9E0400','#FFFFFF',
        '#FFE45C','#14803C','#B3261E','#0B63CE','#15181D','#E53935','#FFC400','#1E88E5','#43A047','#FB8C00','#8E99A8'],
      hi:'Start your engines! Pick a game.', done:'You took the chequered flag!', plop:'Pit stop!', foods:['⛽','🛢️','🔋','🍩'],
      yay:['Vroom!','Full speed ahead!','Pole position!','Turbo brain!','Green light, go!'] },
    wizard:{ name:'Wizard', buddy:'🧙', dark:true,
      c:['#171A3A','#F3EEFF','#AEB0DA','#252A57','#0C0E24','#3D4380','#FFD86B','#B8922A','#2A1F05',
        '#353B78','#8FE3C0','#FFA0A8','#B9A2FF','#171A3A','#B58CFF','#FFD86B','#5FD4E6','#FF8FCF','#8FE38F','#FFA55C'],
      hi:'Greetings! Pick a game.', done:'That was pure magic!', plop:'Abraca-poo!', foods:['🍄','🧪','🥧','🍎'],
      yay:['Magical!','Spell-binding!','Wand-erful!','Abracadabra!','Pure wizardry!'] },
    ocean:{ name:'Ocean', buddy:'🐙',
      c:['#E6F6FB','#0E3350','#4A7089','#FFFFFF','#AAD3E3','#BDDDEA','#FF8A65','#D9602F','#0E3350',
        '#FFE2B8','#12805C','#C43D27','#1565C0','#0E3350','#1FA2C9','#FF8A65','#37C8AB','#FFC94D','#7C9CF0','#F58FB4'],
      hi:'Splash! Pick a game.', done:'You made a real splash!', plop:'Sea you later, poop!', foods:['🦐','🐟','🦀','🍤'],
      yay:['Fin-tastic!','Whale done!','O-fish-ally great!','Making waves!','Sea-riously good!'] },
    space:{ name:'Space', buddy:'👽', dark:true,
      c:['#0E1326','#EEF2FF','#9AA6CC','#1B2242','#060914','#2F3A6B','#5CE1E6','#2A9CA1','#062426',
        '#26305C','#8FE38F','#FF9C9C','#FFD86B','#0E1326','#5CE1E6','#FF7AD9','#FFD86B','#9B8CFF','#7BE08A','#FF9A5C'],
      hi:'Greetings, earthling! Pick a game.', done:'That round was out of this world!', plop:'One small plop for alien-kind!', foods:['🧀','🌮','🍕','⭐'],
      yay:['Out of this world!','Stellar!','Blast off!','Rocket brain!','Astro-nomical!'] },
    dino:{ name:'Dino', buddy:'🦖',
      c:['#F1F6E4','#263A1B','#5F7551','#FFFFFF','#BFD3A6','#CFDDBB','#FF9F1C','#C77400','#2B1B00',
        '#FFE3AE','#2E7D32','#C43D27','#2F6FED','#263A1B','#6BBF3B','#FF9F1C','#3FA7A0','#E4C13E','#E8734A','#8C7AE6'],
      hi:'Rawr! Pick a game.', done:'A roar-some round!', plop:'A dino-sized plop!', foods:['🍖','🥩','🦴','🍗'],
      yay:['Roar-some!','Dino-mite!','T-rex-cellent!','Stomping good!','Jurassic genius!'] },
    poop:{ name:'Poop', buddy:'💩',
      c:['#FBF3E4','#3B2414','#7A5A45','#FFFFFF','#DCC7A8','#E6D5BB','#8B5A2B','#5E3A17','#FFFFFF',
        '#FFE08A','#2E7D32','#C43D27','#2F6FED','#3B2414','#C68A4E','#F4C542','#6FC2E8','#8BC34A','#F28B82','#D9B48A'],
      hi:'Plop! Pick a game.', done:'You are number one at number twos!', plop:'Look, a mini me!', foods:['🌽','🌯','🥜','🧻'],
      yay:['Plop-tastic!','Number one!','Un-poo-lievable!','Flushed with success!','Stinking good!'] },
    fox:{ name:'Fox', buddy:'🦊',
      c:['#FFF4E8','#3A1F0F','#80583F','#FFFFFF','#F0CBA8','#F5D9BD','#F26B1D','#B8480A','#3A1F0F',
        '#FFDDB8','#2E7D32','#B3261E','#2F6FED','#3A1F0F','#F5823A','#FFC145','#C98B5E','#7FB069','#EE6C73','#5DA9E9'],
      hi:'Yip! Pick a game.', done:'You out-foxed every word!', plop:'Fox-cuse me!', foods:['🍇','🥚','🫐','🍗'],
      yay:['Fox-cellent!','Sly and speedy!','Clever cub!','Out-foxed it!','Quick as a fox!'] },
    forest:{ name:'Forest', buddy:'🐻', dark:true,
      c:['#16261C','#F1F5E9','#A9BDA6','#213528','#0C160F','#3A5743','#E0A458','#A8742C','#2A1A05',
        '#2F4A37','#9BE38F','#FF9C8A','#9CC2FF','#16261C','#7FB069','#E0A458','#C97B4A','#6EC5B8','#E8D174','#D98880'],
      hi:'Big bear hug! Pick a game.', done:'Bear-y well done!', plop:'Does a bear poop in the woods? Yes.', foods:['🍯','🐟','🫐','🥞'],
      yay:['Bear-illiant!','Paws-itively great!','Grrr-eat!','Un-bear-ably good!','Sweet as honey!'] },
    peacock:{ name:'Peacock', buddy:'🦚', dark:true,
      c:['#0B2B33','#EFFBF8','#9CC4C4','#123C46','#051A1F','#24606B','#F2C14E','#B88A1E','#2A1F05',
        '#1B4F5B','#8FE3A8','#FFA08E','#C9A6FF','#0B2B33','#1FBFB8','#4C9BFF','#7ED957','#F2C14E','#9B6BFF','#FF7AB6'],
      hi:'Ta-da! Pick a game.', done:'Time to show off those feathers!', plop:'Not on my feathers!', foods:['🌾','🍇','🐛','🌻'],
      yay:['Fan-tastic!','Show-stopping!','Feather-perfect!','Proud as a peacock!','Dazzling!'] },
    ballet:{ name:'Ballet', buddy:'🧑‍🩰',
      c:['#FBF4F1','#3D2A3A','#7D6677','#FFFFFF','#E5CFD4','#EEDDE0','#E8A0B4','#C4788F','#3D2A3A',
        '#F6D9E0','#2F7D5B','#B93A52','#6C5CE7','#3D2A3A','#F2A7B8','#C9B6E4','#A8D8D0','#F6D38B','#9EC5E8','#E9A08B'],
      hi:'Curtain up! Pick a game.', done:'Bravo! A standing ovation!', plop:'Plié... plop!', foods:['🍓','🧁','🍌','🥐'],
      yay:['Bravo!','On pointe!','Twirl-tastic!','Encore!','Graceful work!'] }
  };
  var EAT = ['Yum!','More!','Crunch!','Tasty!','Gulp!','Nom nom!'];
  /* what the buddy says when it poops (its theme adds one more), and just before. Each list is shuffled
     and every line is used before any repeats, even across visits. */
  var PLOPS = ['Plop!','Better out than in!','Oops. Excuse me!','That was a big one!','Who did that? Not me.',
    'Number two, coming through!','Too many snacks!','Phew. Much better.','Pardon me!','Hold your nose!',
    'Pee-yew!','What a stinker!','I feel lighter now.','Look what I made!','Where is the potty?',
    'Can you flush it for me?','One more for the pile!','Snack in, poop out!','Whoops! Did I do that?',
    'Ahh, that feels good.','My tummy says thank you.','Not my best work.','That was a surprise!','Ta-da!'];
  var UHOH = ['Uh-oh...','Hmm... my tummy!','Rumble, rumble...','Oh no, here it comes...','Wait... I feel funny.'];
  var STICKERS = ['🌳','🌲','🌻','🌷','🏠','☀️','🌈','☁️','🦋','🐝','🐞','🐌','🍄','⭐','🌙','🎈','🚲','⚽','🪁',
    '🐕','🐈','🐇','🦆','🐢','🚗','🚀','🏰','🎪','🍎','💩','🐷','🐔','🦊','🐏','🦇','🚌','🎩'];
  var MAXFED = 24, MAXSTICKERS = 80;

  /* Friend letters. Square brackets mark the letters that stick together.
     best = two letters, one sound; twin = a doubled letter, one sound; hold = two sounds said close together. */
  var PALS = {
    best:{ icon:"❤️", name:"Best friends", tag:"best friends", line:"Two letters, one sound.", pairs:["sh","ch","th","ck","ng"] },
    twin:{ icon:"👯", name:"Twins", tag:"twins", line:"The same letter twice, one sound.", pairs:["ll","ss","ff","zz"] },
    hold:{ icon:"🤝", name:"Teams", tag:"team", line:"Two sounds, said close together.",
           pairs:["tr","st","cl","dr","fl","cr","sn","sl","pl","nd","nt"] }
  };
  var KIND = {};
  Object.keys(PALS).forEach(function(k){ PALS[k].pairs.forEach(function(p){ KIND[p] = k; }); });

  /* ---------- The path: four stops, in phonics order. Each has words, sentences and stories. ---------- */
  var STOPS = [
    { id:"sandwich", n:1, icon:"🥪", name:"Vowel sandwich", sub:"A vowel in the middle, like cat and dog", badge:"cat", words:"words", sent:"sent" },
    { id:"letters", n:2, icon:"🧲", name:"Friend letters", sub:"Letters that stick together, like sh and tr", badge:"sh", words:"friends", sent:"fsent" },
    { id:"magic", n:3, icon:"🪄", name:"Magic e", sub:"A quiet e on the end, like cake and kite", badge:"cake", words:"magic", sent:"msent" },
    { id:"vteam", n:4, icon:"💞", name:"Vowel best friends", sub:"Two vowels, one sound, like tree and boat", badge:"tree", words:"vteam", sent:"vsent" }
  ];
  var STOP = {};
  STOPS.forEach(function(s){ STOP[s.id] = s; });

  /* ---------- Which words a child has met by each stop ---------- */
  function plain(t){ return t.replace(/[\[\]]/g, ""); }
  var VOCAB = [null, {}, {}, {}, {}];
  function addWords(n, list){ list.forEach(function(w){ for (var k = n; k <= 4; k++) VOCAB[k][w.toLowerCase()] = 1; }); }
  addWords(1, WORDS.map(function(w){ return w[0]; }));
  addWords(2, FRIENDS.map(function(w){ return plain(w[0]); }));
  addWords(3, MAGIC.map(function(w){ return w[0]; }));
  addWords(3, WAND.map(function(w){ return w[0]; }).concat(WAND.map(function(w){ return w[2]; })));
  addWords(4, VTEAM.map(function(w){ return plain(w[0]); }));
  SIGHT.forEach(function(s){ addWords(s[3], [s[0]]); });
  Object.keys(EXTRA).forEach(function(n){ addWords(+n, EXTRA[n].split(" ").filter(Boolean)); });
  function tokens(t){ return plain(t).toLowerCase().match(/[a-z]+/g) || []; }
  function inStop(k, w){ return VOCAB[k][w] || (/s$/.test(w) && VOCAB[k][w.slice(0, -1)]) || (/es$/.test(w) && VOCAB[k][w.slice(0, -2)]); }
  function knownAt(w){ for (var k = 1; k <= 4; k++){ if (inStop(k, w)) return k; } return 9; }
  /* the first stop where every word in a sentence has been met */
  function minStop(t){ return tokens(t).reduce(function(m, w){ return Math.max(m, knownAt(w)); }, 1); }

  /* magic e words and vowel best friend words, for highlighting inside sentences */
  var MAGICSET = {}, TEAMSET = {};
  MAGIC.forEach(function(w){ MAGICSET[w[0]] = 1; });
  WAND.forEach(function(w){ MAGICSET[w[2]] = 1; });
  EXTRA[3].split(" ").filter(Boolean).forEach(function(w){ MAGICSET[w] = 1; });
  VTEAM.forEach(function(w){ TEAMSET[plain(w[0])] = 1; });
  EXTRA[4].split(" ").filter(Boolean).forEach(function(w){ TEAMSET[w] = 1; });
  function baseIn(set, w){ return set[w] ? w : /s$/.test(w) && set[w.slice(0, -1)] ? w.slice(0, -1) : ""; }

  function parsePal(p){
    var segs = [], pairs = [], re = /\[([a-z]+)\]|([^\[\]]+)/g, m;
    while ((m = re.exec(p[0]))){
      if (m[1]){ segs.push({t:m[1], pal:true}); pairs.push(m[1]); } else segs.push({t:m[2]});
    }
    var text = segs.map(function(s){ return s.t; }).join("");
    return {key:text, text:text, pic:p[1], scene:p[1], segs:segs, pairs:pairs};
  }

  /* Every sentence lands in the first stop where all its words are known (and never earlier than it was written for). */
  var SENTS = { 1:[], 2:[], 3:[], 4:[] };
  [[SENTENCES,1],[FSENT,2],[MSENT,3],[VSENT,4]].forEach(function(pair){
    pair[0].forEach(function(p){
      var it = parsePal(p), n = Math.max(pair[1], minStop(it.text));
      if (n > 4){ try { console.warn("Reading: a sentence uses a word no stop teaches:", it.text); } catch(e){} return; }
      it.stop = n;
      SENTS[n].push(it);
    });
  });

  var VOWELS = ["a","e","i","o","u"];
  var GAMES = {
    words:{ name:"Vowel sandwich", stop:"sandwich", round:10, noun:"words", btn:"Show picture",
            items:WORDS.map(function(p){ return {key:p[0], text:p[0], pic:p[1]}; }),
            groups:VOWELS, group:function(it){ return it.text.charAt(1); }, one:"One vowel", label:"Middle letter",
            chip:function(g){ return g; } },
    friends:{ name:"Friend letters", stop:"letters", round:10, noun:"words", btn:"Show picture", items:FRIENDS.map(parsePal) },
    magic:{ name:"Magic e", stop:"magic", round:10, noun:"words", btn:"Show picture",
            items:MAGIC.map(function(p){ return {key:p[0], text:p[0], pic:p[1]}; }),
            groups:["a","i","o","u"], group:function(it){ return it.text.charAt(it.text.length - 3); }, one:"One vowel", label:"Which vowel?",
            chip:function(g){ return g + '<span class="blank">_</span><span class="me">e</span>'; }, wide:true },
    vteam:{ name:"Vowel best friends", stop:"vteam", round:10, noun:"words", btn:"Show picture",
            items:VTEAM.map(parsePal),
            groups:["ee","ai","oa","oo","ay"], group:function(it){ return it.pairs[0]; }, one:"One pair", label:"Which friends?",
            chip:function(g){ return g; } },
    sight:{ name:"Common words", round:10, noun:"common words", btn:"Show example",
            items:SIGHT.map(function(p){ return {key:p[0], text:p[0], phrase:p[1], pic:p[2], set:p[3]}; }) },
    sent: { name:"Vowel sandwich", stop:"sandwich", round:5, noun:"sentences", btn:"Show picture", items:SENTS[1] },
    fsent:{ name:"Friend letters", stop:"letters", round:5, noun:"sentences", btn:"Show picture", items:SENTS[2] },
    msent:{ name:"Magic e", stop:"magic", round:5, noun:"sentences", btn:"Show picture", items:SENTS[3] },
    vsent:{ name:"Vowel best friends", stop:"vteam", round:5, noun:"sentences", btn:"Show picture", items:SENTS[4] }
  };
  /* a magic e word's partner without the e (note: not), when there is one */
  var BARE = {}, WANDS = WAND.map(function(p){ BARE[p[2]] = { text:p[0], pic:p[1] }; return {a:p[0], ap:p[1], b:p[2], bp:p[3]}; });
  var STORY = {};
  STORIES.forEach(function(st){ STORY[st.id] = st; });
  function isSent(g){ return g === "sent" || g === "fsent" || g === "msent" || g === "vsent"; }
  function isWords(g){ return g === "words" || g === "friends" || g === "magic" || g === "vteam"; }

  var VIEWS = ["menu","stickers","lists","game","stories"], STORE = "read-reveal";
  var calm = false;
  try { calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch(e){}

  /* S is this visit; P is what the browser remembers between visits. */
  var S = { game:null, stop:null, tab:"words", from:"menu", story:null, page:-1, queue:[], round:[], i:0,
            totals:{}, fx:0, fedNow:0, snacks:3, pick:null, placed:null, last:"" };
  var P = { o:{ words:{mode:"mix", set:"a"}, magic:{mode:"mix", set:"a"}, vteam:{mode:"mix", set:"ee"} },
            fkind:"", pair:"", met:{}, stars:{}, fun:{}, funLast:{}, partyAt:0, seen:[], read:{},
            theme:"minty", fed:0, poops:0, stickers:[], bags:{}, bagLast:{} };
  STOPS.forEach(function(s){ P.stars[s.id] = {w:0, sw:0, s:0, st:0}; });
  try {
    var d = JSON.parse(localStorage.getItem(STORE) || "{}");
    /* earlier versions kept the three-letter word picker in mode and letter */
    if (d.mode === "letter" && VOWELS.indexOf(d.letter) >= 0) P.o.words = {mode:"one", set:d.letter};
    if (d.o && typeof d.o === "object") Object.keys(P.o).forEach(function(g){
      var o = d.o[g], gm = GAMES[g];
      if (o && (o.mode === "mix" || o.mode === "one")) P.o[g].mode = o.mode;
      if (o && gm.groups.indexOf(o.set) >= 0) P.o[g].set = o.set;
    });
    if (PALS[d.fkind]) P.fkind = d.fkind;
    else if (d.fmode === "pair" && KIND[d.pair]) P.fkind = KIND[d.pair];   /* saved by the earlier one-pair picker */
    if (KIND[d.pair] && KIND[d.pair] === P.fkind) P.pair = d.pair;
    if (d.met === true) P.met.letters = 1;   /* earlier versions only had the Friend letters intro */
    else if (d.met && typeof d.met === "object") STOPS.forEach(function(s){ if (d.met[s.id]) P.met[s.id] = 1; });
    if (d.stars && typeof d.stars === "object") STOPS.forEach(function(s){
      var v = d.stars[s.id];
      if (v) ["w","sw","s","st"].forEach(function(k){ P.stars[s.id][k] = v[k] ? 1 : 0; });
    });
    if (Array.isArray(d.seen)) P.seen = d.seen.filter(function(w){ return typeof w === "string" && w.length <= 12; }).slice(0, 600);
    if (d.read && typeof d.read === "object") Object.keys(d.read).forEach(function(id){ if (STORY[id]) P.read[id] = 1; });
    if (d.fun && typeof d.fun === "object") Object.keys(THEMES).forEach(function(t){
      if (Array.isArray(d.fun[t])) P.fun[t] = d.fun[t].filter(function(n){ return n === Math.floor(n) && n >= 0 && n < 10; }).slice(0, 10);
      if (d.funLast && d.funLast[t] >= 0 && d.funLast[t] < 10) P.funLast[t] = Math.floor(d.funLast[t]);
    });
    if (d.partyAt >= 0 && d.partyAt < 3) P.partyAt = Math.floor(d.partyAt);
    if (THEMES[d.theme]) P.theme = d.theme;
    if (d.fed >= 0 && d.fed <= MAXFED) P.fed = Math.floor(d.fed);
    if (d.poops >= 0 && d.poops < 100000) P.poops = Math.floor(d.poops);
    if (d.bags && typeof d.bags === "object") ["plop", "uhoh"].forEach(function(k){
      if (Array.isArray(d.bags[k])) P.bags[k] = d.bags[k].filter(function(x){ return typeof x === "string" && x.length <= 80; }).slice(0, 40);
      if (d.bagLast && typeof d.bagLast[k] === "string") P.bagLast[k] = d.bagLast[k].slice(0, 80);
    });
    if (Array.isArray(d.stickers)) P.stickers = d.stickers.filter(function(s){
      return s && typeof s.e === "string" && s.e.length <= 16 && s.x >= 0 && s.x <= 100 && s.y >= 0 && s.y <= 100;
    }).slice(-MAXSTICKERS).map(function(s){ return {e:s.e, x:+s.x, y:+s.y, r:+s.r || 0}; });
  } catch(e){}
  function save(){ try { localStorage.setItem(STORE, JSON.stringify(P)); } catch(e){} }
  var SEEN = {};
  P.seen.forEach(function(w){ SEEN[w] = 1; });
  function saw(w){ w = w.toLowerCase(); if (!SEEN[w]){ SEEN[w] = 1; P.seen.push(w); save(); } }
  /* the next line from a shuffled list; never the same line twice in a row, even when the list starts over */
  function fromBag(name, pool){
    var bag = (P.bags[name] || []).filter(function(x){ return pool.indexOf(x) >= 0; });
    if (!bag.length){
      bag = pool.slice();
      for (var i = bag.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)), t = bag[i]; bag[i] = bag[j]; bag[j] = t; }
      if (bag.length > 1 && bag[0] === P.bagLast[name]) bag.push(bag.shift());
    }
    var s = bag.shift();
    P.bags[name] = bag; P.bagLast[name] = s; save();
    return s;
  }

  var stage = $("stage"), modesEl = $("modes"), picker = $("picker");

  function shuffle(a){ a = a.slice(); for (var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function vowelBlue(w){
    return w.split("").map(function(ch){ return "aeiou".indexOf(ch) >= 0 ? '<span class="v">'+ch+'</span>' : ch; }).join("");
  }
  function markWord(phrase, word){
    return phrase.split(" ").map(function(t){ return t.replace(/[?,.!]/g, "") === word ? '<span class="v">'+t+'</span>' : t; }).join(" ");
  }
  /* magic e: the vowel in blue, the quiet e pale with a sparkle */
  function magicMark(w){
    var b = baseIn(MAGICSET, w.toLowerCase());
    if (!b) return "";
    var v = b.length - 3;
    return esc(w.slice(0, v)) + '<span class="v">' + w.charAt(v) + '</span>' + esc(w.slice(v + 1, b.length - 1)) +
      '<span class="me">' + w.charAt(b.length - 1) + '</span>' + esc(w.slice(b.length));
  }
  /* vowel best friends: the pair sits on a patch, like letter friends */
  function teamMark(w){
    if (!baseIn(TEAMSET, w.toLowerCase())) return "";
    var m = /ee|ai|oa|oo|ay/i.exec(w);
    if (!m) return "";
    return esc(w.slice(0, m.index)) + '<span class="pal">' + m[0] + '</span>' + esc(w.slice(m.index + 2));
  }
/*SCENE*/
  function sceneHTML(sprites){
    return '<span class="scene" role="img" aria-label="picture">' + sprites.map(function(p, n){
      var st = 'left:' + (p[1]/6*100).toFixed(1) + '%;top:' + (p[2]/3.4*100).toFixed(1) + '%;font-size:' + ((p[3] || 1) * 0.9).toFixed(2) + 'em;' +
               'transform:translate(-50%,-50%)' + (p[4] ? ' rotate(' + p[4] + 'deg)' : '') + (p[5] ? ' scaleX(-1)' : '') +
               ';--n:' + n + (p[6] ? ';opacity:' + p[6] : '');
      return p[0] === "=" ? '<i class="zip" style="' + st + '"></i>' : '<i style="' + st + '">' + p[0] + '</i>';
    }).join("") + '</span>';
  }
/*ENDSCENE*/
  /* which friend pairs get the highlight: all of them in a mix, otherwise only the kind or pair being practised */
  function showPal(p){ return !P.fkind || (P.pair ? p === P.pair : KIND[p] === P.fkind); }
  function palWord(item, keep){
    return item.segs.map(function(s){ return s.pal && keep(s.t) ? '<span class="pal">' + s.t + '</span>' : s.t; }).join("");
  }
  function duoHTML(p, icon){
    return '<span class="duo"><b>' + p.charAt(0) + '</b><b>' + p.charAt(1) + '</b><i aria-hidden="true">' + (icon || PALS[KIND[p]].icon) + '</i></span>';
  }
  function palsHTML(item){
    var list = item.pairs.filter(function(p, k){ return item.pairs.indexOf(p) === k && showPal(p); });
    return '<div class="pals" id="r-pals">' + list.map(function(p){
      return '<span class="palcard">' + duoHTML(p) + '<small>' + PALS[KIND[p]].tag + '</small></span>';
    }).join("") + '</div>';
  }
  /* a sentence, one unbreakable span per word: friend letters patched, and in later stops the pattern words marked */
  function sentHTML(item){
    var words = [], cur = "";
    item.segs.forEach(function(s){
      if (s.pal){ cur += '<span class="pal">' + s.t + '</span>'; return; }
      s.t.split(" ").forEach(function(b, k){
        if (k > 0){ words.push(cur); cur = ""; }
        var m = /^([^A-Za-z]*)([A-Za-z]+)([^A-Za-z]*)$/.exec(b), mk = "";
        if (m && item.stop === 3) mk = magicMark(m[2]);
        if (m && item.stop === 4) mk = teamMark(m[2]);
        cur += mk ? esc(m[1]) + mk + esc(m[3]) : esc(b);
      });
    });
    words.push(cur);
    return words.filter(Boolean).map(function(w){ return '<span class="wd">' + w + '</span>'; }).join(" ");
  }
  /* Common words: a heart word has its tricky part marked with a heart. Any other common word can be
     sounded out, so it is shown the way its stop shows words: vowels in blue at the vowel sandwich,
     letter friends on a patch after that. */
  function commonMark(item){
    var h = HEART[item.text];
    if (h) return h.replace(/\[([^\]]+)\]/g, '<span class="heart">$1</span>');
    if (item.set === 1) return vowelBlue(item.text);
    return item.text.replace(/sh|ch|th|ck|ng/, function(p){ return '<span class="pal">' + p + '</span>'; });
  }
  function shown(item){
    var g = S.game;
    return g === "words" ? vowelBlue(item.text) : g === "friends" ? palWord(item, showPal)
      : g === "magic" ? magicMark(item.text) : g === "vteam" ? palWord(item, function(){ return true; })
      : isSent(g) ? sentHTML(item) : g === "sight" ? commonMark(item) : esc(item.text);
  }
  function bump(el, cls){ el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
  function line(list){ var s; do { s = list[Math.floor(Math.random()*list.length)]; } while (list.length > 1 && s === S.last); S.last = s; return s; }

  /* ---------- What the buddy says while reading ----------
     The same short, easy-to-read cheers for every buddy. They are shuffled and each is used once
     before any repeats. None of them say "right": the app can't hear the child read. */
  var CHEERS = ["Nice reading!", "Keep going!", "You’re on a roll!", "Look at you go!", "Way to go!", "Keep it up!",
    "Super reading!", "High five! ✋", "You can do it!", "Nice work!", "Go, go, go!", "You’re a reader!", "Wow!",
    "So good!", "Well read!", "You got this!", "Big brain!", "That was fun!"];
  var cheerBag = [], lastCheer = "";
  function readCheer(){
    if (!cheerBag.length){
      cheerBag = shuffle(CHEERS);
      if (cheerBag.length > 1 && cheerBag[0] === lastCheer) cheerBag.push(cheerBag.shift());
    }
    return (lastCheer = cheerBag.shift());
  }
  /* As each card or page appears: how to play on the first one, where you are at the middle and
     at the end, and a cheer on the rest. */
  function cardLine(i, n, howTo, lastLine){
    if (i === 0) return howTo;
    if (i === n - 1) return lastLine;
    if (n >= 4 && i === Math.floor(n / 2)) return "Halfway there!";
    return readCheer();
  }

  function view(id){
    S.fx++;
    VIEWS.forEach(function(v){ $(v).hidden = v !== id; });
    window.scrollTo(0,0);
  }
  var STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.6l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z"/></svg>';
  function starHTML(on){ return '<span class="star' + (on ? ' on' : '') + '">' + STAR + '</span>'; }
  /* four parts to a stop, each with a star, in the order they appear as tabs */
  var PARTS = [["words","Words","w"],["sight","Common words","sw"],["sent","Sentences","s"],["stories","Stories","st"]];
  function starCount(id){ var s = P.stars[id]; return PARTS.reduce(function(n, p){ return n + s[p[2]]; }, 0); }
  function nextUp(){ for (var k = 0; k < STOPS.length; k++){ if (starCount(STOPS[k].id) < PARTS.length) return STOPS[k]; } return null; }

  /* ---------- Themes and the buddy ---------- */
  function T(){ return THEMES[P.theme] || THEMES.minty; }
  function applyTheme(id){
    P.theme = THEMES[id] ? id : "minty";
    if (!$("menu").hidden) paintMenu();
  }

  /* ---------- The reading menu: the path, the counter, the shelves ---------- */
  function paintMenu(){
    var next = nextUp(), n = P.seen.length;
    $("menu-bubble").textContent = T().hi.replace("Pick a game.", next ? "Next up: " + next.name + "!" : "You got every star! Pick a story?");
    $("count").innerHTML = '<span aria-hidden="true">📚</span> Words you’ve read: <b>' + n + '</b>';
    $("path").innerHTML = STOPS.map(function(s){
      var st = P.stars[s.id], c = starCount(s.id), isNext = next && next.id === s.id;
      return '<li><button type="button" class="card stop' + (isNext ? ' next' : '') + '" id="r-stop-' + s.id + '" data-stop="' + s.id + '"' +
        ' aria-label="' + s.name + '. ' + c + ' of ' + PARTS.length + ' stars' + (isNext ? '. Next up.' : '.') + '">' +
        (isNext ? '<span class="next-tag" aria-hidden="true">Next up</span>' : '') +
        '<span class="badge s' + s.n + '" aria-hidden="true">' + s.badge + '</span>' +
        '<span class="card-text"><span class="card-name">' + s.name + '</span><span class="card-sub">' + s.sub + '</span>' +
        '<span class="stars" aria-hidden="true">' + PARTS.map(function(p){ return starHTML(st[p[2]]); }).join("") + '</span></span></button></li>';
    }).join("");
  }
  function openMenu(){ S.game = null; S.stop = null; paintMenu(); view("menu"); }

  /* ---------- Sticker page ---------- */
  function stickersInner(newAt){
    return P.stickers.map(function(s, k){
      return '<i' + (k === newAt ? ' class="new"' : '') + ' style="left:' + s.x + '%;top:' + s.y + '%;--r:' + s.r + 'deg">' + s.e + '</i>';
    }).join("");
  }
  function openStickers(){
    var n = P.stickers.length, btn = $("new-page");
    $("stickers-says").textContent = n ? n + (n === 1 ? " sticker" : " stickers") + " so far. Read 5 sentences to get one more."
      : "No stickers yet. Read 5 sentences to get your first one.";
    $("my-page").innerHTML = stickersInner(-1) + (n ? "" : '<p class="empty">Your stickers will go here.</p>');
    btn.hidden = !n; btn.textContent = "Start a new page"; btn.dataset.sure = "";
    view("stickers");
  }
  function newPage(){
    var btn = $("new-page");
    if (!btn.dataset.sure){ btn.dataset.sure = "1"; btn.textContent = "Tap again to clear every sticker"; return; }
    P.stickers = []; save(); openStickers();
  }

  /* ---------- Word lists, for grown-ups: everything, stop by stop ---------- */
  var listsBuilt = false;
  function byText(a, b){ var x = a.text.toLowerCase(), y = b.text.toLowerCase(); return x < y ? -1 : x > y ? 1 : 0; }
  function cell(pic, word){ return '<li><span aria-hidden="true">' + pic + '</span><b>' + word + '</b></li>'; }
  function sentRows(list){
    return '<ul class="wall rows">' + list.map(function(it){ return '<li>' + sceneHTML(it.scene) + '<b>' + sentHTML(it) + '</b></li>'; }).join("") + '</ul>';
  }
  function sightLine(n){
    var list = GAMES.sight.items.filter(function(it){ return it.set === n; }).sort(byText);
    var easy = list.filter(function(it){ return !HEART[it.text]; }), hard = list.filter(function(it){ return HEART[it.text]; });
    function wall(l){ return '<ul class="wall">' + l.map(function(it){ return '<li><b>' + commonMark(it) + '</b></li>'; }).join("") + '</ul>'; }
    return (easy.length ? '<h3>New common words to sound out <small>' + easy.length + ' words</small></h3>' + wall(easy) : '') +
      (hard.length ? '<h3>New heart words <small>' + hard.length + ' words</small></h3>' + wall(hard) : '');
  }
  function buildLists(){
    var html = "";
    /* sandwich */
    var words = GAMES.words.items;
    html += '<section id="r-list-sandwich"><h2>🥪 Vowel sandwich <small>' + words.length + ' words, ' + SENTS[1].length + ' sentences</small></h2>';
    VOWELS.forEach(function(v){
      var group = words.filter(function(it){ return it.text.charAt(1) === v; }).sort(byText);
      html += '<h3><b>' + v + '</b> in the middle <small>' + group.length + ' words</small></h3><ul class="wall">' +
        group.map(function(it){ return cell(it.pic, vowelBlue(it.text)); }).join("") + '</ul>';
    });
    html += sightLine(1) + '<h3>Sentences <small>' + SENTS[1].length + '</small></h3>' + sentRows(SENTS[1]) + '</section>';
    /* friend letters */
    var fr = GAMES.friends.items;
    html += '<section id="r-list-letters"><h2>🧲 Friend letters <small>' + fr.length + ' words, ' + SENTS[2].length + ' sentences</small></h2>';
    Object.keys(PALS).forEach(function(k){
      var pg = PALS[k];
      html += '<h3>' + pg.icon + ' ' + pg.name + ' <small>' + pg.line + '</small></h3>';
      pg.pairs.forEach(function(p){
        var group = fr.filter(function(it){ return it.pairs.indexOf(p) >= 0; }).sort(byText);
        html += '<h4><b>' + p + '</b><small>' + group.length + ' words</small></h4><ul class="wall">' +
          group.map(function(it){ return cell(it.pic, palWord(it, function(q){ return q === p; })); }).join("") + '</ul>';
      });
    });
    html += sightLine(2) + '<h3>Sentences <small>' + SENTS[2].length + '</small></h3>' + sentRows(SENTS[2]) + '</section>';
    /* magic e */
    var mg = GAMES.magic.items;
    html += '<section id="r-list-magic"><h2>🪄 Magic e <small>' + mg.length + ' words, ' + SENTS[3].length + ' sentences</small></h2>';
    GAMES.magic.groups.forEach(function(v){
      var group = mg.filter(function(it){ return GAMES.magic.group(it) === v; }).sort(byText);
      html += '<h3><b>' + v + '_e</b><small>' + group.length + ' words</small></h3><ul class="wall">' +
        group.map(function(it){ return cell(it.pic, magicMark(it.text)); }).join("") + '</ul>';
    });
    html += '<h3>With and without the e <small>' + WANDS.length + ' pairs</small></h3><ul class="wall duos">' +
      WANDS.map(function(it){ return '<li>' + duoCell(it) + '</li>'; }).join("") + '</ul>';
    html += sightLine(3) + '<h3>Sentences <small>' + SENTS[3].length + '</small></h3>' + sentRows(SENTS[3]) + '</section>';
    /* vowel best friends */
    var vt = GAMES.vteam.items;
    html += '<section id="r-list-vteam"><h2>💞 Vowel best friends <small>' + vt.length + ' words, ' + SENTS[4].length + ' sentences</small></h2>';
    GAMES.vteam.groups.forEach(function(p){
      var group = vt.filter(function(it){ return it.pairs[0] === p; }).sort(byText);
      html += '<h4><b>' + p + '</b><small>' + group.length + ' words</small></h4><ul class="wall">' +
        group.map(function(it){ return cell(it.pic, palWord(it, function(){ return true; })); }).join("") + '</ul>';
    });
    html += sightLine(4) + '<h3>Sentences <small>' + SENTS[4].length + '</small></h3>' + sentRows(SENTS[4]) + '</section>';
    /* stories */
    html += '<section id="r-list-stories"><h2>📖 Stories <small>' + STORIES.length + ' stories</small></h2>';
    STORIES.forEach(function(st){
      html += '<h3>' + STOPS[st.stop - 1].icon + ' ' + esc(st.title) + ' <small>' + st.pages.length + ' pages</small></h3><ul class="wall rows">' +
        st.pages.map(function(p){ return '<li>' + sceneHTML(p[1]) + '<b>' + esc(p[0]) + '</b></li>'; }).join("") + '</ul>';
    });
    html += '</section>';
    $("lists-body").innerHTML = html;
    $("jump").innerHTML = STOPS.map(function(s){
      return '<button type="button" class="chip" id="r-jump-' + s.id + '" data-to="list-' + s.id + '">' + s.icon + ' ' + s.name + '</button>';
    }).join("") + '<button type="button" class="chip" id="r-jump-stories" data-to="list-stories">📖 Stories</button>';
    listsBuilt = true;
  }
  function openLists(){ if (!listsBuilt) buildLists(); S.game = null; S.stop = null; view("lists"); }
  function duoCell(it){
    return '<span aria-hidden="true">' + it.ap + '</span><b>' + vowelBlue(it.a) + '</b><i aria-hidden="true">→</i><b>' + magicMark(it.b) + '</b><span aria-hidden="true">' + it.bp + '</span>';
  }

  /* ---------- Stories shelf ---------- */
  function bookHTML(st, next){
    var read = P.read[st.id], ready = !read && next && st.stop <= next.n;
    return '<button type="button" class="book' + (ready ? ' ready' : '') + '" id="r-book-' + st.id + '" data-story="' + st.id + '">' +
      (ready ? '<span class="next-tag" aria-hidden="true">Ready!</span>' : '') +
      sceneHTML(st.cover) + '<span class="book-title">' + esc(st.title) + '</span>' +
      '<span class="book-meta">' + (read ? '✓ Read' : st.pages.length + ' pages') + '</span></button>';
  }
  function openStories(){
    var next = nextUp(), done = STORIES.filter(function(st){ return P.read[st.id]; }).length;
    S.game = null; S.stop = null;
    $("stories-says").textContent = done ? "You have read " + done + " of " + STORIES.length + " stories. Pick one!"
      : "Pick a story. Read each page, then tap to see the picture.";
    $("shelf").innerHTML = STOPS.map(function(s){
      return '<section class="shelf-row"><h3><span aria-hidden="true">' + s.icon + '</span> ' + s.name + '</h3><div class="books">' +
        STORIES.filter(function(st){ return st.stop === s.n; }).map(function(st){ return bookHTML(st, next); }).join("") + '</div></section>';
    }).join("");
    view("stories");
  }

  /* ---------- Inside a stop: four tabs (words, common words, sentences, stories), each earns a star ---------- */
  function paintTabs(){
    var el = $("tabs");
    el.hidden = !S.stop;
    if (!S.stop) return;
    var st = P.stars[S.stop.id];
    el.innerHTML = PARTS.map(function(t){
      return '<button type="button" class="tab" role="tab" id="r-tab-' + t[0] + '" data-tab="' + t[0] + '" aria-selected="' + (S.tab === t[0]) + '">' +
        starHTML(st[t[2]]) + '<span>' + t[1] + '</span></button>';
    }).join("");
  }
  function openStop(id, tab){
    S.stop = STOP[id]; S.from = "menu";
    $("title").textContent = S.stop.name;
    view("game");
    goTab(tab || "words");
  }
  function goTab(tab){
    S.tab = tab;
    paintTabs();
    if (tab === "words") openGame(S.stop.words);
    else if (tab === "sight") openGame("sight");
    else if (tab === "sent") openGame(S.stop.sent);
    else stopStories();
  }
  function stopStories(){
    S.fx++; S.game = null;
    $("options").hidden = true;
    var next = nextUp(), list = STORIES.filter(function(st){ return st.stop === S.stop.n; });
    stage.innerHTML = '<p class="intro-title">' + S.stop.name + ' stories</p>' +
      '<div class="say"><span class="buddy" aria-hidden="true">' + T().buddy + '</span>' +
      '<p class="bubble">Read a whole story to get the last star.</p></div>' +
      '<div class="books">' + list.map(function(st){ return bookHTML(st, next); }).join("") + '</div>' +
      '<div class="acts"><button type="button" class="key" id="r-all-stories" data-a="shelf">All stories</button></div>';
  }

  /* ---------- Pickers ---------- */
  function chipRow(list, label){
    return '<div class="group"><span class="label">' + label + '</span><div class="kinds-row" role="group" aria-label="' + label + '">' + list + '</div></div>';
  }
  function chip(id, data, on, text, extra){
    return '<button type="button" class="chip' + (extra || "") + '" id="r-' + id + '" ' + data + ' aria-pressed="' + !!on + '">' + text + '</button>';
  }
  function buildPicker(){
    var g = S.game, gm = GAMES[g], html = "";
    modesEl.innerHTML = ""; modesEl.hidden = true;
    if (g === "friends"){
      /* Friend letters: pick a kind first; only then do that kind's pairs appear, with "All" as the default. */
      var kinds = [["", "Mix them all"]].concat(Object.keys(PALS).map(function(k){ return [k, PALS[k].icon + " " + PALS[k].name]; }));
      html = chipRow(kinds.map(function(k){ return chip("kind-" + (k[0] || "mix"), 'data-kind="' + k[0] + '"', P.fkind === k[0], k[1]); }).join("") +
        '<button type="button" class="chip meet" id="r-meet" data-meet="1">🧑‍🏫 Lesson</button>', "Which friends?");
      if (P.fkind){
        var pg = PALS[P.fkind];
        html += '<div class="group"><span class="label">' + pg.name + ': all of them, or just one</span><div class="sets" role="group" aria-label="' + pg.name + '">' +
          '<button type="button" class="chip all" id="r-set-all" data-set="" aria-pressed="' + !P.pair + '">All</button>' +
          pg.pairs.map(function(v){
            return '<button type="button" class="chip" id="r-set-' + v + '" data-set="' + v + '" aria-pressed="' + (v === P.pair) + '" aria-label="Words with ' + v + '">' + v + '</button>';
          }).join("") + '</div></div>';
      }
    } else if (gm.groups){
      var o = P.o[g];
      html = chipRow(chip("mode-mix", 'data-mode="mix"', o.mode === "mix", "Random mix") +
        chip("mode-one", 'data-mode="one"', o.mode === "one", gm.one) +
        '<button type="button" class="chip meet" id="r-meet" data-meet="1">🧑‍🏫 Lesson</button>', "Which words?");
      if (o.mode === "one"){
        html += '<div class="group"><span class="label">' + gm.label + '</span><div class="sets" role="group" aria-label="' + gm.label + '">' +
          gm.groups.map(function(v){
            return '<button type="button" class="chip' + (v.length > 1 || gm.wide ? ' wide' : '') + '" id="r-set-' + v + '" data-set="' + v + '" aria-pressed="' + (v === o.set) + '" aria-label="Words with ' + v + '">' + gm.chip(v) + '</button>';
          }).join("") + '</div></div>';
      }
    }
    picker.innerHTML = html;
    picker.hidden = !html;
    $("options").hidden = !html;
  }

  /* ---------- The lesson for each stop: opens only from the Lesson button, so a child can go straight to playing ---------- */
  function newWordsHTML(n){
    var list = SIGHT.filter(function(s){ return s[3] === n; }).map(function(s){ return s[0]; });
    var shownList = list.length > 10 ? list.slice(0, 10).join(", ") + " + " + (list.length - 10) + " more" : list.join(", ");
    return '<div class="newwords"><span class="label">New common words</span><p>' + esc(shownList) + '</p>' +
      '<button type="button" class="chip" id="r-intro-sight" data-a="tab" data-tab="sight">Practise them</button></div>';
  }
  function showIntro(){
    S.fx++;
    var s = S.stop;
    P.met[s.id] = 1; save();
    $("options").hidden = true;   /* the cards below do the choosing while the intro is up */
    var top = '<div class="say"><span class="buddy" aria-hidden="true">' + T().buddy + '</span><p class="bubble">';
    var html = "";
    if (s.id === "letters"){
      var say = { best:"Together they make one brand new sound.", twin:"The same letter twice. Say it just once.",
                  hold:"Each letter keeps its own sound. Say them fast!" };
      var eg = { best:["ship","sh"], twin:["bell","ll"], hold:["truck","tr"] };
      html = '<p class="intro-title">Meet the letter friends</p>' + top +
        'Some letters like to stick together. There are three kinds of letter friends.</p></div>' +
        '<div class="kinds">' + Object.keys(PALS).map(function(k){
          var item = GAMES.friends.items.filter(function(it){ return it.text === eg[k][0]; })[0];
          return '<button type="button" class="kindcard" id="r-intro-' + k + '" data-a="kind" data-kind="' + k + '">' + duoHTML(eg[k][1]) +
            '<span class="kind-text"><span class="kind-name">' + PALS[k].name + '</span><span class="kind-line">' + say[k] + '</span>' +
            '<span class="kind-eg"><i aria-hidden="true">' + item.pic + '</i><b>' + palWord(item, function(q){ return q === eg[k][1]; }) + '</b></span></span></button>';
        }).join("") + '</div>' +
        '<p class="intro-hint">Tap a kind to practise it.</p>' +
        '<div class="acts"><button type="button" class="key go" id="r-intro-mix" data-a="kind" data-kind="">Mix them all</button></div>';
    } else if (s.id === "sandwich"){
      var egs = { a:["cat","🐱"], e:["hen","🐔"], i:["pig","🐷"], o:["dog","🐕"], u:["sun","☀️"] };
      html = '<p class="intro-title">Meet the vowel sandwich</p>' +
        '<p class="sandwich" aria-label="c, a, t"><b>c</b><b class="fill">a</b><b>t</b></p>' + top +
        'The vowels are a, e, i, o and u. In a vowel sandwich, the vowel is the filling in the middle.</p></div>' +
        '<div class="vgrid">' + VOWELS.map(function(v){
          return '<button type="button" class="vcard" id="r-intro-' + v + '" data-a="one" data-set="' + v + '"><b class="big">' + v + '</b>' +
            '<i aria-hidden="true">' + egs[v][1] + '</i><span class="eg">' + vowelBlue(egs[v][0]) + '</span></button>';
        }).join("") + '</div>' +
        '<p class="intro-hint">Tap a vowel to practise it.</p>' +
        '<div class="acts"><button type="button" class="key go" id="r-intro-mix" data-a="mix">Mix them all</button></div>';
    } else if (s.id === "magic"){
      var me = { a:["cake","🎂"], i:["kite","🪁"], o:["bone","🦴"], u:["cube","🧊"] };
      html = '<p class="intro-title">Meet magic e</p>' +
        '<p class="spell" aria-label="cap, then cape"><span>' + vowelBlue("cap") + '</span><i aria-hidden="true">🪄</i><span>' + magicMark("cape") + '</span></p>' + top +
        'An e on the end stays quiet. Its magic makes the other vowel say its name: cap turns into cape!</p></div>' +
        '<div class="vgrid">' + GAMES.magic.groups.map(function(v){
          return '<button type="button" class="vcard" id="r-intro-' + v + '" data-a="one" data-set="' + v + '"><b class="big">' + GAMES.magic.chip(v) + '</b>' +
            '<i aria-hidden="true">' + me[v][1] + '</i><span class="eg">' + magicMark(me[v][0]) + '</span></button>';
        }).join("") + '</div>' +
        '<p class="intro-hint">Tap one to practise it.</p>' +
        '<div class="acts">' +
        '<button type="button" class="key go" id="r-intro-mix" data-a="mix">Mix them all</button></div>';
    } else {
      var vt = { ee:["tree","The e says its name."], ai:["rain","The a says its name."], oa:["boat","The o says its name."],
                 oo:["moon","A new sound: oo, like a ghost."], ay:["hay","The a says its name, at the end of a word."] };
      html = '<p class="intro-title">Meet the vowel best friends</p>' + top +
        'Vowels have best friends too. Two letters, one sound. Often the first one says its name and the second one stays quiet.</p></div>' +
        '<div class="kinds">' + GAMES.vteam.groups.map(function(p){
          var item = GAMES.vteam.items.filter(function(it){ return it.text === vt[p][0]; })[0];
          return '<button type="button" class="kindcard" id="r-intro-' + p + '" data-a="one" data-set="' + p + '">' + duoHTML(p, "💞") +
            '<span class="kind-text"><span class="kind-line">' + vt[p][1] + '</span>' +
            '<span class="kind-eg"><i aria-hidden="true">' + item.pic + '</i><b>' + palWord(item, function(){ return true; }) + '</b></span></span></button>';
        }).join("") + '</div>' +
        '<p class="intro-hint">Tap a pair to practise it.</p>' +
        '<div class="acts"><button type="button" class="key go" id="r-intro-mix" data-a="mix">Mix them all</button></div>';
    }
    stage.innerHTML = html + newWordsHTML(s.n);
  }
  function chooseKind(k){ P.fkind = PALS[k] ? k : ""; P.pair = ""; start(); }
  function chooseMode(mode, set){
    var o = P.o[S.game]; if (!o) return;
    o.mode = mode; if (set) o.set = set;
    start();
  }

  /* ---------- Rounds ---------- */
  function pool(){
    var g = S.game, gm = GAMES[g], o = P.o[g];
    if (o && o.mode === "one") return gm.items.filter(function(it){ return gm.group(it) === o.set; });
    if (g === "friends" && P.fkind) return gm.items.filter(function(it){ return it.pairs.some(showPal); });
    if (g === "sight") return gm.items.filter(function(it){ return it.set === S.stop.n; });
    return gm.items;
  }
  function openGame(id){
    S.game = id;
    if (!S.stop) $("title").textContent = GAMES[id].name;
    paintTabs();
    view("game");
    start();
  }
  function start(){
    save();
    buildPicker();
    S.queue = []; S.round = [];
    newRound();
  }
  function roundSize(){ return GAMES[S.game].round; }
  /* A round is 10 cards (5 sentences), or the whole group when it has fewer. The queue is a
     shuffled pass through the group; when it runs out it is reshuffled, so long sessions keep going. */
  function newRound(){
    var all = pool(), n = Math.min(roundSize(), all.length);
    var last = S.round.length ? S.round[S.round.length-1].key : "", round = [];
    function used(it){ return round.some(function(r){ return r.key === it.key; }); }
    while (round.length < n){
      var at = -1;
      for (var k=0;k<S.queue.length;k++){ if (!used(S.queue[k]) && all.indexOf(S.queue[k]) >= 0){ at = k; break; } }
      if (at < 0){ S.queue = shuffle(all); continue; }
      round.push(S.queue.splice(at,1)[0]);
    }
    if (round.length > 1 && round[0].key === last){ var t = round[0]; round[0] = round[1]; round[1] = t; }
    S.round = round; S.i = 0;
    show();
  }
  function sayBox(text){
    return '<div class="say game-say"><span class="buddy" id="r-g-buddy" aria-hidden="true">' + T().buddy + '</span>' +
      '<p class="bubble" id="r-say-line" aria-live="polite">' + text + '</p></div>';
  }
  function show(){
    S.fx++;
    if (S.i >= S.round.length) return celebrate();
    var item = S.round[S.i], count = '<p class="count">' + (S.i + 1) + ' of ' + S.round.length + '</p>';
    if (S.game === "sight") count = '<div class="toprow">' + (HEART[item.text]
      ? '<p class="ctag hearty">❤️ Heart word</p>' : '<p class="ctag">Sound it out</p>') + count + '</div>';
    var long = isSent(S.game), bare = S.game === "magic" && BARE[item.text];
    stage.innerHTML =
      (S.game === "friends" ? '<div class="toprow">' + palsHTML(item) + count + '</div>' : count) +
      '<p class="word' + (long ? ' long' : item.text.length >= 5 ? ' w5' : '') + '" id="r-word">' + shown(item) + '</p>' +
      (bare ? '<p class="bare" id="r-bare"><span class="bare-label">without the e</span>' +
        '<span class="bare-word">' + vowelBlue(bare.text) + '</span><span class="bare-pic" aria-hidden="true">' + bare.pic + '</span></p>' : '') +
      '<div class="pic hid" id="r-pic" aria-live="polite"><span>?</span></div>' +
      sayBox(cardLine(S.i, S.round.length, 'Read it out loud, then tap ' + GAMES[S.game].btn + '.', 'Last one!')) +
      '<div class="acts">' +
        '<button type="button" class="key" id="r-back" data-a="back"' + (S.i === 0 ? ' disabled' : '') + '>Back</button>' +
        '<button type="button" class="key go" id="r-act" data-a="reveal">' + GAMES[S.game].btn + '</button>' +
      '</div>';
  }
  function reveal(){
    var item = S.round[S.i], pic = $("pic"), act = $("act");
    pic.className = "pic pop";
    pic.innerHTML = S.game === "sight"
      ? '<span class="phrase">' + markWord(item.phrase, item.text) + '</span><span class="emo" aria-hidden="true">' + item.pic + '</span>'
      : isSent(S.game) ? sceneHTML(item.scene)
      : '<span role="img" aria-label="picture">' + item.pic + '</span>';
    if (!isSent(S.game)) saw(item.text);
    act.textContent = S.i === S.round.length - 1 ? "Finish" : "Next";
    act.dataset.a = "next";
    /* the first card shows where the next button is; after that the buddy just hops */
    if (S.i === 0) $("say-line").textContent = readCheer() + " Tap " + act.textContent + ".";
    bump($("g-buddy"), "hop");
    if ($("pals")) $("pals").classList.add("yay");
  }

  function goBack(){ S.i--; show(); }

  /* ---------- Stories: a cover, then page by page ---------- */
  function openStory(id, from){
    S.story = STORY[id]; S.page = -1; S.game = "story";
    if (from === "shelf"){ S.stop = null; S.from = "stories"; $("title").textContent = "Stories"; }
    paintTabs();
    $("options").hidden = true;
    view("game");
    storyShow();
  }
  function storyShow(){
    S.fx++;
    var st = S.story, n = st.pages.length;
    if (S.page < 0){
      stage.innerHTML = '<p class="count">' + n + ' pages</p>' +
        '<p class="story-title">' + esc(st.title) + '</p>' +
        '<div class="pic pop">' + sceneHTML(st.cover) + '</div>' +
        sayBox(P.read[st.id] ? 'You have read this one. Read it again?' : 'Read the title, then open the book.') +
        '<div class="acts"><button type="button" class="key go" id="r-act" data-a="page">Start reading</button></div>';
      return;
    }
    if (S.page >= n) return storyEnd();
    var p = st.pages[S.page];
    stage.innerHTML = '<p class="count">Page ' + (S.page + 1) + ' of ' + n + '</p>' +
      '<p class="word long" id="r-word">' + p[0].split(" ").map(function(w){ return '<span class="wd">' + esc(w) + '</span>'; }).join(" ") + '</p>' +
      '<div class="pic hid" id="r-pic" aria-live="polite"><span>?</span></div>' +
      sayBox(cardLine(S.page, n, 'Read the page, then tap Show picture.', 'Last page!')) +
      '<div class="acts"><button type="button" class="key" id="r-back" data-a="pageback">Back</button>' +
      '<button type="button" class="key go" id="r-act" data-a="pagereveal">Show picture</button></div>';
  }
  function storyReveal(){
    var p = S.story.pages[S.page], pic = $("pic"), act = $("act"), last = S.page === S.story.pages.length - 1;
    pic.className = "pic pop";
    pic.innerHTML = sceneHTML(p[1]);
    act.textContent = last ? "The end" : "Next page";
    act.dataset.a = "page";
    if (last) $("say-line").textContent = "That’s the end! Tap The end.";
    else if (S.page === 0) $("say-line").textContent = readCheer() + " Tap Next page.";
    bump($("g-buddy"), "hop");
  }
  function storyEnd(){
    var st = S.story, s = STOPS[st.stop - 1];
    P.read[st.id] = 1;
    P.stars[s.id].st = 1;
    save(); paintTabs();
    stage.innerHTML = confetti() +
      '<p class="done-title">You read a whole story!</p>' +
      '<p class="done-sub">' + T().done + ' “' + esc(st.title) + '” is done.</p>' + partyReward() +
      '<ul class="wall rows">' + st.pages.map(function(p){ return '<li>' + sceneHTML(p[1]) + '<b>' + esc(p[0]) + '</b></li>'; }).join("") + '</ul>' +
      '<div class="acts"><button type="button" class="key" id="r-again" data-a="again">Read it again</button>' +
      '<button type="button" class="key go" id="r-more" data-a="shelf">More stories</button></div>';
    startParty();
  }

  /* ---------- End of a round: confetti, a reward, then the words just read ---------- */
  function confetti(){
    var bits = "";
    for (var k = 0; k < 30; k++){
      bits += '<i style="left:' + Math.round(Math.random()*96) + '%;background:var(--d' + (k % 6 + 1) +
              ');animation-delay:' + (Math.random()*0.9).toFixed(2) + 's"></i>';
    }
    return '<div class="confetti" aria-hidden="true">' + bits + '</div>';
  }
  function celebrate(){
    petRoot = null;
    var g = GAMES[S.game], n = S.round.length;
    S.totals[S.game] = (S.totals[S.game] || 0) + n;
    var total = S.totals[S.game];
    if (S.stop){ P.stars[S.stop.id][S.game === "sight" ? "sw" : isSent(S.game) ? "s" : "w"] = 1; save(); paintTabs(); }
    var wall = S.round.map(function(it){
      var art = S.game === "sight" ? '' : isSent(S.game) ? sceneHTML(it.scene) : '<span aria-hidden="true">' + it.pic + '</span>';
      return '<li>' + art + '<b>' + shown(it) + '</b></li>';
    }).join("");
    S.fedNow = 0; S.pick = null; S.placed = null;
    S.snacks = Math.max(1, Math.round(S.round.length * 0.3));   /* three snacks for a full round, fewer for a short one */
    var sub = isSent(S.game) ? (total > n ? ' That makes ' + total + ' today.' : '') : ' You have read ' + P.seen.length + ' different words!';
    var nextBtn = "";
    if (S.stop && isWords(S.game)) nextBtn = '<button type="button" class="key" id="r-tonext" data-a="tab" data-tab="sight">Common words ›</button>';
    else if (S.stop && S.game === "sight") nextBtn = '<button type="button" class="key" id="r-tonext" data-a="tab" data-tab="sent">Sentences ›</button>';
    else if (S.stop && isSent(S.game)) nextBtn = '<button type="button" class="key" id="r-tonext" data-a="tab" data-tab="stories">Stories ›</button>';
    else nextBtn = '<button type="button" class="key" id="r-tomenu" data-a="menu">Menu</button>';
    stage.innerHTML = confetti() +
      '<p class="done-title">' + n + ' ' + g.noun + ' read!</p>' +
      '<p class="done-sub">' + T().done + sub + '</p>' +
      (isSent(S.game) ? stickerReward() : S.game === "sight" ? feedReward() : funReward()) +
      '<ul class="wall' + (isSent(S.game) ? ' rows' : '') + '">' + wall + '</ul>' +
      '<div class="acts">' + nextBtn + '<button type="button" class="key go" id="r-more" data-a="more">Keep going</button></div>';
  }

  /* Feed the buddy: three snacks a round. It grows with every snack, then poops. After MAXFED snacks
     it does a mega poop and shrinks back, so it never outgrows the card. */
  /* the pet can live in Reading's own card or in another game's end screen */
  var petRoot = null;
  function pq(id){ return (petRoot || stage).querySelector("#r-" + id); }
  function petSize(){ return (4 + Math.min(P.fed, MAXFED) * 0.2).toFixed(1); }
  /* the pen is as tall as the buddy will be once this round's snacks are eaten, so nothing jumps as it grows */
  function penSize(){ return ((4 + Math.min(P.fed + S.snacks, MAXFED) * 0.2) * 1.3 + 0.4).toFixed(1); }
  /* the pile by the flush button is the only place poops show; "fresh" ones drop in as they arrive */
  function pileInner(fresh){
    if (!P.poops) return "";
    var shownPoos = Math.min(P.poops, 10), row = "";
    for (var k = 0; k < shownPoos; k++) row += '<i' + (fresh && k >= shownPoos - fresh ? ' class="out"' : '') + '>💩</i>';
    return '<span class="poos" id="r-poos" role="img" aria-label="' + P.poops + ' poops">' + row + (P.poops > 10 ? ' ×' + P.poops : '') + '</span>' +
      '<button type="button" class="chip" id="r-flush" data-a="flush">🚽 Flush</button>';
  }
  function feedReward(){
    var foods = shuffle(T().foods).slice(0, S.snacks);
    return '<div class="reward" id="r-reward">' +
      '<p class="bubble down" id="r-pet-says" aria-live="polite">Feed me! Tap a snack.</p>' +
      '<div class="pen" style="height:' + penSize() + 'rem"><span class="pet" id="r-pet" aria-hidden="true" style="font-size:' + petSize() + 'rem">' + T().buddy + '</span></div>' +
      '<div class="tray" id="r-tray">' + foods.map(function(f, k){
        return '<button type="button" class="key snack" id="r-snack-' + k + '" data-a="feed" aria-label="Snack ' + (k + 1) + '">' + f + '</button>';
      }).join("") + '</div>' +
      '<div class="pile" id="r-pile">' + pileInner() + '</div></div>';
  }
  function feed(btn){
    var pet = pq("pet"), fx = S.fx;
    if (!pet || btn.classList.contains("gone")) return;
    btn.classList.add("gone");
    function land(){
      if (fx !== S.fx || !pq("pet")) return;
      P.fed = Math.min(P.fed + 1, MAXFED); S.fedNow++; save();
      pet.style.fontSize = petSize() + "rem";
      bump(pet, "chomp");
      pq("pet-says").textContent = line(EAT);
      if (S.fedNow === S.snacks) setTimeout(function(){ if (fx === S.fx) rumble(); }, calm ? 0 : 800);
    }
    if (calm) return land();
    var a = btn.getBoundingClientRect(), b = pet.getBoundingClientRect(), f = document.createElement("span");
    f.className = "fly"; f.textContent = btn.textContent; f.setAttribute("aria-hidden", "true");
    f.style.left = (a.left + a.width/2) + "px"; f.style.top = (a.top + a.height/2) + "px";
    document.body.appendChild(f);
    void f.offsetWidth;
    f.style.transform = "translate(" + ((b.left + b.width/2) - (a.left + a.width/2)) + "px," +
      ((b.top + b.height/2) - (a.top + a.height/2)) + "px) translate(-50%,-50%) scale(.4)";
    f.style.opacity = ".3";
    setTimeout(function(){ f.remove(); land(); }, 470);
  }
  function rumble(){
    var pet = pq("pet"), fx = S.fx;
    if (!pet) return;
    pq("pet-says").textContent = fromBag("uhoh", UHOH);
    bump(pet, "rumble");
    setTimeout(function(){
      if (fx !== S.fx || !pq("pile")) return;
      var mega = P.fed >= MAXFED;
      P.poops += mega ? 3 : 1;
      if (mega) P.fed = 0;
      save();
      pq("pet").style.fontSize = petSize() + "rem";
      pq("pet-says").textContent = mega ? "MEGA PLOP! Now I am small again." : fromBag("plop", [T().plop].concat(PLOPS));
      pq("pile").innerHTML = pileInner(mega ? 3 : 1);
    }, calm ? 0 : 1050);
  }
  function flush(){
    var poos = pq("poos"), fx = S.fx;
    if (!poos) return;
    P.poops = 0; save();
    pq("pet-says").textContent = "Whoosh! All gone.";
    poos.classList.add("whoosh");
    setTimeout(function(){ if (fx === S.fx && pq("pile")) pq("pile").innerHTML = ""; }, calm ? 0 : 620);
  }

  /* ---------- After Words: the buddy shares a haiku or a joke ---------- */
  function funReward(){
    var t = THEMES[P.theme] ? P.theme : "minty", f = FUN[t] || FUN.minty, all = [];
    f.h.forEach(function(x){ all.push({ verse:x }); });
    f.j.forEach(function(x){ all.push({ q:x[0], a:x[1] }); });
    var bag = (P.fun[t] || []).filter(function(n){ return n < all.length; });
    if (!bag.length){
      bag = shuffle(all.map(function(x, n){ return n; }));
      /* the last one in the bag is used first, so it must not be the one just shown */
      if (bag.length > 1 && bag[bag.length - 1] === P.funLast[t]){ var sw = bag[0]; bag[0] = bag[bag.length - 1]; bag[bag.length - 1] = sw; }
    }
    var i = bag.pop(), m = all[i];
    P.fun[t] = bag; P.funLast[t] = i; save();
    var body = m.verse
      ? '<span class="talk-label">A haiku for you</span>' + m.verse.split("\n").map(function(l){ return '<span class="verse">' + esc(l) + '</span>'; }).join("")
      : '<span class="talk-label">A joke for you</span><span class="joke-q">' + esc(m.q) + '</span>' +
        '<span class="joke-a" id="r-joke-a" hidden>' + esc(m.a) + '</span>';
    return '<div class="reward talk" id="r-reward">' +
      '<p class="bubble down" id="r-talk" aria-live="polite">' + body + '</p>' +
      '<span class="pet" id="r-talk-buddy" aria-hidden="true">' + T().buddy + '</span>' +
      (m.verse ? '' : '<button type="button" class="key go" id="r-tell" data-a="tell">Tell me!</button>') + '</div>';
  }
  function tellPunchline(){
    var a = $("joke-a"), btn = $("tell");
    if (!a) return;
    a.hidden = false;
    if (btn) btn.remove();
    bump($("talk-buddy"), "chomp");
  }

  /* ---------- After a story: fireworks, bubbles or confetti, taking turns ---------- */
  var PARTIES = [
    { id:"fireworks", say:"Tap the sky for more fireworks!" },
    { id:"bubbles", say:"Pop the bubbles! Tap them." },
    { id:"confetti", say:"Tap anywhere for more confetti!" }
  ];
  var party = null;
  function partyReward(){
    party = PARTIES[P.partyAt % PARTIES.length];
    P.partyAt = (P.partyAt + 1) % PARTIES.length; save();
    return '<div class="reward" id="r-reward">' +
      '<div class="say"><span class="buddy" aria-hidden="true">' + T().buddy + '</span>' +
      '<p class="bubble" id="r-party-says" aria-live="polite">' + party.say + '</p></div>' +
      '<canvas class="sky sky-' + party.id + '" id="r-sky" role="img" aria-label="' + party.id + '"></canvas></div>';
  }
  function startParty(){
    var cv = $("sky"), fx = S.fx;
    if (!cv || !party) return;
    var kind = party.id, ctx = cv.getContext("2d"), dpr = Math.min(window.devicePixelRatio || 1, 2), W = 0, H = 0;
    var css = getComputedStyle(document.documentElement), cols = [1,2,3,4,5,6].map(function(k){ return css.getPropertyValue("--d" + k).trim() || "#FFC93C"; });
    cols.push(css.getPropertyValue("--accent").trim() || "#FFC93C");
    function size(){ W = cv.clientWidth; H = cv.clientHeight; cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    size();
    function pick(a){ return a[Math.floor(Math.random() * a.length)]; }
    var rockets = [], sparks = [], bubbles = [], bits = [], popped = 0, t0 = 0, last = 0, auto = 0;

    function launch(x, y){ rockets.push({ x:x, y:H, tx:x, ty:y, c:pick(cols) }); }
    function burst(x, y, c){
      var n = 36 + Math.floor(Math.random() * 14), sp = 1.6 + Math.random() * 1.4, two = Math.random() < .4 ? pick(cols) : c;
      for (var k = 0; k < n; k++){
        var an = Math.PI * 2 * k / n, v = sp * (0.6 + Math.random() * 0.5);
        sparks.push({ x:x, y:y, vx:Math.cos(an) * v, vy:Math.sin(an) * v, life:1, c:k % 2 ? c : two });
      }
    }
    function bubble(){ var r = 10 + Math.random() * 18; bubbles.push({ x:r + Math.random() * (W - 2 * r), y:H + r, r:r, sp:0.35 + Math.random() * 0.5, ph:Math.random() * 6, c:pick(cols) }); }
    function pop(b){
      popped++;
      for (var k = 0; k < 10; k++){ var an = Math.PI * 2 * k / 10; sparks.push({ x:b.x + Math.cos(an) * b.r, y:b.y + Math.sin(an) * b.r, vx:Math.cos(an) * 1.2, vy:Math.sin(an) * 1.2, life:0.7, c:b.c, dot:1 }); }
      var says = $("party-says");
      if (says) says.textContent = popped === 1 ? "Pop! 1 bubble." : "Pop! " + popped + " bubbles.";
    }
    function shower(x, y, n, up){
      for (var k = 0; k < n; k++){
        var an = (up ? -Math.PI / 2 : 0) + (Math.random() - 0.5) * (up ? 1.3 : Math.PI * 2), v = (up ? 4 : 2) + Math.random() * 3;
        bits.push({ x:x, y:y, vx:Math.cos(an) * v, vy:Math.sin(an) * v, rot:Math.random() * 6, vr:(Math.random() - .5) * .3, w:5 + Math.random() * 5, h:3 + Math.random() * 4, c:pick(cols), ph:Math.random() * 6 });
      }
    }
    function step(){
      var k, p;
      for (k = rockets.length - 1; k >= 0; k--){
        p = rockets[k]; p.y -= Math.max(3, (p.y - p.ty) * 0.09);
        if (p.y <= p.ty + 2){ burst(p.x, p.ty, p.c); rockets.splice(k, 1); }
      }
      for (k = sparks.length - 1; k >= 0; k--){
        p = sparks[k]; p.x += p.vx; p.y += p.vy; p.vy += p.dot ? 0 : 0.03; p.vx *= 0.985; p.vy *= 0.985; p.life -= p.dot ? 0.04 : 0.012;
        if (p.life <= 0) sparks.splice(k, 1);
      }
      for (k = bubbles.length - 1; k >= 0; k--){
        p = bubbles[k]; p.y -= p.sp; p.ph += 0.03;
        if (p.y < -p.r) bubbles.splice(k, 1);
      }
      for (k = bits.length - 1; k >= 0; k--){
        p = bits[k]; p.x += p.vx + Math.sin(p.ph) * 0.4; p.y += p.vy; p.vx *= 0.97; p.vy = p.vy * 0.97 + 0.12; p.rot += p.vr; p.ph += 0.1;
        if (p.y > H + 10) bits.splice(k, 1);
      }
    }
    function draw(){
      ctx.clearRect(0, 0, W, H);
      var k, p;
      rockets.forEach(function(r){ ctx.fillStyle = r.c; ctx.beginPath(); ctx.arc(r.x, r.y, 2.5, 0, 7); ctx.fill(); ctx.globalAlpha = .4; ctx.fillRect(r.x - 1, r.y, 2, 14); ctx.globalAlpha = 1; });
      /* firework sparks are short glowing streaks; bubble spray is plain dots */
      if (kind === "fireworks") ctx.globalCompositeOperation = "lighter";
      ctx.lineCap = "round";
      for (k = 0; k < sparks.length; k++){
        p = sparks[k]; ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
        if (p.dot){ ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 7); ctx.fill(); continue; }
        ctx.strokeStyle = p.c; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(p.x - p.vx * 4, p.y - p.vy * 4); ctx.lineTo(p.x, p.y); ctx.stroke();
      }
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
      for (k = 0; k < bubbles.length; k++){
        p = bubbles[k]; var x = p.x + Math.sin(p.ph) * 6;
        ctx.fillStyle = p.c; ctx.globalAlpha = .18; ctx.beginPath(); ctx.arc(x, p.y, p.r, 0, 7); ctx.fill();
        ctx.globalAlpha = .75; ctx.strokeStyle = p.c; ctx.lineWidth = 2; ctx.stroke();
        ctx.globalAlpha = .9; ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(x - p.r * .35, p.y - p.r * .35, p.r * .18, 0, 7); ctx.fill();
        ctx.globalAlpha = 1;
      }
      for (k = 0; k < bits.length; k++){
        p = bits[k]; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(1, Math.cos(p.ph));
        ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
      }
    }
    function alive(){ return fx === S.fx && cv.isConnected; }
    function loop(ts){
      if (!alive()) return;
      if (!t0) t0 = ts;
      var el = ts - t0;
      if (kind === "fireworks" && auto < 5 && el > auto * 700){ launch(W * (0.2 + Math.random() * 0.6), H * (0.18 + Math.random() * 0.3)); auto++; }
      if (kind === "bubbles" && bubbles.length < 12 && ts - last > 450){ bubble(); last = ts; }
      if (kind === "confetti" && auto < 2 && el > auto * 500){ shower(auto ? W - 10 : 10, H, 50, true); auto++; }
      step(); draw();
      requestAnimationFrame(loop);
    }
    function tap(ev){
      var r = cv.getBoundingClientRect(), x = ev.detail === 0 ? W * (0.2 + Math.random() * 0.6) : ev.clientX - r.left,
          y = ev.detail === 0 ? H * 0.35 : ev.clientY - r.top;
      if (kind === "fireworks"){ if (calm) burst(x, y, pick(cols)); else launch(x, Math.min(y, H - 30)); }
      else if (kind === "confetti") shower(x, y, 40, false);
      else {
        var hit = -1;
        for (var k = bubbles.length - 1; k >= 0; k--){ var b = bubbles[k], bx = b.x + Math.sin(b.ph) * 6; if (Math.hypot(bx - x, b.y - y) < b.r + 12){ hit = k; break; } }
        if (hit >= 0){ pop(bubbles[hit]); bubbles.splice(hit, 1); }
      }
      if (calm){ for (var n = 0; n < 40; n++) step(); draw(); }
    }
    cv.addEventListener("click", tap);
    /* with reduced motion, nothing moves on its own: one still picture, and each tap adds to it */
    if (calm){
      if (kind === "fireworks"){ burst(W * .3, H * .35, cols[0]); burst(W * .7, H * .3, cols[2]); }
      if (kind === "bubbles"){ for (var q = 0; q < 9; q++){ bubble(); bubbles[q].y = 20 + Math.random() * (H - 40); } }
      if (kind === "confetti"){ shower(W * .3, H * .3, 40, false); shower(W * .7, H * .4, 40, false); }
      for (var n = 0; n < 40; n++){ var keep = bubbles.slice(); step(); bubbles = keep; }
      draw();
      return;
    }
    requestAnimationFrame(loop);
  }

  /* A sticker after every five sentences: pick one of three, then tap the page to stick it.
     Tapping again moves it, until the next round starts. */
  function stickerReward(){
    var seen = {}, offer = [];
    shuffle(STICKERS.concat([T().buddy]).concat(T().foods)).forEach(function(e){
      if (offer.length < 3 && !seen[e]){ seen[e] = 1; offer.push(e); }
    });
    return '<div class="reward" id="r-reward">' +
      '<div class="say"><span class="buddy" aria-hidden="true">' + T().buddy + '</span>' +
      '<p class="bubble" id="r-st-says" aria-live="polite">You got a sticker! Pick one.</p></div>' +
      '<div class="picks" id="r-picks">' + offer.map(function(e, k){
        return '<button type="button" class="key pick-st" id="r-pick-' + k + '" data-a="pick" aria-pressed="false" aria-label="Sticker ' + (k + 1) + '">' + e + '</button>';
      }).join("") + '</div>' +
      '<div class="page" id="r-reward-page" role="button" tabindex="0" aria-label="Sticker page. Press to place the sticker.">' + stickersInner(-1) + '</div></div>';
  }
  function pickSticker(btn){
    S.pick = btn.textContent;
    Array.prototype.forEach.call($("picks").children, function(b){ b.setAttribute("aria-pressed", String(b === btn)); });
    if (S.placed !== null){
      P.stickers[S.placed].e = S.pick; save();
      $("reward-page").innerHTML = stickersInner(S.placed);
    } else {
      $("reward-page").classList.add("armed");
      $("st-says").textContent = "Now tap the picture to stick it.";
    }
  }
  function placeSticker(x, y){
    if (!S.pick){ $("st-says").textContent = "Pick a sticker first."; return; }
    x = Math.round(Math.max(6, Math.min(94, x))); y = Math.round(Math.max(8, Math.min(92, y)));
    var fresh = S.placed === null;
    if (fresh){
      if (P.stickers.length >= MAXSTICKERS) P.stickers.shift();
      P.stickers.push({ e:S.pick, x:x, y:y, r:Math.round(Math.random()*24 - 12) });
      S.placed = P.stickers.length - 1;
    } else { P.stickers[S.placed].x = x; P.stickers[S.placed].y = y; }
    save();
    $("reward-page").innerHTML = stickersInner(S.placed);
    $("st-says").textContent = fresh ? "Stuck! Tap again to move it." : line(T().yay);
  }

  stage.addEventListener("click", function(ev){
    var pg = ev.target.closest("#r-reward-page");
    if (pg){
      var r = pg.getBoundingClientRect();
      /* a click from the keyboard has no position, so it lands somewhere random */
      if (ev.detail === 0) return placeSticker(10 + Math.random()*80, 15 + Math.random()*70);
      return placeSticker((ev.clientX - r.left) / r.width * 100, (ev.clientY - r.top) / r.height * 100);
    }
    var b = ev.target.closest("button"); if (!b || b.disabled) return;
    if (b.dataset.story){ openStory(b.dataset.story, S.stop ? "stop" : "shelf"); return; }
    var a = b.dataset.a;
    if (a === "reveal") reveal();
    else if (a === "next"){ S.i++; show(); }
    else if (a === "back") goBack();
    else if (a === "more") newRound();
    else if (a === "menu") openMenu();
    else if (a === "tab") goTab(b.dataset.tab);
    else if (a === "feed") feed(b);
    else if (a === "flush") flush();
    else if (a === "pick") pickSticker(b);
    else if (a === "tell") tellPunchline();
    else if (a === "kind") chooseKind(b.dataset.kind);
    else if (a === "one") chooseMode("one", b.dataset.set);
    else if (a === "mix") chooseMode("mix");
    else if (a === "page"){ S.page++; storyShow(); }
    else if (a === "pagereveal") storyReveal();
    else if (a === "pageback"){ S.page--; storyShow(); }
    else if (a === "again"){ S.page = -1; storyShow(); }
    else if (a === "shelf"){ if (S.stop && S.from !== "stories") goTab("stories"); else openStories(); }
  });
  stage.addEventListener("keydown", function(ev){
    if ((ev.key === "Enter" || ev.key === " ") && ev.target.id === "r-reward-page"){
      ev.preventDefault(); placeSticker(10 + Math.random()*80, 15 + Math.random()*70);
    }
  });
  $("path").addEventListener("click", function(ev){ var b = ev.target.closest("button[data-stop]"); if (b) openStop(b.dataset.stop); });
  $("tabs").addEventListener("click", function(ev){ var b = ev.target.closest("button[data-tab]"); if (b) goTab(b.dataset.tab); });
  $("home").addEventListener("click", function(){ if (S.from === "stories" && !S.stop) openStories(); else openMenu(); });
  ["home-lists","home-stickers","home-stories"].forEach(function(id){ $(id).addEventListener("click", openMenu); });
  $("open-lists").addEventListener("click", openLists);
  $("open-stickers").addEventListener("click", openStickers);
  $("open-stories").addEventListener("click", openStories);
  $("shelf").addEventListener("click", function(ev){ var b = ev.target.closest("button[data-story]"); if (b) openStory(b.dataset.story, "shelf"); });
  $("new-page").addEventListener("click", newPage);
  $("jump").addEventListener("click", function(ev){
    var b = ev.target.closest("button[data-to]"); if (b) $(b.dataset.to).scrollIntoView();
  });
  picker.addEventListener("click", function(ev){
    var b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.meet){ showIntro(); return; }
    if (b.dataset.mode !== undefined){ P.o[S.game].mode = b.dataset.mode; }
    else if (b.dataset.kind !== undefined){ P.fkind = b.dataset.kind; P.pair = ""; }
    else if (b.dataset.set !== undefined){ if (S.game === "friends") P.pair = b.dataset.set; else P.o[S.game].set = b.dataset.set; }
    else return;
    start();
    var again = document.getElementById(b.id);
    if (again) again.focus({ preventScroll:true });
  });

  applyTheme(LF.theme);
  LF.onTheme.push(applyTheme);
  LF.apps.read = { show: openMenu };
  LF.petInto = function(box){ S.fx++; petRoot = box; S.fedNow = 0; S.snacks = 3; box.innerHTML = feedReward(); };
  LF.petTap = function(btn){ var a = btn.dataset.a; if (a === "feed") feed(btn); else if (a === "flush") flush(); };
  /* for checking the content: which stop each sentence landed in */
  LF.readCheck = function(){ return { sents:[1,2,3,4].map(function(n){ return SENTS[n].length; }), minStop:minStop }; };
})();
