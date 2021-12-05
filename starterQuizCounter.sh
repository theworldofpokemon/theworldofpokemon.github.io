cat starterGenerator.js | sed -n "/\/\/[0-9]/p" | sed "s/\s*d.*;//" | sed "s/\/\///" | sed "s/[[:blank:]]*//" | sed "s/EAS\./0\./" | sed "s/RES\. /6\. /" | sed "s/CAR\./2\./" | sed "s/SCR\./3\./" | sed "s/HAR\./4\./"| sed "s/PRO\./5\./" | sed "s/MIS\./6\./" | sed "s/CUR\./7\./" | sed "s/ADA\./0\./" | sed "s/SUR\./1\./" | sed "s/INT\./2\./" | sed "s/CUN\./3\./" | sed "s/STR\./4\./" | sed "s/GRA\./5\./" | sed "s/RES\./1\./" | sed "s/REL\./7\./" | sed "s/LOY\./8\./" > quizCounts.js

echo "var quizCount =\""$(cat quizCounts.js)"\"" > quizCounts.js
