import React from 'react'
import './Hero.css'

const heroData = [
    {
        type: "header",
        title: "Quienes Somos",
        subtitle: "Nuestra empresa se dedica a ofrecer soluciones innovadoras en el sector tecnológico, comprometidos con la calidad y la satisfacción del cliente."
    },
    {
        type: "mission",
        title: "Misión",
        description: "Calidad y servicio excepcionales."
    },
    {
        type: "vision",
        title: "Visión",
        description: "Innovación constante y liderazgo."
    },
    {
        type: "principles",
        title: "Principios",
        items: [
            "Integridad",
            "Innovación",
            "Compromiso",
            "Colaboración"
        ]
    }
];

const Hero = () => {
    return (
        <section className="about-hero">
            <div className="container">
                <div className="header-container">
                    <h2 className="header-title">{heroData[0].title}</h2>
                    <p className="header-subtitle">{heroData[0].subtitle}</p>
                </div>
                <div className="flex-container">
                    {heroData.slice(1).map((item, index) => (
                        <div className="text-center" key={index}>
                            <h3>{item.title}</h3>
                            {item.description ? (
                                <p className="description">{item.description}</p>
                            ) : (
                                item.items && (
                                    <ul className="principles-container">
                                        {item.items.map((principle, itemIndex) => (
                                            <li className="principles-item" key={itemIndex}>{principle}</li>
                                        ))}
                                    </ul>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
