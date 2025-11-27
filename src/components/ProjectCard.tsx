import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-accent-100 to-accent-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e6f1ff" width="400" height="300"/%3E%3Ctext fill="%230066cc" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EProject Image%3C/text%3E%3C/svg%3E';
          }}
        />
        
        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-end justify-center pb-6 gap-4"
        >
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-accent-500 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-accent-500 transition-colors duration-200 flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {project.period && (
          <span className="text-sm text-accent-500 font-semibold">{project.period}</span>
        )}
        <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Contributions */}
        {project.contributions && project.contributions.length > 0 && (
          <div className="border-t border-gray-100 pt-4">
            <p className="text-sm font-semibold text-gray-700 mb-2">Key Contributions:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {project.contributions.slice(0, 3).map((contribution, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-accent-500 mr-2">•</span>
                  {contribution}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
