
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-bg text-white pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-white text-blue-900 rounded flex items-center justify-center font-bold text-xl">B</div>
                <h2 className="text-2xl font-bold text-white tracking-tight">BODE<span className="text-cyan-400">INTER</span></h2>
            </Link>
            <p className="text-slate-400 text-sm leading-loose">
              Soluciones logísticas integrales que conectan a Colombia con el mundo. Seguridad, eficiencia y tecnología en cada envío.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
                {/* Facebook */}
                <a href="https://www.facebook.com/bodeintersaszf" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 group">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/bodeintersas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all duration-300 group">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/bodeinter" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all duration-300 group">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
                {/* TikTok */}
                <a href="https://www.tiktok.com/@bodeinterc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.9 6.15-1.72 1.26-3.92 1.69-6.04 1.18-2.09-.51-3.93-2-4.93-3.91-1.06-2.02-.95-4.5.39-6.42 1.34-1.93 3.66-3.08 6.01-3.06v4.16c-1.09-.1-2.23.35-2.95 1.22-.72.87-.79 2.13-.2 3.08.58.93 1.74 1.45 2.82 1.27.99-.16 1.82-.91 2.08-1.88.18-.67.19-1.37.05-2.06v-14.06z"/></svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/3155261930" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 group">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-cyan-500 inline-block pb-2">Navegación</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/" onClick={scrollToTop} className="footer-link block hover:text-cyan-400 transition-colors">Inicio</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="footer-link block hover:text-cyan-400 transition-colors">Servicios</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="footer-link block hover:text-cyan-400 transition-colors">Nosotros</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="footer-link block hover:text-cyan-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Services Links - Updated to specific IDs for direct Modal Opening */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-cyan-500 inline-block pb-2">Servicios</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/services?id=1" onClick={scrollToTop} className="footer-link block hover:text-cyan-400 transition-colors">Carga Aérea</Link>
              </li>
              <li>
                <Link to="/services?id=2" onClick={scrollToTop} className="footer-link block hover:text-cyan-400 transition-colors">Carga FCL (Contenedor)</Link>
              </li>
              <li>
                <Link to="/services?id=3" onClick={scrollToTop} className="footer-link block hover:text-cyan-400 transition-colors">Carga LCL (Consolidada)</Link>
              </li>
              <li>
                <Link to="/services?id=4" onClick={scrollToTop} className="footer-link block hover:text-cyan-400 transition-colors">Almacenamiento</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b-2 border-cyan-500 inline-block pb-2">Oficinas</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3 group">
                <span className="text-cyan-500 group-hover:scale-110 transition-transform mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </span>
                <div>
                    <strong className="block text-white">Medellín:</strong>
                    <span>Zona Franca Zofiva Km 1 Variante Caldas - Antioquia</span>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="text-cyan-500 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                <span>comercial@bodeinter.com</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="text-cyan-500 group-hover:scale-110 transition-transform">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </span>
                <span>+57 315 526 1930</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Bodeinter S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" onClick={scrollToTop} className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/terms" onClick={scrollToTop} className="hover:text-white transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


