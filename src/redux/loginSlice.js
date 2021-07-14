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
  async (user) => {
    console.log('Reached', user);
    const data = {
      user,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axios.post(generateTokenURL, data, {
      headers,
    });
    const userInfo = await response.data;
    console.log(userInfo, data);
    return userInfo;
  },
);

const loginSlice = createSlice({
  name: 'usernametoken2',
  initialState,
  extraReducers: {
    [getUserTokenInfo.pending]: (state, action) => {
      state.loading = true;
      state.login = false;
      state.user = {};
      state.token = '' || localStorage.getItem('PropertyFinderToken');
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
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.error = '';
      localStorage.setItem('PropertyFinderToken', action.payload.token);
      localStorage.setItem('PropertyFinderUsername', action.payload.username);
    },
    [getUserTokenInfo.rejected]: (state, action) => {
      state.loading = false;
      state.login = false;
      state.user = {};
      state.token = localStorage.getItem('PropertyFinderToken');
      state.username = '' || localStorage.getItem('PropertyFinderUsername');
      state.error = 'Incorrect username or password.';
    },
  },
});

export default loginSlice.reducer;
