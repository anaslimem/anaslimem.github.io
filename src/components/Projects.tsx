import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Code, ExternalLink } from "lucide-react"; // Example icons

interface ProjectsProps {
  darkMode: boolean; // Keep prop if needed, styling is Tailwind based
}

// Updated projects from the latest CV
const projects = [
  {
    title: "AIAssistant - RAG-Powered Intelligent Search System",
    description: "Engineered an AI assistant with Retrieval-Augmented Generation (RAG), integrating ChromaDB, LangChain, and Redis for fast, accurate responses (2s vs 24s for standard LLMs; cached queries <1s). Created a Streamlit UI for real-time Q&A.",
    image: "/project-ai-assistant.jpg", // Placeholder image
    tags: ["RAG", "LangChain", "ChromaDB", "Redis", "Ollama", "Python", "Streamlit"],
    liveLink: "#", // Replace with actual link
    codeLink: "#", // Replace with actual link
  },
  {
    title: "Smart Article Search v2.0 – AI-Powered News Search Engine",
    description: "Upgraded an AI-powered article search engine by integrating a Kubernetes-based deployment architecture using Minikube. Implemented FastAPI (backend), Streamlit (frontend), and Elasticsearch for scalable, full-text search across news articles. Configured Kubernetes Deployments, Services, ConfigMaps, and Secrets for modular, secure, and production-like orchestration.",
    image: "/project-smart-article.jpg", // Placeholder image
    tags: ["FastAPI", "Streamlit", "Elasticsearch", "Kubernetes", "Minikube", "Python", "Docker"],
    liveLink: "#",
    codeLink: "#",
  },
  // Removed older projects not present in the latest CV summary
];

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section 
      id="projects" 
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }} // Lift effect on hover
                className="flex"
              >
                <Card className="bg-[#1E293B] border-none shadow-lg rounded-xl overflow-hidden flex flex-col hover:shadow-sky-500/20 transition-shadow duration-300 w-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl text-sky-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400 pt-1">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-full text-xs font-medium bg-sky-900/50 text-sky-300 border border-sky-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto flex justify-end space-x-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    <Button variant="sky" size="sm" asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

