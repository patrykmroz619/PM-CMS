import { createAsyncThunk } from "@reduxjs/toolkit";
import * as Sentry from "@sentry/react";

import { CURRENT_PROJECT_SET, PROJECTS_GET } from "../constants/project";
import * as projectApi from "@api/projects";
import * as contentModelApi from "@api/contentModels";
import { isApiError, isAxiosError } from "@utils";

export const getProjects = createAsyncThunk(
  PROJECTS_GET.CONST,
  async (args: void, { rejectWithValue }) => {
    try {
      const response = await projectApi.getProjects();
      return response.data.projects;
    } catch (e: unknown) {
      if (isAxiosError(e)) {
        const errorData = e.response?.data;
        if (isApiError(errorData)) {
          rejectWithValue(errorData);
        }
      }
      Sentry.captureException(e);
      throw new Error("Projects fetching error");
    }
  }
);

export const setCurrentProject = createAsyncThunk(
  CURRENT_PROJECT_SET.CONST,
  async (projectId: string, { rejectWithValue }) => {
    try {
      const { data: project } = await projectApi.getProjectById(projectId);

      const { data: contentModels } = await contentModelApi.getContentModels(project.id);

      const currentProject: CurrentProject = Object.assign(project, { contentModels, records: [] });

      return currentProject;
    } catch (e) {
      if (isAxiosError(e)) {
        const errorData = e.response?.data;
        if (isApiError(errorData)) {
          rejectWithValue(errorData);
        }
      }
      Sentry.captureException(e);
      throw new Error("The single project fetching error");
    }
  }
);
