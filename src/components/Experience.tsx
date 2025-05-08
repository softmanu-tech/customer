
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

interface ExperienceItem {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string[];
  achievements?: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    period: "Jan 2020 - Present",
    role: "Senior Customer Service Representative",
    company: "Solar Solutions Inc.",
    description: [
      "Served as subject matter expert for solar energy products, conducting over 200 customer consultations monthly with a 95% satisfaction rating",
      "Increased cross-selling of additional services by 27% through personalized product recommendations based on customer needs",
      "Maintained detailed documentation of all customer interactions, resulting in 30% faster resolution times for follow-up inquiries"
    ],
    achievements: [
      "Resolved complex customer concerns with a 98% first-contact resolution rate, reducing escalations by 40%",
      "Received \"Customer Service Excellence\" award for three consecutive quarters"
    ]
  },
  {
    id: 2,
    period: "Mar 2018 - Dec 2019",
    role: "Customer Service & Sales Associate",
    company: "Energy Retail Group",
    description: [
      "Handled an average of 50 customer inquiries daily, maintaining a customer satisfaction score of 4.8/5",
      "Exceeded sales targets by 15% through effective needs assessment and solution presentation",
      "Implemented a new approach to customer follow-up, resulting in a 22% increase in repeat business"
    ],
    achievements: [
      "Collaborated with management to develop improved documentation procedures for customer interactions",
      "Recognized for ability to de-escalate difficult situations and turn negative experiences into positive outcomes"
    ]
  },
  {
    id: 3,
    period: "Jun 2016 - Feb 2018",
    role: "Customer Service Representative",
    company: "Retail Solutions Company",
    description: [
      "Provided frontline customer support for a high-volume retail operation, handling both in-person and phone inquiries",
      "Consistently achieved 90%+ quality assurance scores on customer interaction evaluations",
      "Participated in sales training program, resulting in $10,000 additional monthly revenue through upselling"
    ],
    achievements: [
      "Adapted quickly to three major system changes, helping train five new team members on updated procedures"
    ]
  }
];

const ExperienceCard = ({ item, index }: { item: ExperienceItem, index: number }) => {
  return (
    <ScrollAnimation 
      delay={index * 0.2} 
      animation="slideUp"
      threshold={0.2}
    >
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="bg-gradient-to-r from-navy-50 to-navy-100 p-4 rounded-lg">
              <p className="font-cinzel text-navy-700 font-semibold">{item.period}</p>
              <h3 className="font-cinzel text-xl font-bold text-navy-900 mt-1">{item.role}</h3>
              <p className="text-gold-600 font-medium">{item.company}</p>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <ul className="list-disc pl-5 mb-4 space-y-2 text-navy-700">
                {item.description.map((point, i) => (
                  <li key={i} className="leading-relaxed">{point}</li>
                ))}
              </ul>
              {item.achievements && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-navy-800 mb-2">Key Achievements:</p>
                  <ul className="list-disc pl-5 space-y-2 text-navy-700">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="leading-relaxed">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-navy-800">Professional Experience</h2>
            <div className="section-divider"></div>
            <p className="max-w-2xl mx-auto text-navy-600">A proven track record of excellence in customer service and relationship building across the renewable energy sector.</p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
        
        <ScrollAnimation animation="fadeIn" delay={0.4}>
          <div className="mt-16 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-cinzel text-xl font-bold text-navy-800 mb-4">Education & Certifications</h3>
            
            <div className="mb-6">
              <p className="font-semibold text-navy-700">Bachelor of Science Software Development (2016)</p>
              <p className="text-navy-600">KCA University, Nairobi, Kenya</p>
            </div>
            
            <div>
              <p className="font-semibold text-navy-700 mb-2">Professional Certifications:</p>
              <ul className="list-disc pl-5 space-y-2 text-navy-700">
                <li>Advanced Customer Service Excellence (2020)</li>
                <li>Sales Techniques for Renewable Energy Products (2019)</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Experience;
