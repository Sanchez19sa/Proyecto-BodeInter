
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PageHero from '../../components/ui/PageHero'; // Unified Hero
import OptimizedImage from '../../components/ui/OptimizedImage';
import CtaSection from '../../components/ui/CtaSection';

interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: React.ReactNode;
}

// Updated Images for Reliability
const servicesList: Service[] = [
  {
    id: '1',
    title: 'Carga Aérea',
    description: 'Rapidez garantizada para mercancías urgentes con certificación IATA.',
    longDescription: 'Nuestro servicio de Carga Aérea está diseñado para mercancías que requieren tiempos de tránsito mínimos. Contamos con alianzas estratégicas con las principales aerolíneas del mundo, permitiéndonos ofrecer espacios garantizados incluso en temporada alta. Manejamos carga general, perecedera y mercancías peligrosas con total cumplimiento de la normativa IATA.',
    image: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
  },
  {
    id: '2',
    title: 'Carga FCL',
    description: 'Contenedor completo (Full Container Load) para grandes volúmenes.',
    longDescription: 'La opción ideal para exportadores e importadores que mueven grandes volúmenes. El servicio FCL le otorga exclusividad en el uso del contenedor, garantizando mayor seguridad y menor riesgo de daños al no compartir espacio con otras cargas. Ofrecemos equipos Standard, High Cube, Refrigerados y Open Top desde cualquier puerto del mundo.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
  },
  {
    id: '3',
    title: 'Carga LCL',
    description: 'Carga consolidada (Less Container Load) para envíos parciales.',
    longDescription: 'Optimice sus costos pagando solo por el espacio que utiliza. Nuestro servicio de consolidación LCL le permite enviar mercancías de menor volumen compartiendo contenedor con otros clientes, manteniendo la regularidad y frecuencia de sus despachos sin esperar a llenar un contenedor completo. Gestionamos la desconsolidación en puerto de destino con agilidad.',
    image: 'https://images.unsplash.com/photo-1494412651409-ae5d988a47fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
  },
  {
    id: '4',
    title: 'Almacenamiento',
    description: 'Bodegaje seguro y control de inventarios en Zona Franca.',
    longDescription: 'Ofrecemos soluciones de almacenamiento estratégico en Zona Franca y depósitos aduaneros. Nuestro sistema de gestión de inventarios (WMS) le permite tener visibilidad en tiempo real de su stock. Realizamos servicios de valor agregado como etiquetado, reempaque, picking y packing, listos para la distribución nacional.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
  }
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const serviceId = searchParams.get('id');
    if (serviceId) {
      const service = servicesList.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service);
      }
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Parallax Hero */}
      <PageHero 
        title="Nuestros Servicios" 
        subtitle="Excelencia operativa en cada eslabón de su cadena de suministro."
        backgroundImage="https://images.unsplash.com/photo-1494412574643-35d324698425?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Portafolio de Servicios</h2>
            <p className="text-slate-500 mt-4 text-lg">Soluciones especializadas para cada necesidad logística.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {servicesList.map((service) => (
            <div 
                key={service.id} 
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100"
            >
              <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                      <OptimizedImage 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        width={500}
                      />
                      <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors"></div>
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                      <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                          {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <span className="text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                          Ver Más Detalles
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </span>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative animate-fade-in-up max-h-[90vh] overflow-y-auto custom-scrollbar">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-slate-200 transition-colors z-10"
                  >
                      <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                  </button>
                  
                  <div className="h-64 w-full relative">
                      <OptimizedImage 
                        src={selectedService.image} 
                        alt={selectedService.title} 
                        className="w-full h-full object-cover"
                        width={800}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                          <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                      </div>
                  </div>
                  
                  <div className="p-8">
                      <p className="text-slate-600 text-lg leading-relaxed mb-8">
                          {selectedService.longDescription}
                      </p>
                      
                      <div className="flex justify-end gap-4">
                          <button 
                            onClick={() => setSelectedService(null)}
                            className="px-6 py-3 text-slate-500 hover:text-slate-800 font-bold"
                          >
                              Cerrar
                          </button>
                          <Link 
                             to="/contact"
                             className="px-8 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors shadow-lg"
                          >
                              Solicitar Cotización
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      )}

      {/* MEGA CTA SECTION */}
      <CtaSection />
    </div>
  );
};

export default Services;


