import _ from 'lodash';

import {
    ADD_LOCATION,
    EDIT_LOCATION,
    DELETE_LOCATION,
    INITIAL_LOCATION_STATE
}from '../actions/types';

export default (state = INITIAL_LOCATION_STATE, action) =>{
    switch(action.type){
        case ADD_LOCATION:
            return [...state, action.payload];
        case EDIT_LOCATION:
            _.remove(state, {id: action.payload.id});
            return [...state, action.payload];
        case DELETE_LOCATION:
            _.remove(state, {id: action.payload.id});
            return state
        default:
            return state
    }
}