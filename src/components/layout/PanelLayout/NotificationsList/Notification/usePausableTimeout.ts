import { useState, useEffect, RefObject } from "react";

import { PausableTimeout } from "@utils";

type Callback = () => void;

type UsePausableTimeoutType = (
  callback: Callback,
  time: number,
  ref: RefObject<HTMLElement>
) => boolean;

const usePausableTimeout: UsePausableTimeoutType = (callback, time, ref) => {
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const pausableTimeout = new PausableTimeout(callback, time);

      pausableTimeout.start();

      const pause = () => {
        pausableTimeout.pause();
        setPause(true);
      };

      const resume = () => {
        pausableTimeout.resume();
        setPause(false);
      };

      ref.current.addEventListener("mouseenter", pause);
      ref.current.addEventListener("mouseleave", resume);

      return () => {
        if (ref.current) {
          ref.current.removeEventListener("mouseenter", pause);
          ref.current.removeEventListener("mouseleave", resume);
        }
      };
    }
  }, [ref]);
  return pause;
};

export default usePausableTimeout;
