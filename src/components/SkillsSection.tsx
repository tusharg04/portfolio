import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/resume-data';
import { Code, Database, Layout, PenTool, Users } from 'lucide-react';

const SkillsSection: React.FC = () => {
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

  // Helper function to get appropriate icon for a skill category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code className="text-primary-600 dark:text-primary-400" size={24} />;
      case 'Frontend Development':
        return <Layout className="text-primary-600 dark:text-primary-400" size={24} />;
      case 'Backend Development':
        return <Database className="text-primary-600 dark:text-primary-400" size={24} />;
      case 'Data Structures & Algorithms':
        return <PenTool className="text-primary-600 dark:text-primary-400" size={24} />;
      case 'Soft Skills':
        return <Users className="text-primary-600 dark:text-primary-400" size={24} />;
      default:
        return <Code className="text-primary-600 dark:text-primary-400" size={24} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-primary-600 dark:text-primary-400">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I've developed a diverse set of skills throughout my education and projects.
              Here's an overview of my technical and soft skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {getCategoryIcon(skillCategory.category)}
                  <h3 className="text-xl font-semibold ml-3 text-gray-900 dark:text-white">
                    {skillCategory.category}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Bars for programming skill levels */}
          <motion.div 
            variants={itemVariants} 
            className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Technical Proficiency</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">C++</span>
                  <span className="text-gray-600 dark:text-gray-400">Expert</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary-500 rounded-full" 
                    initial={{ width: 0 }}
                    animate={inView ? { width: "95%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Data Structures & Algorithms</span>
                  <span className="text-gray-600 dark:text-gray-400">Advanced</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary-500 rounded-full" 
                    initial={{ width: 0 }}
                    animate={inView ? { width: "90%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">React.js</span>
                  <span className="text-gray-600 dark:text-gray-400">Proficient</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary-500 rounded-full" 
                    initial={{ width: 0 }}
                    animate={inView ? { width: "85%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Node.js & Express</span>
                  <span className="text-gray-600 dark:text-gray-400">Proficient</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary-500 rounded-full" 
                    initial={{ width: 0 }}
                    animate={inView ? { width: "80%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700 dark:text-gray-300">MongoDB</span>
                  <span className="text-gray-600 dark:text-gray-400">Intermediate</span>
                </div>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary-500 rounded-full" 
                    initial={{ width: 0 }}
                    animate={inView ? { width: "75%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;