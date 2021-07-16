/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosDefaults, axiosHeders } from '../api/axiosParams';

const initialState = {
  loading: false,
  property: null,
  error: null,
};

export const getPropertyAsync = createAsyncThunk(
  'properties/getPropertiesAsync',
  async (id) => {
    console.log('Called');
    await axiosDefaults();
    await axiosHeders();
    const response = await axios.get(`/properties/${id}`);
    const property = await response.data;
    return property;
  },
);

const propertySlice = createSlice({
  name: 'property',
  initialState,
  extraReducers: {
    [getPropertyAsync.pending]: (state, action) => {
      console.log('pending');
      state.loading = true;
      state.properties = null;
      state.error = null;
    },
    [getPropertyAsync.fulfilled]: (state, action) => {
      console.log('fulfilled');
      state.loading = false;
      state.property = action.payload;
      state.error = null;
    },
    [getPropertyAsync.rejected]: (state, action) => {
      console.log('rejected');
      state.loading = false;
      state.property = null;
      state.error = 'Something went wrong, please try again!';
    },
  },
});

export default propertySlice.reducer;
