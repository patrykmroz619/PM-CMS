import { useState } from "react";

export const useFilter = <T extends Pick<T, string>>(
  items: T[],
  filterBy: keyof T
): [T[], (value: unknown) => void] => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [isFilterUsed, setIsFilterUsed] = useState(false);

  const handleFilter = (value: unknown) => {
    const filterResult = items.filter((item) => {
      const itemValue = item[filterBy];
      if (typeof itemValue === "string") {
        return itemValue.toLowerCase().includes(String(value).toLowerCase());
      }
      return false;
    });
    if (!isFilterUsed) {
      setIsFilterUsed(true);
    }
    setFilteredItems(filterResult);
  };

  return [isFilterUsed ? filteredItems : items, handleFilter];
};
