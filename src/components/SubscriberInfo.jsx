import React from 'react';
    
    function SubscriberInfo({ formData, handleChange, handleNext }) {
      return (
        <div className="step">
          <h3>Informations du Souscripteur</h3>
          <input
            type="text"
            placeholder="Souscripteur (obligatoire)"
            value={formData.subscriber.name}
            onChange={(e) => handleChange(e, 'subscriber', 'name')}
            required
          />
          <input
            type="text"
            placeholder="Adresse du Souscripteur"
            value={formData.subscriber.address}
            onChange={(e) => handleChange(e, 'subscriber', 'address')}
          />
          <button onClick={handleNext}>Suivant</button>
        </div>
      );
    }
    
    export default SubscriberInfo;
