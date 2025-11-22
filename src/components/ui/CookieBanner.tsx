
import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after 2 seconds of first visit
    const timer = setTimeout(() => {
      const accepted = localStorage.getItem('bodeinter-cookies');
      if (!accepted) {
        setIsVisible(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bodeinter-cookies', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-slate-200 z-[60] animate-fade-in-up">
      <div className="flex items-start gap-4">
        <div className="text-2xl">🍪</div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm mb-1">Uso de Cookies</h4>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            Utilizamos cookies para mejorar su experiencia de navegación y analizar nuestro tráfico. Al continuar, acepta nuestra política de privacidad.
          </p>
          <div className="flex gap-3">
            <button 
              onClick={handleAccept}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded hover:bg-cyan-600 transition-colors"
            >
              Aceptar
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="px-4 py-2 text-slate-500 text-xs font-bold hover:text-slate-800 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

