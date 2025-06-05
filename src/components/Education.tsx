import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { GraduationCap } from "lucide-react"; // Example icon

interface EducationProps {
  darkMode: boolean; // Keep prop if needed, styling is Tailwind based
}

// Updated education details from the latest CV
const educationHistory = [
  {
    degree: "Bachelor of Science - Computer Science",
    institution: "Higher Institute of Applied and Technological Sciences of Mateur",
    duration: "Sep 2023 - Present",
    description: "Specializing in AI, machine learning, and NLP.", // Optional description
  },
  {
    degree: "Baccalaureate – Mathematics",
    institution: "El Alia High School",
    duration: "Sep 2019 - Jun 2023",
    description: null, // No description provided in CV
  },
];

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section 
      id="education" 
      className="bg-[#0F172A] text-slate-300 px-6 md:px-12 py-24"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-400 mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto"></div>
          </motion.div>

          <div className="relative pl-8 border-l-2 border-sky-700/50">
            {educationHistory.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-12 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[1.6rem] top-1 w-6 h-6 bg-sky-400 rounded-full border-4 border-[#0F172A]"></div>
                
                <Card className="bg-[#1E293B] border-none shadow-lg rounded-xl hover:shadow-sky-500/20 transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start flex-wrap">
                      <div>
                        <CardTitle className="text-xl md:text-2xl text-sky-300 flex items-center">
                          <GraduationCap className="mr-2 h-5 w-5 flex-shrink-0" /> {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-sky-500 text-sm md:text-base mt-1">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <span className="text-xs md:text-sm text-slate-400 whitespace-nowrap pt-1 mt-2 sm:mt-0">
                        {edu.duration}
                      </span>
                    </div>
                  </CardHeader>
                  {edu.description && (
                    <CardContent className="text-slate-300 text-sm md:text-base">
                      <p>{edu.description}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

