import React from 'react'; // Importerar React för att kunna skapa komponenter

const QuestionCard = ({ question, onAnswer }) => { // Skapar en funktionell komponent som tar emot en fråga och en funktion för att hantera svar
  const handleClick = (option) => { // Funktion som körs när användaren klickar på ett svarsalternativ
    const isCorrect = option === question.answer; // Jämför användarens valda svar med det korrekta svaret
    onAnswer(isCorrect); // Skickar resultatet (true/false) till onAnswer-funktionen
  };

  return (
    <div className="question-card">   {/* Container för enskild fråga */}
      <h2>{question.question}</h2>  {/* Visar frågetexten */}
      <div>
        {question.options.map((option, index) => ( // Loopar igenom alla svarsalternativ och skapar knappar för dem
          <button key={index} onClick={() => handleClick(option)}>  {/* Skapar en knapp för varje alternativ och kopplar till klickfunktionen */}
            {option}   {/* Visar svarsalternativets text på knappen */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard; // Exporterar QuestionCard-komponenten så att den kan användas i andra filer
