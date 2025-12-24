import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, Code, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SolarSystem from "../three/SolarSystem";
import BubbleBackground from "../effects/BubbleBackground";
import profileImage from "@/assets/profile.jpeg";

import { useState, useEffect } from "react";

const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const startTyping = () => {
      timeout = setTimeout(() => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
          startTyping();
        } else {
          setIsComplete(true);
        }
      }, speed);
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};

const TypewriterText = ({ 
  text, 
  className, 
  speed = 50, 
  delay = 0,
  showCursor = true 
}: { 
  text: string; 
  className?: string; 
  speed?: number; 
  delay?: number;
  showCursor?: boolean;
}) => {
  const { displayedText, isComplete } = useTypewriter(text, speed, delay);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className={`inline-block w-0.5 h-[1em] bg-primary ml-1 align-middle ${isComplete ? 'animate-pulse' : ''}`} />
      )}
    </span>
  );
};

const HeroSection = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ayush_Katiyar_Resume.pdf";
    link.click();
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ayushkatiyar31", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ayush-katiyar-31888b256", label: "LinkedIn" },
    { icon: Phone, href: "tel:+917518933205", label: "Phone" },
    { icon: Mail, href: "mailto:ayushkatiyar827@gmail.com", label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Bubble Background */}
      <BubbleBackground />
      
      {/* Solar System Background */}
      <SolarSystem />
      
      {/* Gradient overlay for readability */}
      
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-[1]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-display">
                <span className="gradient-text">
                  <TypewriterText text="Hi, I'm Ayush Katiyar" speed={60} showCursor={false} />
                </span>
              </h1>
            </motion.div>

            {/* Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/80 mb-6"
            >
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                Full-Stack Developer
              </span>
            </motion.div>

            {/* Description with Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.8 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              <TypewriterText 
                text="B.Tech CSE Student at KIET, Ghaziabad. I build scalable web applications with the MERN stack, focusing on clean code and exceptional user experiences." 
                speed={30} 
                delay={2000}
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                to="/projects"
                className="w-full sm:w-auto group px-6 py-3.5 rounded-xl btn-premium text-primary-foreground font-semibold flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl btn-outline-premium text-foreground font-semibold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </motion.div>

          </div>

          {/* Right Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Static gradient ring - no spinning animation */}
              <div
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--premium-teal)), hsl(var(--primary)))",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              
              {/* Static glow effect */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-20"
                style={{ background: "var(--gradient-primary)" }}
              />

              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-premium">
                <img 
                  src={profileImage} 
                  alt="Ayush Katiyar" 
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
