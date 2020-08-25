#!/bin/bash
FP="./habitats";
for i in {0..24}
  do
  echo "<!DOCTYPE html>
<html>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>

  <head>
    <script type='text/javascript' src='http://code.jquery.com/jquery-latest.js'></script>
    <script type='text/javascript' src='../OverviewText.js'></script>
  </head>

  <script>generateStyle()</script>

  <body onload='loadHabitatPage("$i")'>

  <script>generateNavBar()</script>
  <h1 id='habitatname'><strong><center>Habitat</center></strong></h1>
  <script>document.getElementById('habitatname').style.color=habitatColors["$i"]</script>
  <br></br>
  <div id='habitat-gallery' class='imageGallery' style='line-height: 0px; padding: 0; margin: 0;'>
    <div style='display:flex; flex-flow:row wrap; margin:0px 175px 100px 175px;' id='entryHolder'></div>
  </div>
</body>

</html>" > $FP"/habitat_"$i".html";
done;
