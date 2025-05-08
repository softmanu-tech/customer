
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from './ScrollAnimation';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Head of Operations",
    company: "Solar Innovations Ltd.",
    text: "An exceptional customer service representative who consistently goes above and beyond for our clients. Their deep understanding of our solar products and ability to explain complex concepts simply has been invaluable to our team."
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Customer Experience Manager",
    company: "GreenTech Solutions",
    text: "Their ability to handle difficult situations with grace and turn frustrated customers into loyal advocates is remarkable. One of the most skilled customer service professionals I've had the pleasure of working with."
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "VP of Customer Relations",
    company: "EcoEnergy Partners",
    text: "Consistently demonstrates exceptional attention to detail in customer documentation and follow-up. Has an extraordinary ability to anticipate customer needs and address them proactively."
  },
  {
    id: 4,
    name: "Jennifer Lee",
    role: "Director of Sales",
    company: "Renewable Energy Group",
    text: "Working with such a customer-oriented professional has significantly improved our customer retention rates. Their ability to communicate complex solar solutions in simple terms has directly contributed to our sales success."
  }
];

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-navy-800 p-8 rounded-lg shadow-xl border border-navy-700 h-full">
        <CardContent className="p-0 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center mb-4">
            <div className="mb-4 md:mb-0">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-navy-900 font-bold text-xl">
                {item.name.charAt(0)}
              </div>
            </div>
            <div className="md:ml-4">
              <h3 className="font-cinzel text-xl font-bold text-white">{item.name}</h3>
              <p className="text-gold-400">{item.role}, {item.company}</p>
            </div>
          </div>
          <blockquote className="text-gray-300 italic">"{item.text}"</blockquote>
          
          <motion.div 
            className="absolute bottom-4 right-4 opacity-10"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21V17C3 15.8954 3.89543 15 5 15H19C20.1046 15 21 15.8954 21 17V21" stroke="#FFC107" strokeWidth="2"/>
              <path d="M12 12C9.79086 12 8 10.2091 8 8V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V8C16 10.2091 14.2091 12 12 12Z" stroke="#FFC107" strokeWidth="2"/>
            </svg>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={containerRef} id="testimonials" className="py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gold-400 opacity-20"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, 20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-gold-300 opacity-15"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, -20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-white">Client Testimonials</h2>
            <div className="section-divider bg-gradient-to-r from-gold-400 to-gold-600"></div>
            <p className="max-w-2xl mx-auto text-gray-300">Hear what colleagues and clients have to say about my customer service approach and results.</p>
          </div>
        </ScrollAnimation>
        
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: {}
          }}
        >
          <Carousel 
            className="max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
              dragFree: true
            }}
          >
            <CarouselContent className="py-4">
              {testimonialData.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4 pr-4">
                  <motion.div 
                    className="h-full"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: "easeOut",
                      delay: testimonial.id * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <TestimonialCard item={testimonial} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="bg-yellow-300 relative static mr-2">
                <motion.span
                  whileHover={{ x: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  ←
                </motion.span>
              </CarouselPrevious>
              <CarouselNext className="bg-yellow-300 relative static ml-2">
                <motion.span
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </CarouselNext>
            </div>
          </Carousel>
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gold-400 font-cinzel">
            "Excellence is not a skill. It's an attitude."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
