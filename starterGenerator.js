var personalityNum = [1,4,3,2,1,1,2,4,2,2,6,6,2,8,2,2,8,5,8,1,4,6,1,2,5,2,1,1,2,1,1,6,2,3,1,2,7,1,8,1,4,2,6,8,3,4,2,6,2,1,8,4,4,4,1,6,1,6,1,8,2,4,2,
  1,2,3,2,8,3,2,1,8,2,6,6,8,1,3,8,3,8,8,7,7,1,2,1,2,3,6,2,2,1,7,8,1,1,3,8,6,4,6,3,2,5,5,8,4,1,6,2,
  1,2,3,4,8,1,3,7,5,8,2,1,2,1,2,2,5,3,1,3,7,7,1,5,6,3,3,5,1,1,4,1,1,1,8,3,1,1,3,4,4,1,1,1,4,1,1,2,1,1,2,7,7,6,2,2,8,8,1,1,6,5,4,
  1,8,2,4,5,3,6,2,4,5,2,5,3,5,3,1,1,2,2,3,2,1,2,6,6,8,7,4,8,5,8,2,1,1,1,8,8,7,1,
  2,3,5,5,6,7,8,8,8,2,6,4,1,6,3,6,5,3,5,5,6,4,7,2,4,1,3,3,2,6,1,2,1,8,8,7,5,8,1,6,1,2,3,4,2,1,6,1,2,1,2,8,7,5,1,4,2,1,5,4,5,6,4,6,6,1,5,4,2,
  3,1,2,5,4,1,6,5,5,7,6,2,7,8,3,7,2,2,4,3,4,2,4,2,1,3,7,2,8,6,8,
  8,2,3,3,4,6,4,3,8,6,2,2,5,2,1,1,7,2,3,6,8,5,2,2,1,2,1,1,1,2,8,4,6,1,5,
  3,5,2,8,5,2,7,1,1,4,6,5,2,2,1,4,1,2,4,7,2,7,3,5,1,1,1,2,5,4,3,3,3,3,3,4,2]

var questionBank = ["Which of the following best describes the habitat you live in?","Would you prefer to raise a low-maintenance, easygoing Pokémon? Or a challenging, but rewarding Pokémon?","Introverted or extroverted?","Which of the following personalities do you get along with best?","Which of the following characteristics do you value most in a friend?"]

var gentleList = [];
for (n = 0; n < overviewTemperament.length; n++) {
  if (parseInt(overviewTemperament[n]) < 0) {
    gentleList.push(n);
  }
}
var laidbackList = [];
for (n = 0; n < overviewTemperament.length; n++) {
  if (parseInt(overviewTemperament[n]) == 0) {
    laidbackList.push(n);
  }
}
var outgoingList = [];
for (n = 0; n < overviewTemperament.length; n++) {
  if (parseInt(overviewTemperament[n]) > 0) {
    outgoingList.push(n);
  }
}

//TEST function
function loadStarterPage() {
	var entryImages = "";
	var entryImageLink = "";
	for (i = 0; i < runningList.length; i++) {
		entryImageLink = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(overviewNum[runningList[i]],".png");
		entryImageContainer = "<div id='common-image-1' style='width:50%;margin:auto;'><div id='common-inside-image-1' style='position:relative;margin:5px;'><div id='common-1-border' class='galleryImageBorder' style='border: 1.5px solid rgba(50, 50, 50, 0.1);background: #fdfdfd;padding:6px;'><div class='galleryImageHolder' style='position:relative; width:100%;padding: 0 0 100%;overflow:hidden;'>"
    entryImageTmp = entryImageContainer + "<a href=" + "./researchPages/" + runningList[i] +"_research" + ".html><img src='" + entryImageLink + "' class='galleryImage' _width='600' _height='60' style='position:absolute;border:0;width:100%;top:-0%;left:0%'></a></div></div></div></div>";
		entryImages = entryImages + entryImageTmp;
	}
  if (runningList.length == 1) {
	   document.getElementById("entryHolder").innerHTML = entryImages;
     removeAllButtons();
     document.getElementById("starterReveal").style.display = "block";
     document.getElementById("question").style.display = "none";
     document.getElementById("reveal").style.display = "block";
	   document.getElementById("reveal").innerHTML = PKMNList[runningList[0] - 1];
     document.getElementById("followup").style.display = "block";
     document.getElementById("followup").innerHTML = "Learn more about " + PKMNList[runningList[0] - 1] + " below!";
  }
}

var PKMNList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew","Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion","Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking","Misdreavus","Unown","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom","Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid","Magby","Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh","Celebi","Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Taillow","Swellow","Wingull","Pelipper","Ralts","Kirlia","Gardevoir","Surskit","Masquerain","Shroomish","Breloom","Slakoth","Vigoroth","Slaking","Nincada","Ninjask","Shedinja","Whismur","Loudred","Exploud","Makuhita","Hariyama","Azurill","Nosepass","Skitty","Delcatty","Sableye","Mawile","Aron","Lairon","Aggron","Meditite","Medicham","Electrike","Manectric","Plusle","Minun","Volbeat","Illumise","Roselia","Gulpin","Swalot","Carvanha","Sharpedo","Wailmer","Wailord","Numel","Camerupt","Torkoal","Spoink","Grumpig","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Swablu","Altaria","Zangoose","Seviper","Lunatone","Solrock","Barboach","Whiscash","Corphish","Crawdaunt","Baltoy","Claydol","Lileep","Cradily","Anorith","Armaldo","Feebas","Milotic","Castform","Kecleon","Shuppet","Banette","Duskull","Dusclops","Tropius","Chimecho","Absol","Wynaut","Snorunt","Glalie","Spheal","Sealeo","Walrein","Clamperl","Huntail","Gorebyss","Relicanth","Luvdisc","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Latias","Latios","Kyogre","Groudon","Rayquaza","Jirachi","Deoxys","Turtwig","Grotle","Torterra","Chimchar","Monferno","Infernape","Piplup","Prinplup","Empoleon","Starly","Staravia","Staraptor","Bidoof","Bibarel","Kricketot","Kricketune","Shinx","Luxio","Luxray","Budew","Roserade","Cranidos","Rampardos","Shieldon","Bastiodon","Burmy","Wormadam","Mothim","Combee","Vespiquen","Pachirisu","Buizel","Floatzel","Cherubi","Cherrim","Shellos","Gastrodon","Ambipom","Drifloon","Drifblim","Buneary","Lopunny","Mismagius","Honchkrow","Glameow","Purugly","Chingling","Stunky","Skuntank","Bronzor","Bronzong","Bonsly","Mime Jr.","Happiny","Chatot","Spiritomb","Gible","Gabite","Garchomp","Munchlax","Riolu","Lucario","Hippopotas","Hippowdon","Skorupi","Drapion","Croagunk","Toxicroak","Carnivine","Finneon","Lumineon","Mantyke","Snover","Abomasnow","Weavile","Magnezone","Lickilicky","Rhyperior","Tangrowth","Electivire","Magmortar","Togekiss","Yanmega","Leafeon","Glaceon","Gliscor","Mamoswine","Porygon-Z","Gallade","Probopass","Dusknoir","Froslass","Rotom","Uxie","Mesprit","Azelf","Dialga","Palkia","Heatran","Regigigas","Giratina","Cresselia","Phione","Manaphy","Darkrai","Shaymin","Arceus","Victini","Snivy","Servine","Serperior","Tepig","Pignite","Emboar","Oshawott","Dewott","Samurott","Patrat","Watchog","Lillipup","Herdier","Stoutland","Purrloin","Liepard","Pansage","Simisage","Pansear","Simisear","Panpour","Simipour","Munna","Musharna","Pidove","Tranquill","Unfezant","Blitzle","Zebstrika","Roggenrola","Boldore","Gigalith","Woobat","Swoobat","Drilbur","Excadrill","Audino","Timburr","Gurdurr","Conkeldurr","Tympole","Palpitoad","Seismitoad","Throh","Sawk","Sewaddle","Swadloon","Leavanny","Venipede","Whirlipede","Scolipede","Cottonee","Whimsicott","Petilil","Lilligant","Basculin","Sandile","Krokorok","Krookodile","Darumaka","Darmanitan","Maractus","Dwebble","Crustle","Scraggy","Scrafty","Sigilyph","Yamask","Cofagrigus","Tirtouga","Carracosta","Archen","Archeops","Trubbish","Garbodor","Zorua","Zoroark","Minccino","Cinccino","Gothita","Gothorita","Gothitelle","Solosis","Duosion","Reuniclus","Ducklett","Swanna","Vanillite","Vanillish","Vanilluxe","Deerling","Sawsbuck","Emolga","Karrablast","Escavalier","Foongus","Amoonguss","Frillish","Jellicent","Alomomola","Joltik","Galvantula","Ferroseed","Ferrothorn","Klink","Klang","Klinklang","Tynamo","Eelektrik","Eelektross","Elgyem","Beheeyem","Litwick","Lampent","Chandelure","Axew","Fraxure","Haxorus","Cubchoo","Beartic","Cryogonal","Shelmet","Accelgor","Stunfisk","Mienfoo","Mienshao","Druddigon","Golett","Golurk","Pawniard","Bisharp","Bouffalant","Rufflet","Braviary","Vullaby","Mandibuzz","Heatmor","Durant","Deino","Zweilous","Hydreigon","Larvesta","Volcarona","Cobalion","Terrakion","Virizion","Tornadus","Thundurus","Reshiram","Zekrom","Landorus","Kyurem","Keldeo","Meloetta","Genesect","Chespin","Quilladin","Chesnaught","Fennekin","Braixen","Delphox","Froakie","Frogadier","Greninja","Bunnelby","Diggersby","Fletchling","Fletchinder","Talonflame","Scatterbug","Spewpa","Vivillon","Litleo","Pyroar","Flabébé","Floette","Florges","Skiddo","Gogoat","Pancham","Pangoro","Furfrou","Espurr","Meowstic","Honedge","Doublade","Aegislash","Spritzee","Aromatisse","Swirlix","Slurpuff","Inkay","Malamar","Binacle","Barbaracle","Skrelp","Dragalge","Clauncher","Clawitzer","Helioptile","Heliolisk","Tyrunt","Tyrantrum","Amaura","Aurorus","Sylveon","Hawlucha","Dedenne","Carbink","Goomy","Sliggoo","Goodra","Klefki","Phantump","Trevenant","Pumpkaboo","Gourgeist","Bergmite","Avalugg","Noibat","Noivern","Xerneas","Yveltal","Zygarde","Diancie","Hoopa","Volcanion","Rowlet","Dartrix","Decidueye","Litten","Torracat","Incineroar","Popplio","Brionne","Primarina","Pikipek","Trumbeak","Toucannon","Yungoos","Gumshoos","Grubbin","Charjabug","Vikavolt","Crabrawler","Crabominable","Oricorio","Cutiefly","Ribombee","Rockruff","Lycanroc","Wishiwashi","Mareanie","Toxapex","Mudbray","Mudsdale","Dewpider","Araquanid","Fomantis","Lurantis","Morelull","Shiinotic","Salandit","Salazzle","Stufful","Bewear","Bounsweet","Steenee","Tsareena","Comfey","Oranguru","Passimian","Wimpod","Golisopod","Sandygast","Palossand","Pyukumuku","Type: Null","Silvally","Minior","Komala","Turtonator","Togedemaru","Mimikyu","Bruxish","Drampa","Dhelmise","Jangmo-o","Hakamo-o","Kommo-o","Tapu Koko","Tapu Lele","Tapu Bulu","Tapu Fini","Cosmog","Cosmoem","Solgaleo","Lunala","Nihilego","Buzzwole","Pheromosa","Xurkitree","Celesteela","Kartana","Guzzlord","Necrozma","Magearna","Marshadow","Poipole","Naganadel","Stakataka","Blacephalon","Zeraora","Meltan","Melmetal","Grookey","Thwackey","Rillaboom","Scorbunny","Raboot","Cinderace","Sobble","Drizzile","Inteleon","Skwovet","Greedent","Rookidee","Corvisquire","Corviknight","Blipbug","Dottler","Orbeetle","Nickit","Thievul","Gossifleur","Eldegoss","Wooloo","Dubwool","Chewtle","Drednaw","Yamper","Boltund","Rolycoly","Carkol","Coalossal","Applin","Flapple","Appletun","Silicobra","Sandaconda","Cramorant","Arrokuda","Barraskewda","Toxel","Toxtricity","Sizzlipede","Centiskorch","Clobbopus","Grapploct","Sinistea","Polteageist","Hatenna","Hattrem","Hatterene","Impidimp","Morgrem","Grimmsnarl","Obstagoon","Perrserker","Cursola","Sirfetch'd","Mr. Rime","Runerigus","Milcery","Alcremie","Falinks","Pincurchin","Snom","Frosmoth","Stonjourner","Eiscue","Indeedee","Morpeko","Cufant","Copperajah","Dracozolt","Arctozolt","Dracovish","Arctovish","Duraludon","Dreepy","Drakloak","Dragapult","Zacian","Zamazenta","Eternatus"]

