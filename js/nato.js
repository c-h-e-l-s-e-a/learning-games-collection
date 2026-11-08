(function(){
  var $ = function(id){ return document.getElementById("c-" + id); };

  /* The 26 code words. Letter, code word, picture, how to say it (capitals are the loud part,
     from the official pronunciation table), a memory hook, and two decoys that start with the same letter. */
  var CODES = [
    ["A","Alfa","🐺","AL-fah","Spelled with an f! Picture the alpha wolf leading the pack.",["Apple","Arrow"]],
    ["B","Bravo","👏","BRAH-voh","People shout bravo and clap after a great show.",["Banana","Bingo"]],
    ["C","Charlie","🐶","CHAR-lee","Lots of dogs are named Charlie.",["Cookie","Cherry"]],
    ["D","Delta","🔺","DELL-tah","The Greek letter delta looks like a triangle.",["Dragon","Donut"]],
    ["E","Echo","🗣️","ECK-oh","Shout hello in a cave and hear the echo.",["Eagle","Engine"]],
    ["F","Foxtrot","🦊","FOKS-trot","Picture a fox trotting along.",["Falcon","Fireball"]],
    ["G","Golf","⛳","GOLF","Hit the little ball into the hole.",["Goose","Giant"]],
    ["H","Hotel","🏨","hoh-TELL","Time to check in!",["Honey","Hammer"]],
    ["I","India","🇮🇳","IN-dee-ah","India is a big country in Asia.",["Igloo","Island"]],
    ["J","Juliett","🎭","JEW-lee-ETT","Spelled with two t’s! Juliet is the star of a famous old play.",["Jelly","Jungle"]],
    ["K","Kilo","⚖️","KEY-loh","A kilo is 1000 grams.",["Kite","Koala"]],
    ["L","Lima","🫘","LEE-mah","Like a lima bean! Lima is also a city in Peru.",["Lemon","Lion"]],
    ["M","Mike","🎤","MIKE","Mike is short for microphone.",["Monkey","Magic"]],
    ["N","November","🍂","no-VEM-ber","Leaves fall in November.",["Noodle","Ninja"]],
    ["O","Oscar","🏆","OSS-cah","The Oscar is a famous gold trophy for movies.",["Otter","Orange"]],
    ["P","Papa","👨‍👧","pah-PAH","Papa is another word for dad.",["Pickle","Panda"]],
    ["Q","Quebec","⚜️","keh-BECK","Quebec is a province in Canada.",["Queen","Quack"]],
    ["R","Romeo","🌹","ROW-me-oh","Romeo is Juliet’s sweetheart in that famous old play.",["Rocket","Robot"]],
    ["S","Sierra","⛰️","see-AIR-rah","Sierra means a row of mountains in Spanish.",["Shark","Sunny"]],
    ["T","Tango","💃","TANG-go","The tango is a dance for two.",["Tiger","Taco"]],
    ["U","Uniform","🧑‍✈️","YOU-nee-form","Pilots wear a uniform.",["Unicorn","Umbrella"]],
    ["V","Victor","🥇","VIK-tah","The victor is the one who wins.",["Volcano","Violin"]],
    ["W","Whiskey","🥃","WISS-key","A grown-up drink in a little glass.",["Waffle","Wizard"]],
    ["X","X-ray","🩻","ECKS-ray","An X-ray shows your bones.",["Xylophone","Xenon"]],
    ["Y","Yankee","🗽","YANG-key","A nickname for people from the USA.",["Yo-yo","Yellow"]],
    ["Z","Zulu","🌍","ZOO-loo","Zulu is a language spoken in South Africa.",["Zebra","Zoom"]]
  ].map(function(r){ return { L:r[0], w:r[1], e:r[2], say:r[3], hook:r[4], decoys:r[5] }; });
  var CODE = {}, ABC = [];
  CODES.forEach(function(c){ CODE[c.L] = c; ABC.push(c.L); });

  /* Why each word: "story" where the history records something about that word (drafts of 1949 and 1951,
     the 1956 swaps, spellings), "fit" where no reason was written down and the text only says how it meets the rules. */
  var WHY = {
    A:["story","It is spelled with an f on purpose. People who speak some other languages might not know that ph sounds like f, so Alpha could get said wrong."],
    B:["story","The first draft, in 1949, used Beta. By 1951 it had changed to Bravo, a cheer people know in English, French and Spanish."],
    C:["story","In the 1949 draft and the 1951 list the C word was Coca. In 1956, after lots of testing, Coca was one of five words that got swapped, and Charlie took its place."],
    D:["story","Delta was there from the start and stayed. The old X word, Extra, kept getting mixed up with it, so Extra was the one replaced. At the airport in Atlanta, USA, where the airline Delta is based, controllers sometimes use a different D word."],
    E:["fit","No special reason was written down, but it fits the rules: it is almost the same in English, French (écho) and Spanish (eco)."],
    F:["story","Foxtrot is the name of a dance. Every word was judged by how well people understood it next to the other code words, and Foxtrot is easier to catch when it comes in a line with them."],
    G:["story","It flip-flopped! The 1949 draft said Golf, the 1951 list said Gold, and in 1956 it went back to Golf."],
    H:["fit","No special reason was written down, but it fits the rules: it is almost the same in English, French (hôtel) and Spanish (hotel)."],
    I:["fit","No special reason was written down, but it fits the rules: India is a country people all over the world know, and English and Spanish spell it the same way."],
    J:["story","Two t’s on purpose! French speakers often don’t say a t at the end of a word, so the extra t reminds them to say it. The 1949 draft spelled it Julietta."],
    K:["fit","No special reason was written down, but it fits the rules: kilo is the same word in English, French and Spanish, and in lots of other languages."],
    L:["fit","No special reason was written down, but it fits the rules: Lima is a city name people know in English, French and Spanish. Fun fact: Indonesia says London instead, because lima means five in Indonesian."],
    M:["story","In the 1949 draft and the 1951 list the M word was Metro. In 1956 Metro was one of five words that got swapped after testing, and Mike took its place."],
    N:["story","The N word used to be Nectar, but Nectar and Victor sounded too alike on the radio. People debated the new word, and November won in 1956. It is close in French (novembre) and Spanish (noviembre) too."],
    O:["fit","No special reason was written down, but it fits the rules: Oscar is a name in English, French and Spanish (Óscar)."],
    P:["story","The 1949 draft used Polka, which is a dance. By 1951 it had changed to Papa. Papa means dad in French, and papá means dad in Spanish."],
    Q:["fit","No special reason was written down, but it fits the rules: Quebec is a place name known in English, French (Québec) and Spanish. Fun fact: Jean-Paul Vinay, the language professor who helped design the alphabet, worked at a university in Montreal, Quebec."],
    R:["fit","No special reason was written down, but it fits the rules: Romeo is a famous name in English, French (Roméo) and Spanish."],
    S:["fit","No special reason was written down, but it fits the rules: sierra is the Spanish word for a row of mountains, and English uses it in names like the Sierra Nevada."],
    T:["fit","No special reason was written down, but it fits the rules: tango is the same word in English, French and Spanish."],
    U:["story","In the 1949 draft and the 1951 list the U word was Union. In 1956 it was swapped for Uniform, which is very close to uniforme in French and Spanish."],
    V:["story","Victor was there from the start and stayed. The old N word, Nectar, sounded too much like it, so Nectar was the one replaced."],
    W:["fit","No special reason was written down, but it fits the rules: people know this word in lots of languages. You will sometimes see it spelled Whisky."],
    X:["story","It flip-flopped too! The 1949 draft said X-ray, the 1951 list changed it to Extra, but Extra got mixed up with Delta. X-ray came back in 1956. NATO writes it Xray so people say it as one word."],
    Y:["story","The 1949 draft spelled it Yankey. By 1951 it was spelled Yankee, the way it is today."],
    Z:["story","The 1949 draft used Zebra. By 1951 it had changed to Zulu."]
  };
  CODES.forEach(function(c){ c.story = WHY[c.L][0] === "story"; c.why = WHY[c.L][1]; });
  var SPOKEN = { Alfa:"Alpha", Juliett:"Juliet" };   /* so a speaking voice says them right */

  /* digit, number word, how to say it on the radio, what the voice reads out */
  var NUMS = [["0","Zero","ZEE-ro","Zero"],["1","One","WUN","One"],["2","Two","TOO","Two"],["3","Three","TREE","Tree"],
    ["4","Four","FOW-er","Fower"],["5","Five","FIFE","Fife"],["6","Six","SIX","Six"],["7","Seven","SEV-en","Seven"],
    ["8","Eight","AIT","Eight"],["9","Nine","NIN-er","Niner"]].map(function(r){ return { d:r[0], w:r[1], say:r[2], sp:r[3] }; });
  var NUM = {};
  NUMS.forEach(function(n){ NUM[n.d] = n; });

  /* Words for the radio games, with a picture of each */
  var SHORT = [["CAT","🐱"],["DOG","🐕"],["PIG","🐷"],["COW","🐄"],["OWL","🦉"],["BEE","🐝"],["ANT","🐜"],["BUS","🚌"],
    ["CAR","🚗"],["SUN","☀️"],["HAT","🎩"],["EGG","🥚"],["PIE","🥧"],["ICE","🧊"],["KEY","🔑"],["BOX","📦"],["FOX","🦊"],
    ["BAT","🦇"],["BUG","🐞"],["CUP","🥤"],["MAP","🗺️"],["PEN","🖊️"],["BED","🛏️"],["VAN","🚐"],["JET","✈️"],["WEB","🕸️"],
    ["NUT","🥜"],["TEA","🍵"],["HEN","🐔"],["YAM","🍠"],["GEM","💎"],["LOG","🪵"],["SAX","🎷"],["AXE","🪓"],["ZAP","⚡"],
    ["FROG","🐸"],["FISH","🐟"],["DUCK","🦆"],["BEAR","🐻"],["LION","🦁"],["WOLF","🐺"],["CAKE","🎂"],["MOON","🌙"],
    ["STAR","⭐"],["BOOK","📖"],["KITE","🪁"],["SHIP","🚢"],["TREE","🌳"],["BOAT","⛵"],["TACO","🌮"],["POOP","💩"],
    ["YOYO","🪀"],["YAWN","🥱"]];
  var LONG = [["PIZZA","🍕"],["ROBOT","🤖"],["TIGER","🐯"],["ZEBRA","🦓"],["HORSE","🐴"],["SNAKE","🐍"],["SHARK","🦈"],
    ["MOUSE","🐭"],["PANDA","🐼"],["KOALA","🐨"],["ROCKET","🚀"],["APPLE","🍎"],["LEMON","🍋"],["MANGO","🥭"],["QUEEN","👑"],
    ["JUICE","🧃"],["DONUT","🍩"],["WHALE","🐳"],["SLOTH","🦥"],["OTTER","🦦"],["HONEY","🍯"],["VIOLIN","🎻"],["CASTLE","🏰"],
    ["WIZARD","🧙"],["GHOST","👻"],["ALIEN","👽"],["PARROT","🦜"],["TURTLE","🐢"],["BANANA","🍌"],["CHERRY","🍒"],
    ["COOKIE","🍪"],["MONKEY","🐒"],["SQUID","🦑"],["PIANO","🎹"],["CLOWN","🤡"]];
  function wordItems(list){ return list.map(function(p){ return { w:p[0], e:p[1] }; }); }
  SHORT = wordItems(SHORT); LONG = wordItems(LONG);

  /* Themes, as in Times Tables Pad and Read and Reveal: a full colour palette (in TOKENS order), an emoji buddy,
     what it says, its snacks and its poop line. "auto" keeps the page's own light and dark colours. */
  var TOKENS = ['paper','ink','ink-soft','key','key-edge','line','accent','accent-edge','accent-ink',
    'slot','good','bad','focus','face','d1','d2','d3','d4','d5','d6'];
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
      hi:'Yip! Pick a game.', done:'You out-foxed every one!', plop:'Fox-cuse me!', foods:['🍇','🥚','🫐','🍗'],
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
  var RADIO = ['Roger that!','Copy that!','Loud and clear!','Affirmative!','Message received!'];
  var NOPE = ['That one is a decoy! Try again.','Sneaky decoy! Pick another.','Not that one. You’ve got this!','Nope, a decoy. One more try!'];
  var EAT = ['Yum!','More!','Crunch!','Tasty!','Gulp!','Nom nom!'];
  var PLOPS = ['Plop!','Better out than in!','Oops. Excuse me!','That was a big one!','Who did that? Not me.',
    'Number two, coming through!','Too many snacks!','Phew. Much better.'];
  var MAXFED = 24;

  var GAMES = {
    flash:{ name:"Flash cards" }, decoy:{ name:"Real or decoy?" },
    secret:{ name:"Secret messages" }, send:{ name:"Send a message" }
  };
  var GROUPS = [["all","All 26"],["ag","A to G"],["hn","H to N"],["ou","O to U"],["vz","V to Z"],["tricky","⭐ Tricky ones"]];
  var RANGES = { ag:"ABCDEFG", hn:"HIJKLMN", ou:"OPQRSTU", vz:"VWXYZ" };
  var VIEWS = ["menu","codes","radio","game"], STORE = "code-word-club";

  var calm = false, canSpeak = false;
  try { calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch(e){}
  try { canSpeak = "speechSynthesis" in window && typeof window.SpeechSynthesisUtterance === "function"; } catch(e){}

  /* S is this visit; P is what the browser remembers between visits. */
  var S = { game:null, queue:[], round:[], i:0, done:[], gotN:0, total:0, again:{}, miss:false, pos:0, solved:false,
            sent:[], fx:0, fedNow:0, snacks:3, last:"" };
  var P = { theme:"minty", group:"all", order:"shuffle", level:"short", listen:"read", pts:{}, fed:0, poops:0 };
  try {
    var d = JSON.parse(localStorage.getItem(STORE) || "{}");
    if (THEMES[d.theme]) P.theme = d.theme;
    if (GROUPS.some(function(g){ return g[0] === d.group; })) P.group = d.group;
    if (d.order === "order" || d.order === "shuffle") P.order = d.order;
    if (d.level === "short" || d.level === "long") P.level = d.level;
    if (d.listen === "read" || d.listen === "hear") P.listen = d.listen;
    if (d.pts && typeof d.pts === "object") ABC.forEach(function(L){ var n = d.pts[L]; if (n >= 0 && n <= 99) P.pts[L] = Math.floor(n); });
    if (d.fed >= 0 && d.fed <= MAXFED) P.fed = Math.floor(d.fed);
    if (d.poops >= 0 && d.poops < 100000) P.poops = Math.floor(d.poops);
  } catch(e){}
  function save(){ try { localStorage.setItem(STORE, JSON.stringify(P)); } catch(e){} }

  var stage = $("stage"), optionsEl = $("options");

  function shuffle(a){ a = a.slice(); for (var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
  function bump(el, cls){ if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
  function line(list){ var s; do { s = list[Math.floor(Math.random()*list.length)]; } while (list.length > 1 && s === S.last); S.last = s; return s; }
  function cheer(){ return line(Math.random() < 0.5 ? T().yay : RADIO); }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(ch){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]; }); }
  function listening(){ return canSpeak && P.listen === "hear"; }

  /* ---------- Speaking out loud (only where the browser has a voice) ---------- */
  function voice(){
    try {
      var vs = window.speechSynthesis.getVoices() || [];
      return vs.filter(function(v){ return /^en[-_]CA/i.test(v.lang); })[0] || vs.filter(function(v){ return /^en[-_]US/i.test(v.lang); })[0] ||
             vs.filter(function(v){ return /^en/i.test(v.lang); })[0] || null;
    } catch(e){ return null; }
  }
  function speak(text){
    if (!canSpeak || !text) return;
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text), v = voice();
      if (v){ u.voice = v; u.lang = v.lang; } else u.lang = "en-US";
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    } catch(e){}
  }
  function spoken(w){ return SPOKEN[w] || w; }
  function hush(){ if (canSpeak) try { window.speechSynthesis.cancel(); } catch(e){} }
  function hearBtn(text, id){
    return canSpeak ? '<button type="button" class="hear" id="c-' + id + '" data-a="speak" data-say="' + esc(text) + '" aria-label="Hear it">🔊</button>' : '';
  }

  /* ---------- Stars: points for first-try answers; 1, 4 and 8 points earn one, two and three stars ---------- */
  function pts(L){ return P.pts[L] || 0; }
  function starsOf(L){ var n = pts(L); return n >= 8 ? 3 : n >= 4 ? 2 : n >= 1 ? 1 : 0; }
  function addPoint(L){ var before = starsOf(L); P.pts[L] = Math.min(pts(L) + 1, 99); save(); return starsOf(L) > before; }
  function starText(L){ var s = starsOf(L), h = ""; for (var k = 0; k < 3; k++) h += k < s ? "★" : "☆"; return h; }
  function starNote(L, got){ return got ? ' New star for ' + L + '! ⭐' : ''; }

  function view(id){
    S.fx++; hush();
    $("sheet-wrap").hidden = true; document.body.style.overflow = "";
    VIEWS.forEach(function(v){ $(v).hidden = v !== id; });
    window.scrollTo(0,0);
  }
  function openMenu(){ S.game = null; view("menu"); }

  /* ---------- Themes and the buddy ---------- */
  function T(){ return THEMES[P.theme] || THEMES.minty; }
  function applyTheme(id){
    P.theme = THEMES[id] ? id : "peacock";
    $("menu-bubble").textContent = T().hi;
  }

  /* ---------- Code list ---------- */
  function buildCodes(){
    var starred = ABC.filter(function(L){ return starsOf(L) > 0; }).length, full = ABC.filter(function(L){ return starsOf(L) === 3; }).length;
    $("codes-says").textContent = !starred ? "Play the games to earn stars for each letter." :
      full === 26 ? "Three stars on every letter. You are a radio pro!" :
      starred + " of 26 letters have a star" + (full ? ", and " + full + " have all three" : "") + ". Keep going!";
    $("codes-tip").textContent = "Tap a letter to find out why its word was picked. The capital letters show the loud part of each word.";
    $("codes-grid").innerHTML = CODES.map(function(c, k){
      return '<button type="button" class="code" id="c-code-' + c.L + '" data-letter="' + c.L + '" aria-haspopup="dialog">' +
        '<span class="code-top"><span class="lt" style="background:var(--d' + (k % 6 + 1) + ')">' + c.L + '</span>' +
        '<span class="e" aria-hidden="true">' + c.e + '</span></span>' +
        '<span class="w">' + c.w + '</span><span class="s">' + c.say + '</span>' +
        '<span class="stars" aria-label="' + starsOf(c.L) + ' of 3 stars">' + starText(c.L) + '</span></button>';
    }).join("");
    $("nums-grid").innerHTML = NUMS.map(function(n){
      var inner = '<span class="dg">' + n.d + '</span><span class="w">' + n.w + '</span><span class="s">say ' + n.say + '</span>';
      return canSpeak ? '<button type="button" class="code" id="c-num-' + n.d + '" data-say="' + n.sp + '">' + inner + '</button>'
                      : '<div class="code">' + inner + '</div>';
    }).join("");
    var cl = $("clear-stars");
    cl.hidden = !starred; cl.textContent = "Clear my stars"; cl.dataset.sure = "";
  }
  function openCodes(){ buildCodes(); view("codes"); }

  /* The sheet: one letter's word, why it was picked, the memory hook and its stars. Arrows step through A to Z. */
  var sheetL = "A";
  function fillSheet(L){
    var c = CODE[L], k = ABC.indexOf(L);
    sheetL = L;
    $("sh-lt").textContent = L;
    $("sh-lt").style.background = "var(--d" + (k % 6 + 1) + ")";
    $("sh-emo").textContent = c.e;
    $("sh-word").textContent = c.w;
    $("sh-say").innerHTML = 'Say it: <b>' + c.say + '</b>';
    $("sh-hear").hidden = !canSpeak;
    $("sh-hear").dataset.say = spoken(c.w);
    $("sh-tag").textContent = c.story ? "📜 The story" : "✅ Why it works";
    $("sh-why").textContent = c.why;
    $("sh-hook").textContent = c.hook;
    $("sh-stars").textContent = starText(L);
    $("sh-stars").setAttribute("aria-label", starsOf(L) + " of 3 stars");
    $("sheet").setAttribute("aria-label", L + " is " + c.w);
    $("sheet").scrollTop = 0;
  }
  function openSheet(L){
    fillSheet(L);
    $("sheet-wrap").hidden = false;
    document.body.style.overflow = "hidden";
    $("sh-close").focus({ preventScroll:true });
  }
  function closeSheet(){
    if ($("sheet-wrap").hidden) return;
    hush();
    $("sheet-wrap").hidden = true;
    document.body.style.overflow = "";
    var tile = $("code-" + sheetL);   /* back to the letter last shown, which may be a different one */
    if (tile) tile.focus();
  }
  function stepSheet(d){ hush(); fillSheet(ABC[(ABC.indexOf(sheetL) + d + 26) % 26]); }
  function clearStars(){
    var btn = $("clear-stars");
    if (!btn.dataset.sure){ btn.dataset.sure = "1"; btn.textContent = "Tap again to clear every star"; return; }
    P.pts = {}; save(); buildCodes();
  }

  /* ---------- Radio room: spell anything in code ---------- */
  function spellOut(){
    var raw = $("radio-text").value.toUpperCase(), rows = [], say = [], gap = false;
    for (var k = 0; k < raw.length; k++){
      var ch = raw.charAt(k);
      if (CODE[ch]){
        var c = CODE[ch];
        rows.push('<li><span class="lt" style="background:var(--d' + (ABC.indexOf(ch) % 6 + 1) + ')">' + ch + '</span>' +
          '<span><span class="w">' + c.w + '</span><span class="s">say ' + c.say + '</span></span><span class="e" aria-hidden="true">' + c.e + '</span></li>');
        say.push(spoken(c.w)); gap = false;
      } else if (NUM[ch]){
        var n = NUM[ch];
        rows.push('<li><span class="lt" style="background:var(--d5)">' + ch + '</span>' +
          '<span><span class="w">' + n.w + '</span><span class="s">say ' + n.say + '</span></span><span></span></li>');
        say.push(n.sp); gap = false;
      } else if (/\s/.test(ch) && rows.length && !gap){
        rows.push('<li class="gap">space</li>'); say.push("."); gap = true;
      }
    }
    if (gap){ rows.pop(); say.pop(); }
    $("spelled").innerHTML = rows.length ? rows.join("") : '<li class="none">Type some letters or numbers to see them in code.</li>';
    $("radio-play").hidden = !canSpeak || !rows.length;
    S.radioSay = say.join(", ").replace(/, \., /g, ". ");
  }
  function openRadio(){ spellOut(); view("radio"); }

  /* ---------- Games ---------- */
  function chipRow(label, key, list, cur){
    return '<div class="group"><span class="label">' + label + '</span><div class="sets" role="group" aria-label="' + label + '">' +
      list.map(function(v){
        return '<button type="button" class="chip" id="c-opt-' + key + '-' + v[0] + '" data-k="' + key + '" data-v="' + v[0] + '" aria-pressed="' + (v[0] === cur) + '">' + v[1] + '</button>';
      }).join("") + '</div></div>';
  }
  function buildOptions(){
    var g = S.game, html = "";
    if (g === "flash" || g === "decoy") html += chipRow("Which letters", "group", GROUPS, P.group);
    if (g === "flash" && P.group !== "tricky") html += chipRow("Order", "order", [["shuffle","🔀 Shuffle"],["order","A to Z"]], P.order);
    if (g === "secret" || g === "send") html += chipRow("Word size", "level", [["short","3 or 4 letters"],["long","5 or 6 letters"]], P.level);
    if (g === "secret" && canSpeak) html += chipRow("Message", "listen", [["read","👀 Read it"],["hear","🎧 Hear it"]], P.listen);
    optionsEl.innerHTML = html;
  }
  /* letters in the chosen group; "tricky" is the eight with the fewest points */
  function groupItems(){
    if (RANGES[P.group]) return CODES.filter(function(c){ return RANGES[P.group].indexOf(c.L) >= 0; });
    if (P.group === "tricky") return shuffle(CODES).sort(function(a, b){ return pts(a.L) - pts(b.L); }).slice(0, 8);
    return CODES;
  }
  function openGame(id){
    S.game = id;
    $("title").textContent = GAMES[id].name;
    view("game");
    start();
  }
  function start(){
    save();
    S.queue = [];
    buildOptions();
    newRound();
  }
  /* A round is 10 letters (or the whole group when it is smaller), or 5 words for the radio games.
     The queue is a pass through the pool; when it runs out it refills, so long sessions keep going. */
  function newRound(){
    var g = S.game, letters = g === "flash" || g === "decoy";
    var pool = letters ? groupItems() : P.level === "long" ? LONG : SHORT;
    var n = letters ? Math.min(10, pool.length) : 5, inOrder = g === "flash" && P.order === "order" && P.group !== "tricky";
    if (P.group === "tricky" && letters) S.queue = [];
    var round = [];
    while (round.length < n){
      if (!S.queue.length) S.queue = inOrder ? pool.slice() : shuffle(pool);
      var it = S.queue.shift();
      if (round.indexOf(it) < 0) round.push(it);
    }
    S.round = round; S.i = 0; S.done = []; S.gotN = 0; S.total = n; S.again = {};
    show();
  }
  function show(){
    S.fx++; hush();
    if (S.i >= S.round.length) return celebrate();
    if (S.game === "flash") showFlash();
    else if (S.game === "decoy") showDecoy();
    else if (S.game === "secret") showSecret();
    else showSend();
  }
  function top(left, right){ return '<div class="toprow">' + (left || '') + (right ? '<p class="count">' + right + '</p>' : '') + '</div>'; }
  function sayRow(text){
    return '<div class="say game-say"><span class="buddy" id="c-g-buddy" aria-hidden="true">' + T().buddy + '</span>' +
      '<p class="bubble" id="c-msg" aria-live="polite">' + text + '</p></div>';
  }
  function msg(t){ var m = $("msg"); if (m) m.textContent = t; }
  function hopBuddy(){ bump($("g-buddy"), "hop"); }
  function plate(L){ return '<div class="plate" id="c-plate" role="img" aria-label="Letter ' + L + '">' + L + '</div>'; }
  function bars(){ return '<span class="bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>'; }

  /* Flash cards: say it, flip it, then "Got it" or "Again". "Again" sends the card to the back of the round. */
  function showFlash(){
    var c = S.round[S.i];
    stage.innerHTML = top('', '✅ ' + S.gotN + ' of ' + S.total) + plate(c.L) +
      '<div class="reveal hid" id="c-reveal" aria-live="polite"><span>?</span></div>' +
      sayRow("Say the code word out loud. Then tap Show me.") +
      '<div class="acts" id="c-acts"><button type="button" class="key go" id="c-flip" data-a="flip">Show me</button></div>';
  }
  function flip(){
    var c = S.round[S.i], r = $("reveal");
    r.className = "reveal pop";
    r.innerHTML = '<span class="r-emo" aria-hidden="true">' + c.e + '</span>' +
      '<span class="cw-row"><span class="cw">' + c.w + '</span>' + hearBtn(spoken(c.w), "hear-word") + '</span>' +
      '<span class="say-it">Say it: <b>' + c.say + '</b></span><span class="hook">' + c.hook + '</span>';
    msg(S.again[c.L] ? "Getting closer! Did you know it this time?" : "Did you know it?");
    $("acts").innerHTML = '<button type="button" class="key" id="c-again" data-a="again">🔁 Again</button>' +
      '<button type="button" class="key go" id="c-gotit" data-a="got">✅ Got it</button>';
    $("gotit").focus({ preventScroll:true });
  }
  function gotIt(){
    var c = S.round[S.i];
    if (!S.again[c.L]) addPoint(c.L);
    S.gotN++; S.done.push(c); S.i++; show();
  }
  function againLater(){
    var c = S.round[S.i];
    S.again[c.L] = 1; S.round.push(c); S.i++; show();
  }

  /* Real or decoy: one real code word and two that only start with the same letter. Wrong picks just get crossed off. */
  function showDecoy(){
    var c = S.round[S.i], opts = shuffle([c.w].concat(c.decoys));
    S.miss = false; S.solved = false;
    stage.innerHTML = top('<span class="label">Which is the real code word?</span>', (S.i + 1) + ' of ' + S.round.length) + plate(c.L) +
      '<div class="opts" id="c-opts">' + opts.map(function(w, k){
        return '<button type="button" class="key opt" id="c-choice-' + k + '" data-a="opt" data-w="' + w + '">' + w + '</button>';
      }).join("") + '</div>' +
      sayRow("Two of these are decoys. Find the real one!") +
      '<div class="acts" id="c-acts" hidden><button type="button" class="key go" id="c-next" data-a="next">' + (S.i === S.round.length - 1 ? "Finish" : "Next") + '</button></div>';
  }
  function pickOpt(b){
    var c = S.round[S.i];
    if (S.solved || b.disabled) return;
    if (b.dataset.w === c.w){
      S.solved = true;
      b.classList.add("good");
      b.innerHTML = '<span aria-hidden="true">' + c.e + '</span>' + c.w;
      Array.prototype.forEach.call($("opts").children, function(o){ if (o !== b) o.disabled = true; });
      var star = !S.miss && addPoint(c.L);
      msg(cheer() + ' Say it: ' + c.say + '.' + starNote(c.L, star));
      hopBuddy(); bump($("plate"), "yay");
      S.done.push(c);
      $("acts").hidden = false;
      $("next").focus({ preventScroll:true });
    } else {
      S.miss = true;
      b.disabled = true; b.classList.add("nope");
      b.innerHTML = '<s>' + b.dataset.w + '</s><small>decoy</small>';
      b.setAttribute("aria-label", b.dataset.w + ", decoy");
      bump(b, "shake");
      msg(line(NOPE));
    }
  }

  /* Secret messages: a message comes in as code words; tap the letter each one stands for. */
  function showSecret(){
    var it = S.round[S.i], ears = listening();
    S.pos = 0; S.miss = false; S.solved = false;
    stage.innerHTML = top('<span class="label">Message ' + (S.i + 1) + ' of ' + S.round.length + '</span>',
        ears ? '' : '') +
      '<div class="radio"><div class="radio-top"><span>📻 Incoming message</span>' +
        (ears ? '<button type="button" class="chip" id="c-replay" data-a="replay">🔊 Play it</button>' : bars()) + '</div>' +
      '<div class="words" id="c-words">' + it.w.split("").map(function(L, k){
        var c = CODE[L];
        return ears ? '<button type="button" class="cw-chip' + (k === 0 ? ' now' : '') + '" id="c-cw-' + k + '" data-a="hearone" data-k="' + k + '" aria-label="Hear code word ' + (k + 1) + '"><span aria-hidden="true">🔊</span><span>?</span></button>'
                    : '<span class="cw-chip' + (k === 0 ? ' now' : '') + '" id="c-cw-' + k + '">' + c.w + '</span>';
      }).join("") + '</div></div>' +
      '<div class="slots" id="c-slots" role="group" aria-label="Your answer">' + it.w.split("").map(function(L, k){
        return '<span class="sl' + (k === 0 ? ' now' : '') + '" id="c-sl-' + k + '"></span>';
      }).join("") + '</div>' +
      sayRow(ears ? "Listen, then tap the letter for each code word." : "Tap the letter each code word stands for.") +
      '<div class="abc" id="c-abc">' + ABC.map(function(L){
        return '<button type="button" class="key" id="c-abc-' + L + '" data-a="abc" data-l="' + L + '">' + L + '</button>';
      }).join("") + '</div>' +
      '<div class="acts" id="c-acts" hidden><button type="button" class="key go" id="c-next" data-a="next">' + (S.i === S.round.length - 1 ? "Finish" : "Next message") + '</button></div>';
    if (ears) playMessage();
  }
  function playMessage(){
    var it = S.round[S.i];
    speak(it.w.split("").map(function(L){ return spoken(CODE[L].w); }).join(", "));
  }
  function typeLetter(L){
    var it = S.round[S.i];
    if (S.solved || !it) return;
    var want = it.w.charAt(S.pos), c = CODE[want], key = $("abc-" + L);
    if (L === want){
      var star = !S.miss && addPoint(want);
      S.miss = false;
      var sl = $("sl-" + S.pos), chip = $("cw-" + S.pos);
      sl.textContent = L; sl.className = "sl on";
      chip.className = "cw-chip done land";
      chip.innerHTML = '<b aria-hidden="true">' + L + '</b>' + c.w;
      if (chip.tagName === "BUTTON") chip.setAttribute("aria-label", c.w + ", " + L);
      S.pos++;
      if (S.pos >= it.w.length) return decoded(star ? want : "");
      $("sl-" + S.pos).classList.add("now");
      $("cw-" + S.pos).classList.add("now");
      msg(c.w + ' is ' + L + '!' + starNote(want, star));
      if (listening()) speak(spoken(CODE[it.w.charAt(S.pos)].w));
    } else {
      S.miss = true;
      bump(key, "shake");
      if (listening()){ msg("Not quite. Listen again."); speak(spoken(c.w)); }
      else msg("Not quite. Which letter does " + c.w + " stand for?");
    }
  }
  function decoded(starL){
    var it = S.round[S.i];
    S.solved = true; S.done.push(it);
    $("abc").outerHTML = '<div class="prize pop" id="c-prize"><span class="big" aria-hidden="true">' + it.e + '</span><span class="pw">' + it.w + '</span></div>';
    msg(cheer() + ' The message says ' + it.w + '.' + starNote(starL, !!starL));
    hopBuddy();
    $("acts").hidden = false;
    $("next").focus({ preventScroll:true });
  }

  /* Send a message: build the radio call one letter at a time, picking the real code word over two decoys. */
  function showSend(){
    var it = S.round[S.i];
    S.pos = 0; S.miss = false; S.solved = false; S.sent = [];
    stage.innerHTML = top('<span class="label">Word ' + (S.i + 1) + ' of ' + S.round.length + '</span>', '') +
      '<div class="target"><span class="t-emo" id="c-t-emo" aria-hidden="true">' + it.e + '</span><span class="t-word" id="c-t-word" aria-label="' + it.w + '">' +
        it.w.split("").map(function(L, k){ return '<span id="c-tl-' + k + '">' + L + '</span>'; }).join("") + '</span></div>' +
      '<div class="radio"><div class="radio-top"><span>📡 Your message</span>' + bars() + '</div>' +
        '<div class="words" id="c-words"><span class="hint">Pick a code word for each letter.</span></div></div>' +
      '<div class="opts" id="c-opts"></div>' +
      sayRow("") +
      '<div class="acts" id="c-acts" hidden></div>';
    sendStep();
  }
  function sendStep(){
    var it = S.round[S.i], L = it.w.charAt(S.pos), c = CODE[L];
    S.miss = false;
    it.w.split("").forEach(function(x, k){ $("tl-" + k).className = k < S.pos ? "sent" : k === S.pos ? "now" : ""; });
    $("opts").innerHTML = shuffle([c.w].concat(c.decoys)).map(function(w, k){
      return '<button type="button" class="key opt" id="c-choice-' + k + '" data-a="send" data-w="' + w + '">' + w + '</button>';
    }).join("");
  }
  function pickSend(b){
    var it = S.round[S.i], L = it.w.charAt(S.pos), c = CODE[L];
    if (S.solved || b.disabled) return;
    if (b.dataset.w === c.w){
      var star = !S.miss && addPoint(L);
      S.sent.push(c.w);
      var words = $("words");
      if (S.pos === 0) words.innerHTML = "";
      words.insertAdjacentHTML("beforeend", '<span class="cw-chip done land"><b aria-hidden="true">' + L + '</b>' + c.w + '</span>');
      S.pos++;
      if (S.pos >= it.w.length){
        S.solved = true; S.done.push(it);
        it.w.split("").forEach(function(x, k){ $("tl-" + k).className = "sent"; });
        $("opts").innerHTML = "";
        msg(cheer() + ' Message sent. Over!' + starNote(L, star));
        hopBuddy(); bump($("t-emo"), "yay");
        $("acts").innerHTML = (canSpeak ? '<button type="button" class="key" id="c-play-sent" data-a="playsent"><span aria-hidden="true">🔊</span>Play it</button>' : '') +
          '<button type="button" class="key go" id="c-next" data-a="next">' + (S.i === S.round.length - 1 ? "Finish" : "Next word") + '</button>';
        $("acts").hidden = false;
        $("next").focus({ preventScroll:true });
        playSent();
      } else {
        msg(L + ' is ' + c.w + '! Now ' + it.w.charAt(S.pos) + '.' + starNote(L, star));
        sendStep();
        if (b.id && document.getElementById(b.id)) document.getElementById(b.id).focus({ preventScroll:true });
      }
    } else {
      S.miss = true;
      b.disabled = true; b.classList.add("nope");
      b.innerHTML = '<s>' + b.dataset.w + '</s><small>decoy</small>';
      b.setAttribute("aria-label", b.dataset.w + ", decoy");
      bump(b, "shake");
      msg(line(NOPE));
    }
  }
  function playSent(){ speak(S.sent.map(spoken).join(", ")); }

  /* ---------- End of a round: confetti, feed the buddy, then what was just practised ---------- */
  function celebrate(){
    var g = S.game, n = S.done.length, bits = "", k;
    for (k = 0; k < 30; k++){
      bits += '<i style="left:' + Math.round(Math.random()*96) + '%;background:var(--d' + (k % 6 + 1) +
              ');animation-delay:' + (Math.random()*0.9).toFixed(2) + 's"></i>';
    }
    var title = g === "flash" ? n + " code words practised!" : g === "decoy" ? n + " real code words found!" :
                g === "secret" ? n + " secret messages decoded!" : n + " messages sent!";
    var letters = g === "flash" || g === "decoy";
    var seen = {}, list = S.done.filter(function(it){ var key = it.L || it.w; if (seen[key]) return false; seen[key] = 1; return true; });
    if (letters) list.sort(function(a, b){ return a.L < b.L ? -1 : 1; });
    var wall = list.map(function(it){
      return letters ? '<li><span aria-hidden="true">' + it.e + '</span><b>' + it.L + '</b><small>' + it.w + '</small></li>'
        : '<li><span aria-hidden="true">' + it.e + '</span><b>' + it.w + '</b><small>' +
          it.w.split("").map(function(L){ return CODE[L].w; }).join(" ") + '</small></li>';
    }).join("");
    S.fedNow = 0;
    S.snacks = 3;
    stage.innerHTML =
      '<div class="confetti" aria-hidden="true">' + bits + '</div>' +
      '<p class="done-title">' + title + '</p>' +
      '<p class="done-sub">' + T().done + ' Over and out!</p>' +
      '<div class="lf-pet" id="c-pet-box"></div>' +
      '<ul class="wall' + (letters ? '' : ' rows') + '">' + wall + '</ul>' +
      '<div class="acts"><button type="button" class="key" id="c-tomenu" data-a="menu">Menu</button>' +
      '<button type="button" class="key go" id="c-more" data-a="more">Keep going</button></div>';
    if (LF.petInto) LF.petInto($("pet-box"));
  }

  /* Feed the buddy: three snacks a round. It grows with every snack, then poops. After MAXFED snacks
     it does a mega poop and shrinks back, so it never outgrows the card. */
  function petSize(){ return (4 + Math.min(P.fed, MAXFED) * 0.2).toFixed(1); }
  function penSize(){ return ((4 + Math.min(P.fed + S.snacks, MAXFED) * 0.2) * 1.3 + 0.4).toFixed(1); }
  function pileInner(){
    if (!P.poops) return "";
    var shownPoos = Math.min(P.poops, 10), row = "";
    for (var k = 0; k < shownPoos; k++) row += "💩";
    return '<span class="poos" id="c-poos" role="img" aria-label="' + P.poops + ' poops">' + row + (P.poops > 10 ? ' ×' + P.poops : '') + '</span>' +
      '<button type="button" class="chip" id="c-flush" data-a="flush">🚽 Flush</button>';
  }
  function feedReward(){
    var foods = shuffle(T().foods).slice(0, S.snacks);
    return '<div class="reward" id="c-reward">' +
      '<p class="bubble down" id="c-pet-says" aria-live="polite">Feed me! Tap a snack.</p>' +
      '<div class="pen" style="height:' + penSize() + 'rem"><span class="pet" id="c-pet" aria-hidden="true" style="font-size:' + petSize() + 'rem">' + T().buddy + '</span>' +
      '<span class="plop" id="c-plop" aria-hidden="true" hidden>💩</span></div>' +
      '<div class="tray" id="c-tray">' + foods.map(function(f, k){
        return '<button type="button" class="key snack" id="c-snack-' + k + '" data-a="feed" aria-label="Snack ' + (k + 1) + '">' + f + '</button>';
      }).join("") + '</div>' +
      '<div class="pile" id="c-pile">' + pileInner() + '</div></div>';
  }
  function feed(btn){
    var pet = $("pet"), fx = S.fx;
    if (!pet || btn.classList.contains("gone")) return;
    btn.classList.add("gone");
    function land(){
      if (fx !== S.fx || !$("pet")) return;
      P.fed = Math.min(P.fed + 1, MAXFED); S.fedNow++; save();
      pet.style.fontSize = petSize() + "rem";
      bump(pet, "chomp");
      $("pet-says").textContent = line(EAT);
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
    var pet = $("pet"), fx = S.fx;
    if (!pet) return;
    $("pet-says").textContent = "Uh-oh...";
    bump(pet, "rumble");
    setTimeout(function(){
      var plop = $("plop");
      if (fx !== S.fx || !plop) return;
      var mega = P.fed >= MAXFED;
      P.poops += mega ? 3 : 1;
      if (mega) P.fed = 0;
      save();
      plop.hidden = false;
      plop.classList.toggle("mega", mega);
      bump(plop, "out");
      $("pet").style.fontSize = petSize() + "rem";
      $("pet-says").textContent = mega ? "MEGA PLOP! Now I am small again." : line([T().plop].concat(PLOPS));
      $("pile").innerHTML = pileInner();
    }, calm ? 0 : 1050);
  }
  function flush(){
    var poos = $("poos"), fx = S.fx;
    if (!poos) return;
    P.poops = 0; save();
    $("pet-says").textContent = "Whoosh! All gone.";
    poos.classList.add("whoosh");
    setTimeout(function(){ if (fx === S.fx && $("pile")) $("pile").innerHTML = ""; }, calm ? 0 : 620);
  }

  /* ---------- Wiring ---------- */
  stage.addEventListener("click", function(ev){
    var b = ev.target.closest("button"); if (!b || b.disabled) return;
    var a = b.dataset.a;
    if (a === "flip") flip();
    else if (a === "got") gotIt();
    else if (a === "again") againLater();
    else if (a === "opt") pickOpt(b);
    else if (a === "send") pickSend(b);
    else if (a === "abc") typeLetter(b.dataset.l);
    else if (a === "next"){ S.i++; show(); }
    else if (a === "speak") speak(b.dataset.say);
    else if (a === "replay") playMessage();
    else if (a === "hearone"){ var it = S.round[S.i]; speak(spoken(CODE[it.w.charAt(+b.dataset.k)].w)); }
    else if (a === "playsent") playSent();
    else if (a === "more") newRound();
    else if (a === "menu") openMenu();
    else if ((a === "feed" || a === "flush") && LF.petTap) LF.petTap(b);
  });
  /* a real keyboard can type the letters in Secret messages */
  document.addEventListener("keydown", function(ev){
    if (S.game !== "secret" || $("game").hidden || !$("abc") || ev.ctrlKey || ev.metaKey || ev.altKey) return;
    var L = (ev.key || "").toUpperCase();
    if (L.length === 1 && CODE[L]){ ev.preventDefault(); typeLetter(L); }
  });
  optionsEl.addEventListener("click", function(ev){
    var b = ev.target.closest("button[data-k]"); if (!b) return;
    P[b.dataset.k] = b.dataset.v;
    start();
    var again = document.getElementById(b.id);
    if (again) again.focus({ preventScroll:true });
  });
  $("menu").addEventListener("click", function(ev){ var b = ev.target.closest("button[data-game]"); if (b) openGame(b.dataset.game); });
  ["home","home-codes","home-radio"].forEach(function(id){ $(id).addEventListener("click", openMenu); });
  $("open-codes").addEventListener("click", openCodes);
  $("open-radio").addEventListener("click", openRadio);
  $("clear-stars").addEventListener("click", clearStars);
  $("codes").addEventListener("click", function(ev){
    var t = ev.target.closest("button[data-letter]"); if (t) return openSheet(t.dataset.letter);
    var b = ev.target.closest("button[data-say]"); if (b) speak(b.dataset.say);
  });
  $("sheet-wrap").addEventListener("click", function(ev){
    if (ev.target === $("sheet-wrap")) return closeSheet();
    var b = ev.target.closest("button"); if (!b) return;
    if (b.id === "c-sh-close") closeSheet();
    else if (b.id === "c-sh-prev") stepSheet(-1);
    else if (b.id === "c-sh-next") stepSheet(1);
    else if (b.id === "c-sh-hear") speak(b.dataset.say);
  });
  /* while the sheet is open: Escape closes it, arrows step letters, and Tab stays inside it */
  document.addEventListener("keydown", function(ev){
    if ($("sheet-wrap").hidden) return;
    if (ev.key === "Escape"){ ev.preventDefault(); closeSheet(); }
    else if (ev.key === "ArrowLeft"){ ev.preventDefault(); stepSheet(-1); }
    else if (ev.key === "ArrowRight"){ ev.preventDefault(); stepSheet(1); }
    else if (ev.key === "Tab"){
      var f = Array.prototype.filter.call($("sheet").querySelectorAll("button"), function(x){ return !x.hidden; });
      var first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && document.activeElement === first){ ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last){ ev.preventDefault(); first.focus(); }
    }
  });
  $("radio-text").addEventListener("input", spellOut);
  $("radio-play").addEventListener("click", function(){ speak(S.radioSay); });
  if (canSpeak) try { window.speechSynthesis.getVoices(); } catch(e){}

  applyTheme(LF.theme);
  LF.onTheme.push(applyTheme);
  LF.apps.codes = { show: openMenu };
})();
