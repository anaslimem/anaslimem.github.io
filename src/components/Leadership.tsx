import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Users } from "lucide-react"; // Example icon

interface LeadershipProps {
  darkMode: boolean; // Keep prop if needed, styling is Tailwind based
}

// Updated leadership/volunteer info from the latest CV
const leadershipRoles = [
  {
    role: "Chair, IEEE CS ISSATM SBC",
    organization: "IEEE Computer Society - ISSATM Student Branch Chapter",
    duration: "Oct 2023 - Present",
    description: [
      "Advanced from Member to Chair, leading technical initiatives.",
      "Organized 5+ coding events (e.g., Choufli Code, Bizerte Tcodi).",
      "Fostering a collaborative learning environment."
    ],
  },
  // Add other roles if present in CV
];

const Leadership: React.FC<LeadershipProps> = ({ darkMode }) => {
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
      id="leadership" // Ensure this ID matches Navbar link
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
              Leadership & Volunteer Experience
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto"></div>
          </motion.div>

          <div className="relative pl-8 border-l-2 border-sky-700/50">
            {leadershipRoles.map((role, index) => (
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
                          <Users className="mr-2 h-5 w-5 flex-shrink-0" /> {role.role}
                        </CardTitle>
                        <CardDescription className="text-sky-500 text-sm md:text-base mt-1">
                          {role.organization}
                        </CardDescription>
                      </div>
                      <span className="text-xs md:text-sm text-slate-400 whitespace-nowrap pt-1 mt-2 sm:mt-0">
                        {role.duration}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="text-slate-300 text-sm md:text-base">
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      {role.description.map((point, i) => (
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

export default Leadership;

