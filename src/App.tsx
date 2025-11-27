import React from 'react';
import Navbar from './components/Navbar';
import HexagonBackground from './components/HexagonBackground';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Hexagon Background Effect */}
      <HexagonBackground />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Home />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Piyumi Upeksha. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with React, TypeScript & TailwindCSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
