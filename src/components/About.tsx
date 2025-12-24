import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Code2, Cpu, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "B.Tech in Computer Science",
    description: "Currently pursuing my degree with focus on software engineering and web technologies.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Full-Stack Development",
    description: "Started building production-ready applications with React, Node.js, and modern technologies.",
    icon: Code2,
  },
  {
    year: "2022",
    title: "Programming Journey",
    description: "Began learning web development and fell in love with creating digital experiences.",
    icon: Target,
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]" />

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
              <Cpu className="w-4 h-4" />
              ./about-me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              CRAFTING DIGITAL <span className="gradient-text">EXPERIENCES</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate full-stack developer with a keen eye for design and a love for clean, efficient code.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card p-8 rounded-xl border-l-2 border-l-primary">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-display mb-2">WHO I AM</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm Ayush Katiyar, a B.Tech Computer Science student with a burning passion for building 
                      exceptional web applications. I believe in writing clean, maintainable code and creating 
                      intuitive user experiences.
                    </p>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <h3 className="text-xl font-semibold font-display mb-2">MY MISSION</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To leverage technology to solve real-world problems and create products that positively 
                    impact people's lives. I'm constantly learning and evolving to stay at the forefront of 
                    web development.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "10+", label: "Projects" },
                  { value: "15+", label: "Technologies" },
                  { value: "2+", label: "Years Exp" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="glass-card p-6 rounded-xl text-center border border-primary/20 hover:border-primary/50 transition-colors group"
                  >
                    <p className="text-3xl font-bold gradient-text font-display mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground font-mono">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                    className="relative pl-20"
                  >
                    {/* Icon */}
                    <div className="absolute left-4 top-0 w-8 h-8 rounded-lg bg-background border-2 border-primary flex items-center justify-center neon-glow">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>

                    <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors group">
                      <span className="text-sm font-mono text-primary">{item.year}</span>
                      <h4 className="text-lg font-semibold font-display mt-1 mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;