import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle Scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Body Scroll Lock when Menu is Open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Function to handle navigation clicks: Scroll to top and close mobile menu
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Determine styles based on state
  // If Menu is open OR Scrolled: Dark Text/Icon. Otherwise: White.
  const isDarkUI = isScrolled || isMobileMenuOpen;
  
  const textColorClass = isDarkUI ? 'text-slate-900' : 'text-white';
  const logoTextAccentClass = isDarkUI ? 'text-cyan-600' : 'text-cyan-400 font-light';
  const iconFilterClass = isDarkUI ? 'brightness-0 invert-0' : 'brightness-0 invert';
  const burgerColorClass = isDarkUI ? 'text-blue-900' : 'text-white bg-black/10 backdrop-blur-sm';

  return (
    <header 
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'navbar-glass py-3' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION - High Z-Index to stay above mobile menu overlay */}
        <div className="relative z-[110]">
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-4 group">
            {/* Icon Container */}
            <div className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300 ${isScrolled ? 'scale-100' : 'scale-110'}`}>
              <img 
                  src="https://cdn-icons-png.flaticon.com/512/726/726455.png" 
                  alt="Logistics Icon" 
                  className={`w-full h-full object-contain transition-all duration-300 ${iconFilterClass}`}
              />
            </div>
            
            {/* Divider */}
            <div className={`h-6 md:h-8 w-px transition-colors duration-300 ${isDarkUI ? 'bg-slate-300' : 'bg-white/30'}`}></div>

            {/* Brand Text */}
            <div className="flex flex-col justify-center">
              <span className={`font-bold text-xl md:text-2xl tracking-tight leading-none transition-colors duration-300 ${textColorClass}`}>
                BODE<span className={logoTextAccentClass}>INTER</span>
              </span>
            </div>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleNavClick} 
              className={`nav-link text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                isActive(link.path) 
                  ? 'text-cyan-500 active' 
                  : (isScrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-white/90 hover:text-white')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={handleNavClick} 
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-md ${
              isScrolled 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-white text-blue-900 hover:bg-cyan-50'
            }`}
          >
            Cotizar
          </Link>
        </nav>

        {/* MOBILE TOGGLE BUTTON - High Z-Index */}
        <button 
          className={`md:hidden focus:outline-none p-2 rounded-md transition-colors relative z-[110] ${burgerColorClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
             </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY 
          - z-[105]: Lower than Logo/Button (z-[110])
          - h-[100dvh]: Use dynamic viewport height for mobile browsers
          - justify-start pt-32: Ensures items start BELOW the logo area (Fix for overlap)
      */}
      <div 
        className={`fixed inset-0 h-[100dvh] bg-white z-[105] flex flex-col items-center justify-start pt-32 pb-10 transition-all duration-300 ease-in-out md:hidden overflow-y-auto ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
          {/* Menu Items Container - Removed justify-center to prevent vertical centering overlap */}
          <div className="w-full flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleNavClick}
                className={`text-3xl font-bold transform transition-all duration-300 ${
                  isActive(link.path) ? 'text-cyan-600 scale-110' : 'text-slate-800 hover:text-cyan-500'
                } ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              to="/contact" 
              onClick={handleNavClick}
              className={`mt-4 px-10 py-4 bg-blue-900 text-white font-bold rounded-full shadow-lg transform transition-all duration-500 delay-100 ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Solicitar Cotización
            </Link>
          </div>
      </div>
    </header>
  );
};

export default NavBar;