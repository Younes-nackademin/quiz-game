import React from "react"; // Importerar React för att skapa komponenter
import { useNavigate, useLocation } from "react-router-dom"; // Importerar navigeringsfunktioner från react-router-dom

const SummaryPage = () => { // Skapar en funktionell komponent för resultatsidan
  const navigate = useNavigate(); // Skapar en funktion för att navigera mellan sidor
  const location = useLocation(); // Hämtar data skickad från QuizPage
  const { score, total } = location.state || { score: 0, total: 0 }; // Hämtar poäng och total antal frågor, standardvärde är 0 om ingen data finns

  return (
    <div className="summary-page"> {/* Container för sammanfattningssidan */}
      <h1>Sammanfattning</h1> {/* Sidrubrik */}
      <p>Du fick {score} av {total} rätt!</p> {/* Visar användarens resultat */}
      <button onClick={() => navigate("/")}>Spela igen</button> {/* Knapp för att starta om spelet */}
    </div>
  );
};

export default SummaryPage; // Exporterar komponenten så att den kan användas i andra filer
