import * as actionTypes from '../actions';

// LOCAL STATE
const initialState = {
    counter: 0
}


//reducer function always a PURE FUNCTION, it takes the input as state and return a state with updated modification without altering the original state 
// PURE FUNCTION : That means that the function must ensure that if the same input is given always the same output is produced.
const reducer = (state = initialState, action) => {

    switch(action.type){
        case(actionTypes.INCREMENT):
            const newState = Object.assign({}, state);//clones state object to new memory location to a new object
            newState.counter = newState.counter+1
            return newState;

        case (actionTypes.DECREMENT):
            return {
                ...state,
                counter:state.counter-1
            }

        case (actionTypes.INCREMENT_BY_VALUE):
            return {
                ...state,
                counter:state.counter + action.value
            }

        case (actionTypes.DECREMENT_BY_VALUE):
            return{
                ...state,
                counter:state.counter - action.value
            }
    }
    return  state;
}


export default reducer;