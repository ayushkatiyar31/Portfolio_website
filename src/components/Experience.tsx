import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, Calendar, ExternalLink, Shield } from "lucide-react";

const experiences = [
  {
    type: "experience",
    title: "Full-Stack Developer Intern",
    organization: "Tech Startup Inc.",
    duration: "Jun 2024 - Present",
    description: "Building scalable web applications using React, Node.js, and AWS. Collaborated with cross-functional teams to deliver features that improved user engagement by 40%.",
    skills: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    type: "experience",
    title: "Freelance Developer",
    organization: "Self-Employed",
    duration: "Jan 2023 - May 2024",
    description: "Developed custom web solutions for clients across various industries. Managed projects from concept to deployment, ensuring client satisfaction.",
    skills: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe"],
  },
];

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "https://aws.amazon.com/certification",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2023",
    link: "https://coursera.org",
  },
  {
    title: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    date: "2023",
    link: "https://university.mongodb.com",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    link: "https://freecodecamp.org",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg glass-card text-sm text-primary font-mono mb-4">
              <Shield className="w-4 h-4" />
              ./experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              PROFESSIONAL <span className="gradient-text">JOURNEY</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A blend of hands-on experience and continuous learning that shapes my development expertise.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-display">WORK EXPERIENCE</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass-card p-6 rounded-xl border-l-2 border-l-primary hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold font-display">{exp.title}</h4>
                        <p className="text-primary text-sm font-mono">{exp.organization}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono bg-secondary px-2 py-1 rounded">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg bg-secondary border border-primary/20 text-primary text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/30">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold font-display">CERTIFICATIONS</h3>
              </div>

              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <motion.a
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group glass-card p-5 rounded-xl flex items-center justify-between hover:border-accent/50 transition-colors block"
                  >
                    <div>
                      <h4 className="font-semibold font-display group-hover:text-accent transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-mono">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;