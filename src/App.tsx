import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create animated stars effect for the background
  useEffect(() => {
    const createStars = () => {
      const container = document.querySelector('.galaxy-bg');
      if (!container) return;
      
      // Clear existing stars
      const existingStars = container.querySelectorAll('.star-bg, .shooting-star-bg');
      existingStars.forEach(star => star.remove());
      
      // Create new stars
      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star-bg');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.animationDuration = `${3 + Math.random() * 7}s`;
        container.appendChild(star);
      }
      
      // Create shooting stars
      for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star-bg');
        shootingStar.style.top = `${Math.random() * 70}%`;
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.animationDelay = `${Math.random() * 15}s`;
        container.appendChild(shootingStar);
      }
    };
    
    createStars();
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark galaxy-bg' : 'light'}`}>
      <div className={`min-h-screen ${darkMode ? 'bg-dark text-textLight' : 'bg-light text-textDark'}`}>
      
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Certifications darkMode={darkMode} />
      <Leadership darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:opacity-90 transition-all z-50 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <span className="text-xl">↑</span>
        </button>
      )}
      </div>
    </div>
  );
};

export default App;
