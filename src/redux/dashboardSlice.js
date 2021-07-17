/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosDefaults, axiosHeders } from '../api/axiosParams';

const initialState = {
  loading: false,
  user: null,
  error: '',
};

export const getUserDashboard = createAsyncThunk(
  'users/getUserDashboard',
  async () => {
    await axiosDefaults();
    await axiosHeders();
    const response = await axios.get('/dashboard');
    const user = await response.data;
    return user;
  },
);

const dashboardSlice = createSlice({
  name: 'userdashboard',
  initialState,
  extraReducers: {
    [getUserDashboard.pending]: (state, action) => {
      state.loading = true;
      state.user = null;
      state.error = '';
    },
    [getUserDashboard.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
    },
    [getUserDashboard.rejected]: (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = 'Something went wrong, please log in and try again!';
    },
  },
});

export default dashboardSlice.reducer;
