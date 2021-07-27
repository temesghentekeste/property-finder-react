/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getUserTokenInfo } from './api/apiActions';

const initialState = {
  loading: false,
  login: false,
  user: {},
  token: localStorage.getItem('PropertyFinderToken'),
  username: localStorage.getItem('PropertyFinderUername'),
  userId: localStorage.getItem('PropertyFinderUserId'),
  error: '',
};

const loginSlice = createSlice({
  name: 'usernametoken',
  initialState,
  extraReducers: {
    [getUserTokenInfo.pending]: (state, action) => {
      state.loading = true;
      state.login = false;
      state.user = {};
      state.error = '';
      state.token = localStorage.getItem('PropertyFinderToken');
      state.username = localStorage.getItem('PropertyFinderUername');
      state.userId = localStorage.getItem('PropertyFinderUerId');
    },
    [getUserTokenInfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.login = true;
      state.user = {
        username: action.payload.username,
        token: action.payload.token,
      };
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.userId = action.payload.user_id;
      localStorage.setItem('PropertyFinderToken', action.payload.token);
      localStorage.setItem('PropertyFinderUsername', action.payload.username);
      localStorage.setItem('PropertyFinderUserId', action.payload.user_id);
      state.error = '';
    },
    [getUserTokenInfo.rejected]: (state, action) => {
      state.loading = false;
      state.login = false;
      state.user = {};
      state.token = null;
      state.username = null;
      localStorage.removeItem('PropertyFinderToken');
      localStorage.removeItem('PropertyFinderUsername');
      localStorage.removeItem('PropertyFinderUserId');
      state.error = 'Incorrect username or password.';
    },
  },
});

export default loginSlice.reducer;
