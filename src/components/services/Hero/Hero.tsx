import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="services-hero-bg pt-20">
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-5xl font-bold text-white mb-4">Nuestros Servicios</h1>
        <p className="text-slate-300 text-xl max-w-3xl mx-auto">
          Excelencia operativa en cada eslabón de su cadena de suministro.
        </p>
      </div>
    </div>
  );
};

export default Hero;


