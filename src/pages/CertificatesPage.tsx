import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/layout/PageTransition";
import SolarSystem from "@/components/three/SolarSystem";
import BubbleBackground from "@/components/effects/BubbleBackground";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

const certificates = [
  {
    title: "Full-Stack Web Development",
    issuer: "LinkedIn Learning",
    date: "2024",
    duration: "29 hours",
    description: "Completed a comprehensive 29-hour full-stack development learning path covering frontend and backend technologies.",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Databases"],
    link: "https://linkedin.com/learning",
  },
  {
    title: "Programming Foundations: Object-Oriented Design",
    issuer: "LinkedIn Learning",
    date: "2024",
    description: "Learned Object-Oriented Design fundamentals including classes, inheritance, polymorphism, and design patterns.",
    skills: ["OOP", "Design Patterns", "UML", "SOLID Principles"],
    link: "https://linkedin.com/learning",
  },
  {
    title: "HTML CSS Essential Training",
    issuer: "LinkedIn Learning",
    date: "2023",
    description: "Mastered HTML and CSS fundamentals for building responsive and accessible web pages.",
    skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid"],
    link: "https://linkedin.com/learning",
  },
];

const CertificatesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <PageTransition>
      <Helmet>
        <title>Certificates | Ayush Katiyar</title>
        <meta name="description" content="Professional certifications of Ayush Katiyar - Full-Stack Web Development, OOP Design, and HTML/CSS from LinkedIn Learning." />
      </Helmet>

      <BubbleBackground />
      <SolarSystem />

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg glass-card text-sm text-primary font-mono mb-4">
                <Award className="w-4 h-4" />
                ./certificates
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                CERTIFICATIONS & <span className="gradient-text">LEARNING</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Continuous learning through industry-recognized certifications and courses.
              </p>
            </motion.div>

            {/* Certificates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card rounded-2xl overflow-hidden hover:border-accent/50 transition-all group flex flex-col"
                >
                  {/* Header */}
                  <div className="p-6 border-b border-border/50 flex-shrink-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                        <Award className="w-6 h-6 text-accent" />
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass-card text-muted-foreground hover:text-accent hover:border-accent/50 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <h3 className="text-lg font-semibold font-display group-hover:text-accent transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {cert.date}
                      </span>
                      {cert.duration && (
                        <span className="text-accent">{cert.duration}</span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-3 border-t border-border/50 bg-accent/5">
                    <div className="flex items-center gap-2 text-xs text-accent">
                      <CheckCircle className="w-3 h-3" />
                      <span>Certificate Verified</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 glass-card p-8 rounded-2xl"
            >
              <h2 className="text-xl font-bold font-display text-center mb-8">
                CONTINUOUS <span className="gradient-text">LEARNING</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "3", label: "Certifications" },
                  { value: "50+", label: "Hours of Learning" },
                  { value: "200+", label: "DSA Problems" },
                  { value: "10+", label: "Technologies" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-3xl font-bold gradient-text font-display">{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-mono mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CertificatesPage;