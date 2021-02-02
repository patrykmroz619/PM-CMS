import apiWithTokenHandling from "../withTokenHandling";
import { endpoint } from "@api/endpoint";

export const getAuthUser = () => apiWithTokenHandling.get<UserData>(endpoint.users);

export const deleteUser = () => apiWithTokenHandling.delete(endpoint.users);
