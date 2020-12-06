import * as actionTypes from './actionTypes';

// action creator for async code execution 
export const increment = ()=>{
    return{
        type: actionTypes.INCREMENT
    }
}

export const decrement = ()=>{
    return {
        type:actionTypes.DECREMENT
    }
}

export const add =(value)=>{
    return{
        type:actionTypes.ADD,
        val:value
    }
}

export const subtract =(value)=>{
    return {
        type:actionTypes.SUBTRACT,
        val:value
    }
}