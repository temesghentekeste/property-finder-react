/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosDefaults, axiosHeders } from '../api/axiosParams';

const initialState = {
  loading: false,
  favorites: [],
  message: '',
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

export const createFavoriteAsync = createAsyncThunk(
  'favorites/createFavoriteAsync',
  async (propertyId) => {
    await axiosDefaults();
    await axiosHeders();
    const data = {
      property_id: propertyId,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axios.post('/favorites', data, {
      headers,
    });
    const message = await response.data;
    return message;
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

    [createFavoriteAsync.pending]: (state, action) => {
      state.loading = true;
      state.message = '';
      state.error = '';
    },
    [createFavoriteAsync.fulfilled]: (state, action) => {
      state.loading = true;
      state.message = action.payload;
      state.error = '';
    },
    [createFavoriteAsync.rejected]: (state, action) => {
      state.loading = true;
      state.message = '';
      state.error = 'Something went wrong, please log in and try again!';
    },
  },
});

export default favoritesSlice.reducer;
