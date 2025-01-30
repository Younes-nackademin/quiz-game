import React from 'react'; // Importerar React för att kunna använda React-komponenter
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importerar Router, Routes och Route för navigering
import QuizPage from './pages/QuizPage'; // Importerar QuizPage-komponenten
import SummaryPage from './pages/SummaryPage'; // Importerar SummaryPage-komponenten
import './index.css'; // Importerar CSS-filen för styling

const App = () => (      // Skapar huvudkomponenten App
  <Router>     {/* Router hanterar sidnavigering i React */}
    <div className="app">   {/* Huvudcontainer för applikationen */}
      <Routes>                   {/* Definierar alla rutter i applikationen */}
        <Route path="/" element={<QuizPage />} />              {/* Route till QuizPage (startsidans quiz) */}
        <Route path="/summary" element={<SummaryPage />} />        {/* Route till SummaryPage (resultatsidan) */}
      </Routes>
    </div>
  </Router>
);

export default App;   // Exporterar App-komponenten så att den kan användas i andra filer
