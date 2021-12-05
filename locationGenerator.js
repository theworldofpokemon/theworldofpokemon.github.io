var setCommon;
var setUncommon;
var setRare;
var setMain;
var setLegend;
var MainLinePKMN;
var setLegend;

setDescriptor = [""];
prefix = [""];
suffix = [""];
HabitatType = [""];
DescriptorLineIndex = 0;
DescriptorLine = "";
lateVal = false;

var numCommon;
var numUncommon;
var numRare;
var setColor;
var common1_Link;
var common1_Image;
var common2_Link;
var common2_Image;
var uncommon1_Link;
var uncommon1_Image;
var uncommon2_Link;
var uncommon2_Image;
var uncommon3_Link;
var uncommon3_Image;
var rare1_Link;
var rare1_Image;
var main1_Link;
var main1_Image;
var legendOn = 1;

LocationName = "";

var PKMNList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew","Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking","Misdreavus","Unown","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid","Magby","Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh","Celebi","Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass","Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle","Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish","Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic","Castform","Kecleon","Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys","Turtwig","Grotle","Torterra","Chimchar","Monferno","Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia","Staraptor","Bidoof","Bibarel","Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos","Shieldon","Bastiodon","Burmy","Wormadam","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos","Gastrodon","Ambipom","Drifloon","Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow","Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly","Mime Jr.","Happiny","Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon","Skorupi","Drapion","Croagunk","Toxicroak","Carnivine","Finneon","Lumineon","Mantyke","Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus","Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar","Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier","Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour","Simipour","Munna","Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr","Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","Basculin","Sandile","Krokorok","Krookodile","Darumaka","Darmanitan","Maractus","Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed","Ferrothorn","Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect","Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder","Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","Flabébé","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","Meowstic","Honedge","Doublade","Aegislash","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher","Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","Pumpkaboo","Gourgeist","Bergmite","Avalugg","Noibat","Noivern","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion","Rowlet","Dartrix","Decidueye","Litten","Torracat","Incineroar","Popplio","Brionne","Primarina","Pikipek","Trumbeak","Toucannon","Yungoos","Gumshoos","Grubbin","Charjabug","Vikavolt","Crabrawler","Crabominable","Oricorio","Cutiefly","Ribombee","Rockruff","Lycanroc","Wishiwashi","Mareanie","Toxapex","Mudbray","Mudsdale","Dewpider","Araquanid","Fomantis","Lurantis","Morelull","Shiinotic","Salandit","Salazzle","Stufful","Bewear","Bounsweet","Steenee","Tsareena","Comfey","Oranguru","Passimian","Wimpod","Golisopod","Sandygast","Palossand","Pyukumuku","Type: Null","Silvally","Minior","Komala","Turtonator","Togedemaru","Mimikyu","Bruxish","Drampa","Dhelmise","Jangmo-o","Hakamo-o","Kommo-o","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Cosmog","Cosmoem","Solgaleo","Lunala","Nihilego","Buzzwole","Pheromosa","Xurkitree","Celesteela","Kartana","Guzzlord","Necrozma","Magearna","Marshadow","Poipole","Naganadel","Stakataka","Blacephalon","Zeraora","Meltan","Melmetal","Grookey","Thwackey","Rillaboom","Scorbunny","Raboot","Cinderace","Sobble","Drizzile","Inteleon","Skwovet","Greedent","Rookidee","Corvisquire","Corviknight","Blipbug","Dottler","Orbeetle","Nickit","Thievul","Gossifleur","Eldegoss","Wooloo","Dubwool","Chewtle","Drednaw","Yamper","Boltund","Rolycoly","Carkol","Coalossal","Applin","Flapple","Appletun","Silicobra","Sandaconda","Cramorant","Arrokuda","Barraskewda","Toxel","Toxtricity","Sizzlipede","Centiskorch","Clobbopus","Grapploct","Sinistea","Polteageist","Hatenna","Hattrem","Hatterene","Impidimp","Morgrem","Grimmsnarl","Obstagoon","Perrserker","Cursola","Sirfetch'd","Mr. Rime","Runerigus","Milcery","Alcremie","Falinks","Pincurchin","Snom","Frosmoth","Stonjourner","Eiscue","Indeedee","Morpeko","Cufant","Copperajah","Dracozolt","Arctozolt","Dracovish","Arctovish","Duraludon","Dreepy","Drakloak","Dragapult","Zacian","Zamazenta","Eternatus","Kubfu","Urshifu","Zarude","Regieleki","Regidrago","Glastrier","Spectrier","Calyrex"]


var calmPrefix = ["Silk","Sap","Dew","Mist","Crook","Clear","Stil","Wish","Green","Wild","Short","Long","Snake","Middle","Mid","Little","Crystal","Gem","Sleepy","Sparkle","Glitter","Shimmer","Haze","Fog","Pure","Flash","Buzz","Under","Hidden","Sweet","Drizzle","Flutter","Moon","Sun","Star","Murk","Cloak","Quiet","Charm","Yellow","Pink","Violet","Rose","Scatter","Lily","First","Jewel","Dawn","Dusk","Royal","Timber","Cherry","Double","Twin","Sticky","Hollow","Flip","Mauve","Mild"];

var calmSuffix = ["soil","leaf","petal","bush","brush","twig","vine","root","bloom","rush","stripe","pin","brook","breeze","wind","blossom","bark","spook","fly","puddle","fall","sneak","crawl","land","song","berry","fruit","weed","beat","patter","string","twine","grain","reed","wheel","bow","road","path","way","swept","blow","sweep","hill","nut","frond","spark","curl","mint","herb","patter","vale","heart","beam","spore","plank","orb","spur","fork","tail","whine","will","burst","blown","dash","sash","cone","mask"];

var angryPrefix = ["Pebble","Sheer","Blaze","Sear","Shatter","Frost","Crash","Speckle","Flash","Rogue","Hard","Grizzle","Shine","Potter","Sizzle","Crackle","Heat","Crush","Strong","Twist","Iron","Blood","Skull","Red","Hale","Crimson","Gold","Silver","Quick","Strong","Moon","Sun","Dread","Rage","Copper","Brass","Glass","Bronze","Bitter","Jewel","Thick","Dry","Six","Seven","Eight","Nine","Last","Razor","Dawn","Dusk","Charge","Scour","Brave","Oil","Blister","Rust","Smoke","Hallow","Poor","Brittle","Tar","Coal","Pummel","Needle"];

var angrySuffix = ["sand","steel","rock","stone","brick","brink","bite","burn","bark","bone","spine","break","claw","glint","sheen","glare","crack","tusk","tooth","scale","rush","bolt","sink","grasp","grip","hold","land","wail","road","path","way","slab","carve","shock","cloak","swept","blow","horn","sweep","hill","flash","spire","spark","hammer","crush","dome","blade","hole","home","vale","eye","heart","kiln","curse","toil","shale","slate","boil","scourge","stake","cross","spur","fork","fort","tine","scrape","scrap","maw","jaw","rash","gash","craw","flare","flame","knock","point","cone","mask","scorn"];

var waterPrefix = ["Pebble","Blue","Shiver","Thunder","Hale","Moon","Sun","Star","Wander","Jewel","Bitter","Gem","Reaver","Drift","Sunny","Shimmer","Tide","Dread","Crystal","Iron","Quiet","Wild","Torrent","Mist","Ash","Silver","Gold","Bell","Jade","Gray","Pink","Copper","Salt","Shimmer","Dark","Last","First","Sweet","Dawn","Dusk","Royal","Scour","Brave","Mystic","Blind","Oil","Kelp","Rust","Double","Teal","Smoke","Hallow","Frost","Coal","Ink","Ruby","Amber"];

var waterSuffix = ["sand","deep","brink","rush","breeze","wind","fall","song","west","east","north","south","crash","wave","calm","chill","storm","quick","bank","flow","end","wail","cork","spray","sting","brine","sail","cry","cloak","swept","blow","sweep","ripple","speed","eye","heart","bubble","shale","slate","glass","shell","roil","boil","slick","scourge","plank","float","shadow","brew","stake","cross","orb","drop","sponge","coral","roll","maw","jaw","rash","gash","foam","turn","will","melt","blown","drip","broil","cone","mask","scorn"];

//FOREST (1)
var ForestCommon = ["Caterpie","Weedle","Pidgey","Hoothoot","Ledyba","Spinarak","Hoppip","Poochyena","Wurmple","Seedot","Starly","Pidove","Sewaddle","Venipede","Bunnelby","Scatterbug","Yungoos","Skwovet","Rookidee","Blipbug","Nickit"];
ForestUncommon = ["Paras", "Venonat", "Meowth", "Mankey", "Gastly", "Drowzee", "Exeggcute", "Aipom", "Murkrow", "Misdreavus", "Pineco", "Snubbull", "Sudowoodo", "Teddiursa", "Stantler", "Shroomish", "Slakoth", "Nincada", "Skitty", "Volbeat & Illumise", "Swablu", "Duskull", "Burmy", "Combee", "Pachirisu", "Cherubi", "Buneary", "Glameow", "Stunky", "Chatot", "Carnivine", "Pansage","Pansear","Panpour", "Woobat", "Timburr", "Cottonee", "Petilil", "Deerling", "Emolga", "Karrablast", "Foongus", "Joltik", "Pancham", "Phantump", "Crabrawler", "Rockruff", "Morelull", "Stufful", "Komala", "Togedemaru","Applin","Jigglypuff"];
var ForestRare = ["Bulbasaur","Pikachu","Farfetch'd","Lickitung","Chansey","Scyther","Pinsir","Ditto","Eevee","Togepi","Wynaut","Gligar","Smeargle","Treecko","Ralts","Kecleon","Turtwig","Munchlax","Snivy","Audino","Throh","Sawk","Zorua","Noibat","Rowlet","Passimian","Morpeko","Indeedee"];

var ForestCommon_L = ["Butterfree","Beedrill","Pidgeotto","Noctowl","Ledian","Ariados","Skiploom","Mightyena","Beautifly","Dustox","Nuzleaf","Staravia","Tranquill","Swadloon","Whirlipede","Diggersby","Vivillon","Gumshoos","Greedent","Corvisquire","Dottler","Thievul"];
ForestUncommon_L = ["Parasect", "Venomoth", "Persian", "Primeape", "Haunter", "Hypno", "Exeggutor", "Ambipom", "Murkrow", "Misdreavus", "Pineco", "Granbull", "Sudowoodo", "Ursaring", "Stantler", "Breloom", "Vigoroth", "Ninjask", "Delcatty", "Volbeat & Illumise", "Altaria", "Dusclops", "Mothim", "Wormadam","Combee", "Pachirisu", "Cherrim", "Lopunny", "Purugly", "Skuntank", "Chatot", "Carnivine", "Simisage","Simisear","Simipour", "Swoobat", "Gurdurr", "Whimsicott", "Lilligant", "Sawsbuck", "Emolga", "Escavalier", "Amoonguss", "Galvantula", "Pangoro", "Trevenant", "Lycanroc", "Shiinotic", "Bewear", "Komala", "Togedemaru","Wigglytuff"];
var ForestRare_L = ["Ivysaur","Raichu","Farfetch'd","Lickilicky","Blissey","Scizor","Pinsir","Ditto","Eevee","Togetic","Wobbuffet","Gliscor","Smeargle","Grovyle","Kirlia","Kecleon","Grotle","Snorlax","Servine","Audino","Throh","Sawk","Zoroark","Noivern","Dartrix","Passimian","Morpeko","Indeedee","Flapple","Appletun"];


var ForestDescriptor = ["This forest ", "This wood ", "This thicket "];
var ForestType = ["Forest","Woods","Thicket"];

var ForestMain = ["is home to a swarm of irritable Beedrill.",
"is where Dustox come in the thousands to mate.",
"is home to a swarm of surprisingly hostile Beautifly.",
"is home to a peaceful swarm of Butterfree.",
"is actually teeming with Ditto, though it may be hard to tell at first.",
"is painted all over by the numerous Smeargle that dwell here.",
"is ruled by a regal Serperior.",
"is watched from the shadows by an elusive Decidueye.",
"is guarded by an enormous Torterra and the Pokémon that dwell on its back.",
"is watched over from afar by a mystical Delphox.",
"is protected by an agile Sceptile.",
"houses a colony of young Ralts somewhere within, protected by valiant Gardevoir and Gallade.",
"houses competing bands of Throh and Sawk.",
"is home to an enormous Wynaut and Wobbuffet colony.",
"is protected by a burly, but honorable Pangoro.",
"is filled with Emolga leaping from treetop to treetop; though they aren't aggressive, they can be a bit careless and sometimes glide into travelers with a surprised shock.",
"is protected by a tricky Shiftry.",
"is home to many different kinds of Vivillon for an unknown reason.",
"is home to a hidden colony of Pikachu.",
"is wrapped in electrified webs thanks to numerous Galvantula.",
"is home to an enormous, long-slumbering Snorlax.",
"is home to a territorial herd of Sawsbuck, whose leader has enormous horns.",
"is the home of a large herd of Stantler that keep themselves hidden through illusions.",
"is made up of many trees that seem to just barely wiggle in the wind...",
"is home to a hibernating Ursaring about to emerge from its slumber.",
"houses a bustling hive of Combee led by a powerful Vespiquen.",
"is prowled by a pack of territorial Mightyena.",
"is home to a menacing Bewear that seems to love giving “hugs” to travelers.",
"is said to be protected by a benevolent Togekiss.",
"is a haven for Farfetch'd, who have been hunted out of nearby areas by poachers.",
"seems to be a relic of prehistoric times, with ancient Aerodactyl still dwelling here.",
"is home to a flock of Chatot that confuse travelers by mimicking the voices of their companions.",
"is filled with energetic Cherrim in the springtime, turning the treetops a vibrant pink hue.",
"is home to an enormous Crobat said to only emerge on moonless nights.",
"is home to many Eevee, and its mystical properties seem to allow them to evolve in many different ways.",
"is home to a voracious Lickilicky that will stop at nothing to devour a traveler's food once it gets even a taste.",
"is full of mild-mannered Wormadam hanging from the tree branches; if not bothered, they will likely leave you alone.",
"is booby-trapped with electrified furballs, courtesy of the local Pachirisu; these furballs often indicate food storages, however.",
"is home to a thuggish Crabrawler that is bullying smaller Pokémon away from plentiful Berry trees.",
"is home to a flock of wary Farfetch'd who guard a safe haven against poachers.",
"is home to an grossly oversized Greedent that has its eye on any and all Berries passing travelers may have on hand.",
"is the domain of a rogue Corviknight who dislikes humans after a traumatic incident as a flying taxi.",
"is the lair of a small, but superintelligent Orbeetle that seems to have hatched a nefarious plot to take over the entire region.",
"is home to a family of Thievul and Nickit who are expertly skilled at working together to fool campers out of their supplies.",
"is home to a bushel of Flapple that pelt travelers with apples from above as they pass by.",
"is home to a bushel of Appletun whose sticky nectar is likely to attract plenty of insects.",
"is home to a smug Sirfetch'd who believes it cannot be defeated.",
"is currently being terrorized by a hungry Morpeko who will not let anything get in between it and its food.",
"is protected by an enormous, no-nonsense Wigglytuff."
];

var ForestMainPKMN = ["Beedrill","Dustox","Beautifly","Butterfree","Ditto","Smeargle","Serperior","Decidueye","Torterra","Delphox","Sceptile","Ralts","Throh","Wobbuffet","Pangoro","Emolga","Shiftry","Vivillon","Pikachu","Galvantula","Snorlax","Sawsbuck","Stantler","Sudowoodo","Ursaring","Vespiquen","Mightyena","Bewear","Togekiss","Farfetch'd","Aerodactyl","Chatot","Cherrim","Crobat","Eevee","Lickilicky","Wormadam","Pachirisu","Crabrawler","Farfetch'd","Greedent","Corviknight","Orbeetle","Thievul","Flapple","Appletun","Sirfetch'd","Morpeko","Wigglytuff"];

var ForestLegend = ["Mew","Celebi","Cresselia","Darkrai","Virizion","Xerneas","Kartana","Zacian", "Zamazenta"];

//JUNGLE (2)
var JungleCommon = ["Caterpie","Oddish","Venonat","Mankey","Bellsprout","Ledyba","Pansage","Pansear","Panpour","Scatterbug","Pikipek","Grubbin","Bounsweet"];
var JungleUncommon = ["Ekans","Drowzee","Exeggcute","Tangela","Natu","Aipom","Chatot","Croagunk","Purrloin","Fomantis","Cufant","Slakoth"];
var JungleRare = ["Bulbasaur","Scyther","Kangaskhan","Kecleon","Tropius","Heatmor","Durant","Litten","Oranguru","Passimian","Grookey"];

var JungleCommon_L = ["Butterfree","Gloom","Venomoth","Primeape","Weepinbell","Ledian","Simisage","Simisear","Simipour","Vivillon","Trumbeak","Charjabug","Steenee","Vigoroth"];
var JungleUncommon_L = ["Arbok","Hypno","Exeggutor","Tangela","Xatu","Ambipom","Chatot","Toxicroak","Liepard","Lurantis","Copperajah"];
var JungleRare_L = ["Ivysaur","Scizor","Kangaskhan","Kecleon","Tropius","Heatmor","Durant","Torracat","Oranguru","Passimian","Thwackey"];


var JungleDescriptor = ["This jungle ","This tangle ", "This rainforest ", "This tropic ","This wilderness "];
var JungleType = ["Jungle","Tangle","Rainforest","Tropics","Wilds"];

var JungleMain = ["is watched over by an elderly, but powerful, Venusaur.",
"is roved by a pack of wild Scyther.",
"is actually teeming with wild Kecleon, though they stay in hiding most of the time.",
"supports a huge herd of docile Tropius that enjoy giving fruit to weary travelers.",
"is home to an enormous Durant colony, and the Heatmor that prey on them.",
"is infamous for a rambunctious, powerful Incineroar that dwells in it.",
"is home to two rival troops of Passimian.",
"is supposedly home to a mystical, wise, Oranguru that has learned how Poké Balls work.",
"is home to an enormous colony of Aipom and Ambipom.",
"is stalked by a stealthy Lurantis.",
"is home to a colony of sneaky--and poisonous--Croagunk and Toxicroak.",
"is home to a large colony of naive Tangela, watched over by a powerful Tangrowth.",
"is home to a huge traveling forest of Exeggutor.",
"is known to locals for a wild Hypno that supposedly lures travelers into its den.",
"is home to an extremely aggressive colony of Mankey and Primeape.",
"is home to one of the largest Victreebel colonies known to man, dwelling in its dense center.",
"is the prime hunting territory of a powerful Vikavolt and its Charjabug allies.",
"is prowled by a very, very tricky Liepard.",
"is home to an enormous Oddish colony, keeping intruders far away through the overpowering stench of Gloom.",
"is inhabited by a trio of Simisage, Simisear, and Simipour who work together to challenge travelers trying to pass through.",
"is currently being terrorized by an irate mother Kangaskhan who has lost track of her child.",
"rumbles with the sound of Trumbeak calls; they seem to be heralding the approach of their leader Toucannon.",
"seems to be a relic of prehistoric times, with ancient Cranidos and Rampardos still dwelling here.",
"seems to be a relic of prehistoric times, with ancient Archen and Archeops still dwelling here.",
"seems to be a relic of prehistoric times, with ancient Tyrant and Tyrantrum still dwelling here.",
"rumbles with the drumming of a guardian Rillaboom.",
"is home to a herd of Copperajah who are very protective of one another.",
"is protected by an imposing Tsareena who rules with an iron heel.",
"houses a Slakoth colony in its center, led by an enormous Slaking."
];

var JungleMainPKMN = ["Venusaur","Scyther","Kecleon","Tropius","Heatmor","Incineroar","Passimian","Oranguru","Aipom","Lurantis","Croagunk","Tangrowth","Exeggutor","Hypno","Mankey","Victreebel","Vikavolt","Liepard","Oddish","Simisage","Kangaskhan","Toucannon","Cranidos","Archen","Tyrunt","Rillaboom","Copperajah","Tsareena","Slakoth"];

