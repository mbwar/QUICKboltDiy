import React from 'react';
    
    function GuaranteeInfo({ formData, handleChange, handleToggle, handlePrev, handleNext }) {
      const formatNumber = (value) => {
        if (!value) return '';
        return Number(value).toLocaleString('fr-FR');
      };
    
      const guarantees = {
        damages: [
          {
            name: 'Dommages à l\'ouvrage',
            type: 'amount',
            optional: false,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Événements naturels + clause 72h',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Grèves Émeutes Mouvements Populaires',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Erreur de conception, partie viciée exclue',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Erreur de conception, y compris la partie viciée',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Dommages aux existants et aux biens adjacents',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Transport intérieur',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Plans & documents',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Vol avec effraction',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Équipements de lutte contre l\'incendie & mesures de protection contre l\'incendie',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Parties réceptionnées ou mises en service',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Sue & Labor',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Biens entreposés hors chantier',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Baraquements et dépôts',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Installations provisoires du chantier',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Installations, équipements et engins de chantiers',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Tests & Essais',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Maintenance visite',
            type: 'duration',
            optional: true,
            fields: ['duration', 'franchise'],
            durationOptions: ['1 mois', '2 mois', '3 mois', '4 mois'],
            defaultDuration: '1 mois',
          },
          {
            name: 'Maintenance étendue',
            type: 'duration',
            optional: true,
            fields: ['duration', 'franchise'],
            durationOptions: ['6 mois', '12 mois', '24 mois'],
            defaultDuration: '12 mois',
          },
          {
            name: 'Dérogation au planning',
            type: 'duration',
            optional: true,
            fields: ['duration', 'franchise'],
            durationOptions: ['1 semaine', '2 semaines', '3 semaines', '4 semaines'],
            defaultDuration: '4 semaines',
          },
          {
            name: 'Frais de déblais et démolition',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Frais de déblais suite à un glissement de terrain',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Frais supplémentaires pour travail de nuit et transport à grande vitesse',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Frais supplémentaires pour transport aérien',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
          {
            name: 'Honoraires d\'experts',
            type: 'amount',
            optional: true,
            fields: ['amount', 'franchise'],
          },
        ],
        rc: [
          {
            name: 'Responsabilité Civile pendant les travaux',
            type: 'duration',
            optional: true,
            fields: ['duration', 'franchise'],
          },
          {
            name: 'RC croisée',
            type: 'duration',
            optional: true,
            fields: ['duration', 'franchise'],
          },
          {
            name: 'Tuyaux, câbles et canalisations enterrées',
            type: 'duration',
            optional: true,
            fields: ['duration', 'franchise'],
          },
          {
            name: 'Vibrations, suppression ou affaiblissement des points d\'appui',
            type: 'duration',
            optional: true,
            fields: ['duration', 'franchise'],
          },
        ],
      };
    
      return (
        <div className="step">
          <h3>Informations sur les Garanties</h3>
          <div>
            <h4>Dommages</h4>
            {guarantees.damages.map((guarantee, index) => (
              <div key={`damages-${index}`} className="guarantee-item">
                <div>
                  {!guarantee.optional && <h4>{guarantee.name}</h4>}
                  {(formData.guarantees[`damages-${index}`]?.active || !guarantee.optional) && (
                    <div className="guarantee-fields">
                      {guarantee.fields.includes('amount') && (
                        <input
                          type="number"
                          placeholder="Montant"
                          className="amount-field"
                          value={formatNumber(formData.guarantees[`damages-${index}`]?.amount)}
                          onChange={(e) =>
                            handleChange(`damages-${index}`, 'amount', e.target.value)
                          }
                        />
                      )}
                      {guarantee.fields.includes('franchise') && (
                        <input
                          type="number"
                          placeholder="Franchise"
                          className="franchise-field"
                          value={formatNumber(formData.guarantees[`damages-${index}`]?.franchise)}
                          onChange={(e) =>
                            handleChange(`damages-${index}`, 'franchise', e.target.value)
                          }
                        />
                      )}
                      {guarantee.fields.includes('duration') && (
                        <select
                          defaultValue={guarantee.defaultDuration}
                          onChange={(e) =>
                            handleChange(`damages-${index}`, 'duration', e.target.value)
                          }
                        >
                          <option value="">Sélectionner la Durée</option>
                          {guarantee.durationOptions &&
                            guarantee.durationOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                        </select>
                      )}
                    </div>
                  )}
                </div>
                {guarantee.optional && (
                  <label>
                    <input
                      type="checkbox"
                      checked={formData.guarantees[`damages-${index}`]?.active || false}
                      onChange={(e) => {
                        handleToggle(`damages-${index}`, e.target.checked);
                      }}
                    />
                  </label>
                )}
              </div>
            ))}
          </div>
          <div>
            <h4>RC</h4>
            {guarantees.rc.map((guarantee, index) => (
              <div key={`rc-${index}`} className="guarantee-item">
                <div>
                  <label>
                    {guarantee.name}
                  </label>
                  {formData.guarantees[`rc-${index}`]?.active && (
                    <div className="guarantee-fields">
                      {guarantee.fields.includes('duration') && (
                        <select
                          defaultValue={guarantee.defaultDuration}
                          onChange={(e) =>
                            handleChange(`rc-${index}`, 'duration', e.target.value)
                          }
                        >
                          <option value="">Sélectionner la Durée</option>
                          {guarantee.durationOptions &&
                            guarantee.durationOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                        </select>
                      )}
                      {guarantee.fields.includes('franchise') && (
                        <input
                          type="number"
                          placeholder="Franchise"
                          className="franchise-field"
                          value={formatNumber(formData.guarantees[`rc-${index}`]?.franchise)}
                          onChange={(e) =>
                            handleChange(`rc-${index}`, 'franchise', e.target.value)
                          }
                        />
                      )}
                    </div>
                  )}
                </div>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.guarantees[`rc-${index}`]?.active || false}
                    onChange={(e) => {
                      handleToggle(`rc-${index}`, e.target.checked);
                    }}
                  />
                </label>
              </div>
            ))}
          </div>
          <button onClick={handlePrev}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </div>
      );
    }
    
    export default GuaranteeInfo;
