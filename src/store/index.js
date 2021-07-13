import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from '../redux/propertiesSlice';

export default configureStore({
  reducer: {
    properties: propertiesReducer,
  },
});