var JungleLegend = ["Mew","Celebi","Latias","Latios","Virizion","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Buzzwole","Zarude"];

//WOODLAND (3)
var WoodlandCommon = ["Weedle","Paras","Venonat","Sentret","Hoothoot","Ledyba","Spinarak","Murkrow","Zigzagoon","Seedot","Pansage","Venipede","Fletchling","Grubbin","Morelull","Skwovet","Rookidee","Nickit"];
var WoodlandUncommon = ["Misdreavus","Houndour","Slakoth","Nincada","Duskull","Chingling","Stunky","Cottonee","Petilil","Minccino","Deerling","Litwick","Spritzee","Swirlix","Phantump","Hattrem","Morgrem"];
var WoodlandRare = ["Scyther","Yanma","Zorua","Rowlet"];

var WoodlandCommon_L = ["Beedrill","Parasect","Venomoth","Furret","Noctowl","Ledian","Ariados","Honchkrow","Linoone","Nuzleaf","Simisage","Whirlipede","Fletchinder","Charjabug","Shiinotic","Greedent","Corvisquire","Thievul"];
var WoodlandUncommon_L = ["Misdreavus","Houndoom","Vigoroth","Ninjask","Dusclops","Chimecho","Skuntank","Whimsicott","Lilligant","Cinccino","Sawsbuck","Lampent","Aromatisse","Slurpuff","Trevenant","Hattrem","Morgrem"];
var WoodlandRare_L = ["Scizor","Yanmega","Zoroark","Dartrix","Grimmsnarl","Hatterene"];

var WoodlandDescriptor = ["This woodland ","This tangle ", "This wood ", "This grove ", "This glen ", "This weald ","This hollow "];
var WoodlandType = ["Woodland","Tangle","Woods","Grove","Glen","Weald","Hollow"];

var WoodlandMain = ["is watched over from the shadows by a stealthy Decidueye.",
"is stalked by a pack of cunning Zoroark.",
"is the prime hunting territory of a powerful Yanmega.",
"is the prime hunting territory of a powerful Scolipede.",
"is overseen by a motherly Leavanny and her children.",
"is home to a pack of wild Scyther.",
"is protected by a forest of Trevenant who despise trespassers.",
"is swarming with mischievous Cottonee and Whimsicott.",
"is haunted by a trio of mysterious Mismagius.",
"is watched over by an ominous Dusknoir and its Dusclops patrollers.",
"is home to a giant colony of Morelull and Shiinotic, who seem intent of entrancing all that they come across.",
"houses the nest of an enormous Ariados colony.",
"is home to a swarm of irritable Beedrill.",
"alights with an enormous swarm of Ledian on starry nights.",
"is menaced by a particularly aggressive pack of Houndoom.",
"houses a Slakoth colony in its center, led by an enormous Slaking.",
"is the home base of a powerful Honchkrow and its Murkrow cronies.",
"is full of trees housing explosive Pineco and Forretress!",
"is about to burst full with Nincada emerging from beneath the earth.",
"is the site of a territorial dispute between a rival Pinsir and a Heracross.",
"is enveloped in an intoxicating aroma thanks to a large flock of Spritzee and Aromatisse.",
"is home to an energetic pack of Swirlix and Slurpuff that are drawn to anything even slightly sugary.",
"is home to a giant Amoonguss colony.",
"seems to have been largely overtaken by a swarm of mindless Paras and Parasect.",
"is currently being terrorized by a neurotic Cinccino that detests filth and wants to keep it absolutely spotless.",
"is a hot spot for Combee keepers, who are currently under siege from a swarm of hungry Mothim.",
"is the territory of a particularly putrid Skuntank, whose odor is driving other Pokémon out of the area.",
"is filled with skittish Shroomish in the undergrowth that will release clouds of toxic spores if startled.",
"is filled with toxic scales scattered from above by flapping Venomoth.",
"is home to a wizened old Noctowl that locals revere as a mystical sage.",
"is swarming with Ninjask feasting voraciously on tree sap; they seem to not want to be disturbed.",
"is home to a once-thriving group of Petilil and Lilligant; however, deteriorating soil quality due to the local factory is forcing them to find a new home.",
"seems to be a relic of prehistoric times, with ancient Shieldon and Bastiodon still dwelling here.",
"is home to an grossly oversized Greedent that has its eye on any and all Berries passing travelers may have on hand.",
"is the domain of a rogue Corviknight who dislikes humans after a traumatic incident as a flying taxi.",
"is home to a family of Thievul and Nickit who are expertly skilled at working together to fool campers out of their supplies.",
"is terrorized by Morgrem and their Grimmsnarl leader.",
"is policed by Hattrem, with a mysterious Hatterene dwelling in its center."
];

var WoodlandMainPKMN = ["Decidueye","Zoroark","Yanmega","Scolipede","Leavanny","Scyther","Trevenant","Cottonee","Mismagius","Dusknoir","Morelull","Ariados","Beedrill","Ledian","Houndoom","Slakoth","Honchkrow","Pineco","Nincada","Pinsir","Spritzee","Swirlix","Amoonguss","Paras","Cinccino","Mothim","Skuntank","Shroomish", "Venomoth", "Noctowl", "Ninjask", "Petilil", "Shieldon", "Greedent", "Corviknight", "Thievul", "Morgrem", "Hattrem"];

var WoodlandLegend = ["Mew","Celebi","Shaymin","Virizion","Xerneas", "Zacian", "Zamazenta"];

//FIELD (4)
var FieldCommon = ["Pidgey","Rattata","Sentret","Mareep","Hoppip","Sunkern","Zigzagoon","Taillow","Swablu","Starly","Kricketot","Patrat","Lillipup","Bunnelby","Fletchling","Flabébé","Blipbug","Gossifleur","Nickit","Wooloo","Yamper"];
var FieldUncommon = ["Vulpix","Jigglypuff","Meditite","Plusle & Minun","Volbeat & Illumise","Roselia","Shinx","Karrablast","Foongus","Litleo","Skiddo","Espurr","Spritzee","Swirlix","Dedenne","Pumpkaboo","Oricorio","Cutiefly","Comfey","Togedemaru","Milcery"];
var FieldRare = ["Electabuzz","Snivy","Tepig","Chespin","Hawlucha","Morpeko","Minior"];

var FieldCommon_L = ["Pidgeotto","Raticate","Furret","Flaaffy","Skiploom","Sunflora","Linoone","Swellow","Altaria","Staravia","Kricketune","Watchog","Herdier","Diggersby","Fletchinder","Floette","Dottler","Eldegoss","Thievul","Dubwool","Boltund"];
var FieldUncommon_L = ["Ninetales","Wigglytuff","Medicham","Plusle & Minun","Volbeat & Illumise","Roselia","Luxio","Escavalier","Amoonguss","Pyroar","Gogoat","Meowstic","Aromatisse","Slurpuff","Dedenne","Gourgeist","Oricorio","Ribombee","Comfey","Togedemaru","Alcremie","Minior"];
var FieldRare_L = ["Electivire","Servine","Pignite","Quilladin","Hawlucha","Morpeko","Roserade"];

var FieldDescriptor = ["This field ","This meadow ","This glen ","This clearing ","This garden ","This valley ","This glade ", "This vale ","This hill "];
var FieldType = ["Field","Meadow","Glen","Clearing","Garden","Valley","Glade","Vale","Hill"];

var FieldMain = ["is in the territory of a pride of Luxray.",
"and its Pokémon are protected by a guardian Stoutland.",
"is home to a giant Amoonguss colony.",
"is terrorized by band of rogue Electabuzz, ruled by an Electivire.",
"is the grazing territory of a Gogoat herd.",
"is in fact a giant patch of Pumpkaboo and Gourgeist.",
"is filled with the plaintive cries of procession of wailing Gourgeist at dusk.",
"is menaced by a rogue wild Emboar.",
"is ruled by a regal Serperior.",
"is protected by a guardian Chesnaught.",
"is a sacred place for dancing Oricorio, who gather here to show off their unique dancing styles.",
"rings with the beautiful melody of a majestic Altaria, soaring in the clouds above.",
"is curated by a guardian Florges who will become enraged if its flowers are so much as stepped upon.",
"is home to many growing Budew and Roselia, and is protected by a guardian Roserade.",
"is where Volbeat swarm in an attempt to court single Illumise.",
"is the prime hunting territory of a beautiful Pidgeot.",
"is the prime hunting territory of a powerful Staraptor.",
"is the prime hunting territory of a swift Talonflame.",
"is protected by an enormous, no-nonsense Wigglytuff.",
"is home to a maestro Kricketune and its Kricketot orchestra.",
"is home to a flock of Mareep and Flaaffy, watched over carefully by a powerful Ampharos.",
"is absolutely full of Sunflora that burst to life in light, but stop moving entirely when clouds obscure the sun or when night falls.",
"is aromatic and pleasant to be in thanks to the large numbers of Comfey.",
"is where many migrating Hoppip, Skiploom, and Jumpluff stop by to rest.",
"is the territory of a competitive Hawlucha that is raring for a worthy challenger.",
"is the lair of a small, but superintelligent Orbeetle that seems to have hatched a nefarious plot to take over the entire region.",
"is home to a family of Thievul and Nickit who are expertly skilled at working together to fool campers out of their supplies.",
"is filled with cotton as Eldegoss drift in the breeze.",
"is where a flock of runaway Wooloo were last seen rolling off towards.",
"is currently home to Dubwool performing displays of bravado to show off to prospective mates.",
"is a haven for stray Yamper who ran away from abusive owners.",
"is home to all sorts of different flavors of Alcremie.",
"is currently being terrorized by a hungry Morpeko who will not let anything get in between it and its food.",
"is home to a gutsy but hurt Swellow that seems determined to ignore its pain; it looks like it will need help if it is going to last much longer, but it is too prideful to accept aid.",
"is home to a pack of industrious Diggersby that seem to be terraforming the area.",
"is where Minior land on nights of meteor showers."
];

var FieldMainPKMN = ["Luxray","Stoutland","Amoonguss","Electivire","Gogoat","Pumpkaboo","Gourgeist","Emboar","Serperior","Chesnaught","Oricorio","Altaria","Florges","Roserade","Volbeat","Pidgeot","Staraptor","Talonflame","Wigglytuff","Kricketune","Ampharos","Sunflora","Comfey","Hoppip","Hawlucha","Orbeetle","Thievul","Eldegoss","Wooloo","Dubwool","Yamper","Alcremie","Morpeko","Swellow","Diggersby","Minior"];

var FieldLegend = ["Mew","Raikou","Celebi","Shaymin","Victini","Tornadus","Thundurus","Virizion","Xerneas","Zeraora"];

//GRASSLAND (5)
var GrasslandCommon = ["Pidgey","Rattata","Nidoran","Doduo","Sentret","Poochyena","Zigzagoon","Taillow","Patrat","Pidove","Yungoos","Wooloo","Yamper"];
var GrasslandUncommon = ["Ekans","Sandshrew","Oddish","Growlithe","Ponyta","Drowzee","Rhyhorn","Tangela","Tauros","Phanpy","Miltank","Electrike","Gulpin","Purrloin","Blitzle","Bouffalant","Vullaby","Mudbray","Cufant"];
var GrasslandRare = ["Farfetch'd","Scyther","Chikorita","Cyndaquil","Girafarig","Torchic","Zangoose","Seviper","Chimecho","Snivy","Tepig","Fennekin","Litten","Scorbunny","Toxel","Stonjourner","Morpeko","Sirfetch'd"];

var GrasslandCommon_L = ["Pidgeotto","Raticate","Nidorina & Nidorino","Dodrio","Furret","Mightyena","Linoone","Swellow","Watchog","Tranquill","Gumshoos","Dubwool","Boltund"];
var GrasslandUncommon_L = ["Arbok","Sandslash","Gloom","Arcanine","Rapidash","Hypno","Rhydon","Tangela","Tauros","Donphan","Miltank","Manectric","Swalot","Liepard","Zebstrika","Bouffalant","Vullaby","Mudsdale","Copperajah"];
var GrasslandRare_L = ["Farfetch'd","Scizor","Bayleef","Quilava","Girafarig","Combusken","Zangoose","Seviper","Chimecho","Tangrowth","Servine","Pignite","Mandibuzz","Braixen","Torracat","Raboot","Toxtricity","Stonjourner","Morpeko","Sirfetch'd"];

var GrasslandDescriptor = ["This grassland ", "This savanna ", "This plain ", "This prairie ", "This steppe ", "This veld ", "This pasture "];
var GrasslandType = ["Grassland","Savanna","Plains","Prairie","Steppe","Veld","Pasture"];

var GrasslandMain = ["is menaced by a rogue wild Emboar.",
"is ruled by a regal Serperior.",
"is protected by a guardian Chesnaught.",
"is watched over from afar by a mystical Delphox.",
"is defended by a territorial Typhlosion.",
"is kept safe by an experienced Blaziken.",
"is the battleground between bitterly-rivaled Zangoose and Seviper.",
"is home to a herd of easily-spooked Girafarig.",
"is home to a herd of young Mudbray and their protective Mudsdale parents.",
"is home to a herd of easily-irritated Zebstrika.",
"is home to a herd of aggressive Bouffalant.",
"is in the territory of a pride of wary Luxray.",
"is in the territory of a pride of arrogant Pyroar.",
"is in the territory of a pride of unconcerned Manectric.",
"is terrorized by band of rogue Electabuzz, ruled by an Electivire.",
"is home to a herd of short-tempered Tauros and more mild-mannered Miltank.",
"rumbles with the sound of a distant, but fast-approaching, herd of rolling Donphan.",
"is infamous for being the home of a large colony of Gulpin and Swalot; travelers rarely venture into its heart and return.",
"is home to a herd of galloping Ponyta and Rapidash.",
"is home to a lumbering herd of easily-angered Rhyhorn.",
"is avoided by locals, as it is teeming with hissing Ekans and Arbok.",
"is protected by a blindingly-fast Arcanine.",
"is home to a colony of extremely-skittish Sentret.",
"houses an enormous colony of Patrat and Watchog with an extremely sophisticated alarm system.",
"seems to be overtaken by an incredible number of overgrown Raticate.",
"is the turf of a large family of Nidoran, guarded by their protective parents and older siblings.",
"is being overrun by invasive Yungoos, who have thrown its ecological balance into chaos.",
"is currently being terrorized by a flock of fearless Dodrio who seem to have a grudge against humanity itself.",
"is the training ground for a skilled Cinderace.",
"is where a flock of runaway Wooloo were last seen rolling off towards.",
"is a haven for stray Yamper who ran away from abusive owners.",
"is where Boltund from across the region are trained to herd livestock.",
"blares with the sound of a strumming Toxtricity who is looking for a good fight.",
"is home to a smug Sirfetch'd who believes it cannot be defeated.",
"is where, at a certain time of year, Stonjourner from around the world will congregate to form a circle; something mysterious is said to occur at the circle's center.",
"is currently being terrorized by a hungry Morpeko who will not let anything get in between it and its food.",
"is home to a herd of Copperajah who are very protective of one another."
];

var GrasslandMainPKMN = ["Emboar","Serperior","Chesnaught","Delphox","Typhlosion","Blaziken","Zangoose","Girafarig","Mudbray","Zebstrika","Bouffalant","Luxray","Pyroar","Manectric","Electivire","Tauros","Donphan","Gulpin","Ponyta","Rhyhorn","Ekans","Arcanine","Sentret","Patrat","Raticate","Nidoran","Yungoos","Dodrio","Cinderace","Wooloo","Yamper","Boltund","Toxtricity","Sirfetch'd","Stonjourner","Morpeko","Copperajah"];

var GrasslandLegend = ["Mew","Raikou","Entei","Suicune","Latias","Latios","Tornadus","Thundurus","Landorus","Cobalion","Terrakion","Virizion","Keldeo"];

//CITY (6)
var CityCommon = ["Pidgey","Rattata","Murkrow","Starly","Pidove","Fletchling"];
var CityUncommon = ["Meowth","Grimer","Gastly","Koffing","Mime Jr.","Snubbull","Zigzagoon","Skitty","Plusle & Minun","Swablu","Shuppet","Pachirisu","Glameow","Lillipup","Purrloin","Timburr","Trubbish","Joltik","Klink","Furfrou","Espurr","Swirlix","Dedenne","Klefki","Cutiefly","Sinistea","Impidimp","Milcery"];
var CityRare = ["Abra","Tyrogue","Chansey","Ditto","Porygon","Smeargle","Ralts","Castform","Burmy","Munchlax","Rotom","Audino","Zorua","Gothita","Solosis","Litwick","Pumpkaboo","Stufful","Comfey","Mimikyu","Corviknight","Indeedee","Mr. Rime"];

var CityCommon_L = ["Pidgeotto","Raticate","Murkrow","Staravia","Tranquill","Fletchinder"];
var CityUncommon_L = ["Persian","Muk","Haunter","Weezing","Mr. Mime","Granbull","Linoone","Delcatty","Plusle & Minun","Altaria","Banette","Pachirisu","Purugly","Herdier","Liepard","Gurdurr","Garbodor","Galvantula","Klang","Furfrou","Meowstic","Aromatisse","Dedenne","Klefki","Ribombee","Polteageist","Morgrem","Alcremie"];
var CityRare_L = ["Kadabra","Hitmonlee","Hitmonchan","Hitmontop","Blissey","Ditto","Porygon2","Smeargle","Kirlia","Castform","Wormadam","Snorlax","Rotom","Audino","Zoroark","Gothorita","Duosion","Lampent","Gourgeist","Comfey","Mimikyu","Corviknight","Indeedee","Mr. Rime","Honchkrow"];

var CityDescriptor = ["This city ", "This metropolis ", "This town ", "This borough ","This burg "];
var CityType = ["City", "", "Town", "",""];

var CityMain = ["is currently so thick with a giant flock of Pidove that you cannot see the sky!",
"is currently so thick with a giant flock of Starly that you cannot see the sky!",
"is currently so thick with a giant flock of Murkrow that you cannot see the sky!",
"is absolutely infested with scurrying Rattata.",
"is undergoing an outbreak of Cutiefly, attracted to the overwhelming emotion resulting from an ongoing outdoor festival.",
"has terrible air quality, and accordingly is filled with Koffing and Weezing.",
"has absolutely putrid water, and accordingly is filled with Grimer and Muk.",
"is littered everywhere with rotting trash, and accordingly is filled with Trubbish and Garbodor.",
"is home to a haunted building that reportedly shelters an enormous, powerful Gengar.",
"is said to be haunted by a sinister Banette that lurks in the shadows of dark alleys.",
"is home to many stray Meowth that are skilled at swindling passerby out of their belongings.",
"is home to many stray Purrloin that will lure in passerby with their cuteness before stealing their money.",
"has many Mime Jr. and Mr. Mime performing on the streets for money and food.",
"has an abnormal number of stray Glameow and Purugly prowling the streets and generally being a nuisance to others.",
"is currently under construction, with the aid of many Timburr, Gurdurr and Conkeldurr.",
"is having electrical problems thanks to a large pack of errant Dedenne.",
"is actually teeming with Ditto, though it may be hard to tell at first.",
"is afraid of a mysterious Pokémon that appears only in dark places; some say it may in fact be a lonely Mimikyu causing the fright.",
"is undergoing mysterious electrical phenomena, believed to be caused by a mischievous Rotom.",
"is having a medical emergency because its Audino appear to have gone on strike.",
"is having a medical emergency because its Blissey appear to have gone on strike.",
"has undergone a string of unsolved petty crime; police suspect a disguised Zorua may in fact be behind the activities.",
"has reported mysterious lights leading its children out into the wilderness at night; some say Litwick may be leading them to the lair of a Chandelure.",
"is currently hosting an art exhibition, with hundreds of Smeargle present for the occasion.",
"is home to the region's leading university in meteorology; Castform can be found floating around various experimental sites in the area.",
"is home to the region's leading university in biology; Reuniclus are its mascot, and they can be found inhabiting various site around the area.",
"is the home of an Alakazam that is rumored to be one of the smartest in the world.",
"is where a mysterious Gothitelle, said to be able to predict the future, dwells.",
"is in a frenzy looking for a wealthy aristocrat's lost Snubbull; she is offering an exorbitant cash reward to whoever can bring it back to her.",
"is home to an elusive Delcatty that locals say will bring good fortune to anyone who manages to catch a glimpse of it.",
"is experiencing a sudden increase in unexplained psychic phenomena, believed to be linked to the appearance of many Espurr and Meowstic around the city.",
"is currently in disarray after an outbreak of Klefki has left citizens without their keys, and thus unable to open any locks whatsoever.",
"is the home of a famous Furfrou groomer, whose salon is completely booked for months in advance.",
"is the site of an annual Herdier training competition, which in fact is starting today!",
"is currently undergoing a cyberattack from an unknown hacker, though officials are sure a Porygon-Z is helping to carry it out.",
"is having a Zigzagoon problem; the Pokémon seem to have outsmarted its anti-pest measures and are now rummaging through garbage cans, making huge messes everywhere.",
"is having a mild problem with Wormadam hanging from electrical wires and weighing them down.",
"is home to a renowned pastry chef known for employing disciplined Slurpuff in her no-nonsense kitchen.",
"is infested with Sinistea thanks to a prolific Polteageist pouring its tea into all sorts of vessels.",
"is terrorized by Morgrem and their Grimmsnarl leader.",
"is where a famous Mr. Rime holds its performances.",
"is home to all sorts of different flavors of Alcremie.",
"is currently paralyzed because all of the working Indeedee have gone on strike.",
"is in a crisis; a breach in the local conservatory has allowed some Dracozolt, Arcozolt, Dracovish, and Arctovish to escape, and they must be returned immediately because they cannot survive in the wild for long.",
"is said to be home to a Pokémon that resulted from unimaginably twisted experiments."
];

