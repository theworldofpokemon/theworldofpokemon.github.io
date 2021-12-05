#!/bin/bash
FP="./entryPages";
declare -a specialPkmnNum=( 3 6 6 9 15 18 65 80 94 115 127 130 142 150 150 181 208 212 214 229 248 254 257 260 282 302 303 306 308 310 319 323 334 354 359 362 373 376 380 381 382 383 384 428 445 448 460 475 531 719
19 20 26 27 28 37 38 50 51 52 53 74 75 76 88 89 103 105 0 0
52 77 78 79 80 83 110 122 144 145 146 199 222 263 264 554 555 562 618 0
3 6 9 12 25 52 68 94 99 131 133 143 569 809 812 815 818 823 826 834 839 841 842 844 849 851 858 861 869 879 884 892);
indexpage="0";

for i in {0..49}
  do
  toWrite=${specialPkmnNum[$i]};
  if [ $i = 1 ] || [ $i = 13 ]; then
    toWrite="${specialPkmnNum[$i]}X";
  fi
  if [ $i = 2 ] || [ $i = 14 ]; then
    toWrite="${specialPkmnNum[$i]}Y";
  fi
  echo "<!DOCTYPE html>
<html>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>

  <head>
    <script type='text/javascript' src='https://code.jquery.com/jquery-latest.js'></script>
    <script type='text/javascript' src='../../OverviewText.js'></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src='https://www.googletagmanager.com/gtag/js?id=G-NP4C5XZVLG'></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NP4C5XZVLG');
</script>

    <style type='text/css'>

      .section-info-mobile {display: none;}

      /* Smartphone Portrait and Landscape */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 480px){
          .section-info-mobile {display: inline;}
      }
    </style>
    <style type='text/css'>
      .section-info { display: inline; }

      /* Smartphone Portrait and Landscape */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 480px){
          .section-info { display: none;}
        }
    </style>
  </head>

  <script>generateStyle()</script>

  <body onload='loadSpecialPage("$i")'>

        <script>generateNavBar()</script>

        <div class='flex-container' style='margin:0px 12.5% 12.5% 12.5%; display:flex;flex-direction:column;'>
          <div class='flex-container' style='display:flex; flex: 0 1 auto; flex-direction: row;justify-content: space-between;align-content: flex-start;'>
              <div style='flex: 0 0 40%; width:100%;'>
                <span class='flex-container' style='display:flex; flex-direction: row; justify-content: space-between;'>
                  <span style='line-height:normal;'>
                      <h1 class='entry-name' id='entry-name' style='font-weight:bold;font-size:60px;vertical-align:top;'>Pokémon Name</h1>
                      <h3 class='species-name' id='species-name' style='font-weight:bold; font-size:20px;'>The Undefined Pokémon</h3>
                  </span>
                  <h6 class = 'section-info' style='font-size:18px;'><a id='researchLink' href=''>Research Notes</a></h6>
                </span>
          <div class='section-info-mobile'>
            <h6 class = 'section-info-mobile' style='font-size:18px; width:20%'><a id='researchLink-mobile' href=''>Research Notes</a></h6>
            <div class='flex-box' style='display:flex;flex-direction: column;justify-content:center;'>
              <span class='section-info-mobile' style='margin: 5% 5% 0% 0%'><img id='entryImage-mobile' width='300' height='300' style='border: 1px solid lightgray;'></span>
              <span class='section-info-mobile' style='align-self:center;margin: 5% 5% 0% 0%'><img id='sizeImage-mobile' width='123' height='100'></span>
            </div>
          </div>
          <hr class='hr' style='width:100%;'>
          <div class='flex-container' style='display:flex; flex-direction: row; justify-content: space-between;'>
              <div style='width:450px;line-height:normal;'>
              <h3 class='entry-stat' id='Num'>No</h3>
              <h3 class='entry-stat' id='Type'>Type</h3>
              <h3 class='entry-stat' id='Ht'>Ht</h3>
              <h3 class='entry-stat' id='Wt'>Wt</h3>
              <h3 class='entry-stat' id='Abilities'>Abilities</h3>
              <h3 class='entry-stat' id='Egg'>Egg Groups</h3>
            </div>
            <span class =section-info style='align-self:center;'><img id='sizeImage' width='123' height='100'></span>
         </div>
        </div>
      <span class=section-info><img id='entryImage' width='300' height='300' style='border: 1px solid lightgray;'></span>
    </div>
    <hr class='hr' style='width:100%;'>
    <span><h2 class='section-info-mobile' id='Habitat-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Habitat</h2></span>
    <div class='flex-container' style='display:flex; flex-direction: row;'>
      <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id='Habitat-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Habitat</h2></span>
      <span><p class='habitat-info' id='Habitat' style='font-size:18px;'>Habitat Info</p></span>
    </div>
    <span><h2 class='section-info-mobile' id='Overview-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Overview</h2></span>
    <div class='flex-container' style='display:flex; flex-direction: row;'>
      <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id='Overview-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Overview</h2></span>
      <span><p class='overview-info' id='Overview'>Overview Info</p></span>
    </div>
    <div>
      <hr class='hr' style='width:100%; margin:20px 0px 0px 0px;'>
    </div>
    <span><h2 class='section-info-mobile' id = 'Evolution-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Evolution</h2></span>
    <div class='flex-container' style='display:flex; flex-direction: row;'>
      <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id = 'Evolution-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Evolution</h2></span>
      <span><p class='evo-info' id='Evolution' style='font-size:18px;'>Evolution Info</p></span>
    </div>
    <div id='form-info' style='display:none'>
      <hr class='hr' style='width:100%;'>
      <div id='forms' class='flex-container' style='display:flex; flex-direction: row; flex-wrap:wrap; justify-content:center;'>
      </div>
    <div>
      <hr class='hr' style='width:100%;'>
    </div>
  </div>
    <div class='flex-container' style='display:flex; flex-direction: row;justify-content: space-between;'>
      <a id='prev' href=''><button class='w3-button w3-dark-grey'><span class='wsite-button' style='vertical-align:-2px;'>PREVIOUS</span></button></a>
      <a id='next' href=''><button class='w3-button w3-dark-grey'><span class='wsite-button' style='vertical-align:-2px;'>NEXT</button><span></a>
    </div>
  </div>
