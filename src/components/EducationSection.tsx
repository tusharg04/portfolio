import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../data/resume-data';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="text-primary-600 dark:text-primary-400">Education</span>
            </h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My academic journey has equipped me with a strong foundation in computer science and specialized knowledge in AI.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 md:-translate-x-1/2 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Education items */}
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 md:mb-0 md:pb-12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 ml-4 md:ml-0 md:mr-4 -mt-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-800 transform md:translate-x-0"></div>
                
                {/* Education card */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                } bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative`}>
                  <div className={`absolute w-4 h-4 transform rotate-45 bg-white dark:bg-gray-900 ${
                    index % 2 === 0 ? 'right-0 translate-x-2' : 'left-0 -translate-x-2'
                  } top-6 hidden md:block`}></div>
                  
                  <div className="flex items-center mb-3">
                    <GraduationCap size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{edu.institution}</p>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.year}</span>
                  </div>
                  
                  <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">
                    {edu.grade}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;