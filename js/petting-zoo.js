(function () {
  var ZROOT = document.getElementById("app-z");
  var CATS = {
    ak: "Alkali metal", ae: "Alkaline earth metal", tm: "Transition metal", pt: "Post-transition metal",
    md: "Metalloid", nm: "Reactive nonmetal", ha: "Halogen", ng: "Noble gas",
    la: "Lanthanide", ac: "Actinide", un: "Properties unknown"
  };
  // [symbol, name, atomic weight, family, emoji, fact]; index + 1 = atomic number
  var E = [
    ["H","Hydrogen","1.008","nm","💧","The name means “water-former.” About three-quarters of all the ordinary matter in the universe is hydrogen, and it's the fuel that stars burn."],
    ["He","Helium","4.0026","ng","🎈","Spotted in sunlight in 1868, years before anyone found it on Earth. It's named after Helios, the Greek sun god."],
    ["Li","Lithium","6.94","ak","🔋","The lightest metal. It floats on water (fizzing the whole time) and powers the battery in your phone."],
    ["Be","Beryllium","9.0122","ae","💚","Emeralds and aquamarines are both beryl, a beryllium mineral. The James Webb Space Telescope's mirrors are made of beryllium too."],
    ["B","Boron","10.81","md","🧼","Borax, a boron mineral, is the secret ingredient in homemade slime. Boron also makes glass bakeware tough enough for the oven."],
    ["C","Carbon","12.011","nm","✏️","Diamond and pencil graphite are the same element. The only difference is how the carbon atoms are stacked."],
    ["N","Nitrogen","14.007","nm","🍦","Makes up 78% of the air you breathe. Chilled to −196 °C it turns liquid and can freeze ice cream in seconds."],
    ["O","Oxygen","15.999","nm","🌬️","Liquid oxygen is pale blue and sticks to a magnet. Oxygen also makes up nearly half the weight of Earth's crust."],
    ["F","Fluorine","18.998","ha","🦷","The most reactive element of all. It will react with almost anything, even some noble gases. Tamed as fluoride, it toughens your teeth."],
    ["Ne","Neon","20.180","ng","🚥","True neon only glows reddish-orange. Every other colour of “neon” sign is a different gas or a coated tube."],
    ["Na","Sodium","22.990","ak","🧂","A metal so soft you can slice it with a butter knife. It fizzes violently in water, yet it's one of the two ingredients of table salt."],
    ["Mg","Magnesium","24.305","ae","🌿","There's one magnesium atom at the centre of every chlorophyll molecule, so every green leaf runs on it. It also burns blinding white."],
    ["Al","Aluminum","26.982","pt","🥤","Once pricier than gold. In 1884 a small aluminum pyramid was chosen as the fancy cap for the Washington Monument."],
    ["Si","Silicon","28.085","md","🏖️","Beach sand and computer chips are built on the same element. Silicon makes up over a quarter of Earth's crust."],
    ["P","Phosphorus","30.974","nm","✨","Discovered in 1669 by an alchemist boiling down urine in search of gold. The name means “light-bearer” because it glowed."],
    ["S","Sulfur","32.06","nm","🧅","Pure sulfur has no smell. Its compounds do the dirty work: rotten eggs, skunk spray, and the onion fumes that make you cry."],
    ["Cl","Chlorine","35.45","ha","🏊","That “pool smell” isn't chlorine itself. It's chloramines, made when chlorine reacts with sweat and other things swimmers leave behind."],
    ["Ar","Argon","39.95","ng","😴","Named after the Greek word for “lazy” because it refuses to react with anything. Nearly 1% of the air is argon."],
    ["K","Potassium","39.098","ak","🍌","Bananas are very slightly radioactive thanks to potassium-40. The symbol K comes from kalium, its Latin name."],
    ["Ca","Calcium","40.078","ae","🦴","The most abundant metal in your body. An adult carries about a kilogram of it, almost all in bones and teeth."],
    ["Sc","Scandium","44.956","tm","🚲","Mendeleev predicted it existed years before anyone found it. Today it stiffens high-end bike frames and baseball bats."],
    ["Ti","Titanium","47.867","tm","🦾","As strong as steel at roughly half the weight. Bone will grow right onto it, which is why it's used for implants."],
    ["V","Vanadium","50.942","tm","👸","Named after Vanadís, another name for the Norse goddess Freyja, because its compounds come in so many beautiful colours."],
    ["Cr","Chromium","51.996","tm","❤️","Rubies are red and emeralds are green because of tiny traces of chromium. The name comes from the Greek for “colour.”"],
    ["Mn","Manganese","54.938","tm","🎨","Stone Age artists used manganese oxide as black paint, including in the Lascaux cave paintings some 17,000 years ago."],
    ["Fe","Iron","55.845","tm","🩸","Iron in hemoglobin is what makes your blood red. It's also the most common element in the whole Earth, mostly hiding in the core."],
    ["Co","Cobalt","58.933","tm","👺","Named after kobolds, the mischievous goblins of German folklore. Miners blamed them for ore that looked valuable but wasn't."],
    ["Ni","Nickel","58.693","tm","😈","The name comes from “Kupfernickel,” or “Old Nick's copper.” Miners thought a devil had spoiled the ore. A US nickel is 75% copper."],
    ["Cu","Copper","63.546","tm","🐙","Octopuses have blue blood because it carries oxygen with copper instead of iron. The Statue of Liberty is green from weathered copper."],
    ["Zn","Zinc","65.38","tm","🧴","Zinc oxide is the white stuff in mineral sunscreen. Mix zinc with copper and you get brass."],
    ["Ga","Gallium","69.723","pt","🥄","Melts at 29.8 °C, so a solid lump turns to liquid in your hand. Pranksters make gallium spoons that vanish in hot tea."],
    ["Ge","Germanium","72.630","md","📻","The very first transistor, built in 1947, was made of germanium. Mendeleev had predicted the element 15 years before it was found."],
    ["As","Arsenic","74.922","md","☠️","Victorians loved a vivid green wallpaper dye made with arsenic. It was also nicknamed “inheritance powder,” for darker reasons."],
    ["Se","Selenium","78.971","nm","🌙","Named after Selene, the Greek goddess of the Moon. Brazil nuts are packed with it."],
    ["Br","Bromine","79.904","ha","🤢","One of only two elements that are liquid at room temperature. Its name comes from the Greek for “stench.”"],
    ["Kr","Krypton","83.798","ng","🦸","The name means “the hidden one.” From 1960 to 1983, the metre was officially defined using orange light from krypton."],
    ["Rb","Rubidium","85.468","ak","🔴","Named for the deep red lines in its light spectrum. Rubidium atomic clocks keep time aboard GPS satellites."],
    ["Sr","Strontium","87.62","ae","🎇","The brilliant red in fireworks and road flares. It's named after Strontian, a village in the Scottish Highlands."],
    ["Y","Yttrium","88.906","tm","📺","One of four elements named after the tiny Swedish village of Ytterby. It helped make the reds in old colour TVs."],
    ["Zr","Zirconium","91.224","tm","💍","Cubic zirconia “diamonds” are zirconium oxide. Zircon crystals are the oldest known bits of Earth, at 4.4 billion years."],
    ["Nb","Niobium","92.906","tm","🏥","Named after Niobe, daughter of Tantalus, because it's so similar to tantalum. It makes the superconducting magnets in MRI machines."],
    ["Mo","Molybdenum","95.95","tm","🌱","Beans and peas rely on bacteria that grab nitrogen from the air, using an enzyme built around molybdenum."],
    ["Tc","Technetium","[97]","tm","🤖","The first element ever made by humans, in 1937. Its name comes from the Greek for “artificial.”"],
    ["Ru","Ruthenium","101.07","tm","🧚","A layer of ruthenium just three atoms thick boosted hard drive storage so much that IBM nicknamed it “pixie dust.”"],
    ["Rh","Rhodium","102.91","tm","🌹","Named after the Greek for “rose” for its pink salts. It's one of the rarest precious metals and gives white gold jewellery its shine."],
    ["Pd","Palladium","106.42","tm","🧽","Soaks up hydrogen like a sponge, holding up to 900 times its own volume. It's named after the asteroid Pallas."],
    ["Ag","Silver","107.87","tm","🥈","The best conductor of electricity of any metal. Argentina is named after its Latin name, argentum."],
    ["Cd","Cadmium","112.41","tm","🌻","Cadmium yellow gave painters like Monet their brightest, sunniest yellows. The metal itself is quite toxic."],
    ["In","Indium","114.82","pt","📱","A see-through coating of indium tin oxide is what lets a touchscreen feel your finger. Bend the pure metal and it “cries.”"],
    ["Sn","Tin","118.71","pt","🥫","A “tin can” is really steel with a whisper-thin coat of tin. Bend a bar of pure tin and it makes a crackling “tin cry.”"],
    ["Sb","Antimony","121.76","md","👁️","Ancient Egyptians ground an antimony mineral into kohl eyeliner. Its symbol, Sb, comes from the Latin stibium."],
    ["Te","Tellurium","127.60","md","🧄","People exposed to even a tiny amount get garlic breath that can last for weeks. It's named after Tellus, the Earth."],
    ["I","Iodine","126.90","ha","💜","Warm the dark crystals and they skip melting, turning straight into violet vapour. The name is Greek for “violet.”"],
    ["Xe","Xenon","131.29","ng","🚀","The name means “stranger.” Spacecraft ion engines shoot out xenon to push themselves gently across the solar system."],
    ["Cs","Cesium","132.91","ak","⏱️","One second is officially 9,192,631,770 ticks of a cesium atom. Every clock on Earth ultimately answers to it."],
    ["Ba","Barium","137.33","ae","🎆","The green in fireworks. Its name comes from the Greek for “heavy.”"],
    ["La","Lanthanum","138.91","la","🙈","Its name is Greek for “to lie hidden,” since it lurked unnoticed inside another mineral. The whole lanthanide row is named after it."],
    ["Ce","Cerium","140.12","la","💥","The sparks from a lighter flint come from cerium. It's named after Ceres, the dwarf planet discovered just two years before it."],
    ["Pr","Praseodymium","140.91","la","👯","The name means “green twin.” For decades it and neodymium were mistaken for a single element."],
    ["Nd","Neodymium","144.24","la","🎧","Makes the strongest permanent magnets you can buy. They're in your earbuds, your phone's buzzer and electric car motors."],
    ["Pm","Promethium","[145]","la","🔥","Named after Prometheus, who stole fire from the gods. It's so unstable that only about half a kilogram exists in Earth's crust at any moment."],
    ["Sm","Samarium","150.36","la","🎸","Samarium magnets are found in electric guitar pickups. By way of a mineral, it was the first element named after a real person."],
    ["Eu","Europium","151.96","la","💶","Euro banknotes carry europium inks that glow red under ultraviolet light, which helps foil counterfeiters."],
    ["Gd","Gadolinium","157.25","la","🧠","Used in contrast dye to make MRI scans clearer. It's only magnetic like iron when it's cooler than about 20 °C."],
    ["Tb","Terbium","158.93","la","🍏","Makes the green in screens and energy-saving bulbs. One terbium alloy changes shape in a magnetic field, turning a tabletop into a speaker."],
    ["Dy","Dysprosium","162.50","la","💨","Its name is Greek for “hard to get.” A pinch of it keeps the magnets in wind turbines working when they heat up."],
    ["Ho","Holmium","164.93","la","🧲","Has the strongest magnetic moment of any natural element. It's named after Holmia, the Latin name for Stockholm."],
    ["Er","Erbium","167.26","la","🌐","Short stretches of erbium-laced glass fibre re-boost the light signals that carry the internet under the oceans. It also tints glass pink."],
    ["Tm","Thulium","168.93","la","❄️","Named after Thule, the mythical land of the far north. It's the rarest of the stable lanthanides."],
    ["Yb","Ytterbium","173.05","la","⏰","The fourth element named after Ytterby, Sweden. Ytterbium atomic clocks would drift by less than a second over the age of the universe."],
    ["Lu","Lutetium","174.97","la","🗼","Named after Lutetia, the Roman name for Paris. Lutetium crystals catch the gamma rays inside PET scanners."],
    ["Hf","Hafnium","178.49","tm","🌕","Named after Hafnia, the Latin name for Copenhagen. A hafnium alloy went into the rocket nozzle on the Apollo lunar module."],
    ["Ta","Tantalum","180.95","tm","🍇","Named after Tantalus, forever unable to drink, because the metal sits in acid without soaking any up. It's in nearly every phone."],
    ["W","Tungsten","183.84","tm","🐺","Has the highest melting point of any metal: 3,422 °C. Its symbol W is for wolfram, from the German for “wolf's foam.”"],
    ["Re","Rhenium","186.21","tm","✈️","The last stable element to be discovered, in 1925. It's named after the Rhine and toughens the blades inside jet engines."],
    ["Os","Osmium","190.23","tm","🏋️","The densest element found in nature, about twice as dense as lead. Its name comes from the Greek for “smell.”"],
    ["Ir","Iridium","192.22","tm","🦖","A thin layer of iridium-rich clay circles the globe. It's the fingerprint of the asteroid that ended the age of dinosaurs."],
    ["Pt","Platinum","195.08","tm","⚖️","Until 2019, the kilogram was defined by one small platinum-iridium cylinder locked in a vault near Paris."],
    ["Au","Gold","196.97","tm","🥇","All the gold ever mined would fit in a cube about 22 metres on each side. Its symbol comes from the Latin aurum."],
    ["Hg","Mercury","200.59","tm","🎩","The only metal that's liquid at room temperature. Hat makers once used it on felt, which may be where “mad as a hatter” comes from."],
    ["Tl","Thallium","204.38","pt","🕵️","Agatha Christie described thallium poisoning so accurately in a novel that a nurse later used it to recognize a real case."],
    ["Pb","Lead","207.2","pt","🚰","Its Latin name, plumbum, gave us the word “plumber.” Pencil “lead” has never contained any. It's graphite."],
    ["Bi","Bismuth","208.98","pt","🌈","Grows into rainbow staircase crystals. It's technically radioactive, with a half-life a billion times longer than the age of the universe."],
    ["Po","Polonium","[209]","pt","☢️","Marie Curie named it after Poland, her homeland, which at the time did not exist as an independent country."],
    ["At","Astatine","[210]","ha","👻","The rarest natural element. Less than a gram of it exists in Earth's entire crust at any moment."],
    ["Rn","Radon","[222]","ng","🏠","A radioactive gas that seeps up from rock and soil. It's the reason people put radon detectors in their basements."],
    ["Fr","Francium","[223]","ak","🥐","Named after France by Marguerite Perey, who found it in 1939. It was the last element discovered in nature, and half of any sample is gone in 22 minutes."],
    ["Ra","Radium","[226]","ae","⌚","Glows faintly in the dark. A century ago it was painted onto watch dials so they could be read at night."],
    ["Ac","Actinium","[227]","ac","💙","So radioactive it glows pale blue in the dark. The whole actinide row is named after it."],
    ["Th","Thorium","232.04","ac","🔨","Named after Thor, the Norse god of thunder. It made old camping lantern mantles glow brilliantly."],
    ["Pa","Protactinium","231.04","ac","👪","Its name means “parent of actinium,” because that's what it turns into as it decays."],
    ["U","Uranium","238.03","ac","🪐","Named after Uranus, discovered eight years earlier. Old uranium glassware glows bright green under ultraviolet light."],
    ["Np","Neptunium","[237]","ac","🔱","Named after Neptune, the next planet out from Uranus. In 1940 it became the first element made beyond uranium."],
    ["Pu","Plutonium","[244]","ac","🛰️","Named after Pluto. The steady heat of plutonium-238 has powered the Voyager probes since 1977, and the Mars rovers Curiosity and Perseverance."],
    ["Am","Americium","[243]","ac","🚨","Probably the only synthetic element in your home. A speck of americium sits inside most ionization smoke detectors."],
    ["Cm","Curium","[247]","ac","🔬","Named after Marie and Pierre Curie. Mars rovers have carried curium to help work out what Martian rocks are made of."],
    ["Bk","Berkelium","[247]","ac","🎓","Named after Berkeley, California. Making the 22 milligrams needed to discover tennessine took about 250 days in a reactor."],
    ["Cf","Californium","[251]","ac","💸","Among the priciest substances on Earth, at roughly US$27 million a gram. It's used to help start up nuclear reactors."],
    ["Es","Einsteinium","[252]","ac","🤓","Discovered in the fallout of the first hydrogen bomb test in 1952, and kept secret for three years. Named after Albert Einstein."],
    ["Fm","Fermium","[257]","ac","🧱","Found in the same hydrogen bomb debris as einsteinium. It's named after Enrico Fermi, who built the first nuclear reactor out of graphite bricks."],
    ["Md","Mendelevium","[258]","ac","📋","Named after Dmitri Mendeleev, father of the periodic table. Its discovery in 1955 produced just 17 atoms."],
    ["No","Nobelium","[259]","ac","🏅","Named after Alfred Nobel. Teams in Sweden, the US and the Soviet Union argued for decades over who made it first."],
    ["Lr","Lawrencium","[266]","ac","🎡","Named after Ernest Lawrence, inventor of the cyclotron atom-smasher. Its symbol was Lw until 1963."],
    ["Rf","Rutherfordium","[267]","tm","🎯","Named after Ernest Rutherford, who discovered the atomic nucleus. Soviet scientists called it kurchatovium during the “Transfermium Wars.”"],
    ["Db","Dubnium","[268]","tm","🏘️","Named after Dubna, the Russian town where many superheavy elements were first made. American scientists had wanted to call it hahnium."],
    ["Sg","Seaborgium","[269]","tm","✉️","Named after Glenn Seaborg while he was still alive. You could have addressed a letter to him using only element names."],
    ["Bh","Bohrium","[270]","tm","⚛️","Named after Niels Bohr, who worked out how electrons are arranged in atoms. Its own atoms fall apart within minutes."],
    ["Hs","Hassium","[269]","tm","🏰","Named after Hesse, the German state where it was first made in 1984. Its atoms vanish in under a minute."],
    ["Mt","Meitnerium","[278]","un","👩‍🔬","Named after Lise Meitner, who helped explain nuclear fission. It's the only element named solely for a real woman."],
    ["Ds","Darmstadtium","[281]","un","🚓","Named after Darmstadt, Germany. Its number matches the German police emergency line, so a jokey nickname was “policium.”"],
    ["Rg","Roentgenium","[282]","un","💀","Named after Wilhelm Röntgen, discoverer of X-rays. It sits right below gold, though nobody has made enough to see its colour."],
    ["Cn","Copernicium","[285]","tm","🌍","Named after Copernicus, who put the Sun at the centre of the solar system. The name became official on his birthday in 2010."],
    ["Nh","Nihonium","[286]","un","🗾","Named after Nihon, a Japanese word for Japan. Researchers there spent nine years smashing atoms together to make just three."],
    ["Fl","Flerovium","[289]","un","🏝️","Named after a Russian lab and its founder, Georgy Flerov. It sits near a predicted “island of stability” for superheavy atoms."],
    ["Mc","Moscovium","[290]","un","🛸","Named after the Moscow region. Before it was ever made, “element 115” starred in UFO lore as flying saucer fuel."],
    ["Lv","Livermorium","[293]","un","🐄","Named after Lawrence Livermore National Laboratory in California, in a city that takes its own name from a rancher."],
    ["Ts","Tennessine","[294]","un","🤠","The newest element, announced in 2010. It's named after Tennessee, home of the lab that supplied a key ingredient."],
    ["Og","Oganesson","[294]","un","👑","The heaviest element so far. Only a handful of atoms have ever been made, and it's named after physicist Yuri Oganessian."]
  ];

  // Parallel to E: [where it's found in nature, what it's used for, year discovered]
  var LAB = "Only in the lab: first made at ";
  var X = [
    ["Stars, water, and every living thing","Rocket fuel and making fertilizer","1766"],
    ["Trapped underground with natural gas","Party balloons and cooling MRI magnets","1868"],
    ["Salt flats in South America and hard rock in Australia","Rechargeable batteries","1817"],
    ["The gemstones emerald and aquamarine","Space telescope mirrors and springy copper alloys","1798"],
    ["Dried-up desert lake beds, as borax","Oven-safe glass and laundry boosters","1808"],
    ["Every living thing, coal, diamonds, and the air","Pencils, plastics, and fuels","Ancient"],
    ["The air: 78% of every breath","Fertilizer, and keeping chip bags puffy and fresh","1772"],
    ["The air (21%), water, and most rocks","Breathing, burning, and welding torches","1774"],
    ["The purple-and-green mineral fluorite","Toothpaste and non-stick pans","1886"],
    ["Tiny traces in the air","Glowing red-orange signs","1898"],
    ["Seawater and underground salt beds","Table salt, baking soda, and winter road salt","1807"],
    ["Seawater and rocks like dolomite","Leafy greens, Epsom salts, and lightweight car parts","1755"],
    ["The reddish ore bauxite","Cans, foil, and airplanes","1825"],
    ["Sand and quartz","Glass, computer chips, and solar panels","1824"],
    ["Phosphate rock, bones, and DNA","Fertilizer and the striking strip on a matchbox","1669"],
    ["Yellow crusts around volcanoes and hot springs","Rubber tires, matches, and fertilizer","Ancient"],
    ["Sea salt, where it's bonded to sodium","Pool water, bleach, and PVC pipes","1774"],
    ["The air: almost 1% of it","Inside light bulbs and double-pane windows","1894"],
    ["Potash beds (Saskatchewan has the world's biggest)","Fertilizer. Bananas and potatoes are full of it","1807"],
    ["Limestone, chalk, and seashells","Bones, teeth, milk, and cement","1808"],
    ["Spread thinly through many minerals","Stadium floodlights and light, strong alloys","1879"],
    ["The minerals rutile and ilmenite","White paint, sunscreen, and jet engines","1791"],
    ["Certain iron ores and crude oil","Tough steel for wrenches and springs","1801"],
    ["The dark ore chromite","Stainless steel and shiny chrome plating","1797"],
    ["The ore pyrolusite, and lumps on the deep seafloor","Steel and alkaline batteries","1774"],
    ["Red and black iron ores, and Earth's core","Steel for nearly everything, and your blood","Ancient"],
    ["Mostly mined in the DR Congo","Phone batteries and deep blue glass","c. 1735"],
    ["Ores like those at Sudbury, Ontario","Stainless steel and coins","1751"],
    ["Ores mined in Chile and Peru","Electrical wires and water pipes","Ancient"],
    ["The ore sphalerite","Rust-proofing steel, brass, and sunscreen","Ancient"],
    ["Traces in aluminum and zinc ores","LED lights and phone chips","1875"],
    ["Traces in zinc ores and coal ash","Fibre-optic cables and night-vision lenses","1886"],
    ["The mineral arsenopyrite and some groundwater","Certain high-speed computer chips","c. 1250"],
    ["A by-product of refining copper","Glassmaking. Brazil nuts are full of it","1817"],
    ["Salty brines like the Dead Sea","Flame retardants","1826"],
    ["Tiny traces in the air","Bright flashlight bulbs and some lasers","1898"],
    ["Small amounts in the mineral lepidolite","Atomic clocks","1861"],
    ["The pale blue mineral celestine","Red fireworks and emergency flares","1790"],
    ["Rare-earth minerals","White LEDs, lasers, and camera lenses","1794"],
    ["Zircon sand","Cubic zirconia gems and nuclear fuel tubes","1789"],
    ["Mined mostly in Brazil, plus one mine in Quebec","Strong steel and MRI magnets","1801"],
    ["The soft grey mineral molybdenite","Tough steel for tools and engines","1778"],
    ["Almost none in nature. It's made in nuclear reactors","Hospital imaging scans","1937"],
    ["Alongside platinum in ores","Hard drives and electrical contacts","1844"],
    ["Alongside platinum in ores","Car catalytic converters and jewellery plating","1803"],
    ["Platinum and nickel ores","Car catalytic converters and electronics","1803"],
    ["Silver and lead ores","Jewellery, cutlery, mirrors, and solar panels","Ancient"],
    ["A by-product of zinc mining","Rechargeable batteries and bright paint pigments","1817"],
    ["A by-product of zinc mining","Touchscreens and flat-panel displays","1863"],
    ["The ore cassiterite","Solder, tin-plated cans, and bronze","Ancient"],
    ["The spiky grey mineral stibnite","Flame retardants and car batteries","Ancient"],
    ["A by-product of refining copper","Some solar panels","1782"],
    ["Seaweed and salty brines","Iodized salt and disinfectant","1811"],
    ["The faintest traces in the air","Bright car headlights and spacecraft engines","1898"],
    ["The mineral pollucite (Manitoba has a giant deposit)","Atomic clocks","1860"],
    ["The heavy mineral barite","Green fireworks and drinks for stomach X-rays","1808"],
    ["Rare-earth minerals like monazite","Camera lenses and hybrid car batteries","1839"],
    ["Rare-earth minerals like monazite","Lighter flints and glass polish","1803"],
    ["Rare-earth minerals","Strong magnets and welders' goggles","1885"],
    ["Rare-earth minerals, mostly mined in China","Earbuds, hard drives, and wind turbines","1885"],
    ["Almost none in nature. It's made in nuclear reactors","Specialty long-life batteries","1945"],
    ["Rare-earth minerals","Heat-proof magnets in guitar pickups and motors","1879"],
    ["Rare-earth minerals","Red in screens, and banknote security ink","1901"],
    ["Rare-earth minerals","MRI contrast dye and nuclear reactor control rods","1880"],
    ["Rare-earth minerals","Green in screens and fluorescent bulbs","1843"],
    ["Rare-earth clays in southern China","Electric car motors and wind turbines","1886"],
    ["Rare-earth minerals","Surgical and dental lasers","1878"],
    ["Rare-earth minerals","Internet cables and pink-tinted glass","1843"],
    ["Rare-earth minerals, in tiny amounts","Portable X-ray machines and lasers","1879"],
    ["Rare-earth minerals","Atomic clocks and industrial lasers","1878"],
    ["Rare-earth minerals, in tiny amounts","Detectors in PET scanners","1907"],
    ["Hiding inside zirconium minerals","Computer chips and rocket nozzles","1923"],
    ["The ore coltan","Tiny capacitors in phones and laptops","1802"],
    ["The ores wolframite and scheelite","Drill bits and old light bulb filaments","1783"],
    ["Traces in molybdenum ore","Jet engine blades","1925"],
    ["Alongside platinum in ores","Fountain pen tips and electrical contacts","1803"],
    ["Alongside platinum in ores, and in meteorites","Spark plugs","1803"],
    ["Ores in South Africa and Russia","Jewellery and car catalytic converters","1735"],
    ["Nuggets, river gravel, and veins in rock","Jewellery and phone circuits","Ancient"],
    ["The red ore cinnabar","Old thermometers and fluorescent bulbs","Ancient"],
    ["Traces in copper, lead, and zinc ores","Lenses for infrared cameras","1861"],
    ["The shiny grey ore galena","Car batteries and X-ray shielding aprons","Ancient"],
    ["A by-product of refining lead and copper","Stomach medicine and fire sprinklers","c. 1500"],
    ["Faint traces in uranium ore","Anti-static brushes","1898"],
    ["A few atoms at a time in uranium ore","Research only. It vanishes within hours","1940"],
    ["Seeping out of granite and soil","No everyday uses. It's one to keep out of the house","1900"],
    ["Fleeting traces in uranium ore","None. It vanishes too fast","1939"],
    ["Traces in uranium ore","Old glow-in-the-dark watch dials","1898"],
    ["Traces in uranium ore","Research","1899"],
    ["Monazite sand","Old camping lantern mantles","1828"],
    ["Tiny traces in uranium ore","Helping scientists date seafloor mud","1913"],
    ["Uraninite ore (Saskatchewan has some of the richest)","Fuel for nuclear power plants","1789"],
    ["Made in nuclear reactors, with faint traces in uranium ore","Research, and making plutonium-238","1940"],
    ["Made in nuclear reactors","Power supplies for deep-space probes","1940"],
    ["Made in nuclear reactors","Household smoke detectors","1944"],
    ["Made in nuclear reactors","Rock analyzers on Mars rovers","1944"],
    ["Made in special research reactors","Only for making heavier elements","1949"],
    ["Made in special research reactors","Starting up nuclear reactors","1950"],
    ["Made in special research reactors, in specks","Research only","1952"],
    ["Made in reactors, in amounts too small to see","Research only","1952"],
    [LAB + "Berkeley, California","Research only","1955"],
    [LAB + "Dubna, Russia","Research only","1966"],
    [LAB + "Berkeley, California","Research only","1961"],
    ["Only in the lab: Dubna, Russia and Berkeley, California","Research only","1960s"],
    ["Only in the lab: Dubna, Russia and Berkeley, California","Research only","c. 1970"],
    [LAB + "Berkeley, California","Research only","1974"],
    [LAB + "GSI in Darmstadt, Germany","Research only","1981"],
    [LAB + "GSI in Darmstadt, Germany","Research only","1984"],
    [LAB + "GSI in Darmstadt, Germany","Research only","1982"],
    [LAB + "GSI in Darmstadt, Germany","Research only","1994"],
    [LAB + "GSI in Darmstadt, Germany","Research only","1994"],
    [LAB + "GSI in Darmstadt, Germany","Research only","1996"],
    [LAB + "RIKEN, near Tokyo","Research only","2004"],
    [LAB + "Dubna, Russia","Research only","1998"],
    [LAB + "Dubna, Russia","Research only","2003"],
    [LAB + "Dubna, Russia","Research only","2000"],
    [LAB + "Dubna, Russia","Research only","2010"],
    [LAB + "Dubna, Russia","Research only","2002"]
  ];

  var GAS = { 1: 1, 2: 1, 7: 1, 8: 1, 9: 1, 10: 1, 17: 1, 18: 1, 36: 1, 54: 1, 86: 1 };
  function stateOf(z) {
    if (GAS[z]) return "Gas";
    if (z === 35 || z === 80) return "Liquid";
    if (z === 112 || z === 114 || z === 118) return "Unknown";
    if (z === 85 || z === 87 || z >= 100) return "Solid (predicted)";
    return "Solid";
  }

  // Family explainers: [plural name, emoji, where on the table, what it means]
  var FAM = {
    ak: ["Alkali metals", "💥", "Group 1, the far-left column (hydrogen doesn't count)",
      "Soft, shiny metals with a single outer electron they're desperate to give away. That makes them wildly reactive: they fizz or even explode in water, so in nature you only ever find them locked up in salts and minerals. They get more reactive the farther down the column you go."],
    ae: ["Alkaline earth metals", "🦴", "Group 2, the second column",
      "These metals have two outer electrons to give away, so they're reactive, but calmer than their group 1 neighbours. You find them in rocks, shells and bones. “Earth” is an old word for the crumbly, heat-proof powders they form with oxygen."],
    tm: ["Transition metals", "🔩", "Groups 3 to 12, the big block in the middle",
      "The classic metals: hard, shiny, strong, and good at carrying heat and electricity. Many of them form brightly coloured compounds and can carry different electric charges, which makes them useful for speeding up chemical reactions. Iron, copper, silver and gold all live here."],
    pt: ["Post-transition metals", "🥫", "To the right of the transition metals",
      "Metals that are softer and melt more easily than the transition metals next door. Aluminum, tin and lead are the famous ones. Chemists don't fully agree on exactly which elements belong in this group."],
    md: ["Metalloids", "💻", "The diagonal staircase between metals and nonmetals",
      "The in-betweeners. They can look shiny like metals but snap like nonmetals, and they conduct electricity only a little. That “only a little” is what makes them semiconductors, the stuff computer chips are built from."],
    nm: ["Reactive nonmetals", "🌱", "The upper right, plus hydrogen in the top-left corner",
      "Not shiny, and poor at carrying heat or electricity. They're gases or brittle solids, and they react by grabbing or sharing electrons. Just six of them (carbon, hydrogen, nitrogen, oxygen, phosphorus and sulfur) make up nearly all of every living thing."],
    ha: ["Halogens", "🧂", "Group 17, the second-last column",
      "Each halogen is one electron short of a full outer shell, so it grabs one from almost anything it touches. That makes them very reactive. The name means “salt-former”: when a halogen meets a metal you get a salt, like sodium plus chlorine making table salt."],
    ng: ["Noble gases", "🎈", "Group 18, the far-right column",
      "Their outer electron shells are already full, so they have no reason to swap or share electrons, and they almost never react with anything. All are colourless, odourless gases. They're called “noble” because, like old-time nobility, they keep to themselves. Run electricity through them and they glow."],
    la: ["Lanthanides", "🧲", "The first pulled-out row, elements 57 to 71",
      "Silvery metals so chemically alike that separating one from another is very hard. Together with scandium and yttrium they're called the “rare earths,” though most aren't actually rare. They make powerful magnets and the colours in screens. They sit below the table only to keep it from being too wide."],
    ac: ["Actinides", "☢️", "The second pulled-out row, elements 89 to 103",
      "Every actinide is radioactive, which means its atoms break down over time and give off energy. Only thorium and uranium are found in nature in any real quantity. Most of the rest are made in nuclear reactors and labs."],
    un: ["Properties unknown", "❓", "The heavy end of the bottom row",
      "This isn't a true family. It's a “we don't know yet” label. These superheavy elements are made a few atoms at a time in particle accelerators and fall apart in seconds or less, so nobody has been able to test what they're actually like."]
  };

  // Display position (row, column) from atomic number. Rows 9 and 10 are the f-block strips.
  function pos(z) {
    if (z === 1) return [1, 1];
    if (z === 2) return [1, 18];
    if (z <= 4) return [2, z - 2];
    if (z <= 10) return [2, z + 8];
    if (z <= 12) return [3, z - 10];
    if (z <= 18) return [3, z];
    if (z <= 36) return [4, z - 18];
    if (z <= 54) return [5, z - 36];
    if (z <= 56) return [6, z - 54];
    if (z <= 71) return [9, z - 54];
    if (z <= 86) return [6, z - 68];
    if (z <= 88) return [7, z - 86];
    if (z <= 103) return [10, z - 86];
    return [7, z - 100];
  }

  var table = document.getElementById("z-table");
  var spacer = table.querySelector(".spacer");
  var cells = [];
  var byPos = {};
  var current = 0;

  var met = {};
  try { JSON.parse(localStorage.getItem("ppz-met") || "[]").forEach(function (z) { met[z] = true; }); } catch (e) {}

  E.forEach(function (el, i) {
    var z = i + 1, p = pos(z);
    var b = document.createElement("button");
    b.type = "button";
    b.className = "cell" + (met[z] ? " met" : "");
    b.style.gridRow = p[0];
    b.style.gridColumn = p[1];
    b.style.setProperty("--cat", "var(--c-" + el[3] + ")");
    b.dataset.z = z;
    b.dataset.cat = el[3];
    b.setAttribute("aria-label", el[1] + ", element " + z);
    b.innerHTML = '<span class="n">' + z + '</span><span class="s">' + el[0] + '</span><span class="e" aria-hidden="true">' + el[4] + '</span>';
    table.insertBefore(b, spacer);
    cells.push(b);
    byPos[p[0] + "-" + p[1]] = b;
  });

  [[6, "la", "57–71"], [7, "ac", "89–103"]].forEach(function (r) {
    var d = document.createElement("div");
    d.className = "ph";
    d.style.gridRow = r[0];
    d.style.gridColumn = 3;
    d.style.setProperty("--cat", "var(--c-" + r[1] + ")");
    d.textContent = r[2];
    d.setAttribute("aria-hidden", "true");
    table.insertBefore(d, spacer);
  });

  var cards = [document.getElementById("z-detailTop"), document.getElementById("z-detailGrid")];
  var metEl = document.getElementById("z-met");
  var famInfo = document.getElementById("z-famInfo");
  var legend = document.getElementById("z-legend");
  var active = null;

  function updateMet() {
    metEl.textContent = "Met " + Object.keys(met).length + " of 118";
  }

  function row(label, value) {
    return '<div><dt class="lab">' + label + '</dt><dd>' + value + '</dd></div>';
  }

  function show(z, opts) {
    opts = opts || {};
    var el = E[z - 1], x = X[z - 1], p = pos(z);
    var where = (p[0] >= 9) ? "f-block" : "Group " + p[1];
    var period = p[0] === 9 ? 6 : p[0] === 10 ? 7 : p[0];
    var html =
      badgeHTML(z) +
      '<div class="d-head"><h2>' + el[1] + '</h2><div class="pills">' +
      '<button type="button" class="fam" data-cat="' + el[3] + '" aria-label="What is a ' + CATS[el[3]].toLowerCase() + '?"><i></i>' +
      CATS[el[3]] + '<span class="q" aria-hidden="true">?</span></button>' +
      '<button type="button" class="see" data-z="' + z + '" aria-label="See inside a ' + el[1].toLowerCase() + ' atom">⚛ See atom</button></div></div>' +
      '<p class="d-fact">' + factOf(z) + '</p>' +
      '<div class="d-side"><p><span class="lab">In nature</span>' + x[0] + '</p>' +
      '<p><span class="lab">In use</span>' + x[1] + '</p>' +
      '<dl class="stats">' + row("At room temp", stateOf(z)) + row("Discovered", x[2]) +
      row("Address", where + ", period " + period) + '</dl></div>';
    cards.forEach(function (c) {
      c.style.setProperty("--cat", "var(--c-" + el[3] + ")");
      c.innerHTML = html.replace("%PAL%", function () { return pu ? palSVG(z, outfitOf(z), ++palUid) : ""; });
      c.classList.remove("pop");
      void c.offsetWidth;
      c.classList.add("pop");
    });
    if (current) cells[current - 1].classList.remove("on");
    cells[z - 1].classList.add("on");
    current = z;
    if (!opts.quiet && !met[z]) {
      met[z] = true;
      cells[z - 1].classList.add("met");
      if (LF.hop) LF.hop(document.getElementById("z-buddy"));
      try { localStorage.setItem("ppz-met", JSON.stringify(Object.keys(met).map(Number))); } catch (e) {}
    }
    updateMet();
    puAfterShow(z, opts);
    if (opts.reveal) {
      var sc = document.getElementById("z-scroll"), c = cells[z - 1];
      var left = c.offsetLeft - sc.clientWidth / 2 + c.offsetWidth / 2;
      try { sc.scrollTo({ left: left, behavior: "smooth" }); } catch (e) { sc.scrollLeft = left; }
    }
  }

  /* nothing picked yet: the card invites a tap instead of showing a starter element */
  function showNone() {
    cards.forEach(function (c) {
      c.style.removeProperty("--cat");
      c.innerHTML = '<div class="badge"><span class="b-emo" aria-hidden="true">👆</span></div>' +
        '<div class="d-head"><h2>Pick an element!</h2></div>' +
        '<p class="d-fact">Tap any tile on the table to meet that element: a fun fact, where it’s found, and what it’s used for.</p>';
    });
  }

  function setFamily(k) {
    active = k;
    Array.prototype.forEach.call(legend.querySelectorAll(".chip"), function (x) {
      x.setAttribute("aria-pressed", x.dataset.cat === active ? "true" : "false");
    });
    table.classList.toggle("filtering", !!active);
    cells.forEach(function (b) { b.classList.toggle("match", b.dataset.cat === active); });
    if (!active) {
      famInfo.style.removeProperty("--cat");
      famInfo.innerHTML = '<div class="fi-tile" aria-hidden="true">🔍</div><div class="fi-body"><h3>What’s a family?</h3>' +
        '<p class="fi-text">Elements in the same family behave alike, usually because their outermost electrons are arranged the same way. ' +
        'Tap a family above to light up its members and find out what they have in common.</p></div>';
      return;
    }
    var f = FAM[k], syms = [];
    E.forEach(function (el) { if (el[3] === k) syms.push(el[0]); });
    famInfo.style.setProperty("--cat", "var(--c-" + k + ")");
    famInfo.innerHTML = '<div class="fi-tile" aria-hidden="true">' + f[1] + '</div><div class="fi-body"><h3>' + f[0] + '</h3>' +
      '<p class="fi-where">' + f[2] + '</p><p class="fi-text">' + f[3] + '</p>' +
      '<p class="fi-members"><b>' + syms.length + ' members:</b> ' + syms.join(" ") + '</p></div>';
  }

  cards.forEach(function (c) {
    c.addEventListener("click", function (ev) {
      var palb = ev.target.closest(".pal-btn");
      if (palb) { palPoke(palb, current); return; }
      if (ev.target.closest(".dress")) { pgTab("closet"); scrollToEl(pg); return; }
      var see = ev.target.closest(".see");
      if (see) { build(+see.dataset.z); goStep(4); goView("learn"); return; }
      var b = ev.target.closest(".fam");
      if (!b) return;
      setFamily(b.dataset.cat);
      try { famInfo.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) { famInfo.scrollIntoView(false); }
    });
  });

  table.addEventListener("click", function (ev) {
    var b = ev.target.closest(".cell");
    if (b) show(+b.dataset.z);
  });

  table.addEventListener("keydown", function (ev) {
    var d = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] }[ev.key];
    var b = ev.target.closest(".cell");
    if (!d || !b) return;
    var p = pos(+b.dataset.z), r = p[0] + d[0], c = p[1] + d[1];
    while (r >= 1 && r <= 10 && c >= 1 && c <= 18) {
      var n = byPos[r + "-" + c];
      if (n) { ev.preventDefault(); n.focus(); show(+n.dataset.z); return; }
      r += d[0]; c += d[1];
    }
  });

  document.getElementById("z-surprise").addEventListener("click", function () {
    goView("zoo");
    var pool = [];
    for (var z = 1; z <= 118; z++) if (!met[z]) pool.push(z);
    if (!pool.length) for (z = 1; z <= 118; z++) if (z !== current) pool.push(z);
    show(pool[Math.floor(Math.random() * pool.length)], { reveal: true });
  });

  // ---------- Atoms 101 ----------
  // Mass number of each element's most common isotope (or longest-lived, if it has no stable form)
  var MASSNUM = [1,4,7,9,11,12,14,16,19,20,23,24,27,28,31,32,35,40,39,40,45,48,51,52,55,56,59,58,63,64,69,74,75,80,79,84,
    85,88,89,90,93,98,97,102,103,106,107,114,115,120,121,130,127,132,133,138,139,140,141,142,145,152,153,158,159,164,165,166,169,174,175,
    180,181,184,187,192,193,195,197,202,205,208,209,209,210,222,223,226,227,232,231,238,237,244,243,247,247,251,252,257,258,259,266,
    267,268,269,270,269,278,281,282,285,286,289,290,293,294,294];
  // Ground-state exceptions to the usual filling order
  var EXC = { 24: { "4s": -1, "3d": 1 }, 29: { "4s": -1, "3d": 1 }, 41: { "5s": -1, "4d": 1 }, 42: { "5s": -1, "4d": 1 },
    44: { "5s": -1, "4d": 1 }, 45: { "5s": -1, "4d": 1 }, 46: { "5s": -2, "4d": 2 }, 47: { "5s": -1, "4d": 1 },
    57: { "4f": -1, "5d": 1 }, 58: { "4f": -1, "5d": 1 }, 64: { "4f": -1, "5d": 1 }, 78: { "6s": -1, "5d": 1 },
    79: { "6s": -1, "5d": 1 }, 89: { "5f": -1, "6d": 1 }, 90: { "5f": -2, "6d": 2 }, 91: { "5f": -1, "6d": 1 },
    92: { "5f": -1, "6d": 1 }, 93: { "5f": -1, "6d": 1 }, 96: { "5f": -1, "6d": 1 }, 103: { "6d": -1, "7p": 1 } };
  var ORDER = ["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p"];
  var CAP = { s: 2, p: 6, d: 10, f: 14 };
  function shells(z) {
    var occ = {}, left = z;
    ORDER.forEach(function (o) { var c = Math.min(CAP[o[1]], left); occ[o] = c; left -= c; });
    var ex = EXC[z], k;
    if (ex) for (k in ex) occ[k] = (occ[k] || 0) + ex[k];
    var sh = [0, 0, 0, 0, 0, 0, 0];
    for (k in occ) sh[+k[0] - 1] += occ[k];
    while (sh.length && !sh[sh.length - 1]) sh.pop();
    return sh;
  }
  function f1(n) { return Math.round(n * 10) / 10; }
  function atomMarkup(z, cx, cy, S) {
    var sh = shells(z), A = MASSNUM[z - 1], N = A, p = z, out = "";
    var Rn = Math.min(S * 0.13, S * (0.025 + 0.0065 * Math.sqrt(N)));
    var inner = Rn + S * 0.06, outer = S / 2 - S * 0.04, band = outer - inner, k = sh.length;
    var step = band / (k + 0.6);
    var rE = Math.min(S * 0.022, step * 0.3);
    sh.forEach(function (count, i) {
      var R = inner + step * (i + 1);
      out += '<circle class="ring" cx="' + cx + '" cy="' + cy + '" r="' + f1(R) + '"/>';
    });
    sh.forEach(function (count, i) {
      var R = inner + step * (i + 1), r = Math.min(rE, Math.PI * R / count * 0.7);
      var cls = "el" + (i === k - 1 ? " out" : "");
      out += '<g class="orbit' + (i % 2 ? " rev" : "") + '" style="transform-origin:' + cx + 'px ' + cy + 'px;animation-duration:' + (10 + i * 5) + 's">';
      for (var j = 0; j < count; j++) {
        var a = -Math.PI / 2 + (2 * Math.PI * j) / count + i * 0.35;
        out += '<circle class="' + cls + '" cx="' + f1(cx + R * Math.cos(a)) + '" cy="' + f1(cy + R * Math.sin(a)) + '" r="' + f1(r) + '"/>';
      }
      out += '</g>';
    });
    var rd = Math.min(Rn * 0.5, (Rn * 0.92 / Math.sqrt(N)) * 0.95);
    for (var i = 0; i < N; i++) {
      var rr = N === 1 ? 0 : Rn * 0.92 * Math.sqrt((i + 0.5) / N), th = i * 2.39996;
      var isP = Math.floor((i + 1) * p / N) > Math.floor(i * p / N);
      out += '<circle class="' + (isP ? "pr" : "nu") + '" cx="' + f1(cx + rr * Math.cos(th)) + '" cy="' + f1(cy + rr * Math.sin(th)) + '" r="' + f1(Math.max(rd, 1)) + '"/>';
    }
    return out;
  }
  function isCommon(z) { return (z <= 83 && z !== 43 && z !== 61) || z === 90 || z === 92; }

  var tut = document.getElementById("z-tut");
  var play = document.getElementById("z-play");
  function scrollToEl(el) {
    try { el.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) { el.scrollIntoView(true); }
  }

  // Step 1 and 2 drawings
  (function () {
    var dots = "", cols = ["--c-nm", "--c-nm", "--c-ak", "--c-pt", "--c-ng"], n = 0;
    for (var row = -4; row <= 4; row++) {
      for (var col = -5; col <= 5; col++) {
        var x = 180 + col * 11.5 + (row % 2 ? 5.75 : 0), y = 96 + row * 10;
        if (Math.hypot(x - 180, y - 96) > 44) continue;
        dots += '<circle cx="' + f1(x) + '" cy="' + y + '" r="5" fill="var(' + cols[(n * 7 + row * 3 + 20) % 5] + ')"/>';
        n++;
      }
    }
    document.getElementById("z-zoomDots").innerHTML = dots;
    var za = document.getElementById("z-zoomAtom");
    za.setAttribute("class", "atom");
    za.innerHTML = atomMarkup(6, 312, 96, 88);

    var g = "";
    for (var j = 0; j < 3; j++) for (var i = 0; i < 4; i++) {
      var gx = 32 + i * 38, gy = 56 + j * 38;
      g += '<circle cx="' + gx + '" cy="' + gy + '" r="16" fill="var(--c-tm)" stroke="var(--cell-edge)"/>' +
        '<text x="' + gx + '" y="' + (gy + 4) + '" text-anchor="middle" font-size="11" font-weight="800" fill="var(--cell-ink)">Au</text>';
    }
    document.getElementById("z-goldAtoms").innerHTML = g;
    var w = "";
    [[226, 58], [312, 64], [268, 122]].forEach(function (m) {
      [[-18, 12], [18, 12]].forEach(function (d) {
        w += '<circle cx="' + (m[0] + d[0]) + '" cy="' + (m[1] + d[1]) + '" r="10" fill="var(--c-nm)" stroke="var(--cell-edge)"/>' +
          '<text x="' + (m[0] + d[0]) + '" y="' + (m[1] + d[1] + 4) + '" text-anchor="middle" font-size="10" font-weight="800" fill="var(--cell-ink)">H</text>';
      });
      w += '<circle cx="' + m[0] + '" cy="' + m[1] + '" r="16" fill="var(--c-ak)" stroke="var(--cell-edge)"/>' +
        '<text x="' + m[0] + '" y="' + (m[1] + 4) + '" text-anchor="middle" font-size="12" font-weight="800" fill="var(--cell-ink)">O</text>';
    });
    document.getElementById("z-waterMols").innerHTML = w;

    var minis = "";
    [[3, "1 outer electron"], [11, "1 outer electron"], [19, "1 outer electron"], [10, "8 outer: full!"]].forEach(function (m) {
      var el = E[m[0] - 1];
      minis += '<figure class="mini"><svg class="atom" viewBox="0 0 200 200" role="img" aria-label="' + el[1] + ' atom with ' + m[1] + '">' +
        atomMarkup(m[0], 100, 100, 200) + '</svg><figcaption><b>' + el[1] + '</b>' + m[1] + '</figcaption></figure>';
    });
    document.getElementById("z-minis").innerHTML = minis;
  })();

  // Step 4: the atom builder
  var atomSvg = document.getElementById("z-atomSvg"), atomZ = document.getElementById("z-atomZ");
  var bZ = 6;
  function build(z) {
    z = Math.max(1, Math.min(118, z | 0));
    bZ = z;
    var el = E[z - 1], sh = shells(z), A = MASSNUM[z - 1];
    atomZ.value = z;
    atomSvg.innerHTML = atomMarkup(z, 180, 180, 360);
    atomSvg.setAttribute("aria-label", el[1] + " atom: " + z + " protons, " + (A - z) + " neutrons, and " + z +
      " electrons arranged " + sh.join(", ") + " from the inside out.");
    var tile = document.getElementById("z-bTile");
    tile.style.setProperty("--cat", "var(--c-" + el[3] + ")");
    document.getElementById("z-bTn").textContent = z;
    document.getElementById("z-bTe").textContent = el[4];
    document.getElementById("z-bTs").textContent = el[0];
    document.getElementById("z-bName").textContent = el[1];
    document.getElementById("z-bFam").textContent = CATS[el[3]];
    document.getElementById("z-bP").textContent = z;
    document.getElementById("z-bN").textContent = A - z;
    document.getElementById("z-bE").textContent = z;
    document.getElementById("z-bSh").innerHTML = sh.slice(0, -1).map(String).concat('<span class="o">' + sh[sh.length - 1] + '</span>').join(" · ");
    var note = "Neutrons shown for " + el[1].toLowerCase() + "-" + A + ", its " + (isCommon(z) ? "most common" : "longest-lasting") + " version.";
    if (z >= 104) note += " The shells are a prediction: too few atoms have been made to measure them.";
    else if (z > 20) note += " Past calcium, inner shells keep filling after an outer one has started.";
    document.getElementById("z-bNote").textContent = note;
    document.getElementById("z-atomMinus").disabled = z === 1;
    document.getElementById("z-atomPlus").disabled = z === 118;
  }
  atomZ.addEventListener("input", function () { build(+atomZ.value); });
  document.getElementById("z-atomMinus").addEventListener("click", function () { build(bZ - 1); });
  document.getElementById("z-atomPlus").addEventListener("click", function () { build(bZ + 1); });
  document.getElementById("z-atomShow").addEventListener("click", function () {
    goView("zoo");
    show(bZ, { reveal: true });
    scrollToEl(play);
  });
  build(6);

  // Step navigation
  var steps = tut.querySelectorAll(".step"), tabs = tut.querySelectorAll(".tab"), curStep = 1;
  var prev = document.getElementById("z-tutPrev"), next = document.getElementById("z-tutNext");
  function goStep(i) {
    curStep = i;
    Array.prototype.forEach.call(steps, function (s) { s.hidden = +s.dataset.step !== i; });
    Array.prototype.forEach.call(tabs, function (t) {
      if (+t.dataset.step === i) t.setAttribute("aria-current", "step"); else t.removeAttribute("aria-current");
    });
    document.getElementById("z-tutCount").textContent = "Step " + i + " of 6";
    prev.disabled = i === 1;
    next.textContent = i === 6 ? "Start exploring ↑" : "Next →";
  }
  Array.prototype.forEach.call(tabs, function (t) {
    t.addEventListener("click", function () { goStep(+t.dataset.step); });
  });
  prev.addEventListener("click", function () { if (curStep > 1) goStep(curStep - 1); });
  next.addEventListener("click", function () {
    if (curStep < 6) goStep(curStep + 1); else goView("zoo");
  });
  document.getElementById("z-toAlkali").addEventListener("click", function () { goView("zoo"); setFamily("ak"); scrollToEl(play); });
  goStep(1);

  // ---------- Power-up mode ----------
  var pu = false, soundOn = true, palUid = 0;
  try { pu = localStorage.getItem("ppz-pu") === "1"; soundOn = localStorage.getItem("ppz-sound") !== "0"; } catch (e) {}
  var pg = document.getElementById("z-pg");
  var reduceMotion = false;
  try { reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  // Kid-friendly swaps for the few facts that mention poisons or bombs
  var KIDFACT = {
    33: "Some super-fast computer chips are made from arsenic mixed with gallium. It's a poison, so scientists handle it very carefully.",
    81: "Its name comes from the Greek word for a fresh green twig, because it burns with a bright green flame.",
    99: "Named after Albert Einstein, one of the most famous scientists ever. Only tiny specks of it have ever been made.",
    100: "Named after Enrico Fermi, who built the very first nuclear reactor out of a giant pile of graphite bricks."
  };
  function factOf(z) { return (pu && KIDFACT[z]) || E[z - 1][5]; }

  var SAYS = {
    ak: ["I have ONE extra electron and I just HAVE to share it! ⚡", "Please don't drop me in water. I get WAY too excited! 💦", "Most of my family is soft enough to cut with a butter knife! 🧈"],
    ae: ["I've got two electrons to give away. Want one? 🤝", "I'm calmer than my alkali cousins. Mostly! 😇", "My family lives in rocks, shells and bones! 🐚"],
    tm: ["I'm strong, shiny, and great at teamwork! 💪", "My family makes the prettiest colours! 🌈", "My family is in magnets, coins and jewellery! 💍"],
    pt: ["I'm a soft and easygoing kind of metal. 😌", "Bend me, shape me, I don't mind! ✨", "I'm a metal, just more relaxed than my neighbours! 🛋️"],
    md: ["Half metal, half not. I'm a little bit of both! 🌗", "Computer chips? That's my family's thing! 💻", "I'm an in-betweener and proud of it! 🎭"],
    nm: ["Living things are made of me and my friends! 🌱", "I love sharing electrons with my buddies! 💞", "I'm not shiny, but I'm super important! ⭐"],
    ha: ["I'm just ONE electron away from perfect. Can I borrow yours? 🙏", "Put me with a metal and we make a salt! 🧂", "I'm a little grabby, sorry! 🤲"],
    ng: ["My shell is full, so I'm totally chill. 😎", "React? Nah. I'm good, thanks! 💅", "Zap me with electricity and watch me glow! 💡"],
    la: ["Lots of my family make super-strong magnets! 🧲", "I help make screens glow! 📱", "My lanthanide sisters and I are practically twins! 👯"],
    ac: ["I'm radioactive, so I slowly give off energy! ⚡", "Scientists handle me very carefully! 🧤", "Most of my family was made in labs! 🔬"],
    un: ["Only a few atoms of me have EVER existed! 🦄", "Blink and you'll miss me! 👀", "Scientists are still figuring me out! 🔍"]
  };
  var MOVES = { ak: "shake", ng: "float", ha: "lean", un: "float" };

  // Wardrobe: [id, label, icon (emoji or colour), stars needed]
  var WARD = [
    ["hat", "Hats", [["none", "None", "🚫", 0], ["bow", "Bow", "🎀", 0], ["flowers", "Flowers", "🌸", 0], ["crown", "Crown", "👑", 3],
      ["cat", "Cat ears", "🐱", 6], ["party", "Party hat", "🥳", 10], ["bunny", "Bunny ears", "🐰", 15], ["cap", "Cap", "🧢", 20],
      ["tophat", "Top hat", "🎩", 30], ["grad", "Grad cap", "🎓", 45], ["unicorn", "Unicorn", "🦄", 60]]],
    ["eyes", "Glasses", [["none", "None", "🚫", 0], ["round", "Round", "👓", 0], ["hearts", "Hearts", "💗", 5], ["stars", "Stars", "🌟", 12], ["shades", "Shades", "🕶️", 25]]],
    ["neck", "Neck", [["none", "None", "🚫", 0], ["bowtie", "Bow tie", "👔", 0], ["locket", "Locket", "💖", 4], ["pearls", "Pearls", "📿", 8],
      ["scarf", "Scarf", "🧣", 18], ["medal", "Medal", "🏅", 35]]],
    ["aura", "Sparkle", [["none", "None", "🚫", 0], ["sparkles", "Sparkles", "✨", 0], ["hearts", "Hearts", "💕", 2], ["stars", "Stars", "⭐", 9],
      ["butterflies", "Butterflies", "🦋", 22], ["bubbles", "Bubbles", "💭", 40], ["rainbow", "Rainbow", "🌈", 80]]],
    ["color", "Colour", [["fam", "Family", "", 0], ["pink", "Pink", "#FFB3D1", 0], ["mint", "Mint", "#9FEBD0", 0], ["lavender", "Lavender", "#CDB8FF", 7],
      ["sky", "Sky", "#A8DAFF", 7], ["peach", "Peach", "#FFCBA4", 14], ["lemon", "Lemon", "#FFE98A", 14], ["gold", "Gold", "#FFD24D", 50],
      ["rainbow", "Rainbow", "", 118]]]
  ];
  function wItem(cat, id) {
    var g = WARD.filter(function (w) { return w[0] === cat; })[0];
    return g[2].filter(function (it) { return it[0] === id; })[0] || g[2][0];
  }

  var outfits = {}, found = {};
  try { outfits = JSON.parse(localStorage.getItem("ppz-outfits") || "{}") || {}; } catch (e) {}
  try { found = JSON.parse(localStorage.getItem("ppz-recipes") || "{}") || {}; } catch (e) {}
  function saveOutfits() { try { localStorage.setItem("ppz-outfits", JSON.stringify(outfits)); } catch (e) {} }
  function outfitOf(z) { return outfits[z] || {}; }
  function stars() { return Object.keys(met).length; }

  // ---- the pal drawing
  function heart(cx, cy, k) {
    return "M" + cx + " " + f1(cy + k * .8) + " C" + f1(cx - k * 1.4) + " " + f1(cy - k * .1) + "," + f1(cx - k * .6) + " " + f1(cy - k * 1.1) + "," + cx + " " + f1(cy - k * .35) +
      " C" + f1(cx + k * .6) + " " + f1(cy - k * 1.1) + "," + f1(cx + k * 1.4) + " " + f1(cy - k * .1) + "," + cx + " " + f1(cy + k * .8) + " Z";
  }
  function star(cx, cy, ro, ri) {
    var pts = [];
    for (var k = 0; k < 10; k++) {
      var r = k % 2 ? ri : ro, a = -Math.PI / 2 + k * Math.PI / 5;
      pts.push(f1(cx + r * Math.cos(a)) + "," + f1(cy + r * Math.sin(a)));
    }
    return pts.join(" ");
  }
  function emo(ch, x, y, size, extra) {
    return '<text x="' + x + '" y="' + y + '" font-size="' + size + '" text-anchor="middle"' + (extra || "") + '>' + ch + '</text>';
  }
  function palSVG(z, o, uid) {
    var el = E[z - 1], cat = el[3], INK = "var(--cell-ink)";
    o = o || {};
    var col = o.color || "fam";
    var fill = col === "rainbow" ? "url(#z-rb" + uid + ")" : col === "fam" ? "var(--c-" + cat + ")" : wItem("color", col)[2];
    var s = '<svg viewBox="0 0 120 130" aria-hidden="true" focusable="false">';
    if (col === "rainbow") {
      s += '<defs><linearGradient id="z-rb' + uid + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFB3D1"/>' +
        '<stop offset=".35" stop-color="#FFE98A"/><stop offset=".65" stop-color="#9FEBD0"/><stop offset="1" stop-color="#B9A8FF"/></linearGradient></defs>';
    }
    // behind the body
    if (o.aura === "rainbow") {
      s += '<path d="M6 76 A54 54 0 0 1 114 76" fill="none" stroke="#FF8FB1" stroke-width="6"/>' +
        '<path d="M12 76 A48 48 0 0 1 108 76" fill="none" stroke="#FFD84D" stroke-width="6"/>' +
        '<path d="M18 76 A42 42 0 0 1 102 76" fill="none" stroke="#8FD3FF" stroke-width="6"/>';
    }
    if (o.aura === "bubbles") {
      [[13, 40, 6], [106, 28, 4.5], [109, 96, 7], [9, 92, 4]].forEach(function (b) {
        s += '<circle cx="' + b[0] + '" cy="' + b[1] + '" r="' + b[2] + '" fill="rgba(143,211,255,.25)" stroke="#6FB8F0" stroke-width="1.6"/>' +
          '<circle cx="' + f1(b[0] - b[2] * .35) + '" cy="' + f1(b[1] - b[2] * .35) + '" r="' + f1(b[2] * .25) + '" fill="#FFFFFF"/>';
      });
    }
    if (cat === "ac") s += '<circle cx="60" cy="76" r="50" fill="var(--valence)" opacity=".22"/>';
    if (o.hat === "cat") {
      s += '<polygon points="28,56 34,22 56,40" fill="' + fill + '" stroke="var(--cell-edge)" stroke-width="2" stroke-linejoin="round"/>' +
        '<polygon points="92,56 86,22 64,40" fill="' + fill + '" stroke="var(--cell-edge)" stroke-width="2" stroke-linejoin="round"/>' +
        '<polygon points="34,46 36,30 47,40" fill="#FF9EC4"/><polygon points="86,46 84,30 73,40" fill="#FF9EC4"/>';
    }
    if (o.hat === "bunny") {
      s += '<ellipse cx="45" cy="22" rx="8" ry="21" fill="' + fill + '" stroke="var(--cell-edge)" stroke-width="2" transform="rotate(-10 45 22)"/>' +
        '<ellipse cx="75" cy="22" rx="8" ry="21" fill="' + fill + '" stroke="var(--cell-edge)" stroke-width="2" transform="rotate(10 75 22)"/>' +
        '<ellipse cx="45" cy="24" rx="3.6" ry="14" fill="#FF9EC4" transform="rotate(-10 45 24)"/>' +
        '<ellipse cx="75" cy="24" rx="3.6" ry="14" fill="#FF9EC4" transform="rotate(10 75 24)"/>';
    }
    // body
    s += '<g class="pbody">' +
      '<ellipse cx="44" cy="112" rx="11" ry="6.5" fill="' + fill + '" stroke="var(--cell-edge)" stroke-width="2"/>' +
      '<ellipse cx="76" cy="112" rx="11" ry="6.5" fill="' + fill + '" stroke="var(--cell-edge)" stroke-width="2"/>' +
      '<ellipse cx="22" cy="84" rx="7.5" ry="11" fill="' + fill + '" stroke="var(--cell-edge)" stroke-width="2" transform="rotate(25 22 84)"/>' +
      '<ellipse cx="98" cy="84" rx="7.5" ry="11" fill="' + fill + '" stroke="var(--cell-edge)" stroke-width="2" transform="rotate(-25 98 84)"/>' +
      '<ellipse cx="60" cy="74" rx="40" ry="38" fill="' + fill + '" stroke="var(--cell-edge)" stroke-width="2"/>' +
      '<ellipse cx="46" cy="52" rx="11" ry="6" fill="#FFFFFF" opacity=".35" transform="rotate(-25 46 52)"/>';
    // face
    if (cat === "ng") {
      s += '<path d="M41 71 Q47 64.5 53 71" fill="none" stroke="' + INK + '" stroke-width="2.6" stroke-linecap="round"/>' +
        '<path d="M67 71 Q73 64.5 79 71" fill="none" stroke="' + INK + '" stroke-width="2.6" stroke-linecap="round"/>';
    } else {
      var rx = cat === "ak" ? 5.2 : 4.5, ry = cat === "ak" ? 6.6 : 5.5;
      [47, 73].forEach(function (x) {
        s += '<ellipse cx="' + x + '" cy="70" rx="' + rx + '" ry="' + ry + '" fill="' + INK + '"/>' +
          '<circle cx="' + (x + 1.6) + '" cy="67.6" r="1.8" fill="#FFFFFF"/><circle cx="' + (x - 1.4) + '" cy="72.6" r=".9" fill="#FFFFFF"/>';
      });
    }
    s += '<ellipse cx="38.5" cy="80" rx="6" ry="3.4" fill="#FF7FA8" opacity=".55"/><ellipse cx="81.5" cy="80" rx="6" ry="3.4" fill="#FF7FA8" opacity=".55"/>';
    if (cat === "ak") s += '<ellipse cx="60" cy="82" rx="4" ry="3.6" fill="#B23A5A"/>';
    else if (cat === "ha") s += '<ellipse cx="60" cy="81.5" rx="2.6" ry="2.8" fill="#B23A5A"/>';
    else if (cat === "ng") s += '<path d="M55 80 Q60 84.5 65 80" fill="none" stroke="' + INK + '" stroke-width="2.2" stroke-linecap="round"/>';
    else s += '<path d="M53 79 Q56.5 83.5 60 79 Q63.5 83.5 67 79" fill="none" stroke="' + INK + '" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>';
    // tummy symbol and the thing it holds
    s += '<text x="60" y="108" font-size="13" font-weight="700" text-anchor="middle" fill="' + INK + '" style="font-family: var(--font-display)">' + el[0] + '</text>';
    s += emo(el[4], 103, 101, 16);
    // neck
    if (o.neck === "bowtie") s += '<polygon points="60,92 48,86 48,98" fill="#FF5C8A" stroke="#C7305F" stroke-width="1.2" stroke-linejoin="round"/>' +
      '<polygon points="60,92 72,86 72,98" fill="#FF5C8A" stroke="#C7305F" stroke-width="1.2" stroke-linejoin="round"/><circle cx="60" cy="92" r="3.4" fill="#C7305F"/>';
    if (o.neck === "locket") s += '<path d="M44 85 Q60 97 76 85" fill="none" stroke="#E2B33C" stroke-width="1.6"/>' + emo("💖", 60, 99, 11);
    if (o.neck === "pearls") {
      for (var t = 0; t <= 6; t++) {
        var u = t / 6, px = (1 - u) * (1 - u) * 42 + 2 * (1 - u) * u * 60 + u * u * 78, py = (1 - u) * (1 - u) * 85 + 2 * (1 - u) * u * 99 + u * u * 85;
        s += '<circle cx="' + f1(px) + '" cy="' + f1(py) + '" r="2.8" fill="#FFF8F0" stroke="#CDBCA6" stroke-width="1"/>';
      }
    }
    if (o.neck === "scarf") s += '<path d="M35 83 Q60 97 85 83 L86 90 Q60 105 34 90 Z" fill="#FF7A90" stroke="#C94B62" stroke-width="1.2"/>' +
      '<path d="M71 94 L80 92 L79 109 L71 110 Z" fill="#FF7A90" stroke="#C94B62" stroke-width="1.2"/>';
    if (o.neck === "medal") s += '<path d="M66 84 L74 96 M84 84 L76 96" stroke="#5B7BFF" stroke-width="3"/>' + emo("🏅", 75, 106, 13);
    // glasses
    if (o.eyes === "round") s += '<circle cx="47" cy="70" r="9.5" fill="rgba(255,255,255,.3)" stroke="#1B1D3D" stroke-width="2.2"/>' +
      '<circle cx="73" cy="70" r="9.5" fill="rgba(255,255,255,.3)" stroke="#1B1D3D" stroke-width="2.2"/><path d="M56.5 69 Q60 66 63.5 69" fill="none" stroke="#1B1D3D" stroke-width="2.2"/>';
    if (o.eyes === "hearts") s += '<path d="' + heart(47, 70, 9) + '" fill="#FF4F8B" opacity=".92" stroke="#C72C66" stroke-width="1.4"/>' +
      '<path d="' + heart(73, 70, 9) + '" fill="#FF4F8B" opacity=".92" stroke="#C72C66" stroke-width="1.4"/><path d="M56 68 L64 68" stroke="#C72C66" stroke-width="2"/>';
    if (o.eyes === "stars") s += '<polygon points="' + star(47, 70, 12, 5.5) + '" fill="#FFC53D" stroke="#D98E00" stroke-width="1.3" stroke-linejoin="round"/>' +
      '<polygon points="' + star(73, 70, 12, 5.5) + '" fill="#FFC53D" stroke="#D98E00" stroke-width="1.3" stroke-linejoin="round"/>';
    if (o.eyes === "shades") s += '<rect x="36" y="63" width="22" height="13" rx="5" fill="#1B1D3D"/><rect x="62" y="63" width="22" height="13" rx="5" fill="#1B1D3D"/>' +
      '<path d="M58 67 L62 67" stroke="#1B1D3D" stroke-width="2.4"/><path d="M40 66 L46 66 M66 66 L72 66" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>';
    // hats
    if (o.hat === "bow") s += emo("🎀", 84, 46, 24, ' transform="rotate(18 84 38)"');
    if (o.hat === "flowers") s += emo("🌸", 40, 46, 15) + emo("🌼", 60, 40, 15) + emo("🌸", 80, 46, 15);
    if (o.hat === "crown") s += emo("👑", 60, 44, 30);
    if (o.hat === "tophat") s += emo("🎩", 60, 42, 34);
    if (o.hat === "cap") s += emo("🧢", 60, 45, 32);
    if (o.hat === "grad") s += emo("🎓", 60, 43, 32);
    if (o.hat === "party") s += '<polygon points="60,4 47,40 73,40" fill="#FF9EC4" stroke="#C9567A" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M55 18 L66 22 M51 29 L70 34" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="5" r="5" fill="#FFD84D" stroke="#D9A400" stroke-width="1.2"/>';
    if (o.hat === "unicorn") s += '<polygon points="60,4 53,39 67,39" fill="#FFD84D" stroke="#D9A400" stroke-width="1.6" stroke-linejoin="round"/>' +
      '<path d="M55.5 30 L64.5 26 M57 21 L63 18.5 M58.3 13 L61.5 11.5" stroke="#D9A400" stroke-width="1.6"/>';
    s += '</g>';
    // front sparkle
    var A = { sparkles: "✨", hearts: "💕", stars: "⭐", butterflies: "🦋" }[o.aura];
    if (A) s += emo(A, 12, 38, 15) + emo(A, 109, 50, 13) + emo(A, 12, 104, 12);
    s += '</svg>';
    return s;
  }

  function badgeHTML(z) {
    var el = E[z - 1];
    if (!pu) {
      return '<div class="badge"><span class="b-num">' + z + '</span><span class="b-emo" aria-hidden="true">' + el[4] +
        '</span><span class="b-sym">' + el[0] + '</span><span class="b-mass">' + el[2] + '</span></div>';
    }
    return '<div class="badge pu-tile"><button type="button" class="pal-btn" aria-label="Say hi to ' + el[1] + '">%PAL%</button>' +
      '<span class="b-sym">' + el[0] + ' <small>' + z + '</small></span>' +
      '<button type="button" class="dress">👗 Dress</button></div>';
  }

  // ---- sound, sparkle bursts, speech bubbles, toasts
  var actx = null;
  function tone(freqs, dur, type) {
    if (!pu || !soundOn) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      var t0 = actx.currentTime;
      freqs.forEach(function (f, i) {
        var o = actx.createOscillator(), g = actx.createGain(), t = t0 + i * dur;
        o.type = type || "sine";
        o.frequency.setValueAtTime(f, t);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.08, t + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur * 1.8);
        o.connect(g); g.connect(actx.destination);
        o.start(t); o.stop(t + dur * 2);
      });
    } catch (e) {}
  }
  var SFX = {
    pop: function () { tone([660, 990], 0.06); },
    boing: function () { tone([330, 440, 587], 0.05, "triangle"); },
    sparkle: function () { tone([880, 1175, 1568, 2093], 0.07, "triangle"); },
    bloop: function () { tone([392, 262], 0.1); },
    plink: function () { tone([1319], 0.05, "triangle"); }
  };
  function burst(el, set) {
    if (reduceMotion || !el) return;
    var r = el.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    set = set || ["✨", "💖", "⭐", "🌸", "💜"];
    for (var i = 0; i < 9; i++) {
      var b = document.createElement("span"), a = Math.random() * Math.PI * 2, d = 40 + Math.random() * 50;
      b.className = "bit";
      b.textContent = set[i % set.length];
      b.style.left = x + "px"; b.style.top = y + "px";
      b.style.setProperty("--dx", f1(Math.cos(a) * d) + "px");
      b.style.setProperty("--dy", f1(Math.sin(a) * d - 20) + "px");
      b.style.setProperty("--rot", ((Math.random() * 80) - 40 | 0) + "deg");
      ZROOT.appendChild(b);
      setTimeout(function (n) { return function () { n.remove(); }; }(b), 950);
    }
  }
  var bubbleEl = null, bubbleTimer = 0;
  function say(anchor, text) {
    if (!anchor) return;
    if (bubbleEl) bubbleEl.remove();
    clearTimeout(bubbleTimer);
    var r = anchor.getBoundingClientRect();
    if (!r.width) return;
    var b = document.createElement("div");
    b.className = "bubble";
    b.textContent = text;
    ZROOT.appendChild(b);
    var bw = b.offsetWidth, bh = b.offsetHeight;
    var left = Math.max(8, Math.min(window.innerWidth - bw - 8, r.left + r.width / 2 - bw / 2));
    var top = r.top - bh - 8;
    if (top < 8) top = r.bottom + 8;
    b.style.left = (left + window.scrollX) + "px";
    b.style.top = (top + window.scrollY) + "px";
    bubbleEl = b;
    bubbleTimer = setTimeout(function () { if (bubbleEl === b) { b.remove(); bubbleEl = null; } }, 3400);
  }
  var toastTimer = 0;
  function toast(text) {
    var old = ZROOT.querySelector(".toast");
    if (old) old.remove();
    clearTimeout(toastTimer);
    var t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    t.textContent = text;
    ZROOT.appendChild(t);
    toastTimer = setTimeout(function () { t.remove(); }, 3000);
  }
  function lineFor(z) {
    var L = SAYS[E[z - 1][3]];
    return L[Math.floor(Math.random() * L.length)];
  }
  function palPoke(btn, z) {
    if (!z) return;
    var mv = MOVES[E[z - 1][3]] || "boing";
    btn.classList.remove("boing", "shake", "float", "lean");
    void btn.offsetWidth;
    btn.classList.add(mv);
    setTimeout(function () { btn.classList.remove(mv); }, 1400);
    say(btn, lineFor(z));
    SFX.boing();
  }
  function visiblePal() {
    var c = cards.filter(function (k) { return k.offsetParent !== null; })[0];
    return c ? c.querySelector(".pal-btn") : null;
  }

  // ---- progress and unlocks
  var lastStars = stars();
  function allItems() {
    var out = [];
    WARD.forEach(function (g) { g[2].forEach(function (it) { if (it[3] > 0) out.push([g[0], it]); }); });
    return out.sort(function (a, b) { return a[1][3] - b[1][3]; });
  }
  function iconOf(x) { return x[0] === "color" ? "🎨" : x[1][2]; }
  function puAfterShow(z, opts) {
    var now = stars();
    if (now > lastStars && pu) {
      var fresh = allItems().filter(function (x) { return x[1][3] > lastStars && x[1][3] <= now; });
      if (fresh.length) {
        toast("🎉 New for your pals: " + fresh.map(function (x) { return iconOf(x) + " " + x[1][1]; }).join(", ") + "!");
        SFX.sparkle();
      }
    }
    lastStars = now;
    if (!pu) return;
    renderCloset();
    if (!opts.quiet) {
      burst(cells[z - 1]);
      SFX.pop();
      var el = E[z - 1];
      setTimeout(function () { say(visiblePal(), "Hi, I'm " + el[1] + "! " + lineFor(z)); }, 60);
    }
  }

  // ---- the closet
  var closetPal = document.getElementById("z-closetPal");
  var wardrobe = document.getElementById("z-wardrobe");
  function renderCloset() {
    var z = current, el = z ? E[z - 1] : null, o = z ? outfitOf(z) : {}, n = stars();
    /* no element picked yet: no pal on the stage, and the clothes wait until one is picked */
    closetPal.hidden = !z;
    document.getElementById("z-randomOutfit").disabled = !z;
    document.getElementById("z-clearOutfit").disabled = !z;
    if (z) {
      closetPal.innerHTML = palSVG(z, o, ++palUid);
      closetPal.setAttribute("aria-label", "Say hi to " + el[1]);
      document.getElementById("z-closetName").innerHTML = el[4] + " " + el[1] + "<small>" + CATS[el[3]] + " · No. " + z + "</small>";
    } else {
      closetPal.innerHTML = "";
      document.getElementById("z-closetName").innerHTML = "👆 Pick a pal<small>Tap any element on the table</small>";
    }
    var nextItem = allItems().filter(function (x) { return x[1][3] > n; })[0];
    var prevNeed = 0;
    allItems().forEach(function (x) { if (x[1][3] <= n) prevNeed = x[1][3]; });
    var pt = document.getElementById("z-prizeText"), bar = document.getElementById("z-prizeBar");
    if (nextItem) {
      var left = nextItem[1][3] - n;
      pt.textContent = "⭐ " + n + " elements met. Meet " + left + " more to unlock " + iconOf(nextItem) + " " + nextItem[1][1] + "!";
      bar.style.width = Math.max(4, Math.round((n - prevNeed) / (nextItem[1][3] - prevNeed) * 100)) + "%";
    } else {
      pt.textContent = "🏆 You've met all 118 elements and unlocked everything!";
      bar.style.width = "100%";
    }
    var h = "";
    WARD.forEach(function (g) {
      var cur = o[g[0]] || g[2][0][0];
      h += '<div class="wgroup"><h4>' + g[1] + '</h4><div class="items">';
      g[2].forEach(function (it) {
        var locked = it[3] > n;
        var icon = g[0] === "color"
          ? '<i class="sw" style="background:' + (it[0] === "fam" ? "var(--c-" + (el ? el[3] : "un") + ")" : it[0] === "rainbow" ? "linear-gradient(135deg,#FFB3D1,#FFE98A,#9FEBD0,#B9A8FF)" : it[2]) + '"></i>'
          : '<span class="ic" aria-hidden="true">' + it[2] + '</span>';
        h += '<button type="button" class="item" data-cat="' + g[0] + '" data-id="' + it[0] + '" aria-pressed="' + (cur === it[0]) + '"' +
          (locked || !z ? " disabled" : "") + '>' + (locked ? '<span class="ic" aria-hidden="true">🔒</span>' : icon) + it[1] +
          (locked ? '<span class="lk">at ' + it[3] + ' ⭐</span>' : "") + '</button>';
      });
      h += '</div></div>';
    });
    wardrobe.innerHTML = h;
  }
  wardrobe.addEventListener("click", function (ev) {
    var b = ev.target.closest(".item");
    if (!b || b.disabled) return;
    var z = current;
    if (!z) return;
    var o = outfits[z] = outfits[z] || {};
    o[b.dataset.cat] = b.dataset.id;
    saveOutfits();
    show(z, { quiet: true });
    SFX.plink();
    burst(closetPal, ["✨", "💖", "⭐"]);
  });
  closetPal.addEventListener("click", function () { if (current) palPoke(closetPal, current); });
  document.getElementById("z-randomOutfit").addEventListener("click", function () {
    var z = current, n = stars(), o = {};
    if (!z) return;
    WARD.forEach(function (g) {
      var ok = g[2].filter(function (it) { return it[3] <= n; });
      o[g[0]] = ok[Math.floor(Math.random() * ok.length)][0];
    });
    outfits[z] = o;
    saveOutfits();
    show(z, { quiet: true });
    SFX.sparkle();
    burst(closetPal);
  });
  document.getElementById("z-clearOutfit").addEventListener("click", function () {
    if (!current) return;
    delete outfits[current];
    saveOutfits();
    show(current, { quiet: true });
    SFX.bloop();
  });
  var resetBox = document.getElementById("z-resetBox");
  function resetIdle() {
    resetBox.innerHTML = '<button type="button" class="linkish" id="z-resetBtn">Start fresh</button><span>Clears the stars, outfits and recipes on this device.</span>';
  }
  resetBox.addEventListener("click", function (ev) {
    var id = ev.target.id;
    if (id === "z-resetBtn") {
      resetBox.innerHTML = '<span>Clear everything and start from zero?</span><button type="button" class="btn small" id="z-resetYes">Yes, start fresh</button>' +
        '<button type="button" class="btn ghost small" id="z-resetNo">Keep everything</button>';
    } else if (id === "z-resetNo") {
      resetIdle();
    } else if (id === "z-resetYes") {
      met = {}; outfits = {}; found = {}; lastStars = 0;
      try { ["ppz-met", "ppz-outfits", "ppz-recipes"].forEach(function (k) { localStorage.removeItem(k); }); } catch (e) {}
      cells.forEach(function (c) { c.classList.remove("met"); });
      updateMet();
      if (current) show(current, { quiet: true }); else { showNone(); renderCloset(); }
      renderBook();
      resetIdle();
      toast("Fresh start! Go meet some elements. ⭐");
    }
  });
  resetIdle();

  // ---- the potion lab
  var SHELF = [1, 6, 7, 8, 9, 11, 12, 14, 16, 17, 20, 26];
  var RECIPES = [
    ["water", "Water", "💧", "H2O", { H: 2, O: 1 }, "Two hydrogens hugging one oxygen. More than half of your body is water!", "You drink it every day."],
    ["salt", "Table salt", "🧂", "NaCl", { Na: 1, Cl: 1 }, "Sodium and chlorine are both dangerous on their own, but together they make the salt on your fries!", "Sprinkle it on fries. A metal plus a green gas."],
    ["co2", "Carbon dioxide", "🥤", "CO2", { C: 1, O: 2 }, "The bubbles in fizzy drinks. You breathe it out, and plants breathe it in.", "The fizz in pop. You breathe it out."],
    ["o2", "Oxygen gas", "🌬️", "O2", { O: 2 }, "Oxygen atoms love to pair up. This is the oxygen in every breath you take.", "What you breathe in. Two of the same atom."],
    ["h2", "Hydrogen gas", "🎈", "H2", { H: 2 }, "Two hydrogens holding hands. It's the lightest gas in the universe.", "The lightest gas there is. Two of the same atom."],
    ["n2", "Nitrogen gas", "☁️", "N2", { N: 2 }, "Two nitrogens holding on super tight. Nearly four-fifths of the air is this.", "Most of the air. Two of the same atom."],
    ["o3", "Ozone", "🌍", "O3", { O: 3 }, "A layer of ozone high in the sky blocks a lot of the Sun's harmful UV rays.", "Earth's sunscreen, high in the sky. Three of the same atom."],
    ["ch4", "Methane", "🐄", "CH4", { C: 1, H: 4 }, "Cows burp lots of it, and it's the main gas in many kitchen stoves.", "Cow burps! One carbon and lots of hydrogen."],
    ["nh3", "Ammonia", "🧽", "NH3", { N: 1, H: 3 }, "The sharp smell in some glass cleaners, and a big part of plant fertilizer.", "A sharp-smelling cleaner. Nitrogen plus hydrogen."],
    ["sio2", "Sand", "🏖️", "SiO2", { Si: 1, O: 2 }, "Silicon dioxide. Most beach sand is made of it, and melting it makes glass.", "Most beach sand. Silicon plus oxygen."],
    ["rust", "Rust", "🔩", "Fe2O3", { Fe: 2, O: 3 }, "Iron slowly turns into this flaky orange-brown stuff when it gets wet.", "What iron turns into in the rain. Iron plus oxygen."],
    ["pyrite", "Fool's gold", "✨", "FeS2", { Fe: 1, S: 2 }, "Pyrite is so shiny and gold-coloured that miners got tricked!", "Shiny but not real gold. Iron plus sulfur."],
    ["chalk", "Chalk", "🐚", "CaCO3", { Ca: 1, C: 1, O: 3 }, "Calcium carbonate. Chalk, seashells, eggshells and pearls are all made of it.", "Chalk and seashells. Calcium, carbon and oxygen."],
    ["soda", "Baking soda", "🧁", "NaHCO3", { Na: 1, H: 1, C: 1, O: 3 }, "It gives off bubbles of gas that make cupcakes puff up.", "Makes cupcakes puffy. Sodium, hydrogen, carbon and oxygen."],
    ["h2o2", "Hydrogen peroxide", "🩹", "H2O2", { H: 2, O: 2 }, "Like water with one extra oxygen. It fizzes when it touches a scrape.", "Fizzes on scrapes. Like water with an extra oxygen."],
    ["epsom", "Epsom salt", "🛁", "MgSO4", { Mg: 1, S: 1, O: 4 }, "People dissolve it in warm baths to soak tired muscles.", "Bath salts. Magnesium, sulfur and oxygen."],
    ["naf", "Sodium fluoride", "🦷", "NaF", { Na: 1, F: 1 }, "Some toothpastes have it to help keep teeth strong.", "In some toothpaste. Sodium plus fluorine."],
    ["hcl", "Stomach acid", "🍕", "HCl", { H: 1, Cl: 1 }, "Hydrochloric acid. Your stomach makes it to help break down food.", "Helps your stomach digest pizza. Hydrogen plus chlorine."]
  ];
  var potList = [];
  var potEl = document.getElementById("z-pot"), brewEl = document.getElementById("z-brew");
  function zOf(sym) { for (var i = 0; i < E.length; i++) if (E[i][0] === sym) return i + 1; return 0; }
  function fmHTML(f) { return '<span class="fm">' + f.replace(/(\d+)/g, "<sub>$1</sub>") + '</span>'; }
  function atomsIn(r) { var n = 0; for (var k in r[4]) n += r[4][k]; return n; }
  document.getElementById("z-shelf").innerHTML = SHELF.map(function (z) {
    var el = E[z - 1];
    return '<button type="button" class="ing" data-z="' + z + '" style="--cat: var(--c-' + el[3] + ')" aria-label="Add a ' + el[1].toLowerCase() + ' atom">' +
      el[0] + '<span aria-hidden="true">' + el[4] + '</span></button>';
  }).join("");
  function renderPot() {
    potEl.innerHTML = potList.length
      ? potList.map(function (z) { return '<span class="chip-atom" style="--cat: var(--c-' + E[z - 1][3] + ')">' + E[z - 1][0] + '</span>'; }).join("")
      : '<p class="pot-empty">The cauldron is empty. Add some atoms!</p>';
    document.getElementById("z-mixBtn").disabled = !potList.length;
    document.getElementById("z-undoBtn").disabled = !potList.length;
    document.getElementById("z-emptyBtn").disabled = !potList.length;
  }
  function brewIdle() {
    brewEl.className = "brew";
    brewEl.innerHTML = '<span class="big" aria-hidden="true">🔮</span><h4>Your potion will appear here</h4><p>Try making water: 2 H and 1 O.</p>';
  }
  document.getElementById("z-shelf").addEventListener("click", function (ev) {
    var b = ev.target.closest(".ing");
    if (!b) return;
    if (potList.length >= 12) { toast("The cauldron is full! Mix it or empty it."); return; }
    potList.push(+b.dataset.z);
    renderPot();
    SFX.plink();
  });
  document.getElementById("z-undoBtn").addEventListener("click", function () { potList.pop(); renderPot(); });
  document.getElementById("z-emptyBtn").addEventListener("click", function () { potList = []; renderPot(); brewIdle(); });
  document.getElementById("z-mixBtn").addEventListener("click", function () {
    var counts = {};
    potList.forEach(function (z) { var sy = E[z - 1][0]; counts[sy] = (counts[sy] || 0) + 1; });
    var key = Object.keys(counts).sort().map(function (k) { return k + counts[k]; }).join("");
    var hit = RECIPES.filter(function (r) {
      return Object.keys(r[4]).sort().map(function (k) { return k + r[4][k]; }).join("") === key;
    })[0];
    potEl.classList.remove("mixing"); void potEl.offsetWidth; potEl.classList.add("mixing");
    setTimeout(function () {
      if (hit) {
        var isNew = !found[hit[0]];
        found[hit[0]] = 1;
        try { localStorage.setItem("ppz-recipes", JSON.stringify(found)); } catch (e) {}
        brewEl.className = "brew win";
        brewEl.innerHTML = '<span class="big" aria-hidden="true">' + hit[2] + '</span><h4>' + (isNew ? "You made " : "") + hit[1] + "! " + fmHTML(hit[3]) + '</h4><p>' + hit[5] + '</p>';
        SFX.sparkle();
        burst(potEl, [hit[2], "✨", "💖"]);
        potList = [];
        renderPot();
        renderBook();
      } else {
        var have = Object.keys(counts);
        var tip = RECIPES.filter(function (r) { return !found[r[0]] && have.some(function (k) { return r[4][k]; }); })[0] ||
          RECIPES.filter(function (r) { return !found[r[0]]; })[0];
        brewEl.className = "brew";
        brewEl.innerHTML = '<span class="big" aria-hidden="true">🙈</span><h4>Bloop! That didn’t make anything.</h4><p>' +
          (tip ? "Hint: " + tip[6] + " (" + atomsIn(tip) + " atoms)" : "Try a different mix!") + '</p>';
        SFX.bloop();
      }
    }, 450);
  });
  function renderBook() {
    var n = 0;
    document.getElementById("z-book").innerHTML = RECIPES.map(function (r) {
      if (found[r[0]]) {
        n++;
        return '<div class="rec found"><div class="re" aria-hidden="true">' + r[2] + '</div><b>' + r[1] + '</b>' + fmHTML(r[3]) + '</div>';
      }
      return '<div class="rec"><div class="re" aria-hidden="true">❓</div><b>???</b>' + r[6] + ' ' + atomsIn(r) + ' atoms.</div>';
    }).join("");
    document.getElementById("z-bookCount").textContent = n + " of " + RECIPES.length + " found";
  }
  renderPot(); brewIdle(); renderBook();

  // ---- the name speller
  var SYM = {};
  E.forEach(function (el, i) { SYM[el[0].toLowerCase()] = i + 1; });
  var spellIn = document.getElementById("z-spellIn");
  function spell(word) {
    var w = word.toLowerCase().replace(/[^a-z]/g, ""), n = w.length, best = new Array(n + 1);
    best[n] = { u: 0, t: 0 };
    for (var i = n - 1; i >= 0; i--) {
      var opts = [];
      if (SYM[w[i]] && best[i + 1]) opts.push({ u: best[i + 1].u, t: best[i + 1].t + 1, len: 1, z: SYM[w[i]] });
      if (i + 2 <= n && SYM[w.substr(i, 2)]) opts.push({ u: best[i + 2].u, t: best[i + 2].t + 1, len: 2, z: SYM[w.substr(i, 2)] });
      opts.push({ u: best[i + 1].u + 1, t: best[i + 1].t + 1, len: 1, z: 0, ch: w[i] });
      opts.sort(function (a, b) { return a.u - b.u || a.t - b.t; });
      best[i] = opts[0];
    }
    var out = [], j = 0;
    while (j < n) { out.push(best[j]); j += best[j].len; }
    return { parts: out, misses: n ? best[0].u : 0, text: w };
  }
  function renderSpell() {
    var r = spell(spellIn.value), tiles = document.getElementById("z-spellTiles"), msg = document.getElementById("z-spellMsg");
    tiles.innerHTML = r.parts.map(function (p, i) {
      var d = ' style="animation-delay:' + (i * 60) + 'ms' + (p.z ? '; --cat: var(--c-' + E[p.z - 1][3] + ')' : '') + '"';
      if (!p.z) return '<span class="stile miss"' + d + '><span class="s">' + p.ch.toUpperCase() + '</span><span class="e">?</span></span>';
      var el = E[p.z - 1];
      return '<button type="button" class="stile" data-z="' + p.z + '"' + d + ' aria-label="' + el[1] + '"><span class="n">' + p.z + '</span><span class="s">' + el[0] +
        '</span><span class="e" aria-hidden="true">' + el[4] + '</span></button>';
    }).join("");
    if (!r.text) msg.textContent = "Type something to spell it with elements!";
    else if (!r.misses) msg.textContent = "🎉 You can spell it with elements: " + r.parts.map(function (p) { return E[p.z - 1][0]; }).join(" · ");
    else msg.textContent = "Almost! No element can make the dashed letter" + (r.misses > 1 ? "s" : "") + ". Try a nickname or another word.";
  }
  spellIn.addEventListener("input", renderSpell);
  document.getElementById("z-spellTiles").addEventListener("click", function (ev) {
    var b = ev.target.closest(".stile[data-z]");
    if (!b) return;
    show(+b.dataset.z, { reveal: true });
    scrollToEl(play);
  });
  renderSpell();

  // ---- tabs, switches
  function pgTab(name) {
    Array.prototype.forEach.call(pg.querySelectorAll(".pg-panel"), function (p) { p.hidden = p.dataset.pg !== name; });
    Array.prototype.forEach.call(pg.querySelectorAll(".tab"), function (t) {
      if (t.dataset.pg === name) t.setAttribute("aria-current", "page"); else t.removeAttribute("aria-current");
    });
  }
  Array.prototype.forEach.call(pg.querySelectorAll(".tab"), function (t) {
    t.addEventListener("click", function () { pgTab(t.dataset.pg); SFX.plink(); });
  });
  var soundBtn = document.getElementById("z-soundBtn");
  function paintSound() {
    soundBtn.setAttribute("aria-pressed", soundOn ? "true" : "false");
    soundBtn.textContent = soundOn ? "🔊 Sounds on" : "🔇 Sounds off";
  }
  soundBtn.addEventListener("click", function () {
    soundOn = !soundOn;
    try { localStorage.setItem("ppz-sound", soundOn ? "1" : "0"); } catch (e) {}
    paintSound();
    SFX.plink();
  });
  var puBtn = document.getElementById("z-puBtn"), subEl = document.getElementById("z-sub");
  function setPU(on, init) {
    pu = on;
    ZROOT.classList.toggle("pu", on);
    puBtn.setAttribute("aria-pressed", on ? "true" : "false");
    puBtn.textContent = on ? "✨ Power-up on" : "✨ Power-up";
    pg.hidden = !on;
    subEl.textContent = on ? "Meet your element pals, mix potions, and learn how atoms work!" : "Meet the elements, mix them into potions, and find out how atoms work.";
    try { localStorage.setItem("ppz-pu", on ? "1" : "0"); } catch (e) {}
    if (current) show(current, { quiet: true });
    if (on) renderCloset();
    if (on && !init) {
      SFX.sparkle();
      burst(puBtn);
      setTimeout(function () { var el = E[current - 1]; if (el) say(visiblePal(), "Hi, I'm " + el[1] + "! Wanna dress me up? 👗"); }, 80);
    }
  }
  puBtn.addEventListener("click", function () { setPU(!pu); });
  pgTab("closet");
  paintSound();
  setPU(pu, true);

  // ---------- top-level sections ----------
  var VIEWS = ["zoo", "lab", "learn"];
  var navEl = ZROOT.querySelector(".views");
  var curView = "zoo";
  function goView(name, quiet) {
    if (VIEWS.indexOf(name) < 0) name = "zoo";
    var changed = name !== curView;
    curView = name;
    VIEWS.forEach(function (v) { document.getElementById("z-view-" + v).hidden = v !== name; });
    Array.prototype.forEach.call(navEl.querySelectorAll(".view-tab"), function (t) {
      if (t.dataset.view === name) t.setAttribute("aria-current", "page"); else t.removeAttribute("aria-current");
    });
    if (!quiet && changed && navEl.getBoundingClientRect().top < 0) {
      try { navEl.scrollIntoView({ block: "start" }); } catch (e) { navEl.scrollIntoView(true); }
    }
    if (bubbleEl) { bubbleEl.remove(); bubbleEl = null; }
  }
  Array.prototype.forEach.call(navEl.querySelectorAll(".view-tab"), function (t) {
    t.addEventListener("click", function () { goView(t.dataset.view); SFX.plink(); });
  });
  var startView = "zoo";
  goView(startView, true);

  // Legend chips spotlight one family at a time and explain it.
  Object.keys(CATS).forEach(function (k) {
    var c = document.createElement("button");
    c.type = "button";
    c.className = "chip";
    c.id = "z-chip-" + k;
    c.dataset.cat = k;
    c.setAttribute("aria-pressed", "false");
    c.style.setProperty("--cat", "var(--c-" + k + ")");
    c.innerHTML = "<i></i>" + CATS[k];
    c.addEventListener("click", function () { setFamily(active === k ? null : k); });
    legend.appendChild(c);
  });

  setFamily(null);
  showNone();
  LF.apps.zoo = { show: function () { if (bubbleEl) { bubbleEl.remove(); bubbleEl = null; } } };
})();
