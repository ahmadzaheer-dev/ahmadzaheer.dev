"use client";
import { useRef } from "react";
import { useCursorCoordinatesInsideDiv } from "@/lib/hooks";

const CircleTrackingCursor = ({ children }: { children: React.ReactNode }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { cursorCoordinates, elementSize } =
    useCursorCoordinatesInsideDiv(divRef);

  return (
    <div ref={divRef} className="relative">
      <div
        className="absolute h-8 w-8 bg-primary-green rounded-full"
        style={{
          bottom: elementSize.height - cursorCoordinates.y - 16,
          left: cursorCoordinates.x - 16,
        }}
      ></div>
      {children}
    </div>
  );
};

export default CircleTrackingCursor;
