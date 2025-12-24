import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageTransition from "@/components/layout/PageTransition";
import SolarSystem from "@/components/three/SolarSystem";
import { Briefcase, Calendar, Users, Zap, TrendingUp, Code2 } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "DSDL Club",
    location: "KIET, Ghaziabad",
    duration: "Aug 2023 – Aug 2024",
    description: "Led the end-to-end frontend development of the club website, ensuring responsiveness and performance optimization.",
    responsibilities: [
      "Developed the club website using HTML, CSS, and JavaScript",
      "Conducted hands-on sessions and mentored 30+ students on web development",
      "Taught responsive UI design and Git workflows",
      "Improved website load speed by 25% through optimized assets",
      "Created reusable UI components for consistent design",
    ],
    achievements: [
      { metric: "25%", label: "Load Speed Improvement" },
      { metric: "30+", label: "Students Mentored" },
    ],
    skills: ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"],
  },
];

const achievements = [
  {
    icon: Zap,
    title: "200+ DSA Problems",
    description: "Solved on LeetCode and GeeksforGeeks combined, strengthening algorithmic thinking.",
  },
  {
    icon: Users,
    title: "DSDL Club Selection",
    description: "Selected as Frontend Developer through a competitive screening process.",
  },
  {
    icon: TrendingUp,
    title: "25% Performance Boost",
    description: "Improved website load speed through optimization techniques.",
  },
];

const ExperiencePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <PageTransition>
      <Helmet>
        <title>Experience | Ayush Katiyar</title>
        <meta name="description" content="Professional experience of Ayush Katiyar - Frontend Developer at DSDL Club, mentoring students and building web applications." />
      </Helmet>

      <SolarSystem />

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-neon-pink/5 rounded-full blur-[100px]" />

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
                <Briefcase className="w-4 h-4" />
                ./experience
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                WORK <span className="gradient-text">EXPERIENCE</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hands-on experience in frontend development, team leadership, and mentoring.
              </p>
            </motion.div>

            {/* Experience Cards */}
            <div className="space-y-8 mb-20">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card rounded-2xl overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-6 border-b border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold font-display text-primary">{exp.title}</h3>
                        <p className="text-lg text-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-sm font-mono">
                        <Calendar className="w-4 h-4 text-primary" />
                        {exp.duration}
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4">{exp.description}</p>
                  </div>

                  {/* Achievements */}
                  <div className="px-6 py-4 bg-primary/5 grid grid-cols-2 gap-4">
                    {exp.achievements.map((achievement) => (
                      <div key={achievement.label} className="text-center">
                        <p className="text-2xl font-bold text-primary font-mono">{achievement.metric}</p>
                        <p className="text-xs text-muted-foreground">{achievement.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Responsibilities */}
                  <div className="p-6">
                    <h4 className="text-sm font-semibold font-display text-primary mb-4">KEY RESPONSIBILITIES</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Skills Used */}
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <h4 className="text-sm font-semibold font-display text-primary mb-3">SKILLS USED</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-lg bg-secondary border border-primary/20 text-primary text-xs font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold font-display text-center mb-8">
                KEY <span className="gradient-text">ACHIEVEMENTS</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="glass-card p-6 rounded-xl text-center hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-display mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
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

export default ExperiencePage;