var mainLoop = [1,4,7,10,13,16,19,21,23,27,29,32,37,41,43,46,48,50,52,54,56,58,60,63,66,69,72,74,77,79,81,83,84,86,88,90,92,95,96,98,100,102,104,108,109,111,114,115,116,118,120,123,127,128,129,131,132,133,137,138,140,142,147,152,155,158,161,163,165,167,170,172,173,174,175,177,179,187,190,191,193,194,198,200,201,203,204,206,207,209,211,213,214,215,216,218,220,222,223,225,227,228,231,234,235,236,238,239,240,241,246,252,255,258,261,263,265,270,273,276,278,280,283,285,287,290,293,296,298,299,300,302,303,304,307,309,311,312,313,314,316,318,320,322,324,325,327,328,331,333,335,336,337,338,339,341,343,345,347,349,351,352,353,355,357,359,360,361,363,366,369,370,371,374,387,390,393,396,399,401,403,406,408,410,412,415,417,418,420,422,425,427,431,433,434,436,438,439,440,441,442,443,446,447,449,451,453,455,456,458,459,479,489,495,498,501,504,506,509,511,513,515,517,519,522,524,527,529,531,532,535,538,539,540,543,546,548,550,551,554,556,557,559,561,562,564,566,568,570,572,574,577,580,582,585,587,588,590,592,594,595,597,599,602,605,607,610,613,615,616,618,619,621,622,624,626,627,629,631,632,633,636,650,653,656,659,661,664,667,669,672,674,676,677,679,682,684,686,688,690,692,694,696,698,701,702,703,704,707,708,710,712,714,722,725,728,731,734,736,739,741,742,744,746,747,749,751,753,755,757,759,761,764,765,766,767,769,771,772,774,775,776,777,778,779,780,781,782,810,813,816,819,821,824,827,829,831,833,835,837,840,843,845,846,848,850,852,854,856,859,868,870,871,872,874,875,876,877,878,880,881,882,883,884,885]

var personalityList = new Array(9).fill([]);
for (n = 0; n < personalityNum.length; n++) {
    personalityList[personalityNum[n]] = personalityList[personalityNum[n]].concat([mainLoop[n]]);
}

var ansArray = [0,0,0,0,0,0];

var runningList;



var prevList = [];

function quiz1(id) {
	document.getElementById("question").innerHTML = questionBank[1];

  ansArray[1] = id;
  prevList = runningList;
  var tmpList = [];
  for (i = 0; i < mainLoop.length; i++) {
    if (eval(habitatVarList[id-1]).includes(mainLoop[i])) {
      tmpList.push(mainLoop[i]);
    }
  }
  runningList = tmpList;
  loadStarterPage();
  document.getElementById("forestButton").style.display = "none";
  document.getElementById("jungleButton").style.display = "none";
  document.getElementById("woodlandButton").style.display = "none";
  document.getElementById("fieldButton").style.display = "none";
  document.getElementById("grasslandButton").style.display = "none";
  document.getElementById("cityButton").style.display = "none";
  document.getElementById("plantButton").style.display = "none";
  document.getElementById("volcanoButton").style.display = "none";
  document.getElementById("caveButton").style.display = "none";
  document.getElementById("mountainButton").style.display = "none";
  document.getElementById("desertButton").style.display = "none";
  document.getElementById("badlandButton").style.display = "none";
  document.getElementById("pondButton").style.display = "none";
  document.getElementById("lakeButton").style.display = "none";
  document.getElementById("riverButton").style.display = "none";
  document.getElementById("riversideButton").style.display = "none";
  document.getElementById("beachButton").style.display = "none";
  document.getElementById("oceanButton").style.display = "none";
  document.getElementById("polarButton").style.display = "none";
  document.getElementById("reefButton").style.display = "none";
  document.getElementById("abyssButton").style.display = "none";
  document.getElementById("tundraButton").style.display = "none";
  document.getElementById("glacierButton").style.display = "none";
  document.getElementById("swampButton").style.display = "none";
  document.getElementById("ruinButton").style.display = "none";

  if (easyPKMN.filter(value => runningList.includes(value)).length > 0) {
    document.getElementById("easyButton").style.display = "block";
  }
  if (medPKMN.filter(value => runningList.includes(value)).length > 0) {
    document.getElementById("medButton").style.display = "block";
  }
  if (hardPKMN.filter(value => runningList.includes(value)).length > 0) {
    document.getElementById("hardButton").style.display = "block";
  }
}

function quiz2(diff) {
	document.getElementById("question").innerHTML = questionBank[2];

  prevList = runningList;
  ansArray[2] = diff;
  var tmpList = [];
  if (diff == 1) {
    for (i = 0; i < easyPKMN.length; i++) {
      if (runningList.includes(easyPKMN[i])) {
        tmpList.push(easyPKMN[i]);
      }
    }
  }
  else if (diff == 2) {
    for (i = 0; i < medPKMN.length; i++) {
      if (runningList.includes(medPKMN[i])) {
        tmpList.push(medPKMN[i]);
      }
    }
  }
  else if (diff == 3) {
    for (i = 0; i < hardPKMN.length; i++) {
      if (runningList.includes(hardPKMN[i])) {
        tmpList.push(hardPKMN[i]);
      }
    }
  }
  runningList = tmpList;
  if (tmpList.length == 1) {
    removeAllButtons()
  }
  document.getElementById("easyButton").style.display = "none";
  document.getElementById("medButton").style.display = "none";
  document.getElementById("hardButton").style.display = "none";

  if (gentleList.filter(value => runningList.includes(value)).length > 0) {
    document.getElementById("gentleButton").style.display = "block";
  }
  if (laidbackList.filter(value => runningList.includes(value)).length > 0) {
   document.getElementById("laidbackButton").style.display = "block";
  }
  if (outgoingList.filter(value => runningList.includes(value)).length > 0) {
    document.getElementById("outgoingButton").style.display = "block";
  }

  loadStarterPage();
}

function quiz3(temp) {
  document.getElementById("question").innerHTML = questionBank[3];
  prevList = runningList;
  ansArray[3] = temp;
  var gentleList = [];
  for (n = 0; n < overviewTemperament.length; n++) {
    if (parseInt(overviewTemperament[n]) < 0) {
      gentleList.push(n);
    }
  }
  var laidbackList = [];
  for (n = 0; n < overviewTemperament.length; n++) {
    if (parseInt(overviewTemperament[n]) == 0) {
      laidbackList.push(n);
    }
  }
  var outgoingList = [];
  for (n = 0; n < overviewTemperament.length; n++) {
    if (parseInt(overviewTemperament[n]) > 0) {
      outgoingList.push(n);
    }
  }

  var tmpList = [];
  if (temp == 1) {
    for (i = 0; i < gentleList.length; i++) {
      if (runningList.includes(gentleList[i])) {
        tmpList.push(gentleList[i]);
      }
    }
  }
  else if (temp == 2) {
    for (i = 0; i < laidbackList.length; i++) {
      if (runningList.includes(laidbackList[i])) {
        tmpList.push(laidbackList[i]);
      }
    }
  }
  else if (temp == 3) {
    for (i = 0; i < outgoingList.length; i++) {
      if (runningList.includes(outgoingList[i])) {
        tmpList.push(outgoingList[i]);
      }
    }
  }
  runningList = tmpList;

  var personalityMatrix = [0,0,0,0,0,0,0,0,0];
  for (i = 0; i < runningList.length; i++) {
    var ind = mainLoop.findIndex(dexNum => dexNum == runningList[i]);
    personalityMatrix[personalityNum[ind]] = personalityMatrix[personalityNum[ind]] + 1;
  }

  document.getElementById("gentleButton").style.display = "none";
  document.getElementById("laidbackButton").style.display = "none";
  document.getElementById("outgoingButton").style.display = "none";

  if (personalityMatrix[1] > 0) {
    document.getElementById("easygoingButton").style.display = "block";
  }
  if (personalityMatrix[2] > 0) {
    document.getElementById("reservedButton").style.display = "block";
  }
  if (personalityMatrix[3] > 0) {
    document.getElementById("carefreeButton").style.display = "block";
  }
  if (personalityMatrix[4] > 0) {
    document.getElementById("scrappyButton").style.display = "block";
  }
  if (personalityMatrix[5] > 0) {
    document.getElementById("hardworkingButton").style.display = "block";
  }
  if (personalityMatrix[6] > 0) {
    document.getElementById("caringButton").style.display = "block";
  }
  if (personalityMatrix[7] > 0) {
    document.getElementById("mischievousButton").style.display = "block";
  }
  if (personalityMatrix[8] > 0) {
    document.getElementById("curiousButton").style.display = "block";
  }

  if (tmpList.length == 1) {
    removeAllButtons()
  }
  loadStarterPage();
}

