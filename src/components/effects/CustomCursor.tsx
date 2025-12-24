import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail particle
      trailId++;
      setTrail(prev => [...prev.slice(-8), { x: e.clientX, y: e.clientY, id: trailId }]);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.closest('a') || target.closest('button') ||
          target.classList.contains('clickable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Trail particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: point.x,
            top: point.y,
            width: 6 + index * 0.5,
            height: 6 + index * 0.5,
            background: `hsl(24 95% 60% / ${0.1 + index * 0.05})`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}

      {/* Main cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full border-2 border-primary"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: "-50%",
          y: "-50%",
          width: isHovering ? 50 : isClicking ? 30 : 40,
          height: isHovering ? 50 : isClicking ? 30 : 40,
          borderColor: isHovering ? "hsl(340 85% 65%)" : "hsl(24 95% 60%)",
          backgroundColor: isClicking ? "hsl(24 95% 60% / 0.2)" : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: "-50%",
          y: "-50%",
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background: "radial-gradient(circle, hsl(24 95% 60% / 0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: "-50%",
          y: "-50%",
          width: isHovering ? 100 : 80,
          height: isHovering ? 100 : 80,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />
    </>
  );
};

export default CustomCursor;
