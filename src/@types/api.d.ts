declare type JsonWebTokens = {
  accessToken: string;
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

declare type GetProjectsApiResponseData = {
  projects: Project[];
};

declare type ApiError = {
  statusCode: number;
  error: {
    type: string;
    description: string;
  };
};

declare type GetRecordsApiResponseData = {
  records: RecordObject[];
};
