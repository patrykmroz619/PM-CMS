import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CURRENT_PROJECT_SET } from "store/constants/project";

type CurrentProjectState = {
  loading: boolean;
  error?: string;
  data?: CurrentProject;
  selectedModelId: string | null;
};

const initialState: CurrentProjectState = {
  loading: false,
  selectedModelId: null
};

const currentProjectSlice = createSlice({
  name: "currentProject",
  initialState,
  reducers: {
    selectModel(state, action: PayloadAction<string>) {
      state.selectedModelId = action.payload;
    },
    addContentModel(state, action: PayloadAction<ContentModel>) {
      state.data?.contentModels.push(action.payload);
    },
    addField(state, action: PayloadAction<ContentField>) {
      if (state.data) {
        const models = state.data.contentModels;
        const selectedModelIndex = models.findIndex((model) => model.id === state.selectedModelId);

        models[selectedModelIndex].fields.push(action.payload);
      }
    }
  },
  extraReducers: {
    [`${CURRENT_PROJECT_SET.PENDING}`]: (state) => {
      state.loading = true;
      delete state.data;
      delete state.error;
    },
    [`${CURRENT_PROJECT_SET.FULFILLED}`]: (state, action: PayloadAction<CurrentProject>) => {
      state.loading = false;
      delete state.error;
      state.data = action.payload;
    },
    [`${CURRENT_PROJECT_SET.REJECTED}`]: (state, action: PayloadAction<ApiError>) => {
      state.loading = false;
      state.error = action.payload?.error.description;
    }
  }
});

export default currentProjectSlice;
