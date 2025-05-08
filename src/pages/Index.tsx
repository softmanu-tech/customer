
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Philosophy from '@/components/Philosophy';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  // Remove the manual intersection observer since we're now using the ScrollAnimation component
  return (
    <div className="overflow-x-hidden">
      <ScrollProgress />
      <Header />
      
      <main id="home">
        <Hero />
        <Experience />
        <Skills />
        <Philosophy />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Scroll-to-top button with enhanced animation */}
      <motion.a
        href="#home"
        className="fixed bottom-6 right-6 w-12 h-12 bg-navy-800 hover:bg-navy-700 text-white rounded-full shadow-lg flex items-center justify-center z-40 transition-colors"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      >
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↑
        </motion.span>
      </motion.a>
    </div>
  );
};

export default Index;
