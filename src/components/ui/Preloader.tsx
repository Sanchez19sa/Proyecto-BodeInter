import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 2 seconds
    const timer = setTimeout(() => {
      setExiting(true);
      // Notify App to remove preloader after animation finishes
      setTimeout(onComplete, 800); 
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-slate-900 flex items-center justify-center transition-transform duration-1000 ease-in-out ${
        exiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className={`text-center transition-opacity duration-500 ${exiting ? 'opacity-0' : 'opacity-100'}`}>
        {/* Animated Logo */}
        <div className="relative w-24 h-24 mx-auto mb-6">
           <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 animate-ping"></div>
           <div className="relative bg-white w-full h-full rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.4)] animate-pulse-logo">
              <span className="text-4xl font-black text-blue-900">B</span>
           </div>
        </div>
        
        {/* Text */}
        <h1 className="text-3xl font-bold text-white tracking-widest mb-2">
          BODE<span className="text-cyan-400">INTER</span>
        </h1>
        <div className="h-1 w-0 bg-cyan-500 mx-auto rounded-full animate-[width_2s_ease-out_forwards]" style={{width: '100px'}}></div>
        <p className="text-slate-400 text-xs uppercase tracking-[0.3em] mt-4">Logística Global</p>
      </div>
    </div>
  );
};

export default Preloader;

