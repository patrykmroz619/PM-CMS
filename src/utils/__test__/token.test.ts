import { getAccessToken, getRefreshToken, setTokens, ACCESS_TOKEN, REFRESH_TOKEN } from "../token";

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
    accessToken: "access",
    refreshToken: "refresh"
  };

  test("add tokens to local storage", () => {
    setTokens(tokens);

    expect(localStorage.getItem(ACCESS_TOKEN)).toBe(tokens.accessToken);
    expect(localStorage.getItem(REFRESH_TOKEN)).toBe(tokens.refreshToken);
  });

  test("get access token from local storage", () => {
    localStorage.setItem(ACCESS_TOKEN, tokens.accessToken);

    expect(getAccessToken()).toBe(tokens.accessToken);
  });

  test("get refreshToken from local storage", () => {
    localStorage.setItem(REFRESH_TOKEN, tokens.refreshToken);

    expect(getRefreshToken()).toBe(tokens.refreshToken);
  });

  test("return null if tries get access token when there isn't one in local storage", () => {
    expect(getAccessToken()).toBeNull();
  });

  test("return null if tries get refresh token when there isn't one in local storage", () => {
    expect(getAccessToken()).toBeNull();
  });
});
