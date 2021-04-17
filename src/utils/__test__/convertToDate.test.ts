import { convertToDate } from "../convertToDate";

describe("convertToDate function", () => {
  test("converts timestamp to date", () => {
    const date = new Date(2000, 10, 10);
    const timestampInMiliseconds = date.getTime();
    const timestampInSeconds = Math.floor(timestampInMiliseconds / 1000);

    expect(convertToDate(timestampInSeconds)).toBe("10.11.2000");
  });
});
