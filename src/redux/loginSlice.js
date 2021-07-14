/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { generateTokenURL } from '../api/apiEndPoints';

const initialState = {
  loading: false,
  login: false,
  user: {},
  token: localStorage.getItem('PropertyFinderToken'),
  username: '' || localStorage.getItem('PropertyFinderUsername'),
  error: '',
};

export const getUserTokenInfo = createAsyncThunk(
  'properties/getUserTokenInfo',
  async (username, password) => {
    const data = {
      user: {
        username,
        password,
      },
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axios.post(generateTokenURL, data, {
      headers,
    });
    const userInfo = await response.data;
    return userInfo;
  },
);

const loginSlice = createSlice({
  name: 'token',
  initialState,
  extraReducers: {
    [getUserTokenInfo.pending]: (state, action) => {
      state.loading = true;
      state.login = false;
      state.user = {};
      state.token = localStorage.getItem('PropertyFinderToken');
      state.username = '' || localStorage.getItem('PropertyFinderUsername');
      state.error = '';
    },
    [getUserTokenInfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.login = true;
      state.user = {
        username: action.payload.username,
        token: action.payload.token,
      };
      state.token = localStorage.getItem('PropertyFinderToken');
      state.username = '' || localStorage.getItem('PropertyFinderUsername');
      state.error = '';
    },
  },
});

export default loginSlice.reducer;
