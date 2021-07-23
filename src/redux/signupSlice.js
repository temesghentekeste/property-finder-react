/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

import { signupUser } from './api/apiActions';

const initialState = {
  loading: false,
  signup: false,
  message: null,
  user: null,
  error: '',
};

const signupSlice = createSlice({
  name: 'usersignup',
  initialState,
  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.loading = true;
      state.signup = false;
      state.user = null;
      state.message = '';
      state.error = '';
    },
    [signupUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.signup = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.error = '';
    },
    [signupUser.rejected]: (state, action) => {
      state.loading = false;
      state.signup = false;
      state.user = null;
      state.message = '';
      state.error = 'Username & password are required; or try a diffrent username!';
    },
  },
});

export default signupSlice.reducer;
