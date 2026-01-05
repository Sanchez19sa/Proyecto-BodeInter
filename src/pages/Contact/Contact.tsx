import React, { useState } from 'react';
import PageHero from '../../components/ui/PageHero'; // Unified Hero
import Form from '../../components/contact/Form/Form';
import Map from '../../components/contact/Map/Map';

const Contact: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Cómo puedo solicitar una cotización?",
      a: "Puede completar el formulario en esta página, escribirnos a nuestro correo comercial@bodeinter.com o contactarnos vía WhatsApp. Un asesor responderá en menos de 24 horas."
    },
    {
      q: "¿Qué documentos necesito para importar?",
      a: "Generalmente requiere Factura Comercial, Lista de Empaque y Documento de Transporte. Dependiendo del producto, pueden requerirse permisos especiales. Nosotros le asesoramos en todo el proceso."
    },
    {
      q: "¿Realizan transporte de mercancía peligrosa?",
      a: "Sí, contamos con personal certificado para el manejo de mercancías peligrosas (DGR) vía aérea y marítima, cumpliendo con todas las normativas internacionales."
    },
    {
      q: "¿Tienen cobertura puerta a puerta?",
      a: "Absolutamente. Ofrecemos servicios Door-to-Door (Puerta a Puerta) encargándonos desde la recogida en fábrica hasta la entrega final en sus bodegas."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Parallax Hero */}
      <PageHero 
        title="Contáctanos" 
        subtitle="Estamos listos para asesorarte en tu próximo proyecto logístico."
        backgroundImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      />
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 -mt-16 md:-mt-24 relative z-10">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row mb-16 md:mb-24 border border-white/50 relative">
           <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="lg:w-5/12 bg-slate-50/80 p-6 md:p-8 flex flex-col gap-8 border-b lg:border-b-0 lg:border-r border-slate-100">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white text-blue-900 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors border border-slate-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Visítanos</h4>
                    <p className="text-slate-600">Zona Franca Bogotá, Colombia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white text-blue-900 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors border border-slate-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Escríbenos</h4>
                    <p className="text-slate-600 break-all">comercial@bodeinter.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white text-blue-900 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-blue-900 group-hover:text-white transition-colors border border-slate-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">Llámanos</h4>
                    <p className="text-slate-600">+57 601 123 4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-grow w-full rounded-2xl overflow-hidden border-4 border-white shadow-md aspect-square md:aspect-auto md:min-h-[300px]">
               <Map />
            </div>
          </div>

          <div className="lg:w-7/12 p-6 md:p-12 bg-white/60 relative">
            <div className="mb-8 md:mb-10 relative z-10">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">Estamos para ayudarte</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">Envíenos un mensaje</h2>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Cuéntenos sobre sus necesidades logísticas. Nuestro equipo comercial analizará su requerimiento y le responderá a la brevedad.
              </p>
            </div>
            <Form />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto py-8 md:py-12">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Preguntas Frecuentes</h2>
            <p className="text-slate-500 mt-4 px-4">Respuestas a las dudas más comunes de nuestros clientes.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 group-hover:text-blue-900 transition-colors pr-4">{faq.q}</span>
                  <span className={`transform transition-transform duration-300 text-cyan-500 flex-shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-[500px] py-4 border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

