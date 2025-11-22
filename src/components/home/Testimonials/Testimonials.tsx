import React from 'react';

const testimonials = [
  {
    name: "Carlos Rodriguez",
    company: "Importadora Andina",
    text: "Desde que trabajamos con Bodeinter, nuestros tiempos de entrega han mejorado un 30%. Su equipo siempre responde.",
    role: "Gerente de Operaciones"
  },
  {
    name: "Sarah Miller",
    company: "Tech Solutions Global",
    text: "Excelente manejo de nuestra carga delicada. La tecnología de rastreo nos da mucha tranquilidad.",
    role: "Director Logístico"
  },
  {
    name: "Fernando Gómez",
    company: "AgroExport SAS",
    text: "El manejo de la cadena de frío para nuestros perecederos es impecable. Totalmente recomendados.",
    role: "CEO"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">Testimonios</span>
          <h2 className="text-4xl font-bold text-white mt-4">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-slate-300 text-lg italic mb-6 leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-cyan-400 text-sm">{item.company}</p>
                  <p className="text-slate-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

