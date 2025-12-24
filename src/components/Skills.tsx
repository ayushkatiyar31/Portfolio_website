import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Server, Wrench, Database } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: Code,
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
      { name: "Linux", level: 80 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg glass-card text-sm text-primary font-mono mb-4">
              <Database className="w-4 h-4" />
              ./skills
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              TECHNICAL <span className="gradient-text">ARSENAL</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built over years of learning and building real-world projects.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium font-mono transition-all ${
                  activeCategory === index
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 rounded-xl border-t-2 border-t-primary"
          >
            <div className="grid gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium font-mono group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm text-primary font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full relative overflow-hidden"
                      style={{
                        background: "linear-gradient(90deg, hsl(200 100% 50%), hsl(180 100% 50%))",
                        boxShadow: "0 0 10px hsl(200 100% 50% / 0.5)",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {["React", "Node.js", "TypeScript", "MongoDB", "Tailwind", "Git", "Docker", "AWS", "PostgreSQL", "Next.js"].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 rounded-lg glass-card text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
                >
                  {`<${tech}/>`}
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;