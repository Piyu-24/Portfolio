import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = {
    languages: ['Java', 'JavaScript', 'C', 'Python'],
    frontend: ['React.js', 'React Native', 'HTML', 'CSS'],
    backend: ['Node.js', 'Express.js', 'Laravel'],
    databases: ['MySQL', 'MongoDB'],
    tools: ['Git', 'GitHub', 'Postman', 'XAMPP', 'REST APIs', 'Auth0', 'Figma'],
  };

  const timeline = [
    {
      icon: GraduationCap,
      title: 'Bachelor of Information Technology (Hons)',
      organization: 'Sri Lanka Institute of Information Technology',
      period: '2022 - Present',
      description: 'Currently pursuing IT degree with focus on full-stack development',
    },
    {
      icon: GraduationCap,
      title: 'G.C.E Advanced Level',
      organization: 'Physical Science Stream',
      period: '2020',
      description: 'Strong foundation in analytical and problem-solving skills',
    },
    {
      icon: GraduationCap,
      title: 'G.C.E Ordinary Level',
      organization: 'Completed',
      period: '2017',
      description: 'Comprehensive secondary education',
    },
  ];

  const qualities = [
    {
      icon: Briefcase,
      title: 'Full-Stack Interest',
      description: 'Passionate about both frontend and backend development',
    },
    {
      icon: Heart,
      title: 'Motivated',
      description: 'Self-driven and eager to learn new technologies',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Excellent at collaboration and working under pressure',
    },
    {
      icon: Zap,
      title: 'Adaptable',
      description: 'Quick learner who adapts to new challenges',
    },
  ];

  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            A passionate IT undergraduate with a strong foundation in full-stack development
          </p>
        </motion.div>

        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Profile Summary</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            I am a dedicated 3rd-year IT undergraduate at the Sri Lanka Institute of Information 
            Technology, specializing in full-stack development. My journey in software engineering 
            has been driven by a passion for creating innovative solutions and continuously expanding 
            my technical expertise.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With hands-on experience in modern web technologies and a proven track record in 
            hackathons and competitive programming, I bring both theoretical knowledge and practical 
            skills to every project I undertake.
          </p>
        </motion.div>

        {/* Academic Journey Timeline */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Academic Journey
          </motion.h3>
          <div className="space-y-6">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6 flex gap-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center">
                    <Icon className="w-7 h-7 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                      <span className="text-sm font-semibold text-accent-600">{item.period}</span>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">{item.organization}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Qualities */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            What I Bring
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6 text-center hover:scale-105 transition-transform"
                >
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{quality.title}</h4>
                  <p className="text-gray-600 text-sm">{quality.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Skills I'm Familiar With
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <div className="space-y-6">
              {/* Languages */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.languages.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Frontend Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Backend Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Databases</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.databases.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
