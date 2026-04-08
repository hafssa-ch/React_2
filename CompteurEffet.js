
import { useState, useEffect } from 'react';

function CompteurEffet() {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    console.log(`📊 Le compteur est à ${compte}`);
    console.log(`🔄 useEffect exécuté - ${new Date().toLocaleTimeString()}`);
  }, [compte]);

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
        🎯 Compteur avec Effet
      </h2>
      <p style={{ 
        fontSize: '3rem', 
        fontWeight: 'bold',
        color: '#667eea',
        margin: '1rem 0'
      }}>
        {compte}
      </p>
      <p style={{ 
        background: '#edf2f7', 
        padding: '0.5rem', 
        borderRadius: '8px',
        fontSize: '0.875rem',
        color: '#4a5568',
        marginBottom: '1rem'
      }}>
        💡 Ouvrez la console pour voir les logs
      </p>
      <button
        onClick={() => setCompte(compte + 1)}
        className="btn btn-info btn-lg btn-3d"
      >
        Incrémenter avec effet ({compte})
      </button>
    </div>
  );
}

export default CompteurEffet;