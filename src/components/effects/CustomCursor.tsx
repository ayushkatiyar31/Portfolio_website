import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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
      {/* Main cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full border border-primary/50"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: "-50%",
          y: "-50%",
          width: isHovering ? 48 : isClicking ? 24 : 32,
          height: isHovering ? 48 : isClicking ? 24 : 32,
          borderColor: isHovering 
            ? "hsl(var(--accent) / 0.6)" 
            : "hsl(var(--primary) / 0.5)",
          backgroundColor: isClicking 
            ? "hsl(var(--primary) / 0.15)" 
            : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.5,
        }}
      />

      {/* Center dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background: "var(--gradient-primary)",
        }}
        animate={{
          x: "-50%",
          y: "-50%",
          width: isHovering ? 6 : 4,
          height: isHovering ? 6 : 4,
          scale: isClicking ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
      />

      {/* Subtle glow */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
        }}
        animate={{
          x: "-50%",
          y: "-50%",
          width: isHovering ? 80 : 60,
          height: isHovering ? 80 : 60,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
        }}
      />
    </>
  );
};

export default CustomCursor;
