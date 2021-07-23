/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { generateTokenURL } from '../api/apiEndPoints';
import { axiosDefaults } from '../api/axiosParams';

axiosDefaults();
const initialState = {
  loading: false,
  signup: false,
  message: null,
  user: null,
  error: '',
};

export const signupUser = createAsyncThunk('users/signupUser', async (user) => {
  // await axiosDefaults();
  axios.defaults.baseURL = 'http://localhost:3000/api/v1';
  const data = {
    user,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  const response = await axios.post('/users', data, {
    headers,
  });
  const userInfo = await response.data;
  console.log('*********', userInfo);
  console.log('Executed');
  return userInfo;
});

const signupSlice = createSlice({
  name: 'usersignup',
  initialState,
  extraReducers: {
    [signupUser.pending]: (state, action) => {
      console.log('*********', 'peinding');

      state.loading = true;
      state.signup = false;
      state.user = null;
      state.message = '';
      state.error = '';
    },
    [signupUser.fulfilled]: (state, action) => {
      console.log('*********', 'fulfilled');
      state.loading = false;
      state.signup = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.error = '';
    },
    [signupUser.rejected]: (state, action) => {
      state.loading = false;
      console.log('*********', 'rejected');
      state.signup = false;
      state.user = null;
      state.message = '';
      state.error = action.payload;
    },
  },
});

export default signupSlice.reducer;
