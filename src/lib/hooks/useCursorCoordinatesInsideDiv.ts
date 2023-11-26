import { useState, useEffect, MutableRefObject } from "react";

export const useCursorCoordinatesInsideDiv = (
  elementRef: MutableRefObject<HTMLDivElement | null>
) => {
  const [cursorCoordinates, setCursorCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [elementSize, setElementSize] = useState({
    height: 0,
    width: 0,
  });
  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const handleMouseMove = (e: MouseEvent) => {
        const clientRect = element.getBoundingClientRect();
        setElementSize({ height: clientRect.height, width: clientRect.width });

        setCursorCoordinates({
          x: e.clientX - clientRect.left,
          y: e.clientY - clientRect.top,
        });
      };

      element.addEventListener("mousemove", handleMouseMove);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [elementRef]);

  return { cursorCoordinates, elementSize };
};

export default useCursorCoordinatesInsideDiv;
