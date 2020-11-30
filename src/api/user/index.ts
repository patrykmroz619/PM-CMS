import apiWithTokenHandling from "../withTokenHandling";

export const getAuthUser = () => apiWithTokenHandling.get<UserData>("activeUser");
