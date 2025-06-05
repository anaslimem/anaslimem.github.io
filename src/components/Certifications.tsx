import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Award, ExternalLink } from "lucide-react"; // Added ExternalLink import
import { Button } from "./ui/button"; // Added Button import

interface CertificationsProps {
  darkMode: boolean; // Keep prop if needed, styling is Tailwind based
}

// Updated certifications from the latest CV
const certifications = [
  {
    title: "Getting Started with Deep Learning",
    issuer: "NVIDIA",
    date: "Feb 2024",
    link: "#", // Add link if available
  },
  {
    title: "Fundamentals of Accelerated Computing with CUDA Python",
    issuer: "NVIDIA",
    date: "Mar 2024",
    link: "#",
  },
  {
    title: "Building Transformer-Based Natural Language Processing Applications",
    issuer: "NVIDIA",
    date: "Mar 2024",
    link: "#",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "Sep 2024",
    link: "#",
  },
  {
    title: "Generative AI with Diffusion Models",
    issuer: "NVIDIA",
    date: "Nov 2024",
    link: "#",
  },
];

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
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
      id="certifications" 
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
              Certifications
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }} // Lift effect on hover
                className="flex"
              >
                <Card className="bg-[#1E293B] border-none shadow-lg rounded-xl overflow-hidden flex flex-col hover:shadow-sky-500/20 transition-shadow duration-300 w-full">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl text-sky-300 flex items-center">
                      <Award className="mr-2 h-5 w-5 flex-shrink-0" /> {cert.title}
                    </CardTitle>
                    <CardDescription className="text-sky-500 text-sm pt-1">
                      Issued by {cert.issuer} - {cert.date}
                    </CardDescription>
                  </CardHeader>
                  {/* Optional: Add CardContent for description or link */}
                  {/* <CardContent className="flex-grow">
                    <p className="text-sm text-slate-400">Optional description here.</p>
                  </CardContent> */}
                  {cert.link && cert.link !== "#" && (
                    <div className="p-6 pt-0 mt-auto flex justify-end">
                      <Button variant="link" size="sm" asChild>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">
                          View Credential <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
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

export default Certifications;

