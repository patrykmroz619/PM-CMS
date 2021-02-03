export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const REFRESH_TOKEN = "REFRESH_TOKEN";

const setAccessToken = (token: string) => window.localStorage.setItem(ACCESS_TOKEN, token);

const setRefreshToken = (token: string) => window.localStorage.setItem(REFRESH_TOKEN, token);

export const setTokens = ({ accessToken, refreshToken }: JsonWebTokens) => {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
};

export const removeTokens = () => {
  window.localStorage.removeItem(ACCESS_TOKEN);
  window.localStorage.removeItem(REFRESH_TOKEN);
};

export const getAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN);

export const getRefreshToken = () => window.localStorage.getItem(REFRESH_TOKEN);
