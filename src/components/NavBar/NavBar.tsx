import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css';
import logoImage from '../../assets/img/LogoBodeinter.png'

const NavBar = () => {
  const [isOpaque, setIsOpaque] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (location.pathname === '/') {
      setIsOpaque(window.scrollY > 50);
    }
  };

  useEffect(() => {
    const opaqueRoutes = ['/acerca-de', '/servicios', '/contacto'];
    if (opaqueRoutes.includes(location.pathname)) {
      setIsOpaque(true);
    } else if (location.pathname === '/') {
      setIsOpaque(window.scrollY > 50);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [location.pathname]);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`${isOpaque ? 'opaque' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-content">
          <div className="logo-container">
            <Link to="/" onClick={handleLinkClick}>
              <img src={logoImage} alt="Logo de la Empresa" className="logo" />
            </Link>
          </div>
          
          <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li>
            <li><Link to="/acerca-de" onClick={handleLinkClick}>Quienes somos</Link></li>
            <li><Link to="/servicios" onClick={handleLinkClick}>Servicios</Link></li>
            <li><Link to="/contacto" onClick={handleLinkClick}>Contáctanos</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar 


