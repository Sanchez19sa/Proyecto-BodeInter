import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" onClick={handleNavClick} className="flex items-center gap-4 z-50 group">
          {/* Icon Container */}
          <div className={`w-10 h-10 flex items-center justify-center transition-all duration-300 ${isScrolled ? 'scale-100' : 'scale-110'}`}>
             <img 
                src="https://cdn-icons-png.flaticon.com/512/726/726455.png" 
                alt="Logistics Icon" 
                className={`w-full h-full object-contain transition-all ${isScrolled ? 'brightness-0 invert-0' : 'brightness-0 invert'}`}
             />
          </div>
          
          {/* Divider */}
          <div className={`h-8 w-px ${isScrolled ? 'bg-slate-300' : 'bg-white/30'}`}></div>

          {/* Brand Text */}
          <div className="flex flex-col justify-center">
             <span className={`font-bold text-2xl tracking-tight leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
               BODE<span className={`${isScrolled ? 'text-cyan-600' : 'text-cyan-400 font-light'}`}>INTER</span>
             </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleNavClick} // Added click handler here
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
            onClick={handleNavClick} // Added click handler here
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-md ${
              isScrolled 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-white text-blue-900 hover:bg-cyan-50'
            }`}
          >
            Cotizar
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${isScrolled || isMobileMenuOpen ? 'text-blue-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 z-40 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleNavClick} // Handler is used here (closes menu + scrolls up)
              className={`text-2xl font-bold ${
                isActive(link.path) ? 'text-cyan-600' : 'text-slate-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;

