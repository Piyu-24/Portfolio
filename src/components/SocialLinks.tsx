import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Piyu-24',
      color: 'hover:bg-gray-900',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/piyumi-upeksha',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:upekshabbc@gmail.com',
      color: 'hover:bg-accent-500',
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-110 ${link.color}`}
            aria-label={link.name}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
