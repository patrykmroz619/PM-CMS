import { P } from "@common";

export const breakpoints = {
  mobile: {
    s: 320,
    m: 360,
    l: 420,
    xl: 460
  },
  tablet: {
    s: 500,
    m: 600,
    l: 700,
    xl: 900
  },
  descop: {
    s: 1200,
    m: 1320
  }
} as const;

const media = (breakpoint: number) => `@media (min-width: calc(${breakpoint}px - 0.02px))`;

export default media;
