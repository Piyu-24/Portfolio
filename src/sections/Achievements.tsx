import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { achievements } from '../data/achievements';
import AchievementBadge from '../components/AchievementBadge';

const Achievements: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getPrevIndex = () => (currentIndex - 1 + achievements.length) % achievements.length;
  const getNextIndex = () => (currentIndex + 1) % achievements.length;

  return (
    <section id="achievements" className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-10 h-10 text-accent-500" />
            <h2 className="section-title mb-0">Achievements</h2>
          </div>
          <p className="section-subtitle mx-auto">
            Recognition and awards from hackathons and competitive programming events
          </p>
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="relative h-[500px] flex items-center justify-center">
          <div className="relative w-full max-w-6xl flex items-center justify-center">
            {/* Previous Card (Left) */}
            <motion.div
              key={`prev-${getPrevIndex()}`}
              animate={{ 
                opacity: 0.5, 
                scale: 0.85,
                transition: { duration: 0.3 }
              }}
              className="absolute left-0 w-full max-w-md z-10"
            >
              <AchievementBadge
                achievement={achievements[getPrevIndex()]}
                index={0}
              />
            </motion.div>

            {/* Current Card (Center - Rising Forward) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1.1, 
                  y: -10,
                  transition: { 
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }}
                exit={{ opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.3 } }}
                className="relative w-full max-w-xl z-30 shadow-2xl mx-auto"
              >
                <AchievementBadge
                  achievement={achievements[currentIndex]}
                  index={0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Next Card (Right) */}
            <motion.div
              key={`next-${getNextIndex()}`}
              animate={{ 
                opacity: 0.5, 
                scale: 0.85,
                transition: { duration: 0.3 }
              }}
              className="absolute right-0 w-full max-w-md z-10"
            >
              <AchievementBadge
                achievement={achievements[getNextIndex()]}
                index={0}
              />
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-700 hover:bg-accent-500 hover:text-white hover:scale-110 transition-all duration-200 z-40"
            aria-label="Previous achievement"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-700 hover:bg-accent-500 hover:text-white hover:scale-110 transition-all duration-200 z-40"
            aria-label="Next achievement"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-accent-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
              }`}
              aria-label={`Go to achievement ${index + 1}`}
            />
          ))}
        </div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl sm:text-2xl font-semibold text-gray-800 italic">
            "Continuous learning and competing drives innovation"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
