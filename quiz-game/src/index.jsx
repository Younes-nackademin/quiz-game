import React from 'react'; // Importerar React-biblioteket för att kunna använda React-komponenter
import ReactDOM from 'react-dom/client'; // Importerar ReactDOM för att rendera React-komponenter i DOM:en
import App from './App'; // Importerar huvudkomponenten "App" som innehåller hela applikationen
import './index.css'; // Importerar den globala CSS-filen för att styla applikationen

ReactDOM.createRoot(document.getElementById('root')).render( // Skapar en root (rotkomponent) där React kommer att renderas i HTML-dokumentet
 <React.StrictMode> 
    <App />               
  </React.StrictMode> 
);

// <React.StrictMode> Aktiverar Strict Mode för att hjälpa till att identifiera problem i React-komponenter
// <App /> Renderar huvudkomponenten "App" som startar applikationen

