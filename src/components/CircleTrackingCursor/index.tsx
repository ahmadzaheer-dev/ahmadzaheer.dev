"use client";
import { useRef, useState, useEffect } from "react";
import { useCursorCoordinatesInsideDiv } from "@/lib/hooks";

const CircleTrackingCursor = ({ children }: { children: React.ReactNode }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { cursorCoordinates, elementSize } =
    useCursorCoordinatesInsideDiv(divRef);

  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });
  const [morphState, setMorphState] = useState({ speed: 0, angle: 0 });

  const animRef = useRef<number>();
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    targetPos.current = { x: cursorCoordinates.x, y: cursorCoordinates.y };
  }, [cursorCoordinates]);

  useEffect(() => {
    const animate = () => {
      const lerp = 0.16;
      const prevX = currentPos.current.x;
      const prevY = currentPos.current.y;

      currentPos.current.x +=
        (targetPos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y +=
        (targetPos.current.y - currentPos.current.y) * lerp;

      const dx = currentPos.current.x - prevX;
      const dy = currentPos.current.y - prevY;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      setDisplayPos({ x: currentPos.current.x, y: currentPos.current.y });
      setMorphState({ speed, angle });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const SIZE = 30;

  // Clamp stretch to [0, 1] based on movement speed
  const speedFactor = Math.min(morphState.speed / 7, 1);

  // Stretch along movement direction, compress perpendicular — both ends stay oval
  const scaleX = 1 + speedFactor * 0.85;
  const scaleY = Math.max(1 - speedFactor * 0.32, 0.62);

  return (
    <div ref={divRef} className="relative">
      {/* Water droplet */}
      <div
        style={{
          position: "absolute",
          width: SIZE,
          height: SIZE,
          bottom: elementSize.height - displayPos.y - SIZE / 2,
          left: displayPos.x - SIZE / 2,
          transform: `rotate(${morphState.angle}deg) scaleX(${scaleX}) scaleY(${scaleY})`,
          borderRadius: "50%",
          background: "rgba(52, 211, 153, 1)",
          mixBlendMode: "exclusion",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      >
      </div>

      {children}
    </div>
  );
};

export default CircleTrackingCursor;
