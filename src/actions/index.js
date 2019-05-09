import {
    SIGN_IN,
    SIGN_OUT,
    ADD_CATEGORY,
    EDIT_CATEGORY,
    SHOW_CATEGORY,
    DELETE_CATEGORY,
    ADD_LOCATION,
    EDIT_LOCATION,
    DELETE_LOCATION,
    CHANGE_CATEGORY_NAME,
    CHANGE_LOCATION_NAME,
    CHANGE_LOCATION_ADDRESS,
    CHANGE_LOCATION_COORDX,
    CHANGE_LOCATION_COORDY,
    CHANGE_LOCATION_CATEGORY,
    UPDATE_ERROR
}from '../actions/types';



export const signIn = (user) => {
    return{
        type: SIGN_IN,
        payload: user
    }
}

export const signOut = (user) => {
    return{
        type: SIGN_OUT,
        payload: user
    }
}


export const addCategory = (data) =>{
    return({
        type: ADD_CATEGORY,
        payload: data
    })
}
export const showCategory = (data) =>{
    return({
        type: SHOW_CATEGORY,
        payload: data
    })
}
export const editCategory = (data) =>{
    return({
        type: EDIT_CATEGORY,
        payload: data
    })
}

export const deleteCategory = (data) =>{
    return({
        type: DELETE_CATEGORY,
        payload: data
    })
}

export const addLocation = (data) =>{
    return({
        type: ADD_LOCATION,
        payload: data
    })
}

export const editLocation = (data) =>{
    return({
        type: EDIT_LOCATION,
        payload: data
    })
}
export const deleteLocation = (data) =>{
    return({
        type: DELETE_LOCATION,
        payload: data
    })
}


export const formCategoryNameChange = (data) =>{
    return({
        type: CHANGE_CATEGORY_NAME,
        payload: data
    })
}

export const formNameChange = (data) =>{
    return({
        type: CHANGE_LOCATION_NAME,
        payload: data
    })
}

export const formAddressChange = (data) =>{
    return({
        type: CHANGE_LOCATION_ADDRESS,
        payload: data
    })
}

export const formCoordXChange = (data) =>{
    return({
        type: CHANGE_LOCATION_COORDX,
        payload: data
    })
}

export const formCoordYChange = (data) =>{
    return({
        type: CHANGE_LOCATION_COORDY,
        payload: data
    })
}

export const formSelectChange = (data) =>{
    return({
        type: CHANGE_LOCATION_CATEGORY,
        payload: data
    })
}

export const updateFormError = (data) =>{
    return({
        type: UPDATE_ERROR,
        payload: data
    })
}