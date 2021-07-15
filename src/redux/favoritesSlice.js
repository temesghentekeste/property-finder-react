/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosDefaults, axiosHeders } from '../api/axiosParams';

const initialState = {
  loading: false,
  favorites: [],
  error: '',
};

export const getFavoritesAsync = createAsyncThunk(
  'favorites/getFavoritesAsync',
  async () => {
    await axiosDefaults();
    await axiosHeders();
    const response = await axios.get('/favorites');
    const favorites = await response.data;
    return favorites;
  },
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: {
    [getFavoritesAsync.pending]: (state, action) => {
      state.loading = true;
      state.favorites = [];
      state.error = '';
    },
    [getFavoritesAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.favorites = action.payload;
      state.error = '';
    },
    [getFavoritesAsync.rejected]: (state, action) => {
      state.loading = false;
      state.favorites = [];
      state.error = 'Something went wrong, please log in and try again!';
    },
  },
});

export default favoritesSlice.reducer;
