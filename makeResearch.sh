#!/bin/bash
FP="./researchPages";
mainLoop=(1 4 7 10 13 16 19 21 23 27 29 32 37 41 43 46 48 50 52 54 56 58 60 63 66 69 72 74 77 79 81 83 84 86 88 90 92 95 96 98 100 102 104 108 109 111 114 115 116 118 120 123 127 128 129 131 132 133 137 138 140 142 147 152 155 158 161 163 165 167 170 172 173 174 175 177 179 187 190 191 193 194 198 200 201 203 204 206 207 209 211 213 214 215 216 218 220 222 223 225 227 228 231 234 235 236 238 239 240 241 246 252 255 258 261 263 265 270 273 276 278 280 283 285 287 290 293 296 298 299 300 302 303 304 307 309 311 312 313 314 316 318 320 322 324 325 327 328 331 333 335 336 337 338 339 341 343 345 347 349 351 352 353 355 357 359 360 361 363 366 369 370 371 374 387 390 393 396 399 401 403 406 408 410 412 415 417 418 420 422 425 427 431 433 434 436 438 439 440 441 442 443 446 447 449 451 453 455 456 458 459 479 489 495 498 501 504 506 509 511 513 515 517 519 522 524 527 529 531 532 535 538 539 540 543 546 548 550 551 554 556 557 559 561 562 564 566 568 570 572 574 577 580 582 585 587 588 590 592 594 595 597 599 602 605 607 610 613 615 616 618 619 621 622 624 626 627 629 631 632 633 636 650 653 656 659 661 664 667 669 672 674 676 677 679 682 684 686 688 690 692 694 696 698 701 702 703 704 707 708 710 712 714 722 725 728 731 734 736 739 741 742 744 746 747 749 751 753 755 757 759 761 764 765 766 767 769 771 772 774 775 776 777 778 779 780 781 782 810 813 816 819 821 824 827 829 831 833 835 837 840 843 845 846 848 850 852 854 856 859 868 870 871 872 874 875 876 877 878 880 881 882 883 884 885);

for i in "${mainLoop[@]}"
  do
  echo "<!DOCTYPE html>
<html>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>

  <head>
    <script type='text/javascript' src='https://code.jquery.com/jquery-latest.js'></script>
    <script type='text/javascript' src='../OverviewText.js'></script>

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

  <body onload='loadResearchPage("$i")'>

        <script>generateNavBar()</script>

    <div class='flex-container' style='margin:0px 12% 12% 12%;display:flex;flex-direction:column;'>
      <h1 class='entry-name' id='entry-name' style='margin:5px 0px 0px 0px;'>Pokémon Name</h1>
      <hr class='hr' style='width:100%; margin:10px 0px 20px 0px'></hr>
      <h3 class='scientific-name' id='scientific-name' style='font-size:20px; color:#565656; margin:0px 0px 3px 0px;'>The Undefined Pokémon</h3>

      <div class='flex-container' style='display:flex; flex-direction: row;'>
        <span><p class='etymology-info' id='Etymology' style='font-size:14px; margin:0px 0px 0px 0px;'>Etymology</p></span>
      </div>
      <div class='flex-container' style='display:flex; flex-direction: row;'>
        <span><p class='research-info' id='Research'>Research Info</p></span>
      </div>
      <div>
        <hr class='hr' style='width:100%;'></hr>
      </div>
      <span><h2 class='section-info-mobile' id='Diet-header-mobile'>Diet</h2></span>
      <div class='flex-container' style='display:flex; flex-direction: row;'>
        <span class='section-info' style='flex: 0 0 150px'><h2 class='section-info' id='Diet-header'>Diet</h2></span>
        <span><p class='diet-info' id='Diet'>Diet Info</p></span>
      </div>
      <span><h2 class='section-info-mobile' id='Care-header-mobile'>Care</h2></span>
      <div class='flex-container' style='display:flex; flex-direction: row;'>
        <span class='section-info' style='flex: 0 0 150px'><h2 class='section-info' id='Care-header'>Care</h2></span>
        <span><p class='care-info' id='Care'>Care Info</p></span>
      </div>
      <span><h2 class='section-info-mobile' id='Caution-header-mobile'>Caution</h2></span>
      <div class='flex-container' style='display:flex; flex-direction: row;'>
        <span class='section-info' style='flex: 0 0 150px'><h2 class='section-info' id='Caution-header'>Caution</h2></span>
        <span><p class='caution-info' id='Caution'>Caution Info</p></span>
      </div>
      <span><h2 class='section-info-mobile' id='Behavior-header-mobile'>Behavior</h2></span>
      <div class='flex-container' style='display:flex; flex-direction: row;'>
        <span class='section-info' style='flex: 0 0 150px'><h2 class='section-info' id='Behavior-header'>Behavior</h2></span>
        <span><p class='behavior-info' id='Behavior'>Behavior Info</p></span>
      </div>
    </div>
  <script>generateFooter()</script>
  </body>

</html>" > $FP"/"$i"_research.html";
done;
