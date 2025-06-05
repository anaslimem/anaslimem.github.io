import React from "react";
import { Button } from "./ui/button"; // Use the new Button
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  darkMode: boolean; // Keep darkMode prop if needed for other logic, though styling is now Tailwind based
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-[#0F172A] text-white px-6 md:px-12 py-24 pt-32 md:pt-24" // Added padding top for navbar
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="space-y-6 max-w-xl text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-sky-400"
          >
            Anas Limem
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl"
          >
            {/* Updated tagline from CV Summary */}
            Computer Science student specializing in AI, machine learning, and NLP. Passionate about building intelligent systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Use the custom sky variant defined in button.tsx */}
            <Button variant="sky" size="lg" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
        
        {/* Illustration/Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 max-w-md mt-10 md:mt-0"
        >
          {/* Placeholder for illustration - replace src if needed */}
          <img
            src="/ai-illustration.png" // Make sure this image exists in public folder
            alt="AI Illustration"
            className="w-full rounded-2xl shadow-lg shadow-sky-500/20"
          />
        </motion.div>
      </div>
      
      {/* Optional: Add scroll down indicator if desired */}
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-slate-300 hover:text-sky-400 transition"
          >
            <span className="text-sm mb-1">Scroll</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 5V19M12 19L5 12M12 19L19 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

