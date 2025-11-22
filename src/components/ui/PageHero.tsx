import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlayOpacity?: number;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  overlayOpacity = 0.85 
}) => {
  return (
    <div 
      className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-fixed bg-center bg-cover pt-20 overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dynamic Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900"
        style={{ opacity: overlayOpacity }}
      ></div>
      
      {/* Gradient Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 overflow-hidden">
           <span className="block text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm animate-fade-in-up">
             Bodeinter S.A.S
           </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight animate-fade-in-up delay-100 drop-shadow-2xl">
          {title}
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6 rounded-full animate-[width_1s_ease-out_forwards]"></div>
        
        <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHero;

