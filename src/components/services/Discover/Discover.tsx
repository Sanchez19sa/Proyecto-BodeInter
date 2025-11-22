
import React from 'react';
import { Link } from 'react-router-dom';
import './Discover.css';

const Discover: React.FC = () => {
  const features = [
    {
      title: "Carga Aérea",
      desc: "Soluciones Express para mercancías urgentes. Alianzas estratégicas con las principales aerolíneas de carga.",
      path: "/services?filter=aereo",
      // Detailed SVG Icon
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
           <path d="M32 60C47.464 60 60 47.464 60 32C60 16.536 47.464 4 32 4C16.536 4 4 16.536 4 32C4 47.464 16.536 60 32 60Z" strokeOpacity="0.2"/>
           <path d="M12 36L22 34L28 22L34 22L30 32L48 28L52 30L30 40L26 48L22 48L24 42L12 44L12 36Z" fill="currentColor" fillOpacity="0.2" strokeLinecap="round" strokeLinejoin="round"/>
           <path d="M42 14L46 18M18 50L14 54" strokeOpacity="0.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Carga Marítima",
      desc: "Transporte FCL y LCL eficiente. Conectamos los puertos más importantes con tarifas competitivas.",
      path: "/services?filter=maritimo",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 44C8 44 14 48 20 48C26 48 30 44 36 44C42 44 46 48 52 48C58 48 60 46 60 46" strokeLinecap="round"/>
          <path d="M14 54C14 54 18 56 22 56C26 56 32 54 36 54C40 54 46 56 50 56C54 56 56 54 56 54" strokeLinecap="round" strokeOpacity="0.5"/>
          <path d="M12 44V32L18 32L18 24L46 24L46 32L52 32V44" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="22" y="16" width="8" height="8" rx="1" fill="currentColor" fillOpacity="0.2"/>
          <rect x="34" y="16" width="8" height="8" rx="1" fill="currentColor" fillOpacity="0.2"/>
        </svg>
      )
    },
    {
      title: "Logística Terrestre",
      desc: "Flota moderna con monitoreo GPS 24/7. Entregas puerta a puerta y transporte multimodal.",
      path: "/services?filter=terrestre",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="8" y="24" width="36" height="24" rx="2" fill="currentColor" fillOpacity="0.1"/>
          <path d="M44 24H52L58 36V48H8V24" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="48" r="6" fill="white" stroke="currentColor"/>
          <circle cx="48" cy="48" r="6" fill="white" stroke="currentColor"/>
          <path d="M14 24V16H44V24" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M52 36H58" strokeOpacity="0.5"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative z-20 -mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="discover-card bg-white p-10 rounded-xl shadow-lg group overflow-hidden">
              
              <div className="flex justify-between items-start mb-8">
                  <div className="icon-box w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <div className="text-slate-100 text-7xl font-black font-sans absolute -right-4 top-4 opacity-50 group-hover:opacity-100 group-hover:text-slate-50 transition-all duration-500 pointer-events-none z-0">
                      0{idx + 1}
                  </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-sm group-hover:text-slate-700">
                    {item.desc}
                </p>
                
                <Link to={item.path} className="inline-flex items-center gap-2 text-cyan-600 font-bold uppercase tracking-wider text-xs group-hover:gap-4 transition-all border-b-2 border-transparent group-hover:border-cyan-500 pb-1">
                  Ver Detalles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;


