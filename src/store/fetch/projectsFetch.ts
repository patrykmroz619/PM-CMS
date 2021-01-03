import { createAsyncThunk } from "@reduxjs/toolkit";
import { CURRENT_PROJECT_SET, PROJECTS_GET } from "../constants/project";
import * as projectApi from "@api/projects";
import * as contentModelApi from "@api/contentModels";

export const getProjects = createAsyncThunk(
  PROJECTS_GET.CONST,
  async (args: void, { rejectWithValue }) => {
    try {
      const response = await projectApi.getProjects();
      return response.data.projects;
    } catch (e) {
      return rejectWithValue(e);
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
      return rejectWithValue(e);
    }
  }
);