var CityMainPKMN = ["Pidove","Starly","Murkrow","Rattata","Cutiefly","Koffing","Grimer","Trubbish","Gengar","Banette","Meowth","Purrloin","Mime Jr.","Glameow","Timburr","Dedenne","Ditto","Mimikyu","Rotom","Audino","Blissey","Zorua","Litwick","Smeargle","Castform","Reuniclus","Alakazam","Gothitelle","Snubbull","Delcatty","Espurr","Klefki","Furfrou","Herdier","Porygon-Z", "Zigzagoon","Wormadam","Slurpuff","Sinistea","Morgrem","Mr. Rime","Alcremie","Indeedee","Dracozolt","Type: Null"];

var CityLegend = ["Mewtwo","Mew","Latias","Latios","Deoxys","Victini","Meloetta","Poipole","Stakataka"];


//PLANT (7)
var PlantCommon =  ["Voltorb","Magnemite","Klink","Grubbin"];
var PlantUncommon = ["Pikachu","Electabuzz","Plusle & Minun", "Pachirisu","Joltik","Dedenne","Togedemaru"];
var PlantRare = ["Electivire","Magnezone","Klinklang","Vikavolt","Raichu"];

var PlantCommon_L =  ["Electrode","Magneton","Klang","Charjabug"];
var PlantUncommon_L = ["Pikachu","Electabuzz","Plusle & Minun", "Pachirisu","Galvantula","Dedenne","Togedemaru"];
var PlantRare_L = ["Electivire","Magnezone","Klinklang","Vikavolt","Raichu"];

var PlantDescriptor = ["This power plant ", "This generator facility ", "This factory ", "This industrial zone ", "This warehouse "];
var PlantType = ["Power Plant", "Generator", "Factory", "Industrial Zone", "Warehouse"];

var PlantMain = ["is full of Voltorb who have all been angered, and they seem just about ready to explode.",
"is home to a rogue Electrode that seems to take pleasure in chasing down frightened travelers with its incredible speed",
"was once full of Magnemite, but they have left for an unknown reason; they will wreak havoc on the nearby city if not stopped.",
"has been absolutely infested with hungry Grubbin.",
"has been taken over by pairs of playful Plusle and Minun.",
"has been absolutely infested with tiny Joltik, and the problem will worsen if they are allowed to evolve into Galvantula.",
"is home to skittish Togedemaru that will defend themselves with spikes and shocks if even slightly threatened.",
"has been taken over by a territorial Electivire and its follower Electabuzz.",
"has been made a nest by a giant Vikavolt and its Charjabug allies.",
"has been hijacked by a mysterious Magnezone for an unknown reason.",
"is being held hostage by a highly aggressive Klinklang, who seems to be using it as a shelter for smaller Klink and Klang."]

var PlantMainPKMN = ["Voltorb","Electrode","Magnemite","Grubbin","Plusle","Joltik","Togedemaru","Electivire","Vikavolt","Magnezone","Klinklang"];

var PlantLegend = ["Zapdos","Mewtwo","Mew","Genesect","Volcanion","Xurkitree","Celesteela","Magearna","Meltan","Regieleki"];

//VOLCANO (8)
var VolcanoCommon = ["Geodude","Slugma","Numel","Roggenrola","Rolycoly"];
var VolcanoUncommon = ["Vulpix","Growlithe","Koffing","Magmar","Houndour","Torkoal","Drifloon","Pansear","Sizzlipede","Swablu"];
var VolcanoRare = ["Charmander","Cyndaquil","Torchic","Chimchar","Gible","Magmortar","Larvesta","Salandit","Turtonator"];

var VolcanoCommon_L = ["Graveler","Magcargo","Camerupt","Boldore","Carkol"];
var VolcanoUncommon_L = ["Ninetales","Arcanine","Weezing","Magmar","Houndoom","Torkoal","Drifblim","Simisear","Centiskorch","Altaria"];
var VolcanoRare_L = ["Charmeleon","Quilava","Combusken","Monferno","Gabite","Magmortar","Volcarona","Salazzle","Turtonator"];

var VolcanoDescriptor = ["This volcano ", "This caldera ", "This crater ", "This flow ","This bed "];
var VolcanoType = ["Volcano","Caldera","Crater","Lava Flow","Lava Bed"];

var VolcanoMain = ["rumbles with the sound of Graveler and Golem tumbling down its molten slopes.",
"possesses magma that seems to move on its own; it actually is absolutely swarming with Slugma!",
"is home to an enormous herd of Numel; though they seem quite docile, the Camerupt of the herd are in contrast extremely hostile to intruders.",
"is said to hide an extremely old and wise Ninetales within its shimmering heat.",
"spews out enough toxic gas to support a thriving colony of Koffing and Weezing.",
"is prowled by a pack of territorial Houndoom.",
"is coated in black soot thanks to the many Torkoal that call it home.",
"heats the surrounding air in such a way that it attracts many traveling Drifloon and Drifblim.",
"is the territory of a menacing Charizard.",
"is defended by a territorial Typhlosion.",
"is kept safe by an experienced Blaziken.",
"is protected by a nimble Infernape.",
"is home to one of the largest Magmar colonies in the world, protected by an imposing Magmortar.",
"is said in legend to be home to a sun deity, who may or may not be Volcarona; what look to be Larvesta cocoons can be found near its base.",
"is the lair of a powerful Salazzle and her devoted Salandit harem.",
"is littered with Turtonator that are primed and ready to detonate.",
"is home to a giant Gigalith, whose crystals glow brightly from the immense energy is has stored.",
"has a vein of coal running through it; it is protected by a powerful Coalossal that wishes to keep humans from mining it.",
"is the territory of an long and extremely hostile Centiskorch.",
"is home to a Gible colony that is quite hostile to outsiders; a number of Gabite and a single Garchomp keep the colony protected.",
"is home to a flock of Swablu and Altaria cleaning themselves in a secluded hot spring.",
];

var VolcanoMainPKMN = ["Graveler","Slugma","Numel","Ninetales","Koffing","Houndoom","Torkoal","Drifloon","Charizard","Typhlosion","Blaziken","Infernape","Magmortar","Larvesta","Salazzle","Turtonator","Gigalith","Coalossal","Centiskorch","Gible","Swablu"];

var VolcanoLegend = ["Moltres","Mew","Entei","Registeel","Groudon","Heatran","Volcanion","Blacephalon"];

//CAVE (9)
var CaveCommon = ["Zubat","Diglett","Machop","Geodude","Roggenrola","Woobat","Rolycoly"];
var CaveUncommon = ["Sandshrew","Paras","Cubone","Onix","Shuckle","Whismur","Nosepass","Sableye","Mawile","Aron","Drilbur","Dwebble","Joltik","Ferroseed","Klink","Tynamo","Heatmor","Durant"];
var CaveRare = ["Misdreavus","Wobbuffet","Dunsparce","Larvitar","Bagon","Lunatone","Solrock","Bronzor","Gible","Axew","Deino","Druddigon","Carbink","Noibat","Turtonator","Jangmo-o","Duraludon"];

var CaveCommon_L = ["Golbat","Dugtrio","Machoke","Graveler","Boldore","Swoobat","Carkol"];
var CaveUncommon_L = ["Sandslash","Parasect","Marowak","Steelix","Shuckle","Loudred","Nosepass","Sableye","Mawile","Lairon","Excadrill","Crustle","Galvantula","Ferrothorn","Klang","Eelektrik","Heatmor","Durant"];
var CaveRare_L = ["Mismagius","Wobbuffet","Dunsparce","Pupitar","Shelgon","Lunatone","Solrock","Bronzong","Gabite","Fraxure","Zweilous","Druddigon","Carbink","Noivern","Turtonator","Hakamo-o","Duraludon"];

var CaveDescriptor = ["This cave ","This cavern ","This dungeon ","This grotto ","This mine ","This tunnel "];
var CaveType = ["Cave","Cavern","Dungeon","Grotto","Mine","Tunnel"];

var CaveMain = ["is teeming with Solrock in the daytime, even though no light reaches within; they seem to become aggressive at noon.",
"is teeming with Lunatone at night, even though no light reaches within; they seem to become aggressive on nights of the full moon.",
"is home to a Gible colony that is quite hostile to outsiders; a number of Gabite and a single Garchomp keep the colony protected.",
"is full of Bagon jumping headfirst from ledges; a Salamence is said to lurk somewhere within.",
"is said to be the territory of a mother Tyranitar, who had excavated it in order to house her Larvitar young.",
"is feared for the Hydreigon that is said to dwell within, and the blind Deino that stumble about and will bite just about anything they bump into.",
"houses a proud Kommo-o that will challenge anyone who draws near.",
"is mysteriously full of clinking Bronzor and clanging Bronzong, perhaps indicating it was a site of some importance in ancient times.",
"This cave glitters with beautiful jewels—and with the eyes of mischievous Sableye.",
"is home to a large colony of antisocial Wobbuffet and Wynaut.",
"actually is actually part of an enormous subterranean network excavated by many Diglett and Dugtrio.",
"is actually a tunnel network dug by an Excadrill in order to hunt unwary prey.",
"is teeming with Noibat; a fearsome Noivern is said to patrol the cavern for hapless prey.",
"is home to a giant Gigalith, whose crystals glow from the immense energy it has stored.",
"is actually a refuge for hundreds of ancient Carbink, who have hidden here undiscovered for centuries.",
"is full of rocks that seem to move on their own; in fact, it is is home to hundreds of ornery Crustle!",
"rumbles with the sound of a territorial Steelix tunneling through the earth.",
"shows scars from heavy piercing of its walls, a sign of the numerous Ferroseed and Ferrothorn clinging to all surfaces.",
"echoes with defeaningly-loud roars, a sign of the Exploud and Loudred that dwell within.",
"crackles with electrical energy from the fearsome Eelektross that dwells within.",
"is the sole territory of a lone, powerful Aggron.",
"is full of magnetite, and all of its stones face the same direction; a Probopass is said to make its home here.",
"is home to a colony of skittish Dunsparce that flee at the first sign of danger.",
"is the new lair of a Druddigon, who has just kicked out its original inhabitants and is eager to defend its freshly-stolen territory.",
"is filled with Swoobat chirping and flitting about; as it is their mating season, they are quite loud but otherwise friendly.",
"is the new lair of a crafty Mawile that seems to have a penchant for luring in travelers.",
"is the lair of a feared colony of Golbat that seem to have developed a taste for human blood.",
"has a vein of coal running through it; it is protected by a powerful Coalossal that wishes to keep humans from mining it.",
"is the territory of a huge Duraludon who has an unusually short temper."
]

var CaveMainPKMN = ["Solrock","Lunatone","Gible","Bagon","Larvitar","Hydreigon","Kommo-o","Bronzor","Sableye","Wobbuffet","Diglett","Excadrill","Noibat","Gigalith","Carbink","Crustle","Steelix","Ferroseed","Exploud","Eelektross","Aggron","Probopass","Dunsparce","Druddigon","Swoobat","Mawile","Golbat","Coalossal","Duraludon"];

var CaveLegend = ["Mew","Regirock","Regice","Registeel","Groudon","Regigigas","Giratina","Cobalion","Kyurem","Zygarde","Diancie","Necrozma","Regieleki","Regidrago"];


//Mountain (10)
var MountainCommon = ["Geodude","Machop","Makuhita","Roggenrola","Timburr","Rolycoly"];
var MountainUncommon = ["Mankey","Onix","Cubone","Rhyhorn","Tyrogue","Hoppip","Gligar","Stantler","Aron","Meditite","Spoink","Spinda","Drifloon","Buneary","Munchlax","Throh","Sawk","Minccino","Deerling","Mienfoo","Heatmor","Durant","Bunnelby","Skiddo","Pancham","Rockruff","Mudbray","Minior","Komala","Sizzlipede"];
var MountainRare = ["Charmander","Clefairy","Chimecho","Larvitar","Absol","Chimchar","Riolu","Oranguru","Turtonator","Drampa","Jangmo-o","Falinks","Duraludon"];

var MountainCommon_L = ["Graveler","Machoke","Hariyama","Boldore","Gurdurr","Carkol"];
var MountainUncommon_L = ["Primeape","Steelix","Marowak","Rhydon","Tyrogue","Skiploom","Gligar","Stantler","Lairon","Medicham","Grumpig","Spinda","Drifblim","Lopunny","Munchlax","Throh","Sawk","Cinccino","Sawsbuck","Mienshao","Heatmor","Durant","Diggersby","Gogoat","Pangoro","Lycanroc","Mudsdale","Minior","Komala","Centiskorch"];
var MountainRare_L = ["Charmeleon","Clefable","Pupitar","Chimecho","Absol","Monferno","Lucario","Oranguru","Turtonator","Drampa","Hakamo-o","Falinks","Duraludon","Gliscor","Hitmonlee","Hitmonchan","Hitmontop","Snorlax"];

var MountainDescriptor = ["This mountain ","This peak ","This range ", "This ridge ","This sierra ", "This summit ","This mountain pass "];
var MountainType = ["Mountain","Peak","Range","Ridge","Sierra","Summit","Pass"];

var MountainMain = ["rumbles with the sound of Graveler and Golem tumbling down its molten slopes.",
 "houses competing bands of Throh and Sawk.",
"is protected by a burly, but honorable Pangoro.",
"is home to an enormous, long-slumbering Snorlax.",
"is home to a territorial herd of Sawsbuck, whose leader has enormous horns.",
"is the home of a large herd of Stantler that keep themselves hidden through illusions.",
"is the territory of a menacing Charizard.",
"is protected by a nimble Infernape.",
"is supposedly home to a mystical, wise, Oranguru that has learned how Poké Balls work.",
"is home to a colony of Clefairy and Clefable that will come out to dance on nights of the full moon.",
"is home to a mysterious Absol, whose sighting heralds an impending disaster.",
"is the lair of a benevolent Drampa who is fondly seen as a protector by the children of the nearby village.",
"is the training ground for many young Riolu as well as their Lucario mentor.",
"is home to a huge swarm of noisy Chingling and harmonious Chimecho, whose chimes fill the air with a mystical melody.",
"is home to a herd of Gogoat adapted to climbing steep slopes.",
"is home to a herd of Grumpig who venture to the sea once a year in order to collect Clamperl pearls.",
"is the training ground for a clan of Makuhita and Hariyama, who fight one another in order to toughen their bodies.",
"is where many Meditite and Medicham travel in order to achieve inner peace; they get angry when passing travelers distract them from their meditation.",
"is where Mienshao instruct Mienfoo in order to hone their fighting styles.",
"is where Tyrogue congregate in order to practice different styles of fighting.",
"is where many migrating Hoppip, Skiploom, and Jumpluff stop to rest.",
"is where many migrating Drifloon and Drifblim stop to rest.",
"is where many Machop come to train their bodies; Machoke and Machamp will challenge nearby travelers here in order to show off their strength.",
"is where Minior land on nights of meteor showers.",
"is home to a huge colony of Spinda whose constant lurching induces extreme dizziness in onlookers.",
"is home to a warren of Lopunny that, unlike others of their kind, are quite aggressive and ready to pick a fight.",
"seems to be a relic of prehistoric times, with ancient Aerodactyl still dwelling here.",
"is where rescue Stoutland are trained for alpine extraction operations.",
"contains a secret grove of trees where Komala dwell; though constantly asleep, they seem intent on defending these trees at all costs.",
"has a vein of coal running through it; it is protected by a powerful Coalossal that wishes to keep humans from mining it.",
"is the territory of an long and extremely hostile Centiskorch.",
"is a training ground for Falinks practicing their formations; they do not wish to be disturbed.",
"is the territory of a huge Duraludon who has an unusually short temper."
];

var MountainMainPKMN = ["Graveler","Throh","Pangoro","Snorlax","Sawsbuck","Stantler","Charizard","Infernape","Oranguru","Clefairy","Absol","Drampa","Riolu","Chingling","Gogoat","Grumpig","Makuhita","Meditite","Mienshao","Tyrogue","Hoppip","Drifloon","Machop","Minior","Spinda","Lopunny","Aerodactyl","Stoutland", "Komala","Coalossal","Centiskorch","Falinks","Duraludon"];

var MountainLegend = ["Mew","Articuno","Zapdos","Moltres","Ho-oh","Jirachi","Terrakion","Regidrago","Kubfu"];

//DESERT (11)
var DesertCommon = ["Sandshrew","Diglett","Cacnea"];
var DesertUncommon = ["Natu","Trapinch","Darumaka","Skorupi","Hippopotas","Sandile","Dwebble","Maractus","Scraggy","Helioptile","Silicobra"]
var DesertRare = ["Gligar","Fennekin","Vibrava","Pinsir","Minior"];

var DesertCommon_L = ["Sandslash","Dugtrio","Cacturne"];
var DesertUncommon_L = ["Xatu","Vibrava","Darmanitan","Drapion","Hippowdon","Krokorok","Crustle","Maractus","Scrafty","Heliolisk","Sandaconda","Pinsir","Minior"]
var DesertRare_L = ["Gliscor","Braixen","Flygon"];

var DesertDescriptor = ["This desert ", "This flat ", "This basin ", "This dune ","This sand "];
var DesertType = ["Desert","Flats","Basin","Dunes","Sands"];

var DesertMain = ["is patrolled by a pack of roving Sandslash that use the frequent sandstorms as a cover for their attacks.",
"is watched over from afar by a mystical Delphox.",
"has suddenly been flooded with Diglett and Dugtrio on the surface, as a recent rainstorm has flooded them out of their tunnels.",
"is dotted with Trapinch pits that can pull in hapless travelers.",
"infamous for the many poisonous Skorupi lying in the sands, as well as the menacing Drapion that prowls its dunes.",
"is known for a pack of Krokorok led by a Krookodile that terrorize passing travelers and steal their goods.",
"is known for the lively Maractus that dance for travelers in exchange for food.",
"is home to a pack of Hippowdon that are extremely territorial, attacking any large creatures that enter their domain.",
"is home to a gang of Scrafty that terrorize smaller Pokémon for fun.",
"has mysteriously lost all of its larger pebbles, leaving the many Dwebble that live here shelless.",
"is said to be home to a mystical Xatu that can see into the future.",
"echoes with a mystical song can sometimes be heard during sandstorms, said to be the song of “The Desert Spirit” Flygon.",
"is home to a magnificent Heliolisk that is said to possess the largest frill of them all, thus being able to absorb the most energy from the sun.",
"is feared due to a pack of sinister Cacturne that dwell here, said to stalk desert travelers relentlessly until they die of thirst.",
"is cloaked in a raging sandstorm due to a territorial conflict between two Sandaconda.",
"is where Minior land on nights of meteor showers."];

