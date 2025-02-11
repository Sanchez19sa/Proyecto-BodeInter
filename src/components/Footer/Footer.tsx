import React from 'react'
import './Footer.css'
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import logoImage from '../../assets/img/LogoBodeinter_blanco.png';

const footerData = [
  {
    type: "text",
    content: "Somos una compañía que ofrece los mejores servicios logísticos, inspección y etiquetado en Zona Franca."
  },
  {
    type: "section",
    title: "Servicios",
    items: ["Carga LCL ↗", "Carga FCL ↗", "Carga Aérea ↗"]
  },
  {
    type: "section",
    title: "Conéctate con nosotros",
    items: ["Sobre Nosotros ↗", "Contactenos ↗", "Solicitud de presupuesto ↗"]
  },
  {
    type: "section",
    title: "Oficinas",
    items: [
      "Medellín: Zona Franca Zofiva Km 1 Variante Caldas - Antioquía",
      "Bogotá: Calle 123 #45-67",
      "Cartagena: Calle 28 # 26-53"
    ]
  }
];


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img 
            src={logoImage}
            alt="Bodeinter Logo" 
            className="footer-logo"
          />
          {footerData.map((item, index) => {
            if (item.type === "text") {
              return <p className="footer-text" key={index}>{item.content}</p>;
            }
            return null; // Ignorar otros tipos
          })}
        </div>

        {footerData.map((item, index) => {
          if (item.type === "section" && item.items) {
            return (
              <div className="footer-section" key={index}>
                <h4>{item.title}</h4>
                <ul>
                  {item.items.map((subItem, itemIndex) => (
                    <li key={itemIndex}>{subItem}</li>
                  ))}
                </ul>
              </div>
            );
          }
          return null; // Ignorar otros tipos
        })}
      </div>
      <div className="footer-icons">
        <a href="https://wa.me/3155261930" target="_blank" rel="noopener noreferrer" className="icon-container">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
        
        <a href="https://www.facebook.com/bodeintersaszf" target="_blank" rel="noopener noreferrer" className="icon-container">
          <FaFacebook className="facebook-icon" />
        </a>
        
        <a href="https://www.instagram.com/bodeintersas" target="_blank" rel="noopener noreferrer" className="icon-container">
          <FaInstagram className="instagram-icon" />
        </a>
        
        <a href="https://www.linkedin.com/company/bodeinter" target="_blank" rel="noopener noreferrer" className="icon-container">
          <FaLinkedin className="linkedin-icon" />
        </a>
        
        <a href="https://www.tiktok.com/@bodeinterc" target="_blank" rel="noopener noreferrer" className="icon-container">
          <FaTiktok className="tiktok-icon" />
        </a>
      </div>
      <hr className="footer-divider" />
      <p className="footer-copyright">© Copyright {new Date().getFullYear()}. Todos los derechos reservados para: Bodeinter S.A.S. Designed by SSANCHEZA</p>
    </footer>
  )
}

export default Footer

