import './App.css';
import Compteur from './Compteur';
import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import CompteurEffet from './CompteurEffet';
import Exercice1 from './Exercice1';
import Exercice2 from './Exercice2';
import Exercice3 from './Exercice3';

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <header className="app-header">
          <h1>
            ⚛️ TP React - Gestion d'état
          </h1>
          <p>
            useState, useEffect, formulaires contrôlés et interactions utilisateur
          </p>
        </header>

        <div className="components-grid">
          <Compteur />
          <MessageBouton />
          <FormulaireNom />
          <CompteurEffet />
          <Exercice1 />
          <Exercice2 />
          <div className="full-width">
            <Exercice3 />
          </div>
        </div>

        <footer className="app-footer">
          <p>TP 2 - Gestion de l'état local et interactions utilisateurs avec React</p>
        </footer>
      </div>
    </div>
  );
}

export default App;