import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CURRENT_PROJECT_SET, RECORDS_GET } from "../constants/project";

type CurrentProjectState = {
  loading: boolean;
  error?: string;
  recordsLoading: boolean;
  recordsError: boolean;
  data?: CurrentProject;
  selectedModelId: string | null;
};

const initialState: CurrentProjectState = {
  loading: false,
  recordsLoading: false,
  recordsError: false,
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
    updateData(state, action: PayloadAction<Project>) {
      state.data = { ...action.payload, contentModels: state.data?.contentModels || [] };
    },
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
    },
    addRecord(state, action: PayloadAction<RecordObject>) {
      if (state.data) {
        const currentModel = getCurrentModel(state.data, state.selectedModelId);

        currentModel.records?.push(action.payload);
      }
    },
    updateRecord(state, action: PayloadAction<RecordObject>) {
      if (state.data) {
        const currentModel = getCurrentModel(state.data, state.selectedModelId);

        const updatedRecordIndex = currentModel.records?.findIndex(
          (record) => record.id === action.payload.id
        );

        if (typeof updatedRecordIndex == "number" && currentModel.records) {
          currentModel.records[updatedRecordIndex] = action.payload;
        }
      }
    },
    deleteRecord(state, action: PayloadAction<{ id: string }>) {
      if (state.data) {
        const currentModel = getCurrentModel(state.data, state.selectedModelId);

        const deletedRecordIndex = currentModel.records?.findIndex(
          (record) => record.id === action.payload.id
        );

        if (typeof deletedRecordIndex == "number") {
          currentModel.records?.splice(deletedRecordIndex, 1);
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
      state.selectedModelId = action.payload.contentModels[0]?.id || null;
    },
    [`${CURRENT_PROJECT_SET.REJECTED}`]: (state, action: PayloadAction<ApiError>) => {
      console.log(action);
      state.loading = false;
      state.error = action.payload?.error?.description;
    },
    [`${RECORDS_GET.PENDING}`]: (state) => {
      state.recordsLoading = true;
      state.recordsError = false;
      if (state.selectedModelId && state.data) {
        const currentModel = getCurrentModel(state.data, state.selectedModelId);

        currentModel.records = [];
      }
    },
    [`${RECORDS_GET.FULFILLED}`]: (state, action: PayloadAction<RecordObject[]>) => {
      state.recordsLoading = false;
      state.recordsError = false;
      if (state.selectedModelId && state.data) {
        const currentModel = getCurrentModel(state.data, state.selectedModelId);

        currentModel.records = action.payload;
      }
    },
    [`${RECORDS_GET.REJECTED}`]: (state) => {
      state.recordsLoading = false;
      state.recordsError = true;
      if (state.selectedModelId && state.data) {
        const currentModel = getCurrentModel(state.data, state.selectedModelId);

        currentModel.records = [];
      }
    }
  }
});

export default currentProjectSlice;
