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
      className="card overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      {/* Image Section */}
      {achievement.image && (
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-accent-100 to-accent-200">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute top-3 right-3 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
            <Trophy className="w-6 h-6 text-accent-600" />
          </div>
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6">
        {!achievement.image && (
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-accent-600" />
            </div>
          </div>
        )}
        <div>
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
