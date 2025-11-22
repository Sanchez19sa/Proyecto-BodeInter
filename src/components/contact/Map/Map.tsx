import React from 'react';
import './Map.css';

const Map: React.FC = () => {
  return (
    <div className="map-container shadow-2xl border-4 border-white rounded-xl overflow-hidden">
      <div className="google-map-container h-full w-full">
        <iframe
          title="Ubicación Bodeinter"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.46932789037!2d-75.6341793!3d6.0672652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46866da08b4071%3A0x1753d10a23cae993!2sZona%20Franca%20Internacional%20Del%20Valle%20De%20Aburr%C3%A1!5e0!3m2!1ses-419!2sco!4v1738616663110!5m2!1ses-419!2sco"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '450px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

