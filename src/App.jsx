import React, { useState } from 'react';
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import LoginPage from './components/LoginPage';
    import QuoteWizard from './components/QuoteWizard';
    import AdminPanel from './components/AdminPanel';
    import HomePage from './components/HomePage';
    import SubscriberHome from './components/SubscriberHome';
    import ManagerHome from './components/ManagerHome';
    import AdminHome from './components/AdminHome';
    
    function App() {
      // Simulate user role for demonstration
      const [userRole, setUserRole] = useState('subscriber');
    
      return (
        <Router>
          <div className="container">
            <header className="header">
              <h1>QUICK</h1>
            </header>
            <nav className="nav">
              <Link to="/">Accueil</Link>
              {userRole === 'subscriber' && <Link to="/subscriber">Souscripteur</Link>}
              {userRole === 'manager' && <Link to="/manager">Gestionnaire</Link>}
              {userRole === 'admin' && <Link to="/admin">Administrateur</Link>}
              <Link to="/quote">Devis</Link>
              <Link to="/login">Connexion</Link>
            </nav>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/quote" element={<QuoteWizard />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/subscriber" element={<SubscriberHome />} />
                <Route path="/manager" element={<ManagerHome />} />
                <Route path="/admin" element={<AdminHome />} />
              </Routes>
            </main>
          </div>
        </Router>
      );
    }
    
    export default App;
