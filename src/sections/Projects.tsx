import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-container bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-10 h-10 text-accent-500" />
            <h2 className="section-title mb-0">My Projects</h2>
          </div>
          <p className="section-subtitle mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            mobile applications, and embedded systems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            More projects available on my{' '}
            <a
              href="https://github.com/Piyu-24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 font-semibold hover:text-accent-700 underline"
            >
              GitHub profile
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
