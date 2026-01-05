import React, { useEffect, useState, useRef } from 'react';
import PageHero from '../../components/ui/PageHero'; // New Unified Hero
import { Link } from 'react-router-dom';
import OptimizedImage from '../../components/ui/OptimizedImage';
import CtaSection from '../../components/ui/CtaSection';

// Simple CountUp Component
const CountUp: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16); // 60fps
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Parallax Hero */}
      <PageHero 
        title="Nuestra Historia"
        subtitle="Más de una década conectando sueños con destinos a través de soluciones logísticas de vanguardia."
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />
      
      {/* Main Intro Section */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          <div className="w-full lg:w-1/2 relative animate-slide-in-right">
            <div className="absolute top-[-20px] left-[-20px] w-32 h-32 border-t-4 border-l-4 border-cyan-500 hidden md:block"></div>
            <div className="overflow-hidden rounded-lg shadow-2xl h-[300px] md:h-[500px] group">
                <OptimizedImage 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                  alt="Bodeinter Team" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={800}
                />
            </div>
            <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 border-b-4 border-r-4 border-blue-900 hidden md:block z-0"></div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">Nuestra Esencia</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Más que logística, <br/>somos su aliado estratégico
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              En <strong>Bodeinter</strong>, transformamos la complejidad del comercio internacional en soluciones simples y efectivas. Somos una empresa colombiana con visión global, dedicada a conectar sus productos con el mundo.
            </p>
            
            <Link to="/contact" className="inline-block px-8 py-3 bg-slate-900 text-white font-bold text-sm uppercase tracking-wider hover:bg-cyan-600 transition-colors rounded-sm shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 duration-300">
              Trabajemos Juntos
            </Link>
          </div>
        </div>
      </div>

      {/* INTERACTIVE TIMELINE */}
      <div className="bg-slate-50 py-16 md:py-24 relative">
         {/* Decor */}
         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>

        <div className="container mx-auto px-6">
            <div className="text-center mb-12 md:mb-16">
                <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">Nuestro Recorrido</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">¡Tenemos una gran historia!</h2>
                <div className="flex justify-center items-center gap-2 mt-4">
                    <div className="h-px w-12 bg-slate-300"></div>
                    <span className="text-blue-900 text-2xl">»</span>
                    <div className="h-px w-12 bg-slate-300"></div>
                </div>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line - Adapted for Mobile (Left side) and Desktop (Center) */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200"></div>

                <div className="space-y-12">
                    {/* Item 1 */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative group pl-16 md:pl-0">
                        {/* Mobile Date: h-12 to match icon height, flex items-center to center text vertically */}
                        <div className="md:hidden mb-2 h-12 flex items-center">
                             <span className="text-2xl font-bold text-cyan-500">2012</span>
                        </div>
                        
                        <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-left md:text-right relative hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-slate-800">Nuestros Inicios</h3>
                            <p className="text-slate-600 mt-2 text-sm">
                                Es creada con el fin de brindar soluciones simples y efectivas, apoyándose en personal altamente capacitado.
                            </p>
                            {/* Arrow decoration */}
                            <div className="absolute top-1/2 -right-2 w-4 h-4 bg-white transform -translate-y-1/2 rotate-45 hidden md:block"></div>
                            <div className="absolute top-8 -left-2 w-4 h-4 bg-white transform rotate-45 md:hidden border-l border-b border-slate-100"></div>
                        </div>

                        {/* Icon/Dot - Top-0 on mobile aligns with the h-12 Date container */}
                        <div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto md:w-2/12 flex justify-center z-10">
                            <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center border-4 border-slate-50 font-bold shadow-lg relative transition-transform group-hover:scale-110">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                            </div>
                        </div>

                        <div className="md:w-5/12 pl-8 hidden md:block">
                            <span className="text-3xl font-bold text-cyan-500">2012</span>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between relative group pl-16 md:pl-0">
                         <div className="md:hidden mb-2 h-12 flex items-center">
                             <span className="text-2xl font-bold text-cyan-500">2016</span>
                        </div>

                        <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-left relative hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-slate-800">Expansión de Servicios</h3>
                            <p className="text-slate-600 mt-2 text-sm">
                                Ampliamos nuestro portafolio incluyendo servicios aduaneros y almacenamiento en Zona Franca.
                            </p>
                             <div className="absolute top-1/2 -left-2 w-4 h-4 bg-white transform -translate-y-1/2 rotate-45 hidden md:block"></div>
                             <div className="absolute top-8 -left-2 w-4 h-4 bg-white transform rotate-45 md:hidden border-l border-b border-slate-100"></div>
                        </div>

                        <div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto md:w-2/12 flex justify-center z-10">
                            <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center border-4 border-slate-50 font-bold shadow-lg relative transition-transform group-hover:scale-110">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>
                            </div>
                        </div>

                        <div className="md:w-5/12 pr-8 text-right hidden md:block">
                            <span className="text-3xl font-bold text-cyan-500">2016</span>
                        </div>
                    </div>

                     {/* Item 3 */}
                     <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative group pl-16 md:pl-0">
                         <div className="md:hidden mb-2 h-12 flex items-center">
                             <span className="text-2xl font-bold text-cyan-500">2020</span>
                        </div>

                        <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-left md:text-right relative hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-slate-800">Alianzas Globales</h3>
                            <p className="text-slate-600 mt-2 text-sm">
                                Consolidamos nuestra red de agentes en Asia y Europa, fortaleciendo nuestra presencia internacional.
                            </p>
                            <div className="absolute top-1/2 -right-2 w-4 h-4 bg-white transform -translate-y-1/2 rotate-45 hidden md:block"></div>
                            <div className="absolute top-8 -left-2 w-4 h-4 bg-white transform rotate-45 md:hidden border-l border-b border-slate-100"></div>
                        </div>

                        <div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto md:w-2/12 flex justify-center z-10">
                            <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center border-4 border-slate-50 font-bold shadow-lg relative transition-transform group-hover:scale-110">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                            </div>
                        </div>

                        <div className="md:w-5/12 pl-8 hidden md:block">
                            <span className="text-3xl font-bold text-cyan-500">2020</span>
                        </div>
                    </div>

                     {/* Item 4 */}
                     <div className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between relative group pl-16 md:pl-0">
                         <div className="md:hidden mb-2 h-12 flex items-center">
                             <span className="text-2xl font-bold text-cyan-500">2024</span>
                        </div>

                        <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-left relative hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-slate-800">Digitalización</h3>
                            <p className="text-slate-600 mt-2 text-sm">
                                Implementación de nuevas tecnologías para el rastreo y control de carga en tiempo real.
                            </p>
                             <div className="absolute top-1/2 -left-2 w-4 h-4 bg-white transform -translate-y-1/2 rotate-45 hidden md:block"></div>
                             <div className="absolute top-8 -left-2 w-4 h-4 bg-white transform rotate-45 md:hidden border-l border-b border-slate-100"></div>
                        </div>

                        <div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto md:w-2/12 flex justify-center z-10">
                            <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center border-4 border-slate-50 font-bold shadow-lg relative transition-transform group-hover:scale-110">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            </div>
                        </div>

                        <div className="md:w-5/12 pr-8 text-right hidden md:block">
                            <span className="text-3xl font-bold text-cyan-500">2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="relative py-20 md:py-32 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-slate-900/90"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center text-white">
            <div className="p-4 hover:scale-105 transition-transform duration-300 group">
              <span className="block text-4xl md:text-6xl font-bold text-cyan-400 mb-2 group-hover:text-white transition-colors">
                +<CountUp end={10} />
              </span>
              <span className="text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-widest">Años de Experiencia</span>
            </div>
            <div className="p-4 hover:scale-105 transition-transform duration-300 group">
              <span className="block text-4xl md:text-6xl font-bold text-cyan-400 mb-2 group-hover:text-white transition-colors">
                +<CountUp end={50} />
              </span>
              <span className="text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-widest">Países Cubiertos</span>
            </div>
            <div className="p-4 hover:scale-105 transition-transform duration-300 group">
              <span className="block text-4xl md:text-6xl font-bold text-cyan-400 mb-2 group-hover:text-white transition-colors">
                <CountUp end={5000} suffix="+" />
              </span>
              <span className="text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-widest">Envíos Exitosos</span>
            </div>
            <div className="p-4 hover:scale-105 transition-transform duration-300 group">
              <span className="block text-4xl md:text-6xl font-bold text-cyan-400 mb-2 group-hover:text-white transition-colors">24/7</span>
              <span className="text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-widest">Soporte Dedicado</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
             <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                    <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
                <rect width="100" height="100" fill="url(#grid)" />
            </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">ADN Corporativo</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">Nuestros Pilares</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-6 rounded-full"></div>
            <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Principios inquebrantables que construyen la base de nuestra excelencia operativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            {/* Misión Card */}
            <div className="group relative bg-white rounded-[2rem] p-10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden border border-slate-100">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-cyan-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                   <svg className="w-10 h-10 text-cyan-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-cyan-700 transition-colors">Misión</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Facilitar el intercambio comercial de nuestros clientes mediante soluciones logísticas integrales, seguras e innovadoras, superando siempre las expectativas de tiempo y calidad.
                </p>
              </div>
              
              <div className="absolute -bottom-10 -right-10 text-cyan-500 opacity-5 transform rotate-12 scale-150 group-hover:scale-[1.6] group-hover:rotate-6 transition-transform duration-700 pointer-events-none">
                 <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
            </div>

            {/* Visión Card */}
            <div className="group relative bg-white rounded-[2rem] p-10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden border border-slate-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-700 to-blue-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300 shadow-sm">
                   <svg className="w-10 h-10 text-blue-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-800 transition-colors">Visión</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Consolidarnos como el operador logístico referente en Colombia y la región Andina, reconocidos por nuestra excelencia tecnológica y calidez humana.
                </p>
              </div>

              <div className="absolute -bottom-10 -right-10 text-blue-900 opacity-5 transform rotate-12 scale-150 group-hover:scale-[1.6] group-hover:rotate-6 transition-transform duration-700 pointer-events-none">
                 <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-4">
             {['Integridad', 'Compromiso', 'Innovación', 'Trabajo en Equipo', 'Seguridad'].map((val, idx) => (
                 <span key={idx} className="px-6 py-2 bg-white rounded-full text-slate-600 shadow-sm border border-slate-200 text-sm font-semibold hover:border-cyan-400 hover:text-cyan-600 transition-colors cursor-default hover:shadow-md">
                    {val}
                 </span>
             ))}
          </div>

        </div>
      </div>

      <CtaSection />
    </div>
  );
};

export default About;