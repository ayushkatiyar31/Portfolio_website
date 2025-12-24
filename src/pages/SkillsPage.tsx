import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import PageTransition from "@/components/layout/PageTransition";
import SolarSystem from "@/components/three/SolarSystem";
import BubbleBackground from "@/components/effects/BubbleBackground";
import { Code, Server, Wrench, Layers } from "lucide-react";

const skillCategories = [
  {
    name: "Languages",
    icon: Code,
    skills: [
      { name: "C/C++", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    name: "Libraries/Frameworks",
    icon: Layers,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux", level: 75 },
    ],
  },
  {
    name: "Tools & Databases",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "JWT Auth", level: 80 },
    ],
  },
];

const SkillsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <PageTransition>
      <Helmet>
        <title>Skills | Ayush Katiyar</title>
        <meta name="description" content="Technical skills of Ayush Katiyar - Proficient in C++, JavaScript, React, Node.js, MongoDB, Express.js, and more." />
      </Helmet>

      <BubbleBackground />
      <SolarSystem />

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]" />

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
                <Server className="w-4 h-4" />
                ./skills
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                TECHNICAL <span className="gradient-text">SKILLS</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit built through real-world projects and continuous learning.
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
                  className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium font-mono text-sm transition-all ${
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

            {/* Skills Display */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 rounded-2xl border-t-4 border-t-primary"
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
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full relative"
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

            {/* All Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="text-xl font-bold font-display text-center mb-8">
                ALL TECHNOLOGIES
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {["React", "Node.js", "Express.js", "MongoDB", "MySQL", "JavaScript", "C++", "Tailwind CSS", "Redux", "JWT", "Git", "GitHub", "REST APIs", "HTML5", "CSS3"].map(
                  (tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="px-4 py-2 rounded-lg glass-card text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
                    >
                      {`<${tech}/>`}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default SkillsPage;