import { createAsyncThunk } from "@reduxjs/toolkit";

import { signIn, signUp } from "@api/auth";
import { setTokens } from "@utils/token";
import { AUTH } from "../constants/auth";
import { getAuthUser } from "@api/user";

const signInUser = createAsyncThunk(AUTH, async (userData: SignInFormData, { rejectWithValue }) => {
  try {
    const response = await signIn(userData);
    setTokens(response.data.tokens);
    return response.data.userData;
  } catch (e) {
    return rejectWithValue(e.response.data);
  }
});

const signUpUser = createAsyncThunk(AUTH, async (userData: SignUpFormData, { rejectWithValue }) => {
  try {
    const response = await signUp(userData);
    setTokens(response.data.tokens);
    return response.data.userData;
  } catch (e) {
    return rejectWithValue(e.response.data as ApiError);
  }
});

const authUser = createAsyncThunk(AUTH, async (arg: void, { rejectWithValue }) => {
  try {
    const response = await getAuthUser();
    return response.data;
  } catch {
    return rejectWithValue(null);
  }
});

export { signInUser, signUpUser, authUser };
