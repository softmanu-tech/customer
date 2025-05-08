
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-cinzel font-bold">
              Customer<span className="text-gold-500">Expert</span>
            </h2>
            <p className="text-gray-400 mt-1">Customer Service Excellence in Solar Energy</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
              Email
            </a>
          </div>
        </div>
        
        <div className="border-t border-navy-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} All Rights Reserved
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
