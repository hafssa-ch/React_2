import { useState } from 'react';

function FormulaireNom() {
  const [nom, setNom] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setNom(event.target.value);
    if (event.target.value.trim()) {
      setError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nom.trim()) {
      setError('Veuillez entrer un nom');
      return;
    }
    alert(`✨ Bonjour ${nom} ! ✨`);
    setNom('');
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
        📝 Formulaire
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            fontWeight: '600',
            color: '#4a5568'
          }}>
            Votre nom :
          </label>
          <input
            type="text"
            value={nom}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              border: error ? '2px solid #f56565' : '2px solid #e2e8f0',
              borderRadius: '10px',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}
            placeholder="Entrez votre nom"
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = error ? '#f56565' : '#e2e8f0'}
          />
          {error && (
            <p style={{ color: '#f56565', fontSize: '0.875rem', marginTop: '0.5rem' }}>
              ⚠️ {error}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-icon"
          style={{ width: '100%' }}
        >
          ✨ Soumettre →
        </button>
      </form>
    </div>
  );
}

export default FormulaireNom;