/* Reading: the word lists, sentences, common words, stories, haiku and jokes.
   Square brackets in words mark letter friends; see reading.js for how each list is used. */
var READING_DATA = (function () {
  var WORDS = [
    ["cat","🐱"],["hat","🎩"],["bat","🦇"],["rat","🐀"],["map","🗺️"],["cap","🧢"],["van","🚐"],["man","👨"],
    ["pan","🍳"],["can","🥫"],["bag","👜"],["cab","🚕"],["ram","🐏"],["sad","😢"],["mad","😠"],
    ["nap","😴"],["tap","🚰"],["gas","⛽"],["tag","🏷️"],["zap","⚡"],["yam","🍠"],["dad","👨‍🍼"],["bad","👎"],
    ["sax","🎷"],["lab","🔬"],["pad","📝"],
    ["hen","🐔"],["bed","🛏️"],["net","🥅"],["pen","🖊️"],["leg","🦵"],["web","🕸️"],["ten","🔟"],["jet","✈️"],
    ["gem","💎"],["yes","✅"],["wet","💧"],["red","🟥"],["men","👬"],["pet","🐹"],
    ["pig","🐷"],["pin","📌"],["lip","👄"],["bin","🗑️"],["six","6️⃣"],["kid","🧒"],["win","🏆"],["dig","⛏️"],
    ["fix","🔧"],["kit","🧰"],["sit","🪑"],["pit","🕳️"],
    ["dog","🐕"],["fox","🦊"],["box","📦"],["pot","🍲"],["log","🪵"],["dot","🔴"],["hot","🔥"],["cop","👮"],
    ["sob","😭"],["rod","🎣"],["mom","👩"],["fog","🌫️"],["hop","🐇"],["hog","🐗"],["bot","🤖"],
    ["sun","☀️"],["bus","🚌"],["cup","🥤"],["bug","🐞"],["nut","🌰"],["tub","🛁"],["mug","☕"],["run","🏃"],
    ["hut","🛖"],["hug","🤗"],["cut","✂️"],["yum","😋"],["pup","🐶"],["sub","🥪"],["fun","🎉"]
  ];

  /* sentence, then its scene: sprites as [emoji, x, y, size, rotate, flip, opacity] on a 6 x 3.4 grid,
     listed back to front. "=" draws speed lines. */
  var SENTENCES = [
    ["The cat is on the bed.",[["🛏️",3,2.2,2.4],["🐱",3.2,1.75,1.1]]],
    ["A bug is on the log.",[["🪵",3,2.35,2.4],["🐞",3.4,1.25,0.9,20]]],
    ["The dog can run.",[["🎾",0.7,2.75,0.7],["🐕",2.9,2.0,2.2],["=",4.9,2.2,1.3]]],
    ["I see a fox.",[["🌲",2.9,1.7,2.0],["👀",1.1,2.0,1.4],["🦊",3.9,2.1,1.6],["🌲",5.4,1.8,2.0]]],
    ["The pig is in the tub.",[["🐷",3.1,1.2,1.4],["🛁",3,2.2,2.6],["💦",4.8,0.9,0.8],["🧼",1.1,2.9,0.7]]],
    ["Mom has a map.",[["👩",2.0,1.8,2.0],["🗺️",3.9,2.2,1.6,-8],["🧭",5.2,1.0,0.7]]],
    ["Dad has a mug.",[["👨",1.9,1.7,2.0],["👧",3.2,2.4,1.1],["☕",4.5,2.2,1.4],["🍪",5.5,2.9,0.6]]],
    ["The sun is hot.",[["☀️",4.2,1.3,2.3],["🥵",1.7,2.3,1.5],["💦",2.8,1.4,0.7]]],
    ["The pup is wet.",[["🌧️",3,0.8,1.7],["🐶",3,2.4,1.7],["💧",1.7,2.1,0.6],["💧",4.3,2.3,0.6],["💧",4.1,1.6,0.45]]],
    ["I am sad.",[["🌧️",3.9,0.8,1.3],["😢",3,2.1,2.0],["🥀",1.2,2.7,0.9]]],
    ["The kid had a nap.",[["🛏️",3,2.2,2.5],["😴",2.5,1.85,1.0],["🧸",3.9,1.95,0.8],["💤",3.6,0.8,1.0]]],
    ["A fox is in the box.",[["🦊",3,0.95,1.6],["📦",3,2.4,2.1]]],
    ["The hen is on the hut.",[["🌱",0.9,3.0,0.6],["🌱",5.2,3.0,0.6],["🛖",3,2.3,2.3],["🐔",3.1,0.85,1.0]]],
    ["We run to the bus.",[["=",0.5,2.3,0.9,0,1],["🏃‍♀️",1.5,2.3,1.5,0,1],["🏃",2.6,2.4,1.4,0,1],["🚌",4.6,2.0,2.3]]],
    ["The man has a van.",[["🚐",4.3,2.0,2.4],["👨",1.5,1.9,1.7],["🔑",2.6,2.6,0.8,-20]]],
    ["She has a gem.",[["👧",2.1,1.9,2.0],["💎",4.1,2.1,1.5],["✨",5.0,1.1,0.8],["✨",3.5,1.1,0.55]]],
    ["He has a pen and a pad.",[["👦",1.6,1.8,1.9],["📝",4.4,2.2,1.7],["🖊️",3.1,2.4,1.0]]],
    ["The rat is in the bin.",[["🐀",3.3,0.95,1.3],["🗑️",3,2.4,2.1],["🍌",4.8,2.9,0.7,40]]],
    ["I can fix it.",[["🚲",3.7,2.1,2.4],["🔧",1.5,1.7,1.4],["🔩",1.2,2.9,0.6],["✨",5.3,0.8,0.7]]],
    ["The bat is in the fog.",[["🌙",5.1,0.7,0.9],["🦇",3,1.2,1.7],["🌫️",1.5,2.6,1.6,0,0,0.8],["🌫️",4.5,2.6,1.6,0,0,0.8],["🌫️",3,2.7,1.6,0,0,0.8]]],
    ["My pet is in my cap.",[["🐹",3,1.2,1.4],["🧢",3,2.3,2.4,180]]],
    ["The cop is on the bus.",[["🚌",3,1.9,3.0],["👮",3.4,1.4,0.9]]],
    ["The cat and the dog nap.",[["🛏️",3,2.3,2.6],["🐱",2.5,1.95,0.95,-15],["🐶",3.7,1.95,0.95,15],["💤",4.7,0.8,0.9]]],
    ["I see six men.",[["👀",0.9,1.8,1.2],["👨",2.6,1.1,1.05],["👨",3.7,1.1,1.05],["👨",4.8,1.1,1.05],["👨",2.6,2.4,1.05],["👨",3.7,2.4,1.05],["👨",4.8,2.4,1.05]]],
    ["The pot is hot.",[["🔥",2.2,2.9,0.9],["🔥",3.8,2.9,0.9],["🔥",3,3.0,1.0],["🍲",3,1.5,2.2]]],
    ["The bot can dig.",[["🕳️",4.4,2.9,1.6],["🤖",1.9,1.8,1.9],["⛏️",3.5,1.9,1.4,20],["🪨",5.4,2.4,0.6]]],
    ["We had fun.",[["🎈",0.9,1.2,1.2,-10],["🥳",2.2,2.2,1.6],["🥳",3.8,2.2,1.6],["🎉",5.1,1.2,1.2],["🎵",3.0,0.7,0.6]]],
    ["You can win.",[["=",0.5,2.4,0.8,0,1],["🏃",1.5,2.3,1.5,0,1],["🏁",3.2,2.2,1.4],["🏆",4.8,1.6,1.8],["✨",5.6,0.5,0.6]]],
    ["Go to bed.",[["🌙",5.2,0.7,1.0],["⭐",3.9,0.6,0.5],["⭐",2.9,1.0,0.4],["👉",1.2,2.3,1.3],["🛏️",4.0,2.3,2.3]]],
    ["The hog is big.",[["🐗",3.5,1.8,3.0],["🧒",0.8,2.8,0.7]]],
    ["This cup is for mom.",[["🥤",1.4,2.1,1.6],["🎀",1.4,0.95,0.7],["=",2.8,2.2,0.8,0,1],["👩",4.4,1.9,2.0],["❤️",5.5,0.7,0.6]]],
    ["The ram is with the hen.",[["☀️",5.2,0.7,0.9],["🌱",1.0,3.05,0.6],["🌱",5.3,3.05,0.6],["🐏",2.3,1.9,2.2],["🐔",4.3,2.4,1.3]]],
    ["It was a bad nut.",[["🌰",1.9,2.2,1.7],["🐛",2.3,1.2,0.8,-20],["🤢",4.2,1.9,1.8]]],
    ["The kid got a hug.",[["👩",3.5,1.8,2.1],["🧒",2.6,2.4,1.5],["❤️",1.5,1.0,0.8],["💕",4.9,0.9,0.9]]],
    ["I see the jet.",[["☁️",1.5,1.0,1.3],["☁️",5.3,2.4,1.0],["=",2.9,1.9,0.9,-45],["✈️",4.1,1.1,1.9],["👀",1.6,2.7,1.1]]],
    ["The yam is in the pan.",[["🔥",3,3.0,0.9],["🍳",3,1.9,2.6],["🍠",2.8,1.9,1.1]]],
    ["Mom can cut the tag.",[["👩",1.3,1.8,1.7],["👕",4.6,1.8,2.3],["🏷️",3.8,2.7,0.9,-20],["✂️",2.9,2.4,1.1]]],
    ["A red bug is on my leg.",[["🦵",3,1.8,2.8],["🐞",3.2,1.5,0.8,25],["❗",4.8,1.0,0.9,10]]],
    ["Mom is at the lab.",[["👩‍🔬",1.7,1.9,2.0],["🔬",3.9,2.1,1.7],["🧪",5.3,2.3,1.1,10]]],
    ["The fox had a sub.",[["🦊",2.3,1.7,2.1],["🥪",3.5,2.6,1.2,-10],["✨",4.6,1.2,0.6]]],
    ["The hat is in the bag.",[["🎩",3,1.0,1.5],["👜",3,2.3,2.4]]],
    ["He is mad at the rat.",[["😠",1.8,1.8,1.9],["💢",2.9,0.7,0.7],["=",3.3,2.5,0.8,0,1],["🐀",4.3,2.4,1.4,0,1],["🧀",5.4,2.7,0.8]]],
    ["I got a cap and a bag.",[["🎁",1.0,2.5,1.3],["🧢",2.8,1.6,1.6,-10],["👜",4.6,2.1,1.8],["✨",3.7,0.7,0.6],["✨",5.6,0.9,0.5]]],
    ["The pin is in the kit.",[["📌",3.2,1.0,1.3],["🧰",3,2.3,2.4]]],
    ["Are you wet?",[["🌧️",2.6,0.75,1.5],["🧒",2.6,2.3,1.8],["💦",3.9,1.7,0.9],["❓",5.0,1.9,1.5,12]]],
    ["The bug was in the mug.",[["☕",2.2,2.2,2.3],["=",3.6,1.45,0.9,-35],["🐞",4.7,0.85,0.9,40]]],
    ["The pig is not sad.",[["😢",1.2,1.2,1.1],["🚫",1.2,1.2,1.5,0,0,0.9],["🐷",3.6,2.0,2.2],["🎵",5.2,0.9,0.7],["✨",5.0,2.7,0.6]]],
    ["This is my dog.",[["👉",1.1,1.9,1.3],["🐕",3.6,2.0,2.3],["❤️",5.2,0.8,0.8],["🦴",5.2,2.9,0.8,-20]]]
  ];

  /* Common words: the word, a phrase that uses it, a picture for the phrase, and the stop where it is first met.
     Stop 3's words look like magic e words but are not, so they are met right there.
     Words listed in HEART below are heart words; every other common word can be sounded out with
     the letters taught by its stop, so the game shows it the way that stop shows its own words. */
  var SIGHT = [
    ["a","a big bus","🚌",1],["the","the dog","🐕",1],["I","I can run","🏃",1],["is","the sun is hot","☀️",1],
    ["it","it is wet","💧",1],["in","a cat in a box","🐱📦",1],["on","a bug on a log","🐞🪵",1],["at","mom is at the bus","👩🚌",1],
    ["and","a cup and a mug","🥤☕",1],["am","I am sad","😢",1],["has","the man has a map","👨🗺️",1],["had","the kid had a nap","🧒😴",1],
    ["his","his red cap","🧢",1],["can","I can hop","🐇",1],["not","the pup is not sad","🐶",1],["got","the hen got wet","🐔💧",1],
    ["see","I see a fox","🦊",1],["he","he has a pen","🖊️",1],["she","she has a gem","💎",1],["we","we had fun","🎉",1],
    ["my","my pet","🐹",1],["to","run to the bus","🏃🚌",1],["go","go to bed","🛏️",1],["no","no nap","🚫😴",1],
    ["big","a big hog","🐗",1],["me","hug me","🤗",1],["you","you can win","🏆",1],
    ["this","this pig is big","🐷",2],["that","that is my hat","👉🎩",2],["with","mom with a bag","👩👜",2],["then","run, then nap","🏃😴",2],
    ["them","hug them","🤗🐶🐱",2],["was","the pot was hot","🍲🔥",2],["are","we are wet","💧",2],["for","a hat for dad","🎩",2],
    ["of","a box of pens","📦🖊️",2],["they","they sit on a log","👫🪵",2],
    ["said","mom said yes","👩✅",3],["have","I have a cake","🎂",3],["come","come home","👋🏠",3],["some","some grapes","🍇",3],
    ["give","give the dog a bone","🐕🦴",3],["love","I love my bike","❤️🚲",3],["do","I can do it","💪",3],["were","we were wet","💧",3],
    ["one","one goat","🐐",4],["two","two bees","🐝🐝",4],["what","what is in the box?","❓📦",4],["where","where is my boot?","👢❓",4],
    ["here","here is a seed","🌱",4],["there","there is a boat","🚤",4],["look","look at the moon","👀🌙",4],["good","a good dog","🐕👍",4]
  ];

  /* Heart words: the part in square brackets is the tricky bit, the letters that don't follow the sounds
     taught by that word's stop. The rest of the word can still be sounded out. */
  var HEART = {
    /* stop 1: single letters and their short sounds */
    "a":"[a]", "the":"[the]", "I":"[I]", "is":"i[s]", "has":"ha[s]", "his":"hi[s]", "see":"s[ee]",
    "he":"h[e]", "she":"[sh][e]", "we":"w[e]", "me":"m[e]", "my":"m[y]", "go":"g[o]", "no":"n[o]",
    "to":"t[o]", "you":"y[ou]",
    /* stop 2: adds letter friends like sh, th and ck */
    "was":"w[as]", "are":"[are]", "for":"f[or]", "of":"[of]", "they":"th[ey]",
    /* stop 3: adds magic e; in these words the e's magic doesn't work, or the vowel says something else */
    "said":"s[ai]d", "have":"h[a]ve", "come":"c[o]me", "some":"s[o]me", "give":"g[i]ve", "love":"l[o]ve",
    "do":"d[o]", "were":"w[ere]",
    /* stop 4: adds vowel best friends like ee, ai and oo */
    "one":"[one]", "two":"t[wo]", "what":"[wh][a]t", "where":"[wh][ere]", "here":"h[ere]", "there":"th[ere]",
    "look":"l[oo]k", "good":"g[oo]d"
  };

  /* Magic e: the vowel is always third from the end and the e is last. */
  var MAGIC = [
    ["cake","🎂"],["cape","🦸"],["lake","🏞️"],["snake","🐍"],["plane","✈️"],["skate","⛸️"],["game","🎮"],["grape","🍇"],["wave","🌊"],
    ["kite","🪁"],["bike","🚲"],["pine","🌲"],["five","5️⃣"],["nine","9️⃣"],["smile","😃"],["slide","🛝"],["dive","🤿"],["ride","🎢"],
    ["bone","🦴"],["rose","🌹"],["nose","👃"],["home","🏠"],["rope","🪢"],["cone","🍦"],["hole","🕳️"],["globe","🌍"],["stone","🪨"],
    ["cube","🧊"],["tube","🧪"],["mule","🫏"],["cute","🥰"],["dune","🏜️"],
    ["cane","🦯"],["mane","🦁"],["fine","👍"],["note","🎵"],["hope","🤞"]
  ];
  /* Pairs: the same word without its magic e, shown small under the magic e word. [short, picture, long, picture] */
  var WAND = [
    ["cap","🧢","cape","🦸"],["kit","🧰","kite","🪁"],["pin","📌","pine","🌲"],["cub","🐻","cube","🧊"],
    ["tub","🛁","tube","🧪"],["not","🚫","note","🎵"],["hop","🐇","hope","🤞"],["can","🥫","cane","🦯"],
    ["man","👨","mane","🦁"],["cut","✂️","cute","🥰"],["fin","🦈","fine","👍"]
  ];
  var MSENT = [
    ["The snake is in the lake.",[["🏞️",3,1.9,3.0],["🐍",3.3,2.45,1.0],["💦",4.5,2.0,0.6]]],
    ["I ride my bike home.",[["🏠",4.9,1.6,1.9],["=",0.6,2.2,0.9,0,1],["🚴",2.2,2.1,2.0,0,1]]],
    ["The dog has a bone.",[["🐕",3.6,2.0,2.2],["🦴",1.3,2.5,1.2,-20],["✨",0.8,1.5,0.6]]],
    ["A rose is on the cake.",[["🎂",3,2.2,2.6],["🌹",3.1,0.95,1.1,-15]]],
    ["The kite is up in the pine.",[["🌲",3.4,1.9,3.0],["🪁",3.9,1.0,1.2,20],["😮",1.0,2.6,1.0]]],
    ["Mom and I have a game.",[["👩",1.4,1.8,1.8],["🧒",2.9,2.3,1.3],["🎮",4.7,2.1,1.6],["✨",5.5,1.2,0.6]]],
    ["The mule ate a grape.",[["🍇",0.9,2.4,1.0],["🫏",3.3,1.9,2.4],["😋",5.1,0.9,0.8]]],
    ["I like to skate.",[["❄️",0.9,0.8,0.6],["❄️",5.2,0.6,0.5],["⛸️",2.4,2.0,1.7,-10],["⛸️",3.8,2.2,1.7,10],["=",5.3,2.1,0.8]]],
    ["Give me the cone!",[["🧒",1.6,2.0,1.9],["🍦",4.2,1.9,1.9,10],["❗",5.4,0.9,0.8]]],
    ["The cube is in my cup.",[["🥤",3,2.2,2.6],["🧊",3.1,1.1,1.0,15]]],
    ["The plane can dive!",[["☁️",1.0,0.9,1.1],["=",2.0,0.9,0.9,45],["✈️",3.2,1.7,2.0,60],["☁️",5.2,2.7,1.0]]],
    ["The pig can slide.",[["🛝",3,2.0,2.8],["🐷",2.2,1.1,1.0,30]]],
    ["I smile at the snake.",[["😃",1.7,1.9,2.0],["❤️",3.1,0.8,0.6],["🐍",4.4,2.2,1.9]]],
    ["The rope is on the stone.",[["🪨",3,2.3,2.8],["🪢",3.1,1.3,1.4]]],
    ["A hole is in my sock.",[["🧦",3,1.8,3.0,-10],["🕳️",3.3,2.2,0.8]]],
    ["I have a globe.",[["🧒",1.8,2.0,2.0],["🌍",4.2,1.9,1.9],["✨",5.4,0.8,0.6]]],
    ["Some cake is on my nose!",[["😳",3,1.8,3.0],["🎂",3,2.05,0.8]]],
    ["Mom gave me five grapes.",[["👩",1.2,1.8,1.8],["🍇",2.7,1.3,0.8],["🍇",3.6,1.3,0.8],["🍇",4.5,1.3,0.8],["🍇",3.1,2.4,0.8],["🍇",4.0,2.4,0.8],["🧒",5.4,2.3,1.1]]],
    ["The cub is cute.",[["💕",1.2,1.0,0.8],["🐻",3,1.9,2.6],["🥰",4.9,1.0,0.9]]],
    ["I hope I win.",[["🤞",1.7,1.9,1.9],["🏆",4.2,1.9,2.0],["✨",5.3,0.8,0.6],["✨",3.2,0.9,0.5]]]
  ];

  /* Vowel best friends. Square brackets mark the two vowels that make one sound. */
  var VTEAM = [
    ["tr[ee]","🌳"],["b[ee]","🐝"],["f[ee]t","🦶"],["sh[ee]p","🐑"],["j[ee]p","🚙"],["s[ee]d","🌱"],["t[ee]th","😁"],["thr[ee]","3️⃣"],
    ["r[ai]n","🌧️"],["sn[ai]l","🐌"],["m[ai]l","📬"],["n[ai]l","💅"],["tr[ai]n","🚆"],["p[ai]nt","🎨"],["s[ai]l","⛵"],["p[ai]l","🪣"],
    ["b[oa]t","🚤"],["g[oa]t","🐐"],["t[oa]d","🐸"],["c[oa]t","🧥"],["s[oa]p","🧼"],["r[oa]d","🛣️"],["t[oa]st","🍞"],
    ["m[oo]n","🌙"],["sp[oo]n","🥄"],["z[oo]","🦓"],["b[oo]t","👢"],["p[oo]l","🏊"],["br[oo]m","🧹"],["t[oo]th","🦷"],["c[oo]l","😎"],
    ["h[ay]","🌾"],["d[ay]","🌞"],["pl[ay]","🧸"],["p[ay]","💰"],["j[ay]","🐦"]
  ];
  var VSENT = [
    ["A bee is in the tree.",[["🌳",3,1.9,3.0],["🐝",3.8,1.3,0.9,15],["=",4.6,1.4,0.6]]],
    ["The goat is on the boat.",[["⛵",2.8,2.0,2.6],["🐐",3.9,2.3,1.4],["🌊",1.2,2.95,1.0,0,0,0.7],["🌊",4.8,2.95,1.0,0,0,0.7]]],
    ["The toad sat on the road.",[["🛣️",3,2.2,3.0],["🐸",3,2.55,1.1]]],
    ["The snail is on the pail.",[["🪣",3,2.2,2.5],["🐌",3.3,0.95,1.0]]],
    ["Look at the moon!",[["⭐",1.0,0.8,0.5],["🌙",4.3,1.1,1.9],["⭐",5.5,2.0,0.4],["👀",1.6,2.5,1.4]]],
    ["The sheep can sleep in the hay.",[["🌾",1.6,2.4,1.6],["🌾",4.4,2.4,1.6],["🐑",3,2.3,1.9],["💤",4.4,0.8,0.9]]],
    ["I need soap.",[["🫧",4.8,0.9,0.8],["🧒",1.8,2.0,2.0],["🧼",4.2,2.2,1.5],["🫧",5.4,1.8,0.6]]],
    ["The train can go fast.",[["🚂",2.6,2.0,2.6],["=",4.7,2.1,1.2],["💨",5.5,1.4,0.7]]],
    ["The toad is in the pool.",[["☀️",5.2,0.7,0.9],["🐸",3,1.75,1.7],["🌊",1.9,2.6,1.5,0,0,0.92],["🌊",4.1,2.6,1.5,0,0,0.92],["💦",4.6,1.2,0.7]]],
    ["Dad has a cool coat.",[["👨",1.7,1.8,2.0],["🧥",4.2,2.1,1.8],["😎",5.3,0.9,0.8]]],
    ["We play in the rain.",[["🌧️",3,0.75,1.8],["☔",1.7,2.2,1.5],["🧒",3.4,2.4,1.4],["💦",4.8,2.7,0.8]]],
    ["A jay has my mail!",[["🐦",2.4,1.7,2.0],["✉️",3.9,2.3,1.2,-15],["📬",5.2,2.3,1.1]]],
    ["A goat ate my toast!",[["🍞",0.9,2.5,1.0,20],["🐐",3.2,1.9,2.4],["😱",5.3,1.1,0.9]]],
    ["I paint a green tree.",[["🎨",1.5,2.3,1.6],["🖌️",2.6,1.4,1.1,20],["🌳",4.4,1.9,2.4]]],
    ["I see three bees.",[["👀",1.0,2.3,1.3],["🐝",2.8,1.0,1.0],["🐝",4.0,1.8,1.0,-15],["🐝",5.1,0.9,1.0,15]]],
    ["My tooth is in my hand!",[["✋",3,2.0,2.8],["🦷",3.1,1.5,1.0],["🎉",5.0,0.9,0.9]]],
    ["What a good day!",[["☀️",4.6,1.0,1.6],["😄",2.2,2.0,2.0],["🌈",4.2,2.6,1.4]]],
    ["Where is my boot?",[["👢",1.8,2.3,1.6],["❓",3.4,1.5,1.4,10],["🤔",4.9,2.0,1.6]]],
    ["The broom can sweep.",[["🧹",3.0,1.8,2.4,30],["💨",4.6,2.7,0.9],["🍂",5.4,2.9,0.6]]]
  ];

  /* Words that fit a stop's pattern and turn up in its sentences and stories, but are not word cards
     (most of them are hard to picture on their own). */
  var EXTRA = {
    1: "up sat set get pop",
    2: "went fast band lost stuck",
    3: "ate made came gave like time plate shape wake",
    4: "sleep deep need green sweep"
  };

  /* Stories: a title, a cover, then one sentence and one picture per page. Plain text, as in a real book. */
  var STORIES = [
    { id:"pets", stop:1, title:"Pets on the Bed",
      cover:[["🛏️",3,2.3,2.6],["🐱",2.2,2.0,0.9],["🐶",3.0,1.9,0.9],["🐷",3.8,2.0,0.9]],
      pages:[
        ["The cat naps on the bed.",[["🛏️",3,2.3,2.6],["🐱",3.0,2.0,1.0],["💤",4.2,0.9,0.8]]],
        ["The dog hops on the bed.",[["🛏️",3,2.3,2.6],["🐱",2.4,2.0,0.95],["🐕",3.9,1.1,1.2,-15],["=",4.9,1.9,0.8,-60]]],
        ["The pig hops on the bed.",[["🛏️",3,2.3,2.6],["🐱",1.9,2.0,0.9],["🐕",3.0,1.95,1.0],["🐷",4.2,0.9,1.1,15]]],
        ["A big hog hops on the bed!",[["🛏️",3,2.3,2.6],["🐱",1.7,2.0,0.85],["🐕",2.6,1.95,0.95],["🐷",3.5,2.0,0.9],["🐗",4.8,0.8,1.6,20]]],
        ["It is a bad bed.",[["🛏️",3,2.4,2.6,-12],["💥",3.0,1.4,1.6],["🐱",1.0,1.0,0.8,-30],["🐷",5.1,1.0,0.8,30]]],
        ["The pets nap on Dad.",[["🛋️",3,2.45,3.0],["🧔",3,1.45,1.5],["🐱",3.05,0.55,0.75],["🐕",1.8,2.15,0.85],["🐷",3.0,2.3,0.85],["🐗",4.2,2.15,0.9],["💤",5.3,0.7,0.8]]]
      ] },
    { id:"foxhen", stop:1, title:"The Fox and the Hen",
      cover:[["🦊",2.0,1.9,1.9],["❤️",3.0,0.8,0.6],["🐔",4.1,2.0,1.7]],
      pages:[
        ["A fox sees a hen.",[["🌳",0.8,1.6,1.6],["🦊",2.0,2.2,1.5],["👀",2.2,1.0,0.8],["🐔",4.6,2.3,1.4]]],
        ["The fox runs at the hen.",[["=",0.9,2.3,0.9,0,1],["🦊",2.2,2.2,1.6],["🐔",4.7,2.3,1.3],["❗",4.7,1.1,0.8]]],
        ["The hen runs in the hut.",[["🛖",4.0,2.0,2.4],["🐔",3.9,2.5,0.8],["=",2.6,2.5,0.8,0,1],["🦊",1.1,2.3,1.2]]],
        ["The fox is sad. He sits and sobs.",[["🌧️",4.8,0.7,1.1],["🦊",3,2.0,2.2],["💧",2.3,1.8,0.5],["💧",3.7,1.8,0.5]]],
        ["The hen got the fox a yam.",[["🐔",1.6,2.1,1.6],["🍠",3.0,2.5,1.0,-10],["🦊",4.5,2.0,1.6]]],
        ["Yum! The fox hugs the hen.",[["🦊",2.4,2.0,1.8],["🐔",3.7,2.1,1.6],["❤️",3.0,0.7,0.8],["😋",5.2,1.0,0.8]]]
      ] },
    { id:"duck", stop:2, title:"The Duck in the Bath",
      cover:[["🛁",3,2.2,2.6],["🦆",3.0,1.25,1.2],["🫧",4.6,0.8,0.7]],
      pages:[
        ["This is my duck.",[["👉",1.2,2.0,1.3],["🦆",3.5,2.0,2.2],["❤️",5.1,0.8,0.7]]],
        ["The duck is in the bath.",[["🛁",3,2.2,2.6],["🦆",3.0,1.25,1.1]]],
        ["Then a ship is in the bath.",[["🛁",3,2.2,2.6],["🦆",2.2,1.3,1.0],["🚢",3.8,1.3,1.0]]],
        ["Then a crab is in the bath.",[["🛁",3,2.2,2.6],["🦆",1.8,1.3,0.9],["🚢",3.0,1.3,0.9],["🦀",4.1,1.35,0.9]]],
        ["Then the dog hops in!",[["🛁",3,2.3,2.6],["🦆",1.8,1.4,0.8],["🚢",2.8,1.4,0.8],["🦀",3.8,1.45,0.8],["🐕",4.9,0.7,1.2,30],["💦",1.0,0.8,0.8]]],
        ["The duck is on the dog.",[["🛁",3,2.3,2.6],["🐕",3.0,1.4,1.4],["🦆",3.1,0.55,0.9],["💦",1.2,1.0,0.8],["💦",4.9,1.0,0.8]]]
      ] },
    { id:"sock", stop:2, title:"The Lost Sock",
      cover:[["🧦",3,1.9,2.4,-10],["❓",4.8,1.1,1.0,12]],
      pages:[
        ["The king has a red sock.",[["🤴",2.0,1.9,2.0],["🧦",4.2,2.0,1.6,-10]]],
        ["The king lost his sock!",[["🤴",2.4,1.9,2.1],["❓",4.4,1.2,1.3,10],["❓",5.3,2.2,0.8,-10]]],
        ["Is it in the shop? No!",[["🏪",3,2.0,2.6],["🚫",5.0,1.0,1.0]]],
        ["Is it on the hill? No!",[["⛰️",3,2.1,2.8],["🚫",5.0,1.0,1.0]]],
        ["Is it in the trash? No!",[["🗑️",3,2.1,2.4],["🍌",3.2,0.8,0.7,30],["🚫",5.0,1.0,1.0]]],
        ["That dog has it!",[["🧦",1.4,2.4,1.1,-30],["🐕",2.6,2.0,2.3],["😝",4.8,0.9,0.9],["🤴",5.1,2.4,1.0]]]
      ] },
    { id:"snake", stop:3, title:"The Snake and the Cake",
      cover:[["🐍",1.8,2.1,1.7],["🎂",4.2,2.0,1.8]],
      pages:[
        ["Mom made a cake.",[["👩",1.8,1.8,2.0],["🎂",4.2,2.1,1.8],["✨",5.3,1.0,0.6]]],
        ["She set it on a plate.",[["👩",1.5,1.8,1.9],["🍽️",4.0,2.6,1.9],["🎂",4.0,1.9,1.3]]],
        ["A snake came to see the cake.",[["🍽️",4.2,2.6,1.9],["🎂",4.2,1.9,1.3],["🐍",1.6,2.3,1.6],["👀",1.9,1.1,0.8]]],
        ["The snake ate the cake!",[["🍽️",4.2,2.6,1.9],["🐍",2.6,2.0,2.0],["😋",4.3,1.3,0.9],["✨",5.3,0.8,0.5]]],
        ["The snake has a cake shape!",[["🐍",3,2.0,3.0],["🎂",2.9,2.1,1.2,0,0,0.85],["😳",5.2,0.9,0.8]]]
      ] },
    { id:"kite", stop:3, title:"The Kite",
      cover:[["☁️",1.2,0.9,1.0],["🪁",3.7,1.4,2.0,10]],
      pages:[
        ["I have a kite.",[["🧒",1.8,2.0,2.0],["🪁",4.2,1.6,1.8,10]]],
        ["I ride my bike with my kite.",[["🪁",4.6,0.7,1.1,10],["=",0.6,2.2,0.8,0,1],["🚴",2.2,2.2,1.9,0,1]]],
        ["The kite is up, up, up!",[["☁️",1.2,1.2,1.1],["☁️",5.0,2.4,0.9],["🪁",3.5,0.8,1.2,10],["⬆️",3.5,2.4,0.9]]],
        ["The kite is stuck in a pine.",[["🌲",3,1.9,3.0],["🪁",3.4,1.1,1.0,25],["😟",0.9,2.6,1.0]]],
        ["Dad said, “I can get it.”",[["🌲",4.0,1.9,3.0],["🪁",4.4,1.1,0.9,25],["🧔",1.4,2.0,1.9],["💪",2.6,1.5,0.9]]],
        ["Then Dad is stuck in the pine!",[["🌲",3,1.9,3.0],["🪁",3.6,0.9,0.9,25],["🧔",2.7,1.6,1.1,-15],["😅",5.1,2.5,0.9]]]
      ] },
    { id:"goat", stop:4, title:"The Goat and the Boat",
      cover:[["⛵",2.8,2.0,2.4],["🐐",3.9,2.3,1.3]],
      pages:[
        ["Here is a goat.",[["🌱",0.9,3.0,0.6],["🐐",3,2.0,2.4],["🌱",5.1,3.0,0.6]]],
        ["The goat has a boat.",[["⛵",4.1,2.0,2.2],["🐐",1.7,2.1,1.8,0,1]]],
        ["The goat sails in the rain.",[["🌧️",3,0.7,1.6],["⛵",2.8,2.2,2.2],["🐐",3.8,2.45,1.2],["🌊",1.0,2.9,1.0,0,0,0.7],["🌊",5.0,2.9,1.0,0,0,0.7]]],
        ["A toad hops on the boat.",[["⛵",2.6,2.1,2.4],["🐐",3.6,2.4,1.2],["=",5.3,1.8,0.6,-60],["🐸",4.6,0.9,1.0,15]]],
        ["“What is for lunch?” said the goat.",[["⛵",3.2,2.1,2.4],["🐐",4.2,2.4,1.2],["🐸",2.4,2.75,0.6],["💭",1.2,1.0,1.2],["🍽️",1.2,0.95,0.6]]],
        ["It is the boat!",[["🌊",1.1,3.1,1.2,0,0,0.7],["⛵",1.7,2.2,1.3,-25],["💥",2.2,1.5,0.7],["🐐",3.6,2.0,2.1],["🐸",0.9,2.75,0.8]]]
      ] },
    { id:"sheep", stop:4, title:"The Sheep Can Not Sleep",
      cover:[["🌙",4.5,1.0,1.5],["🐑",2.4,2.2,1.9],["💤",3.6,1.1,0.8]],
      pages:[
        ["The moon is up. It is time to sleep.",[["🌙",4.6,0.9,1.5],["⭐",1.0,0.7,0.5],["⭐",2.6,1.1,0.4],["🛏️",3,2.5,2.0]]],
        ["The sheep can not sleep.",[["🌙",5.1,0.7,1.0],["🛏️",3,2.5,2.4],["🐑",2.7,2.25,1.1],["👀",4.4,1.4,0.7]]],
        ["One sheep. Two sheep. Three sheep...",[["🐑",1.2,2.6,1.1],["🐑",2.9,1.8,1.1,-10],["🐑",4.7,1.0,1.1,-15],["🌙",5.5,2.8,0.6]]],
        ["Good! The sheep is in a deep sleep.",[["🌙",5.1,0.7,1.0],["🛏️",3,2.5,2.4],["🐑",2.7,2.25,1.1],["💤",4.4,1.0,1.0]]],
        ["Here comes the sun.",[["☀️",4.4,1.2,2.2],["🐓",1.4,2.2,1.6]]],
        ["The sheep can not wake up!",[["☀️",5.3,0.7,1.0],["⏰",1.1,1.6,1.1,-15],["🛏️",3,2.5,2.4],["🐑",2.7,2.25,1.1],["💤",4.4,1.1,0.9]]]
      ] }
  ];

  /* After a round of Words, the buddy shares a haiku or a joke about reading or about itself.
     Five of each per buddy; they come in a shuffled order and all ten are used before any repeat. */
  var FUN = {
    minty:{ h:[
        "A frog on a page\nhops from one word to the next\nreading like a pro",
        "Bug on a green log\nI can read the words out loud\nribbit means well done",
        "Lily pads float by\nI read words while frogs sing songs\ndrip, drop, croak, croak, croak",
        "Tadpoles grow to frogs\nsounds grow into words like this\nyou grow too, reader",
        "Hop, hop, hop, three hops\nthree words read, then three words more\nthe frog cheers for you" ],
      j:[
        ["What does a frog say at the library?","Read it, read it, read it!"],
        ["What do frogs do with paper?","Rip-it! Rip-it!"],
        ["What kind of shoes do frogs wear?","Open-toad sandals!"],
        ["What is a frog’s favourite drink?","Croak-a-cola!"],
        ["What did the bus driver say to the frog?","Hop on!"] ] },
    kitty:{ h:[
        "Cat curled on my lap\npurrs at each word that I read\nyou are the top cat",
        "Tap, tap, go her paws\nshe points at words one by one\nthen she takes a nap",
        "A ball of red yarn\nrolls across the page of words\nchase them, read them all",
        "Kitty wants a treat\nyou read, and I get a fish\nfair trade, says the cat",
        "Sunbeam on the floor\ncat and kid curled up with books\nquiet, happy, warm" ],
      j:[
        ["What do cats like to read in the morning?","Mews-papers!"],
        ["What do you call a cat who writes books?","A paw-thor!"],
        ["What do cats eat for breakfast?","Mice Krispies!"],
        ["Why did the cat learn to read?","So it could read the meow-nu!"],
        ["What did the cat say when it lost its toy?","You’ve got to be kitten me!"] ] },
    halloween:{ h:[
        "A ghost in the hall\nreads a book by candlelight\nboo means good job too",
        "Black cat on the fence\nit reads the words on the gate\ntrick or treat, it says",
        "Bats hang in the barn\none bat reads the words out loud\nsqueak, squeak, squeak, hooray",
        "Witch stirs her big pot\nin go letters, out come words\nwhat a tasty spell",
        "Sheet with two big eyes\nit floats in to hear you read\nthen floats off, happy" ],
      j:[
        ["What kind of books do ghosts like best?","Boo-ks!"],
        ["Where do ghosts buy their food?","At the ghost-ery store!"],
        ["What is a ghost’s favourite fruit?","Boo-berries!"],
        ["What do you call a ghost’s mistake?","A boo-boo!"],
        ["Why are ghosts bad at telling fibs?","You can see right through them!"] ] },
    race:{ h:[
        "Engines start to roar\nwords zoom past like little cars\nyou read each one fast",
        "Green flag, off we go\ncat, then dog, then bus, then sun\nfinish line, hooray",
        "Fans wave in the stands\nten more words and one more lap\nfull speed to the end",
        "Chequered flag waves high\nyou read all ten words today\nfirst place, gold trophy",
        "Vroom goes the red car\nit reads signs as it zooms by\nstop, go, slow, turn, yes" ],
      j:[
        ["What do you call a race car that loves books?","A speed reader!"],
        ["What kind of car does a snake drive?","An ana-Honda!"],
        ["What has four wheels and flies?","A garbage truck!"],
        ["Why did the race car need a nap?","It was exhausted!"],
        ["What did the traffic light say to the car?","Don’t look, I’m changing!"] ] },
    wizard:{ h:[
        "Tap the wand three times\nthe letters fly up and dance\nnow they spell a word",
        "Toad in my tall hat\ncroaks each time you read a word\ncroak, croak, you are great",
        "Big book full of spells\nyou can read them all yourself\nyou are magic too",
        "Stars on a blue robe\none star for each word you read\nmy robe is full now",
        "Bubble, bubble, pop\nthe potion turns bright purple\nwhen you read out loud" ],
      j:[
        ["Why are wizards so good at school?","They always win the spelling bee!"],
        ["How does a wizard tell the time?","With a witch-watch!"],
        ["Why did the wizard turn his book into a frog?","He wanted a hoppy ending!"],
        ["What do you call a magician who lost his magic?","Ian! Take “magic” out of “magician” and see."],
        ["What do you call a wizard’s dog?","A Labra-cadabra-dor!"] ] },
    ocean:{ h:[
        "Eight arms, eight good books\nI can read them all at once\ncan you do that too?",
        "Note in a bottle\nfloats up to the sandy beach\ncan you read it? Yes!",
        "Fish swim in a school\nthey read the words on the reef\ntop marks, little fish",
        "Deep down in the sea\na whale sings a reading song\nla, la, la, cat, dog",
        "Crab walks to the side\nreads a word, then reads one more\nsideways, still a win" ],
      j:[
        ["Why are fish so smart?","They live in schools!"],
        ["What did the ocean say to the beach?","Nothing. It just waved!"],
        ["How does an octopus go into battle?","Well armed!"],
        ["What do sea monsters eat for lunch?","Fish and ships!"],
        ["Where do fish sleep?","In a riverbed!"] ] },
    space:{ h:[
        "Small green alien\nlands to hear you read a book\nEarth words are so cool",
        "Three, two, one, blast off\nmy rocket runs on your words\nread more, we go far",
        "Moon and stars and sun\nshort words shining in the sky\nI can read them all",
        "My rocket is slow\neach word you read fills my tank\nzoom, to the next star",
        "Planets in a line\nspin around and spell a word\ns, u, n, sun, yes!" ],
      j:[
        ["What do aliens like to read?","Comet books!"],
        ["Why did the cow go to space?","To see the moooon!"],
        ["How does the moon cut its hair?","E-clipse it!"],
        ["How do aliens hold up their pants?","With an asteroid belt!"],
        ["What is an alien’s favourite treat?","Martian-mallows!"] ] },
    dino:{ h:[
        "Stomp, stomp, stomp, stomp, stomp\nthe ground shakes with each word read\nrawr means good reading",
        "Dino in the mud\nfinds a sign and reads it out\nno swimming, it says",
        "Dino egg goes crack\nout pops a baby who reads\nc, a, t, cat, rawr",
        "Small arms, giant smile\nT. rex can’t hold a big book\nso you read to him",
        "Footprints on the trail\nfollow them from word to word\nthey lead to a nest" ],
      j:[
        ["What do you call a dinosaur that knows lots of words?","A the-saurus!"],
        ["What is a T. rex’s favourite number?","Eight! (It sounds like “ate.”)"],
        ["What do you call a dinosaur that is never late?","A pronto-saurus!"],
        ["Why did the T. rex need a bandage?","It had a dino-sore!"],
        ["What does a triceratops sit on?","Its tricera-bottom!"] ] },
    poop:{ h:[
        "Plop, plop, goes the poop\nit reads a book on the pot\nwhat a smelly page",
        "I sit in the bowl\nand I hear you read out loud\nyou make me feel proud",
        "Toilet paper roll\none sheet for each word you read\noh no, we ran out",
        "Flies buzz all around\nthey love me, and I love words\nwhat a stinky team",
        "Round and round I swirl\ndown I go, but you go up\nup to the next word" ],
      j:[
        ["Want to hear a poop joke?","Never mind. It’s too corny!"],
        ["What do you call a poop that does karate?","Kung poo!"],
        ["What is brown and sounds like a bell?","Dung!"],
        ["Knock, knock. Who’s there? Poo. Poo who?","Don’t cry, it’s only a joke!"],
        ["What did the toilet paper say after a long day?","I’m so wiped out!"] ] },
    fox:{ h:[
        "Orange tail, quick feet\nthe fox reads in the moonlight\nthen curls up to sleep",
        "Sly fox in the woods\ntracks spell words from tree to tree\ncan you read the trail?",
        "Fox finds a red hen\nreads her a book in the barn\nnow they are good pals",
        "Bright eyes, bushy tail\nreads one word, then two, then three\nyou are clever too",
        "Fox nose in the air\nit can smell a good book near\nsniff, sniff, read, read, read" ],
      j:[
        ["Why did the fox read the book twice?","It was fox-cellent!"],
        ["What do you call a fox in a box?","A box fox! Now say it five times fast."],
        ["Why did the fox take a pencil to bed?","To draw the curtains!"],
        ["What did the fox say to the hen?","You’re egg-cellent!"],
        ["What do you call a fox that ate too much?","Fox-tra large!"] ] },
    forest:{ h:[
        "Big bear in the woods\nfinds a book beside the tree\nand reads it out loud",
        "Honey, sweet and gold\neach word you read tastes like that\nyum, yum, read some more",
        "Snow falls, bears go in\na long nap, but first, a book\nthen good night, sleep tight",
        "Owls hoot, pine trees sway\na bear cub reads to the moon\nthe moon smiles back down",
        "Paws in the cold stream\nI catch fish, and you catch words\nwe both did great work" ],
      j:[
        ["What do you call a bear with no ears?","A “b”!"],
        ["Why do bears have fur coats?","For fur protection!"],
        ["Why don’t bears wear shoes?","They like to go bear-foot!"],
        ["Where do bears get their hair cut?","At the bear-ber shop!"],
        ["Why do bears sleep all winter?","They can’t bear the cold!"] ] },
    peacock:{ h:[
        "Peacock on a wall\nreads the posters in the town\nlost cat, cake for sale",
        "Bright bird in the park\nstruts past words like cat and dog\nreads them, then shows off",
        "Feathers, one by one\nopen up like book pages\nturn them, read them all",
        "Morning sun is warm\nthe peacock calls out each word\nthe whole park can hear",
        "Show me what you read\nI will show you my bright tail\nfair trade? Fan-tastic!" ],
      j:[
        ["Why did the peacock win the art show?","It had the most tail-ent!"],
        ["What kind of story does a peacock like best?","A fairy tail!"],
        ["Why did the bird go to the library?","It was looking for bookworms!"],
        ["Why are peacocks bad at hide and seek?","They always show their true colours!"],
        ["Why do birds fly south for the winter?","It’s too far to walk!"] ] },
    ballet:{ h:[
        "Spin, spin, on my toes\nletters twirl and land as words\nbow, then read some more",
        "Pink shoes, ribbons tied\nleap from word to word to word\nland on the last one",
        "Curtain goes up high\nall the crowd can hear you read\nbravo, clap, clap, clap",
        "First position, then\nsecond, third, and read a word\nfourth, fifth, curtsy, done",
        "Swan on a still lake\nglides past words as soft as snow\nyou read them like that" ],
      j:[
        ["Why did the ballerina quit?","It was tu-tu hard!"],
        ["Why did the ballerina go to the bank?","To check her balance!"],
        ["Why do ballerinas love books?","Every good story has a twist!"],
        ["What do you call a sheep that dances?","A baa-lerina!"],
        ["Why did the ballerina take a tutu to the library?","Because tu-tu books are better than one!"] ] }
  };

/*FRIENDS*/
  var FRIENDS = [
    ["[sh]ip","🚢"],["[sh]op","🏪"],["fi[sh]","🐟"],["di[sh]","🍽️"],["[sh]e[ll]","🐚"],["ca[sh]","💵"],["wi[sh]","🌠"],
    ["[tr]a[sh]","🗑️"],["[fl]a[sh]","📸"],["[cr]a[sh]","🚗💥"],
    ["[ch]i[ck]","🐥"],["[ch]at","💬"],["[ch]op","🪓"],["[ch]e[ss]","♟️"],["lun[ch]","🍱"],["ri[ch]","🤑"],["[ch]i[ll]","🥶"],
    ["ba[th]","🛀"],["ma[th]","🔢"],["[sl]o[th]","🦥"],["[th]ink","🤔"],
    ["du[ck]","🦆"],["so[ck]","🧦"],["ro[ck]","🪨"],["lo[ck]","🔒"],["pa[ck]","🎒"],["si[ck]","🤒"],["lu[ck]","🍀"],
    ["[tr]u[ck]","🚚"],["[cl]o[ck]","⏰"],["[sn]a[ck]","🍿"],["[st]i[ck]","🏒"],
    ["ki[ng]","🤴"],["ri[ng]","💍"],["si[ng]","🎤"],["so[ng]","🎵"],["ba[ng]","💥"],["fa[ng]","🧛"],
    ["be[ll]","🔔"],["hi[ll]","⛰️"],["do[ll]","🪆"],["ye[ll]","🗣️"],["pi[ll]","💊"],
    ["ki[ss]","💋"],["hi[ss]","🐍"],["[dr]e[ss]","👗"],["[cr]o[ss]","❌"],
    ["pu[ff]","💨"],["hu[ff]","😤"],["[sn]i[ff]","👃"],["[cl]i[ff]","🧗"],
    ["bu[zz]","🐝"],["fi[zz]","🍾"],["ja[zz]","🎷"],
    ["[tr]am","🚋"],["[tr]ap","🪤"],["[tr]ot","🐎"],["[tr]ip","🧳"],
    ["[st]op","🛑"],["fi[st]","✊"],["ve[st]","🦺"],["li[st]","📋"],["be[st]","🥇"],
    ["[cl]ap","👏"],["[cl]ip","📎"],["[cl]am","🦪"],
    ["[dr]um","🥁"],["[dr]ip","💧"],["[fl]ag","🚩"],["[fl]ip","🤸"],["[cr]ab","🦀"],["[sn]ip","✂️"],
    ["[sl]ed","🛷"],["[sl]ug","🐌"],
    ["[pl]ug","🔌"],["[pl]us","➕"],["[pl]a[nt]","🌱"],
    ["ha[nd]","✋"],["sa[nd]","🏖️"],["wi[nd]","🌬️"],["te[nt]","⛺"],["a[nt]","🐜"]
  ];

/*ENDFRIENDS*/
  /* Friend sentences. Square brackets mark the friend letters; sight words stay plain. */
  var FSENT = [
    ["The du[ck] is in the ba[th].",[["🦆",3.1,1.25,1.3],["🛁",3,2.2,2.6],["💦",4.8,0.9,0.8],["💦",1.3,1.0,0.6]]],
    ["A [cr]ab is on the ro[ck].",[["🪨",3,2.35,2.4],["🦀",3.1,1.3,1.2],["🌊",0.9,2.9,0.9,0,0,0.7],["🌊",5.1,2.9,0.9,0,0,0.7]]],
    ["The [sl]o[th] had a nap.",[["🌿",1.0,2.6,1.0],["🦥",3,1.9,2.2],["💤",4.6,0.8,1.0]]],
    ["Mom got a [cl]o[ck].",[["👩",1.9,1.8,2.0],["⏰",4.1,2.1,1.5],["✨",5.1,1.0,0.6]]],
    ["The ki[ng] has a ri[ng].",[["🤴",2.0,1.8,2.0],["💍",4.1,2.2,1.4],["✨",5.0,1.2,0.7],["✨",3.4,1.0,0.5]]],
    ["The [dr]um we[nt] ba[ng].",[["🥁",2.6,2.2,2.2],["💥",4.4,1.3,1.6],["🎵",5.3,2.6,0.7]]],
    ["A [sl]ug is on my ha[nd].",[["✋",3,1.9,2.8],["🐌",3.3,1.25,0.9]]],
    ["I had a [sn]a[ck].",[["🧒",1.7,2.0,1.8],["🍿",3.9,2.2,1.6],["✨",5.1,1.2,0.6]]],
    ["The [fl]ag is on the hi[ll].",[["☁️",0.9,0.8,0.9],["☁️",5.2,1.2,0.8],["⛰️",3,2.3,2.8],["🚩",3.05,0.75,1.0]]],
    ["A [cl]am is in the sa[nd].",[["🏖️",3,2.0,2.8],["🦪",3.6,2.7,1.0]]],
    ["My do[ll] has a [dr]e[ss].",[["🪆",2.0,2.0,1.9],["👗",4.1,1.9,1.9],["🎀",5.3,0.9,0.6]]],
    ["The [ch]i[ck] can hop.",[["🌱",0.9,3.0,0.6],["🌱",5.1,3.0,0.6],["=",3,2.6,0.8,90],["🐥",3,1.3,1.6]]],
    ["The a[nt] is on the [pl]a[nt].",[["🪴",3,2.0,2.6],["🐜",3.4,1.1,0.8,20]]],
    ["We [cl]ap and si[ng].",[["👏",1.7,2.1,1.6],["🎤",4.1,2.1,1.5,-15],["🎵",3.0,0.8,0.7],["🎶",5.2,0.8,0.7]]],
    ["A fox is in the te[nt].",[["⛺",3,2.1,2.6],["🦊",3.05,2.45,0.9]]],
    ["I got a big [sh]e[ll].",[["🌊",3,3.0,1.6,0,0,0.5],["🧒",1.7,2.0,1.6],["🐚",4.1,2.0,1.9]]],
    ["The fi[sh] is on the di[sh].",[["🍽️",3,2.3,2.6],["🐟",3,1.9,1.3],["🍋",4.3,2.4,0.6]]],
    ["The pup is si[ck].",[["🛏️",3,2.3,2.4],["🐶",2.7,1.85,1.0],["🌡️",3.5,1.6,0.6,-30],["💊",5.0,2.9,0.6]]],
    ["The [cr]ab can [sn]ip.",[["🦀",2.3,2.1,1.9],["✂️",4.3,1.6,1.3,-20],["📄",5.2,2.7,0.7]]],
    ["I wi[sh] I had a pup.",[["🌠",5.0,0.7,1.0],["🧒",1.6,2.2,1.7],["💭",3.5,1.2,1.7],["🐶",3.5,1.15,0.7]]],
    ["The [sl]ed we[nt] fa[st].",[["❄️",1.0,0.7,0.5],["❄️",5.2,0.9,0.6],["=",1.2,2.3,1.0,0,1],["🛷",3.2,2.2,2.0]]],
    ["The dog can [sn]i[ff] the so[ck].",[["🐕",2.1,2.0,2.0],["🧦",4.5,2.3,1.3,15],["💨",4.6,1.1,0.7]]],
    ["We go on a [tr]ip.",[["🗺️",5.2,0.9,0.8],["🚗",3.8,2.2,2.2],["🧳",1.4,2.4,1.4]]],
    ["Ri[ng] the be[ll].",[["🔔",3,1.7,2.3,-15],["🎵",4.9,0.9,0.7],["🎵",1.2,1.0,0.6]]],
    ["The [tr]am can [st]op.",[["🚋",2.6,2.0,2.5],["🛑",5.0,1.6,1.1]]],
    ["Mom has a li[st].",[["👩",1.8,1.8,2.0],["📋",4.1,2.1,1.6],["✏️",5.2,2.7,0.7,-30]]],
    ["The rat is not in the [tr]ap!",[["🪤",2.0,2.6,1.7],["🧀",2.1,1.9,0.6],["🐀",4.4,2.3,1.4]]],
    ["The pop can fi[zz].",[["🥤",3,2.0,2.3],["💦",4.3,0.8,0.7],["💦",1.8,0.9,0.6],["✨",4.6,2.2,0.6]]],
    ["The ja[zz] ba[nd] is fun.",[["🎷",1.8,2.0,1.7,-10],["🥁",4.1,2.3,1.6],["🎵",3.0,0.8,0.7],["🎶",5.3,1.0,0.6]]],
    ["The wi[nd] can [fl]ip my hat.",[["🌬️",1.4,1.6,1.8],["=",3.0,1.5,0.8,0,1],["🎩",4.6,1.3,1.3,35]]],
    ["The ki[ng] can si[ng] a so[ng].",[["🤴",2.0,1.9,2.0],["🎤",3.3,2.5,0.9,-20],["🎵",4.0,1.2,0.9],["🎶",5.1,0.8,0.8]]],
    ["I got the be[st] ve[st].",[["🧒",1.6,2.0,1.7],["🦺",3.9,2.1,1.8],["🥇",5.2,0.9,0.8]]],
    ["We [ch]at on the bus.",[["🚌",3.2,2.1,3.0],["💬",1.4,0.75,1.0],["💬",4.8,0.7,0.8,0,1]]],
    ["Mom got ca[sh] at the [sh]op.",[["🏪",4.1,1.9,2.3],["👩",1.6,2.0,1.8],["💵",2.8,2.6,0.9,-10]]],
    ["The [tr]u[ck] had a [cr]a[sh].",[["🚚",2.5,2.1,2.0],["💥",4.2,1.7,1.6],["🚧",5.3,2.6,0.8]]],
    ["I can hu[ff] and pu[ff].",[["😤",2.0,2.0,1.9],["💨",3.8,2.0,1.4],["💨",5.0,1.6,1.0]]],
    ["Ma[th] is fun.",[["🔢",2.2,1.9,1.7],["➕",4.1,1.1,0.9],["🎉",4.6,2.4,1.3]]],
    ["The [tr]a[sh] is in the bin.",[["🍌",3.0,1.0,0.8,30],["🥫",3.6,1.15,0.6,-20],["🗑️",3.2,2.25,2.2]]],
    ["He can [ch]op the log.",[["🧔",1.3,1.9,1.7],["🪓",2.9,1.4,1.3,-30],["🪵",4.0,2.6,2.0]]],
    ["The box has a lo[ck].",[["📦",3,2.2,2.3],["🔒",3.4,2.0,1.0]]],
    ["I can pa[ck] my bag.",[["🧒",1.5,2.0,1.6],["🎒",3.6,2.1,2.0],["📚",5.2,2.7,0.8]]],
    ["The cat can hi[ss] at the dog.",[["😾",1.8,2.0,1.8],["💢",2.9,0.9,0.7],["🐕",4.5,2.1,1.7]]],
    ["The tap can [dr]ip.",[["🚰",2.6,1.4,1.9],["💧",3.3,2.5,0.6],["💧",3.3,3.05,0.45]]],
    ["The kid got a [st]i[ck].",[["🧒",1.7,1.9,1.7],["🏒",3.8,2.2,1.6],["⚫",4.9,2.9,0.4]]],
    ["I can [fl]ip!",[["✨",1.3,1.0,0.7],["✨",4.8,1.2,0.6],["🤸",3,1.8,2.3]]],
    ["I [th]ink it is hot.",[["☀️",4.4,1.2,2.0],["🤔",2.0,2.2,1.8],["💦",2.9,1.3,0.6]]],
    ["I lo[st] my so[ck].",[["🧒",1.8,2.0,1.8],["❓",3.0,0.8,1.0,10],["🧦",4.3,2.4,1.3,20]]],
    ["Dad can go up the [cl]i[ff].",[["🪨",3.4,2.3,2.8],["🧗",3.0,1.2,1.2]]]
  ];

  return { WORDS: WORDS, SENTENCES: SENTENCES, SIGHT: SIGHT, HEART: HEART, MAGIC: MAGIC, WAND: WAND, MSENT: MSENT, VTEAM: VTEAM, VSENT: VSENT, EXTRA: EXTRA, STORIES: STORIES, FUN: FUN, FRIENDS: FRIENDS, FSENT: FSENT };
})();
