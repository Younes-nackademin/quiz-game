import React from 'react'; // Importerar React för att kunna skapa komponenter
import ReactDOM from 'react-dom/client'; // Importerar ReactDOM för att rendera React-komponenter i DOM:en
import App from './App'; // Importerar huvudkomponenten "App" som innehåller hela applikationen
import './index.css'; // Importerar den globala CSS-filen för styling

ReactDOM.createRoot(document.getElementById('root')).render( // Hittar HTML-elementet med id "root" och skapar en React-root
  <React.StrictMode>     
    <App />      
  </React.StrictMode>
);

//   <React.StrictMode>    // Aktiverar Strict Mode för att hjälpa till att upptäcka potentiella problem i koden }
// <App />     // Renderar huvudkomponenten "App" som startar hela applikationen