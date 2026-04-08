import { useState } from 'react';

function Exercice2() {
  const [formData, setFormData] = useState({
    prenom: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (field, value) => {
    switch (field) {
      case 'prenom':
        if (!value.trim()) return 'Le prénom est requis';
        if (value.length < 2) return 'Le prénom doit contenir au moins 2 caractères';
        if (value.length > 50) return 'Le prénom est trop long';
        if (!/^[a-zA-ZÀ-ÿ\s-]+$/.test(value)) return 'Le prénom ne peut contenir que des lettres';
        return '';
      case 'email':
        if (!value.trim()) return 'L\'email est requis';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email invalide (ex: nom@domaine.com)';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    const error = validate(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validate(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Valider tous les champs
    const newErrors = {
      prenom: validate('prenom', formData.prenom),
      email: validate('email', formData.email)
    };
    setErrors(newErrors);
    setTouched({ prenom: true, email: true });

    // Vérifier s'il n'y a pas d'erreurs
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (!hasErrors) {
      setIsSubmitting(true);
      
      // Simuler l'envoi au serveur
      setTimeout(() => {
        alert(`✨ Inscription réussie ! ✨\n\n📝 Prénom : ${formData.prenom}\n📧 Email : ${formData.email}\n\nBienvenue dans notre communauté ! 🎉`);
        
        // Réinitialiser le formulaire
        setFormData({ prenom: '', email: '' });
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const isFormValid = () => {
    return formData.prenom.trim() !== '' && 
           formData.email.trim() !== '' && 
           !errors.prenom && 
           !errors.email;
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      animation: 'fadeInUp 0.6s ease-out'
    }}>
      <h2 style={{ 
        fontSize: '1.8rem', 
        marginBottom: '0.5rem', 
        color: '#2d3748',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span>📋</span> Inscription
      </h2>
      <p style={{ color: '#718096', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
        Créez votre compte en quelques secondes
      </p>

      <form onSubmit={handleSubmit}>
        {/* Champ Prénom */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            fontWeight: '600',
            color: '#4a5568'
          }}>
            Prénom <span style={{ color: '#f56565' }}>*</span>
          </label>
          <input
            type="text"
            value={formData.prenom}
            onChange={(e) => handleChange('prenom', e.target.value)}
            onBlur={() => handleBlur('prenom')}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: touched.prenom && errors.prenom 
                ? '2px solid #f56565' 
                : touched.prenom && !errors.prenom && formData.prenom
                ? '2px solid #48bb78'
                : '2px solid #e2e8f0',
              borderRadius: '10px',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
            placeholder="Votre prénom"
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => {
              handleBlur('prenom');
              e.target.style.borderColor = touched.prenom && errors.prenom 
                ? '#f56565' 
                : touched.prenom && !errors.prenom && formData.prenom
                ? '#48bb78'
                : '#e2e8f0';
            }}
          />
          {touched.prenom && errors.prenom && (
            <p style={{ color: '#f56565', fontSize: '0.875rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span>⚠️</span> {errors.prenom}
            </p>
          )}
          {touched.prenom && !errors.prenom && formData.prenom && (
            <p style={{ color: '#48bb78', fontSize: '0.875rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span>✓</span> Prénom valide
            </p>
          )}
        </div>

        {/* Champ Email */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            fontWeight: '600',
            color: '#4a5568'
          }}>
            Email <span style={{ color: '#f56565' }}>*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: touched.email && errors.email 
                ? '2px solid #f56565' 
                : touched.email && !errors.email && formData.email
                ? '2px solid #48bb78'
                : '2px solid #e2e8f0',
              borderRadius: '10px',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              outline: 'none'
            }}
            placeholder="exemple@email.com"
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => {
              handleBlur('email');
              e.target.style.borderColor = touched.email && errors.email 
                ? '#f56565' 
                : touched.email && !errors.email && formData.email
                ? '#48bb78'
                : '#e2e8f0';
            }}
          />
          {touched.email && errors.email && (
            <p style={{ color: '#f56565', fontSize: '0.875rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span>⚠️</span> {errors.email}
            </p>
          )}
          {touched.email && !errors.email && formData.email && (
            <p style={{ color: '#48bb78', fontSize: '0.875rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span>✓</span> Email valide
            </p>
          )}
        </div>

        {/* Indication des champs requis */}
        <p style={{ 
          fontSize: '0.75rem', 
          color: '#a0aec0', 
          marginBottom: '1rem',
          textAlign: 'right'
        }}>
          * Champs obligatoires
        </p>

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-icon"
          disabled={!isFormValid() || isSubmitting}
          style={{ 
            width: '100%',
            position: 'relative',
            opacity: isFormValid() && !isSubmitting ? 1 : 0.6
          }}
        >
          {isSubmitting ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <span className="spinner"></span>
              Inscription en cours...
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              ✨ S'inscrire →
            </span>
          )}
        </button>

        {/* Message d'information */}
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem',
          background: '#ebf8ff',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#3182ce', fontSize: '0.75rem', margin: 0 }}>
            🔒 Vos informations sont sécurisées
          </p>
        </div>
      </form>

      {/* Styles pour le spinner */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.6s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Exercice2;