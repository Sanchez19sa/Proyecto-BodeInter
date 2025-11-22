import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setWidth(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1.5 bg-transparent z-[60] w-full pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_0_10px_rgba(6,182,212,0.7)]"
        style={{ width: `${width}%`, transition: 'width 0.1s' }}
      ></div>
    </div>
  );
};

export default ScrollProgress;

