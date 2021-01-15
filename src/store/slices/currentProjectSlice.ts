import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CURRENT_PROJECT_SET } from "../constants/project";

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

const getCurrentModel = (project: CurrentProject, selectedModelId: string | null) => {
  const models = project.contentModels;
  const selectedModelIndex = models.findIndex((model) => model.id === selectedModelId);

  return models[selectedModelIndex];
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
        const currentModel = getCurrentModel(state.data, state.selectedModelId);

        currentModel.fields.push(action.payload);
      }
    },
    updateField(state, action: PayloadAction<ContentField>) {
      if (state.data) {
        const currentModel = getCurrentModel(state.data, state.selectedModelId);

        const updatedField = action.payload;
        for (let i = 0; i < currentModel.fields.length; i++) {
          if (currentModel.fields[i].id === updatedField.id) {
            currentModel.fields[i] = updatedField;
          }
        }
      }
    },
    deleteField(state, action: PayloadAction<{ fieldId: string }>) {
      if (state.data) {
        const currentModel = getCurrentModel(state.data, state.selectedModelId);

        const deletedFieldId = action.payload.fieldId;
        for (let i = 0; i < currentModel.fields.length; i++) {
          if (currentModel.fields[i].id === deletedFieldId) {
            currentModel.fields.splice(i, 1);
          }
        }
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
      state.selectedModelId = action.payload.contentModels[0].id || null;
    },
    [`${CURRENT_PROJECT_SET.REJECTED}`]: (state, action: PayloadAction<ApiError>) => {
      state.loading = false;
      state.error = action.payload?.error.description;
    }
  }
});

export default currentProjectSlice;
