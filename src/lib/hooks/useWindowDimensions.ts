import { useState, useEffect } from "react";

type WindowDimensions = {
  width: number | null;
  height: number | null;
};

const useWindowDimensions = () => {
  const windowAvailable = typeof window !== "undefined";

  const getWindowDimensions = (): WindowDimensions => {
    const width = windowAvailable ? window.innerWidth : null;
    const height = windowAvailable ? window.innerHeight : null;
    return { height, width };
  };

  const [dimensions, setDimensions] = useState<WindowDimensions>(
    getWindowDimensions()
  );

  useEffect(() => {
    if (windowAvailable) {
      const handleResize = () => {
        setDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
    // eslint-disable-next-line
  }, [windowAvailable]);

  return dimensions;
};

export default useWindowDimensions;
