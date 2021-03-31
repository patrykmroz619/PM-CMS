import { createAsyncThunk } from "@reduxjs/toolkit";

import { signIn, signUp, logout } from "@api/auth";
import { tokenHandler } from "@utils";
import { AUTH, LOGOUT } from "../constants/auth";
import { getAuthUser } from "@api/user";

export const signInUser = createAsyncThunk(
  AUTH.CONST,
  async (userData: SignInFormData, { rejectWithValue }) => {
    try {
      const response = await signIn(userData);
      tokenHandler.setTokens(response.data.tokens);
      return response.data.userData;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const signUpUser = createAsyncThunk(
  AUTH.CONST,
  async (userData: SignUpFormData, { rejectWithValue }) => {
    try {
      const response = await signUp(userData);
      tokenHandler.setTokens(response.data.tokens);
      return response.data.userData;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const authUser = createAsyncThunk(AUTH.CONST, async (arg: void, { rejectWithValue }) => {
  try {
    const response = await getAuthUser();
    return response.data;
  } catch {
    return rejectWithValue(null);
  }
});

export const logoutUser = createAsyncThunk(LOGOUT.CONST, async () => {
  try {
    await logout();
  } finally {
    tokenHandler.removeTokens();
    sessionStorage.clear();
    return;
  }
});
