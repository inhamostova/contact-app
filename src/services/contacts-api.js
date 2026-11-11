import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const token = {
  setAuthToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clearAuthToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const postUser = async data => {
  const resp = await axios.post('/users/signup', data);
  return resp;
};

export const logoutUser = async () => {
  const resp = await axios.post('/users/logout');
  return resp;
};

export const loginUser = async data => {
  const resp = await axios.post('/users/login', data);
  return resp;
};

export const getCurrentUser = async () => {
  const resp = await axios.get('/users/current');
  return resp;
};

export const fetchContacts = async () => {
  const resp = await axios('/contacts');
  return resp;
};

export const postContact = async data => {
  const resp = await axios.post('/contacts', data);
  return resp;
};

export const removeContact = async id => {
  const resp = await axios.delete(`/contacts/${id}`);
  return resp;
};

export const patchContact = async (id, data) => {
  const resp = await axios.patch(`/contacts/${id}`, data);
  return resp;
};
