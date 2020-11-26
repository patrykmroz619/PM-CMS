const ACTIVE_TOKEN = "ACTIVE_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";

const setActiveToken = (token: string) => window.localStorage.setItem(ACTIVE_TOKEN, token);

const setRefreshToken = (token: string) => window.localStorage.setItem(REFRESH_TOKEN, token);

export const setTokens = ({ activeToken, refreshToken }: JsonWebTokens) => {
  setActiveToken(activeToken);
  setRefreshToken(refreshToken);
};

export const getActiveToken = () => window.localStorage.getItem(ACTIVE_TOKEN);

export const getRefreshToken = () => window.localStorage.getItem(REFRESH_TOKEN);
