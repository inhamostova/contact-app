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
