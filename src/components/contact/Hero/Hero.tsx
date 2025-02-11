import React from 'react';
import './Hero.css';
import heroImage from '../../../assets/img/heroContactImg.jpg';

interface HeroItem {
  type: string;
  [key: string]: any;
}

interface ScheduleItem extends HeroItem {
  type: "schedule";
  content: string[];
}

interface ContactItem extends HeroItem {
  type: "contact" | "disclaimer";
  content: string;
}

// Tipo unión para todos los elementos
type HeroDataItem = ScheduleItem | ContactItem | HeroItem;

const heroData: HeroDataItem[] = [
  {
    type: "image",
    src: heroImage,
    alt: "Equipo de atención al cliente"
  },
  {
    type: "header",
    title: "SERVICIO DE ATENCIÓN AL CLIENTE"
  },
  {
    type: "schedule",
    content: [
      "Lunes a Viernes: 8:00 a.m - 12:00 p.m | 1:00 p.m - 5:00 p.m",
      "Sábado: 8:00 a.m - 12:30 p.m",
      "Domingos y festivos: Cerrado."
    ]
  },
  {
    type: "contact",
    content: "Para contactar con nuestro servicio de atención al cliente, llame al +57 315 5261930 o llene el siguiente formulario."
  },
  {
    type: "disclaimer",
    content: "Estamos a su total disposición en caso de que necesite ayuda o tenga preguntas."
  }
];

const Hero: React.FC = () => {
  // Validación segura del contenido
  const getScheduleContent = () => {
    const scheduleItem = heroData.find(item => item.type === "schedule") as ScheduleItem;
    
    if (!scheduleItem?.content || !Array.isArray(scheduleItem.content)) {
      return <p>No hay horarios disponibles.</p>;
    }

    return (
      <ul>
        {scheduleItem.content.map((item: string, index: number) => (
          <li key={index}>
            {item.replace(/(Lunes a Viernes|Sábado|Domingos y festivos)/g, '<strong>$1</strong>')}
          </li>
        ))}
      </ul>
    );
  };

  // Validación de elementos requeridos
  const getContent = (type: string) => {
    const item = heroData.find(item => item.type === type);
    
    if (!item) return null;
    
    switch (type) {
      case "header":
        return <h2>{(item as HeroItem).title}</h2>;
      case "contact":
      case "disclaimer":
        return <p className={type === "contact" ? "contact-highlight" : "disclaimer-text"}>
          {(item as ContactItem).content}
        </p>;
      default:
        return null;
    }
  };

  return (
    <section className="hero-section2">
      <div className="hero-container">
        <img 
          src={(heroData[0] as HeroItem).src} 
          alt={(heroData[0] as HeroItem).alt} 
          className="hero-image" 
          loading="lazy"
        />
        <div className="hero-text">
          {getContent("header")}
          <strong>Horarios:</strong>
          <ul className="schedule-list">
            {heroData[2].content?.map((item: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item.replace(/(Lunes a Viernes|Sábado|Domingos y festivos)/g, '<strong>$1</strong>') }}></li>
            ))}
          </ul>
          {getContent("contact")}
          {getContent("disclaimer")}
        </div>
      </div>
    </section>
  );
}

export default Hero;