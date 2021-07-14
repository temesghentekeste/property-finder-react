/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allPropertiesURL } from '../api/apiEndPoints';

const initialState = {
  loading: false,
  property: null,
  error: '',
};

export const getPropertyAsync = createAsyncThunk(
  'properties/getPropertiesAsync',
  async (id) => {
    const specificPropertyURL = `${allPropertiesURL}/${id}`;
    const response = await axios.get(specificPropertyURL);
    const property = await response.data;
    return property;
  },
);

const propertySlice = createSlice({
  name: 'property',
  initialState,
  extraReducers: {
    [getPropertyAsync.pending]: (state, action) => {
      state.loading = true;
      state.properties = null;
    },
    [getPropertyAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.property = action.payload;
    },
  },
});

export default propertySlice.reducer;
