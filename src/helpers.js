import _ from 'lodash';

export const isIdPresent = (arr, id)=>{
    let index =_.findIndex(arr, {id})
    if(index === -1){
        return false
    }
    return true;
}

export const isNamePresent= (arr, name)=>{
    let index =_.findIndex(arr, {name})
    if(index === -1){
        return false
    }
    return true;
}

export const getItem = (arr, id) =>{
    return _.find(arr, {id})
}

export const validateCategory = (values) =>{
    if(values.name === ''){
        return false;
    }
    return true;
}
export const validateLocation = (values) =>{
    if(values.name === '' ||
        values.address === '' ||
        values.coordinates.latitide === '' ||
        values.coordinates.longitude === '' ||
        values.category === ''){
        return false;
    }
    return true;
}
export const isCoordinatePresent = (arr, coordinates)=>{
    let index =_.findIndex(arr, {coordinates})
    if(index === -1){
        return false
    }
    return true;
}

export const sortArray = (arr, id) =>{
    return _.sortBy(arr, id);
}