# HLDesignProv

Jag stötte på "CORS" problem när jag skulle hämta json objekten från api:t och då den enda lösningen jag hittade på problemet var att sätta upp en proxy server så skapade jag en simple express proxy server som alla anrop till api:n går igenom. Därför så måste programmet startas som två olika servrar med node. 

## Starta proxy servern
Båda serverna är baserade på node och kräver därmed node.js för att startas. Servern startas sedan via command-line på följande sätt: 
- navigera till mappen "HLDesignProxy" 
- skriv in kommandot "npm install"
- skriv sedan "npm run start" 
- det borde nu stå att servern är öppen på port 3000

## Starta den faktiska servern
Processen för att starta denna server är egentligen identisk till den andra, viktigt att nämna dock är att ett nytt command-fönster måste öppnas (eller på annat sätt köras parallellt) så att båda servrar kan öppnas. Följ sedan följande steg: 
- navigera till mappen "HLDesign" 
- skriv in kommandot "npm install"
- skriv sedan "npm run start" 
- det borde nu stå att servern är öppen på port 1234

Nu är servern öppen och allt i sin ordning, nu är det bara att gå in på localhost:1234 i valfri webbläsare eller annan klient. 
