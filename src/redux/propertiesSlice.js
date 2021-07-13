/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allPropertiesURL } from '../api/apiEndPoints';

const initialState = {
  loading: false,
  properties: [],
  filter: '',
};

export const getPropertiesAsync = createAsyncThunk(
  'properties/getPropertiesAsync',
  async () => {
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
    },
    [getPropertiesAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.properties = action.payload;
    },
  },
});

export default propertiesSlice.reducer;
