/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { createFavoriteAsync, getFavoritesAsync } from './api/apiActions';

const initialState = {
  loading: false,
  favorites: [],
  message: '',
  error: '',
};

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