var DesertMainPKMN = ["Sandslash","Delphox","Diglett","Trapinch","Skorupi","Krookodile","Maractus","Hippowdon","Scrafty","Dwebble","Xatu","Flygon","Heliolisk","Cacturne","Sandaconda","Minior"];

var DesertLegend = ["Mew","Regirock","Yveltal","Hoopa","Pheromosa"];

//BADLAND (12)
var BadlandCommon = ["Spearow"];
var BadlandUncommon = ["Cubone","Rhyhorn","Gligar","Houndour","Phanpy","Spoink","Scraggy","Pawniard","Vullaby","Rockruff","Salandit","Cufant"];
var BadlandRare = ["Kangaskhan","Skarmory","Larvitar","Bagon","Beldum","Gible","Jangmo-o","Toxel","Falinks","Cursola","Dreepy"];

var BadlandCommon_L = ["Fearow","Rhydon","Houndour","Pawniard","Scraggy"];
var BadlandUncommon_L = ["Marowak","Rhydon","Gligar","Houndoom","Donphan","Grumpig","Scrafty","Bisharp","Vullaby","Lycanroc","Salazzle","Copperajah"];
var BadlandRare_L = ["Kangaskhan","Skarmory","Pupitar","Shelgon","Metang","Gabite","Hakamo-o","Toxtricity","Falinks","Cursola","Drakloak","Gliscor","Mandibuzz"];

var BadlandDescriptor = ["This badland ","This wasteland ","This canyon ","This mesa ","This plateau ","This butte ","This bluff ","This cliff ","This ridge ","This gorge ","This arroyo ","This ravine ","This borderland ","This rift "];
var BadlandType = ["Badland","Wasteland","Canyon","Mesa","Plateau","Butte","Bluff","Cliff","Ridge","Gorge","Arroyo","Ravine","Borderland","Rift"];

var BadlandMain = ["is home a proud Kommo-o and its clan; the Kommo-o will challenge anyone that draws near in order to demonstrate its strength.",
"is home to a colony of Bagon who are constantly leaping from the cliffs; a protective Salamence keeps watch over them from the skies.",
"is patrolled by a flock of Skarmory who work together in order to take down formidable prey.",
"is home to a renegade Garchomp who seems to be extremely aggressive for no reason.",
"is the territory of a lone Tyranitar who wants to be left alone.",
"seems to be mildly magnetic, attracting a swarm of Beldum that will give chase if they feel threatened.",
"is home to a battle-scarred Metagross that seems slightly unhinged when it comes to intruders in its territory.",
"is currently being terrorized by an irate mother Kangaskhan who has lost track of her child.",
"is home to a lumbering herd of easily-angered Rhyhorn.",
"rumbles with the sound of rolling Donphan.",
"is home to a gang of Scrafty that seem to be highly protective of one another.",
"is patrolled by a particularly aggressive pack of Houndoom.",
"is the territory of a Bisharp leader, who is merciless in sending its Pawniard minions in to terrorize intruders.",
"is the lair of a powerful Salazzle and her devoted Salandit harem.",
"is the territory of a Lycanroc pack; at night, however, a different type of Lycanroc is said to emerge from the shadows.",
"is home to a pack of Marowak that is quite hostile to intruders, especially when interrupted during their sacred bone ceremonies.",
"produces great updrafts that support a thriving Gligar and Gliscor colony; they will frequently dive in on unwary passerby in order to secure easy prey.",
"is absolutely teeming with hundreds of Spoink bouncing all over the place, making it difficult to move without being hit by one.",
"is home to enormous flocks of Spearow that blot out the skies; they seem to be prepared to converge on anything they see as weaker than themselves.",
"blares with the sound of a strumming Toxtricity who is looking for a good fight.",
"is filled with the sorrowful corpses of ghostly Cursola.",
"is a training ground for Falinks practicing their formations; they do not wish to be disturbed.",
"is home to a herd of Copperajah who are very protective of one another.",
"is home to a flock of opportunistic Mandibuzz looking for fresh bones for their young.",
"is home to Dreepy who are being closely guarded by Drakloak and Dragapult."
];

var BadlandMainPKMN = ["Jangmo-o","Bagon","Skarmory","Garchomp","Tyranitar","Beldum","Metagross","Kangaskhan","Rhyhorn","Donphan","Scrafty","Houndoom","Bisharp","Salazzle","Lycanroc","Marowak","Gligar","Spoink","Spearow","Toxtricity","Cursola","Falinks","Copperajah","Mandibuzz","Dreepy"];

var BadlandLegend = ["Mew","Cobalion","Terrakion","Yveltal","Guzzlord","Eternatus"];

//POND (13)
var PondCommon = ["Psyduck","Poliwag","Goldeen","Magikarp","Marill"];
var PondUncommon = ["Lotad","Surskit","Volbeat & Illumise","Barboach","Corphish","Tympole","Ducklett","Dewpider", "Chewtle"];
var PondRare = ["Squirtle","Feebas","Froakie","Crawdaunt","Sobble","Drednaw"];

var PondCommon_L = ["Golduck","Poliwhirl","Seaking","Magikarp","Azumarill"];
var PondUncommon_L = ["Lombre","Masquerain","Volbeat & Illumise","Whiscash","Crawdaunt","Palpitoad","Swanna","Araquanid", "Drednaw"];
var PondRare_L = ["Wartortle","Feebas","Frogadier","Drizzile"];

var PondDescriptor = ["This pond ", "This splash", "This pool ", "This spring ", "This seep "];
var PondType = ["Pond","Splash","Pool","Spring","Seep"];

var PondMain = ["is aflame with the crimson hue of mating Seaking; the males are quite territorial and aggressive during this critical period.",
"is currently empty of most species other than Corphish due to the bullying nature of an invasive Crawdaunt.",
"is home to a matronly Swanna and her flock of Ducklett; one Ducklett seems to lag behind the rest when it comes to staying in line.",
"is choked with weeds, but is lively with the dancing of energetic Ludicolo.",
"is known to locals as where mischievous Lombre congregate to play tricks on hapless fishermen.",
"is ruled by an authoritative Politoed, who holds court over dozens of submissive Poliwhirl and Poliwag.",
"serves as the hunting ground for a large Araquanid and its brood, who terrorize the water’s edge.",
"tremors with the activity of a rogue giant Whiscash.",
"is home to a colony of Marill and Azumarill that are surprisingly strong for their size.",
"is watched over by a stalwart Blastoise.",
"is alive with the loud palpitations of a symphony of Tympole, Palpitoad, and Seismitoad.",
"is where Masquerain come to mate; in the following months, its surface is teeming with Surskit competing with one another for food.",
"is where Volbeat swarm in an attempt to court single Illumise.",
"is protected by a stealthy Greninja.",
"is under the surveillance of an investigating Inteleon.",
"houses an ornery Drednaw that prefers to bite first and ask questions later."
];

var PondMainPKMN = ["Seaking","Corphish","Swanna","Ludicolo","Lombre","Politoed","Araquanid","Whiscash","Marill","Blastoise","Tympole","Masquerain","Volbeat","Greninja","Inteleon","Drednaw"];

var PondLegend = ["Mew","Latias","Latios","Keldeo"];

//LAKE (14)
var LakeCommon = ["Psyduck","Poliwag","Goldeen","Magikarp","Arrokuda"];
var LakeUncommon = ["Marill","Wooper","Surskit","Ducklett"];
var LakeRare = ["Dratini","Squirtle","Totodile","Feebas","Dreepy","Barraskewda","Azumarill"];

var LakeCommon_L = ["Golduck","Poliwhirl","Seaking","Gyarados","Barraskewda"];
var LakeUncommon_L = ["Azumarill","Quagsire","Masquerain","Swanna"];
var LakeRare_L = ["Dragonair","Wartortle","Croconaw","Milotic","Drakloak"];

var LakeDescriptor = ["This lake ","This basin ","This loch ","This cenote ","This sinkhole ","This mere "];
var LakeType = ["Lake","Basin","Loch","Cenote","Sinkhole","Mere"];

var LakeMain = ["is watched over by a stalwart Blastoise.",
"is menaced by an opportunistic Feraligatr.",
"is where Golduck convene to race one another in tests of speed.",
"is home to a matronly Swanna and her flock of Ducklett; one Ducklett seems to lag behind the rest when it comes to staying in line.",
"is aflame with the crimson hue of mating Seaking; the males are quite territorial and aggressive during this critical period.",
"is thought to be quite deep; Dratini are said to dwell within its depths, and a Dragonite is said to watch over the lake to defend it from danger.",
"is home to a colony of Marill and Azumarill that are surprisingly strong for their size.",
"is quite deep, and its surface is teeming with Feebas; locals report sighting a mesmerizingly-beautiful Milotic within its depths.",
"is where Masquerain come to mate; in the following months, its surface is teeming with Surskit competing with one another for food.",
"is ruled by an aggressive Poliwrath, who is eager to challenge any who approach.",
"is home to many playful Wooper that will take the belongings of travelers deeper into its center in order to “have fun”.",
"is teeming with Arrokuda and Barraskewda that will impale themselves on anything they sense moving in the water.",
"is home to Dreepy who are being closely guarded by Drakloak and Dragapult."
];

var LakeMainPKMN = ["Blastoise","Feraligatr","Golduck","Swanna","Seaking","Dratini","Marill","Feebas","Masquerain","Poliwrath","Wooper","Arrokuda","Dreepy"];

var LakeLegend = ["Mew","Suicune","Latias","Latios","Uxie","Mesprit","Azelf","Keldeo"];

//RIVER (15)
var RiverCommon = ["Psyduck","Goldeen","Magikarp","Marill","Arrokuda"];
var RiverUncommon = ["Wooper","Remoraid","Barboach","Corphish","Carvanha","Buizel","Basculin","Tynamo","Dewpider","Chewtle"];
var RiverRare = ["Totodile","Feebas","Azumarill","Barraskewda","Drednaw"];

var RiverCommon_L = ["Golduck","Seaking","Magikarp","Azumarill","Barraskewda"];
var RiverUncommon_L = ["Quagsire","Remoraid","Whiscash","Crawdaunt","Carvanha","Floatzel","Basculin","Eelektrik","Araquanid","Drednaw"];
var RiverRare_L = ["Croconaw","Milotic","Gyarados","Eelektross"];

var RiverDescriptor = ["This river ","This stream ","This rapid ","This bend ","This waterfall ","This cascade ","This creek ","This brook "];
var RiverType = ["River","Stream","Rapids","Bend","Falls","Cascade","Creek","Brook"];

var RiverMain = ["is where Golduck convene to race one another in tests of speed.",
"is aflame with the crimson hue of mating Seaking; the males are quite territorial and aggressive during this critical period.",
"is home to a colony of Marill and Azumarill that are surprisingly strong for their size.",
"is filled with Remoraid migrating to the sea in preparation for evolution.",
"is full of schooling Carvanha, who are waiting for their chance to enter into a feeding frenzy.",
"is electrified by the presence of schools of Tynamo beneath the surface; an unruly Eelektross is said to make its home here.",
"is home to Red Stripe Basculin on one end and Blue Stripe Basculin on the other; the two groups fight viciously over territory.",
"is home to a pack of Buizel and Floatzel who are glad to help travelers trying to cross over or along the river.",
"is menaced by an opportunistic Feraligatr.",
"serves as the hunting ground for a large Araquanid and its brood, who terrorize the water’s edge.",
"is filled with determined Magikarp trying to leap over a large breaker; legend has it that the Magikarp that does make it over will experience something very special...",
"houses an ornery Drednaw that prefers to bite first and ask questions later.",
"is teeming with Arrokuda and Barraskewda that will impale themselves on anything they sense moving in the water.",
"is said to be home to a breathtakingly-beautiful sea serpent.",
"is electrified by the presence of schools of Tynamo beneath the surface; an unruly Eelektross is said to make its home here."
];

var RiverMainPKMN = ["Golduck","Seaking","Marill","Remoraid","Carvanha","Tynamo","Basculin","Buizel","Feraligatr","Araquanid","Magikarp","Drednaw","Arrokuda","Milotic","Tynamo"];

var RiverLegend = ["Mew","Latias","Latios","Keldeo"];

//RIVERSIDE (16)
var RiversideCommon = ["Psyduck","Poliwag","Bidoof","Marill","Chewtle"];
var RiversideUncommon = ["Slowpoke","Drowzee","Wooper","Burmy","Buizel","Panpour","Dewpider","Pawniard","Palpitoad","Cufant","Tynamo"];
var RiversideRare = ["Axew","Bibarel","Azumarill","Golduck","Floatzel","Farfetch'd","Dreepy","Perrserker","Sirfetch'd","Drednaw","Zangoose","Seviper"];

var RiversideCommon_L = ["Golduck","Poliwhirl","Bibarel","Azumarill","Drednaw"];
var RiversideUncommon_L = ["Slowpoke","Hypno","Quagsire","Wormadam","Mothim","Floatzel","Simipour","Araquanid","Bisharp","Palpitoad","Copperajah","Eelektrik"];
var RiversideRare_L = ["Slowbro","Slowking","Fraxure","Seismitoad","Farfetch'd","Drakloak","Perrserker","Sirfetch'd","Zangoose","Seviper"];

var RiversideDescriptor = ["This riverside ","This lakeshore ","This lakefront ", "This riviera ", "This waterfront ","This riverbank ","This river valley ","This floodplain ","This waterside "];
var RiversideType = ["Riverside","Lakeshore","Lakefront","Riviera","Waterfront","Riverbank","River Valley","Floodplain","Waterside"];

var RiversideMain = ["is home to an active group of Bibarel who are trying to build a dam; they are quite friendly and will welcome any help they can get.",
"is full of lazing Slowpoke dangling their tails into the water; the nearby Slowbro seem quite docile, but locals say they dislike it when strangers approach the resting Slowpoke.",
"is where nearby Drowzee and Hypno often congregate; they pose a danger to nearby swimmers, who they are said to lure into the wilderness.",
"houses a number of young Axew; though their parents are nowhere to be seen, it is likely there are Haxorus in the near vicinity.",
"is home to a pack of Buizel and Floatzel who are glad to help travelers trying to cross over or along the river.",
"serves as the hunting ground for a large Araquanid and its brood, who terrorize the water’s edge.",
"is home to a colony of Marill and Azumarill that are surprisingly strong for their size.",
"is where Golduck convene to race one another in tests of speed.",
"is home to a rogue Psyduck who has lost control of its psychic powers due to a splitting headache.",
"supports a large number of Wormadam hanging by the water's edge; they are quite skittish and do not want to be approached.",
"is home to a flock of wary Farfetch'd who guard a safe haven against poachers.",
"is the territory of a Bisharp leader, who is merciless in sending its Pawniard minions in to terrorize intruders.",
"houses an ornery Drednaw that prefers to bite first and ask questions later.",
"is home to Dreepy who are being closely guarded by Drakloak and Dragapult.",
"is home to a herd of Copperajah who are very protective of one another.",
"is periodically pillaged by a band of marauding Perrserker.",
"is home to a smug Sirfetch'd who believes it cannot be defeated.",
"is the battleground between bitterly-rivaled Zangoose and Seviper."
];

var RiversideMainPKMN = ["Bibarel","Slowbro","Drowzee","Axew","Buizel","Araquanid","Marill","Golduck","Psyduck","Wormadam","Farfetch'd","Bisharp","Drednaw","Dreepy","Copperajah","Perrserker","Sirfetch'd","Zangoose","Tynamo"];

var RiversideLegend = ["Mew","Latias","Raikou","Entei","Suicune","Latios","Raikou","Entei","Coablion","Terrakion","Virizion","Keldeo"];

//BEACH (17)
var BeachCommon = ["Krabby","Wingull"];
var BeachUncommon = ["Slowpoke","Shellos","Tynamo","Inkay","Binacle","Mareanie","Wimpod","Sandygast","Pyukumuku","Wailmer"];
var BeachRare = ["Shuckle","Mudkip","Chatot","Oshawott","Popplio","Stunfisk","Exeggutor"];

var BeachCommon_L = ["Kingler","Pelipper","Slowpoke"];
var BeachUncommon_L = ["Gastrodon","Eelektrik","Malamar","Barbaracle","Toxapex","Golisopod","Palossand","Pyukumuku","Wailmer","Exeggutor"];
var BeachRare_L = ["Slowbro","Slowking","Shuckle","Marshtomp","Chatot","Dewott","Brionne","Stunfisk","Wailord"];

var BeachDescriptor = ["This beach ","This coast ","This break ","This shore ","This cove ", "This pool ", "This lagoon ","This shoal ","This sandbar ", "This island ","This islet ","This isle "];
var BeachType = ["Beach","Coast","Break","Shore","Cove","Pool","Lagoon","Shoal","Sandbar","Island","Islet","Isle"];

var BeachMain = ["is teeming with Krabby and Kingler; aggressive males are trying to show off their huge claws by picking fights with passerby.",
"is full of playful Wailmer bouncing about on land.",
"is being terrorized by a flock of savvy Wingull who have realized that the presence of humans generally means the presence of good food.",
"is full of lazing Slowpoke dangling their tails into the water; locals say they are watched over by a nearby Slowking who will not hesitate to defend them if endangered.",
"for some odd reason is home to both East and West Shellos and Gastrodon; the two forms even seem to be able to interact with one another without issue.",
"is infamous for the Malamar that call it home; they are said to be able to hypnotize hapless passerby into doing their bidding.",
"is the territory of a foreboding Barbaracle who hates the idea of others even being near its territory.",
"is a haven for cowardly Wimpod; large Golisopod patrol its borders in order to keep them safe, though they will likely flee at the slightest hint of confrontation.",
"is infested with Mareanie and Toxapex, who have already decimated the local Corsola population.",
"has many Pyukumuku on its shores; they are quick to react to danger and will expel their guts forcefully if even grazed by passerby.",
"is famous for the many Shuckle that call it home; one can even extract Berry Juice from them if so inclined, though they don’t seem to like it very much.",
"is defended by a bulky Swampert.",
"is protected by an honorable Samurott.",
"is overseen by a graceful Primarina.",
"seems to be a relic of prehistoric times, with ancient Kabuto and Kabutops still dwelling here.",
"seems to be a relic of prehistoric times, with ancient Anorith and Armaldo still dwelling here.",
"seems to be a relic of prehistoric times, with ancient Tirtouga and Carracosta still dwelling here.",
"is home to a flock of Chatot that take great pleasure in learning and mimicking any improper language they hear.",
"is feared for the many Sandygast and Palossand that lurk in its sands, searching for hapless beachgoers.",
"is booby-trapped with dozens of Stunfisk lying in the wet sand.",
"is home to a huge traveling forest of Exeggutor."];

var BeachMainPKMN = ["Krabby","Wailmer","Wingull","Slowking","Shellos","Malamar","Barbaracle","Wimpod","Mareanie","Pyukumuku","Shuckle","Swampert","Samurott","Primarina","Kabuto","Anorith","Tirtouga","Chatot","Sandygast","Stunfisk","Exeggutor"];

var BeachLegend = ["Mew","Latias","Latios","Tornadus","Thundurus"];


//OCEAN (18)
var OceanCommon = ["Tentacool", "Wingull", "Magikarp","Arrokuda"];
var OceanUncommon = ["Shellder","Horsea","Staryu","Chinchou","Qwilfish","Remoraid","Wailmer","Clamperl","Finneon","Frillish","Skrelp","Clauncher","Wishiwashi","Clobbopus","Pincurchin","Cramorant"];
var OceanRare = ["Mantine","Sharpedo","Feebas","Phione","Alomomola","Dhelmise","Cursola"];

