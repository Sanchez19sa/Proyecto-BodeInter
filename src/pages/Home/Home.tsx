import React from 'react';
import Hero from '../../components/home/Hero/Hero';
import Discover from '../../components/home/Discover/Discover';
import CurrencyWidget from '../../components/CurrencyWidget/CurrencyWidget';
import Testimonials from '../../components/home/Testimonials/Testimonials';
import CtaSection from '../../components/ui/CtaSection';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <Discover />

      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="custom-shape-divider-top">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" fill="#f8fafc"></path>
            </svg>
        </div>

        {/* Background Decor - Dark Theme */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/30 skew-x-12 translate-x-20 z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs bg-white/5 px-3 py-1 rounded-full border border-white/10">Proceso Simplificado</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">¿Cómo movemos su carga?</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                    Optimizamos cada paso de la cadena logística para garantizar que su mercancía llegue segura y a tiempo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                 {/* Connecting Line (Desktop) */}
                 <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-slate-800 -z-10">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-900 to-transparent"></div>
                 </div>

                 {[
                     { 
                         step: "01", 
                         title: "Cotización", 
                         desc: "Analizamos la mejor ruta y tarifa.",
                         icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
                     },
                     { 
                         step: "02", 
                         title: "Recogida", 
                         desc: "Coordinación en origen (EXW/FOB).",
                         icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" 
                     },
                     { 
                         step: "03", 
                         title: "Transporte", 
                         desc: "Tránsito internacional seguro.",
                         icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" 
                     },
                     { 
                         step: "04", 
                         title: "Entrega", 
                         desc: "Aduana y entrega en bodega.",
                         icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                     }
                 ].map((item, idx) => (
                     <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:-translate-y-2 transition-all duration-300 group text-center hover:border-cyan-500 hover:bg-slate-800">
                         <div className="w-16 h-16 mx-auto bg-slate-900 rounded-full border border-slate-600 flex items-center justify-center mb-6 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all relative">
                             <span className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-600 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-slate-800">
                                {item.step}
                             </span>
                             <svg className="w-7 h-7 text-slate-300 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}/></svg>
                         </div>
                         <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                         <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                 ))}
            </div>
        </div>
      </section>
      <section className="relative py-40 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577993483575-712c24db9094?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-blue-900/80"></div>
        <div className="custom-shape-divider-top">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1133.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" fill="#0f172a"></path>
            </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                {/* Left: Text Content */}
                <div className="lg:w-1/2 text-white text-center lg:text-left">
                    <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-4 block">Herramientas Financieras</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Calcule sus Costos <br/><span className="text-cyan-400">En Tiempo Real</span></h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
                        Manténgase actualizado con la Tasa Representativa del Mercado (TRM) y evite sorpresas en su facturación de fletes internacionales.
                    </p>
                </div>

                {/* Right: The Widget */}
                <div className="lg:w-1/2 w-full flex justify-center">
                     <div className="transform hover:scale-105 transition-transform duration-500 w-full relative">
                        <div className="absolute -inset-4 bg-cyan-500/20 blur-xl rounded-full z-0"></div>
                        <div className="relative z-10">
                            <CurrencyWidget />
                        </div>
                     </div>
                </div>
            </div>
        </div>

        <div className="custom-shape-divider-bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1133.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" fill="#f8fafc"></path>
            </svg>
        </div>
      </section>

      {/* SECTION: Why Choose Us */}
      <section className="py-24 bg-slate-50 text-slate-900 overflow-hidden relative bg-dot-pattern">
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold">¿Por qué Bodeinter?</h2>
                <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border-t-4 border-cyan-500 hover:-translate-y-2 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Agilidad Operativa</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Respuestas rápidas y procesos optimizados para que su carga no se detenga.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border-t-4 border-blue-900 hover:-translate-y-2 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.955 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Seguridad Total</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Políticas estrictas de manejo y seguros de carga para proteger su inversión.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl border-t-4 border-cyan-500 hover:-translate-y-2 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Atención Humana</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Un ejecutivo de cuenta asignado que conoce su negocio y sus necesidades.</p>
                </div>
            </div>
         </div>
      </section>

      <Testimonials />

      <CtaSection />
    </div>
  );
};

export default Home;