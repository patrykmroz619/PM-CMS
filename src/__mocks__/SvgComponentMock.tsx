import React from "react";

const SVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} data-testid="svg"></svg>
);

export default SVG;
