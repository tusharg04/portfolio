import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { achievements } from '../data/resume-data';
import { Award, Code, Trophy } from 'lucide-react';

const AchievementsSection: React.FC = () => {
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

  // Helper function to get appropriate icon for an achievement
  const getAchievementIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Trophy className="text-accent-500" size={32} />;
      case 2:
        return <Code className="text-primary-500" size={32} />;
      case 3:
        return <Award className="text-secondary-500" size={32} />;
      default:
        return <Trophy className="text-accent-500" size={32} />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
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
              <span className="text-primary-600 dark:text-primary-400">Achievements</span>
            </h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Recognition and accomplishments that highlight my dedication and expertise.
            </p>
          </motion.div>

          <div className="space-y-8">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="md:flex items-center">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 flex justify-center">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      {getAchievementIcon(achievement.id)}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional spotlight achievement */}
          <motion.div 
            variants={itemVariants} 
            className="mt-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Trophy size={40} />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">JEE MAINS Excellence</h3>
                <p className="text-white/90 text-lg">
                  Achieved a remarkable rank of 2622, placing in the top 0.3% among over 10 lakh candidates.
                  This achievement underscores my strong analytical abilities and problem-solving skills.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;