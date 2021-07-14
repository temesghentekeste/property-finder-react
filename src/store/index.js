import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from '../redux/propertiesSlice';
import propertyReducer from '../redux/propertySlice';
import loginReducer from '../redux/loginSlice';

export default configureStore({
  reducer: {
    properties: propertiesReducer,
    property: propertyReducer,
    login: loginReducer,
  },
});
