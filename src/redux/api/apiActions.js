/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { allPropertiesURL } from './apiEndPoints';

const axiosDefaults = () => {
  // axios.defaults.baseURL = 'https://api-temesghen-property.herokuapp.com/api/v1';
  axios.defaults.baseURL = 'http://localhost:3000/api/v1';
};

const axiosHeders = () => {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    'PropertyFinderToken',
  )}`;
  if (!localStorage.getItem('PropertyFinderToken')) {
    localStorage.setItem('PropertyFinderToken', undefined);
    localStorage.setItem('PropertyFinderUsername', '');
    window.location.reload();
  }
};

export const signupUser = createAsyncThunk('users/signupUser', async (user) => {
  axiosDefaults();
  const data = {
    user,
  };
  const headers = {
    'Content-Type': 'application/json',
  };
  const response = await axios.post('/users', data, {
    headers,
  });
  const userInfo = await response.data;
  return userInfo;
});
