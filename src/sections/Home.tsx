import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, Github, Linkedin } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-accent-50/30 pt-20"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Small Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-4"
            >
              Piyumi Upeksha
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl font-semibold text-accent-600 mb-6"
            >
              Aspiring Software Engineer
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              3rd-year IT Undergraduate | Full-Stack Focused
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="https://drive.google.com/file/d/1qU_QbDLxH4niWoYtaZ9ArB2t-xq9uZL9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Social Links - Horizontal on Desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-600 font-medium">Connect with me:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Piyu-24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/piyumi-upeksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Photo Circle */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Piyumi Upeksha"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Ccircle fill="%23e6f1ff" cx="200" cy="200" r="200"/%3E%3Ctext fill="%230066cc" font-family="Arial" font-size="80" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EPU%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Floating Social Icons */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-4 top-1/4 hidden lg:flex flex-col gap-4"
              >
                <a
                  href="https://github.com/Piyu-24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110 animate-float"
                  aria-label="GitHub"
                  style={{ animationDelay: '0s' }}
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/piyumi-upeksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 animate-float"
                  aria-label="LinkedIn"
                  style={{ animationDelay: '0.5s' }}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="w-6 h-10 border-2 border-accent-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-accent-500 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
