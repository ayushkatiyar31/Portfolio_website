import { motion } from "framer-motion";
import { Heart, Rocket, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ayushkatiyar31", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ayush-katiyar-31888b256", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ayushkatiyar827@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                <Rocket className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-bold font-display gradient-text">
                AYUSH KATIYAR
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer crafting digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Ayush Katiyar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;