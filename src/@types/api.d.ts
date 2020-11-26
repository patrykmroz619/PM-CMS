declare type JsonWebTokens = {
  activeToken: string;
  refreshToken: string;
};

declare type SignInApiResponseData = {
  userData: {
    uid: string;
    email: string;
    name: string | null;
    surname: string | null;
    company: string | null;
  };
  tokens: JsonWebTokens;
};

declare type SignUpApiResponseData = SignInApiResponseData;
