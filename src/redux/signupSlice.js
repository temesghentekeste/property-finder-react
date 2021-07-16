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
  user: null,
  error: '',
};

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async (user) => {
    await axiosDefaults();
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
    return userInfo;
  },
);

const signupSlice = createSlice({
  name: 'usersignup',
  initialState,
  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.loading = true;
      state.signup = false;
      state.user = null;
      state.error = '';
    },
    [signupUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.signup = true;
      state.user = action.payload;
      state.error = '';
    },
    [signupUser.rejected]: (state, action) => {
      state.loading = false;
      state.signup = false;
      state.user = null;
      state.error = 'Incorrect username or password.';
    },
  },
});

export default signupSlice.reducer;
