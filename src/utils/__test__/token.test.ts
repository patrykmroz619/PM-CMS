import { getActiveToken, getRefreshToken, setTokens, ACTIVE_TOKEN, REFRESH_TOKEN } from "../token";

beforeEach(() => {
  const store: Record<string, string> = {};

  jest.spyOn(Storage.prototype, "getItem").mockImplementation((key) => {
    return store[key] || null;
  });

  jest.spyOn(Storage.prototype, "setItem").mockImplementation((key, value) => {
    store[key] = value;
  });
});

afterEach(() => {
  jest.resetAllMocks();
});

describe("Token utils", () => {
  const tokens: JsonWebTokens = {
    activeToken: "active",
    refreshToken: "refresh"
  };

  test("add tokens to local storage", () => {
    setTokens(tokens);

    expect(localStorage.getItem(ACTIVE_TOKEN)).toBe(tokens.activeToken);
    expect(localStorage.getItem(REFRESH_TOKEN)).toBe(tokens.refreshToken);
  });

  test("get active token from local storage", () => {
    localStorage.setItem(ACTIVE_TOKEN, tokens.activeToken);

    expect(getActiveToken()).toBe(tokens.activeToken);
  });

  test("get refreshToken from local storage", () => {
    localStorage.setItem(REFRESH_TOKEN, tokens.refreshToken);

    expect(getRefreshToken()).toBe(tokens.refreshToken);
  });

  test("return null if tries get active token when there isn't one in local storage", () => {
    expect(getActiveToken()).toBeNull();
  });

  test("return null if tries get refresh token when there isn't one in local storage", () => {
    expect(getActiveToken()).toBeNull();
  });
});
