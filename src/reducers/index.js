import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import formReducer from './formReducer';
import locationReducer from './locationReducer';

export default combineReducers({
    categories: categoryReducer,
    locations: locationReducer,
    formData: formReducer
})