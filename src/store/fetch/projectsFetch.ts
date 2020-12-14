import { createAsyncThunk } from "@reduxjs/toolkit";
import { PROJECTS_GET } from "../constants/project";
import * as api from "@api/projects";

export const getProjects = createAsyncThunk(
  PROJECTS_GET.CONST,
  async (args: void, { rejectWithValue }) => {
    try {
      const response = await api.getProjects();
      return response.data.projects;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
