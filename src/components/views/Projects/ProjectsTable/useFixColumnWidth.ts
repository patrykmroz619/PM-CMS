import { useLayoutEffect } from "react";

const useFixColumnWidth = (tableRef: React.RefObject<HTMLTableElement>) => {
  useLayoutEffect(() => {
    if (tableRef.current) {
      const { current: table } = tableRef;

      const tableRow = table.querySelector("tbody tr");
      if (!tableRow) return;

      const bodyCells = tableRow.querySelectorAll("td");
      const headCells = table.querySelectorAll("th");

      const resizeListener = () => {
        bodyCells.forEach((cell, index) => {
          headCells[index].style.width = cell.offsetWidth + "px";
        });
      };

      window.addEventListener("resize", resizeListener);
      resizeListener();

      return () => window.removeEventListener("resize", resizeListener);
    }
  }, []);
};

export default useFixColumnWidth;
