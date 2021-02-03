import apiWithTokenHandling from "../withTokenHandling";
import { endpoint } from "@api/endpoint";

export const getAuthUser = () => apiWithTokenHandling.get<UserData>(endpoint.users);

export const changePassword = (data: PasswordChangeFormData) =>
  apiWithTokenHandling.put<UserData>(endpoint.password, data);

export const deleteUser = () => apiWithTokenHandling.delete(endpoint.users);