function quiz4(pers) {
  document.getElementById("question").innerHTML = questionBank[4];
  prevList = runningList;
  ansArray[4] = pers;

  var tmpList = [];
  persList = personalityList[pers]
  for (i = 0; i < persList.length; i++) {
    if (runningList.includes(persList[i])) {
        tmpList.push(persList[i]);
    }
  }
  runningList = tmpList;

  removeAllButtons();

  if (runningList.length > 1) {
    document.getElementById("button5-1").style.display = "block";
    document.getElementById("button5-2").style.display = "block";
  }
  if (runningList.length > 2) {
    document.getElementById("button5-3").style.display = "block";
  }
  if (runningList.length > 3) {
    document.getElementById("button5-4").style.display = "block";
  }
  if (runningList.length > 4) {
    document.getElementById("button5-5").style.display = "block";
  }
  if (runningList.length > 5) {
    document.getElementById("button5-6").style.display = "block";
  }
  if (runningList.length > 6) {
    document.getElementById("button5-7").style.display = "block";
  }
  if (runningList.length > 7) {
    document.getElementById("button5-8").style.display = "block";
  }
  if (runningList.length > 8) {
    document.getElementById("button5-9").style.display = "block";
  }
  if (runningList.length > 9) {
    document.getElementById("button5-10").style.display = "block";
  }
  //FOREST
  if (ansArray[1] == 1) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //1.1.1.EAS.REL. BULBASAUR
          document.getElementById("button5-2").innerHTML = "STRENGTH"; //1.1.1.EAS.STR. WEEDLE
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //1.1.1.EAS.SUR. WURMPLE
          document.getElementById("button5-4").innerHTML = "ADAPTABILITY"; //1.1.1.EAS.ADA. SCATTERBUG
        }
        else if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //1.1.1.RES.REL. CATERPIE
          document.getElementById("button5-2").innerHTML = "INTUITION"; //1.1.1.RES.INT. EXEGGCUTE
          document.getElementById("button5-3").innerHTML = "ADAPTABILITY"; //1.1.1.RES.ADA. KECLEON
          document.getElementById("button5-4").innerHTML = "CUNNING"; //1.1.1.RES.CUN. STUNKY
          document.getElementById("button5-5").innerHTML = "SURPRISE"; //1.1.1.RES.SUR. APPLIN
        }
        else if (ansArray[4] == 6) {
          document.getElementById("button5-1").innerHTML = "SURPRISE"; //1.1.1.PRO.SUR. FARFETCH'D
          document.getElementById("button5-2").innerHTML = "ADAPTABILITY"; //1.1.1.PRO.ADA. EEVEE
          document.getElementById("button5-3").innerHTML = "LOYALTY"; //1.1.1.PRO.LOY. SNUBBULL
        }
        //1.1.1.MIS.X SEEDOT
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //1.1.2.EAS.LOY. PIDGEY
          document.getElementById("button5-2").innerHTML = "ADAPTABILITY"; //1.1.2.EAS.ADA. DITTO
          document.getElementById("button5-3").innerHTML = "RESILIENCE"; //1.1.2.EAS.RES. PINECO
          document.getElementById("button5-4").innerHTML = "CUNNING"; //1.1.2.EAS.CUN. TREECKO
          document.getElementById("button5-5").innerHTML = "RELIABILITY"; //1.1.2.EAS.REL. TURTWIG
          document.getElementById("button5-6").innerHTML = "SURPRISE"; //1.1.2.EAS.SUR. KOMALA
        }
        //1.1.2.RES.X SPINARAK
        //1.1.2.PRO.X PIDOVE
      }
      else if (ansArray[3] == 3) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //1.1.3.EAS.STR. HERACROSS
          document.getElementById("button5-2").innerHTML = "GRACE"; //1.1.3.EAS.GRA.  ILLUMISE
        }
        //1.1.3.RES.X. WYNAUT
        else if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //1.1.3.CAR.CUN. PACHIRISU
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //1.1.3.CAR.RES. CHESPIN
        }
        else if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //1.1.3.SCR.STR. PINSIR
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //1.1.3.SCR.LOY. STARLY
          document.getElementById("button5-3").innerHTML = "CUNNING"; //1.1.3.SCR.CUN. YUNGOOS
        }
        else if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "SURPRISE"; //1.1.3.HAR.SUR. SMEARGLE
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //1.1.3.HAR.RES. VOLBEAT
          document.getElementById("button5-3").innerHTML = "STRENGTH"; //1.1.3.HAR.STR. TIMBURR
          document.getElementById("button5-4").innerHTML = "CUNNING"; //1.1.3.HAR.CUN. ROOKIDEE
          document.getElementById("button5-5").innerHTML = "RELIABILITY"; //1.1.3.HAR.REL. INDEEDEE
        }
        //1.1.3.MIS.X. MURKROW
        else if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //1.1.3.CUR.LOY. MEOWTH
          document.getElementById("button5-2").innerHTML = "INTUITION"; //1.1.3.CUR.INT. DROWZEE
          document.getElementById("button5-3").innerHTML = "CUNNING"; //1.1.3.CUR.CUN. PANSAGE
          document.getElementById("button5-4").innerHTML = "STRENGTH"; //1.1.3.CUR.STR. PANSEAR
          document.getElementById("button5-5").innerHTML = "RELIABILITY"; //1.1.3.CUR.REL. PANPOUR
          document.getElementById("button5-6").innerHTML = "RESILIENCE"; //1.1.3.CUR.RES. SKWOVET
        }
      }
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //1.2.1.RES.CUN. PARAS
          document.getElementById("button5-2").innerHTML = "INTUITION"; //1.2.1.RES.INT. STANTLER
          document.getElementById("button5-3").innerHTML = "RELIABILITY"; //1.2.1.RES.REL. SHROOMISH
          document.getElementById("button5-4").innerHTML = "ADAPTABILITY"; //1.2.1.RES.ADA. BURMY
          document.getElementById("button5-5").innerHTML = "STRENGTH"; //1.2.1.RES.STR. BUNEARY
          document.getElementById("button5-6").innerHTML = "GRACE"; //1.2.1.RES.GRA. DEERLING
          document.getElementById("button5-7").innerHTML = "SURPRISE"; //1.2.1.RES.SUR. FOONGUS
          document.getElementById("button5-8").innerHTML = "LOYALTY"; //1.2.1.RES.LOY. PHANTUMP
          document.getElementById("button5-9").innerHTML = "RESILIENCE"; //1.2.1.RES.RES. TOGEDEMARU
        }
        else if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //1.2.1.CAR.LOY. LEDYBA
          document.getElementById("button5-2").innerHTML = "ADAPTABILITY"; //1.2.1.CAR.ADA. HOPPIP
          document.getElementById("button5-3").innerHTML = "GRACE"; //1.2.1.CAR.GRA. SWABLU
          document.getElementById("button5-4").innerHTML = "SURPRISE"; //1.2.1.CAR.SUR. CHERUBI
          document.getElementById("button5-5").innerHTML = "CUNNING"; //1.2.1.CAR.CUN. EMOLGA
        }
        else if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //1.2.1.SCR.LOY. POOCHYENA
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //1.2.1.SCR.RES. KARRABLAST
        }
        //1.2.1.HAR.X BUNNELBY
        else if (ansArray[4] == 6) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //1.2.1.PRO.REL. HAPPINY
          document.getElementById("button5-2").innerHTML = "INTUITION"; //1.2.1.PRO.INT. AUDINO
        }
        //1.2.1.CUR.X PICHU
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //1.2.2.EAS.RES. SLAKOTH
          document.getElementById("button5-2").innerHTML = "CUNNING"; //1.2.2.EAS.CUN. CARNIVINE
          document.getElementById("button5-3").innerHTML = "RELIABILITY"; //1.2.2.EAS.REL. JOLTIK
          document.getElementById("button5-4").innerHTML = "INTUITION"; //1.2.2.EAS.INT. MORELULL
        }
        else if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //1.2.2.HAR.LOY. COMBEE
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //1.2.2.HAR.RES. THROH
          document.getElementById("button5-3").innerHTML = "GRACE"; //1.2.2.HAR.GRA. SAWK
        }
        //1.2.2.MIS.X ZORUA
      }
      //1.2.3.CAR.X GLIGAR

      else if (ansArray[3] == 3) {
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //1.2.3.SCR.STR. MANKEY
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //1.2.3.SCR.LOY. SCYTHER
          document.getElementById("button5-3").innerHTML = "CUNNING"; //1.2.3.SCR.CUN. VENIPEDE
          document.getElementById("button5-4").innerHTML = "GRACE"; //1.2.3.SCR.GRA. HAWLUCHA
          document.getElementById("button5-5").innerHTML = "RESILIENCE"; //1.2.3.SCR.RES. CRABRAWLER
        }
        else if (ansArray[4] == 6) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //1.2.3.PRO.RES. IGGLYBUFF
          document.getElementById("button5-2").innerHTML = "CUNNING"; //1.2.3.PRO.CUN. WOOBAT
          document.getElementById("button5-3").innerHTML = "RELIABILITY"; //1.2.3.PRO.REL. SEWADDLE
        }
        else if (ansArray[4] == 7) {
          document.getElementById("button5-1").innerHTML = "SURPRISE"; //1.2.3.MIS.SUR. GASTLY
          document.getElementById("button5-2").innerHTML = "INTUITION"; //1.2.3.MIS.INT. MISDREAVUS
          document.getElementById("button5-3").innerHTML = "RESILIENCE"; //1.2.3.MIS.RES. DUSKULL
          document.getElementById("button5-4").innerHTML = "ADAPTABILITY"; //1.2.3.MIS.ADA. COTTONEE
          document.getElementById("button5-5").innerHTML = "CUNNING"; //1.2.3.MIS.CUN. NICKIT
        }
        else if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "ADAPTABILITY"; //1.2.3.CUR.ADA. VENONAT
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //1.2.3.CUR.SUR. LICKITUNG
          document.getElementById("button5-3").innerHTML = "INTUITION"; //1.2.3.CUR.INT. HOOTHOOT
          document.getElementById("button5-4").innerHTML = "CUNNING"; //1.2.3.CUR.CUN. AIPOM
          document.getElementById("button5-5").innerHTML = "STRENGTH"; //1.2.3.CUR.STR. TEDDIURSA
          document.getElementById("button5-6").innerHTML = "GRACE"; //1.2.3.CUR.GRA. CHATOT
          document.getElementById("button5-7").innerHTML = "RESILIENCE"; //1.2.3.CUR.RES. MUNCHLAX
          document.getElementById("button5-8").innerHTML = "RELIABILITY"; //1.2.3.CUR.RESL. NOIBAT
        }
      }
    }
    else if (ansArray[2] == 3) {
      if (ansArray[3] == 1) {
        //1.3.1.EAS.X FENNEKIN
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //1.3.1.RES.INT. RALTS
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //1.3.1.RES.RES. NINCADA
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //1.3.1.RES.SUR. BONSLY
          document.getElementById("button5-4").innerHTML = "GRACE"; //1.3.1.RES.GRA. PETILIL
          document.getElementById("button5-5").innerHTML = "STRENGTH"; //1.3.1.RES.STR. STUFFUL
          document.getElementById("button5-6").innerHTML = "CUNNING"; //1.3.1.RES.CUN. BLIPBUG
        }
        //1.3.1.PRO.X TOGEPI
      }
      else if (ansArray[3] == 2) {
        //1.3.2.RES.X SNIVY
        //1.3.2.HAR.X PASSIMIAN
      }
      else if (ansArray[3] == 3) {
        //1.3.3.RES.X GLAMEOW
        //1.3.3.CAR.X SKITTY
        //1.3.3.SCR.X MORPEKO
        //1.3.3.PRO.X ROCKRUFF
        //1.3.3.MIS.X PANCHAM
        //1.3.3.CUR.X ROWLET
      }
    }
  }
  //JUNGLE
  else if (ansArray[1] == 2) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //2.1.1.EAS.REL. BULBASAUR
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //2.1.1.EAS.RES. SCATTERBUG
        }
        else if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //2.1.1.RES.REL. CATERPIE
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //2.1.1.RES.SUR. ODDISH
          document.getElementById("button5-3").innerHTML = "CUNNING"; //2.1.1.RES.CUN. BELLSPROUT
          document.getElementById("button5-4").innerHTML = "INTUITION"; //2.1.1.RES.INT. EXEGGCUTE
          document.getElementById("button5-5").innerHTML = "RESILIENCE"; //2.1.1.RES.RES. TANGELA
          document.getElementById("button5-6").innerHTML = "ADAPTABILITY"; //2.1.1.RES.ADA. KECLEON
        }
        //2.1.1.PRO.X GRUBBIN
      }
      else if (ansArray[3] == 3) {
        if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //2.1.3.CAR.REL. PIKIPEK
          document.getElementById("button5-2").innerHTML = "CUNNING"; //2.1.3.CAR.CUN. GROOKEY
          document.getElementById("button5-3").innerHTML = "RESILIENCE"; //2.1.3.CAR.RES. CUFANT
        }
        //2.1.3.HAR.X DURANT
        //2.1.3.PRO.X KANGASKHAN
        if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //2.1.3.CUR.RES. DROWZEE
          document.getElementById("button5-2").innerHTML = "INTUITION"; //2.1.3.CUR.INT. NATU
          document.getElementById("button5-3").innerHTML = "CUNNING"; //2.1.3.CUR.CUN. PANSAGE
          document.getElementById("button5-4").innerHTML = "STRENGTH"; //2.1.3.CUR.STR. PANSEAR
          document.getElementById("button5-5").innerHTML = "RELIABILITY"; //2.1.3.CUR.REL. PANPOUR
        }
      }
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        //2.2.1.RES.X EKANS
        if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //2.2.1.CAR.REL. LEDYBA
          document.getElementById("button5-2").innerHTML = "GRACE"; //2.2.1.CAR.GRA. BOUNSWEET
        }
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //2.2.2.EAS.RES. SLAKOTH
          document.getElementById("button5-2").innerHTML = "CUNNING"; //2.2.2.EAS.CUN. CROAGUNK
          document.getElementById("button5-3").innerHTML = "RELIABILITY"; //2.2.2.EAS.REL. HEATMOR
          document.getElementById("button5-4").innerHTML = "SURPRISE"; //2.2.2.EAS.SUR. FOMANTIS
        }
        //2.2.2.PRO.X TROPIUS
      }
      else if (ansArray[3] == 3) {
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //2.2.3.SCR.STR. MANKEY
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //2.2.3.SCR.LOY SCYTHER
        }
        //2.2.3.MIS.X PURRLOIN
        else if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "ADAPTABILITY"; //2.2.3.CUR.ADA. VENONAT
          document.getElementById("button5-2").innerHTML = "CUNNING"; //2.2.3.CUR.CUN. AIPOM
          document.getElementById("button5-3").innerHTML = "GRACE"; //2.2.3.CUR.GRA. CHATOT
        }
      }
    }
    else if (ansArray[2] == 3) {
      //2.3.1.X.X LITTEN
      //2.3.2.HAR.X PASSIMIAN
      //2.3.2.CUR.X ORANGURU
    }
  }
  //WOODLAND
  else if (ansArray[1] == 3) {
    if (ansArray[2] == 1) {
      //3.1.1.EAS.X WEEDLE
      //3.1.1.RES.X STUNKY
      //3.1.1.PRO.X GRUBBIN
      //3.1.1.MIS.X SEEDOT
      //3.1.2.RES.X SPINARAK
      //3.1.2.SCR.X FLETCHLING
      if (ansArray[3] == 3) {
        //3.1.3.HAR.X ROOKIDEE
        //3.1.3.MIS.X MURKROW
        if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //3.1.3.CUR.STR. YANMA
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //3.1.3.CUR.LOY. ZIGZAGOON
          document.getElementById("button5-3").innerHTML = "CUNNING"; //3.1.3.CUR.CUN. PANSAGE
          document.getElementById("button5-4").innerHTML = "RESILIENCE"; //3.1.3.CUR.RES. SKWOVET
        }
      }
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //3.2.1.RES.CUN. PARAS
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //3.2.1.RES.LOY. SENTRET
          document.getElementById("button5-3").innerHTML = "GRACE"; //3.2.1.RES.GRA. DEERLING
          document.getElementById("button5-4").innerHTML = "RESILIENCE"; //3.2.1.RES.RES. PHANTUMP
        }
        //3.2.1.CAR.X LEDYBA
        //3.2.1.HAR.X MINCCINO
      }
      else if (ansArray[3] == 2) {
        document.getElementById("button5-1").innerHTML = "RESILIENCE"; //3.2.2.EAS.RES. SLAKOTH
        document.getElementById("button5-2").innerHTML = "INTUITION"; //3.2.2.EAS.INT. MORELULL
      }
      //3.2.2.CAR.X CHINGLING
      //3.2.2.MIS.X ZORUA
      //3.2.2.CUR.X SPRITZEE
      else if (ansArray[3] == 3) {
        //3.2.3.CAR.X SWIRLIX
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //3.2.3.SCR.LOY. SCYTHER
          document.getElementById("button5-2").innerHTML = "CUNNING"; //3.2.3.SCR.CUN. VENIPEDE
        }
        else if (ansArray[4] == 7) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //3.2.3.MIS.INT. MISDREAVUS
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //3.2.3.MIS.RES. DUSKULL
          document.getElementById("button5-3").innerHTML = "ADAPTABILITY"; //3.2.3.MIS.ADA. COTTONEE
          document.getElementById("button5-4").innerHTML = "GRACE"; //3.2.3.MIS.GRA. LITWICK
          document.getElementById("button5-5").innerHTML = "CUNNING"; //3.2.3.MIS.CUN. NICKIT
          document.getElementById("button5-6").innerHTML = "SURPRISE"; //3.2.3.MIS.SUR. IMPIDIMP
        }
        if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //3.2.3.CUR.CUN. VENONAT
          document.getElementById("button5-2").innerHTML = "INTUITION"; //3.2.3.CUR.INT. HOOTHOOT
        }
      }
    }
    else if (ansArray[2] == 3) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //3.3.1.RES.RES. NINCADA
          document.getElementById("button5-2").innerHTML = "GRACE"; //3.3.1.RES.GRA. PETILIL
          document.getElementById("button5-3").innerHTML = "INTUITION"; //3.3.1.RES.INT. HATENNA
        }
        //3.3.3.PRO.X HOUNDOUR
        //3.3.3.CUR.X ROWLET
      }
    }
  }
  //FIELD
  else if (ansArray[1] == 4) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 1) {
        //4.1.1.EAS.X WOOLOO
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //4.1.1.RES.RES. RATTATA
          document.getElementById("button5-2").innerHTML = "ADAPTABILITY"; //4.1.1.RES.ADA. KECLEON
          document.getElementById("button5-3").innerHTML = "CUNNING"; //4.1.1.RES.CUN.  DEDENNE
        }
        //4.1.1.CAR.X MILCERY
        //4.1.1.PRO.X COMFEY
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //4.1.2.EAS.LOY. PIDGEY
          document.getElementById("button5-2").innerHTML = "GRACE"; //4.1.2.EAS.GRA. GOSSIFLEUR
        }
        //4.1.2.CAR.X KRICKETOT
        //4.1.2.SCR.X FLETCHLING
        //4.1.2.PRO.X SHINX
      }
      else if (ansArray[3] == 3) {
        //4.1.3.EAS.X ILLUMISE
        //4.1.3.CAR.X CHESPIN
        //4.1.3.SCR.X STARLY
        if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //4.1.3.HAR.RES. VOLBEAT
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //4.1.3.HAR.REL. SKIDDO
        }
        if (ansArray[4] == 6) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //4.1.3.PRO.REL. LILLIPUP
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //4.1.3.PRO.LOY. YAMPER
        }
        //4.1.3.CUR.X ZIGZAGOON
      }
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        //4.2.1.EAS.X MAREEP
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //4.2.1.RES.CUN. VULPIX
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //4.2.1.RES.LOY. SENTRET
          document.getElementById("button5-3").innerHTML = "GRACE"; //4.2.1.RES.GRA. BUDEW
          document.getElementById("button5-4").innerHTML = "SURPRISE"; //4.2.1.RES.SUR. FOONGUS
          document.getElementById("button5-5").innerHTML = "RESILIENCE"; //4.2.1.RES.RES. TOGEDEMARU
        }
        else if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "ADAPTABILITY"; //4.2.1.CAR.ADA. HOPPIP
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //4.2.1.CAR.REL. SUNKERN
          document.getElementById("button5-3").innerHTML = "GRACE"; //4.2.1.CAR.GRA. SWABLU
          document.getElementById("button5-4").innerHTML = "STRENGTH"; //4.2.1.CAR.STR. TEPIG
        }
        //4.2.1.SCR.X KARRABLAST
        else if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //4.2.1.HAR.INT. PATRAT
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //4.2.1.HAR.REL. BUNNELBY
        }
      }
      else if (ansArray[3] == 2) {
        //4.2.2.HAR.X MEDITITE
        if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //4.2.2.CUR.INT. SPRITZEE
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //4.2.2.CUR.RES. PUMPKABOO
        }
      }
      else if (ansArray[3] == 3) {
        //4.2.3.EAS.X MINIOR
        if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //4.2.3.CAR.CUN. PLUSLE
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //4.2.3.CAR.LOY. MINUN
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //4.2.3.CAR.SUR. SPINDA
          document.getElementById("button5-4").innerHTML = "INTUITION"; //4.2.3.CAR.INT. SWIRLIX
          document.getElementById("button5-5").innerHTML = "GRACE"; //4.2.3.CAR.GRA. ORICORIO
        }
        else if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //4.2.3.SCR.STR. ELEKID
          document.getElementById("button5-2").innerHTML = "GRACE"; //4.2.3.SCR.GRA. HAWLUCHA
        }
        //4.2.3.HAR.X TAILLOW
        else if (ansArray[4] == 6) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //4.2.3.PRO.RES. IGGLYBUFF
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //4.2.3.PRO.LOY. LITLEO
        }
        //4.2.3.MIS.X NICKIT
        //4.2.3.CUR.X CUTIEFLY
      }
    }
    else if (ansArray[2] == 3) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //4.3.1.RES.INT. ESPURR
          document.getElementById("button5-2").innerHTML = "CUNNING"; //4.3.1.RES.CUN. BLIPBUG
        }
      }
      //4.3.2.X.X SNIVY
      //4.3.3.X.X MORPEKO
    }
  }
  //GRASSLAND
  else if (ansArray[1] == 5) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 1) {
        //5.1.1.EAS.X WOOLOO
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //5.1.1.RES.CUN. RATTATA
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //5.1.1.RES.REL. SANDSHREW
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //5.1.1.RES.SUR. ODDISH
          document.getElementById("button5-4").innerHTML = "RESILIENCE"; //5.1.1.RES.RES. TANGELA
        }
        //5.1.1.PRO.X FARFETCH'D
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //5.1.2.EAS.LOY. PIDGEY
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //5.1.2.EAS.RES. STONJOURNER
        }
        if (ansArray[4] == 6) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //5.1.2.PRO.LOY. SHINX
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //5.1.2.PRO.REL. PIDOVE
        }
      }
      else if (ansArray[3] == 3) {
        if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //5.1.3.CAR.REL. CHESPIN
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //5.1.3.CAR.RES. CUFANT
        }
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //5.1.3.SCR.RES. RHYHORN
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //5.1.3.SCR.REL. TAUROS
          document.getElementById("button5-3").innerHTML = "CUNNING"; //5.1.3.SCR.CUN. YUNGOOS
        }
        else if (ansArray[4] == 6) {
          document.getElementById("button5-1").innerHTML = "GRACE"; //5.1.3.PRO.GRA. GROWLITHE
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //5.1.3.PRO.RES. MILTANK
          document.getElementById("button5-3").innerHTML = "RELIABILITY"; //5.1.3.PRO.REL. ELECTRIKE
          document.getElementById("button5-4").innerHTML = "LOYALTY"; //5.1.3.PRO.LOY. YAMPER
        }
        else if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //5.1.3.MIS.INT. DROWZEE
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //5.1.3.MIS.LOY. ZIGZAGOON
        }
      }
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        //5.2.1.EAS.X CHIKORITA
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //5.2.1.RES.CUN. EKANS
          document.getElementById("button5-2").innerHTML = "GRACE"; //5.2.1.RES.GRA. PONYTA
          document.getElementById("button5-3").innerHTML = "STRENGTH"; //5.2.1.RES.STR. CYNDAQUIL
          document.getElementById("button5-4").innerHTML = "LOYALTY"; //5.2.1.RES.LOY. SENTRET
        }
        //5.2.1.CAR.X TEPIG
        //5.2.1.SCR.X POOCHYENA
        //5.2.1.HAR.X PATRAT
      }
      //5.2.2.EAS.X TOXEL
      //5.2.2.CAR.X CHINGLING
      //5.2.2.HAR.X MUDBRAY
      //5.2.2.PRO.X VULLABY
      else if (ansArray[3] == 3) {
        //5.2.3.RES.X  DODUO
        //5.2.3.CAR.X  PHANPY
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //5.2.3.SCR.LOY. SCYTHER
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //5.2.3.SCR.RES. ZANGOOSE
          document.getElementById("button5-3").innerHTML = "CUNNING"; //5.2.3.SCR.CUN. SEVIPER
          document.getElementById("button5-4").innerHTML = "STRENGTH"; //5.2.3.SCR.STR. BOUFFALANT
        }
        //5.2.3.HAR.X TAILLOW
        //5.2.3.PRO.X LITLEO
        //5.2.3.MIS.X PURRLOIN
      }
    }
    else if (ansArray[2] == 3) {
      if (ansArray[3] == 1) {
        //5.3.1.EAS.X FENNEKIN
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //5.3.1.RES.INT. GIRAFARIG
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //5.3.1.RES.REL. TORCHIC
          document.getElementById("button5-3").innerHTML = "STRENGTH"; //5.3.1.RES.STR. LITTEN
        }
        //5.3.1.SCR.X BLITZLE
      }
      //5.3.2.X.X SNIVY
      //5.3.3.EAS.X GULPIN
      //5.3.3.SCR.X MORPEKO
    }
  }
  //CITY
  else if (ansArray[1] == 6) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //6.1.1.RES.RES. RATTATA
          document.getElementById("button5-2").innerHTML = "CUNNING"; //6.1.1.RES.CUN. DEDENNE
        }
        //6.1.1.CAR.X MILCERY
        else if (ansArray[4] == 6) {
          document.getElementById("button5-1").innerHTML = "ADAPTABILITY"; //6.1.1.PRO.ADA. EEVEE
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //6.1.1.PRO.LOY. SNUBBULL
          document.getElementById("button5-3").innerHTML = "GRACE"; //6.1.1.PRO.GRA. COMFEY
        }
        //6.1.1.CUR.X TRUBBISH
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //6.1.2.EAS.LOY. PIDGEY
          document.getElementById("button5-2").innerHTML = "ADAPTABILITY"; //6.1.2.EAS.ADA. DITTO
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //6.1.2.EAS.SUR. CASTFORM
          document.getElementById("button5-4").innerHTML = "RESILIENCE"; //6.1.2.EAS.RES. SOLOSIS
        }
        //6.1.2.SCR.X FLETCHLING
        //6.1.2.PRO.X PIDOVE
        //6.1.2.CUR.X GOTHITA
      }
      else if (ansArray[3] == 3) {
        //6.1.3.EAS.X GRIMER
        if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "SURPRISE"; //6.1.3.CAR.SUR. KOFFING
          document.getElementById("button5-2").innerHTML = "CUNNING"; //6.1.3.CAR.CUN. PACHIRISU
        }
        //6.1.3.SCR.X STARLY
        else if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "SURPRISE"; //6.1.3.HAR.SUR. SMEARGLE
          document.getElementById("button5-2").innerHTML = "ADAPTABILITY"; //6.1.3.HAR.ADA. TYROGUE
          document.getElementById("button5-3").innerHTML = "STRENGTH"; //6.1.3.HAR.STR. TIMBURR
          document.getElementById("button5-4").innerHTML = "RELIABILITY"; //6.1.3.HAR.REL. INDEEDEE
        }
        //6.1.3.PRO.X LILLIPUP
        else if (ansArray[4] == 7) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //6.1.3.MIS.REL. MURKROW
          document.getElementById("button5-2").innerHTML = "CUNNING"; //6.1.3.MIS.CUN. KLEFKI
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //6.1.3.MIS.SUR. SINISTEA
        }
        else if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //6.1.3.CUR.CUN. MEOWTH
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //6.1.3.CUR.LOY. ZIGZAGOON
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //6.1.3.CUR.SUR. MIMIKYU
        }
      }
    }
    else if (ansArray[2] == 2) {
      //6.2.1.RES.X BURMY
      //6.2.1.CAR.X SWABLU
      //6.2.1.PRO.X AUDINO
      //6.2.1.CUR.X PICHU
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //6.2.2.EAS.REL. JOLTIK
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //6.2.2.EAS.RES. KLINK
        }
        //6.2.2.PRO.X FURFROU
        //6.2.2.MIS.X ZORUA
        //6.2.2.CUR.X PUMPKABOO
      }
      else if (ansArray[3] == 3) {
        if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //6.2.3.CAR.CUN. PLUSLE
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //6.2.3.CAR.LOY. MINUN
          document.getElementById("button5-3").innerHTML = "INTUITION"; //6.2.3.CAR.INT. SWIRLIX
        }
        else if (ansArray[4] == 7) {
          document.getElementById("button5-1").innerHTML = "SURPRISE"; //6.2.3.MIS.SUR. GASTLY
          document.getElementById("button5-2").innerHTML = "INTUITION"; //6.2.3.MIS.INT. SHUPPET
          document.getElementById("button5-3").innerHTML = "ADAPTABILITY"; //6.2.3.MIS.ADA. ROTOM
          document.getElementById("button5-4").innerHTML = "CUNNING"; //6.2.3.MIS.CUN. PURRLOIN
          document.getElementById("button5-5").innerHTML = "GRACE"; //6.2.3.MIS.GRA. LITWICK
          document.getElementById("button5-6").innerHTML = "STRENGTH"; //6.2.3.MIS.STR. IMPIDIMP
        }
        else if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //6.2.3.CUR.RES. MUNCHLAX
          document.getElementById("button5-2").innerHTML = "INTUITION"; //6.2.3.CUR.INT. CUTIEFLY
        }
      }
    }
    else if (ansArray[2] == 3) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //6.3.1.RES.CUN. ABRA
          document.getElementById("button5-2").innerHTML = "INTUITION"; //6.3.1.RES.INT. RALTS
          document.getElementById("button5-3").innerHTML = "LOYALTY"; //6.3.1.RES.LOY. ESPURR
          document.getElementById("button5-4").innerHTML = "STRENGTH"; //6.3.1.RES.STR. STUFFUL
        }
      }
      //6.3.2.X.X PORYGON
      //6.3.3.RES.X GLAMEOW
      //6.3.3.CAR.X SKITTY
    }
  }
  //INDUSTRIAL
  else if (ansArray[1] == 7) {
    //7.1.1.RES.X DEDENNE
    //7.1.1.PRO.X GRUBBIN
    //7.1.2.X.X MAGNEMITE
    //7.1.3.X.X PACHIRISU
    if (ansArray[2] == 2) {
      //7.2.1.RES.X TOGEDEMARU
      //7.2.1.CUR.X PICHU
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //7.2.2.EAS.REL. JOLTIK
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //7.2.2.EAS.RES. KLINK
        }
      }
      else if (ansArray[3] == 3) {
        if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //7.2.3.CAR.CUN. PLUSLE
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //7.2.3.CAR.LOY. MINUN
        }
        //7.2.3.SCR.X  ELEKID
      }
    }
    //7.3.X.X.X VOLTORB
  }
  //VOLCANO
  else if (ansArray[1] == 8) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //8.1.2.EAS.RES. GEODUDE
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //8.1.2.EAS.REL. TORKOAL
        }
      }
      //8.1.3.CAR.X KOFFING
      //8.1.3.SCR.X CHARMANDER
      //8.1.3.PRO.X GROWLITHE
      //8.1.3.CUR.X PANSEAR
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        //8.2.1.EAS.X ROGGENROLA
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //8.2.1.RES.CUN. VULPIX
          document.getElementById("button5-2").innerHTML = "STRENGTH"; //8.2.1.RES.STR. CYNDAQUIL
          document.getElementById("button5-3").innerHTML = "GRACE"; //8.2.1.RES.GRA. LARVESTA
          document.getElementById("button5-4").innerHTML = "RELIABILITY"; //8.2.1.RES.REL. SIZZLIPEDE
        }
        //8.2.1.CAR.X SWABLU
        //8.2.1.HAR.X ROLYCOLY
        //8.2.1.CUR.X SALANDIT
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //8.2.2.EAS.RES. SLUGMA
          document.getElementById("button5-2").innerHTML = "STRENGTH"; //8.2.2.EAS.STR. MAGBY
          document.getElementById("button5-3").innerHTML = "RELIABILITY"; //8.2.2.EAS.REL. NUMEL
          document.getElementById("button5-4").innerHTML = "CUNNING"; //8.2.2.EAS.CUN. TURTONATOR
        }
      }
      //8.2.3.EAS.X DRIFLOON
      //8.2.3.CUR.X CHIMCHAR
    }
    //8.3.1.X.X TORCHIC
    //8.3.3.SCR.X GIBLE
    //8.3.3.PRO.X HOUNDOUR
  }
  //CAVE
  else if (ansArray[1] == 9) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //9.1.1.RES.REL. SANDSHREW
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //9.1.1.RES.RES. SHUCKLE
        }
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //9.1.2.EAS.REL. GEODUDE
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //9.1.2.EAS.SUR. NOSEPASS
          document.getElementById("button5-3").innerHTML = "STRENGTH"; //9.1.2.EAS.STR. ARON
          document.getElementById("button5-4").innerHTML = "CUNNING"; //9.1.2.EAS.CUN. LUNATONE
          document.getElementById("button5-5").innerHTML = "INTUITION"; //9.1.2.EAS.INT. SOLROCK
          document.getElementById("button5-6").innerHTML = "GRACE"; //9.1.2.EAS.GRA. BRONZOR
          document.getElementById("button5-7").innerHTML = "RESILIENCE"; //9.1.2.EAS.RES. CARBINK
        }
        //9.1.2.RES.X FERROSEED
        //9.1.2.HAR.X AXEW
      }
      else if (ansArray[3] == 3) {
        //9.1.3.RES.X WYNAUT
        if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //9.1.3.HAR.STR. MACHOP
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //9.1.3.HAR.LOY. DURANT
        }
      }
    }
    if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //9.2.1.EAS.REL. ONIX
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //9.2.1.EAS.RES. ROGGENROLA
        }
        else if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //9.2.1.RES.CUN. PARAS
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //9.2.1.RES.SUR. DUNSPARCE
          document.getElementById("button5-3").innerHTML = "RESILIENCE"; //9.2.1.RES.RES. DWEBBLE
          document.getElementById("button5-4").innerHTML = "ADAPTABILITY"; //9.2.1.RES.ADA. TYNAMO
        }
        //9.2.1.HAR.X ROLYCOLY
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //9.2.2.EAS.CUN. JOLTIK
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //9.2.2.EAS.RES. KLINK
          document.getElementById("button5-3").innerHTML = "RELIABILITY"; //9.2.2.EAS.REL. HEATMOR
          document.getElementById("button5-4").innerHTML = "SURPRISE"; //9.2.2.EAS.SUR. TURTONATOR
        }
        else if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //9.2.2.HAR.REL. DIGLETT
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //9.2.2.HAR.LOY. COMBEE
        }
      }
      else if (ansArray[3] == 3) {
        //9.2.3.CAR.X DRILBUR
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //9.2.3.SCR.STR. DRUDDIGON
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //9.2.3.SCR.RES. DURALUDON
        }
        if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //9.2.3.HAR.STR. BAGON
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //9.2.3.HAR.RES. JANGMO-O
        }
        //9.2.3.PRO.X WOOBAT
        else if (ansArray[4] == 7) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //9.2.3.MIS.INT. MISDREAVUS
          document.getElementById("button5-2").innerHTML = "CUNNING"; //9.2.3.MIS.CUN. SABLEYE
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //9.2.3.MIS.SUR. MAWILE
        }
        else if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //9.2.3.CUR.CUN. ZUBAT
          document.getElementById("button5-2").innerHTML = "INTUITION"; //9.2.3.CUR.INT. NOIBAT
        }
      }
    }
    if (ansArray[2] == 3) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //9.3.1.RES.RES. LARVITAR
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //9.3.1.RES.REL. WHISMUR
        }
        //9.3.1.PRO.X CUBONE
      }
      else if (ansArray[3] == 3) {
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //9.3.3.SCR.CUN. GIBLE
          document.getElementById("button5-2").innerHTML = "STRENGTH"; //9.3.3.SCR.STR. DEINO
        }
      }
    }
  }
  //MOUNTAIN
  else if (ansArray[1] == 10) {
    if (ansArray[2] == 1) {
      //10.1.1.X.X SHUCKLE
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //10.1.2.EAS.REL. GEODUDE
          document.getElementById("button5-2").innerHTML = "STRENGTH"; //10.1.2.EAS.STR. ARON
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //10.1.2.EAS.SUR. KOMALA
        }
        //10.1.2.HAR.X RIOLU
      }
      if (ansArray[3] == 3) {
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //10.1.3.SCR.REL. CHARMANDER
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //10.1.3.SCR.RES. RHYHORN
          document.getElementById("button5-3").innerHTML = "STRENGTH"; //10.1.3.SCR.STR. STARLY
        }
        if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //10.1.3.HAR.STR. MACHOP
          document.getElementById("button5-2").innerHTML = "ADAPTABILITY"; //10.1.3.HAR.ADA. TYROGUE
          document.getElementById("button5-3").innerHTML = "RESILIENCE"; //10.1.3.HAR.RES. MAKUHITA
          document.getElementById("button5-4").innerHTML = "RELIABILITY"; //10.1.3.HAR.REL. TIMBURR
          document.getElementById("button5-5").innerHTML = "CUNNING"; //10.1.3.HAR.CUN. DURANT
          document.getElementById("button5-6").innerHTML = "LOYALTY"; //10.1.3.HAR.LOY. SKIDDO
        }
      }
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //10.2.1.EAS.REL. ONIX
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //10.2.1.EAS.RES. ROGGENROLA
        }
        else if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "SURPRISE"; //10.2.1.RES.SUR. CLEFFA
          document.getElementById("button5-2").innerHTML = "INTUITION"; //10.2.1.RES.INT. STANTLER
          document.getElementById("button5-3").innerHTML = "STRENGTH"; //10.2.1.RES.STR. BUNEARY
          document.getElementById("button5-4").innerHTML = "GRACE"; //10.2.1.RES.GRA. DEERLING
          document.getElementById("button5-5").innerHTML = "CUNNING"; //10.2.1.RES.CUN. SIZZLIPEDE
        }
        //10.2.1.CAR.X  HOPPIP
        else if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "GRACE"; //10.2.1.HAR.GRA. MINCCINO
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //10.2.1.HAR.REL. BUNNELBY
          document.getElementById("button5-3").innerHTML = "RESILIENCE"; //10.2.1.HAR.RES. ROLYCOLY
        }
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //10.2.2.EAS.REL. HEATMOR
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //10.2.2.EAS.SUR. TURTONATOR
        }
        //10.2.2.RES.X ABSOL
        //10.2.2.CAR.X CHINGLING
        else if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //10.2.2.HAR.INT. MEDITITE
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //10.2.2.HAR.RES. THROH
          document.getElementById("button5-3").innerHTML = "STRENGTH"; //10.2.2.HAR.STR. SAWK
          document.getElementById("button5-4").innerHTML = "GRACE"; //10.2.2.HAR.GRA. MIENFOO
          document.getElementById("button5-5").innerHTML = "RELIABILITY"; //10.2.2.HAR.REL. MUDBRAY
        }
        //10.2.2.PRO.X DRAMPA
      }
      else if (ansArray[3] == 3) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //10.2.3.EAS.RES. DRIFLOON
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //10.2.3.EAS.SUR. MINIOR
        }
        if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //10.2.3.CAR.CUN. GLIGAR
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //10.2.3.CAR.SUR. SPINDA
        }
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //10.2.3.SCR.STR. MANKEY
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //10.2.3.SCR.LOY. SCYTHER
          document.getElementById("button5-3").innerHTML = "RESILIENCE"; //10.2.3.SCR.RES. DURALUDON
        }
        if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //10.2.3.HAR.RES. JANGMO-O
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //10.2.3.HAR.LOY. FALINKS
        }
        if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //10.2.3.CUR.INT. SPOINK
          document.getElementById("button5-2").innerHTML = "GRACE"; //10.2.3.CUR.GRA. CHIMCHAR
          document.getElementById("button5-3").innerHTML = "RESILIENCE"; //10.2.3.CUR.RES. MUNCHLAX
        }
      }
    }
    else if (ansArray[2] == 3) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //10.3.1.RES.STR. LARVITAR
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //10.3.1.RES.SUR. BONSLY
        }
        //10.3.1.PRO.X CUBONE
      }
      //10.3.2.X.X. ORANGURU
      //10.3.3.SCR.X SKARMORY
      //10.3.3.PRO.X ROCKRUFF
      //10.3.3.MIS.X PANCHAM
    }
  }
  //DESERT
  else if (ansArray[1] == 11) {
    if (ansArray[2] == 1) {
      //11.1.1.X.X SANDSHREW
      //11.1.2.X.X MARACTUS
      if (ansArray[3] == 3) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //11.1.3.EAS.CUN. CACNEA
          document.getElementById("button5-2").innerHTML = "STRENGTH"; //11.1.3.EAS.STR. SANDILE
        }
        //11.1.3.CAR.X DARUMAKA
        //11.1.3.SCR.X PINSIR
        //11.1.3.CUR.X NATU
      }
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //11.2.2.RES.CUN. SKORUPI
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //11.2.2.RES.RES. DWEBBLE
          document.getElementById("button5-3").innerHTML = "RELIABILITY"; //11.2.2.RES.REL. SILICOBRA
        }
      }
      //11.2.2.CAR.X HELIOPTILE
      //11.2.2.HAR.X DIGLETT
      if (ansArray[3] == 3) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //11.2.3.RES.CUN. TRAPINCH
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //11.2.3.RES.SUR. MINIOR
        }
        //11.2.3.CAR.X GLIGAR
        //11.2.3.PRO.X SCRAGGY
        //11.2.3.CUR.X HIPPOPOTAS
      }
    }
    //11.3.1.X.X FENNEKIN
    //11.3.3.X.X ROCKRUFF
  }
  //BADLAND
  else if (ansArray[1] == 12) {
    //12.1.3.CAR.X CUFANT
    //12.1.3.SCR.X RHYHORN
    //12.1.3.PRO.X KANGASKHAN
    if (ansArray[2] == 2) {
      //12.2.1.RES.X DREEPY
      //12.2.1.MIS.X SALANDIT
      //12.2.2.EAS.X TOXEL
      //12.2.2.PRO.X VULLABY
      if (ansArray[3] == 3) {
        if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //12.2.3.CAR.CUN. GLIGAR
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //12.2.3.CAR.RES. PHANPY
        }
        //12.2.3.SCR.X SPEAROW
        if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //12.2.3.HAR.STR. BAGON
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //12.2.3.HAR.RES.  JANGMO-O
          document.getElementById("button5-3").innerHTML = "LOYALTY"; //12.2.3.HAR.LOY. FALINKS
        }
        //12.2.3.PRO.X SCRAGGY
        //12.2.3.MIS.X DUSKULL
        //12.2.3.CUR.X SPOINK
      }
    }
    else if (ansArray[2] == 3) {
      //12.3.1.RES.X LARVITAR
      //12.3.1.PRO.X CUBONE
      if (ansArray[3] == 3) {
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //12.3.3.SCR.CUN. SKARMORY
          document.getElementById("button5-2").innerHTML = "INTUITION"; //12.3.3.SCR.INT. BELDUM
          document.getElementById("button5-3").innerHTML = "STRENGTH"; //12.3.3.SCR.STR. GIBLE
        }
      else if (ansArray[4] == 6) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //12.3.3.PRO.REL. HOUNDOUR
          document.getElementById("button5-2").innerHTML = "CUNNING"; //12.3.3.PRO.CUN. PAWNIARD
          document.getElementById("button5-3").innerHTML = "LOYALTY"; //12.3.3.PRO.LOY. ROCKRUFF
        }
      }
    }
  }
  //POND
  else if (ansArray[1] == 13) {
    if (ansArray[2] == 1) {
      //13.1.1.X.X FROAKIE
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "GRACE"; //13.1.2.EAS.GRA. GOLDEEN
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //13.1.2.EAS.REL. BARBOACH
        }
      }
      //13.1.3.EAS.X ILLUMISE
      //13.1.3.SCR.X CORPHISH
      //13.1.3.HAR.X VOLBEAT
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //13.2.1.EAS.REL. POLIWAG
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //13.2.1.EAS.RES. MAGIKARP
          document.getElementById("button5-3").innerHTML = "GRACE"; //13.2.1.EAS.GRA. FEEBAS
        }
        //13.2.1.RES.X DEWPIDER
        if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //13.2.1.CAR.STR. AZURILL
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //13.2.1.CAR.REL. TYMPOLE
        }
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //13.2.2.EAS.INT. PSYDUCK
          document.getElementById("button5-2").innerHTML = "GRACE"; //13.2.2.EAS.GRA. SURSKIT
        }
        //13.2.2.CAR.X LOTAD
        //13.2.2.PRO.X DUCKLETT
      }
      //13.2.3.X.X SQUIRTLE
    }
    //13.3.X.X.X CHEWTLE
  }
  //LAKE
  else if (ansArray[1] == 14) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "GRACE"; //14.1.2.EAS.GRA. GOLDEEN
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //14.1.2.EAS.REL. BARBOACH
        }
      }
      else if (ansArray[3] == 3) {
        //14.1.3.CAR.X TOTODILE
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //14.1.3.SCR.RES. CORPHISH
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //14.1.3.SCR.LOY. BASCULIN
        }
      }
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //14.2.1.EAS.REL. POLIWAG
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //14.2.1.EAS.RES. MAGIKARP
          document.getElementById("button5-3").innerHTML = "GRACE"; //14.2.1.EAS.GRA. FEEBAS
        }
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //14.2.1.RES.REL. DRATINI
          document.getElementById("button5-2").innerHTML = "CUNNING"; //14.2.1.RES.CUN. TYNAMO
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //14.2.1.RES.SUR. DREEPY
        }
        //14.2.1.CAR.X AZURILL
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //14.2.2.EAS.INT. PSYDUCK
          document.getElementById("button5-2").innerHTML = "GRACE"; //14.2.2.EAS.GRA. SURSKIT
        }
        //14.2.2.PRO.X DUCKLETT
      }
      //14.2.3.CAR.X SQUIRTLE
      //14.2.3.SCR.X ARROKUDA
      //14.2.3.CUR.X WOOPER
    }
  }
  //RIVER
  else if (ansArray[1] == 15) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "GRACE"; //15.1.2.EAS.GRA. GOLDEEN
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //15.1.2.EAS.REL. BARBOACH
        }
        //15.1.2.CUR.X REMORAID
      }
      else if (ansArray[3] == 3) {
        //15.1.3.CAR.X TOTODILE
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //15.1.3.SCR.RES. CORPHISH
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //15.1.3.SCR.LOY. BASCULIN
        }
        //15.1.3.HAR.X BUIZEL
      }
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //15.2.1.EAS.RES. MAGIKARP
          document.getElementById("button5-2").innerHTML = "GRACE"; //15.2.1.EAS.GRA. FEEBAS
        }
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "ADAPTABILITY"; //15.2.1.RES.ADA. TYNAMO
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //15.2.1.RES.SUR. DEWPIDER
        }
        //15.2.1.CAR.X AZURILL
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //15.2.2.EAS.INT. PSYDUCK
          document.getElementById("button5-2").innerHTML = "GRACE"; //15.2.2.EAS.GRA. FINNEON
        }
      }
      else if (ansArray[3] == 3) {
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //15.2.3.SCR.LOY. CARVANHA
          document.getElementById("button5-2").innerHTML = "STRENGTH"; //15.2.3.SCR.STR. ARROKUDA
        }
        //15.2.3.CUR.X WOOPER
      }
    }
    //15.3.X.X.X CHEWTLE
  }
  //RIVERSIDE
  else if (ansArray[1] == 16) {
    if (ansArray[2] == 1) {
      //16.1.1.X.X FARFETCH'D
      if (ansArray[3] == 2) {
        //16.1.2.1.X SLOWPOKE
        if (ansArray[4] == 5) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //16.1.2.HAR.REL. BIDOOF
          document.getElementById("button5-2").innerHTML = "STRENGTH"; //16.1.2.HAR.STR. AXEW
        }
      }
      //16.1.3.CAR.X CUFANT
      //16.1.3.HAR.X BUIZEL
      if (ansArray[4] == 8) {
        document.getElementById("button5-1").innerHTML = "INTUITION"; //16.1.3.CUR.INT. DROWZEE
        document.getElementById("button5-2").innerHTML = "RELIABILITY"; //16.1.3.CUR.REL. PANPOUR
      }
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        //16.2.1.EAS.X POLIWAG
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "ADAPTABILITY"; //16.2.1.RES.ADA. BURMY
          document.getElementById("button5-2").innerHTML = "CUNNING"; //16.2.1.RES.CUN. TYNAMO
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //16.2.1.RES.SUR. DEWPIDER
          document.getElementById("button5-4").innerHTML = "LOYALTY"; //16.2.1.RES.LOY. DREEPY
        }
        //16.2.1.CAR.X AZURILL
      }
      //16.2.2.X.X PSYDUCK
      if (ansArray[3] == 3) {
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //16.2.3.RES.RES. ZANGOOSE
          document.getElementById("button5-2").innerHTML = "CUNNING"; //16.2.3.RES.CUN. SEVIPER
        }
        //16.2.3.CUR.X WOOPER
      }
      //16.3.3.SCR.X CHEWTLE
      //16.3.3.PRO.X PAWNIARD
    }
  }
  //BEACH
  else if (ansArray[1] == 17) {
    if (ansArray[2] == 1) {
      //17.1.1.EAS.X KRABBY
      //17.1.1.RES.X SHUCKLE
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //17.1.2.EAS.RES. SLOWPOKE
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //17.1.2.EAS.SUR. PYUKUMUKU
          document.getElementById("button5-3").innerHTML = "RELIABILITY"; //17.1.2.EAS.REL. PINCURCHIN
        }
        //17.1.2.RES.X MAREANIE
      }
      //17.1.3.EAS.X CRAMORANT
      //17.1.3.CUR.X WINGULL
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "ADAPTABILITY"; //17.2.1.RES.ADA. TYNAMO
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //17.2.1.RES.RES. BINACLE
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //17.2.1.RES.SUR. WIMPOD
        }
        //17.2.1.HAR.X OSHAWOTT
      }
      //17.2.2.EAS.X SHELLOS
      //17.2.2.RES.X SANDYGAST
      else if (ansArray[3] == 3) {
        //17.2.3.EAS.X WAILMER
        if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //17.2.3.CAR.REL. MUDKIP
          document.getElementById("button5-2").innerHTML = "GRACE"; //17.2.3.CAR.GRA. POPPLIO
        }
        //17.2.3.CUR.X CHATOT
      }
    }
    //17.3.3.SCR.X CLOBBOPUS
    //17.3.3.MIS.X INKAY
  }
  //OCEAN
  else if (ansArray[1] == 18) {
    if (ansArray[2] == 1) {
      //18.1.1.X.X. SHELLDER
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "ADAPTABILITY"; //18.1.2.EAS.ADA. CLAMPERL
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //18.1.2.EAS.REL. PINCURCHIN
        }
        //18.1.2.RES.X MAREANIE
        if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //18.1.2.CUR.INT. STARYU
          document.getElementById("button5-2").innerHTML = "CUNNING"; //18.1.2.CUR.CUN. REMORAID
        }
      }
      //18.1.3.EAS.X CRAMORANT
      //18.1.3.CUR.X WINGULL
    }
    if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //18.2.1.EAS.RES. MAGIKARP
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //18.2.1.EAS.SUR. CHINCHOU
          document.getElementById("button5-3").innerHTML = "GRACE"; //18.2.1.EAS.GRA. FEEBAS
        }
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //18.2.1.RES.REL. HORSEA
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //18.2.1.RES.SUR. SKRELP
          document.getElementById("button5-3").innerHTML = "LOYALTY"; //18.2.1.RES.LOY. WISHIWASHI
        }
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //18.2.2.EAS.REL. TENTACOOL
          document.getElementById("button5-2").innerHTML = "GRACE"; //18.2.2.EAS.GRA. FINNEON
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //18.2.2.EAS.SUR. PHIONE
          document.getElementById("button5-4").innerHTML = "RESILIENCE"; //18.2.2.EAS.RES. FRILLISH
          document.getElementById("button5-5").innerHTML = "STRENGTH"; //18.2.2.EAS.STR. DHELMISE
        }
        //18.2.2.RES.X QWILFISH
        //18.2.2.SCR.X CLAUNCHER
      }
      //18.2.3.EAS.X WAILMER
      //18.2.3.SCR.X ARROKUDA
      //18.2.3.PRO.X ALOMOMOLA
    }
    //18.3.3.SCR.X CLOBBOPUS
    //18.3.3.CUR.X MANTYKE
  }
  //REEF
  else if (ansArray[1] == 19) {
    if (ansArray[2] == 1) {
      //19.1.1.X.X SHELLDER
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "ADAPTABILITY"; //19.1.2.EAS.ADA. CLAMPERL
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //19.1.2.EAS.SUR. PYUKUMUKU
          document.getElementById("button5-3").innerHTML = "RELIABILITY"; //19.1.2.EAS.REL. PINCURCHIN
        }
        //19.1.2.RES.X MAREANIE
        if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //19.1.2.CUR.INT. STARYU
          document.getElementById("button5-2").innerHTML = "CUNNING"; //19.1.2.CUR.CUN. REMORAID
        }
      }
      //19.1.3.X.X WINGULL
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RESILIENCE"; //19.2.1.EAS.RES. MAGIKARP
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //19.2.1.EAS.SUR. CHINCHOU
          document.getElementById("button5-3").innerHTML = "GRACE"; //19.2.1.EAS.GRA. FEEBAS
        }
        else if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //19.2.1.RES.REL. HORSEA
          document.getElementById("button5-2").innerHTML = "LOYALTY"; //19.2.1.RES.LOY. WISHIWASHI
        }
        //19.2.1.PRO.X LAPRAS
      }
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //19.2.2.EAS.REL. TENTACOOL
          document.getElementById("button5-2").innerHTML = "ADAPTABILITY"; //19.2.2.EAS.ADA. SHELLOS
          document.getElementById("button5-3").innerHTML = "GRACE"; //19.2.2.EAS.GRA. FINNEON
          document.getElementById("button5-4").innerHTML = "SURPRISE"; //19.2.2.EAS.SUR. PHIONE
          document.getElementById("button5-5").innerHTML = "RESILIENCE"; //19.2.2.EAS.RES. FRILLISH
        }
        //19.2.2.RES.X QWILFISH
        if (ansArray[4] == 4) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //19.2.2.SCR.STR. CLAUNCHER
          document.getElementById("button5-2").innerHTML = "INTUITION"; //19.2.2.SCR.INT. BRUXISH
        }
        //19.2.2.PRO.X LUVDISC
      }
      //19.2.3.SCR.X ARROKUDA
      //19.2.3.PRO.X ALOMOMOLA
    }
    //19.3.1.X.X CORSOLA
    //19.3.3.X.X MANTYKE
  }
  //POLAR
  else if (ansArray[1] == 20) {
    //20.1.1.X.X SHELLDER
    //20.1.2.X.X PINCURCHIN
    //20.1.3.EAS.X CRAMORANT
    //20.1.3.CUR.X WINGULL
    if (ansArray[2] == 2) {
      //20.2.1.EAS.X MAGIKARP
      //20.2.1.RES.X WISHIWASHI
      //20.2.1.PRO.X LAPRAS
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //20.2.2.EAS.REL. TENTACOOL
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //20.2.2.EAS.RES. FRILLISH
        }
        //20.2.2.RES.X EISCUE
        //20.2.2.PRO.X BERGMITE
      }
      //20.2.3.CAR.X SEEL
      //20.2.3.CUR.X SPHEAL
    }
    //20.3.2.X.X PIPLUP
    //20.3.3.X.X CLOBBOPUS
  }
  //ABYSS
  else if (ansArray[1] == 21) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "ADAPTABILITY"; //21.1.2.EAS.ADA. CLAMPERL
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //21.1.2.EAS.RES. RELICANTH
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //21.1.2.EAS.SUR. PYUKUMUKU
          document.getElementById("button5-4").innerHTML = "RELIABILITY"; //21.1.2.EAS.REL. PINCURCHIN
        }
      }
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        //21.2.1.EAS.X CHINCHOU
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "SURPRISE"; //21.2.1.RES.SUR. SKRELP
          document.getElementById("button5-2").innerHTML = "CUNNING"; //21.2.1.RES.RES. WIMPOD
        }
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "GRACE"; //21.2.2.EAS.GRA. FINNEON
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //21.2.2.EAS.RES. FRILLISH
          document.getElementById("button5-3").innerHTML = "STRENGTH"; //21.2.2.EAS.STR. DHELMISE
        }
      }
    }
  }
  //SWAMP
  else if (ansArray[1] == 22) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "SURPRISE"; //22.1.1.RES.SUR. ODDISH
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //22.1.1.RES.REL. BELLSPROUT
          document.getElementById("button5-3").innerHTML = "RESILIENCE"; //22.1.1.RES.RES. TANGELA
          document.getElementById("button5-4").innerHTML = "CUNNING"; //22.1.1.RES.CUN. FROAKIE
        }
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //22.1.2.EAS.REL. BARBOACH
          document.getElementById("button5-2").innerHTML = "SURPRISE"; //22.1.2.EAS.SUR. STUNFISK
        }
        //22.1.2.PRO.X RUFFLET
      }
      //22.1.3.CAR.X TOTODILE
      //22.1.3.HAR.X ROOKIDEE
      //22.1.3.MIS.X MURKROW
      //22.1.3.CUR.X YANMA
    }
    else if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        //22.2.1.EAS.X POLIWAG
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "SURPRISE"; //22.2.1.RES.SUR. SKORUPI
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //22.2.1.RES.REL. SHELMET
        }
        else if (ansArray[4] == 3) {
          document.getElementById("button5-1").innerHTML = "STRENGTH"; //22.2.1.CAR.STR. AZURILL
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //22.2.1.CAR.REL. TYMPOLE
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //22.2.1.CAR.SUR. GOOMY
        }
        //22.2.1.SCR.X KARRABLAST
      }
      else if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "GRACE"; //22.2.2.EAS.GRA. SURSKIT
          document.getElementById("button5-2").innerHTML = "CUNNING"; //22.2.2.EAS.CUN. CROAGUNK
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //22.2.2.EAS.SUR. CARNIVINE
          document.getElementById("button5-4").innerHTML = "RELIABILITY"; //22.2.2.EAS.REL. TOXEL
        }
      }
      //22.2.3.CAR.X MUDKIP
      //22.2.3.CUR.X WOOPER
    }
  }
  //GLACIER
  else if (ansArray[1] == 23) {
    //23.1.X.X.X DELIBIRD
    if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //23.2.1.EAS.REL. SWINUB
          document.getElementById("button5-2").innerHTML = "STRENGTH"; //23.2.1.EAS.STR. CUBCHOO
          document.getElementById("button5-3").innerHTML = "GRACE"; //23.2.1.EAS.GRA. SNOM
        }
      }
      //23.2.2.EAS.X VANILLITE
      //23.2.2.PRO.X BERGMITE
      else if (ansArray[3] == 3) {
        //23.2.3.EAS.X MINIOR
        //23.2.3.SCR.X CRYOGONAL
        //23.2.3.MIS.X SNEASEL
        if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //23.2.3.CUR.INT. SMOOCHUM
          document.getElementById("button5-2").innerHTML = "RELIABILITY"; //23.2.3.CUR.RELIABILITY. SNORUNT
          document.getElementById("button5-3").innerHTML = "LOYALTY"; //23.2.3.CUR.LOYALTY. SPHEAL
          document.getElementById("button5-4").innerHTML = "SURPRISE"; //23.2.3.CUR.SUR. SNOVER
        }
      }
    }
  }
  //TUNDRA
  else if (ansArray[1] == 24) {
    //24.1.1.X.X SCATTERBUG
    //24.1.2.X.X RUFFLET
    //24.1.3.PRO.X DELIBIRD
    //24.1.3.CUR.X SKWOVET
    if (ansArray[2] == 2) {
      if (ansArray[3] == 1) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "RELIABILITY"; //24.2.1.EAS.REL. SWINUB
          document.getElementById("button5-2").innerHTML = "STRENGTH"; //24.2.1.EAS.STR. CUBCHOO
          document.getElementById("button5-3").innerHTML = "GRACE"; //24.2.1.EAS.GRA. SNOM
        }
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "LOYALTY"; //24.2.2.RES.LOY. SENTRET
          document.getElementById("button5-2").innerHTML = "INTUITION"; //24.2.2.RES.INT. STANTLER
        }
        //24.2.2.SCR.X POOCHYENA
      }
      if (ansArray[3] == 3) {
        //24.2.3.MIS.X SNEASEL
        if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "CUNNING"; //24.2.3.CUR.CUN. HOOTHOOT
          document.getElementById("button5-2").innerHTML = "STRENGTH"; //24.2.3.CUR.STR. TEDDIURSA
          document.getElementById("button5-3").innerHTML = "SURPRISE"; //24.2.3.CUR.SUR. SNOVER
        }
      }
    }
    //24.3.X.X.X SKARMORY
  }
  //RUIN
  else if (ansArray[1] == 25) {
    if (ansArray[2] == 1) {
      if (ansArray[3] == 2) {
        if (ansArray[4] == 1) {
          document.getElementById("button5-1").innerHTML = "ADAPTABILITY"; //25.1.2.EAS.ADA. UNOWN
          document.getElementById("button5-2").innerHTML = "CUNNING"; //25.1.2.EAS.CUN. LUNATONE
          document.getElementById("button5-3").innerHTML = "INTUITION"; //25.1.2.EAS.INT. SOLROCK
          document.getElementById("button5-4").innerHTML = "RELIABILITY"; //25.1.2.EAS.REL. BALTOY
          document.getElementById("button5-5").innerHTML = "GRACE"; //25.1.2.EAS.GRA. BRONZOR
          document.getElementById("button5-6").innerHTML = "SURPRISE"; //25.1.2.EAS.SUR. SIGILYPH
          document.getElementById("button5-7").innerHTML = "RESILIENCE"; //25.1.2.EAS.RES. STONJOURNER
        }
      }
      //25.1.2.HAR.X. GOLETT
      if (ansArray[3] == 3) {
        //25.1.3.CAR.X DARUMAKA
        //25.1.3.MIS.X SINISTEA
        if (ansArray[4] == 8) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //25.1.3.CUR.INT. NATU
          document.getElementById("button5-2").innerHTML = "CUNNING"; //25.1.3.CUR.CUN. ELGYEM
        }
      }
    }
    if (ansArray[2] == 2) {
      //25.2.1.X.X VULPIX
      if (ansArray[3] == 2) {
        if (ansArray[4] == 2) {
          document.getElementById("button5-1").innerHTML = "INTUITION"; //25.2.2.RES.INT. ABSOL
          document.getElementById("button5-2").innerHTML = "RESILIENCE"; //25.2.2.RES.RES. YAMASK
        }
        //25.2.2.CUR.X CHINGLING
      }
      //25.2.3.X.X GASTLY
    }
    //25.3.1.X.X ABRA
    //25.3.2.X.X HONEDGE
    //25.3.3.X.X SPIRITOMB
  }
  loadStarterPage();
}

