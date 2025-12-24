import { motion } from "framer-motion";

const BubbleBackground = () => {
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 20,
    type: i % 4,
  }));

  const getBubbleColor = (type: number) => {
    const colors = [
      "hsl(var(--premium-blue) / 0.25)",
      "hsl(var(--premium-purple) / 0.2)",
      "hsl(var(--premium-teal) / 0.2)",
      "hsl(var(--premium-rose) / 0.15)",
    ];
    return colors[type];
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static mesh gradient */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Floating bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            background: `radial-gradient(circle at 30% 30%, ${getBubbleColor(bubble.type)}, transparent 70%)`,
            boxShadow: `inset 0 0 20px ${getBubbleColor(bubble.type)}, 0 0 30px ${getBubbleColor(bubble.type)}`,
            border: `1px solid ${getBubbleColor(bubble.type)}`,
          }}
          initial={{ 
            y: "100vh", 
            opacity: 0,
            scale: 0.5 
          }}
          animate={{ 
            y: "-100vh", 
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.5, 1, 1, 0.8]
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Ambient glow effects */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: "hsl(var(--premium-blue) / 0.3)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-25"
        style={{ background: "hsl(var(--premium-purple) / 0.3)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
        style={{ background: "hsl(var(--premium-teal) / 0.2)" }}
      />
    </div>
  );
};

export default BubbleBackground;
