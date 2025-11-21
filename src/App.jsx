import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FloatingDock from './components/FloatingDock';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import TopRightNav from './components/TopRightNav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Playground from './pages/Playground';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <Header />
      <ThemeToggle />
      <TopRightNav />
      <FloatingDock />
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          window.scrollTo(0, 0);
          lenisRef.current?.scrollTo(0, { immediate: true });
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div >
  );
}

export default App;
