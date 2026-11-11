import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  postUser,
  token,
} from 'services/contacts-api';

export const register = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await postUser(credentials);
      token.setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await loginUser(credentials);
      token.setAuthToken(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    const data = await logoutUser();
    token.clearAuthToken();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('refresh', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const currentToken = state.auth.token;
    if (currentToken) {
      token.setAuthToken(currentToken);
    }
    const { data } = await getCurrentUser();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
