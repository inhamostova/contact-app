import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  postContact,
  removeContact,
} from 'services/contacts-api';

export const getContacts = createAsyncThunk(
  'getContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await fetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await postContact(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await removeContact(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