function quiz5(fin) {
  prevList = runningList;
  ansArray[5] = fin;
  runningList = [prevList[fin-1]];
  removeAllButtons();
  loadStarterPage();
}

function removeAllButtons() {
  document.getElementById("forestButton").style.display = "none";
  document.getElementById("jungleButton").style.display = "none";
  document.getElementById("woodlandButton").style.display = "none";
  document.getElementById("fieldButton").style.display = "none";
  document.getElementById("grasslandButton").style.display = "none";
  document.getElementById("cityButton").style.display = "none";
  document.getElementById("plantButton").style.display = "none";
  document.getElementById("volcanoButton").style.display = "none";
  document.getElementById("caveButton").style.display = "none";
  document.getElementById("mountainButton").style.display = "none";
  document.getElementById("desertButton").style.display = "none";
  document.getElementById("badlandButton").style.display = "none";
  document.getElementById("pondButton").style.display = "none";
  document.getElementById("lakeButton").style.display = "none";
  document.getElementById("riverButton").style.display = "none";
  document.getElementById("riversideButton").style.display = "none";
  document.getElementById("beachButton").style.display = "none";
  document.getElementById("oceanButton").style.display = "none";
  document.getElementById("polarButton").style.display = "none";
  document.getElementById("reefButton").style.display = "none";
  document.getElementById("abyssButton").style.display = "none";
  document.getElementById("tundraButton").style.display = "none";
  document.getElementById("glacierButton").style.display = "none";
  document.getElementById("swampButton").style.display = "none";
  document.getElementById("ruinButton").style.display = "none";

  document.getElementById("easyButton").style.display = "none";
  document.getElementById("medButton").style.display = "none";
  document.getElementById("hardButton").style.display = "none";

  document.getElementById("gentleButton").style.display = "none";
  document.getElementById("laidbackButton").style.display = "none";
  document.getElementById("outgoingButton").style.display = "none";

  document.getElementById("easygoingButton").style.display = "none";
  document.getElementById("reservedButton").style.display = "none";
  document.getElementById("carefreeButton").style.display = "none";
  document.getElementById("scrappyButton").style.display = "none";
  document.getElementById("hardworkingButton").style.display = "none";
  document.getElementById("caringButton").style.display = "none";
  document.getElementById("mischievousButton").style.display = "none";
  document.getElementById("curiousButton").style.display = "none";

  document.getElementById("button5-1").style.display = "none";
  document.getElementById("button5-2").style.display = "none";
  document.getElementById("button5-3").style.display = "none";
  document.getElementById("button5-4").style.display = "none";
  document.getElementById("button5-5").style.display = "none";
  document.getElementById("button5-6").style.display = "none";
  document.getElementById("button5-7").style.display = "none";
  document.getElementById("button5-8").style.display = "none";
  document.getElementById("button5-9").style.display = "none";
  document.getElementById("button5-10").style.display = "none";
}

function resetQuiz() {
  window.location.reload();
}

function guideSwitchOn() {
  document.getElementById("HowTo").style.display = "block";
  document.getElementById("hideGuideButton").style.display = "block";
  document.getElementById("text1").style.display = "block";
  document.getElementById("text2").style.display = "block";
  document.getElementById("text3").style.display = "block";
  document.getElementById("text4").style.display = "block";
  document.getElementById("text5").style.display = "block";
  document.getElementById("text6").style.display = "block";
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
  document.getElementById("text6").style.display = "none";
  document.getElementById("showGuideButton").style.display = "block";
}
