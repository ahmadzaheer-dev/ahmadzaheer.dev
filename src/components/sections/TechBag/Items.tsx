"use client";

import { SKILLS } from "@/constants";
import Item from "@/components/sections/TechBag/Item";
import { useCursorCoordinatesInsideDiv } from "@/hooks";
import { useRef } from "react";

const Items = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { cursorCoordinates, elementSize } =
    useCursorCoordinatesInsideDiv(divRef);

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
            x: cursorCoordinates.x,
            y: elementSize.height - cursorCoordinates.y,
          }}
        />
      ))}
    </div>
  );
};

export default Items;
