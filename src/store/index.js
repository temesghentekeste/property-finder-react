import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from '../redux/propertiesSlice';
import propertyReducer from '../redux/propertySlice';

export default configureStore({
  reducer: {
    properties: propertiesReducer,
    property: propertyReducer,
  },
});
