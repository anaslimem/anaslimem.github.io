import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"; // Import Card components
import { User } from "lucide-react"; // Example icon

interface AboutProps {
  darkMode: boolean; // Keep prop if needed, styling is Tailwind based
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <section 
      id="about" 
      className="bg-[#0F172A] text-slate-300 px-6 md:px-12 py-24"
    >
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={imageVariants} className="flex justify-center">
            <img
              src="/pdp.jpg" // Ensure this image exists in public folder
              alt="Anas Limem Profile Picture"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-sky-500 shadow-lg shadow-sky-500/30"
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-[#1E293B] border-none shadow-xl rounded-2xl overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl md:text-3xl text-sky-400">
                  <User className="mr-3 h-6 w-6" /> About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 text-base md:text-lg space-y-4">
                {/* Updated content from CV Summary */}
                <p>
                  Computer Science student specializing in AI, machine learning, and NLP. Passionate about building intelligent systems and developing innovative solutions in natural language processing.
                </p>
                <p>
                  Currently serving as Chair of the IEEE CS Chapter, leading technical initiatives and fostering a collaborative learning environment. Actively engaged in AI research and model development.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

