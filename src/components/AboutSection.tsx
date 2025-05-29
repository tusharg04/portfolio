import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, GitBranch, Globe, Database, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              About <span className="text-primary-600 dark:text-primary-400">Me</span>
            </h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg dark:prose-invert max-w-none mb-10 text-gray-700 dark:text-gray-300">
            <p>
              I'm a passionate Computer Science student with a specialization in Artificial Intelligence,
              currently pursuing my B.Tech at Netaji Subhas University of Technology.
              With a strong foundation in programming and problem-solving, I enjoy building
              innovative solutions that address real-world challenges.
            </p>
            <p>
              My journey in software development has led me to create a diverse portfolio of projects,
              from secure video platforms to AI-powered applications. I'm particularly interested in
              the intersection of web development and machine learning, where I can leverage both
              disciplines to create intelligent, user-friendly applications.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <Code size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Full-Stack Development</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Building responsive and interactive web applications using modern frameworks and libraries.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-full mr-4">
                  <Database size={24} className="text-secondary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend Systems</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Developing robust server-side applications with Node.js, Express, and MongoDB.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-full mr-4">
                  <GitBranch size={24} className="text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Problem Solving</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Analytical approach to complex problems with optimized algorithmic solutions.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <BookOpen size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Continuous Learning</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Constantly expanding knowledge in emerging technologies and best practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;