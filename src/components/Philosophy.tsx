
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

const philosophyData: PhilosophyItem[] = [
  {
    icon: "🎯",
    title: "Customer First Approach",
    description: "Every decision and action is taken with the customer's best interest at heart. Creating positive experiences and building lasting relationships is always my top priority."
  },
  {
    icon: "🤝",
    title: "Building Trust",
    description: "Establishing trust through transparency, honesty, and delivering on promises is the foundation of every customer relationship. I believe in clear communication and setting realistic expectations."
  },
  {
    icon: "👂",
    title: "Active Listening",
    description: "Listening attentively to understand customer needs, concerns, and feedback is essential to providing tailored solutions. I focus on both what is said and what remains unsaid."
  },
  {
    icon: "💡",
    title: "Proactive Problem Solving",
    description: "Anticipating customer needs and potential issues before they arise results in smoother experiences and higher satisfaction. I believe in taking initiative rather than just reacting to problems."
  }
];

const PhilosophyCard = ({ item, index }: { item: PhilosophyItem, index: number }) => {
  return (
    <ScrollAnimation animation="scale" delay={index * 0.2}>
      <motion.div 
        className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5 }}
      >
        <div className="w-14 h-14 bg-navy-100 rounded-full flex items-center justify-center text-2xl mb-4">
          {item.icon}
        </div>
        <h3 className="font-cinzel text-xl font-bold text-navy-800 mb-3">{item.title}</h3>
        <p className="text-navy-600">{item.description}</p>
      </motion.div>
    </ScrollAnimation>
  );
};

const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  
  return (
    <section id="philosophy" className="py-20 bg-gradient-to-br from-navy-50 to-navy-100">
      <motion.div 
        ref={containerRef}
        className="container mx-auto px-4"
        style={{ opacity, scale }}
      >
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-navy-800">Customer Service Philosophy</h2>
            <div className="section-divider"></div>
            <p className="max-w-2xl mx-auto text-navy-600">Guiding principles that shape my approach to customer service excellence.</p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyData.map((item, index) => (
            <PhilosophyCard key={item.title} item={item} index={index} />
          ))}
        </div>
        
        <ScrollAnimation animation="slideUp" delay={0.6}>
          <div className="mt-16 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="font-cinzel text-xl font-bold text-navy-800 mb-4 text-center">My Commitment to Excellence</h3>
            <p className="text-navy-600 text-center leading-relaxed">
              I believe that exceptional customer service goes beyond just solving problems. It's about creating meaningful connections, 
              anticipating needs, and consistently exceeding expectations. Every interaction is an opportunity to demonstrate 
              professionalism, empathy, and a genuine desire to help. This philosophy has guided me to consistently 
              achieve high satisfaction ratings and build lasting relationships with customers.
            </p>
          </div>
        </ScrollAnimation>
      </motion.div>
    </section>
  );
};

export default Philosophy;
