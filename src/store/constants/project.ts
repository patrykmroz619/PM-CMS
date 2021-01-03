export const PROJECTS_GET: ThunkConstants = {
  CONST: "projects/get",
  PENDING: "projects/get/pending",
  FULFILLED: "projects/get/fulfilled",
  REJECTED: "projects/get/rejected"
} as const;

export const CURRENT_PROJECT_SET: ThunkConstants = {
  CONST: "currentProject/set",
  PENDING: "currentProject/set/pending",
  FULFILLED: "currentProject/set/fulfilled",
  REJECTED: "currentProject/set/rejected"
} as const;
