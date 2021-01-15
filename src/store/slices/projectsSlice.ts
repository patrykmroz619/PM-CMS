import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PROJECTS_GET } from "../constants/project";

type ProjectsState = {
  loading: boolean;
  error?: string;
  data: Project[];
};

const initialState: ProjectsState = {
  loading: false,
  data: []
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Project>) => {
      state.data.unshift(action.payload);
    }
  },
  extraReducers: {
    [`${PROJECTS_GET.PENDING}`]: (state) => {
      state.loading = true;
      delete state.error;
      data: [];
    },
    [`${PROJECTS_GET.FULFILLED}`]: (state, action: PayloadAction<Project[]>) => {
      state.loading = false;
      delete state.error;
      state.data = action.payload;
    },
    [`${PROJECTS_GET.REJECTED}`]: (state, action: PayloadAction<ApiError>) => {
      console.log(action); // For dev
      state.loading = false;
      state.error = action.payload.error.description;
      state.data = [];
    }
  }
});

export default projectsSlice;
