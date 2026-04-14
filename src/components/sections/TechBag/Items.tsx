"use client";

import { SKILLS } from "@/constants";
import Item from "@/components/sections/TechBag/Item";
import { useCursorCoordinatesInsideDiv } from "@/hooks";
import { useRef, useState, useEffect } from "react";

const Items = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { cursorCoordinates, elementSize } =
    useCursorCoordinatesInsideDiv(divRef);

  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });
  const animRef = useRef<number>();
  const currentPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    targetPos.current = { x: cursorCoordinates.x, y: cursorCoordinates.y };
  }, [cursorCoordinates]);

  useEffect(() => {
    const animate = () => {
      const lerp = 0.16;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerp;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerp;
      setDisplayPos({ x: currentPos.current.x, y: currentPos.current.y });
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div
      className="max-w-screen-md flex flex-wrap justify-center gap-3 relative mx-auto"
      ref={divRef}
    >
      {SKILLS.map((skill) => (
        <Item
          key={skill.name}
          item={skill}
          mouseCoordinatesFromBL={{
            x: displayPos.x,
            y: elementSize.height - displayPos.y,
          }}
        />
      ))}
    </div>
  );
};

export default Items;
