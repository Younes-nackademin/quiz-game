# Quiz Game

Ett enkelt quiz-spel byggt med React och Vite.

## Funktioner

- Dynamisk inladdning av frågor från en JSON-fil.
- Tidsbegränsning för varje fråga.
- Direkt återkoppling om rätt/fel svar.
- Poängräknare och sammanfattning.
- Responsiv design för olika enheter.
- Hosting via Netlify.

### Teknologier
 
Byggt med:

React (för komponentbaserad UI)
Vite (snabb utvecklingsserver)
Fetch API (för att hämta frågor från JSON-filen)
React Router (för navigering)
Netlify (för hosting)


#### Kör projektet lokalt

1. Klona detta repo: git clone <repo-url>
2. Navigera till projektmappen: cd quiz-game
3. Installera alla beroenden: npm install
4. Starta utvecklingsservern: npm run dev

Sidan öppnas nu automatiskt i webbläsaren.
   

  


Projektets mappstruktur och dess syfte




dist/ → Innehåller den färdigbyggda versionen av projektet som används för att publicera på Netlify.

För att ladda ner dist så går du till terminalen där du skriver npm run build och då kommer den att ladda ner dist mappen man behöver den här versionen för att man ska kunna lägga upp sitt projekt på Netlify som man kan göra det tillgängligt för alla att kunna köra quiz spelet.



node_modules/ → Innehåller alla installerade beroenden från npm (automatisk mapp, ska inte redigeras).

När du skriver npm install i terminalen så installeras alla nödvändiga paket som behövs och den vet vilka paket som ska hämtas utifrån vad som står i package.json


public/ → Innehåller statiska filer, questions.json med quiz-frågor.

I questions.json där skriver man sina quiz-frågor som ska vara med du börjar med huvudfrågan därefter har personen några alternativ där det finns en fråga som stämmer som är just Stockholm och de andra som inte överensstämmer med frågan.

  "question": "Vad är huvudstaden i Sverige?",
  "options": ["Göteborg", "Malmö", "Stockholm"],
  "answer": "Stockholm"




src/ → Huvudmappen där all React-kod finns.



components/ → Innehåller återanvändbara komponenter som frågor, poängräknare och timer.


<div>, <h2>, <button>    du ska skriva jsx istället för js eftersom om de innehåller dessa tecknet som visas i början, när sdu ska skriva bara js det är om det bara innehåller JavaScript-logik alltså inga tecken som det finns i jsx.

QuestionCard.jsx 


QuestionCard.jsx är en React-komponent som ansvarar för att visa en fråga och dess svarsalternativ i quizet.

Den tar emot en fråga (question) som prop.
Den visar frågetexten och listar svarsalternativ som knappar.
När användaren klickar på ett alternativ, kontrollerar den om svaret är rätt eller fel.
Den skickar sedan resultatet till en funktion (onAnswer) i QuizPage.jsx.
Syftet med QuestionCard.jsx är att hantera visningen av en fråga och dess svarsalternativ i quizet. 


Scoreboard.jsx


ScoreBoard.jsx är en React-komponent som ansvarar för att visa spelarens poäng under quizet.

Den tar emot score (antal rätt svar) och total (totalt antal frågor) som props.
Den visar spelarens aktuella poäng i förhållande till det totala antalet frågor.
Den används i QuizPage.jsx för att uppdatera och visa poängen under spelets gång.
Syftet med ScoreBoard.jsx är att ge användaren en översikt över hur många rätt de har fått under quizet. 


Timer.jsx


Timer.jsx är en React-komponent som hanterar nedräkningstiden för varje fråga i quizet.

Den tar emot initialTime (antal sekunder för varje fråga) och onTimeUp (en funktion som anropas när tiden är slut) som props.
Den använder useState för att lagra den aktuella tiden och useEffect för att starta nedräkningen när komponenten laddas.
När tiden når 0, anropas onTimeUp-funktionen för att byta till nästa fråga automatiskt.
Timern uppdateras varje sekund och visas för användaren.
Syftet med Timer.jsx är att ge en tidsbegränsning per fråga och automatiskt gå vidare om tiden tar slut. 






pages/ → Innehåller de olika sidorna (QuizPage och SummaryPage).


QuizPage.jsx

QuizPage.jsx är huvudkomponenten för quizet där spelet spelas.

Den laddar frågor dynamiskt från questions.json med fetch().
Den hanterar navigering mellan frågor och visar en fråga i taget.
Den innehåller poängräkning och uppdaterar spelarens poäng.
Den hanterar tidsbegränsning och visar nästa fråga om tiden tar slut.
Den visar feedback till spelaren om svaret var rätt eller fel.
När alla frågor är besvarade, navigerar den till SummaryPage.jsx där resultatet visas.
Syftet med QuizPage.jsx är att hantera quizets logik, navigering och användarinteraktion. 

SummaryPage.jsx

SummaryPage.jsx är komponenten som visar spelarens resultat efter att quizet är klart.

