
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-navy-100 opacity-30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-gold-200 opacity-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold mb-4 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Customer Service<br /> 
              <span className="text-gradient-gold">Excellence</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-navy-700 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Passionate about delivering exceptional customer experiences in the renewable energy sector with a focus on empathy, problem-solving, and relationship building. 5+ years of experience with proven track record of increasing satisfaction and driving revenue growth.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <Button 
                className="bg-navy-700 hover:bg-navy-800 text-white px-8 py-6 rounded-md font-medium"
                onClick={scrollToExperience}
              >
                View Experience
              </Button>
              <Button 
                variant="outline" 
                className="border-navy-700 text-navy-700 px-8 py-6 rounded-md font-medium"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 opacity-75 blur"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl">
                <h3 className="font-cinzel text-2xl font-semibold mb-4 text-navy-800">Customer Service Expert</h3>
                <div className="space-y-4 text-navy-700">
                  <p className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 mr-2"></span>
                    <span>Solar energy product specialist with certification</span>
                  </p>
                  <p className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 mr-2"></span>
                    <span>95% customer satisfaction rating across 200+ monthly consultations</span>
                  </p>
                  <p className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 mr-2"></span>
                    <span>Increased cross-selling by 27% through personalized recommendations</span>
                  </p>
                  <p className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 mr-2"></span>
                    <span>98% first-contact resolution rate, reducing escalations by 40%</span>
                  </p>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-navy-100 rounded-full flex items-center justify-center shadow-lg border border-navy-200"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <div className="text-center">
                <p className="font-cinzel text-sm font-semibold text-navy-700">5+ Years</p>
                <p className="font-cinzel text-xs text-navy-600">Customer Service</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
