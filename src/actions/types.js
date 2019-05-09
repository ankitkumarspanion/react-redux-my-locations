
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const ADD_LOCATION = 'ADD_LOCATION';
export const SHOW_CATEGORY = 'SHOW_CATEGORY';
export const EDIT_LOCATION = 'EDIT_LOCATION';
export const DELETE_LOCATION = 'DELETE_LOCATION';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const CHANGE_CATEGORY_NAME = 'CHANGE_CATEGORY_NAME';
export const CHANGE_LOCATION_NAME = 'CHANGE_LOCATION_NAME';
export const CHANGE_LOCATION_ADDRESS = 'CHANGE_LOCATION_ADDRESS';
export const CHANGE_LOCATION_COORDX = 'CHANGE_LOCATION_COORDX';
export const CHANGE_LOCATION_COORDY = 'CHANGE_LOCATION_COORDY';
export const CHANGE_LOCATION_CATEGORY = 'CHANGE_LOCATION_CATEGORY';
export const UPDATE_ERROR = 'UPDATE_ERROR'

export const INITIAL_CATEGORY_STATE = [] //[{id: 'asdsd', name:'hello'}]
export const INITIAL_LOCATION_STATE = [] //[{id: '1', name: 'kolkata', address: 'kolkata', coordinates: {latitude: '22.572645', longitude: '88.363892'}, category: 'hello'}]
export const INITIAL_FORM_STATE =  {
    categoryForm: {
        categoryName: ''
    },
    locationForm: {
        locationName: '',
        address: '',
        coordinates: {
            latitude: '',
            longitude: ''
        },
        category: ''
    },
    error: ''
}