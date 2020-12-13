import { endpoint } from "@api/endpoint";
import { getRefreshToken, setTokens } from "@utils/token";
import api from "..";

export const signIn = (signInData: SignInFormData) =>
  api.post<SignInApiResponseData>(endpoint.login, signInData);

export const signUp = (signUpData: SignUpFormData) =>
  api.post<SignUpApiResponseData>(endpoint.register, signUpData);

export const refreshActiveToken = (): Promise<string> => {
  return api
    .post<JsonWebTokens>(
      endpoint.refresh,
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
    .catch((e) => {
      console.log("Refresh token is invalid", { e }); // For development
      return "";
    });
};
