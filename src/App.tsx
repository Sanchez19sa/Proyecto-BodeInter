
import React, { useState, useEffect } from 'react';
import AppRouter from './router/AppRouter';
import './styles/globals.css';
import Preloader from './components/ui/Preloader';
import CookieBanner from './components/ui/CookieBanner';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app-root relative">
      {/* Premium Noise Texture Overlay */}
      <div className="bg-noise"></div>

      {/* Cinematic Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main App Content */}
      <AppRouter />
      
      {/* Compliance */}
      <CookieBanner />
    </div>
  );
};

export default App;


