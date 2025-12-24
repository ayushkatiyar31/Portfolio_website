import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download, Code, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const SolarSystem = lazy(() => import("../three/SolarSystem"));

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <motion.span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const HeroSection = () => {
  const handleDownloadResume = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground font-mono">
                Full-Stack Developer
              </span>
            </motion.div>

            {/* Animated Main Heading */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="block text-foreground font-display mb-2"
              >
                HI, I'M
              </motion.span>
              <span className="gradient-text font-display block">
                <AnimatedText text="AYUSH KATIYAR" />
              </span>
            </motion.h1>

            {/* Tagline with typing effect */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              B.Tech CSE Student at <span className="text-primary font-semibold">KIET, Ghaziabad</span>. 
              Building scalable web applications with the{" "}
              <span className="text-primary font-semibold">MERN stack</span>. 
              Passionate about clean code and exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <Link
                to="/projects"
                className="w-full sm:w-auto group px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all flex items-center justify-center gap-2 neon-glow hover:scale-105"
              >
                <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </Link>
              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-primary/50 text-foreground font-semibold transition-all flex items-center justify-center gap-2 hover:bg-primary/10 hover:border-primary"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {[
                { icon: Github, href: "https://github.com/ayushkatiyar31", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/ayush-katiyar-31888b256", label: "LinkedIn" },
                { icon: Phone, href: "tel:+917518933205", label: "Phone" },
                { icon: Mail, href: "mailto:ayushkatiyar827@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-xl glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glowing rings */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, hsl(200 100% 50% / 0.3), hsl(270 100% 65% / 0.3))",
                  filter: "blur(40px)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Rotating border */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(200 100% 50%), hsl(270 100% 65%), hsl(320 100% 60%), hsl(200 100% 50%))",
                  padding: "3px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background glass-card">
                {/* Placeholder - User can replace with their image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/20 border-2 border-dashed border-primary/50 flex items-center justify-center">
                      <span className="text-3xl">👨‍💻</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">
                      Add your photo
                    </p>
                    <p className="text-xs text-muted-foreground/60">
                      Replace in code
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;