
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 leading-none animate-pulse">
          404
        </h1>
        <h2 className="text-4xl font-bold text-white mb-6">Ruta no encontrada</h2>
        <p className="text-slate-400 text-lg max-w-md mx-auto mb-10">
          Parece que el contenedor que buscas se ha extraviado en el océano digital.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-cyan-400 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          Volver al Puerto (Inicio)
        </Link>
      </div>
    </div>
  );
};

export default NotFound;