</div>
<script>generateFooter()</script>
</body>" > $FP"/Mega/M_"$toWrite".html";
done;

for i in {50..67}
  do
  echo "<!DOCTYPE html>
<html>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>

  <head>
    <script type='text/javascript' src='http://code.jquery.com/jquery-latest.js'></script>
    <script type='text/javascript' src='../../OverviewText.js'></script>

    <style type='text/css'>

      .section-info-mobile {display: none;}

      /* Smartphone Portrait and Landscape */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 480px){
          .section-info-mobile {display: inline;}
      }
    </style>
    <style type='text/css'>
      .section-info { display: inline; }

      /* Smartphone Portrait and Landscape */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 480px){
          .section-info { display: none;}
        }
    </style>
  </head>

  <script>generateStyle()</script>

  <body onload='loadSpecialPage("$i")'>

        <script>generateNavBar()</script>

        <div class='flex-container' style='margin:0px 12.5% 12.5% 12.5%; display:flex;flex-direction:column;'>
          <div class='flex-container' style='display:flex; flex: 0 1 auto; flex-direction: row;justify-content: space-between;align-content: flex-start;'>
              <div style='flex: 0 0 40%; width:100%;'>
                <span class='flex-container' style='display:flex; flex-direction: row; justify-content: space-between;'>
                  <span style='line-height:normal;'>
                      <h1 class='entry-name' id='entry-name' style='font-weight:bold;font-size:60px;vertical-align:top;'>Pokémon Name</h1>
                      <h3 class='species-name' id='species-name' style='font-weight:bold; font-size:20px;'>The Undefined Pokémon</h3>
                  </span>
                  <h6 class = 'section-info' style='font-size:18px;'><a id='researchLink' href=''>Research Notes</a></h6>
                </span>
          <div class='section-info-mobile'>
            <h6 class = 'section-info-mobile' style='font-size:18px; width:20%'><a id='researchLink-mobile' href=''>Research Notes</a></h6>
            <div class='flex-box' style='display:flex;flex-direction: column;justify-content:center;'>
              <span class='section-info-mobile' style='margin: 5% 5% 0% 0%'><img id='entryImage-mobile' width='300' height='300' style='border: 1px solid lightgray;'></span>
              <span class='section-info-mobile' style='align-self:center;margin: 5% 5% 0% 0%'><img id='sizeImage-mobile' width='123' height='100'></span>
            </div>
          </div>
          <hr class='hr' style='width:100%;'>
          <div class='flex-container' style='display:flex; flex-direction: row; justify-content: space-between;'>
              <div style='width:450px;line-height:normal;'>
              <h3 class='entry-stat' id='Num'>No</h3>
              <h3 class='entry-stat' id='Type'>Type</h3>
              <h3 class='entry-stat' id='Ht'>Ht</h3>
              <h3 class='entry-stat' id='Wt'>Wt</h3>
              <h3 class='entry-stat' id='Abilities'>Abilities</h3>
              <h3 class='entry-stat' id='Egg'>Egg Groups</h3>
            </div>
            <span class =section-info style='align-self:center;'><img id='sizeImage' width='123' height='100'></span>
         </div>
        </div>
      <span class=section-info><img id='entryImage' width='300' height='300' style='border: 1px solid lightgray;'></span>
      </div>
      <hr class='hr' style='width:100%;'>
      <span><h2 class='section-info-mobile' id='Habitat-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Habitat</h2></span>
      <div class='flex-container' style='display:flex; flex-direction: row;'>
      <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id='Habitat-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Habitat</h2></span>
      <span><p class='habitat-info' id='Habitat' style='font-size:18px;'>Habitat Info</p></span>
      </div>
      <span><h2 class='section-info-mobile' id='Overview-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Overview</h2></span>
      <div class='flex-container' style='display:flex; flex-direction: row;'>
      <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id='Overview-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Overview</h2></span>
      <span><p class='overview-info' id='Overview'>Overview Info</p></span>
      </div>
      <div>
      <hr class='hr' style='width:100%; margin:20px 0px 0px 0px;'>
      </div>
      <span><h2 class='section-info-mobile' id = 'Evolution-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Evolution</h2></span>
      <div class='flex-container' style='display:flex; flex-direction: row;'>
      <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id = 'Evolution-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Evolution</h2></span>
      <span><p class='evo-info' id='Evolution' style='font-size:18px;'>Evolution Info</p></span>
      </div>
      <div id='form-info' style='display:none'>
      <hr class='hr' style='width:100%;'>
      <div id='forms' class='flex-container' style='display:flex; flex-direction: row; flex-wrap:wrap; justify-content:center;'>
      </div>
      <div>
      <hr class='hr' style='width:100%;'>
      </div>
      </div>
      <div class='flex-container' style='display:flex; flex-direction: row;justify-content: space-between;'>
      <a id='prev' href=''><button class='w3-button w3-dark-grey'><span class='wsite-button' style='vertical-align:-2px;'>PREVIOUS</span></button></a>
      <a id='next' href=''><button class='w3-button w3-dark-grey'><span class='wsite-button' style='vertical-align:-2px;'>NEXT</button><span></a>
      </div>
      </div>
      </div>
      <script>generateFooter()</script>
