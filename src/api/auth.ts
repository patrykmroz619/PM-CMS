import { getRefreshToken, setTokens } from "@utils/token";
import { api } from ".";

export const signIn = (signInData: SignInFormData) =>
  api.post<SignInApiResponseData>("login", signInData);

export const signUp = (signUpData: SignUpFormData) =>
  api.post<SignUpApiResponseData>("register", signUpData);

export const refreshActiveToken = (): Promise<string> => {
  return api
    .post<JsonWebTokens>(
      "refresh",
      {},
      {
        headers: {
          Authorization: "Bearer " + getRefreshToken()
        }
      }
    )
    .then((response) => {
      setTokens(response.data);
      return response.data.activeToken;
    })
    .catch(() => {
      return "";
    });
};
