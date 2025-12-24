import { motion } from "framer-motion";
import { Heart, ArrowUp, Zap } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-primary/20 relative">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-2xl font-bold gradient-text font-display">AK</span>
            <span className="text-sm text-muted-foreground font-mono">
              © {new Date().getFullYear()} Ayush Katiyar
            </span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span>{"<built_with"}</span>
            <Heart className="w-4 h-4 text-neon-pink fill-current animate-pulse" />
            <span>{"React + Tailwind />"}</span>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-lg glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;