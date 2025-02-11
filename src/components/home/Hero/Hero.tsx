import React from 'react'
import './Hero.css'
import videoFondo from '../../../assets/vid/comercioext.mp4'

const heroData = [
  {
    type: "video",
    src: videoFondo,
    alt: "Video de fondo"
  },
  {
    type: "header",
    title: "BODEINTER S.A.S.",
    subtitle: "¡SU CARGA EN BUENAS MANOS!"
  },
  /*{
    type: "description",
    content: "Somos una empresa Colombiana dedicada a la prestación de servicios de transporte de carga y logística internacional, desde y hacia cualquier lugar del mundo."
  }*/
];

const Hero: React.FC = () => {
  return (
    <div className="home-hero">
      <div className="video-container">
        <video 
          className="video-background"
          autoPlay 
          loop 
          muted
          preload="auto"
          playsInline
        >
          <source src={typeof heroData[0].src === 'string' ? heroData[0].src : ''} type="video/mp4" />
          {heroData[0].alt || "Video de fondo no disponible"}
        </video>
      </div>
      <div className="text-container">
        <h1>{heroData[1].title}</h1>
        <p className="hero-subtitle">{heroData[1].subtitle}</p>
        {/* <p className="hero-description">{heroData[2].content}</p> */}
      </div>
    </div>
  )
}

export default Hero

