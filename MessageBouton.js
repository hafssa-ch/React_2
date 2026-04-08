import { useState } from 'react';

function MessageBouton() {
  const [message, setMessage] = useState('👆 Cliquez sur le bouton');
  const [clickCount, setClickCount] = useState(0);

  const messages = [
    '🎉 Vous avez cliqué sur le bouton !',
    '⚡ Encore un clic !',
    '🔥 Vous êtes rapide !',
    '💪 Continuez comme ça !',
    '🏆 Vous êtes un pro !',
    '✨ Magique n\'est-ce pas ?'
  ];

  const changerMessage = () => {
    const nextCount = (clickCount + 1) % messages.length;
    setClickCount(nextCount);
    setMessage(messages[nextCount]);
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
        💬 Message Interactif
      </h2>
      <div style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        padding: '1rem',
        borderRadius: '15px',
        margin: '1rem 0',
        transition: 'all 0.3s ease'
      }}>
        <p style={{ color: 'white', fontSize: '1.1rem', margin: 0 }}>
          {message}
        </p>
      </div>
      <button 
        onClick={changerMessage}
        className="btn btn-primary btn-lg btn-glow"
        style={{ marginTop: '1rem' }}
      >
        ✨ Cliquez ici ✨
      </button>
      <p style={{ marginTop: '1rem', color: '#718096', fontSize: '0.875rem' }}>
        Message {clickCount + 1}/{messages.length}
      </p>
    </div>
  );
}

export default MessageBouton;