</body>" > $FP"/Alolan/A_"${specialPkmnNum[$i]}".html";
done;

for i in {70..88}
  do
  echo "<!DOCTYPE html>
<html>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>

  <head>
    <script type='text/javascript' src='http://code.jquery.com/jquery-latest.js'></script>
    <script type='text/javascript' src='../../OverviewText.js'></script>

    <style type='text/css'>

      .section-info-mobile {display: none;}

      /* Smartphone Portrait and Landscape */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 480px){
          .section-info-mobile {display: inline;}
      }
    </style>
    <style type='text/css'>
      .section-info { display: inline; }

      /* Smartphone Portrait and Landscape */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 480px){
          .section-info { display: none;}
        }
    </style>
  </head>

  <script>generateStyle()</script>

  <body onload='loadSpecialPage("$i")'>

        <script>generateNavBar()</script>

        <div class='flex-container' style='margin:0px 12.5% 12.5% 12.5%; display:flex;flex-direction:column;'>
          <div class='flex-container' style='display:flex; flex: 0 1 auto; flex-direction: row;justify-content: space-between;align-content: flex-start;'>
              <div style='flex: 0 0 40%; width:100%;'>
                <span class='flex-container' style='display:flex; flex-direction: row; justify-content: space-between;'>
                  <span style='line-height:normal;'>
                      <h1 class='entry-name' id='entry-name' style='font-weight:bold;font-size:60px;vertical-align:top;'>Pokémon Name</h1>
                      <h3 class='species-name' id='species-name' style='font-weight:bold; font-size:20px;'>The Undefined Pokémon</h3>
                  </span>
                  <h6 class = 'section-info' style='font-size:18px;'><a id='researchLink' href=''>Research Notes</a></h6>
                </span>
          <div class='section-info-mobile'>
            <h6 class = 'section-info-mobile' style='font-size:18px; width:20%'><a id='researchLink-mobile' href=''>Research Notes</a></h6>
            <div class='flex-box' style='display:flex;flex-direction: column;justify-content:center;'>
              <span class='section-info-mobile' style='margin: 5% 5% 0% 0%'><img id='entryImage-mobile' width='300' height='300' style='border: 1px solid lightgray;'></span>
              <span class='section-info-mobile' style='align-self:center;margin: 5% 5% 0% 0%'><img id='sizeImage-mobile' width='123' height='100'></span>
            </div>
          </div>
          <hr class='hr' style='width:100%;'>
          <div class='flex-container' style='display:flex; flex-direction: row; justify-content: space-between;'>
              <div style='width:450px;line-height:normal;'>
              <h3 class='entry-stat' id='Num'>No</h3>
              <h3 class='entry-stat' id='Type'>Type</h3>
              <h3 class='entry-stat' id='Ht'>Ht</h3>
              <h3 class='entry-stat' id='Wt'>Wt</h3>
              <h3 class='entry-stat' id='Abilities'>Abilities</h3>
              <h3 class='entry-stat' id='Egg'>Egg Groups</h3>
            </div>
            <span class =section-info style='align-self:center;'><img id='sizeImage' width='123' height='100'></span>
         </div>
        </div>
      <span class=section-info><img id='entryImage' width='300' height='300' style='border: 1px solid lightgray;'></span>
      </div>
      <hr class='hr' style='width:100%;'>
      <span><h2 class='section-info-mobile' id='Habitat-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Habitat</h2></span>
      <div class='flex-container' style='display:flex; flex-direction: row;'>
      <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id='Habitat-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Habitat</h2></span>
      <span><p class='habitat-info' id='Habitat' style='font-size:18px;'>Habitat Info</p></span>
      </div>
      <span><h2 class='section-info-mobile' id='Overview-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Overview</h2></span>
      <div class='flex-container' style='display:flex; flex-direction: row;'>
      <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id='Overview-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Overview</h2></span>
      <span><p class='overview-info' id='Overview'>Overview Info</p></span>
      </div>
      <div>
      <hr class='hr' style='width:100%; margin:20px 0px 0px 0px;'>
      </div>
      <span><h2 class='section-info-mobile' id = 'Evolution-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Evolution</h2></span>
      <div class='flex-container' style='display:flex; flex-direction: row;'>
      <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id = 'Evolution-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Evolution</h2></span>
      <span><p class='evo-info' id='Evolution' style='font-size:18px;'>Evolution Info</p></span>
      </div>
      <div id='form-info' style='display:none'>
      <hr class='hr' style='width:100%;'>
      <div id='forms' class='flex-container' style='display:flex; flex-direction: row; flex-wrap:wrap; justify-content:center;'>
      </div>
      <div>
      <hr class='hr' style='width:100%;'>
      </div>
      </div>
      <div class='flex-container' style='display:flex; flex-direction: row;justify-content: space-between;'>
      <a id='prev' href=''><button class='w3-button w3-dark-grey'><span class='wsite-button' style='vertical-align:-2px;'>PREVIOUS</span></button></a>
      <a id='next' href=''><button class='w3-button w3-dark-grey'><span class='wsite-button' style='vertical-align:-2px;'>NEXT</button><span></a>
      </div>
      </div>
      </div>
      <script>generateFooter()</script>
