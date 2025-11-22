import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="about-hero-bg text-white pt-20">
      <div className="container mx-auto px-6 animate-fade-in">
        <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm block mb-4">Sobre Bodeinter</span>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestra Historia</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
          Más de 10 años conectando sueños con destinos a través de soluciones logísticas innovadoras y eficientes.
        </p>
      </div>
    </div>
  );
};

export default Hero;


