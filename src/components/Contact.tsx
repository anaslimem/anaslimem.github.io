import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input"; // Assuming Input component exists or needs creation
import { Textarea } from "./ui/textarea"; // Assuming Textarea component exists or needs creation
import { Mail, Phone, MapPin, Github } from "lucide-react";
import { cn } from "./ui/utils"; // Moved import to the top

interface ContactProps {
  darkMode: boolean; // Keep prop if needed, styling is Tailwind based
}

// Define Input component if not using shadcn CLI to add it
const ShadInput = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          // Custom styles for dark theme
          "bg-[#1E293B] border-sky-700/50 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 text-slate-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
ShadInput.displayName = "Input"

// Define Textarea component if not using shadcn CLI to add it
const ShadTextarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
           // Custom styles for dark theme
          "bg-[#1E293B] border-sky-700/50 placeholder:text-slate-400 focus:border-sky-500 focus:ring-sky-500 text-slate-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
ShadTextarea.displayName = "Textarea"

// Removed misplaced import from here

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-sky-400" />,
      label: "Email",
      value: "limemanas0@gmail.com",
      link: "mailto:limemanas0@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-sky-400" />,
      label: "Phone",
      value: "+216 21 293 957",
      link: "tel:+21621293957",
    },
    {
      icon: <MapPin className="h-5 w-5 text-sky-400" />,
      label: "Location",
      value: "Tunisia",
      link: null,
    },
    {
      icon: <Github className="h-5 w-5 text-sky-400" />,
      label: "GitHub",
      value: "github.com/anaslimem",
      link: "https://github.com/anaslimem",
    },
  ];

  return (
    <section 
      id="contact" 
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-sky-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }} // Lift effect
            >
              <Card className="bg-[#1E293B] border-none shadow-lg rounded-xl hover:shadow-sky-500/20 transition-shadow duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-sky-300">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-sky-900/50 border border-sky-700/50">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-base font-medium hover:text-sky-400 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }} // Lift effect
            >
              <Card className="bg-[#1E293B] border-none shadow-lg rounded-xl hover:shadow-sky-500/20 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-sky-300">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <ShadInput type="text" placeholder="Your Name" />
                      <ShadInput type="email" placeholder="Your Email" />
                    </div>
                    <ShadInput type="text" placeholder="Subject" />
                    <ShadTextarea placeholder="Your Message" rows={5} />
                    <Button type="submit" variant="sky" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

