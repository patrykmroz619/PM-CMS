import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useFilter } from "../useFilter";

describe("useFilter hook", () => {
  const objects = [
    {
      value: "aaa"
    },
    {
      value: "abbb"
    },
    {
      value: "Accc"
    },
    {
      value: "ccc"
    },
    {
      value: "ddd"
    }
  ];

  const filterValue = "a";

  const filteredObjects = objects.filter((obj) =>
    obj.value.toLowerCase().includes(filterValue.toLowerCase())
  );

  test("returns passed items when filter has't been used", () => {
    const { result } = renderHook(() => useFilter(objects, "value"));

    const [filteredItems] = result.current;

    expect(filteredItems).toEqual(objects);
  });

  test("returns filtered items", () => {
    const { result } = renderHook(() => useFilter(objects, "value"));

    const [, handleFilter] = result.current;

    act(() => handleFilter(filterValue));

    const [filteredItems] = result.current;

    expect(filteredItems).toEqual(filteredObjects);
  });
});
