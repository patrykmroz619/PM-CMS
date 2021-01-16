import { useEffect } from "react";

type useDetectOutsideClickHookType = (
  ref: React.RefObject<HTMLElement>,
  action: () => void
) => void;

export const useDetectOutsideClick: useDetectOutsideClickHookType = (ref, action) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        action();
      }
    };
    window.addEventListener("click", listener);
    return () => {
      window.removeEventListener("click", listener);
    };
  }, [ref.current]);
};