Den tar emot poängen (score) och det totala antalet frågor (total) via useLocation från React Router.
Den visar en sammanfattning av spelarens resultat, t.ex. "Du fick X av Y rätt!".
Den innehåller en "Spela igen"-knapp som låter användaren starta om quizet genom att navigera tillbaka till QuizPage.jsx.
Syftet med SummaryPage.jsx är att visa spelarens slutresultat och ge möjlighet att starta om quizet. 







App.jsx → Hanterar sidnavigering mellan quizet och sammanfattningen.


App.jsx är huvudkomponenten som hanterar sidnavigering i quizet med hjälp av React Router.

Den innehåller Routes som styr vilken sida som visas:
/ → QuizPage.jsx (visar quizet).
/summary → SummaryPage.jsx (visar resultatet).
Den fungerar som en "container" för hela applikationen och ser till att rätt komponent visas beroende på vilken sida användaren är på.
Syftet med App.jsx är att hantera sidnavigeringen och strukturera applikationen med hjälp av React Router. 


index.css → Styling för hela applikationen.


index.css är en stilfil som används för att styra utseendet på hela quiz-applikationen.

Globala stilar → Definierar grundläggande layout, bakgrund och typsnitt.
Quiz-layout → Centrerar quizrutan på skärmen och ger den en snygg design.
Knappar → Bestämmer färger, hover-effekter och form för knappar.
Feedback-meddelanden → Visar färgändringar beroende på om svaret var rätt eller fel.
Timer och poängtavla → Stilar för att visa tid och poäng tydligt.
Syftet med index.css är att göra quizet visuellt tilltalande och användarvänligt.



index.jsx → Startar React-applikationen och renderar App.jsx.

index.jsx är startpunkten för React-applikationen.

Kopplar React-appen till index.html.
Laddar in huvudkomponenten App.jsx.
Importerar index.css för styling.
Använder React.StrictMode för att upptäcka fel under utveckling.
Syftet med index.jsx är att starta och rendera React-applikationen i webbläsaren. 




main.jsx → Startar React-applikationen och renderar App.jsx.

main.jsx är huvudfilen som startar React-applikationen och renderar den i webbläsaren.

Renderar React-applikationen → Använder ReactDOM.createRoot() för att koppla React till index.html.
Laddar huvudkomponenten App.jsx → Innehåller hela quiz-applikationen.
Importerar index.css → Tillämpas för att styla hela appen.
Använder React.StrictMode → Hjälper till att identifiera fel under utveckling.
Syftet med main.jsx är att starta och koppla React-applikationen till DOM:en så att den visas i webbläsaren. 




index.html → Grundstrukturen för webbplatsen där React-applikationen renderas.

index.html är grundstrukturen för webbapplikationen.

Innehåller <div id="root"> där React-applikationen renderas.
Laddar main.jsx via en <script>-tagg för att starta React.
Definierar sidans titel, teckenuppsättning och responsivitet.
Syftet med index.html är att fungera som en behållare där React-applikationen visas. 







Övriga filer:




netlify.toml → Inställningar för att ladda upp på Netlify.

netlify.toml är en konfigurationsfil för Netlify som styr hur projektet byggs och hostas.

Definierar byggkommandot (npm run build).
Anger publiceringsmappen (dist/).
Hanterar routing för att säkerställa att React-appen fungerar som en SPA.
Syftet med netlify.toml är att konfigurera och optimera webbapplikationen för Netlify. 




package-lock.json → En automatisk fil som låser versionsnummer för alla installerade beroenden och säkerställer att projektet körs med exakt samma paketversioner på alla system.



När du skriver npm install i terminalen installeras alla nödvändiga paket som behövs. npm vet vilka paket som ska hämtas baserat på informationen i package.json.



package.json → Lista över beroenden och skript för att köra projektet.

för att installera package.json då öppnar du terminalen och skriver npm init -y 

Vad innehåller package.json?

Projektinformation → Namn, version och beskrivning av projektet.
Beroenden (dependencies) → Lista över paket som behövs för att köra applikationen.
Utvecklingsberoenden (devDependencies) → Paket som bara behövs vid utveckling.
Skript (scripts) → Kommandon som kan köras, t.ex. npm start och npm run build.
Konfigurationsinställningar → Anpassningar för verktyg som Babel, ESLint eller Netlify.


Varför behöver man package.json?

Hanterar alla paket och beroenden i projektet.
Gör det enkelt att installera alla nödvändiga paket med npm install.
Definierar skript för att starta, bygga och köra projektet.
Gör det lätt att dela projektet – andra kan installera allt med npm install.

Sammanfattning:
package.json är en konfigurationsfil som håller koll på beroenden, skript och inställningar för projektet. Den är nödvändig för att köra och hantera Node.js- och React-applikationer. 




README.md → Dokumentation av projektet.

vite.config.js → Konfiguration för Vite.

.gitignore → Ignorerar onödiga filer i Git, t.ex. node_modules/ och dist/.






Sammanfatning av hela projektet

Det här projektet är ett React-baserat quizspel som hämtar frågor från en JSON-fil, hanterar poäng, har en timer och ger användaren direkt återkoppling på svaren. Det är byggt med React, Vite, Fetch API och React Router och kan enkelt hostas på Netlify.



Länkar

Live-demo: [https://quizgame00.netlify.app/]
