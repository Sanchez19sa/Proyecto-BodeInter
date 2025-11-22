
import React from 'react';
import { Link } from 'react-router-dom';
import './CtaSection.css';

const CtaSection: React.FC = () => {
  return (
    <section 
      className="cta-section py-24 relative overflow-hidden"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
    >
      <div className="cta-overlay absolute inset-0"></div>
      
      {/* Decorative lights */}
      <div className="cta-decoration-circle w-96 h-96 top-0 right-0 translate-x-1/3 -translate-y-1/3"></div>
      <div className="cta-decoration-circle w-64 h-64 bottom-0 left-0 -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-2/3">
            <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-2 block animate-pulse">
              Estamos listos para ayudarle
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Llevamos su negocio <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">al siguiente nivel</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
              No deje que la logística sea un obstáculo. Con Bodeinter, sus envíos están en manos de expertos comprometidos con la excelencia.
            </p>
          </div>
          
          <div className="md:w-1/3 flex flex-col gap-4 w-full">
            <Link 
              to="/contact" 
              className="btn-shiny w-full py-5 bg-cyan-500 text-white font-bold text-center rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 transform transition-all text-lg uppercase tracking-wider"
            >
              Solicitar Cotización
            </Link>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              <span>Respuesta en menos de 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

