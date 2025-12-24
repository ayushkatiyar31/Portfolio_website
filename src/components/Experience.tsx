import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, Calendar, ExternalLink } from "lucide-react";

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(38_92%_50%/0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-primary font-medium mb-4">
              Experience & Certifications
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My Professional <span className="gradient-text">Journey</span>
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
                <div className="p-3 rounded-2xl bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <p className="text-primary text-sm">{exp.organization}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
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
                          className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
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
                <div className="p-3 rounded-2xl bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
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
                    className="group glass-card p-5 rounded-2xl flex items-center justify-between hover:border-primary/30 transition-colors block"
                  >
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
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