/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allPropertiesURL } from '../api/apiEndPoints';
import { axiosDefaults, axiosHeders } from '../api/axiosParams';

const initialState = {
  loading: false,
  properties: [],
  error: '',
};

export const getPropertiesAsync = createAsyncThunk(
  'properties/getPropertiesAsync',
  async () => {
    await axiosDefaults();
    await axiosHeders();
    const response = await axios.get(allPropertiesURL);
    const properties = await response.data;
    return properties;
  },
);

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
