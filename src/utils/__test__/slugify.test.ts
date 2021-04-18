import { slugify } from "../slugify";

describe("Slugify util", () => {
  test("transform passed strings on slug", () => {
    expect(slugify("sadas asdasd")).toBe("sadas-asdasd");
    expect(slugify("a a")).toBe("a-a");
    expect(slugify("bbb ccc 1")).toBe("bbb-ccc-1");
    expect(slugify("asd!@#-")).toBe("asd!@#-");
  });
});
