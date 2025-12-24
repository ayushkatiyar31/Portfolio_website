import { motion } from "framer-motion";

const BubbleBackground = () => {
  const bubbles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 8,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 12,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: -bubble.size,
            background: `radial-gradient(circle at 30% 30%, 
              hsl(200 100% 50% / 0.1), 
              hsl(270 100% 65% / 0.05), 
              transparent 70%)`,
            border: "1px solid hsl(200 100% 50% / 0.1)",
          }}
          animate={{
            y: [0, -window.innerHeight - bubble.size - 200],
            x: [0, Math.sin(bubble.id) * 50],
            rotate: [0, 360],
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