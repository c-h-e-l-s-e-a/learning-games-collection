/* Flags: every country and province, its region, and three facts ("f") shown after each answer.
   Each flag has exactly three facts, and no fact is used for more than one flag.
   n = name, e = flag emoji, img = flag picture (provinces), r = region, p = the flag's own name,
   ll = map position, s = small place (gets a ring on the map). The map shapes are in world-map.js. */
var FLAGDATA = {
  "INFO": {
    "CA": { "n": "Canada", "e": "🇨🇦", "r": "na", "p": "The Maple Leaf", "ll": [680, 192], "s": 0,
      "f": [
      "The red maple leaf has 11 points. The flag was first raised in 1965.",
      "The capital city is Ottawa.",
      "Canada has more lakes than any other country in the world."] },
    "US": { "n": "United States", "e": "🇺🇸", "r": "na", "p": "Stars and Stripes", "ll": [664, 368], "s": 0,
      "f": [
      "The flag has 50 stars, one for each state, and 13 stripes for the first 13 colonies.",
      "The capital city is Washington, D.C.",
      "The bald eagle is the national bird of the United States."] },
    "MX": { "n": "Mexico", "e": "🇲🇽", "r": "na", "p": "", "ll": [624, 488], "s": 0,
      "f": [
      "The eagle eating a snake on a cactus comes from an Aztec legend about where to build their city.",
      "The capital city is Mexico City.",
      "Mexico City stands where the Aztec city of Tenochtitlan was built, on an island in a lake."] },
    "GT": { "n": "Guatemala", "e": "🇬🇹", "r": "na", "p": "", "ll": [718, 548], "s": 0,
      "f": [
      "A green quetzal bird sits in the middle. The quetzal is also the name of Guatemala’s money.",
      "The capital city is Guatemala City.",
      "Tikal, deep in Guatemala’s rainforest, is an ancient Maya city with tall stone pyramids."] },
    "BZ": { "n": "Belize", "e": "🇧🇿", "r": "na", "p": "", "ll": [730, 534], "s": 1,
      "f": [
      "Belize’s flag is one of very few national flags with people on it: two woodcutters on its coat of arms.",
      "The capital city is Belmopan.",
      "Belize’s barrier reef is the second biggest in the world, after Australia’s Great Barrier Reef."] },
    "SV": { "n": "El Salvador", "e": "🇸🇻", "r": "na", "p": "", "ll": [729, 561], "s": 1,
      "f": [
      "The coat of arms shows five volcanoes rising from the sea inside a triangle.",
      "The capital city is San Salvador.",
      "El Salvador is the smallest country in Central America."] },
    "HN": { "n": "Honduras", "e": "🇭🇳", "r": "na", "p": "", "ll": [748, 552], "s": 0,
      "f": [
      "The five blue stars stand for the five countries that once made up the Federal Republic of Central America.",
      "The capital city is Tegucigalpa.",
      "The ruins of Copán, an ancient Maya city, are in Honduras."] },
    "NI": { "n": "Nicaragua", "e": "🇳🇮", "r": "na", "p": "", "ll": [760, 568], "s": 0,
      "f": [
      "The rainbow on the coat of arms makes it one of only two country flags with purple in it. Dominica is the other.",
      "The capital city is Managua.",
      "Lake Nicaragua is the biggest lake in Central America, and sharks have been seen swimming in it."] },
    "CR": { "n": "Costa Rica", "e": "🇨🇷", "r": "na", "p": "", "ll": [768, 592], "s": 0,
      "f": [
      "Costa Rica added the red stripe in 1848, inspired by the colours of the French flag.",
      "The capital city is San José.",
      "Costa Rica has no army. It got rid of it in 1948."] },
    "PA": { "n": "Panama", "e": "🇵🇦", "r": "na", "p": "", "ll": [800, 600], "s": 0,
      "f": [
      "The flag is split into four squares: two plain ones and two with a star, one blue and one red.",
      "The capital city is Panama City.",
      "The Panama Canal lets ships cross between the Atlantic and Pacific oceans without sailing around South America."] },
    "CU": { "n": "Cuba", "e": "🇨🇺", "r": "na", "p": "La Estrella Solitaria", "ll": [800, 500], "s": 0,
      "f": [
      "The three blue stripes stand for the old regions of the island, and the white star for freedom.",
      "The capital city is Havana.",
      "Cuba is the biggest island in the Caribbean."] },
    "JM": { "n": "Jamaica", "e": "🇯🇲", "r": "na", "p": "", "ll": [820, 526], "s": 1,
      "f": [
      "Jamaica has the only national flag with no red, white or blue in it.",
      "The capital city is Kingston.",
      "Usain Bolt, the fastest runner ever timed, comes from Jamaica."] },
    "HT": { "n": "Haiti", "e": "🇭🇹", "r": "na", "p": "", "ll": [861, 520], "s": 1,
      "f": [
      "The story goes that Haiti’s first flag was made in 1803 by tearing the white out of the French flag.",
      "The capital city is Port-au-Prince.",
      "In 1804, Haiti became the first country founded by people who had freed themselves from slavery."] },
    "DO": { "n": "Dominican Republic", "e": "🇩🇴", "r": "na", "p": "", "ll": [875, 520], "s": 0,
      "f": [
      "The coat of arms has an open Bible on it.",
      "The capital city is Santo Domingo.",
      "Santo Domingo is the oldest city in the Americas founded by Europeans. It is over 500 years old."] },
    "BS": { "n": "Bahamas", "e": "🇧🇸", "r": "na", "p": "", "ll": [832, 478], "s": 1,
      "f": [
      "The black triangle stands for the strength of the people, and the aquamarine stripes for the sea.",
      "The capital city is Nassau.",
      "The Bahamas is made up of about 700 islands."] },
    "TT": { "n": "Trinidad and Tobago", "e": "🇹🇹", "r": "na", "p": "", "ll": [952, 584], "s": 1,
      "f": [
      "Red is for the warmth of the sun, white for the sea and black for the strength of the people.",
      "The capital city is Port of Spain.",
      "The steelpan, a drum made from an old oil barrel, was invented in Trinidad and Tobago."] },
    "BB": { "n": "Barbados", "e": "🇧🇧", "r": "na", "p": "", "ll": [964, 567], "s": 1,
      "f": [
      "The trident head is broken, to show that Barbados broke away from Britain.",
      "The capital city is Bridgetown.",
      "In 2021, Barbados became a republic, with its own president instead of the British queen."] },
    "AG": { "n": "Antigua and Barbuda", "e": "🇦🇬", "r": "na", "p": "", "ll": [946, 536], "s": 1,
      "f": [
      "The rising sun marks a new beginning, when the country became independent in 1981.",
      "The capital city is Saint John’s.",
      "Antigua is said to have 365 beaches, one for every day of the year."] },
    "DM": { "n": "Dominica", "e": "🇩🇲", "r": "na", "p": "", "ll": [949, 549], "s": 1,
      "f": [
      "A Sisserou parrot sits in the middle. It is found only on Dominica.",
      "The capital city is Roseau.",
      "Dominica has a Boiling Lake, a pool of water so hot that it bubbles and steams."] },
    "GD": { "n": "Grenada", "e": "🇬🇩", "r": "na", "p": "", "ll": [947, 575], "s": 1,
      "f": [
      "There is a nutmeg on the flag, because Grenada is famous for growing nutmeg.",
      "The capital city is St. George’s.",
      "Grenada has an underwater park, with statues standing on the seabed for divers to visit."] },
    "KN": { "n": "Saint Kitts and Nevis", "e": "🇰🇳", "r": "na", "p": "", "ll": [938, 533], "s": 1,
      "f": [
      "The two white stars stand for hope and liberty.",
      "The capital city is Basseterre.",
      "Saint Kitts and Nevis is the smallest country in the Americas."] },
    "LC": { "n": "Saint Lucia", "e": "🇱🇨", "r": "na", "p": "", "ll": [952, 561], "s": 1,
      "f": [
      "The triangles look like the Pitons, two famous volcanic mountains on the island.",
      "The capital city is Castries.",
      "At Sulphur Springs in Saint Lucia, you can drive right up to bubbling volcanic mud pools."] },
    "VC": { "n": "Saint Vincent and the Grenadines", "e": "🇻🇨", "r": "na", "p": "", "ll": [950, 566], "s": 1,
      "f": [
      "The three green diamonds make a V, for Saint Vincent.",
      "The capital city is Kingstown.",
      "Saint Vincent has a volcano called La Soufrière, which erupted in 2021."] },
    "AR": { "n": "Argentina", "e": "🇦🇷", "r": "sa", "p": "Albiceleste", "ll": [928, 944], "s": 0,
      "f": [
      "The Sun of May in the middle has a face.",
      "The capital city is Buenos Aires.",
      "Aconcagua, in Argentina, is the tallest mountain in the Americas."] },
    "BO": { "n": "Bolivia", "e": "🇧🇴", "r": "sa", "p": "", "ll": [920, 808], "s": 0,
      "f": [
      "Bolivia has a second official flag too: the Wiphala, a checkered flag of its Indigenous peoples.",
      "It has 2 capital cities: Sucre and La Paz.",
      "Salar de Uyuni in Bolivia is the biggest salt flat in the world."] },
    "BR": { "n": "Brazil", "e": "🇧🇷", "r": "sa", "p": "Auriverde", "ll": [1000, 752], "s": 0,
      "f": [
      "The stars show the night sky over Rio de Janeiro on 15 November 1889. The banner says “Order and Progress”.",
      "The capital city is Brasília.",
      "Most of the Amazon, the biggest rainforest in the world, is in Brazil."] },
    "CL": { "n": "Chile", "e": "🇨🇱", "r": "sa", "p": "", "ll": [872, 912], "s": 0,
      "f": [
      "Chile’s flag has a single white star, a bit like the flag of the US state of Texas.",
      "The capital city is Santiago.",
      "Chile is long and thin: it stretches more than 4,000 kilometres from north to south."] },
    "CO": { "n": "Colombia", "e": "🇨🇴", "r": "sa", "p": "", "ll": [864, 640], "s": 0,
      "f": [
      "The yellow stripe takes up the whole top half of the flag.",
      "The capital city is Bogotá.",
      "Colombia has more kinds of birds than any other country."] },
    "EC": { "n": "Ecuador", "e": "🇪🇨", "r": "sa", "p": "", "ll": [820, 688], "s": 0,
      "f": [
      "The coat of arms shows a condor and Mount Chimborazo. Without it, the flag looks just like Colombia’s.",
      "The capital city is Quito.",
      "The Galápagos Islands, home of giant tortoises, belong to Ecuador."] },
    "GY": { "n": "Guyana", "e": "🇬🇾", "r": "sa", "p": "The Golden Arrowhead", "ll": [968, 632], "s": 0,
      "f": [
      "Green is for forests and farmland, and the gold arrowhead for the country’s minerals.",
      "The capital city is Georgetown.",
      "Kaieteur Falls in Guyana drops about four times as far as Niagara Falls."] },
    "PY": { "n": "Paraguay", "e": "🇵🇾", "r": "sa", "p": "", "ll": [976, 856], "s": 0,
      "f": [
      "Paraguay’s flag has a different emblem on each side, the only national flag like that.",
      "The capital city is Asunción.",
      "Most people in Paraguay speak Guaraní, a language spoken there long before Spanish arrived."] },
    "PE": { "n": "Peru", "e": "🇵🇪", "r": "sa", "p": "", "ll": [832, 752], "s": 0,
      "f": [
      "A story says Peru’s red and white came from flamingos that a general saw flying overhead.",
      "The capital city is Lima.",
      "Machu Picchu, an Inca city high in the Andes mountains, is in Peru."] },
    "SR": { "n": "Suriname", "e": "🇸🇷", "r": "sa", "p": "", "ll": [992, 640], "s": 0,
      "f": [
      "The yellow star stands for unity and a golden future.",
      "The capital city is Paramaribo.",
      "Suriname is the smallest country in South America."] },
    "UY": { "n": "Uruguay", "e": "🇺🇾", "r": "sa", "p": "", "ll": [992, 936], "s": 0,
      "f": [
      "Uruguay’s Sun of May has a face, just like the one on Argentina’s flag.",
      "The capital city is Montevideo.",
      "Uruguay hosted and won the very first football World Cup, in 1930."] },
    "VE": { "n": "Venezuela", "e": "🇻🇪", "r": "sa", "p": "", "ll": [912, 608], "s": 0,
      "f": [
      "The eight stars stand for the eight provinces that fought for independence. The eighth was added in 2006.",
      "The capital city is Caracas.",
      "Angel Falls in Venezuela is the tallest waterfall in the world."] },
    "AL": { "n": "Albania", "e": "🇦🇱", "r": "eu", "p": "", "ll": [1600, 344], "s": 1,
      "f": [
      "A black double-headed eagle spreads its wings across a red flag.",
      "The capital city is Tirana.",
      "Albanians call their country Shqipëria, often said to mean “land of the eagles”."] },
    "AD": { "n": "Andorra", "e": "🇦🇩", "r": "eu", "p": "", "ll": [1452, 332], "s": 1,
      "f": [
      "Andorra’s blue, yellow and red flag looks a lot like Moldova’s and Romania’s.",
      "The capital city is Andorra la Vella.",
      "Andorra has two princes: the President of France and a Spanish bishop."] },
    "AT": { "n": "Austria", "e": "🇦🇹", "r": "eu", "p": "", "ll": [1547, 293], "s": 0,
      "f": [
      "Austria’s red-white-red flag is one of the oldest national flags in the world.",
      "The capital city is Vienna.",
      "Mozart, the famous composer, was born in Salzburg, Austria."] },
    "BY": { "n": "Belarus", "e": "🇧🇾", "r": "eu", "p": "", "ll": [1664, 248], "s": 0,
      "f": [
      "A red and white folk embroidery pattern runs down the side of the flag.",
      "The capital city is Minsk.",
      "European bison, the heaviest land animals in Europe, live in Belarus’s ancient Białowieża Forest."] },
    "BE": { "n": "Belgium", "e": "🇧🇪", "r": "eu", "p": "", "ll": [1472, 265], "s": 0,
      "f": [
      "Black, yellow and red come from the coat of arms of the old Duchy of Brabant.",
      "The capital city is Brussels.",
      "Belgium is famous for its chocolate and waffles."] },
    "BA": { "n": "Bosnia and Herzegovina", "e": "🇧🇦", "r": "eu", "p": "", "ll": [1584, 320], "s": 0,
      "f": [
      "The yellow triangle is said to show the shape of the country, and the stars stand for Europe.",
      "The capital city is Sarajevo.",
      "Divers jump from the famous Old Bridge in Mostar into the river far below."] },
    "BG": { "n": "Bulgaria", "e": "🇧🇬", "r": "eu", "p": "", "ll": [1640, 328], "s": 0,
      "f": [
      "White is for peace, green for the land and red for courage.",
      "The capital city is Sofia.",
      "Bulgaria grows fields of roses to make rose oil for perfume."] },
    "HR": { "n": "Croatia", "e": "🇭🇷", "r": "eu", "p": "", "ll": [1564, 311], "s": 0,
      "f": [
      "The red and white checkerboard is called the šahovnica.",
      "The capital city is Zagreb.",
      "The necktie comes from Croatia. The French word for it, cravate, comes from “Croat”."] },
    "CY": { "n": "Cyprus", "e": "🇨🇾", "r": "eu", "p": "", "ll": [1704, 392], "s": 1,
      "f": [
      "The flag shows a copper-coloured map of the island, because Cyprus was famous for copper.",
      "The capital city is Nicosia.",
      "The two olive branches under the map stand for peace."] },
    "CZ": { "n": "Czechia", "e": "🇨🇿", "r": "eu", "p": "", "ll": [1564, 274], "s": 0,
      "f": [
      "Czechia kept the old Czechoslovakia flag when Czechoslovakia split in two in 1993.",
      "The capital city is Prague.",
      "Prague has an astronomical clock more than 600 years old, with little figures that move every hour."] },
    "DK": { "n": "Denmark", "e": "🇩🇰", "r": "eu", "p": "Dannebrog", "ll": [1520, 224], "s": 0,
      "f": [
      "The Dannebrog is said to be the oldest national flag still in use.",
      "The capital city is Copenhagen.",
      "LEGO bricks were invented in Denmark."] },
    "EE": { "n": "Estonia", "e": "🇪🇪", "r": "eu", "p": "", "ll": [1648, 200], "s": 0,
      "f": [
      "Blue is for the sky, black for the soil, and white for snow and hope.",
      "The capital city is Tallinn.",
      "In Estonia, people can vote in elections online."] },
    "FI": { "n": "Finland", "e": "🇫🇮", "r": "eu", "p": "Siniristilippu", "ll": [1648, 160], "s": 0,
      "f": [
      "The blue cross stands for Finland’s many lakes, and the white for its snow.",
      "The capital city is Helsinki.",
      "Finland has about 188,000 lakes. It is called the Land of a Thousand Lakes."] },
    "FR": { "n": "France", "e": "🇫🇷", "r": "eu", "p": "Le Tricolore", "ll": [1456, 304], "s": 0,
      "f": [
      "The French tricolour has inspired many other flags around the world.",
      "The capital city is Paris.",
      "France gets more visitors than any other country in the world."] },
    "DE": { "n": "Germany", "e": "🇩🇪", "r": "eu", "p": "", "ll": [1512, 264], "s": 0,
      "f": [
      "Black, red and gold were the colours of soldiers who fought against Napoleon.",
      "The capital city is Berlin.",
      "Johannes Gutenberg built a famous printing press in Germany almost 600 years ago."] },
    "GR": { "n": "Greece", "e": "🇬🇷", "r": "eu", "p": "Galanolefki", "ll": [1616, 360], "s": 0,
      "f": [
      "The nine stripes are said to match the nine syllables of the Greek motto “Freedom or Death”.",
      "The capital city is Athens.",
      "The Olympic Games started in ancient Greece, nearly 3,000 years ago."] },
    "HU": { "n": "Hungary", "e": "🇭🇺", "r": "eu", "p": "", "ll": [1600, 296], "s": 0,
      "f": [
      "Red is for strength, white for faithfulness and green for hope.",
      "The capital city is Budapest.",
      "The Rubik’s Cube was invented in Hungary by Ernő Rubik."] },
    "IS": { "n": "Iceland", "e": "🇮🇸", "r": "eu", "p": "", "ll": [1296, 152], "s": 0,
      "f": [
      "Red is for Iceland’s volcanoes, white for its ice and blue for the ocean.",
      "The capital city is Reykjavik.",
      "Iceland sits where two of Earth’s giant plates are slowly pulling apart."] },
    "IE": { "n": "Ireland", "e": "🇮🇪", "r": "eu", "p": "", "ll": [1376, 248], "s": 0,
      "f": [
      "Green is for Irish Catholics, orange for Irish Protestants and white for peace between them.",
      "The capital city is Dublin.",
      "The harp is a symbol of Ireland. It is even on Irish coins."] },
    "IT": { "n": "Italy", "e": "🇮🇹", "r": "eu", "p": "Il Tricolore", "ll": [1543, 329], "s": 0,
      "f": [
      "Italy’s tricolour was inspired by the French flag, brought by Napoleon’s army.",
      "The capital city is Rome.",
      "Pizza as we know it was first made in Naples, Italy."] },
    "XK": { "n": "Kosovo", "e": "🇽🇰", "r": "eu", "p": "", "ll": [1609, 331], "s": 1,
      "f": [
      "Kosovo’s flag shows a gold map of the country, with six stars for its main peoples.",
      "The capital city is Pristina.",
      "Kosovo declared independence in 2008, so it is one of Europe’s newest countries."] },
    "LV": { "n": "Latvia", "e": "🇱🇻", "r": "eu", "p": "", "ll": [1640, 216], "s": 0,
      "f": [
      "Latvia’s red and white flag goes back more than 700 years.",
      "The capital city is Riga.",
      "Riga is said to have had the first decorated Christmas tree, in 1510."] },
    "LI": { "n": "Liechtenstein", "e": "🇱🇮", "r": "eu", "p": "", "ll": [1516, 294], "s": 1,
      "f": [
      "Liechtenstein added a gold crown in 1937, after finding out at the Olympics that its flag matched Haiti’s.",
      "The capital city is Vaduz.",
      "Liechtenstein has no coast, and neither do its neighbours. Uzbekistan is the only other country like that."] },
    "LT": { "n": "Lithuania", "e": "🇱🇹", "r": "eu", "p": "", "ll": [1632, 224], "s": 0,
      "f": [
      "Yellow is for the sun, green for the forests and red for courage.",
      "The capital city is Vilnius.",
      "Basketball is the most popular sport in Lithuania."] },
    "LU": { "n": "Luxembourg", "e": "🇱🇺", "r": "eu", "p": "", "ll": [1489, 274], "s": 1,
      "f": [
      "Luxembourg’s flag looks almost like the Dutch flag, but its blue is lighter and the flag is longer.",
      "The capital city is also called Luxembourg.",
      "In 2020, Luxembourg became the first country to make all its buses and trains free."] },
    "MT": { "n": "Malta", "e": "🇲🇹", "r": "eu", "p": "", "ll": [1557, 385], "s": 1,
      "f": [
      "The George Cross in the corner was given to Malta for its bravery in the Second World War.",
      "The capital city is Valletta.",
      "Malta has stone temples that are older than the pyramids of Egypt."] },
    "MD": { "n": "Moldova", "e": "🇲🇩", "r": "eu", "p": "", "ll": [1672, 296], "s": 0,
      "f": [
      "The eagle on Moldova’s coat of arms holds a cross in its beak.",
      "The capital city is Chișinău.",
      "Most people in Moldova speak Romanian."] },
    "MC": { "n": "Monaco", "e": "🇲🇨", "r": "eu", "p": "", "ll": [1499, 322], "s": 1,
      "f": [
      "Monaco’s red and white come from the Grimaldi family, who have ruled it for over 700 years.",
      "The whole country is one city, also called Monaco.",
      "Monaco is the second smallest country in the world, after Vatican City."] },
    "ME": { "n": "Montenegro", "e": "🇲🇪", "r": "eu", "p": "", "ll": [1594, 332], "s": 1,
      "f": [
      "A golden double-headed eagle sits on a red flag with a gold border.",
      "The capital city is Podgorica.",
      "Montenegro means “black mountain”."] },
    "NL": { "n": "Netherlands", "e": "🇳🇱", "r": "eu", "p": "", "ll": [1486, 252], "s": 0,
      "f": [
      "The Dutch flag was once orange, white and blue. Later the orange was changed to red.",
      "The capital city is Amsterdam.",
      "About a quarter of the Netherlands is below sea level, kept dry by walls called dikes and by pumps."] },
    "MK": { "n": "North Macedonia", "e": "🇲🇰", "r": "eu", "p": "", "ll": [1616, 337], "s": 1,
      "f": [
      "North Macedonia’s flag shows a yellow sun with eight rays.",
      "The capital city is Skopje.",
      "Lake Ohrid, which North Macedonia shares with Albania, is one of the oldest lakes in the world."] },
    "NO": { "n": "Norway", "e": "🇳🇴", "r": "eu", "p": "", "ll": [1520, 176], "s": 0,
      "f": [
      "Some say Norway’s flag hides other flags inside it, like the French and Dutch flags.",
      "The capital city is Oslo.",
      "In the far north of Norway, the sun doesn’t set at all for weeks in summer."] },
    "PL": { "n": "Poland", "e": "🇵🇱", "r": "eu", "p": "", "ll": [1600, 256], "s": 0,
      "f": [
      "Poland’s flag is white over red. Turn it upside down and it looks like Indonesia’s or Monaco’s.",
      "The capital city is Warsaw.",
      "Marie Curie, the first woman to win a Nobel Prize, was born in Warsaw."] },
    "PT": { "n": "Portugal", "e": "🇵🇹", "r": "eu", "p": "", "ll": [1376, 356], "s": 0,
      "f": [
      "The flag shows an armillary sphere, a tool sailors used to study the sky.",
      "The capital city is Lisbon.",
      "Portugal makes about half of the world’s cork, which comes from the bark of cork oak trees."] },
    "RO": { "n": "Romania", "e": "🇷🇴", "r": "eu", "p": "", "ll": [1640, 304], "s": 0,
      "f": [
      "Romania’s flag is almost exactly the same as Chad’s. Only the blue is slightly different.",
      "The capital city is Bucharest.",
      "The Danube River meets the Black Sea in Romania, in a huge wetland full of pelicans."] },
    "RU": { "n": "Russia", "e": "🇷🇺", "r": "eu", "p": "", "ll": [2240, 192], "s": 0,
      "f": [
      "Russia’s white, blue and red flag was first flown on ships around the year 1700.",
      "The capital city is Moscow.",
      "Russia is the biggest country in the world. It stretches across 11 time zones."] },
    "SM": { "n": "San Marino", "e": "🇸🇲", "r": "eu", "p": "", "ll": [1539, 322], "s": 1,
      "f": [
      "San Marino is one of the oldest republics in the world. Its flag shows three towers on three peaks.",
      "The capital city is the City of San Marino.",
      "San Marino is completely surrounded by Italy."] },
    "RS": { "n": "Serbia", "e": "🇷🇸", "r": "eu", "p": "", "ll": [1608, 320], "s": 0,
      "f": [
      "Serbia’s coat of arms has a white double-headed eagle with a crown.",
      "The capital city is Belgrade.",
      "Belgrade is where two big rivers, the Danube and the Sava, meet."] },
    "SK": { "n": "Slovakia", "e": "🇸🇰", "r": "eu", "p": "", "ll": [1596, 283], "s": 0,
      "f": [
      "On Slovakia’s coat of arms, a white double cross stands on three blue hills.",
      "The capital city is Bratislava.",
      "Bratislava is the only capital city that touches two other countries: Austria and Hungary."] },
    "SI": { "n": "Slovenia", "e": "🇸🇮", "r": "eu", "p": "", "ll": [1559, 303], "s": 1,
      "f": [
      "Slovenia’s coat of arms shows Mount Triglav, the country’s highest mountain.",
      "The capital city is Ljubljana.",
      "More than half of Slovenia is covered in forest."] },
    "ES": { "n": "Spain", "e": "🇪🇸", "r": "eu", "p": "Rojigualda", "ll": [1408, 352], "s": 0,
      "f": [
      "The coat of arms has two pillars, the Pillars of Hercules.",
      "The capital city is Madrid.",
      "Spain grows more olives than any other country."] },
    "SE": { "n": "Sweden", "e": "🇸🇪", "r": "eu", "p": "", "ll": [1560, 176], "s": 0,
      "f": [
      "Sweden’s blue and gold come from its old coat of arms with three gold crowns.",
      "The capital city is Stockholm.",
      "Sweden has a hotel made of ice and snow that is built again every winter."] },
    "CH": { "n": "Switzerland", "e": "🇨🇭", "r": "eu", "p": "", "ll": [1504, 296], "s": 0,
      "f": [
      "Switzerland’s flag is square. The only other square national flag is Vatican City’s.",
      "The capital city is Bern.",
      "Switzerland has four national languages: German, French, Italian and Romansh."] },
    "UA": { "n": "Ukraine", "e": "🇺🇦", "r": "eu", "p": "", "ll": [1696, 280], "s": 0,
      "f": [
      "Blue and yellow show a blue sky over golden wheat fields.",
      "The capital city is Kyiv.",
      "Ukraine is the biggest country that is completely in Europe."] },
    "GB": { "n": "United Kingdom", "e": "🇬🇧", "r": "eu", "p": "Union Jack", "ll": [1424, 240], "s": 0,
      "f": [
      "The Union Jack mixes the crosses of England, Scotland and Ireland.",
      "The capital city is London.",
      "Wales is part of the United Kingdom, but its red dragon isn’t on the Union Jack."] },
    "VA": { "n": "Vatican City", "e": "🇻🇦", "r": "eu", "p": "", "ll": [1540, 337], "s": 1,
      "f": [
      "The gold and silver keys of Saint Peter cross under the Pope’s crown.",
      "Vatican City is a whole country inside the city of Rome.",
      "Vatican City is the smallest country in the world. The Pope lives there."] },
    "AF": { "n": "Afghanistan", "e": "🇦🇫", "r": "as", "p": "", "ll": [1960, 408], "s": 0,
      "f": [
      "Afghanistan has changed its flag more times than almost any other country in the last 100 years.",
      "The capital city is Kabul.",
      "People have mined a deep blue stone called lapis lazuli in Afghanistan for over 6,000 years."] },
    "AM": { "n": "Armenia", "e": "🇦🇲", "r": "as", "p": "", "ll": [1800, 352], "s": 1,
      "f": [
      "Orange stands for the creativity and hard work of the Armenian people.",
      "The capital city is Yerevan.",
      "Armenia was the first country to make Christianity its official religion, in the year 301."] },
    "AZ": { "n": "Azerbaijan", "e": "🇦🇿", "r": "as", "p": "", "ll": [1820, 348], "s": 0,
      "f": [
      "The eight points of the white star are said to stand for eight Turkic peoples.",
      "The capital city is Baku.",
      "Azerbaijan is called the Land of Fire. Gas leaking from one hillside has kept it burning for decades."] },
    "BH": { "n": "Bahrain", "e": "🇧🇭", "r": "as", "p": "", "ll": [1844, 464], "s": 1,
      "f": [
      "The five white points stand for the Five Pillars of Islam.",
      "The capital city is Manama.",
      "Bahrain is an island country, joined to Saudi Arabia by a long road over the sea."] },
    "BD": { "n": "Bangladesh", "e": "🇧🇩", "r": "as", "p": "", "ll": [2160, 480], "s": 0,
      "f": [
      "The red circle is a little off-centre, so it looks centred when the flag flies in the wind.",
      "The capital city is Dhaka.",
      "Bengal tigers live in the Sundarbans, a huge mangrove forest in Bangladesh."] },
    "BT": { "n": "Bhutan", "e": "🇧🇹", "r": "as", "p": "", "ll": [2164, 452], "s": 0,
      "f": [
      "A white dragon called Druk holds jewels in its claws. Bhutan is called the Land of the Thunder Dragon.",
      "The capital city is Thimphu.",
      "Bhutan measures how happy its people are, with something called Gross National Happiness."] },
    "BN": { "n": "Brunei", "e": "🇧🇳", "r": "as", "p": "", "ll": [2357, 636], "s": 1,
      "f": [
      "The crest in the middle has a parasol, wings and two raised hands.",
      "The capital city is Bandar Seri Begawan.",
      "Brunei’s sultan lives in one of the biggest palaces in the world."] },
    "KH": { "n": "Cambodia", "e": "🇰🇭", "r": "as", "p": "", "ll": [2280, 568], "s": 0,
      "f": [
      "Cambodia’s flag shows Angkor Wat, a huge temple. Very few flags show a building.",
      "The capital city is Phnom Penh.",
      "Cambodia’s Tonlé Sap lake grows several times bigger in the rainy season."] },
    "CN": { "n": "China", "e": "🇨🇳", "r": "as", "p": "Five-star Red Flag", "ll": [2280, 392], "s": 0,
      "f": [
      "The big star stands for the Communist Party, and the four small stars for the people.",
      "The capital city is Beijing.",
      "Giant pandas live in the wild only in China."] },
    "GE": { "n": "Georgia", "e": "🇬🇪", "r": "as", "p": "Five Cross Flag", "ll": [1788, 336], "s": 0,
      "f": [
      "The big red cross is the cross of Saint George.",
      "The capital city is Tbilisi.",
      "Georgian has its own alphabet, with round, curly letters."] },
    "IN": { "n": "India", "e": "🇮🇳", "r": "as", "p": "Tiranga", "ll": [2056, 512], "s": 0,
      "f": [
      "The blue wheel in the middle is the Ashoka Chakra. It has 24 spokes.",
      "The capital city is New Delhi.",
      "The Taj Mahal, a famous white marble building, is in India."] },
    "ID": { "n": "Indonesia", "e": "🇮🇩", "r": "as", "p": "Sang Saka Merah Putih", "ll": [2400, 712], "s": 0,
      "f": [
      "Indonesia’s flag is red over white, like Monaco’s, but longer.",
      "Indonesia is made up of more than 17,000 islands.",
      "Komodo dragons, the biggest lizards in the world, live only in Indonesia."] },
    "IR": { "n": "Iran", "e": "🇮🇷", "r": "as", "p": "", "ll": [1864, 416], "s": 0,
      "f": [
      "The words “God is great” are written 22 times along the edges of the green and red stripes.",
      "The capital city is Tehran.",
      "Persian cats are named after Persia, the old name for Iran."] },
    "IQ": { "n": "Iraq", "e": "🇮🇶", "r": "as", "p": "", "ll": [1792, 408], "s": 0,
      "f": [
      "The green writing on the flag says “God is great”.",
      "The capital city is Baghdad.",
      "Some of the first writing in the world was invented in what is now Iraq, over 5,000 years ago."] },
    "IL": { "n": "Israel", "e": "🇮🇱", "r": "as", "p": "", "ll": [1721, 420], "s": 1,
      "f": [
      "The flag shows the blue Star of David between two blue stripes.",
      "The blue and white are said to come from the tallit, a Jewish prayer shawl.",
      "The Dead Sea, on Israel’s border, is so salty that people float in it easily."] },
    "JP": { "n": "Japan", "e": "🇯🇵", "r": "as", "p": "Hinomaru", "ll": [2544, 384], "s": 0,
      "f": [
      "The red circle is the sun. Japan is called the Land of the Rising Sun.",
      "The capital city is Tokyo.",
      "Mount Fuji, Japan’s tallest mountain, is a volcano."] },
    "JO": { "n": "Jordan", "e": "🇯🇴", "r": "as", "p": "", "ll": [1728, 424], "s": 0,
      "f": [
      "The seven points of the white star stand for the seven verses of the first chapter of the Quran.",
      "The capital city is Amman.",
      "Petra, in Jordan, is an ancient city carved into pink rock cliffs."] },
    "KZ": { "n": "Kazakhstan", "e": "🇰🇿", "r": "as", "p": "", "ll": [1984, 288], "s": 0,
      "f": [
      "A steppe eagle flies under a golden sun with 32 rays.",
      "The capital city is Astana.",
      "Kazakhstan is the biggest country in the world with no coast."] },
    "KW": { "n": "Kuwait", "e": "🇰🇼", "r": "as", "p": "", "ll": [1806, 436], "s": 1,
      "f": [
      "The colours come from a poem: white for deeds, black for battles, green for fields and red for swords.",
      "The capital city is Kuwait City.",
      "Kuwait is one of the hottest places on Earth. Summer days can go above 50°C."] },
    "KG": { "n": "Kyrgyzstan", "e": "🇰🇬", "r": "as", "p": "", "ll": [2040, 344], "s": 0,
      "f": [
      "The sun has 40 rays for 40 tribes. In the middle is the roof of a yurt, a round tent.",
      "The capital city is Bishkek.",
      "Issyk-Kul, a huge lake high in the mountains of Kyrgyzstan, never freezes, even in winter."] },
    "LA": { "n": "Laos", "e": "🇱🇦", "r": "as", "p": "", "ll": [2280, 528], "s": 0,
      "f": [
      "The white circle is the full moon over the Mekong River.",
      "The capital city is Vientiane.",
      "Laos is the only country in Southeast Asia with no coast."] },
    "LB": { "n": "Lebanon", "e": "🇱🇧", "r": "as", "p": "", "ll": [1727, 401], "s": 1,
      "f": [
      "A green cedar tree stands in the middle. Cedars are a symbol of Lebanon.",
      "The capital city is Beirut.",
      "The white stripe stands for peace and for the snow on Lebanon’s mountains."] },
    "MY": { "n": "Malaysia", "e": "🇲🇾", "r": "as", "p": "Jalur Gemilang", "ll": [2340, 652], "s": 0,
      "f": [
      "The 14 stripes and the 14-point star stand for Malaysia’s states and its federal government.",
      "The capital city is Kuala Lumpur.",
      "The Petronas Towers in Kuala Lumpur were once the tallest buildings in the world."] },
    "MV": { "n": "Maldives", "e": "🇲🇻", "r": "as", "p": "", "ll": [2024, 646], "s": 1,
      "f": [
      "The green panel stands for the islands’ palm trees, and the white crescent for Islam.",
      "The capital city is Malé.",
      "The Maldives is made of about 1,200 small islands."] },
    "MN": { "n": "Mongolia", "e": "🇲🇳", "r": "as", "p": "", "ll": [2280, 304], "s": 0,
      "f": [
      "The symbol on the left is the Soyombo, made of fire, the sun, the moon and other shapes.",
      "The capital city is Ulaanbaatar.",
      "Many people in Mongolia live in gers, round tents that can be packed up and moved."] },
    "MM": { "n": "Myanmar", "e": "🇲🇲", "r": "as", "p": "", "ll": [2224, 496], "s": 0,
      "f": [
      "A big white star sits on yellow, green and red stripes.",
      "The capital city is Naypyidaw.",
      "Bagan, in Myanmar, has more than 2,000 old Buddhist temples spread across a plain."] },
    "NP": { "n": "Nepal", "e": "🇳🇵", "r": "as", "p": "", "ll": [2112, 448], "s": 0,
      "f": [
      "Nepal’s is the only national flag that isn’t a rectangle. It is two triangles stacked up.",
      "The capital city is Kathmandu.",
      "Mount Everest, the tallest mountain in the world, is on Nepal’s border with China."] },
    "KP": { "n": "North Korea", "e": "🇰🇵", "r": "as", "p": "", "ll": [2456, 352], "s": 0,
      "f": [
      "A red star sits in a white circle on the red stripe.",
      "The capital city is Pyongyang.",
      "Korea was divided into North Korea and South Korea after 1945."] },
    "OM": { "n": "Oman", "e": "🇴🇲", "r": "as", "p": "", "ll": [1896, 504], "s": 0,
      "f": [
      "The emblem shows two crossed swords and a curved dagger called a khanjar.",
      "The capital city is Muscat.",
      "Frankincense, a sweet-smelling tree sap, has been traded from Oman for thousands of years."] },
    "PK": { "n": "Pakistan", "e": "🇵🇰", "r": "as", "p": "", "ll": [2000, 432], "s": 0,
      "f": [
      "The white stripe stands for religious minorities, and the green for the Muslim majority.",
      "The capital city is Islamabad.",
      "K2, the second tallest mountain in the world, is on Pakistan’s border with China."] },
    "PH": { "n": "Philippines", "e": "🇵🇭", "r": "as", "p": "", "ll": [2416, 568], "s": 0,
      "f": [
      "The Philippines flies its flag upside down, red on top, in times of war.",
      "The capital city is Manila.",
      "The sun’s eight rays stand for the first eight provinces that fought for independence."] },
    "QA": { "n": "Qatar", "e": "🇶🇦", "r": "as", "p": "", "ll": [1850, 468], "s": 1,
      "f": [
      "Qatar’s maroon flag is the widest national flag, with a zigzag edge of nine points.",
      "The capital city is Doha.",
      "Qatar hosted the football World Cup in 2022."] },
    "SA": { "n": "Saudi Arabia", "e": "🇸🇦", "r": "as", "p": "", "ll": [1800, 472], "s": 0,
      "f": [
      "The writing on the flag is a statement of faith, so the flag is never flown at half-mast.",
      "The capital city is Riyadh.",
      "Saudi Arabia has no rivers that flow all year round."] },
    "SG": { "n": "Singapore", "e": "🇸🇬", "r": "as", "p": "", "ll": [2270, 661], "s": 1,
      "f": [
      "The five stars stand for democracy, peace, progress, justice and equality.",
      "Singapore is a city and a country at the same time.",
      "The name Singapore means “Lion City”."] },
    "KR": { "n": "South Korea", "e": "🇰🇷", "r": "as", "p": "Taegukgi", "ll": [2460, 376], "s": 0,
      "f": [
      "The red and blue circle is yin and yang, with four black trigrams around it.",
      "The capital city is Seoul.",
      "Korean letters, called Hangul, were invented by a king almost 600 years ago."] },
    "LK": { "n": "Sri Lanka", "e": "🇱🇰", "r": "as", "p": "Lion Flag", "ll": [2088, 616], "s": 0,
      "f": [
      "A golden lion holds a sword. Its nickname is the Lion Flag.",
      "The capital city is Sri Jayawardenepura Kotte.",
      "Sri Lanka is one of the world’s biggest tea growers."] },
    "SY": { "n": "Syria", "e": "🇸🇾", "r": "as", "p": "", "ll": [1744, 392], "s": 0,
      "f": [
      "Syria now uses a green, white and black flag with three red stars. It first used this flag in the 1930s.",
      "Damascus, Syria’s capital, is one of the oldest cities in the world where people still live.",
      "Damask, a cloth with woven patterns, is named after Damascus."] },
    "TJ": { "n": "Tajikistan", "e": "🇹🇯", "r": "as", "p": "", "ll": [2008, 360], "s": 0,
      "f": [
      "A gold crown with seven stars above it sits on the white stripe.",
      "The capital city is Dushanbe.",
      "More than nine tenths of Tajikistan is covered by mountains."] },
    "TH": { "n": "Thailand", "e": "🇹🇭", "r": "as", "p": "", "ll": [2240, 552], "s": 0,
      "f": [
      "Red is for the nation, white for religion and blue for the king.",
      "The capital city is Bangkok.",
      "Thailand is the only country in Southeast Asia that was never ruled by a European country."] },
    "TL": { "n": "Timor-Leste", "e": "🇹🇱", "r": "as", "p": "", "ll": [2447, 743], "s": 1,
      "f": [
      "The white star is a guiding light of peace.",
      "The capital city is Dili.",
      "Timor-Leste became independent in 2002, making it one of the world’s newest countries."] },
    "TR": { "n": "Türkiye", "e": "🇹🇷", "r": "as", "p": "Ay Yıldız", "ll": [1720, 360], "s": 0,
      "f": [
      "The flag is called Ay Yıldız, which means “moon star”.",
      "Türkiye is the country’s own name. In English it used to be called Turkey.",
      "Istanbul, Türkiye’s biggest city, is in two continents: Europe and Asia."] },
    "TM": { "n": "Turkmenistan", "e": "🇹🇲", "r": "as", "p": "", "ll": [1920, 352], "s": 0,
      "f": [
      "Five carpet patterns run down the side, because Turkmen carpets are famous.",
      "The capital city is Ashgabat.",
      "Ashgabat holds a world record for having the most white marble buildings."] },
    "AE": { "n": "United Arab Emirates", "e": "🇦🇪", "r": "as", "p": "", "ll": [1872, 480], "s": 0,
      "f": [
      "The flag uses the four Pan-Arab colours: red, green, white and black.",
      "The capital city is Abu Dhabi.",
      "The Burj Khalifa in Dubai is the tallest building in the world."] },
    "UZ": { "n": "Uzbekistan", "e": "🇺🇿", "r": "as", "p": "", "ll": [1952, 344], "s": 0,
      "f": [
      "The 12 stars are said to stand for the 12 months of the year.",
      "The capital city is Tashkent.",
      "Samarkand, in Uzbekistan, was a great city on the Silk Road, an old trade route between China and Europe."] },
    "VN": { "n": "Vietnam", "e": "🇻🇳", "r": "as", "p": "", "ll": [2303, 543], "s": 0,
      "f": [
      "The five points of the yellow star stand for the groups of people who build the country.",
      "The capital city is Hanoi.",
      "Ha Long Bay in Vietnam has about 1,600 limestone islands rising out of the sea."] },
    "YE": { "n": "Yemen", "e": "🇾🇪", "r": "as", "p": "", "ll": [1824, 552], "s": 0,
      "f": [
      "Yemen’s red, white and black stripes are like Egypt’s flag without the eagle.",
      "The capital city is Sana’a.",
      "Socotra, an island that belongs to Yemen, has dragon’s blood trees shaped like umbrellas."] },
    "DZ": { "n": "Algeria", "e": "🇩🇿", "r": "af", "p": "", "ll": [1464, 448], "s": 0,
      "f": [
      "A red crescent and star sit where the green and white halves meet.",
      "The capital city is Algiers.",
      "Algeria is the biggest country in Africa. Most of it is in the Sahara Desert."] },
    "AO": { "n": "Angola", "e": "🇦🇴", "r": "af", "p": "", "ll": [1588, 772], "s": 0,
      "f": [
      "The emblem is half a cog wheel and a machete, for factory workers and farmers.",
      "The capital city is Luanda.",
      "The giant sable antelope, with long curved horns, is found only in Angola."] },
    "BJ": { "n": "Benin", "e": "🇧🇯", "r": "af", "p": "", "ll": [1458, 596], "s": 0,
      "f": [
      "Green is for hope, yellow for wealth and red for courage.",
      "The capital city is Porto-Novo.",
      "Ganvié, in Benin, is a whole town built on stilts in a lake."] },
    "BW": { "n": "Botswana", "e": "🇧🇼", "r": "af", "p": "", "ll": [1632, 848], "s": 0,
      "f": [
      "The black stripe with white edges stands for people of all colours living together, like a zebra.",
      "The capital city is Gaborone.",
      "Botswana’s Okavango River spreads out into the desert instead of flowing to the sea."] },
    "BF": { "n": "Burkina Faso", "e": "🇧🇫", "r": "af", "p": "", "ll": [1424, 568], "s": 0,
      "f": [
      "The yellow star in the middle stands for a guiding light.",
      "The capital city is Ouagadougou.",
      "Burkina Faso means “land of honest people”."] },
    "BI": { "n": "Burundi", "e": "🇧🇮", "r": "af", "p": "", "ll": [1680, 700], "s": 1,
      "f": [
      "The three red stars stand for the motto Unity, Work, Progress.",
      "The capital city is Gitega.",
      "Lake Tanganyika, on Burundi’s border, is the second deepest lake in the world."] },
    "CV": { "n": "Cape Verde", "e": "🇨🇻", "r": "af", "p": "", "ll": [1248, 544], "s": 1,
      "f": [
      "The ten stars stand for Cape Verde’s ten main islands.",
      "The capital city is Praia.",
      "The island of Fogo has an active volcano. Fogo means “fire” in Portuguese."] },
    "CM": { "n": "Cameroon", "e": "🇨🇲", "r": "af", "p": "", "ll": [1536, 624], "s": 0,
      "f": [
      "Cameroon’s yellow star is called the star of unity.",
      "The capital city is Yaoundé.",
      "Cameroon is called “Africa in miniature” because it has deserts, mountains, rainforest and beaches."] },
    "CF": { "n": "Central African Republic", "e": "🇨🇫", "r": "af", "p": "", "ll": [1608, 616], "s": 0,
      "f": [
      "A red stripe runs down the middle, crossing all four coloured stripes.",
      "The capital city is Bangui.",
      "The country’s name tells you where it is: near the centre of Africa."] },
    "TD": { "n": "Chad", "e": "🇹🇩", "r": "af", "p": "", "ll": [1592, 552], "s": 0,
      "f": [
      "Chad’s flag is almost exactly the same as Romania’s.",
      "The capital city is N’Djamena.",
      "Lake Chad is much smaller than it was 60 years ago."] },
    "KM": { "n": "Comoros", "e": "🇰🇲", "r": "af", "p": "", "ll": [1794, 769], "s": 1,
      "f": [
      "The four stars and four stripes stand for the four main islands of the Comoros.",
      "The capital city is Moroni.",
      "The coelacanth, a fish once thought to have died out with the dinosaurs, lives in the sea near the Comoros."] },
    "CD": { "n": "DR Congo", "e": "🇨🇩", "r": "af", "p": "", "ll": [1640, 672], "s": 0,
      "f": [
      "A yellow star sits in the corner of a sky blue flag with a red diagonal stripe.",
      "The capital city is Kinshasa.",
      "Bonobos, close cousins of chimpanzees, live in the wild only in the DR Congo."] },
    "CG": { "n": "Republic of the Congo", "e": "🇨🇬", "r": "af", "p": "", "ll": [1560, 680], "s": 0,
      "f": [
      "A yellow diagonal band runs between a green triangle and a red triangle.",
      "The capital city is Brazzaville.",
      "Brazzaville and Kinshasa face each other across the Congo River. They are two of the closest capital cities in the world."] },
    "CI": { "n": "Ivory Coast", "e": "🇨🇮", "r": "af", "p": "", "ll": [1400, 608], "s": 0,
      "f": [
      "Ivory Coast’s orange, white and green flag is the mirror image of Ireland’s.",
      "The capital city is Yamoussoukro.",
      "Ivory Coast grows more cocoa, the bean chocolate is made from, than any other country."] },
    "DJ": { "n": "Djibouti", "e": "🇩🇯", "r": "af", "p": "", "ll": [1784, 580], "s": 1,
      "f": [
      "The red star stands for unity.",
      "The capital city is also called Djibouti.",
      "Lake Assal in Djibouti is the lowest place in Africa and one of the saltiest lakes on Earth."] },
    "EG": { "n": "Egypt", "e": "🇪🇬", "r": "af", "p": "", "ll": [1680, 456], "s": 0,
      "f": [
      "The golden bird in the middle is the Eagle of Saladin.",
      "The capital city is Cairo.",
      "The Great Pyramid of Giza is more than 4,500 years old."] },
    "GQ": { "n": "Equatorial Guinea", "e": "🇬🇶", "r": "af", "p": "", "ll": [1520, 656], "s": 1,
      "f": [
      "The coat of arms shows a silk cotton tree with six stars above it.",
      "Equatorial Guinea is the only country in Africa where Spanish is an official language.",
      "Part of the country is on the African mainland, and part is on islands in the ocean."] },
    "ER": { "n": "Eritrea", "e": "🇪🇷", "r": "af", "p": "", "ll": [1752, 552], "s": 0,
      "f": [
      "A golden olive branch sits inside a wreath on the red triangle.",
      "The capital city is Asmara.",
      "Eritrea has a long coast on the Red Sea."] },
    "SZ": { "n": "Eswatini", "e": "🇸🇿", "r": "af", "p": "", "ll": [1692, 884], "s": 1,
      "f": [
      "A warrior’s shield and two spears lie across the middle of the flag.",
      "It has 2 capital cities: Mbabane and Lobamba.",
      "Eswatini is ruled by a king."] },
    "ET": { "n": "Ethiopia", "e": "🇪🇹", "r": "af", "p": "", "ll": [1744, 608], "s": 0,
      "f": [
      "Ethiopia’s green, yellow and red inspired the flags of many other African countries.",
      "The capital city is Addis Ababa.",
      "Coffee is said to have been discovered in Ethiopia."] },
    "GA": { "n": "Gabon", "e": "🇬🇦", "r": "af", "p": "", "ll": [1534, 680], "s": 0,
      "f": [
      "Green is for the forests, yellow for the equator and blue for the sea.",
      "The capital city is Libreville.",
      "Most of Gabon is rainforest, home to forest elephants and gorillas."] },
    "GM": { "n": "Gambia", "e": "🇬🇲", "r": "af", "p": "", "ll": [1307, 564], "s": 1,
      "f": [
      "The blue stripe stands for the Gambia River, which runs through the middle of the country.",
      "The capital city is Banjul.",
      "The Gambia is the smallest country on the African mainland."] },
    "GH": { "n": "Ghana", "e": "🇬🇭", "r": "af", "p": "", "ll": [1424, 608], "s": 0,
      "f": [
      "The black star is called the Black Star of Africa. Ghana’s football team is called the Black Stars.",
      "The capital city is Accra.",
      "Lake Volta in Ghana is one of the biggest lakes ever made by people."] },
    "GN": { "n": "Guinea", "e": "🇬🇳", "r": "af", "p": "", "ll": [1360, 584], "s": 0,
      "f": [
      "Guinea’s red, yellow and green stripes are in the opposite order to Mali’s.",
      "The capital city is Conakry.",
      "Three big rivers, the Niger, the Senegal and the Gambia, all start in Guinea’s highlands."] },
    "GW": { "n": "Guinea-Bissau", "e": "🇬🇼", "r": "af", "p": "", "ll": [1320, 576], "s": 0,
      "f": [
      "A black star sits on a red stripe down the side.",
      "The capital city is Bissau.",
      "Sea turtles come to lay their eggs on Guinea-Bissau’s Bijagós Islands."] },
    "KE": { "n": "Kenya", "e": "🇰🇪", "r": "af", "p": "", "ll": [1744, 664], "s": 0,
      "f": [
      "A Maasai shield and two spears sit in the middle of the flag.",
      "The capital city is Nairobi.",
      "Every year, more than a million wildebeest cross into Kenya’s Maasai Mara in the Great Migration."] },
    "LS": { "n": "Lesotho", "e": "🇱🇸", "r": "af", "p": "", "ll": [1668, 908], "s": 0,
      "f": [
      "A black Basotho hat sits in the middle of the flag.",
      "The capital city is Maseru.",
      "Lesotho is the only country where all the land is more than 1,000 metres above sea level."] },
    "LR": { "n": "Liberia", "e": "🇱🇷", "r": "af", "p": "", "ll": [1364, 620], "s": 0,
      "f": [
      "Liberia’s flag looks like the US flag with just one star. Liberia was founded by people freed from slavery in the US.",
      "The capital city is Monrovia.",
      "Monrovia is named after James Monroe, a president of the United States."] },
    "LY": { "n": "Libya", "e": "🇱🇾", "r": "af", "p": "", "ll": [1576, 472], "s": 0,
      "f": [
      "A white crescent and star sit on the black stripe.",
      "The capital city is Tripoli.",
      "Almost all of Libya is covered by the Sahara Desert."] },
    "MG": { "n": "Madagascar", "e": "🇲🇬", "r": "af", "p": "", "ll": [1816, 832], "s": 0,
      "f": [
      "White is for purity, red for freedom and green for hope.",
      "The capital city is Antananarivo.",
      "Madagascar is home to lemurs, which live nowhere else in the world."] },
    "MW": { "n": "Malawi", "e": "🇲🇼", "r": "af", "p": "", "ll": [1712, 780], "s": 0,
      "f": [
      "A red sun rises on the black stripe at the top.",
      "The capital city is Lilongwe.",
      "Lake Malawi has more kinds of fish than any other lake in the world."] },
    "ML": { "n": "Mali", "e": "🇲🇱", "r": "af", "p": "", "ll": [1408, 536], "s": 0,
      "f": [
      "Mali’s flag looks like Senegal’s, but without the green star.",
      "The capital city is Bamako.",
      "Timbuktu, in Mali, was once a famous city of learning, full of old handwritten books."] },
    "MR": { "n": "Mauritania", "e": "🇲🇷", "r": "af", "p": "", "ll": [1344, 512], "s": 0,
      "f": [
      "Mauritania added two red stripes to its flag in 2017.",
      "The capital city is Nouakchott.",
      "One of the longest trains in the world carries iron ore across Mauritania’s desert."] },
    "MU": { "n": "Mauritius", "e": "🇲🇺", "r": "af", "p": "", "ll": [1900, 834], "s": 1,
      "f": [
      "Mauritius has four stripes: red, blue, yellow and green.",
      "The capital city is Port Louis.",
      "The dodo, a bird that couldn’t fly, lived only on Mauritius before it died out."] },
    "MA": { "n": "Morocco", "e": "🇲🇦", "r": "af", "p": "", "ll": [1400, 416], "s": 0,
      "f": [
      "The green star is called the Seal of Solomon.",
      "The capital city is Rabat.",
      "The old city of Fez has more than 9,000 narrow streets where cars can’t go."] },
    "MZ": { "n": "Mozambique", "e": "🇲🇿", "r": "af", "p": "", "ll": [1720, 818], "s": 0,
      "f": [
      "Mozambique’s flag shows a book, a hoe and a rifle.",
      "The capital city is Maputo.",
      "Dugongs, gentle sea animals also called sea cows, swim off Mozambique’s coast."] },
    "NA": { "n": "Namibia", "e": "🇳🇦", "r": "af", "p": "", "ll": [1576, 848], "s": 0,
      "f": [
      "The golden sun in the corner has 12 rays.",
      "The capital city is Windhoek.",
      "The Namib Desert has some of the tallest sand dunes in the world."] },
    "NE": { "n": "Niger", "e": "🇳🇪", "r": "af", "p": "", "ll": [1504, 544], "s": 0,
      "f": [
      "The orange circle stands for the sun. Niger’s flag is almost square.",
      "The capital city is Niamey.",
      "Many dinosaur fossils have been found in the Sahara Desert in Niger."] },
    "NG": { "n": "Nigeria", "e": "🇳🇬", "r": "af", "p": "", "ll": [1504, 592], "s": 0,
      "f": [
      "Nigeria’s green and white flag was designed by a student, Michael Taiwo Akinkunmi.",
      "The capital city is Abuja.",
      "Nigeria has more people than any other country in Africa."] },
    "RW": { "n": "Rwanda", "e": "🇷🇼", "r": "af", "p": "", "ll": [1680, 688], "s": 1,
      "f": [
      "The sun in the corner has 24 rays.",
      "The capital city is Kigali.",
      "Mountain gorillas live in the misty forests on Rwanda’s volcanoes."] },
    "ST": { "n": "São Tomé and Príncipe", "e": "🇸🇹", "r": "af", "p": "", "ll": [1496, 664], "s": 1,
      "f": [
      "The two black stars stand for the two main islands, São Tomé and Príncipe.",
      "The capital city is São Tomé.",
      "São Tomé and Príncipe is the second smallest country in Africa."] },
    "SN": { "n": "Senegal", "e": "🇸🇳", "r": "af", "p": "", "ll": [1328, 560], "s": 0,
      "f": [
      "A green star sits in the middle of the yellow stripe.",
      "The capital city is Dakar.",
      "Lake Retba near Dakar is pink, because of tiny living things in its salty water."] },
    "SC": { "n": "Seychelles", "e": "🇸🇨", "r": "af", "p": "", "ll": [1885, 709], "s": 1,
      "f": [
      "Five slanted stripes fan out from the bottom corner.",
      "The capital city is Victoria.",
      "The coco de mer palm, which grows on the Seychelles, has the biggest seed in the world."] },
    "SL": { "n": "Sierra Leone", "e": "🇸🇱", "r": "af", "p": "", "ll": [1348, 604], "s": 0,
      "f": [
      "Green is for farmland, white for justice and blue for the sea.",
      "The capital city is Freetown.",
      "Freetown got its name because it was started as a home for people freed from slavery."] },
    "SO": { "n": "Somalia", "e": "🇸🇴", "r": "af", "p": "", "ll": [1832, 592], "s": 0,
      "f": [
      "The five points of the white star stand for five areas where Somali people live.",
      "The capital city is Mogadishu.",
      "Somalia has the longest coastline of any country on the African mainland."] },
    "ZA": { "n": "South Africa", "e": "🇿🇦", "r": "af", "p": "", "ll": [1632, 904], "s": 0,
      "f": [
      "South Africa’s flag has six colours, more than most other national flags.",
      "It has 3 capital cities: Pretoria, Bloemfontein and Cape Town.",
      "South Africa has 12 official languages."] },
    "SS": { "n": "South Sudan", "e": "🇸🇸", "r": "af", "p": "", "ll": [1680, 616], "s": 0,
      "f": [
      "The blue triangle stands for the waters of the Nile, and the gold star for unity.",
      "The capital city is Juba.",
      "South Sudan became independent in 2011, making it the world’s newest country."] },
    "SD": { "n": "Sudan", "e": "🇸🇩", "r": "af", "p": "", "ll": [1680, 552], "s": 0,
      "f": [
      "Sudan’s flag uses the Pan-Arab colours with a green triangle.",
      "The capital city is Khartoum.",
      "Sudan has more pyramids than Egypt."] },
    "TZ": { "n": "Tanzania", "e": "🇹🇿", "r": "af", "p": "", "ll": [1720, 720], "s": 0,
      "f": [
      "The black diagonal stripe stands for the people of Tanzania.",
      "The capital city is Dodoma.",
      "Mount Kilimanjaro, the tallest mountain in Africa, is in Tanzania."] },
    "TG": { "n": "Togo", "e": "🇹🇬", "r": "af", "p": "", "ll": [1449, 608], "s": 0,
      "f": [
      "The five stripes stand for Togo’s five regions.",
      "The capital city is Lomé.",
      "Togo is long and narrow, much longer from north to south than it is wide."] },
    "TN": { "n": "Tunisia", "e": "🇹🇳", "r": "af", "p": "", "ll": [1512, 400], "s": 0,
      "f": [
      "A red crescent and star sit inside a white circle.",
      "The capital city is Tunis.",
      "The ruins of Carthage, a great ancient city, are near Tunis."] },
    "UG": { "n": "Uganda", "e": "🇺🇬", "r": "af", "p": "", "ll": [1696, 664], "s": 0,
      "f": [
      "A grey crowned crane stands in the middle of the flag.",
      "The capital city is Kampala.",
      "The Nile, the longest river in Africa, flows out of Lake Victoria in Uganda."] },
    "ZM": { "n": "Zambia", "e": "🇿🇲", "r": "af", "p": "", "ll": [1680, 792], "s": 0,
      "f": [
      "An orange eagle flies above the coloured stripes.",
      "The capital city is Lusaka.",
      "Victoria Falls, on Zambia’s border with Zimbabwe, is one of the biggest waterfalls in the world."] },
    "ZW": { "n": "Zimbabwe", "e": "🇿🇼", "r": "af", "p": "", "ll": [1680, 832], "s": 0,
      "f": [
      "The Zimbabwe Bird is a stone carving found at the ruins of Great Zimbabwe.",
      "The capital city is Harare.",
      "The name Zimbabwe means “houses of stone”."] },
    "CA-AB": { "n": "Alberta", "img": "images/flags/ca-ab.webp", "w": 400, "h": 200, "r": "ca", "prov": "AB", "p": "",
      "f": [
      "The shield shows the Rocky Mountains, foothills, prairie and wheat.",
      "The capital is Edmonton.",
      "Banff, in Alberta, is Canada’s oldest national park."] },
    "CA-BC": { "n": "British Columbia", "img": "images/flags/ca-bc.webp", "w": 334, "h": 200, "r": "ca", "prov": "BC", "p": "",
      "f": [
      "The sun setting over the sea shows that BC is Canada’s most westerly province.",
      "The capital is Victoria.",
      "British Columbia is the only Canadian province on the Pacific Ocean."] },
    "CA-MB": { "n": "Manitoba", "img": "images/flags/ca-mb.webp", "w": 400, "h": 200, "r": "ca", "prov": "MB", "p": "",
      "f": [
      "A bison stands on a rock on Manitoba’s shield.",
      "The capital is Winnipeg.",
      "Churchill, Manitoba, is known as the polar bear capital of the world."] },
    "CA-NB": { "n": "New Brunswick", "img": "images/flags/ca-nb.webp", "w": 320, "h": 200, "r": "ca", "prov": "NB", "p": "",
      "f": [
      "The ship stands for New Brunswick’s history of shipbuilding.",
      "The capital is Fredericton.",
      "New Brunswick is Canada’s only officially bilingual province, in English and French."] },
    "CA-NL": { "n": "Newfoundland and Labrador", "img": "images/flags/ca-nl.webp", "w": 400, "h": 200, "r": "ca", "prov": "NL", "p": "",
      "f": [
      "The golden arrow points to a bright future. Artist Christopher Pratt designed the flag.",
      "The capital is St. John’s.",
      "Newfoundland and Labrador joined Canada in 1949, the last province to join."] },
    "CA-NS": { "n": "Nova Scotia", "img": "images/flags/ca-ns.webp", "w": 400, "h": 200, "r": "ca", "prov": "NS", "p": "",
      "f": [
      "Nova Scotia means “New Scotland”. Its flag is Scotland’s with the colours swapped.",
      "The capital is Halifax.",
      "The Bay of Fundy, on Nova Scotia’s coast, has the highest tides in the world."] },
    "CA-NT": { "n": "Northwest Territories", "img": "images/flags/ca-nt.webp", "w": 400, "h": 200, "r": "ca", "prov": "NT", "p": "",
      "f": [
      "The fox on the shield stands for the fur trade, and the gold bars for minerals.",
      "The capital is Yellowknife.",
      "The Northwest Territories has 11 official languages, more than anywhere else in Canada."] },
    "CA-NU": { "n": "Nunavut", "img": "images/flags/ca-nu.webp", "w": 356, "h": 200, "r": "ca", "prov": "NU", "p": "",
      "f": [
      "The red inuksuk is a stone figure Inuit build to guide travellers. The blue star is the North Star.",
      "The capital is Iqaluit.",
      "Nunavut means “our land” in Inuktitut. It became a territory in 1999, the newest part of Canada."] },
    "CA-ON": { "n": "Ontario", "img": "images/flags/ca-on.webp", "w": 400, "h": 200, "r": "ca", "prov": "ON", "p": "",
      "f": [
      "Ontario’s shield has three gold maple leaves.",
      "The capital is Toronto.",
      "More people live in Ontario than in any other province."] },
    "CA-PE": { "n": "Prince Edward Island", "img": "images/flags/ca-pe.webp", "w": 300, "h": 200, "r": "ca", "prov": "PE", "p": "",
      "f": [
      "The big oak tree stands for England, and the three small oaks for the island’s three counties.",
      "The capital is Charlottetown.",
      "Prince Edward Island is Canada’s smallest province."] },
    "CA-QC": { "n": "Quebec", "img": "images/flags/ca-qc.webp", "w": 300, "h": 200, "r": "ca", "prov": "QC", "p": "Fleurdelisé",
      "f": [
      "The white fleurs-de-lis remember Quebec’s French history.",
      "The capital is Quebec City.",
      "Quebec is Canada’s biggest province."] },
    "CA-SK": { "n": "Saskatchewan", "img": "images/flags/ca-sk.webp", "w": 400, "h": 200, "r": "ca", "prov": "SK", "p": "",
      "f": [
      "The red flower is the western red lily, Saskatchewan’s floral emblem.",
      "The capital is Regina.",
      "Saskatchewan’s borders are nearly all straight lines."] },
    "CA-YT": { "n": "Yukon", "img": "images/flags/ca-yt.webp", "w": 400, "h": 200, "r": "ca", "prov": "YT", "p": "",
      "f": [
      "A malamute dog stands on top of Yukon’s coat of arms.",
      "The capital is Whitehorse.",
      "Mount Logan, Canada’s tallest mountain, is in Yukon."] }
  },
  "REGIONS": [
    ["na", "North America", ["CA", "US", "MX", "GT", "BZ", "SV", "HN", "NI", "CR", "PA", "CU", "JM", "HT", "DO", "BS", "TT", "BB", "AG", "DM", "GD", "KN", "LC", "VC"]],
    ["sa", "South America", ["AR", "BO", "BR", "CL", "CO", "EC", "GY", "PY", "PE", "SR", "UY", "VE"]],
    ["eu", "Europe", ["AL", "AD", "AT", "BY", "BE", "BA", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "XK", "LV", "LI", "LT", "LU", "MT", "MD", "MC", "ME", "NL", "MK", "NO", "PL", "PT", "RO", "RU", "SM", "RS", "SK", "SI", "ES", "SE", "CH", "UA", "GB", "VA"]],
    ["as", "Asia", ["AF", "AM", "AZ", "BH", "BD", "BT", "BN", "KH", "CN", "GE", "IN", "ID", "IR", "IQ", "IL", "JP", "JO", "KZ", "KW", "KG", "LA", "LB", "MY", "MV", "MN", "MM", "NP", "KP", "OM", "PK", "PH", "QA", "SA", "SG", "KR", "LK", "SY", "TJ", "TH", "TL", "TR", "TM", "AE", "UZ", "VN", "YE"]],
    ["af", "Africa", ["DZ", "AO", "BJ", "BW", "BF", "BI", "CV", "CM", "CF", "TD", "KM", "CD", "CG", "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET", "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "RW", "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG", "TN", "UG", "ZM", "ZW"]],
    ["ca", "Canada’s provinces and territories", ["CA-AB", "CA-BC", "CA-MB", "CA-NB", "CA-NL", "CA-NS", "CA-NT", "CA-NU", "CA-ON", "CA-PE", "CA-QC", "CA-SK", "CA-YT"]]
  ],
  /* look-alike families, for the look-alikes option */
  "LOOK": [
    ["Gran Colombia", ["CO", "EC", "VE"]],
    ["Nordic crosses", ["DK", "NO", "SE", "FI", "IS"]],
    ["Red, white and blue Slavic flags", ["RU", "RS", "SK", "SI", "HR", "CZ"]],
    ["Red and white", ["ID", "MC", "PL", "AT", "LV", "SG"]],
    ["Blue, yellow and red", ["RO", "TD", "AD", "MD"]],
    ["Green, white and orange", ["IE", "CI", "IT", "MX", "IN", "NE"]],
    ["Green, yellow and red", ["ML", "GN", "SN", "CM", "GH", "BO", "LT", "ET"]],
    ["Blue and white stripes", ["HN", "NI", "SV", "GT", "AR"]],
    ["Red, white and blue stripes", ["NL", "LU", "PY", "FR", "TH", "CR"]],
    ["Black, red and gold", ["DE", "BE"]],
    ["Crescent and star", ["TR", "TN", "AZ", "PK", "DZ", "LY"]],
    ["Red, white and black stripes", ["EG", "IQ", "SY", "YE", "SD", "JO", "AE", "KW"]],
    ["Stars and stripes", ["US", "LR", "MY", "CU", "CL"]],
    ["Old twins", ["HT", "LI"]],
    ["Red Ensign provinces", ["CA-MB", "CA-ON", "CA-BC"]]
  ]
};
