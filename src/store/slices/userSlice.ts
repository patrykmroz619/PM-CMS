import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH, LOGOUT } from "../constants/auth";

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
    },
    [`${LOGOUT.PENDING}`]: (state) => {
      state.loading = true;
      delete state.error;
    },
    [`${LOGOUT.FULFILLED}`]: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      delete state.error;
      delete state.data;
    },
    [`${LOGOUT.REJECTED}`]: (state) => {
      state.loading = false;
    }
  }
});

export default userSlice;