var OceanCommon_L = ["Tentacruel", "Pelipper", "Gyarados","Barraskewda"];
var OceanUncommon_L = ["Cloyster","Seadra","Starmie","Lanturn","Qwilfish","Octillery","Wailmer","Huntail","Gorebyss","Lumineon","Jellicent","Dragalge","Clawitzer","Wishiwashi","Grapploct","Pincurchin","Cramorant"];
var OceanRare_L = ["Mantine","Sharpedo","Milotic","Phione","Alomomola","Dhelmise","Cursola","Wailord","Seadra"];

var OceanDescriptor = ["This sea ","This ocean ","This inlet ","This gulf ", "This water ","This bay ",];
var OceanType = ["Sea","Ocean","Inlet","Gulf","Waters","Bay"];

var OceanMain = ["has become infested by Tentacool and Tentacruel, who have pushed out almost all other Pokémon from the area.",
"is notorious for being home to Frillish and Jellicent that delight in pulling ships beneath the waves.",
"splashes thanks to a pod of playful Wailmer breaching the surface.",
"is being plagued by a school of poisonous Seadra, making it unsafe for swimmers.",
"is teeming with Wishiwashi, who seem to be able to school in quite large numbers...",
"is periodically plagued by whirlpools due to the actions of a Kingdra that dwells beneath the waves.",
"twinkles with blinking lights at night due to the Starmie on the sea floor; they seem to be trying to send a message to the stars above.",
"is home to a peaceful pod of Mantine who are unfortunately being hunted by local poachers.",
"periodically swarms with Phione from an unknown source; local legend says that they originate from Manaphy itself.",
"is famous for the many sunbathing Alomomola that dwell here; their soothing membranes can be used to heal any wound.",
"is known for being impossible to swim in during Qwilfish mating season, though some people try every year anyways.",
"is home to a ferocious Gyarados that has not stopped rampaging in a fortnight.",
"is rumored to be home to an impossibly enormous Wailord, larger than the biggest one known to man thus far.",
"is alight with a school of luminescent Finneon basking in the sunlight.",
"This sea is home to a colony of intelligent Octillery who have used learned how to open fishing nets and cages in order to find easy prey, at the expense of local fishermen.",
"is home to a colony of hungry Cramorant that do not take kindly to intruders.",
"is teeming with Arrokuda and Barraskewda that will impale themselves on anything they sense moving in the water.",
"is home to an undefeated Grapploct that emerges from the water periodically in search of challengers.",
"is filled with the sorrowful corpses of ghostly Cursola.",
"is littered with electrified Pincurchin as far as the eye can see."
];

var OceanMainPKMN = ["Tentacool","Frillish","Wailmer","Seadra","Wishiwashi","Kingdra","Starmie","Mantine","Phione","Alomomola","Qwilfish","Gyarados","Wailord","Finneon","Octillery","Cramorant","Arrokuda","Grapploct","Cursola","Pincurchin"];


var OceanLegend = ["Mew","Lugia","Kyogre","Manaphy"];

//REEF (19)
var ReefCommon = ["Tentacool","Magikarp","Wingull","Wishiwashi","Arrokuda"];
var ReefUncommon = ["Shellder","Horsea","Staryu","Chinchou","Qwilfish","Corsola","Remoraid","Clamperl","Luvdisc","Shellos","Finneon","Frillish","Clauncher","Mareanie","Pyukumuku","Bruxish","Pincurchin"];
var ReefRare = ["Lapras","Mantine","Feebas","Sharpedo","Phione","Alomomola","Cursola"];

var ReefCommon_L = ["Tentacruel","Gyarados","Pelipper","Wishiwashi","Barraskewda"];
var ReefUncommon_L = ["Cloyster","Seadra","Starmie","Lanturn","Qwilfish","Corsola","Octillery","Huntail","Gorebyss","Luvdisc","Gastrodon","Lumineon","Jellicent","Clawitzer","Toxapex","Pyukumuku","Bruxish","Pincurchin"];
var ReefRare_L = ["Lapras","Mantine","Milotic","Sharpedo","Phione","Alomomola","Cursola","Kingdra"];

var ReefDescriptor = ["This ocean ","This sea ","This bay ","This gulf ","This water ","This reef ","This shallow ","This atoll ","This lagoon ","This shoal ","This barrier reef "];
var ReefType =["Ocean","Sea","Bay","Gulf","Waters","Reef","Shallows","Atoll","Lagoon","Shoal","Barrier Reef"];

var ReefMain = ["has become infested by Tentacool and Tentacruel, who have pushed out almost all other Pokémon from the area.",
"is home to a ferocious Gyarados who has not stopped rampaging in a fortnight.",
"is a vivid pink due to the pairs of mating Luvdisc beneath the waves; local legend says that their mating season is the optimal time to find love.",
"is famous for its beautiful Corsola reefs; however, Mareanie and Toxapex have begun to terrorize them in recent years.",
"is the territory of a tiny Clawitzer whose claw packs an enormous punch for its size.",
"is home to a crafty Bruxish that will entice swimmers with its bright colors before chomping down with its sharp teeth.",
"is notorious for being home to Frillish and Jellicent that delight in pulling ships beneath the waves.",
"is teeming with Wishiwashi, who seem to be able to school in quite large numbers...",
"is the home of many aggressive Gorebyss, who will attack swimmers in groups in order to suck out their bodily fluids.",
"periodically undergoes whirlpools due to the actions of a Kingdra that dwells beneath the waves.",
"glows with twinkling, blinking lights at night due to the Starmie on the sea floor; they seem to be trying to send a message to the stars above.",
"is home to a pod of elegant Lapras; however, they seem to have had a bad encounter with humans before, and are hesitant to run into them again.",
"houses a school of Sharpedo known for terrorizing ships and swimmers alike; the school’s leader can be distinguished by a large gash on the side of its head.",
"is home to a colony of intelligent Octillery who have used learned how to open fishing nets and cages in order to find easy prey, at the expense of local fishermen.",
"is home to a peaceful pod of Mantine who are unfortunately being hunted by local poachers.",
"periodically swarms with Phione from an unknown source; local legend says that they originate from Manaphy itself.",
"is famous for the many sunbathing Alomomola that dwell here; their soothing membranes can be used to heal any wound.",
"seems to be a relic of prehistoric times, with ancient Lileep and Cradily still dwelling here.",
"seems to be a relic of prehistoric times, with ancient Anorith and Armaldo still dwelling here.",
"is teeming with Arrokuda and Barraskewda that will impale themselves on anything they sense moving in the water.",
"is filled with the sorrowful corpses of ghostly Cursola.",
"is littered with electrified Pincurchin as far as the eye can see."
];

var ReefMainPKMN = ["Tentacool","Gyarados","Luvdisc","Corsola","Clawitzer","Bruxish","Frillish","Wishiwashi","Gorebyss","Kingdra","Starmie","Lapras","Sharpedo","Octillery","Mantine","Phione","Alomomola","Lileep","Anorith","Arrokuda","Cursola", "Pincurchin"];

var ReefLegend = ["Mew","Manaphy"];

//POLAR (20)
var PolarCommon = ["Tentacool","Wingull","Magikarp","Wishiwashi"];
var PolarUncommon = ["Spheal","Seel","Shellder","Frillish","Bergmite","Pelipper","Tentacruel","Cramorant","Clobbopus","Pincurchin"];
var PolarRare = ["Piplup","Lapras","Cloyster","Dewgong","Eiscue"];

var PolarCommon_L = ["Tentacruel","Pelipper","Gyarados","Wishiwashi"];
var PolarUncommon_L = ["Sealeo","Dewgong","Cloyster","Jellicent","Avalugg","Cramorant","Grapploct","Pincurchin"];
var PolarRare_L = ["Prinplup","Lapras","Walrein","Eiscue"];

var PolarDescriptor = ["This sea ","This ocean ","This floe ","This water ","This bay ","This gulf ","This fjord ","This inlet "];
var PolarType = ["Sea","Ocean","Floes","Waters","Bay","Gulf","Fjord","Inlet"];

var PolarMain = ["This sea has become infested by Tentacool and Tentacruel, who have pushed out almost all other Pokémon from the area.",
"is home to a pod of Dewgong that seems to be trying to lead travelers somewhere in particular...",
"houses a colony of playful Seel who enjoy the company of travelers.",
"is teeming with Pelipper in the sky; they seem to have noticed an enormous school of fish Pokémon beneath the waves.",
"is home to many large Shellder and Cloyster, who have grown quite sturdy due to the cold temperature of the waters.",
"is notorious for being home to Frillish and Jellicent that delight in pulling ships beneath the waves.",
"is teeming with Wishiwashi, who seem to be able to school in quite large numbers...",
"is floating with Bergmite and Avalugg that pose a danger to aquatic vessels.",
"is home to a pod of elegant Lapras; however, they seem to have had a bad encounter with humans before, and are hesitant to encounter them again.",
"is overseen by a proud Empoleon.",
"home to a large colony of Spheal, Sealeo, and Walrein, but a recent heat wave is threatening their fragile ice.",
"is home to a colony of hungry Cramorant that do not take kindly to intruders.",
"is home to an undefeated Grapploct that emerges from the water periodically in search of challengers.",
"is littered with electrified Pincurchin as far as the eye can see.",
"is where ocean currents have dropped off and effectively stranded an enormous flock of Eiscue."
];

var PolarMainPKMN = ["Tentacool","Dewgong","Seel","Pelipper","Shellder","Frillish","Wishiwashi","Bergmite","Lapras","Empoleon","Spheal","Cramorant","Grapploct","Pincurchin","Eiscue"];

var PolarLegend = ["Mew","Lugia"];

//ABYSS (21)
var AbyssCommon = ["Chinchou","Clamperl","Frillish"];
var AbyssUncommon = ["Finneon","Skrelp","Wimpod","Pyukumuku","Jellicent","Pincurchin"];
var AbyssRare = ["Cloyster","Relicanth","Dhelmise","Kingdra","Lanturn","Lumineon","Cursola"];

var AbyssCommon_L = ["Lanturn","Clamperl","Jellicent"];
var AbyssUncommon_L = ["Lumineon","Dragalge","Golisopod","Pyukumuku","Pincurchin","Huntail","Gorebyss"];
var AbyssRare_L = ["Cloyster","Relicanth","Dhelmise","Kingdra","Cursola"];

var AbyssDescriptor = ["This abyss ","This deep ","This trench ","This chasm ", "This depth ","This underwater cave ","This underwater cavern "];
var AbyssType = ["Abyss","Deep","Trench","Chasm","Depths","Cave","Cavern"];

var AbyssMain = ["is said to be the resting site of a sunken ship; a Dhelmise is thought to stalk the wreckage site for prey.",
"periodically flashes with a blinding light due to the Lanturn that call it home; though not particularly aggressive, they will not hesitate to shock the water around them if threatened.",
"seems to be a relic of prehistoric times, with ancient Relicanth still dwelling here.",
"is the lair of a very old Cloyster, who has grown so large that it can no longer leave; it shoots down prey swimming above with its spikes.",
"is a haven for cowardly Wimpod; large Golisopod patrol its borders in order to keep them safe, though they will likely flee at the slightest hint of confrontation.",
"glows with the mesmerizing light of Finneon and Lumineon, who congregate here during the day.",
"is the lair of a giant Dragalge, infamous amongst sailors for pulling ships to their doom.",
"is notorious for being home to Frillish and Jellicent that delight in pulling ships beneath the waves.",
"is rumored to be the site of an sunken city, now ruled by a pair of Jellicent.",
"is the home of many aggressive Huntail who have gone quite some time without a decent meal.",
"is periodically plagued by whirlpools due to the actions of a Kingdra that dwells beneath the waves.",
"seems to be a relic of prehistoric times, with ancient Omanyte and Omastar still dwelling here.",
"seems to be a relic of prehistoric times, with ancient Kabuto and Kabutops still dwelling here.",
"is filled with the sorrowful corpses of ghostly Cursola.",
"is littered with electrified Pincurchin as far as the eye can see."
];

var AbyssMainPKMN = ["Dhelmise","Lanturn","Relicanth","Cloyster","Wimpod","Lumineon","Dragalge","Frillish","Jellicent","Huntail","Kingdra","Omanyte","Kabuto","Cursola","Pincurchin"];

var AbyssLegend = ["Mew","Lugia","Kyogre","Nihilego"];

//SWAMP (22)
var SwampCommon = ["Oddish","Bellsprout","Wooper","Rookidee","Poliwag","Marill"];
var SwampUncommon = ["Murkrow","Surskit","Barboach","Skorupi","Croagunk","Carnivine","Tympole","Karrablast","Shelmet","Rufflet"];
var SwampRare = ["Tangela","Yanma","Mudkip","Stunfisk","Froakie","Goomy","Toxel"];

var SwampCommon_L = ["Gloom","Weepinbell","Quagsire","Corvisquire","Poliwhirl","Azumarill"];
var SwampUncommon_L = ["Murkrow","Masquerain","Whiscash","Drapion","Toxicroak","Carnivine","Palpitoad","Accelgor","Escavalier","Rufflet"];
var SwampRare_L = ["Tangrowth","Yanmega","Marshtomp","Stunfisk","Frogadier","Sliggoo","Toxtricity","Honchkrow","Braviary"];

var SwampDescriptor = ["This swamp ","This bog ","This marsh ","This fen ","This mire ","This moor ","This mangrove ","This estuary ","This bayou ","This wetland ","This swamp ","This delta "];
var SwampType = ["Swamp","Bog","Marsh","Fen","Mire","Moor","Mangrove","Estuary","Bayou","Wetland","Swamp","Delta"];

var SwampMain = ["is home to a colony of Goomy, watched over by a friendly—if a bit overly-affectionate—Goodra.",
"is protected by a stealthy Greninja.",
"is booby-trapped with dozens of Stunfisk lying in the muck.",
"is watched over by a large, menacing Tangrowth and its surprisingly-agile Tangela young.",
"is the main hunting ground of a fearsome Yanmega.",
"is defended by a bulky Swampert.",
"is home to a flock of Braviary that are eager to prove their courage by fighting in defense of their territory.",
"is home to many hapless Shelmet, who in turn have their shells stolen by opportunistic Karrablast.",
"is alive with the loud palpitations of a symphony of Tympole, Palpitoad, and Seismitoad.",
"tremors with the activity of a rogue giant Whiscash.",
"is the home of a large colony of sneaky--and poisonous--Croagunk and Toxicroak.",
"houses a giant colony of predatory Carnivine, said to be keen on targeting hapless travelers.",
"is infamous for the many poisonous Skorupi that dwell within, as well as the aggressive Drapion that prowls the muck.",
"is home to an enormous Oddish colony, keeping intruders far away through the overpowering stench of Gloom.",
"is home to one of the largest Victreebel colonies known to man, inhabiting its deep center.",
"is home to many playful Wooper that will take the belongings of travelers deeper into its center in order to “have fun”.",
"is where Masquerain come to mate; in the following months, its surface is teeming with Surskit competing with one another for food.",
"is the domain of a rogue Corviknight who dislikes humans after a traumatic incident as a flying taxi.",
"blares with the sound of a strumming Toxtricity who is looking for a good fight.",
"is ruled by an aggressive Poliwrath, who is eager to challenge any who approach.",
"is ruled by an authoritative Politoed, who holds court over dozens of submissive Poliwhirl and Poliwag.",
"is home to a colony of Marill and Azumarill that are surprisingly strong for their size."
];

var SwampMainPKMN = ["Goomy","Greninja","Stunfisk","Tangrowth","Yanmega","Swampert","Braviary","Shelmet","Tympole","Whiscash","Croagunk","Carnivine","Skorupi","Oddish","Victreebel","Wooper","Masquerain","Corviknight","Toxtricity","Poliwrath","Politoed","Marill"];

var SwampLegend = ["Mew","Poipole"];

//GLACIER (23)
var GlacierCommon = ["Snorunt","Vanillite","Bergmite"];
var GlacierUncommon = ["Swinub","Spheal","Cubchoo","Smoochum","Snover"];
var GlacierRare = ["Jynx","Delibird","Cryogonal","Crabominable","Minior","Snom","Perrserker","Mr. Rime"];

var GlacierCommon_L = ["Snorunt","Vanillish","Bergmite"];
var GlacierUncommon_L = ["Piloswine","Sealeo","Beartic","Jynx","Abomasnow","Glalie","Froslass"];
var GlacierRare_L = ["Walrein","Delibird","Cryogonal","Crabominable","Minior","Snom","Perrserker","Mr. Rime","Mamoswine"];

var GlacierDescriptor = ["This glacier ","This icecap ","This floe ","This snowcap ","This peak ","This summit ","This snowfield ","This icefield "];
var GlacierType = ["Glacier","Icecap","Floes","Snowcap","Peak","Summit","Snowfield","Icefield"];

var GlacierMain = ["This glacier is home to a colony of Jynx that will mesmerize onlookers with the moving of their hips.",
"is the home of a benevolent Delibird known for aiding weary travelers with gifts.",
"is the home of a large colony of Snover; a giant, rogue Abomasnow is said to lurk somewhere in the flurries of snow.",
"is home to a herd of Mamoswine that are easily spooked into charging.",
"is in the territory of a pair of sneaky Weavile that have become skilled at attacking unwary travelers for their supplies.",
"is the hunting ground for a group of Cryogonal that can seemingly disappear into thin air.",
"is said to be home to a giant Crabominable, though no sightings have been confirmed.",
"is home to a colony of Vanillite, Vanillish, and Vanilluxe that keep their home constantly cloaked in icy mist.",
"is protected by a large and easily-angered Beartic.",
"is home to an enormous colony of Snorunt and Glalie, who are surprisingly friendly given their reputations.",
"is littered with frozen corpses; some suspect it of being the lair of a powerful Froslass.",
"is famous for training Swinub that can sniff out rare truffles beneath the soil.",
"is home to a large colony of Spheal, Sealeo, and Walrein, but a recent heat wave is threatening their fragile ice.",
"seems to be a relic of prehistoric times, with ancient Amaura and Aurorus still dwelling here.",
"is periodically pillaged by a band of marauding Perrserker.",
"is where a famous Mr. Rime holds its performances.",
"glitters with tiny ice crystals in the air, a sign that a majestic Frosmoth is nearby."
 ];

var GlacierMainPKMN = ["Jynx","Delibird","Abomasnow","Mamoswine","Weavile","Cryogonal","Crabominable","Vanillite","Beartic","Snorunt","Froslass","Swinub","Spheal","Amaura","Perrserker","Mr. Rime","Frosmoth"];

var GlacierLegend = ["Mew","Regice","Kyurem","Glastrier"];

//TUNDRA (24)
var TundraCommon = ["Snover","Skwovet","Hoothoot","Sentret","Poochyena"];
var TundraUncommon = ["Teddiursa","Stantler","Rufflet","Scatterbug","Swinub","Noctowl","Mightyena","Cubchoo"];
var TundraRare = ["Sneasel","Delibird","Ursaring","Braviary","Piloswine","Snom","Skarmory"];

var TundraCommon_L = ["Abomasnow","Greedent","Noctowl","Furret","Mightyena"];
var TundraUncommon_L = ["Ursaring","Stantler","Rufflet","Spewpa","Piloswine","Snom","Skarmory","Beartic"];
var TundraRare_L = ["Weavile","Delibird","Braviary","Mamoswine","Frosmoth"];

var TundraDescriptor = ["This boreal forest ", "This wood ","This coniferous forest ","This tundra ", "This taiga "];
var TundraType = ["Forest","Woods","Forest","Tundra","Taiga"];

