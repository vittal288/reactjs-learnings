import * as actionTypes from '../actions';

// LOCAL STATE
const initialState = {
    results : []
}


//reducer function always a PURE FUNCTION, it takes the input as state and return a state with updated modification without altering the original state 
// PURE FUNCTION : That means that the function must ensure that if the same input is given always the same output is produced.
const reducer = (state = initialState, action) => {
    console.log('GLOBAL STATE 2-->', state);
    switch(action.type){
       
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                //state.results.push() method will update the existing array but concat will push the items to array and returns an new array 
                // here, we are updating the state of other reducer i.e counter state 
                results:state.results.concat({id:new Date(), value: action.counter})
            }

        case actionTypes.DELETE_RESULT:
            //updating the array immutably by two ways 

            const id = action.resultElId;
            // ONE WAY using spread operator 
            // const newArray = [...state.results];
            // newArray.splice(id,1);

            //2nd way using filter method 
            // filter method returns an new array by based on the condition
            const updatedArray = state.results.filter(item => item.id !== id);
            return{
                ...state,
                //results:newArray
                results:updatedArray
            }
    }
    return  state;
}


export default reducer;