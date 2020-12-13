import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH } from "../constants/auth";

type UserState = {
  isAuthenticated: boolean;
  loading: boolean;
  error?: string;
  data?: UserData;
};

const initialState: UserState = {
  isAuthenticated: false,
  loading: true
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError: (state) => {
      delete state.error;
    }
  },
  extraReducers: {
    [`${AUTH.PENDING}`]: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      delete state.error;
    },
    [`${AUTH.FULFILLED}`]: (state, action: PayloadAction<UserData>) => {
      state.loading = false;
      state.isAuthenticated = true;
      delete state.error;
      state.data = action.payload;
    },
    [`${AUTH.REJECTED}`]: (state, action: PayloadAction<ApiError>) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload?.error.description;
    }
  }
});

export default userSlice;
