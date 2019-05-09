import {
    CHANGE_CATEGORY_NAME,
    CHANGE_LOCATION_NAME,
    CHANGE_LOCATION_ADDRESS,
    CHANGE_LOCATION_COORDX,
    CHANGE_LOCATION_COORDY,
    CHANGE_LOCATION_CATEGORY,
    INITIAL_FORM_STATE,
    UPDATE_ERROR
}from '../actions/types';


export default (state = INITIAL_FORM_STATE, action) =>{
    switch(action.type){
        case CHANGE_CATEGORY_NAME:
            return {...state, categoryForm: {...state.categoryForm, categoryName: action.payload}};
        case CHANGE_LOCATION_NAME:
            return {...state, locationForm: {...state.locationForm, locationName: action.payload} };
        case CHANGE_LOCATION_ADDRESS:
            return {...state, locationForm: {...state.locationForm, address: action.payload} };
        case CHANGE_LOCATION_COORDX:
            return {...state, locationForm: {...state.locationForm, coordinates: {...state.locationForm.coordinates, latitude: action.payload }}} ;
        case CHANGE_LOCATION_COORDY:
            return {...state, locationForm: {...state.locationForm, coordinates: {...state.locationForm.coordinates, longitude: action.payload }}} ;
        case CHANGE_LOCATION_CATEGORY:
                return {...state, locationForm: {...state.locationForm, category: action.payload} };
        case UPDATE_ERROR:
                return {...state, error: action.payload };
        default:
            return state;
    }
}