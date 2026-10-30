import { createAsyncThunk } from '@reduxjs/toolkit';
import { logoutUser, postUser, token } from 'services/contacts-api';

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

export const logout = createAsyncThunk(
  'logout',
  async (__dirname, thunkAPI) => {
    try {
      const data = await logoutUser();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
