/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosDefaults, axiosHeders } from './api/axiosParams';
import { getUserDashboard, createNewProperty } from './api/apiActions';

const initialState = {
  loading: false,
  user: null,
  property: null,
  error: '',
  created: false,
};

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

    [createNewProperty.pending]: (state, action) => {
      state.loading = true;
      state.property = null;
      state.error = '';
      state.created = false;
    },
    [createNewProperty.fulfilled]: (state, action) => {
      state.loading = false;
      state.property = action.payload;
      state.error = '';
      state.created = true;
    },
    [createNewProperty.rejected]: (state, action) => {
      state.loading = false;
      state.property = null;
      state.error = 'Something went wrong, please log in and try again!';
      state.created = false;
    },
  },
});

export default dashboardSlice.reducer;
