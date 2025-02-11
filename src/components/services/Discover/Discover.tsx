import React from 'react';
import './Discover.css';

const servicios = [
    {
        titulo: "Carga LCL",
        descripcion: "Soluciones flexibles para envíos de carga menor a un contenedor completo",
        icono: "📦"
    },
    {
        titulo: "Carga FCL",
        descripcion: "Transporte eficiente de carga en contenedores completos",
        icono: "🚢"
    },
    {
        titulo: "Carga Aérea",
        descripcion: "Soluciones de carga aérea rápida y segura",
        icono: "✈️"
    }
];

const Discover: React.FC = () => {
  return (
    <section className="discover-section">
      <div className="discover-container">
        <h2 className="discover-title">Nuestros Servicios</h2>
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-card">
              <div className="servicio-icono">{servicio.icono}</div>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Discover;
