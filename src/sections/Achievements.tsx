import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { achievements } from '../data/achievements';
import AchievementBadge from '../components/AchievementBadge';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
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

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementBadge
              key={achievement.id}
              achievement={achievement}
              index={index}
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
