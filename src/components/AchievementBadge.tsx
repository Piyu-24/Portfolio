import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { Achievement } from '../data/achievements';

interface AchievementBadgeProps {
  achievement: Achievement;
  index: number;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card p-6 hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
          <Trophy className="w-6 h-6 text-accent-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 text-lg mb-1">{achievement.title}</h3>
          <p className="text-accent-600 font-semibold text-sm mb-2">{achievement.position}</p>
          <p className="text-gray-600 text-sm mb-2">{achievement.event}</p>
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
            {achievement.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementBadge;
