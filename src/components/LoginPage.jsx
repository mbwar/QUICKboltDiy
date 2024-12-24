import React, { useState } from 'react';
    
    function LoginPage() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Login submitted', username, password);
      };
    
      return (
        <div className="login-form">
          <h2>Connexion</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Se connecter</button>
          </form>
        </div>
      );
    }
    
    export default LoginPage;
