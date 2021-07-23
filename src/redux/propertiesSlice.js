/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getPropertiesAsync } from './api/apiActions';

const initialState = {
  loading: false,
  properties: [],
  error: '',
};

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  extraReducers: {
    [getPropertiesAsync.pending]: (state, action) => {
      state.loading = true;
      state.properties = [];
      state.error = '';
    },
    [getPropertiesAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.properties = action.payload;
      state.error = '';
    },
    [getPropertiesAsync.rejected]: (state, action) => {
      state.loading = false;
      state.properties = [];
      state.error = 'Something went wrong, please log in and try again!';
    },
  },
});

export default propertiesSlice.reducer;
