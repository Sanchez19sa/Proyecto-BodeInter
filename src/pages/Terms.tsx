
import React from 'react';
import PageHero from '../components/ui/PageHero';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero 
        title="Términos y Condiciones"
        subtitle="Lineamientos legales para el uso de nuestros servicios."
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-slate-100">
          <div className="prose prose-lg text-slate-600 max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Acuerdo General</h3>
            <p className="mb-6">
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a los siguientes términos y condiciones de uso, que junto con nuestra política de privacidad rigen la relación de <strong>Bodeinter S.A.S.</strong> con usted en relación con este sitio web.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Propiedad Intelectual</h3>
            <p className="mb-6">
              Todo el contenido incluido en este sitio, como texto, gráficos, logotipos, iconos de botones, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, es propiedad de Bodeinter o de sus proveedores de contenido y está protegido por las leyes internacionales de derechos de autor.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Uso del Servicio</h3>
            <p className="mb-6">
              El usuario se compromete a utilizar el sitio web y los servicios de conformidad con la ley, el presente aviso legal, las buenas costumbres y el orden público. Del mismo modo, se obliga a no utilizar el sitio web o los servicios que se presten a través de él con fines o efectos ilícitos o contrarios al contenido del presente aviso legal.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Limitación de Responsabilidad</h3>
            <p className="mb-6">
              Bodeinter no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de nuestros servicios, incluyendo pero no limitado a daños por pérdida de beneficios, uso, datos u otros intangibles.
            </p>

             <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Modificaciones</h3>
            <p className="mb-6">
              Bodeinter se reserva el derecho de revisar estos términos de uso de su sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos Términos y Condiciones de Uso.
            </p>
            
            <p className="text-sm text-slate-400 mt-12 pt-6 border-t border-slate-200">
              Última actualización: Enero 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;