var TundraMain = ["is the home of a large colony of Snover; a giant, rogue Abomasnow is said to lurk somewhere in the flurries of snow.",
"is home to many inquisitive Snover that are fearless when it comes to investigating travelers.",
"is home to a particularly resilient colony of Vivillon with a unique pattern, adapted to life in the cold.",
"is the territory of an angry Ursaring who has been awoken prematurely from hibernation.",
"is home to a herd of Mamoswine that are easily spooked into charging.",
"hides many tricky Sneasel, who have been raiding the meager supplies of the nearby village at night.",
"houses a flock of Braviary that are eager to prove their courage by fighting in defense of their territory.",
"is in the territory of a pair of sneaky Weavile that have become skilled at attacking unwary travelers for their supplies.",
"is the home of a large herd of Stantler that keep themselves hidden through illusions.",
"is the home of a benevolent Delibird known for aiding weary travelers with gifts.",
"seems to be a relic of prehistoric times, with ancient Amaura and Aurorus still dwelling here.",
"teems with a herd of Skwovet that have learned to overwhelm travelers with their sheer numbers in order to get at their Berries.",
"is home to an grossly oversized Greedent that has its eye on any and all Berries passing travelers may have on hand.",
"glitters with tiny ice crystals in the air, a sign that a majestic Frosmoth is nearby.",
"is home to a wizened old Noctowl that locals revere as a mystical sage.",
"is home to a colony of extremely-skittish Sentret.",
"is prowled by a pack of territorial Mightyena.",
"is protected by a large and easily-angered Beartic."
];

var TundraMainPKMN = ["Abomasnow","Snover","Vivillon","Ursaring","Mamoswine","Sneasel","Braviary","Weavile","Stantler","Delibird","Amaura","Skwovet","Greedent","Frosmoth","Noctowl","Sentret","Mightyena","Beartic"];

var TundraLegend = ["Mew","Raikou","Entei","Suicune","Kyurem","Calyrex"];

//RUIN (25)
var RuinCommon = ["Gastly"];
var RuinUncommon = ["Vulpix","Abra","Natu","Baltoy","Darumaka","Sigilyph","Bronzor","Munna","Yamask","Elgyem","Golett","Honedge","Sinistea"];
var RuinRare = ["Unown","Solrock","Lunatone","Chimecho","Absol","Spiritomb","Volcarona","Stonjourner","Runerigus"];

var RuinCommon_L = ["Haunter","Abra","Natu"];
var RuinUncommon_L = ["Ninetales","Kadabra","Xatu","Claydol","Darmanitan","Sigilyph","Bronzong","Musharna","Cofagrigus","Beheeyem","Golurk","Doublade","Polteageist"];
var RuinRare_L = ["Unown","Solrock","Lunatone","Chimecho","Absol","Spiritomb","Volcarona","Stonjourner","Runerigus"];

var RuinDescriptor = ["This ruin ","This temple ","This cemetery ","This graveyard ","This shrine ", "This monument "];
var RuinType = ["Ruins","Temple","Cemetery","Graveyard","Shrine","Monument"];

var RuinMain = ["is absolutely teeming with Gastly that delight in terrorizing explorers.",
"is said to be protected by an ancient, mystical Ninetales.",
"is said to be protected by an all-knowing Alakazam.",
"is said to be home to a mystical Xatu that can see into the future.",
"is home to a huge swarm of noisy Chingling and harmonious Chimecho, whose chimes fill the air with a mystical melody.",
"is mysteriously full of clinking Bronzor and clanging Bronzong, perhaps indicating it was a site of some importance in ancient times.",
"is patrolled by roving Claydol that seem intent on eliminating any and all intruders.",
"is patrolled by mechanical Golurk that seem intent on eliminating any and all intruders.",
"is patrolled by watchful Sigilyph that seem intent on eliminating any and all intruders.",
"is said to be the home of a sun deity.",
"is home to a mysterious Absol that seems to be trying to warn you of something.",
"is littered with statues that strongly resemble the Pokémon Darmanitan.",
"is actually the lair of a frightened Musharna, who has manifested the unpredictable contents of its Dream Mist into reality.",
"is gilded with extravagant gold, though rumors say a Cofagrigus lurks within to deal with greedy intruders.",
"is filled with mysterious symbols that almost seem to be staring right at you...",
"feels ominous; locals say that if you take more than 108 steps inside, a fearsome demon will be summoned.",
"seems oddly futuristic; said to be the home base of Elgyem and Beheyeem, bright, flickering lights within make you feel light-headed and woozy.",
"seems to be a palace from past centuries; the swords on the wall seem to be moving of their own accord, and the sword of an ancient king is said to be dwelling within.",
"is filled with hundreds of Natu that are all staring right at you, their eyes both fixated and unblinking.",
"is infested with Sinistea thanks to a prolific Polteageist pouring its tea into all sorts of vessels.",
"is the lair of a terrifying Runerigus that locals tell all sorts of harrowing stories about.",
"is where, at a certain time of year, Stonjourner from around the world will congregate to form a circle; something mysterious is said to occur at the circle's center."
 ];

var RuinMainPKMN = ["Gastly","Ninetales","Alakazam","Xatu","Chingling","Bronzor","Claydol","Golurk","Sigilyph","Volcarona","Absol","Darmanitan","Musharna","Cofagrigus","Unown","Spiritomb","Elgyem","Honedge","Natu","Sinistea","Runerigus","Stonjourner"];

var RuinLegend = ["Mew","Celebi","Ho-oh","Regirock","Regice","Registeel","Rayquaza","Dialga","Palkia","Regigigas","Giratina","Arceus","Landorus","Hoopa","Cosmog","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Regieleki","Regidrago","Spectrier"];

habitatList_common = [ForestCommon,JungleCommon,WoodlandCommon,FieldCommon,GrasslandCommon,CityCommon,PlantCommon,VolcanoCommon,CaveCommon,MountainCommon,DesertCommon,BadlandCommon,PondCommon,LakeCommon,RiverCommon,RiversideCommon,BeachCommon,OceanCommon,ReefCommon,PolarCommon,AbyssCommon,SwampCommon,GlacierCommon,TundraCommon,RuinCommon];
habitatList_uncommon = [ForestUncommon,JungleUncommon,WoodlandUncommon,FieldUncommon,GrasslandUncommon,CityUncommon,PlantUncommon,VolcanoUncommon,CaveUncommon,MountainUncommon,DesertUncommon,BadlandUncommon,PondUncommon,LakeUncommon,RiverUncommon,RiversideUncommon,BeachUncommon,OceanUncommon,ReefUncommon,PolarUncommon,AbyssUncommon,SwampUncommon,GlacierUncommon,TundraUncommon,RuinUncommon];
habitatList_rare = [ForestRare,JungleRare,WoodlandRare,FieldRare,GrasslandRare,CityRare,PlantRare,VolcanoRare,CaveRare,MountainRare,DesertRare,BadlandRare,PondRare,LakeRare,RiverRare,RiversideRare,BeachRare,OceanRare,ReefRare,PolarRare,AbyssRare,SwampRare,GlacierRare,TundraRare,RuinRare];

habitatList_common_L = [ForestCommon_L,JungleCommon_L,WoodlandCommon_L,FieldCommon_L,GrasslandCommon_L,CityCommon_L,PlantCommon_L,VolcanoCommon_L,CaveCommon_L,MountainCommon_L,DesertCommon_L,BadlandCommon_L,PondCommon_L,LakeCommon_L,RiverCommon_L,RiversideCommon_L,BeachCommon_L,OceanCommon_L,ReefCommon_L,PolarCommon_L,AbyssCommon_L,SwampCommon_L,GlacierCommon_L,TundraCommon_L,RuinCommon_L];
habitatList_uncommon_L = [ForestUncommon_L,JungleUncommon_L,WoodlandUncommon_L,FieldUncommon_L,GrasslandUncommon_L,CityUncommon_L,PlantUncommon_L,VolcanoUncommon_L,CaveUncommon_L,MountainUncommon_L,DesertUncommon_L,BadlandUncommon_L,PondUncommon_L,LakeUncommon_L,RiverUncommon_L,RiversideUncommon_L,BeachUncommon_L,OceanUncommon_L,ReefUncommon_L,PolarUncommon_L,AbyssUncommon_L,SwampUncommon_L,GlacierUncommon_L,TundraUncommon_L,RuinUncommon_L];
habitatList_rare_L = [ForestRare_L,JungleRare_L,WoodlandRare_L,FieldRare_L,GrasslandRare_L,CityRare_L,PlantRare_L,VolcanoRare_L,CaveRare_L,MountainRare_L,DesertRare_L,BadlandRare_L,PondRare_L,LakeRare_L,RiverRare_L,RiversideRare_L,BeachRare_L,OceanRare_L,ReefRare_L,PolarRare_L,AbyssRare_L,SwampRare_L,GlacierRare_L,TundraRare_L,RuinRare_L];

habitatList_legend = [ForestLegend,JungleLegend,WoodlandLegend,FieldLegend,GrasslandLegend,CityLegend,PlantLegend,VolcanoLegend,CaveLegend,MountainLegend,DesertLegend,BadlandLegend,PondLegend,LakeLegend,RiverLegend,RiversideLegend,BeachLegend,OceanLegend,ReefLegend,PolarLegend,AbyssLegend,SwampLegend,GlacierLegend,TundraLegend,RuinLegend];

habitatTypeList = [ForestType,JungleType,WoodlandType,FieldType,GrasslandType,CityType,PlantType,VolcanoType,CaveType,MountainType,DesertType,BadlandType,PondType,LakeType,RiverType,RiversideType,BeachType,OceanType,ReefType,PolarType,AbyssType,SwampType,GlacierType,TundraType,RuinType];

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        n = arr.length;
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function guideSwitchOn() {
  document.getElementById("HowTo").style.display = "block";
  document.getElementById("hideGuideButton").style.display = "block";
  document.getElementById("text1").style.display = "block";
  document.getElementById("text2").style.display = "block";
  document.getElementById("text3").style.display = "block";
  document.getElementById("text4").style.display = "block";
  document.getElementById("text5").style.display = "block";
  document.getElementById("showGuideButton").style.display = "none";
}
function guideSwitchOff() {
  document.getElementById("HowTo").style.display = "none";
  document.getElementById("hideGuideButton").style.display = "none";
  document.getElementById("text1").style.display = "none";
  document.getElementById("text2").style.display = "none";
  document.getElementById("text3").style.display = "none";
  document.getElementById("text4").style.display = "none";
  document.getElementById("text5").style.display = "none";
  document.getElementById("showGuideButton").style.display = "block";
}

function setHabitat(habitatID,output=true) {
  if (habitatID == 1) {
    setCommon = ForestCommon;
    setUncommon = ForestUncommon;
    setRare = ForestRare;
    setDescriptor = ForestDescriptor;
    setMain = ForestMain;
    MainLinePKMN = ForestMainPKMN;
    HabitatType = ForestType;
    prefix = calmPrefix;
    suffix = calmSuffix;
    numCommon = 2;
    numUncommon = 3;
    numRare = 1;
    setLegend = ForestLegend;
    setColor = "#4da814";
  }
  else if (habitatID == 2) {
    setCommon = JungleCommon;
    setUncommon = JungleUncommon;
    setRare = JungleRare;
    setDescriptor = JungleDescriptor;
    setMain = JungleMain;
    MainLinePKMN = JungleMainPKMN;
    HabitatType = JungleType;
    prefix = calmPrefix;
    suffix = calmSuffix;
    numCommon = 2;
    numUncommon = 3;
    numRare = 1;
    setLegend = JungleLegend;
    setColor = "#367d44";
  }
  else if (habitatID == 3) {
    setCommon = WoodlandCommon;
    setUncommon = WoodlandUncommon;
    setRare = WoodlandRare;
    setDescriptor = WoodlandDescriptor;
    setMain = WoodlandMain;
    MainLinePKMN = WoodlandMainPKMN;
    HabitatType = WoodlandType;
    prefix = calmPrefix;
    suffix = calmSuffix;
    numCommon = 2;
    numUncommon = 3;
    numRare = 1;
    setLegend = WoodlandLegend;
    setColor = "#20b566";
  }
  else if (habitatID == 4) {
    setCommon = FieldCommon;
    setUncommon = FieldUncommon;
    setRare = FieldRare;
    setDescriptor = FieldDescriptor;
    setMain = FieldMain;
    MainLinePKMN = FieldMainPKMN;
    HabitatType = FieldType;
    prefix = calmPrefix;
    suffix = calmSuffix;
    numCommon = 2;
    numUncommon = 3;
    numRare = 1;
    setLegend = FieldLegend;
    setColor = "#9bd979";
  }
  else if (habitatID == 5) {
    setCommon = GrasslandCommon;
    setUncommon = GrasslandUncommon;
    setRare = GrasslandRare;
    setDescriptor = GrasslandDescriptor;
    setMain = GrasslandMain;
    MainLinePKMN = GrasslandMainPKMN;
    HabitatType = GrasslandType;
    prefix = calmPrefix;
    suffix = calmSuffix;
    numCommon = 2;
    numUncommon = 3;
    numRare = 1;
    setLegend = GrasslandLegend;
    setColor = "#d0d452";
  }
  else if (habitatID == 6) {
    setCommon = CityCommon;
    setUncommon = CityUncommon;
    setRare = CityRare;
    setDescriptor = CityDescriptor;
    setMain = CityMain;
    MainLinePKMN = CityMainPKMN;
    HabitatType = CityType;
    prefix = calmPrefix.concat(angryPrefix,waterPrefix);
    suffix = calmSuffix.concat(angrySuffix,waterSuffix);
    numCommon = 2;
    numUncommon = 3;
    numRare = 1;
    setLegend = CityLegend;
    setColor = "#828282";
  }
  else if (habitatID == 7) {
    setCommon = PlantCommon;
    setUncommon = PlantUncommon;
    setRare = PlantRare;
    setDescriptor = PlantDescriptor;
    setMain = PlantMain;
    MainLinePKMN = PlantMainPKMN;
    HabitatType = PlantType;
    prefix = calmPrefix.concat(angryPrefix,waterPrefix);
    suffix = calmSuffix.concat(angrySuffix,waterSuffix);
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = PlantLegend;
    setColor = "#bababa";
  }
  else if (habitatID == 8) {
    setCommon = VolcanoCommon;
    setUncommon = VolcanoUncommon;
    setRare = VolcanoRare;
    setDescriptor = VolcanoDescriptor;
    setMain = VolcanoMain;
    MainLinePKMN = VolcanoMainPKMN;
    HabitatType = VolcanoType;
    prefix = angryPrefix;
    suffix = angrySuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = VolcanoLegend;
    setColor = "#d60303";
  }
  else if (habitatID == 9) {
    setCommon = CaveCommon;
    setUncommon = CaveUncommon;
    setRare = CaveRare;
    setDescriptor = CaveDescriptor;
    setMain = CaveMain;
    MainLinePKMN = CaveMainPKMN;
    HabitatType = CaveType;
    prefix = angryPrefix;
    suffix = angrySuffix;
    numCommon = 2;
    numUncommon = 3;
    numRare = 1;
    setLegend = CaveLegend;
    setColor = "#85660a";
  }
  else if (habitatID == 10) {
    setCommon = MountainCommon;
    setUncommon = MountainUncommon;
    setRare = MountainRare;
    setDescriptor = MountainDescriptor;
    setMain = MountainMain;
    MainLinePKMN = MountainMainPKMN;
    HabitatType = MountainType;
    prefix = angryPrefix;
    suffix = angrySuffix;
    numCommon = 2;
    numUncommon = 3;
    numRare = 1;
    setLegend = MountainLegend;
    setColor = "#bdae71";
  }
 else if (habitatID == 11) {
    setCommon = DesertCommon;
    setUncommon = DesertUncommon;
    setRare = DesertRare;
    setDescriptor = DesertDescriptor;
    setMain = DesertMain;
    MainLinePKMN = DesertMainPKMN;
    HabitatType = DesertType;
    prefix = angryPrefix;
    suffix = angrySuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = DesertLegend;
    setColor = "#dec952";
  }
  else if (habitatID == 12) {
    setCommon = BadlandCommon;
    setUncommon = BadlandUncommon;
    setRare = BadlandRare;
    setDescriptor = BadlandDescriptor;
    setMain = BadlandMain;
    MainLinePKMN = BadlandMainPKMN;
    HabitatType = BadlandType;
    prefix = angryPrefix;
    suffix = angrySuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = BadlandLegend;
    setColor = "#eb9142";
  }
  else if (habitatID == 13) {
    setCommon = PondCommon;
    setUncommon = PondUncommon;
    setRare = PondRare;
    setDescriptor = PondDescriptor;
    setMain = PondMain;
    MainLinePKMN = PondMainPKMN;
    HabitatType = PondType;
    prefix = calmPrefix;
    suffix = calmSuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = PondLegend;
    setColor = "#36cfb0";
  }
  else if (habitatID == 14) {
    setCommon = LakeCommon;
    setUncommon = LakeUncommon;
    setRare = LakeRare;
    setDescriptor = LakeDescriptor;
    setMain = LakeMain;
    MainLinePKMN = LakeMainPKMN;
    HabitatType = LakeType;
    prefix = calmPrefix;
    suffix = waterSuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = LakeLegend;
    setColor = "#8dc3f2";
  }
 else if (habitatID == 15) {
    setCommon = RiverCommon;
    setUncommon = RiverUncommon;
    setRare = RiverRare;
    setDescriptor = RiverDescriptor;
    setMain = RiverMain;
    MainLinePKMN = RiverMainPKMN;
    HabitatType = RiverType;
    prefix = calmPrefix;
    suffix = waterSuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = RiverLegend;
    setColor = "#6db3f5";
  }
  else if (habitatID == 16) {
    setCommon = RiversideCommon;
    setUncommon = RiversideUncommon;
    setRare = RiversideRare;
    setDescriptor = RiversideDescriptor;
    setMain = RiversideMain;
    MainLinePKMN = RiversideMainPKMN;
    HabitatType = RiversideType;
    prefix = calmPrefix;
    suffix = waterSuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = RiversideLegend;
    setColor = "#88bf9f";
  }
  else if (habitatID == 17) {
    setCommon = BeachCommon;
    setUncommon = BeachUncommon;
    setRare = BeachRare;
    setDescriptor = BeachDescriptor;
    setMain = BeachMain;
    MainLinePKMN = BeachMainPKMN;
    HabitatType = BeachType;
    prefix = waterPrefix;
    suffix = waterSuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = BeachLegend;
    setColor = "#e6db9a";
  }
  else if (habitatID == 18) {
    setCommon = OceanCommon;
    setUncommon = OceanUncommon;
    setRare = OceanRare;
    setDescriptor = OceanDescriptor;
    setMain = OceanMain;
    MainLinePKMN = OceanMainPKMN;
    HabitatType = OceanType;
    prefix = waterPrefix;
    suffix = waterSuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = OceanLegend;
    setColor = "#5b8eed";
  }
  else if (habitatID == 19) {
    setCommon = ReefCommon;
    setUncommon = ReefUncommon;
    setRare = ReefRare;
    setDescriptor = ReefDescriptor;
    setMain = ReefMain;
    MainLinePKMN = ReefMainPKMN;
    HabitatType = ReefType;
    prefix = waterPrefix;
    suffix = waterSuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = ReefLegend;
    setColor = "#81cca9";
  }
  else if (habitatID == 20) {
    setCommon = PolarCommon;
    setUncommon = PolarUncommon;
    setRare = PolarRare;
    setDescriptor = PolarDescriptor;
    setMain = PolarMain;
    MainLinePKMN = PolarMainPKMN;
    HabitatType = PolarType;
    prefix = waterPrefix;
    suffix = waterSuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = PolarLegend;
    setColor = "#b1d9d8";
  }
  else if (habitatID == 21) {
    setCommon = AbyssCommon;
    setUncommon = AbyssUncommon;
    setRare = AbyssRare;
    setDescriptor = AbyssDescriptor;
    setMain = AbyssMain;
    MainLinePKMN = AbyssMainPKMN;
    HabitatType = AbyssType;
    prefix = angryPrefix.concat(waterPrefix);
    suffix = waterSuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = AbyssLegend;
    setColor = "#5774ad";
  }
 else if (habitatID == 22) {
    setCommon = SwampCommon;
    setUncommon = SwampUncommon;
    setRare = SwampRare;
    setDescriptor = SwampDescriptor;
    setMain = SwampMain;
    MainLinePKMN = SwampMainPKMN;
    HabitatType = SwampType;
    prefix = calmPrefix;
    suffix = calmSuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = SwampLegend;
    setColor = "#419c78";
  }
  else if (habitatID == 23) {
    setCommon = GlacierCommon;
    setUncommon = GlacierUncommon;
    setRare = GlacierRare;
    setDescriptor = GlacierDescriptor;
    setMain = GlacierMain;
    MainLinePKMN = GlacierMainPKMN;
    HabitatType = GlacierType;
    prefix = angryPrefix;
    suffix = angrySuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = GlacierLegend;
    setColor = "#91dbd4";
  }
  else if (habitatID == 24) {
    setCommon = TundraCommon;
    setUncommon = TundraUncommon;
    setRare = TundraRare;
    setDescriptor = TundraDescriptor;
    setMain = TundraMain;
    MainLinePKMN = TundraMainPKMN;
    HabitatType = TundraType;
    prefix = angryPrefix;
    suffix = angrySuffix;
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = TundraLegend;
    setColor = "#2ea38b";
  }
  else if (habitatID == 25) {
    setCommon = RuinCommon;
    setUncommon = RuinUncommon;
    setRare = RuinRare;
    setDescriptor = RuinDescriptor;
    setMain = RuinMain;
    MainLinePKMN = RuinMainPKMN;
    HabitatType = RuinType;
    prefix = calmPrefix.concat(angryPrefix,waterPrefix);
    suffix = calmSuffix.concat(angrySuffix,waterSuffix);
    numCommon = 1;
    numUncommon = 3;
    numRare = 1;
    setLegend = RuinLegend;
    setColor = "#8c679c";
  }

  if ((document.getElementById("lategame")) && document.getElementById("lategame").checked || lateVal == true) {
    setCommon = habitatList_common_L[habitatID - 1];
    setUncommon = habitatList_uncommon_L[habitatID - 1];
    setRare = habitatList_rare_L[habitatID - 1];
  }

  prefixLine = getRandom(prefix, 1);
  suffixLine = getRandom(suffix, 1);
  DescriptorLineIndex = Math.floor(Math.random() * setDescriptor.length);
  DescriptorLine = setDescriptor[DescriptorLineIndex];
  LocationName = prefixLine[0].concat(suffixLine[0]," ",HabitatType[DescriptorLineIndex]);
  if (output) {
    outputHabitat()
  }
}

