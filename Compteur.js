import { useState } from 'react';

function Compteur() {
  const [compte, setCompte] = useState(0);

  return (
    <div className="card" style={{
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
        🔢 Compteur
      </h2>
      <p style={{ 
        fontSize: '4rem', 
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '1.5rem 0'
      }}>
        {compte}
      </p>
      <div className="btn-group">
        <button 
          onClick={() => setCompte(compte - 1)}
          className="btn btn-danger btn-md"
          disabled={compte === 0}
        >
          − Décrémenter
        </button>
        <button 
          onClick={() => setCompte(0)}
          className="btn btn-secondary btn-md"
        >
          🔄 Reset
        </button>
        <button 
          onClick={() => setCompte(compte + 1)}
          className="btn btn-success btn-md btn-pulse"
        >
          + Incrémenter →
        </button>
      </div>
    </div>
  );
}

export default Compteur;