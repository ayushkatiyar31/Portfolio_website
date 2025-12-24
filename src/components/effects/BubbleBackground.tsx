import { motion } from "framer-motion";

const BubbleBackground = () => {
  // Elegant floating orbs with varied sizes and colors
  const orbs = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 3,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 20,
    type: i % 4,
  }));

  const getOrbColor = (type: number) => {
    const colors = [
      "hsl(var(--premium-blue) / 0.12)",
      "hsl(var(--premium-purple) / 0.1)",
      "hsl(var(--premium-teal) / 0.08)",
      "hsl(var(--premium-rose) / 0.08)",
    ];
    return colors[type];
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Premium mesh gradient */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture" />
      
      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      {/* Floating orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.left}%`,
            bottom: -orb.size * 2,
            background: `radial-gradient(circle at 30% 30%, ${getOrbColor(orb.type)}, transparent 70%)`,
            boxShadow: `0 0 ${orb.size * 2}px ${getOrbColor(orb.type)}`,
          }}
          animate={{
            y: [0, -window.innerHeight - orb.size - 200],
            x: [0, Math.sin(orb.id * 0.5) * 40],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Large ambient glow orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "hsl(var(--premium-blue) / 0.08)" }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "hsl(var(--premium-purple) / 0.08)" }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default BubbleBackground;
