import _ from 'lodash';

import {
    ADD_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY,
    INITIAL_CATEGORY_STATE
}from '../actions/types';

export default (state = INITIAL_CATEGORY_STATE, action) =>{
    switch(action.type){
        case ADD_CATEGORY:
            return [...state, action.payload]
        case EDIT_CATEGORY:            
            _.remove(state, {id: action.payload.id});
            return [...state, action.payload];     
        case DELETE_CATEGORY:
            _.remove(state, {id: action.payload.id});
            return state
        default:
            return state
    }
}