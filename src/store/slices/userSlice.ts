import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_PENDING, AUTH_FULFILLED, AUTH_REJECTED } from "../constants/auth";

type InitialUserState = {
  isAuthenticated: boolean;
  loading: boolean;
  error?: string;
  data?: UserData;
};

const initialState: InitialUserState = {
  isAuthenticated: false,
  loading: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [`${AUTH_PENDING}`]: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      delete state.error;
    },
    [`${AUTH_FULFILLED}`]: (state, action: PayloadAction<UserData>) => {
      state.loading = false;
      state.isAuthenticated = true;
      delete state.error;
      state.data = action.payload;
    },
    [`${AUTH_REJECTED}`]: (state, action: PayloadAction<ApiError>) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload?.error.description;
    }
  }
});

export default userSlice;
