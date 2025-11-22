import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <div className="contact-hero-bg text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
        <p className="text-slate-400 text-lg">Estamos listos para asesorarte en tu próximo proyecto logístico.</p>
      </div>
    </div>
  );
};

export default Hero;


