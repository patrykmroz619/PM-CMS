export const AUTH: ThunkConstants = {
  CONST: "user/auth",
  PENDING: "user/auth/pending",
  FULFILLED: "user/auth/fulfilled",
  REJECTED: "user/auth/rejected"
} as const;

export const LOGOUT: ThunkConstants = {
  CONST: "user/logout",
  PENDING: "user/logout/pending",
  FULFILLED: "user/logout/fulfilled",
  REJECTED: "user/logout/rejected"
} as const;
