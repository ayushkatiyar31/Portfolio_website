import { useEffect, useState, useCallback } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const updatePosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);
    window.addEventListener("mousemove", updatePosition, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, [updatePosition]);

  if (!isVisible) return null;

  return (
    <>
      {/* Simple cursor ring - using CSS transform for performance */}
      <div
        className="fixed pointer-events-none z-[9999] w-8 h-8 rounded-full border border-primary/40 transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Center dot */}
      <div
        className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-primary"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
