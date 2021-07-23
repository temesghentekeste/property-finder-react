/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { allPropertiesURL, generateTokenURL } from './apiEndPoints';

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

export const getPropertyAsync = createAsyncThunk(
  'properties/getPropertiesAsync',
  async (id) => {
    axiosDefaults();
    axiosHeders();
    const response = await axios.get(`/properties/${id}`);
    const property = await response.data;
    return property;
  },
);

export const getPropertiesAsync = createAsyncThunk(
  'properties/getPropertiesAsync',
  async () => {
    axiosDefaults();
    axiosHeders();
    const response = await axios.get(allPropertiesURL);
    const properties = await response.data;
    return properties;
  },
);

export const getUserTokenInfo = createAsyncThunk(
  'properties/getUserTokenInfo',
  async (user) => {
    axiosDefaults();

    const data = {
      user,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axios.post(generateTokenURL, data, {
      headers,
    });
    const userInfo = await response.data;
    return userInfo;
  },
);

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

export const getUserDashboard = createAsyncThunk(
  'users/getUserDashboard',
  async () => {
    await axiosDefaults();
    await axiosHeders();
    const response = await axios.get(
      `/users/${localStorage.getItem('PropertyFinderUserId')}`,
    );
    const user = await response.data;
    return user;
  },
);

export const createNewProperty = createAsyncThunk(
  'propperies/createNewProperty',
  async (newProperty) => {
    const data = newProperty;
    await axiosDefaults();
    await axiosHeders();
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axios.post('/properties', data, {
      headers,
    });
    const property = await response.data;
    return property;
  },
);
