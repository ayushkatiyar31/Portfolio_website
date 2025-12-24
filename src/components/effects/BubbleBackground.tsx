import { motion } from "framer-motion";

const BubbleBackground = () => {
  const bubbles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 12 + 4,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 12 + 15,
    color: i % 3 === 0 
      ? "hsl(24 95% 60% / 0.15)" 
      : i % 3 === 1 
        ? "hsl(340 85% 65% / 0.12)" 
        : "hsl(38 100% 55% / 0.1)",
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Floating particles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: -bubble.size,
            background: `radial-gradient(circle at 30% 30%, ${bubble.color}, transparent 70%)`,
            boxShadow: `0 0 ${bubble.size}px ${bubble.color}`,
          }}
          animate={{
            y: [0, -window.innerHeight - bubble.size - 200],
            x: [0, Math.sin(bubble.id) * 30],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
