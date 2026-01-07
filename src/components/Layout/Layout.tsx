// src/components/Layout/Layout.tsx
import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import ScrollProgress from '../ui/ScrollProgress';
import './Layout.css';

const Layout: React.FC = () => {
  const { pathname, search } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <ScrollProgress />
      <NavBar />

      <main className="main-content flex-grow">
        <Outlet />
      </main>
      <ScrollToTop />

      <Footer />
    </div>
  );
};

export default Layout;
