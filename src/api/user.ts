import { apiWithTokenHandling } from ".";

export const getAuthUser = () => apiWithTokenHandling.get<UserData>("activeUser");
