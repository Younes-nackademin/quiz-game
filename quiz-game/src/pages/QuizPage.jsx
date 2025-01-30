import React, { useState, useEffect } from 'react'; // Importerar React samt useState och useEffect hooks
import QuestionCard from '../components/QuestionCard'; // Importerar komponenten för att visa frågor
import ScoreBoard from '../components/ScoreBoard'; // Importerar komponenten för att visa poäng
import Timer from '../components/Timer'; // Importerar timer-komponenten
import { useNavigate } from 'react-router-dom'; // Importerar funktionen för navigering mellan sidor

const QuizPage = () => { // Skapar huvudkomponenten för quizet
  const [questions, setQuestions] = useState([]); // State för att lagra frågorna
  const [currentQuestion, setCurrentQuestion] = useState(0); // State för att hålla koll på nuvarande fråga
  const [score, setScore] = useState(0); // State för att lagra spelarens poäng
  const [feedback, setFeedback] = useState(null); // State för att visa feedback efter ett svar
  const [hasStarted, setHasStarted] = useState(false); // State för att hålla koll på om spelet har startat
  const navigate = useNavigate(); // Funktion för att navigera mellan sidor

  useEffect(() => { // Används för att ladda in frågorna när komponenten laddas
    fetch('/questions.json') // Hämtar frågorna från JSON-filen
      .then((response) => {
        if (!response.ok) { // Om HTTP-status inte är OK, kasta ett fel
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Konverterar svaret till JSON
      })
      .then((data) => setQuestions(data)) // Sparar frågorna i state
      .catch((error) => console.error('Error fetching questions:', error)); // Skriver ut eventuella fel i konsolen
  }, []);

  const handleStart = () => { 
    setHasStarted(true); // Startar spelet och döljer startskärmen
  };

  const handleAnswer = (isCorrect) => { 
    const updatedScore = isCorrect ? score + 1 : score; // Om svaret är rätt, öka poängen

    if (isCorrect) {
      setScore((prev) => prev + 1); // Uppdaterar state för spelarens poäng
      setFeedback('Rätt svar! 🎉'); // Visar feedback för rätt svar
    } else {
      setFeedback('Fel svar. 😞'); // Visar feedback för fel svar
    }

    setTimeout(() => { // Väntar 2 sekunder innan nästa fråga visas
      setFeedback(null); // Nollställer feedback
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1); // Går till nästa fråga
      } else {
        navigate('/summary', { state: { score: updatedScore, total: questions.length } }); // Går till resultatsidan
      }
    }, 2000);
  };

  const handleTimeUp = () => { 
    setFeedback('Tiden är slut! 😞'); // Visar meddelande när tiden är slut
    setTimeout(() => { // Väntar 2 sekunder innan nästa fråga visas
      setFeedback(null); // Nollställer feedback
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1); // Går till nästa fråga
      } else {
        navigate('/summary', { state: { score, total: questions.length } }); // Går till resultatsidan
      }
    }, 2000);
  };

  if (!hasStarted) { // Om spelet inte har startats, visa startskärmen
    return (
      <div className="start-screen">
        <h1>Välkommen till Quizet!</h1> {/* Titel för startskärmen */}
        <button onClick={handleStart} className="start-button"> {/* Knapp för att starta spelet */}
          Starta spelet
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-page"> {/* Huvudcontainer för quizet */}
      <ScoreBoard score={score} total={questions.length} /> {/* Visar poäng */}
      <Timer initialTime={10} onTimeUp={handleTimeUp} /> {/* Timer för frågan */}
      {feedback && <p className="feedback">{feedback}</p>} {/* Visar feedback för svar */}
      {questions.length > 0 && ( 
        <QuestionCard
          question={questions[currentQuestion]} // Skickar aktuell fråga till QuestionCard
          onAnswer={handleAnswer} // Hanterar användarens svar
        />
      )}
    </div>
  );
};

export default QuizPage; // Exporterar QuizPage-komponenten så att den kan användas i andra filer
