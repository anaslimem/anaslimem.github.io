import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Briefcase } from "lucide-react"; // Example icon

interface ExperienceProps {
  darkMode: boolean; // Keep prop if needed, styling is Tailwind based
}

// Updated experiences from the latest CV
const experiences = [
  {
    title: "NLP Engineer Intern",
    company: "BlueBlood",
    duration: "Feb 2025 - Apr 2025",
    description: [
      "Developed an Automated CV Parser: Designed and implemented a robust parser to extract structured data from various CV formats.",
      "Integrated LLM APIs: Leveraged advanced large language model APIs to enhance text extraction and semantic understanding.",
      "Implemented Similarity Matching: Employed similarity algorithms to compare and rank candidate profiles based on relevance.",
      "Utilized Vector Database Technology: Built a search system using vector databases to efficiently manage and query candidate data.",
      "Enhanced Recruitment Efficiency: Contributed to improving the recruitment process by automating candidate screening and matching.",
      "Technologies: PHP, Symfony Framework, MySQL, Git, GitHub"
    ],
  },
  // Add previous internships if needed, or keep only the latest as per CV structure
  // {
  //   title: "Cybersecurity Intern",
  //   company: "Gomycode",
  //   duration: "July 2023 - August 2023",
  //   description: [
  //     "Assisted in vulnerability assessments and penetration testing exercises.",
  //     "Monitored security logs and responded to potential security incidents.",
  //     "Helped develop and document security best practices and procedures.",
  //   ],
  // },
];

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
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
      id="experience" 
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
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto"></div>
          </motion.div>

          <div className="relative pl-8 border-l-2 border-sky-700/50">
            {experiences.map((exp, index) => (
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
                          <Briefcase className="mr-2 h-5 w-5 flex-shrink-0" /> {exp.title}
                        </CardTitle>
                        <CardDescription className="text-sky-500 text-sm md:text-base mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <span className="text-xs md:text-sm text-slate-400 whitespace-nowrap pt-1 mt-2 sm:mt-0">
                        {exp.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="text-slate-300 text-sm md:text-base">
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

