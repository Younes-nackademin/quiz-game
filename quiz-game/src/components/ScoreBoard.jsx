import React from 'react'; // Importerar React för att kunna skapa komponenter

const ScoreBoard = ({ score, total }) => ( // Skapar en funktionell komponent som tar emot spelarens poäng och totalt antal frågor
  <div className="scoreboard">   {/* Container för poängtavlan */}
    <h2>Din poäng</h2>     {/* Rubrik för poängen */}
    <p>
      {score} / {total}      {/* Visar spelarens poäng av det totala antalet frågor */}
    </p>
  </div>
);

export default ScoreBoard; // Exporterar ScoreBoard-komponenten så att den kan användas i andra filer
