import { useState, useEffect } from 'react';

function Exercice3() {
  const [clics, setClics] = useState(0);

  useEffect(() => {
    document.title = `${clics} clic${clics > 1 ? 's' : ''} - React App`;
    return () => {
      document.title = 'React App';
    };
  }, [clics]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
        📌 Compteur avec Titre Dynamique
      </h2>
      <p style={{ 
        fontSize: '5rem', 
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '1rem 0'
      }}>
        {clics}
      </p>
      <p style={{ 
        background: '#fef5e7', 
        padding: '0.5rem', 
        borderRadius: '8px',
        fontSize: '0.875rem',
        color: '#ed8936',
        marginBottom: '1.5rem'
      }}>
        🔔 Le titre de l'onglet change à chaque clic !
      </p>
      <div className="btn-group">
        <button 
          onClick={() => setClics(clics - 1)}
          className="btn btn-danger btn-md"
          disabled={clics === 0}
        >
          − Décrémenter
        </button>
        <button 
          onClick={() => setClics(0)}
          className="btn btn-warning btn-md"
        >
          🔄 Remettre à zéro
        </button>
        <button 
          onClick={() => setClics(clics + 1)}
          className="btn btn-success btn-md btn-glow"
        >
          + Incrémenter
        </button>
      </div>
    </div>
  );
}

export default Exercice3;