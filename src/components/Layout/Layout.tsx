import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import ScrollProgress from '../ui/ScrollProgress';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Automatically scroll to top whenever the path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <ScrollProgress />
      <NavBar />
      <main className="main-content flex-grow">
        {children}
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;

