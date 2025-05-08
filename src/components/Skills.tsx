
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  description: string;
}

const skillsData: Skill[] = [
  {
    name: "Customer Communication",
    level: 95,
    description: "Expert in clear, empathetic communication that builds rapport and trust with clients."
  },
  {
    name: "Problem Resolution",
    level: 90,
    description: "Quick and creative problem-solver, able to handle complex customer issues efficiently."
  },
  {
    name: "Solar Energy Knowledge",
    level: 85,
    description: "Comprehensive understanding of solar energy products, services, and common customer concerns."
  },
  {
    name: "Sales Techniques",
    level: 80,
    description: "Skilled in identifying customer needs and recommending appropriate additional services."
  },
  {
    name: "Documentation & Systems",
    level: 90,
    description: "Meticulous record-keeper with expertise in CRM and customer management systems."
  },
  {
    name: "Conflict Management",
    level: 85,
    description: "Adept at de-escalating tense situations and turning negative experiences into positive outcomes."
  }
];

const SkillBar = ({ skill, index }: { skill: Skill, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const progressControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      progressControls.start({
        width: `${skill.level}%`,
        transition: { duration: 1, ease: "easeOut", delay: index * 0.1 }
      });
    }
  }, [isInView, progressControls, skill.level, index]);

  return (
    <motion.div 
      ref={ref}
      className="mb-8" 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-1">
        <h3 className="font-cinzel font-semibold text-navy-800">{skill.name}</h3>
        <span className="text-gold-600 font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          className="h-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600"
          initial={{ width: "0%" }}
          animate={progressControls}
        ></motion.div>
      </div>
      <p className="text-sm text-navy-600 mt-2">{skill.description}</p>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-navy-800">Core Competencies</h2>
          <div className="section-divider"></div>
          <p className="max-w-2xl mx-auto text-navy-600">Key skills and expertise that enable exceptional customer service and relationship management.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
