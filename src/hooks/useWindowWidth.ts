import { useLayoutEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    resize();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return width;
};
