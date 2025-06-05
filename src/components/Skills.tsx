import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Cpu, Wrench, Database, GitBranch, Languages, Users } from "lucide-react"; // Example icons

interface SkillsProps {
  darkMode: boolean; // Keep prop if needed, styling is Tailwind based
}

// Updated skills from the latest CV
const skillCategories = [
  {
    name: "Programming & AI/ML",
    icon: <Cpu className="mr-2 h-5 w-5" />,
    skills: ["Python (TensorFlow, PyTorch, Scikit-learn, NumPy, Pandas)", "Java", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Web Frameworks",
    icon: <Wrench className="mr-2 h-5 w-5" />,
    skills: ["Flask", "FastAPI"],
  },
  {
    name: "Databases & Tools",
    icon: <Database className="mr-2 h-5 w-5" />,
    skills: ["MongoDB", "SQL", "Redis", "ChromaDB", "FAISS", "Elasticsearch"],
  },
  {
    name: "DevOps",
    icon: <GitBranch className="mr-2 h-5 w-5" />,
    skills: ["Docker", "Kubernetes"],
  },
];

const otherSkills = {
  name: "Soft Skills & Languages",
  icon: <Users className="mr-2 h-5 w-5" />,
  skills: [
    "Leadership", "Teamwork and Collaboration", "Communication",
    "English (B2)", "French (B2)", "Arabic (Native)"
  ],
};

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section 
      id="skills" 
      className="bg-[#0F172A] text-slate-300 px-6 md:px-12 py-24"
    >
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-400 mb-4">
              Technical & Soft Skills
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }} // Lift effect on hover
                className="flex"
              >
                <Card className="bg-[#1E293B] border-none shadow-lg rounded-xl overflow-hidden flex flex-col hover:shadow-sky-500/20 transition-shadow duration-300 w-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-sky-300 flex items-center">
                      {category.icon} {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.span 
                          key={i} 
                          className="px-3 py-1 rounded-full text-xs font-medium bg-sky-900/50 text-sky-300 border border-sky-700/50 cursor-default"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(3, 105, 161, 0.5)" }} // sky-700 with opacity
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            {/* Other Skills Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              className="flex sm:col-span-2 lg:col-span-1" // Adjust span as needed
            >
              <Card className="bg-[#1E293B] border-none shadow-lg rounded-xl overflow-hidden flex flex-col hover:shadow-sky-500/20 transition-shadow duration-300 w-full">
                <CardHeader>
                  <CardTitle className="text-xl text-sky-300 flex items-center">
                    {otherSkills.icon} {otherSkills.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {otherSkills.skills.map((skill, i) => (
                      <motion.span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-xs font-medium bg-teal-900/50 text-teal-300 border border-teal-700/50 cursor-default"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(13, 148, 136, 0.5)" }} // teal-600 with opacity
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