</body>" > $FP"/Galarian/G_"${specialPkmnNum[$i]}".html";
done;

for i in {90..121}
  do
  echo "<!DOCTYPE html>
<html>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>

  <head>
    <script type='text/javascript' src='http://code.jquery.com/jquery-latest.js'></script>
    <script type='text/javascript' src='../../OverviewText.js'></script>

    <style type='text/css'>

      .section-info-mobile {display: none;}

      /* Smartphone Portrait and Landscape */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 480px){
          .section-info-mobile {display: inline;}
      }
    </style>
    <style type='text/css'>
      .section-info { display: inline; }

      /* Smartphone Portrait and Landscape */
      @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 480px){
          .section-info { display: none;}
        }
    </style>
  </head>

  <script>generateStyle()</script>

  <body onload='loadSpecialPage("$i")'>

        <script>generateNavBar()</script>

        <div class='flex-container' style='margin:0px 12.5% 12.5% 12.5%; display:flex;flex-direction:column;'>
          <div class='flex-container' style='display:flex; flex: 0 1 auto; flex-direction: row;justify-content: space-between;align-content: flex-start;'>
              <div style='flex: 0 0 40%; width:100%;'>
                <span class='flex-container' style='display:flex; flex-direction: row; justify-content: space-between;'>
                  <span style='line-height:normal;'>
                      <h1 class='entry-name' id='entry-name' style='font-weight:bold;font-size:60px;vertical-align:top;'>Pokémon Name</h1>
                      <h3 class='species-name' id='species-name' style='font-weight:bold; font-size:20px;'>The Undefined Pokémon</h3>
                  </span>
                  <h6 class = 'section-info' style='font-size:18px;'><a id='researchLink' href=''>Research Notes</a></h6>
                </span>
          <div class='section-info-mobile'>
            <h6 class = 'section-info-mobile' style='font-size:18px; width:20%'><a id='researchLink-mobile' href=''>Research Notes</a></h6>
            <div class='flex-box' style='display:flex;flex-direction: column;justify-content:center;'>
              <span class='section-info-mobile' style='margin: 5% 5% 0% 0%'><img id='entryImage-mobile' width='300' height='300' style='border: 1px solid lightgray;'></span>
              <span class='section-info-mobile' style='align-self:center;margin: 5% 5% 0% 0%'><img id='sizeImage-mobile' width='123' height='100'></span>
            </div>
          </div>
          <hr class='hr' style='width:100%;'>
          <div class='flex-container' style='display:flex; flex-direction: row; justify-content: space-between;'>
              <div style='width:450px;line-height:normal;'>
              <h3 class='entry-stat' id='Num'>No</h3>
              <h3 class='entry-stat' id='Type'>Type</h3>
              <h3 class='entry-stat' id='Ht'>Ht</h3>
              <h3 class='entry-stat' id='Wt'>Wt</h3>
              <h3 class='entry-stat' id='Abilities'>Abilities</h3>
              <h3 class='entry-stat' id='Egg'>Egg Groups</h3>
            </div>
            <span class =section-info style='align-self:center;'><img id='sizeImage' width='123' height='100'></span>
         </div>
        </div>
        <span class=section-info><img id='entryImage' width='300' height='300' style='border: 1px solid lightgray;'></span>
        </div>
        <hr class='hr' style='width:100%;'>
        <span><h2 class='section-info-mobile' id='Habitat-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Habitat</h2></span>
        <div class='flex-container' style='display:flex; flex-direction: row;'>
        <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id='Habitat-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Habitat</h2></span>
        <span><p class='habitat-info' id='Habitat' style='font-size:18px;'>Habitat Info</p></span>
        </div>
        <span><h2 class='section-info-mobile' id='Overview-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Overview</h2></span>
        <div class='flex-container' style='display:flex; flex-direction: row;'>
        <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id='Overview-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Overview</h2></span>
        <span><p class='overview-info' id='Overview'>Overview Info</p></span>
        </div>
        <div>
        <hr class='hr' style='width:100%; margin:20px 0px 0px 0px;'>
        </div>
        <span><h2 class='section-info-mobile' id = 'Evolution-header-mobile' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Evolution</h2></span>
        <div class='flex-container' style='display:flex; flex-direction: row;'>
        <span style='flex: 0 0 250px' class='section-info'><h2 class='section-info' id = 'Evolution-header' style='font-weight:100; font-size:25px; -webkit-font-smoothing: antialiased;'>Evolution</h2></span>
        <span><p class='evo-info' id='Evolution' style='font-size:18px;'>Evolution Info</p></span>
        </div>
        <div id='form-info' style='display:none'>
        <hr class='hr' style='width:100%;'>
        <div id='forms' class='flex-container' style='display:flex; flex-direction: row; flex-wrap:wrap; justify-content:center;'>
        </div>
        <div>
        <hr class='hr' style='width:100%;'>
        </div>
        </div>
        <div class='flex-container' style='display:flex; flex-direction: row;justify-content: space-between;'>
        <a id='prev' href=''><button class='w3-button w3-dark-grey'><span class='wsite-button' style='vertical-align:-2px;'>PREVIOUS</span></button></a>
        <a id='next' href=''><button class='w3-button w3-dark-grey'><span class='wsite-button' style='vertical-align:-2px;'>NEXT</button><span></a>
        </div>
        </div>
        </div>
        <script>generateFooter()</script>
</body>" > $FP"/Gigantamax/GM_"${specialPkmnNum[$i]}".html";
done;
