import { useState } from 'react';

function Exercice1() {
  const [texte, setTexte] = useState('🌟 Premier clic');
  const [clicIndex, setClicIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  const messages = [
    { text: '🎯 Premier clic', color: '#667eea', emoji: '🎯' },
    { text: '⚡ Deuxième clic', color: '#48bb78', emoji: '⚡' },
    { text: '🔥 Troisième clic', color: '#ed8936', emoji: '🔥' },
    { text: '💪 Quatrième clic', color: '#f56565', emoji: '💪' },
    { text: '🏆 Cinquième clic !', color: '#9f7aea', emoji: '🏆' },
    { text: '🚀 Vous gérez !', color: '#38b2ac', emoji: '🚀' },
    { text: '⭐ Époustouflant !', color: '#ecc94b', emoji: '⭐' }
  ];

  const handleClick = () => {
    const nextIndex = (clicIndex + 1) % messages.length;
    setClicIndex(nextIndex);
    setTexte(messages[nextIndex].text);
    setAnimation(true);
    setTimeout(() => setAnimation(false), 300);
  };

  const handleReset = () => {
    setClicIndex(0);
    setTexte(messages[0].text);
    setAnimation(true);
    setTimeout(() => setAnimation(false), 300);
  };

  const progress = ((clicIndex + 1) / messages.length) * 100;

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      animation: 'fadeInUp 0.6s ease-out'
    }}>
      <h2 style={{ 
        fontSize: '1.8rem', 
        marginBottom: '1rem', 
        color: '#2d3748',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}>
        <span>🔄</span> Affichage Dynamique <span>✨</span>
      </h2>

      {/* Zone d'affichage du message avec animation */}
      <div style={{
        background: `linear-gradient(135deg, ${messages[clicIndex].color}20 0%, ${messages[clicIndex].color}40 100%)`,
        padding: '2rem',
        borderRadius: '15px',
        margin: '1.5rem 0',
        transition: 'all 0.3s ease',
        transform: animation ? 'scale(1.05)' : 'scale(1)',
        border: `2px solid ${messages[clicIndex].color}`
      }}>
        <p style={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          color: messages[clicIndex].color,
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px'
        }}>
          <span style={{ fontSize: '2.5rem' }}>{messages[clicIndex].emoji}</span>
          {texte}
          <span style={{ fontSize: '2.5rem' }}>{messages[clicIndex].emoji}</span>
        </p>
      </div>

      {/* Barre de progression */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
          color: '#718096',
          fontSize: '0.875rem'
        }}>
          <span>Progression</span>
          <span>{clicIndex + 1}/{messages.length}</span>
        </div>
        <div style={{
          background: '#e2e8f0',
          borderRadius: '10px',
          height: '10px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${messages[clicIndex].color}, ${messages[clicIndex].color}cc)`,
            transition: 'width 0.5s ease',
            borderRadius: '10px'
          }} />
        </div>
      </div>

      {/* Statistiques */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '1.5rem',
        padding: '1rem',
        background: '#f7fafc',
        borderRadius: '15px'
      }}>
        <div>
          <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
            Nombre de clics
          </p>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
            {clicIndex + 1}
          </p>
        </div>
        <div>
          <p style={{ color: '#718096', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
            Messages restants
          </p>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#48bb78' }}>
            {messages.length - (clicIndex + 1)}
          </p>
        </div>
      </div>

      {/* Boutons */}
      <div className="btn-group" style={{ gap: '15px' }}>
        <button 
          onClick={handleReset}
          className="btn btn-secondary btn-md"
          style={{ flex: 1 }}
        >
          🔄 Recommencer
        </button>
        <button 
          onClick={handleClick}
          className="btn btn-primary btn-md btn-glow"
          style={{ flex: 2 }}
        >
          {clicIndex === messages.length - 1 ? '🏆 Encore !' : '✨ Changer le message →'}
        </button>
      </div>

      {/* Message de félicitations */}
      {clicIndex === messages.length - 1 && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem',
          background: 'linear-gradient(135deg, #fef5e7 0%, #fff5f5 100%)',
          borderRadius: '10px',
          animation: 'bounce 1s ease'
        }}>
          <p style={{ color: '#ed8936', margin: 0, fontSize: '0.875rem' }}>
            🎉 Félicitations ! Vous avez parcouru tous les messages ! 🎉
          </p>
        </div>
      )}
    </div>
  );
}

export default Exercice1;