import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT' | 'ERROR'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');

    // REEMPLAZA ESTOS VALORES CON LOS DE TU CUENTA DE EMAILJS
    // VARIABLES DE ENTORNO.
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setStatus('SENT');
        }, (error) => {
          console.log(error.text);
          setStatus('ERROR');
        });
    }
  };

  if (status === 'SENT') {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje Enviado!</h3>
        <p className="text-slate-600">Hemos recibido su solicitud. Un asesor se pondrá en contacto pronto.</p>
        <button onClick={() => setStatus('IDLE')} className="mt-6 text-cyan-600 font-bold hover:underline">Enviar otro mensaje</button>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      {status === 'ERROR' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">No se pudo enviar el mensaje. Por favor intente más tarde o escriba a comercial@bodeinter.com</span>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Nombre</label>
          {/* El atributo 'name' debe coincidir con las variables de tu template en EmailJS (ej: {{user_name}}) */}
          <input type="text" name="user_name" required className="form-input" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Apellido</label>
          <input type="text" name="user_surname" required className="form-input" placeholder="Tu apellido" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
        <input type="email" name="user_email" required className="form-input" placeholder="tucorreo@empresa.com" />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Mensaje</label>
        <textarea name="message" required rows={5} className="form-input resize-none" placeholder="¿Cómo podemos ayudarte? Detalle su carga, origen y destino."></textarea>
      </div>
      <button type="submit" disabled={status === 'SENDING'} className="submit-btn w-full disabled:opacity-70 disabled:cursor-not-allowed">
        {status === 'SENDING' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  );
};

export default Form;

