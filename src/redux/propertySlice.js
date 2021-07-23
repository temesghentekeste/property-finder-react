/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getPropertyAsync } from './api/apiActions';

const initialState = {
  loading: false,
  property: null,
  error: null,
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  extraReducers: {
    [getPropertyAsync.pending]: (state, action) => {
      state.loading = true;
      state.properties = null;
      state.error = null;
    },
    [getPropertyAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.property = action.payload;
      state.error = null;
    },
    [getPropertyAsync.rejected]: (state, action) => {
      state.loading = false;
      state.property = null;
      state.error = 'Something went wrong, please try again!';
    },
  },
});

export default propertySlice.reducer;
