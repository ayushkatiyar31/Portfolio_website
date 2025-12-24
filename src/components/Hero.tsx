import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      {/* Scanline effect */}
      <div className="absolute inset-0 scanline opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card mb-8 font-mono text-sm"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary">~/</span>
            <span className="text-muted-foreground">status:</span>
            <span className="text-green-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              available for hire
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="block text-foreground font-display">HI, I'M</span>
            <span className="gradient-text font-display">AYUSH KATIYAR</span>
          </motion.h1>

          {/* Subtitle with typing effect style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <p className="text-xl md:text-2xl text-primary font-display tracking-wider">
              FULL-STACK DEVELOPER
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            B.Tech CS student crafting{" "}
            <span className="text-primary">high-performance</span> web applications 
            with cutting-edge technologies. Building the future, one line of code at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="group px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all flex items-center gap-2 neon-glow hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-lg border border-primary/50 text-foreground font-semibold transition-all flex items-center gap-2 hover:bg-primary/10 hover:border-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:ayush@example.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-20 right-8 w-20 h-20 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-20 left-8 w-20 h-20 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/30" />
    </section>
  );
};

export default Hero;