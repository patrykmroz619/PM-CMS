import { useState } from "react";

export const useFilter = <T extends Pick<T, string>>(
  items: T[],
  filterBy: keyof T
): [T[], (value: unknown) => void] => {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleFilter = (value: unknown) => {
    const filterResult = items.filter((item) => {
      const itemValue = item[filterBy];
      if (typeof itemValue === "string") {
        return itemValue.includes(value as string);
      }
      return false;
    });
    setFilteredItems(filterResult);
  };

  return [filteredItems, handleFilter];
};
