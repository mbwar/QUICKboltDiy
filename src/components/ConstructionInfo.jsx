import React, { useState, useEffect } from 'react';
    import { add } from 'date-fns';
    
    function ConstructionInfo({ formData, handleChange, handlePrev, handleNext }) {
      const [endDate, setEndDate] = useState(formData.construction.endDate);
    
      useEffect(() => {
        if (formData.construction.startDate && formData.construction.duration) {
          const calculatedEndDate = calculateEndDate(formData.construction.startDate, formData.construction.duration);
          setEndDate(calculatedEndDate);
          handleChange({ target: { value: calculatedEndDate } }, 'construction', 'endDate');
        }
      }, [formData.construction.startDate, formData.construction.duration, handleChange]);
    
      const calculateEndDate = (startDate, duration) => {
        try {
          const startDateObj = new Date(startDate);
          const durationMonths = parseInt(duration.split(' ')[0], 10);
          const calculatedDate = add(startDateObj, { months: durationMonths });
          return calculatedDate.toISOString().split('T')[0];
        } catch (error) {
          return '';
        }
      };
    
      return (
        <div className="step">
          <h3>Informations du Chantier</h3>
          <input
            type="text"
            placeholder="Numéro de Marché"
            value={formData.construction.marketNumber}
            onChange={(e) => handleChange(e, 'construction', 'marketNumber')}
          />
          <input
            type="text"
            placeholder="Nature des Travaux (obligatoire)"
            value={formData.construction.nature}
            onChange={(e) => handleChange(e, 'construction', 'nature')}
            required
          />
          <input
            type="text"
            placeholder="Situation des Travaux (obligatoire)"
            value={formData.construction.location}
            onChange={(e) => handleChange(e, 'construction', 'location')}
            required
          />
          <input
            type="number"
            placeholder="Montant des Travaux (obligatoire)"
            value={formData.construction.amount}
            onChange={(e) => handleChange(e, 'construction', 'amount')}
            required
          />
          <select
            value={formData.construction.duration}
            onChange={(e) => handleChange(e, 'construction', 'duration')}
            required
          >
            <option value="">Sélectionner la Durée (obligatoire)</option>
            {Array.from({ length: 24 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={`${month} mois`}>{month} mois</option>
            ))}
            <option value="specific">Spécifique</option>
          </select>
          <input
            type="date"
            placeholder="Date de Début des Travaux (obligatoire)"
            value={formData.construction.startDate}
            onChange={(e) => handleChange(e, 'construction', 'startDate')}
            required
          />
          <input
            type="date"
            placeholder="Date de Fin des Travaux (calculée)"
            value={endDate}
            readOnly
          />
          <button onClick={handlePrev}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </div>
      );
    }
    
    export default ConstructionInfo;
