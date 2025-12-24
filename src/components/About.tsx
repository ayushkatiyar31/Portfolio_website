import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Code2, Sparkles } from "lucide-react";

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(38_92%_50%/0.05)_0%,transparent_50%)]" />

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
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate full-stack developer with a keen eye for design and a love for clean, efficient code.
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
              <div className="glass-card p-8 rounded-3xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I'm Ayush Katiyar, a B.Tech Computer Science student with a burning passion for building 
                      exceptional web applications. I believe in writing clean, maintainable code and creating 
                      intuitive user experiences.
                    </p>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <h3 className="text-xl font-semibold mb-2">My Mission</h3>
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
                    className="glass-card p-6 rounded-2xl text-center"
                  >
                    <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
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
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

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
                    <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>

                    <div className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-colors">
                      <span className="text-sm font-mono text-primary">{item.year}</span>
                      <h4 className="text-lg font-semibold mt-1 mb-2">{item.title}</h4>
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