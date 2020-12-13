import { createSlice } from "@reduxjs/toolkit";

type CurrentProjectState = {
  loading: boolean;
  error?: string;
  data?: Project;
};

const initialState: CurrentProjectState = {
  loading: false
};

const currentProjectSlice = createSlice({
  name: "currentProject",
  initialState,
  reducers: {}
});

export default currentProjectSlice;
