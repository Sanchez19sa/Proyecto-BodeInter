
import React from 'react';
import PageHero from '../components/ui/PageHero';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero 
        title="Política de Privacidad"
        subtitle="Comprometidos con la seguridad y protección de sus datos."
        backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-xl border border-slate-100">
          <div className="prose prose-lg text-slate-600 max-w-none">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Introducción</h3>
            <p className="mb-6">
              En <strong>Bodeinter S.A.S.</strong>, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informará sobre sus derechos de privacidad y cómo la ley lo protege.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Información que Recopilamos</h3>
            <p className="mb-6">
              Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted, que hemos agrupado de la siguiente manera:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Datos de Identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador similar.</li>
              <li><strong>Datos de Contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección de correo electrónico y números de teléfono.</li>
              <li><strong>Datos Técnicos:</strong> incluye dirección de protocolo de internet (IP), sus datos de inicio de sesión, tipo y versión del navegador, configuración de zona horaria y ubicación.</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Cómo Usamos su Información</h3>
            <p className="mb-6">
              Solo usaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, usaremos sus datos personales en las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Donde necesitemos realizar el contrato que estamos a punto de celebrar o que hemos celebrado con usted.</li>
              <li>Donde sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos fundamentales no anulen esos intereses.</li>
              <li>Donde necesitemos cumplir con una obligación legal o reglamentaria.</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Seguridad de los Datos</h3>
            <p className="mb-6">
              Hemos implementado medidas de seguridad adecuadas para evitar que sus datos personales se pierdan accidentalmente, se usen o accedan de manera no autorizada, se alteren o divulguen. Además, limitamos el acceso a sus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tengan una necesidad comercial de conocerlos.
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

export default PrivacyPolicy;


