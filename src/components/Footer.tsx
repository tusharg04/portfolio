import React from 'react';
import { personalData } from '../data/resume-data';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">
              <span className="text-primary-400">Tushar</span> Garg
            </p>
            <p className="mt-2">Software Engineer & Computer Science Student</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full mb-4 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
            <p>© {new Date().getFullYear()} Tushar Garg. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <p className="font-medium mb-2">Contact</p>
              <p>Email: {personalData.email}</p>
              <p>Phone: {personalData.phone}</p>
            </div>
            
            <div>
              <p className="font-medium mb-2">Quick Links</p>
              <div className="flex flex-col space-y-1">
                <a href="#about" className="hover:text-primary-400 transition-colors">About</a>
                <a href="#projects" className="hover:text-primary-400 transition-colors">Projects</a>
                <a href="#skills" className="hover:text-primary-400 transition-colors">Skills</a>
                <a href="#education" className="hover:text-primary-400 transition-colors">Education</a>
                <a href="#achievements" className="hover:text-primary-400 transition-colors">Achievements</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;