import React, { Suspense, lazy } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const { BrowserRouter, Routes, Route } = ReactRouterDOM;

// Lazy load pages to split code into smaller chunks
const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Services = lazy(() => import('../pages/Services/Services'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const Terms = lazy(() => import('../pages/Terms'));

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="pt-32 flex justify-center"><LoadingSpinner /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;