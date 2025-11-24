import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'; 

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      <img 
        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
        alt="Logística Internacional Marítima"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="absolute inset-0 bg-slate-900/60 z-10"></div>

      <div className="container mx-auto px-6 relative z-20 pt-32 pb-32">
        <div className="flex flex-col items-center text-center">
            
            <div className="mb-6 animate-fade-in-up max-w-4xl">
                <div className="flex flex-col items-center justify-center gap-4 mb-2">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600/90 backdrop-blur rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] mb-4 animate-float">
                            <span className="text-white font-bold text-4xl md:text-5xl">B</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none drop-shadow-xl">
                            BODE<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">INTER</span>
                        </h1>
                </div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-light text-slate-200 mb-8 animate-fade-in-up delay-100 leading-tight max-w-3xl">
                Conectamos su negocio <br className="hidden md:block" /> 
                con <span className="text-white font-semibold border-b-4 border-cyan-500 pb-1">cualquier destino</span> del mundo.
            </h2>
            
            <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                Expertos en carga aérea, marítima y terrestre. Gestionamos toda su cadena de suministro con tecnología de punta y atención personalizada 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300 w-full md:w-auto">
                <Link to="/contact" className="relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-xl hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1 overflow-hidden group min-w-[200px]">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        COTIZAR AHORA
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
                
                <Link to="/services" className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition-all min-w-[200px]">
                    Nuestros Servicios
                </Link>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

