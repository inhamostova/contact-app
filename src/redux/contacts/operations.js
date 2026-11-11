import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  patchContact,
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

export const editContact = createAsyncThunk(
  'editContact',
  async ({ id, ...credentials }, thunkAPI) => {
    try {
      const { data } = await patchContact(id, credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
