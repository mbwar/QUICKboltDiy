import React from 'react';
    
    function AdminPanel() {
      const users = [
        { id: 1, name: 'User 1', email: 'user1@example.com', role: 'Subscriber' },
        { id: 2, name: 'User 2', email: 'user2@example.com', role: 'Admin' },
      ];
    
      const guarantees = [
        { id: 1, name: 'Guarantee 1', type: 'Amount', amount: 1000 },
        { id: 2, name: 'Guarantee 2', type: 'Duration', duration: 12 },
      ];
    
      const clauses = [
        { id: 1, name: 'Clause 1', content: 'This is clause 1' },
        { id: 2, name: 'Clause 2', content: 'This is clause 2' },
      ];
    
      return (
        <div className="admin-panel">
          <h2>Panneau d'Administration</h2>
          <div>
            <h3>Utilisateurs</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Rôle</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button>Ajouter un Utilisateur</button>
          </div>
          <div>
            <h3>Garanties</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Type</th>
                  <th>Montant/Durée</th>
                </tr>
              </thead>
              <tbody>
                {guarantees.map((guarantee) => (
                  <tr key={guarantee.id}>
                    <td>{guarantee.id}</td>
                    <td>{guarantee.name}</td>
                    <td>{guarantee.type}</td>
                    <td>{guarantee.amount || guarantee.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button>Ajouter une Garantie</button>
          </div>
          <div>
            <h3>Clauses</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Contenu</th>
                </tr>
              </thead>
              <tbody>
                {clauses.map((clause) => (
                  <tr key={clause.id}>
                    <td>{clause.id}</td>
                    <td>{clause.name}</td>
                    <td>{clause.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button>Ajouter une Clause</button>
          </div>
        </div>
      );
    }
    
    export default AdminPanel;
