import { configureStore } from '@reduxjs/toolkit';
import propertiesReducer from '../redux/propertiesSlice';
import propertyReducer from '../redux/propertySlice';
import loginReducer from '../redux/loginSlice';
import favoritesReducer from '../redux/favoritesSlice';
import signupReducer from '../redux/signupSlice';

export default configureStore({
  reducer: {
    properties: propertiesReducer,
    property: propertyReducer,
    usernametoken: loginReducer,
    favorites: favoritesReducer,
    signupuser: signupReducer,
  },
});
