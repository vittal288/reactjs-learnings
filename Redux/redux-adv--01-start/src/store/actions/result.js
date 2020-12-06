import * as actionTypes from './actionTypes';

export const storeResult =(res)=>{
    return{
        type:actionTypes.STORE_RESULT,
        result:res

    }
}
export const storeResultAsync = (res)=>{
    // this dispatch method will be executed by redux-think middleware before reaching the reducers asynchronously 
    return (dispatch, getState) =>{
        // get the oldState from redux-thunk library using utility fn
        // const oldCounter = getState();
        // console.log('Old state', oldCounter);
        setTimeout(()=>{
            dispatch(storeResult(res));
        }, 2000);
    }
}

export const deleteResult = (resultElId)=>{
    return{
        type:actionTypes.DELETE_RESULT,
        resultElId:resultElId
    }
}

