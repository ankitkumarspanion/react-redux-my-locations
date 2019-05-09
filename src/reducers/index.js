import { combineReducers } from 'redux';


import authReducer from './authReducer'
import categoryReducer from './categoryReducer';
import formReducer from './formReducer';
import locationReducer from './locationReducer';

export default combineReducers({
    auth: authReducer,
    categories: categoryReducer,
    locations: locationReducer,
    formData: formReducer
})