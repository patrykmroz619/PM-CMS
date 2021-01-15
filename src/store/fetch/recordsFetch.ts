import { createAsyncThunk } from "@reduxjs/toolkit";

import { RECORDS_GET } from "../constants/project";
import * as api from "@api/records";

export const getRecords = createAsyncThunk(
  RECORDS_GET.CONST,
  async (contentModelId: string, { rejectWithValue }) => {
    try {
      const response = await api.getRecords(contentModelId);
      return response.data.records;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
