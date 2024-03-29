import { endpoint } from "@api/endpoint";
import apiWithTokenHandling from "@api/withTokenHandling";
import { redirectToLogin, tokenHandler } from "@utils";
import api from "..";

export const signIn = (signInData: SignInFormData) =>
  api.post<SignInApiResponseData>(endpoint.login, signInData);

export const signUp = (signUpData: SignUpFormData) =>
  api.post<SignUpApiResponseData>(endpoint.register, signUpData);

export const logout = () => apiWithTokenHandling.post(endpoint.logout);

export const refreshActiveToken = (): Promise<string> => {
  return api
    .post<JsonWebTokens>(
      endpoint.refresh,
      {},
      {
        headers: {
          Authorization: "Bearer " + tokenHandler.getRefreshToken()
        }
      }
    )
    .then((response) => {
      tokenHandler.setTokens(response.data);
      return response.data.accessToken;
    })
    .catch(() => {
      redirectToLogin();
      return "";
    });
};