function between(x, min, max) {
  return x >= min && x <= max;
}

function outputHabitat() {

  if (document.getElementById("kanto")) {
    var validRegion = [document.getElementById("kanto").checked,document.getElementById("johto").checked,document.getElementById("hoenn").checked,document.getElementById("sinnoh").checked,document.getElementById("unova").checked,document.getElementById("kalos").checked,document.getElementById("alola").checked,document.getElementById("galar").checked];
  }
  else {
    validRegion[true,true,true,true,true,true,true,true];
  }
  var tmpSetCommon = [];
  for (a = 0; a < setCommon.length; a++) {
    var toAdd = true;
    var speciesToFind = overviewName.findIndex(index => index == setCommon[a]);
    if (!validRegion[0] && between(speciesToFind,0,151)) {
      toAdd = false;
    }
    else if (!validRegion[1] && (between(speciesToFind,152,251) || setUncommon[a] == "Nidorina & Nidorino")) {
      toAdd = false;
    }
    else if (!validRegion[2] && between(speciesToFind,252,386)) {
      toAdd = false;
    }
    else if (!validRegion[3] && between(speciesToFind,387,493)) {
      toAdd = false;
    }
    else if (!validRegion[4] && between(speciesToFind,494,649)) {
      toAdd = false;
    }
    else if (!validRegion[5] && between(speciesToFind,650,721)) {
      toAdd = false;
    }
    else if (!validRegion[6] && between(speciesToFind,722,809)) {
      toAdd = false;
    }
    else if (!validRegion[7] && between(speciesToFind,810,890)) {
      toAdd = false;
    }
    if (toAdd) {
      tmpSetCommon.push(setCommon[a]);
    }
  }
  if (tmpSetCommon.length == 0) {
    alert("Not enough valid common Pokémon to generate this habitat.");
  }
  setCommon = tmpSetCommon;
  var tmpSetUncommon = [];
  for (a = 0; a < setUncommon.length; a++) {
    var toAdd = true;
    var speciesToFind = overviewName.findIndex(index => index == setUncommon[a]);
    if (!validRegion[0] && (between(speciesToFind,0,151) || setUncommon[a] == "Nidoran")) {
      toAdd = false;
    }
    else if (!validRegion[0] && (between(speciesToFind,0,151) || setUncommon[a] == "Nidorina & Nidorino")) {
      toAdd = false;
    }
    else if (!validRegion[1] && between(speciesToFind,152,251)) {
      toAdd = false;
    }
    else if (!validRegion[2] && (between(speciesToFind,252,386)|| setUncommon[a] == "Volbeat & Illumise" || setUncommon[a] == "Plusle & Minun")) {
      toAdd = false;
    }
    else if (!validRegion[3] && between(speciesToFind,387,493)) {
      toAdd = false;
    }
    else if (!validRegion[4] && between(speciesToFind,494,649)) {
      toAdd = false;
    }
    else if (!validRegion[5] && between(speciesToFind,650,721)) {
      toAdd = false;
    }
    else if (!validRegion[6] && between(speciesToFind,722,809)) {
      toAdd = false;
    }
    else if (!validRegion[7] && between(speciesToFind,810,890)) {
      toAdd = false;
    }
    if (toAdd) {
      tmpSetUncommon.push(setUncommon[a]);
    }
  }

  if (tmpSetUncommon.length == 0) {
    alert("Not enough valid uncommon Pokémon to generate this habitat.");
  }
  setUncommon = tmpSetUncommon;


  var tmpSetRare = [];
  for (a = 0; a < setRare.length; a++) {
    var toAdd = true;
    var speciesToFind = overviewName.findIndex(index => index == setRare[a]);
    if (!validRegion[0] && between(speciesToFind,0,151)) {
      toAdd = false;
    }
    else if (!validRegion[1] && between(speciesToFind,152,251)) {
      toAdd = false;
    }
    else if (!validRegion[2] && between(speciesToFind,252,386)) {
      toAdd = false;
    }
    else if (!validRegion[3] && between(speciesToFind,387,493)) {
      toAdd = false;
    }
    else if (!validRegion[4] && between(speciesToFind,494,649)) {
      toAdd = false;
    }
    else if (!validRegion[5] && between(speciesToFind,650,721)) {
      toAdd = false;
    }
    else if (!validRegion[6] && between(speciesToFind,722,809)) {
      toAdd = false;
    }
    else if (!validRegion[7] && between(speciesToFind,810,890)) {
      toAdd = false;
    }
    if (toAdd) {
      tmpSetRare.push(setRare[a]);
    }
  }
  if (tmpSetRare.length == 0) {
    alert("Not enough valid rare Pokémon to generate this habitat.");
  }
  setRare = tmpSetRare;

  var tmpSetMain = [];
  var tmpSetMainLinePKMN = [];
  for (a = 0; a < MainLinePKMN.length; a++) {
    var toAdd = true;
    var speciesToFind = overviewName.findIndex(index => index == MainLinePKMN[a]);
    if (!validRegion[0] && between(speciesToFind,0,151)) {
      toAdd = false;
    }
    else if (!validRegion[1] && between(speciesToFind,152,251)) {
      toAdd = false;
    }
    else if (!validRegion[2] && between(speciesToFind,252,386)) {
      toAdd = false;
    }
    else if (!validRegion[3] && between(speciesToFind,387,493)) {
      toAdd = false;
    }
    else if (!validRegion[4] && between(speciesToFind,494,649)) {
      toAdd = false;
    }
    else if (!validRegion[5] && between(speciesToFind,650,721)) {
      toAdd = false;
    }
    else if (!validRegion[6] && between(speciesToFind,722,809)) {
      toAdd = false;
    }
    else if (!validRegion[7] && between(speciesToFind,810,890)) {
      toAdd = false;
    }
    if (toAdd) {
      tmpSetMain.push(setMain[a]);
      tmpSetMainLinePKMN.push(MainLinePKMN[a]);
    }
  }
  if (tmpSetMain.length == 0) {
    alert("Not enough valid main Pokémon to generate this habitat.");
  }
  setMain = tmpSetMain;
  MainLinePKMN = tmpSetMainLinePKMN;


  var tmpSetLegend = [];
  for (a = 0; a < setLegend.length; a++) {
    var toAdd = true;
    var speciesToFind = overviewName.findIndex(index => index == setLegend[a]);
    if (!validRegion[0] && between(speciesToFind,0,151)) {
      toAdd = false;
    }
    else if (!validRegion[1] && between(speciesToFind,152,251)) {
      toAdd = false;
    }
    else if (!validRegion[2] && between(speciesToFind,252,386)) {
      toAdd = false;
    }
    else if (!validRegion[3] && between(speciesToFind,387,493)) {
      toAdd = false;
    }
    else if (!validRegion[4] && between(speciesToFind,494,649)) {
      toAdd = false;
    }
    else if (!validRegion[5] && between(speciesToFind,650,721)) {
      toAdd = false;
    }
    else if (!validRegion[6] && between(speciesToFind,722,809)) {
      toAdd = false;
    }
    else if (!validRegion[7] && between(speciesToFind,810,890)) {
      toAdd = false;
    }
    if (toAdd) {
      tmpSetLegend.push(setLegend[a]);
    }
  }
  if (tmpSetLegend.length == 0) {
    legendOn = 0;
  }
  else {
    legendOn = 1;
  }
  setLegend = tmpSetLegend;

  //Figure out how many Pokemon to choose from each category
  numCommonForm = document.getElementById("comSp").value;
  numUncommonForm = document.getElementById("uncomSp").value;
  numRareForm = document.getElementById("rareSp").value;
  if (numCommonForm > -1) {
    numCommon = numCommonForm;
  }
  if (numCommon > setCommon.length) {
    numCommon = setCommon.length;
  }
  if (numUncommonForm > -1) {
    numUncommon = numUncommonForm;
  }
  if (numUncommon> setUncommon.length) {
    numUncommon = setUncommon.length;
  }
  if (numRareForm > -1) {
    numRare = numRareForm;
  }
  if (numRare > setRare.length) {
    numRare = setRare.length;
  }

  var CommonLine = getRandom(setCommon, numCommon);
  var UncommonLine = getRandom(setUncommon, numUncommon);
  var RareLine = getRandom(setRare, numRare);
  prefixLine = getRandom(prefix, 1);
  suffixLine = getRandom(suffix, 1);
  DescriptorLineIndex = Math.floor(Math.random() * setDescriptor.length);
  DescriptorLine = setDescriptor[DescriptorLineIndex];
  var MainLineIndex = Math.floor(Math.random() * setMain.length);
  var MainLine = setMain[MainLineIndex];

  legendCheck = Math.floor(Math.random()*100);
  if (legendCheck == 1 && legendOn > 0) {
    MainLine = "is said to be the home of a mysterious Pokémon..."
    legendSummon = getRandom(setLegend, 1);
    main1_Num = ((PKMNList.indexOf(legendSummon[0]) + 1).toString()).padStart(3,'0');
  }

  shinyCheck = Math.floor(Math.random()*100);
  var Out = DescriptorLine;
  if (numCommon == 2) {
    var Out = DescriptorLine.concat("is primarily inhabited by ",CommonLine[0]," and ",CommonLine[1],". ");
  }
  else if (numCommon == 3) {
    var Out = DescriptorLine.concat("is primarily inhabited by ",CommonLine[0],", ",CommonLine[1],", and ",CommonLine[2],". ");
  }
  else if (numCommon == 4) {
    var Out = DescriptorLine.concat("is primarily inhabited by ",CommonLine[0],", ",CommonLine[1],", ",CommonLine[2],", and ",CommonLine[3],". ");
  }
  else {
    var Out = DescriptorLine.concat("is primarily inhabited by ",CommonLine[0],". ");
  }

  if (numUncommon == 1) {
    var Out = Out.concat("In addition, ",UncommonLine[0]," can be found here as well. ");
  }
  else if (numUncommon == 2) {
    var Out = Out.concat("In addition, ",UncommonLine[0]," and ",UncommonLine[1]," can be found here as well. ");
  }
  else if (numUncommon == 3) {
    var Out = Out.concat("In addition, ",UncommonLine[0],", ",UncommonLine[1],", and ",UncommonLine[2]," can be found here as well. ");
  }
  else if (numUncommon == 4) {
    var Out = Out.concat("In addition, ",UncommonLine[0],", ",UncommonLine[1],", ",UncommonLine[2],", and ",UncommonLine[3]," can be found here as well. ");
  }

  if (numRare == 1) {
    var Out = Out.concat("Occasionally, one may even run into a ",RareLine[0],"! ",DescriptorLine,MainLine);
  }
  else if (numRare == 2) {
    var Out = Out.concat("Occasionally, one may even run into a ",RareLine[0]," or a " ,RareLine[1],"! ",DescriptorLine,MainLine);
  }

  if (shinyCheck == 1) {
    Out = Out.concat(" A Pokémon here seems to be colored differently than usual...");
  }

  common1_Num = '000';
  common2_Num = '000';
  common3_Num = '000';
  common4_Num = '000';
  common5_Num = '000';
  uncommon1_Num = '000';
  uncommon2_Num = '000';
  uncommon3_Num = '000';
  uncommon4_Num = '000';
  uncommon5_Num = '000';
  uncommon6_Num = '000';
  rare2_Num = '000';
  main2_Num = '000';
  main3_Num = '000';
  main4_Num = '000';
  main5_Num = '000';
  main6_Num = '000';
  common1_Num = ((PKMNList.indexOf(CommonLine[0]) + 1).toString()).padStart(3,'0');
  if (numCommon > 1) {
    common2_Num = ((PKMNList.indexOf(CommonLine[1])+1).toString()).padStart(3,'0');
  }
  if (numCommon > 2) {
    common3_Num = ((PKMNList.indexOf(CommonLine[2])+1).toString()).padStart(3,'0');
  }
  if (numCommon > 3) {
    common4_Num = ((PKMNList.indexOf(CommonLine[3])+1).toString()).padStart(3,'0');
  }
  uncommon1_Num = ((PKMNList.indexOf(UncommonLine[0])+1).toString()).padStart(3,'0');
  if (numUncommon > 1) {
    uncommon2_Num = ((PKMNList.indexOf(UncommonLine[1])+1).toString()).padStart(3,'0');
  }
  if (numUncommon > 2) {
    uncommon3_Num = ((PKMNList.indexOf(UncommonLine[2])+1).toString()).padStart(3,'0');
  }
  if (numUncommon > 3) {
    uncommon4_Num = ((PKMNList.indexOf(UncommonLine[3])+1).toString()).padStart(3,'0');
  }
  rare1_Num = ((PKMNList.indexOf(RareLine[0])+1).toString()).padStart(3,'0');
  if (numRare > 1) {
    rare2_Num = ((PKMNList.indexOf(RareLine[1])+1).toString()).padStart(3,'0');
  }

  if (legendCheck  != 1) {
    main1_Num = ((PKMNList.indexOf(MainLinePKMN[MainLineIndex])+1).toString()).padStart(3,'0');
  }

  if (CommonLine[0] == "Nidorina & Nidorino" && validRegion[0]) {
    common1_Num = '030';
    common5_Num = '033';
  }
  else if (CommonLine[1] == "Nidorina & Nidorino" && validRegion[0]) {
    common2_Num = '030';
    common5_Num = '033';
  }
  else if (CommonLine[2] == "Nidorina & Nidorino" && validRegion[0]) {
    common3_Num = '030';
    common5_Num = '033';
  }
  else if (CommonLine[3] == "Nidorina & Nidorino" && validRegion[0]) {
    common4_Num = '030';
    common5_Num = '033';
  }

  if (CommonLine[0] == "Nidoran" && validRegion[0]) {
    common1_Num = '029';
    common5_Num = '032';
  }
  else if (CommonLine[1] == "Nidoran" && validRegion[0]) {
    common2_Num = '029';
    common5_Num = '032';
  }
  else if (CommonLine[2] == "Nidoran" && validRegion[0]) {
    common3_Num = '029';
    common5_Num = '032';
  }
  else if (CommonLine[3] == "Nidoran" && validRegion[0]) {
    common4_Num = '029';
    common5_Num = '032';
  }

  if (UncommonLine[0] == "Plusle & Minun" && validRegion[2]) {
      uncommon1_Num = '311';
      uncommon6_Num = '312';
  }
  if (UncommonLine[1] == "Plusle & Minun" && validRegion[2]) {
      uncommon2_Num = '311';
      uncommon6_Num = '312';
  }
  if (UncommonLine[2] == "Plusle & Minun" && validRegion[2]) {
      uncommon3_Num = '311';
      uncommon6_Num = '312';
  }
  if (UncommonLine[3] == "Plusle & Minun" && validRegion[2]) {
      uncommon4_Num = '311';
      uncommon6_Num = '312';
  }
  if (UncommonLine[0] == "Volbeat & Illumise" && validRegion[2]) {
      uncommon1_Num = '313';
      uncommon5_Num = '314';
  }
  if (UncommonLine[1] == "Volbeat & Illumise" && validRegion[2]) {
      uncommon2_Num = '313';
      uncommon5_Num = '314';
  }
  if (UncommonLine[2] == "Volbeat & Illumise" && validRegion[2]) {
      uncommon3_Num = '313';
      uncommon5_Num = '314';
  }
  if (UncommonLine[3] == "Volbeat & Illumise" && validRegion[2]) {
      uncommon4_Num = '313';
      uncommon5_Num = '314';
  }
  if (MainLinePKMN[MainLineIndex] == "Nidoran") {
    main1_Num = '029';
    main2_Num = '032';
    main3_Num = '030';
    main4_Num = '033';
    main5_Num = '031';
    main6_Num = '034';
  }

  if (main1_Num == '280') {  //Ralts, Kirlia, Gardevoir, Gallade
    main2_Num  = '281';
    main3_Num = '282';
    main4_Num = '475';
  }
  else if (main1_Num == '538') { //Throh, Sawk
    main2_Num = '539';
  }
  else if (main1_Num == '202') { //Wobbuffet, Wynaut
    main2_Num = '360';
  }
  else if (main1_Num == '415') { //Combee, Vespiquen
    main2_Num = '416';
  }
  else if (main1_Num == '542') { //Leavanny, Sewaddle, Swadloon
    main2_Num = '540';
    main2_Num = '541';
  }
  else if (main1_Num == '546') { //Cottonee, Whimsicott
    main2_Num = '547';
  }
  else if (main1_Num == '548') { //Petilil, Lilligant
    main2_Num = '549';
  }
  else if (main1_Num == '477') { //Dusknoir, Dusclops
    main2_Num = '356';
  }
  else if (main1_Num == '755') { //Morelull, Shiinotic
    main2_Num = '756';
  }
  else if (main1_Num == '430') { //Honchkrow, Murkrow
    main2_Num = '198';
  }
  else if (main1_Num == '204') { //Pineco, Forretress
    main2_Num = '205';
  }
  else if (main1_Num == '127') { //Pinsir, Heracross
    main2_Num = '214';
  }
  else if (main1_Num == '333') { //Swablu, Altaria
    main2_Num = '334';
  }
  else if (main1_Num == '682') { //Spritzee, Aromatisse
    main2_Num = '683';
  }
  else if (main1_Num == '684') { //Swirlix, Slurpuff
    main2_Num = '685';
  }
  else if (main1_Num == '631') { //Heatmor, Durant
    main2_Num = '632';
  }
  else if (main1_Num == '190') { //Aipom, Ambipom
    main2_Num = '424';
  }
  else if (main1_Num == '056') { //Mankey, Primeape
    main2_Num = '057';
  }
  else if (main1_Num == '465') { //Tangrowth, Tangela
    main2_Num = '114';
  }
  else if (main1_Num == '738') { //Vikavolt, Charjabug
    main2_Num = '737';
  }
  else if (main1_Num == '043') { //Oddish, Gloom, Vileplume, Bellossom
    main2_Num = '044';
    main3_Num = '045';
    main4_Num = '182';
  }
  else if (main1_Num == '429') { //Mismagius, Mismagius, Mismagius
    main2_Num = '429';
    main3_Num = '429';
  }
  else if (main1_Num == '287') { //Slakoth, Vigoroth, Slaking
    main2_Num = '288';
    main3_Num = '289';
  }
  else if (main1_Num == '046') { //Paras, Parasect
    main2_Num = '047';
  }
  else if (main1_Num == '512') { //Simisage, Simisear, Simipour
    main2_Num = '514';
    main3_Num = '516';
  }
  else if (main1_Num == '466') { //Electivire, Electabuzz
    main2_Num = '125';
  }
  else if (main1_Num == '405') { //Luxray, Luxio, Shinx
    main2_Num = '404';
    main3_Num = '403';
  }
  else if (main1_Num == '710') { //Pumpkaboo, Gourgeist
    main2_Num = '711';
  }
  else if (main1_Num == '407') { //Roserade, Budew, Roselia
    main2_Num = '406';
    main3_Num = '315';
  }
  else if (main1_Num == '181') { //Ampharos, Flaaffy, Mareep
    main2_Num = '179';
    main3_Num = '180';
  }
  else if (main1_Num == '402') { //Kricketune, Kricketot
    main2_Num = '401';
  }
  else if (main1_Num == '749') { //Mudbray, Mudsdale
    main2_Num = '750';
  }
  else if (main1_Num == '077') { //Ponyta, Rapidash
    main2_Num = '078';
  }
  else if (main1_Num == '128') { //Tauros, Miltank
    main2_Num = '241';
  }
  else if (main1_Num == '668') { //Pyroar, Litleo
    main2_Num = '667';
  }
  else if (main1_Num == '504') { //Patrat, Watchog
    main2_Num = '505';
  }
  else if (main1_Num == '310') { //Manectric, Electrike
    main2_Num = '309';
  }
  else if (main1_Num == '316') { //Gulpin, Swalot
    main2_Num = '317';
  }
  else if (main1_Num == '023') { //Ekans, Arbok
    main2_Num = '024';
  }
  else if (main1_Num == '313') { //Volbeat, Illumise
    main2_Num = '314';
  }
  else if (main1_Num == '335') { //Zangoose, Seviper
    main2_Num = '336';
  }
  else if (main1_Num == '677') { //Espurr, Meowstic
    main2_Num = '678';
  }
  else if (main1_Num == '088') { //Grimer, Muk
    main2_Num = '089';
  }
  else if (main1_Num == '109') { //Koffing, Weezing
    main2_Num = '110';
  }
  else if (main1_Num == '568') { //Trubbish, Garbodor
    main2_Num = '569';
  }
  else if (main1_Num == '439') { //Mime Jr., Mr. Mime
    main2_Num = '122';
  }
  else if (main1_Num == '532') { //Timburr, Gurdurr, Conkeldurr
    main2_Num = '533';
    main3_Num = '534';
  }
  else if (main1_Num == '607') { //Litwick, Lampent, Chandelure
    main2_Num = '608';
    main3_Num = '609';
  }
  else if (main1_Num == '431') { //Glameow, Purugly
    main2_Num = '432';
  }
  else if (main1_Num == '138') { //Omanyte, Omastar
    main2_Num = '139';
  }
  else if (main1_Num == '140') { //Kabuto, Kabutops
    main2_Num = '141';
  }
  else if (main1_Num == '345') { //Lileep, Cradily
    main2_Num = '346';
  }
  else if (main1_Num == '347') { //Anorith, Armaldo
    main2_Num = '348';
  }
  else if (main1_Num == '564') { //Tirtouga, Carracosta
    main2_Num = '565';
  }
  else if (main1_Num == '566') { //Archen, Archeops
    main2_Num = '567';
  }
  else if (main1_Num == '696') { //Tyrunt, Tyrantrum
    main2_Num = '697';
  }
  else if (main1_Num == '698') { //Amaura, Aurorus
    main2_Num = '699';
  }
  else if (main1_Num == '311') { //Plusle, Minun
    main2_Num = '312';
  }
  else if (main1_Num == '595') { //Joltik, Galvantula
    main2_Num = '596';
  }
  else if (main1_Num == '601') { //Klinklang, Klink, Klang
    main2_Num = '599';
    main4_Num = '600';
  }
  else if (main1_Num == '075') { //Graveler, Golem
    main2_Num = '076';
  }
  else if (main1_Num == '322') { //Numel, Camerupt
    main2_Num = '323';
  }
  else if (main1_Num == '467') { //Magmortar, Magmar, Magby
    main2_Num = '126';
    main3_Num = '240';
  }
  else if (main1_Num == '425') { //Drifloon, Drifblim
    main2_Num = '426';
  }
  else if (main1_Num == '758') { //Salazzle, Salandit
    main2_Num = '757';
  }
  else if (main1_Num == '636') { //Larvesta, Volcarona
    main2_Num = '637';
  }
  else if (main1_Num == '443') { //Gible, Gabite, Garchomp
    main2_Num = '444';
    main3_Num = '445';
  }
  else if (main1_Num == '371') { //Bagon, Shelgon, Salamanca
    main2_Num = '372';
    main3_Num = '373';
  }
  else if (main1_Num == '246') { //Larvitar, Tyranitar
    main2_Num = '248';
  }
  else if (main1_Num == '050') { //Diglett, Dugtrio
    main2_Num = '051';
  }
  else if (main1_Num == '714') { //Noibat, Noivern
    main2_Num = '715';
  }
  else if (main1_Num == '436') { //Bronzor, Bronzong
    main2_Num = '437';
  }
  else if (main1_Num == '597') { //Ferroseed, Ferrothorn
    main2_Num = '598';
  }
  else if (main1_Num == '295') { //Exploud, Loudred
    main2_Num = '294';
  }
  else if (main1_Num == '035') { //Clefairy, Clefable
    main2_Num = '036';
  }
  else if (main1_Num == '447') { //Riolu, Lucario
    main2_Num = '448';
  }
  else if (main1_Num == '433') { //Chingling, Chimecho
    main2_Num = '358';
  }
  else if (main1_Num == '296') { //Makuhita, Hariyama
    main2_Num = '297';
  }
  else if (main1_Num == '307') { //Meditite, Medicham
    main2_Num = '308';
  }
  else if (main1_Num == '620') { //Mienshao, Mienfoo
    main2_Num = '619';
  }
  else if (main1_Num == '063') { //Machop, Machoke, Machamp
    main2_Num = '064';
    main3_Num = '065'
  }
  else if (main1_Num == '187') { //Hoppip, Skiploom, Jumpluff
    main2_Num = '188';
    main3_Num = '189';
  }
  else if (main1_Num == '451') { //Skorupi, Drapion
    main2_Num = '452';
  }
  else if (main1_Num == '553') { //Krookodile, Krokorok
    main2_Num = '552';
  }
  else if (main1_Num == '782') { //Jangmo-o, Hakamo-o, Kommo-o
    main2_Num = '783';
    main3_num = '784';
  }
  else if (main1_Num == '625') { //Bisharp, Pawniard
    main2_Num = '624';
  }
  else if (main1_Num == '207') { //Gligar, Gliscor
    main2_Num = '472';
  }
  else if (main1_Num == '341') { //Corphish, Crawdaunt
    main2_Num = '342';
  }
  else if (main1_Num == '581') { //Swanna, Ducklett
    main2_Num = '580';
  }
  else if (main1_Num == '535') { //Tympole, Palpitoad, Seismitoad
    main2_Num = '536';
    main3_Num = '537';
  }
  else if (main1_Num == '752') { //Araquanid, Dewpider
    main2_Num = '751';
  }
  else if (main1_Num == '183') { //Marill, Azumarill
    main2_Num = '184';
  }
  else if (main1_Num == '186') { //Politoed, Poliwag, Poliwhirl
    main2_Num = '060';
    main3_Num = '061';
  }
  else if (main1_Num == '062') { //Poliwrath, Poliwag, Poliwhirl
    main2_Num = '060';
    main3_Num = '061';
  }
  else if (main1_Num == '284') { //Masquerain, Surskit
    main2_Num = '283';
  }
  else if (main1_Num == '602') { //Tynamo, Eelektross
    main2_Num = '604';
  }
  else if (main1_Num == '418') { //Buizel, Floatzel
    main2_Num = '419';
  }
  else if (main1_Num == '147') { //Dratini, Dragonair, Dragonite
    main2_Num = '148';
    main3_Num = '149';
  }
  else if (main1_Num == '349') { //Feebas, Milotic
    main2_Num = '350';
  }
  else if (main1_Num == '610') { //Axew, Haxorus
    main2_Num = '612';
  }
  else if (main1_Num == '096') { //Drowzee, Hypno
    main2_Num = '097';
  }
  else if (main1_Num == '080') { //Slowbro, Slowpoke
    main2_Num = '079';
  }

  else if (main1_Num == '199') { //Slowking, Slowpoke
    main2_Num = '079';
  }
  else if (main1_Num == '098') { //Krabby, Kingler
    main2_Num = '099';
  }
  else if (main1_Num == '747') { //Mareanie, Toxapex
    main2_Num = '748';
  }
  else if (main1_Num == '422') { //Shellos, Gastrodon
    main2_Num = '423';
  }
  else if (main1_Num == '767') { //Wimpod, Golisopod
    main2_Num = '768';
  }
  else if (main1_Num == '769') { //Sandygast, Palossand
    main2_Num = '770';
  }
  else if (main1_Num == '072') { //Tentacool, Tentacruel
    main2_Num = '073';
  }
  else if (main1_Num == '592') { //Frillish, Jellicent
    main2_Num = '593';
  }
  else if (main1_Num == '222') { //Corsola,Mareanie, Toxapex
    main2_Num = '747';
    main3_Num = '748'
  }
  else if (main1_Num == '90') { //Shellder, Cloyster
    main2_Num = '91';
  }
  else if (main1_Num == '712') { //Bergmite, Avalugg
    main2_Num = '713';
  }
  else if (main1_Num == '363') { //Spheal, Sealeo, Walrein
    main2_Num = '364';
    main3_Num = '365';
  }
  else if (main1_Num == '457') { //Lumineon, Finneon
    main2_Num = '456';
  }
  else if (main1_Num == '704') { //Goomy, Goodra
    main2_Num = '706';
  }
  else if (main1_Num == '616') { //Shelmet, Karrablast
    main2_Num = '588';
  }
  else if (main1_Num == '453') { //Croagunk, Toxicroak
    main2_Num = '454';
  }
  else if (main1_Num == '460') { //Abomasnow, Snover
    main2_Num = '459';
  }
  else if (main1_Num == '461') { //Weavile, Weavile
    main2_Num = '461';
  }
  else if (main1_Num == '361') { //Snorunt, Glalie
    main2_Num = '362';
  }
  else if (main1_Num == '582') { //Vanillite, Vanillish, Vanilluxe
    main2_Num = '583';
    main3_Num = '584';
  }
  else if (main1_Num == '436') { //Bronzor, Bronzong
    main2_Num = '437';
  }
  else if (main1_Num == '605') { //Elgyem, Beheeyem
    main2_Num = '606';
  }
  else if (main1_Num == '679') { //Honedge, Doublade, Aegislash
    main2_Num = '680';
    main3_Num = '681'
  }
  else if (main1_Num == '733') { //Toucannon, Trumbeak
    main2_Num = '732';
  }
  else if (main1_Num == '828') { //Thievul, Nickit
    main2_Num = '827';
  }
  else if (main1_Num == '844') { //Sandaconda, Sandaconda
    main2_Num = '844';
  }
  else if (main1_Num == '846') { //Arrokuda, Barraskewda
    main2_Num = '847';
  }
  else if (main1_Num == '854') { //Sinistea, Polteageist
    main2_Num = '855';
  }
  else if (main1_Num == '857') { //Hattrem, Hatterene
    main2_Num = '858';
  }
  else if (main1_Num == '860') { //Morgrem, Grimmsnarl
    main2_Num = '861';
  }
  else if (main1_Num == '880') { //Dracozolt, Arctozolt, Dracovish, Arctovish
    main2_Num = '881';
    main3_Num = '882';
    main4_Num = '883';
  }
  else if (main1_Num == '885') { //Dreepy, Drakloak, Dragapult
    main2_Num = '886';
    main3_Num = '887';
  }
  else if (main1_Num == '630') { //Mandibuzz, Vullaby
    main2_Num = '629';
  }



  common1_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(common1_Num,".png");
  common1_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(common1_Num),".html");
  if (numCommon > 1) {
    common2_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(common2_Num,".png");
    common2_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(common2_Num),".html");
  }
  uncommon1_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(uncommon1_Num,".png");
  uncommon1_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(uncommon1_Num),".html");
  if (numUncommon > 1) {
    uncommon2_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(uncommon2_Num,".png");
    uncommon2_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(uncommon2_Num),".html");
  }
  if (numUncommon > 2) {
    uncommon3_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(uncommon3_Num,".png");
    uncommon3_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(uncommon3_Num),".html");
  }
  rare1_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(rare1_Num,".png");
  rare1_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(rare1_Num),".html");
  main1_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(main1_Num,".png");
  main1_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(main1_Num),".html");

  if (common3_Num != "000") {
    common3_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(common3_Num,".png");
    common3_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(common3_Num),".html");
    document.getElementById("com3_img").src = common3_Image;
    document.getElementById("com3_link").href = common3_Link;
  }
  if (common4_Num != "000") {
    common4_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(common4_Num,".png");
    common4_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(common4_Num),".html");
    document.getElementById("com4_img").src = common4_Image;
    document.getElementById("com4_link").href = common4_Link;
  }
  if (common5_Num != "000") {
    common5_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(common5_Num,".png");
    common5_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(common5_Num),".html");
    document.getElementById("com5_img").src = common5_Image;
    document.getElementById("com5_link").href = common5_Link;
  }
  if (uncommon4_Num != "000") {
    uncommon4_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(uncommon4_Num,".png");
    uncommon4_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(uncommon4_Num),".html");
    document.getElementById("uncom4_img").src = uncommon4_Image;
    document.getElementById("uncom4_link").href = uncommon4_Link;
  }
  if (uncommon5_Num != "000") {
    uncommon5_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(uncommon5_Num,".png");
    uncommon5_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(uncommon5_Num),".html");
    document.getElementById("uncom5_img").src = uncommon5_Image;
    document.getElementById("uncom5_link").href = uncommon5_Link;
  }
  if (uncommon6_Num != "000") {
    uncommon6_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(uncommon6_Num,".png");
    uncommon6_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(uncommon6_Num),".html");
    document.getElementById("uncom6_img").src = uncommon6_Image;
    document.getElementById("uncom6_link").href = uncommon6_Link;
  }
  if (rare2_Num != "000") {
    rare2_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(rare2_Num,".png");
    rare2_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(rare2_Num),".html");
    document.getElementById("rare2_img").src = rare2_Image;
    document.getElementById("rare2_link").href = rare2_Link;
  }
  if (main2_Num != "000") {
    main2_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(main2_Num,".png");
    main2_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(main2_Num),".html");
    document.getElementById("main2_img").src = main2_Image;
    document.getElementById("main2_link").href = main2_Link;
  }
  if (main3_Num != "000") {
    main3_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(main3_Num,".png");
    main3_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(main3_Num),".html");
    document.getElementById("main3_img").src = main3_Image;
    document.getElementById("main3_link").href = main3_Link;
  }
  if (main4_Num != "000") {
    main4_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(main4_Num,".png");
    main4_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(main4_Num),".html");
    document.getElementById("main4_img").src = main4_Image;
    document.getElementById("main4_link").href = main4_Link;
  }
  if (main5_Num != "000") {
    main5_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(main5_Num,".png");
    main5_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(main5_Num),".html");
    document.getElementById("main5_img").src = main5_Image;
    document.getElementById("main5_link").href = main5_Link;
  }
  if (main6_Num != "000") {
    main6_Image = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(main6_Num,".png");
    main6_Link = "https://www.theworldofpokemon.com/entryPages/entryPage_".concat(parseInt(main6_Num),".html");
    document.getElementById("main6_img").src = main6_Image;
    document.getElementById("main6_link").href = main6_Link;
  }

  document.getElementById("com1_img").src = common1_Image;
  document.getElementById("com1_link").href = common1_Link;
  document.getElementById("com2_img").src = common2_Image;
  document.getElementById("com2_link").href = common2_Link;
  document.getElementById("uncom1_img").src = uncommon1_Image;
  document.getElementById("uncom1_link").href = uncommon1_Link;
  document.getElementById("uncom2_img").src = uncommon2_Image;
  document.getElementById("uncom2_link").href = uncommon2_Link;
  document.getElementById("uncom3_img").src = uncommon3_Image;
  document.getElementById("uncom3_link").href = uncommon3_Link;
  document.getElementById("rare1_img").src = rare1_Image;
  document.getElementById("rare1_link").href = rare1_Link;
  document.getElementById("main1_img").src = main1_Image;
  document.getElementById("main1_link").href = main1_Link;

  document.getElementById("common-image-1").style.display = "block";
  document.getElementById("common-image-2").style.display = "block";
  document.getElementById("uncommon-image-1").style.display = "block";
  document.getElementById("uncommon-image-2").style.display = "block";
  document.getElementById("uncommon-image-3").style.display = "block";
  document.getElementById("rare-image-1").style.display = "block";

  document.getElementById("main-image-1").style.display = "block";

  document.getElementById("breakline").style.display = "block";

  if (common2_Num != "000") {
    document.getElementById("common-image-2").style.display = "block";
  }
  else {
      document.getElementById("common-image-2").style.display = "none";
  }
  if (common3_Num != "000") {
    document.getElementById("common-image-3").style.display = "block";
  }
  else {
      document.getElementById("common-image-3").style.display = "none";
  }
  if (common4_Num != "000") {
    document.getElementById("common-image-4").style.display = "block";
  }
  else {
      document.getElementById("common-image-4").style.display = "none";
  }
  if (common5_Num != "000") {
    document.getElementById("common-image-5").style.display = "block";
  }
  else {
      document.getElementById("common-image-5").style.display = "none";
  }
  if (uncommon2_Num != "000") {
    document.getElementById("uncommon-image-2").style.display = "block";
  }
  else {
      document.getElementById("uncommon-image-2").style.display = "none";
  }
  if (uncommon3_Num != "000") {
    document.getElementById("uncommon-image-3").style.display = "block";
  }
  else {
      document.getElementById("uncommon-image-3").style.display = "none";
  }
  if (uncommon4_Num != "000") {
    document.getElementById("uncommon-image-4").style.display = "block";
  }
  else {
      document.getElementById("uncommon-image-4").style.display = "none";
  }
  if (uncommon5_Num != "000") {
    document.getElementById("uncommon-image-5").style.display = "block";
  }
  else {
      document.getElementById("uncommon-image-5").style.display = "none";
  }
  if (uncommon6_Num != "000") {
    document.getElementById("uncommon-image-6").style.display = "block";
  }
  else {
      document.getElementById("uncommon-image-6").style.display = "none";
  }

  if (rare2_Num != "000") {
    document.getElementById("rare-image-2").style.display = "block";
  }
  else {
      document.getElementById("rare-image-2").style.display = "none";
  }

  if (main2_Num != "000") {
    document.getElementById("main-image-2").style.display = "block";
  }
  else {
      document.getElementById("main-image-2").style.display = "none";
  }
  if (main3_Num != "000") {
    document.getElementById("main-image-3").style.display = "block";
  }
  else {
      document.getElementById("main-image-3").style.display = "none";
  }
    if (main4_Num != "000") {
    document.getElementById("main-image-4").style.display = "block";
  }
  else {
      document.getElementById("main-image-4").style.display = "none";
  }
    if (main5_Num != "000") {
    document.getElementById("main-image-5").style.display = "block";
  }
  else {
      document.getElementById("main-image-5").style.display = "none";
  }
    if (main6_Num != "000") {
    document.getElementById("main-image-6").style.display = "block";
  }
  else {
      document.getElementById("main-image-6").style.display = "none";
  }


  document.getElementById("insert").innerHTML = Out;
  document.getElementById("typeLoc").innerHTML = LocationName;
  document.getElementById("typeLoc").style.color = setColor;
}
