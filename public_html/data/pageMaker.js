<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript" src="data/OverviewText.js"></script>
  </head>
<script>
function loadPage(n) {
  genColor = genColorSetter(n);
  //Species Name
  document.getElementById("entry-name").innerHTML = "<font style='color:" + genColor + "'>" + overviewName[n] + "</font>";
  //Species Descriptor
  descriptorLine = "The <i>" + overviewNickname[n] + "</i> Pokémon";
  document.getElementById("species-name").innerHTML = descriptorLine;
  //Species Image
  var entryImageLink = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(overviewNum[n],".png");
  document.getElementById("entryImage").src = entryImageLink;
  //Species Number
  document.getElementById("Num").innerHTML = "<b>No</b> " + overviewNum[n];
  //Species Type
  typecolor1=typeColorSetter(overviewType1[n]);
  var typeLine = "<b>Type:</b> <font style='color:" + typecolor1 + "'>" + overviewType1[n] + "</font>";
  if (overviewType2[n] != "Unknown") {
    typecolor2=typeColorSetter(overviewType2[n]);
    typeLine = typeLine + "/" + "<font style='color:" + typecolor2 + "'>" + overviewType2[n] + "</font>";
  }
  document.getElementById("Type").innerHTML = typeLine;
  //Species Height
  var heightLine = "<b>" + overviewHtType[n] + ":</b> " + overviewHtImp[n] + " lbs | " + overviewHtMet[n] + " kgs";
  document.getElementById("Ht").innerHTML = heightLine;
  //Species Weight
  var weightLine = "<b>Wt:</b> " + overviewWtImp[n] + " lbs | " + overviewWtMet[n] + " kgs";
  document.getElementById("Wt").innerHTML = weightLine;
  //Species Ability
  var abilityLine = "";
  if (overviewAbility2[n] == "" && overviewAbility3[n] == "") {
    abilityLine = abilityLine + "<b>Ability:</b> " + overviewAbility1[n];
  }
  else {
    abilityLine = abilityLine + "<b>Abilities:</b> " + overviewAbility1[n];
    if (overviewAbility2[n] != "") {
      abilityLine = abilityLine + " | " + overviewAbility2[n];
    }
    if (overviewAbility3[n] != "") {
      abilityLine = abilityLine + " | " + "<i>" + overviewAbility3[n] + "</i>";
    }
  }
  document.getElementById("Abilities").innerHTML = abilityLine;
  //Species Egg Groups
  var eggLine = "";
  if (overviewEgg2[n] == "") {
    eggLine = eggLine + "<b>Egg Group:</b> " + overviewEgg1[n];
  }
  else {
    eggLine = eggLine + "<b>Egg Groups:</b> " + overviewEgg1[n] + " | " + overviewEgg2[n];
  }
  document.getElementById("Egg").innerHTML = eggLine;
  //Species Habitat
  document.getElementById("Habitat-header").innerHTML = "<font style='color:" + genColor + "'>" + "Habitat Info" + "</font>";
  document.getElementById("Habitat").innerHTML = overviewHabitat[n];
  //Species Entry
  document.getElementById("Overview-header").innerHTML = "<font style='color:" + genColor + "'>" + "Overview Info" + "</font>";
  document.getElementById("Overview").innerHTML = overviewEntry[n];
}
</script>
</html>
