import { motion } from "framer-motion";

const BubbleBackground = () => {
  // Reduced number of orbs for better performance
  const orbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 20 + 25,
    type: i % 4,
  }));

  const getOrbColor = (type: number) => {
    const colors = [
      "hsl(var(--premium-blue) / 0.1)",
      "hsl(var(--premium-purple) / 0.08)",
      "hsl(var(--premium-teal) / 0.06)",
      "hsl(var(--premium-rose) / 0.06)",
    ];
    return colors[type];
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static mesh gradient - no animation */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Static gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      {/* Minimal floating orbs with CSS animations instead of framer-motion */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full animate-float"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.left}%`,
            top: `${20 + orb.id * 10}%`,
            background: getOrbColor(orb.type),
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}

      {/* Static ambient glow - no animation */}
      <div
        className="absolute top-1/4 -left-32 w-80 h-80 rounded-full blur-3xl opacity-50"
        style={{ background: "hsl(var(--premium-blue) / 0.06)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl opacity-40"
        style={{ background: "hsl(var(--premium-purple) / 0.06)" }}
      />
    </div>
  );
};

export default BubbleBackground;
