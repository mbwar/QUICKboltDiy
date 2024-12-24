import React, { useState } from 'react';
    import SubscriberInfo from './SubscriberInfo';
    import ConstructionInfo from './ConstructionInfo';
    import GuaranteeInfo from './GuaranteeInfo';
    
    function QuoteWizard() {
      const [step, setStep] = useState(1);
      const [formData, setFormData] = useState({
        subscriber: { name: '', address: '' },
        construction: { marketNumber: '', nature: '', location: '', amount: '', duration: '', startDate: '', endDate: '' },
        guarantees: {},
      });
    
      const handleNext = () => {
        setStep(step + 1);
      };
    
      const handlePrev = () => {
        setStep(step - 1);
      };
    
      const handleChange = (e, section, field) => {
        setFormData({
          ...formData,
          [section]: {
            ...formData[section],
            [field]: e.target.value,
          },
        });
      };
    
      const handleGuaranteeChange = (e, index, field, value) => {
        setFormData({
          ...formData,
          guarantees: {
            ...formData.guarantees,
            [index]: {
              ...formData.guarantees[index],
              [field]: value,
            },
          },
        });
      };
    
      const handleGuaranteeToggle = (index, checked) => {
        setFormData({
          ...formData,
          guarantees: {
            ...formData.guarantees,
            [index]: {
              ...formData.guarantees[index],
              active: checked,
            },
          },
        });
      };
    
      const handleSubmit = () => {
        console.log('Form submitted', formData);
      };
    
      return (
        <div className="quote-wizard">
          <h2>Assistant Devis</h2>
          {step === 1 && (
            <SubscriberInfo
              formData={formData}
              handleChange={handleChange}
              handleNext={handleNext}
            />
          )}
          {step === 2 && (
            <ConstructionInfo
              formData={formData}
              handleChange={handleChange}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          )}
          {step === 3 && (
            <GuaranteeInfo
              formData={formData}
              handleChange={handleGuaranteeChange}
              handleToggle={handleGuaranteeToggle}
              handlePrev={handlePrev}
              handleNext={handleNext}
            />
          )}
          {step === 4 && (
            <div className="step">
              <h3>Résumé</h3>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
              <button onClick={handlePrev}>Précédent</button>
              <button onClick={handleSubmit}>Soumettre</button>
            </div>
          )}
        </div>
      );
    }
    
    export default QuoteWizard;
