import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, Phone, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const SolarSystem = lazy(() => import("../three/SolarSystem"));

const HeroSection = () => {
  const handleDownloadResume = () => {
    // In production, this would download the actual resume file
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ayush_Katiyar_Resume.pdf";
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Solar System Background */}
      <Suspense fallback={<div className="absolute inset-0 cyber-grid opacity-30" />}>
        <SolarSystem />
      </Suspense>
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">
              Open to Internships & Full-time Roles
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="block text-foreground font-display">HI, I'M</span>
            <span className="gradient-text font-display">AYUSH KATIYAR</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-primary font-display tracking-wider mb-4"
          >
            FULL-STACK DEVELOPER
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-4"
          >
            B.Tech CSE Student at KIET, Ghaziabad. Building{" "}
            <span className="text-primary">scalable</span> web applications with the MERN stack.
            Passionate about clean code and exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4"
          >
            <Link
              to="/projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all flex items-center justify-center gap-2 neon-glow hover:scale-105"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </Link>
            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-lg border border-primary/50 text-foreground font-semibold transition-all flex items-center justify-center gap-2 hover:bg-primary/10 hover:border-primary"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-lg glass-card text-foreground font-semibold transition-all flex items-center justify-center gap-2 hover:border-primary/50"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/ayushkatiyar31", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/ayush-katiyar-31888b256", label: "LinkedIn" },
              { icon: Phone, href: "tel:+917518933205", label: "Phone" },
              { icon: Mail, href: "mailto:ayushkatiyar827@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 rounded-lg glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;