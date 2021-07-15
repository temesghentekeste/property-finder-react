import axios from 'axios';

export const axiosDefaults = () => {
  axios.defaults.baseURL = 'https://api-temesghen-property.herokuapp.com/api/v1';
};

export const axiosHeders = () => {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    'PropertyFinderToken',
  )}`;
  if (!localStorage.getItem('PropertyFinderToken')) {
    localStorage.setItem('PropertyFinderToken', undefined);
    localStorage.setItem('PropertyFinderUsername', '');
    window.location.reload();
  }
};
