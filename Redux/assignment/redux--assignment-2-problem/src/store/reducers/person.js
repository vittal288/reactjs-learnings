import * as actionTypes from '../actions';

const initialState = {
    persons:[]
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_PERSON:
            const person = {
                id: Math.random(), // not really unique but good enough here!
                name: action.value.name,
                age:action.value.age
            }
            return{
                ...state,
                persons:state.persons.concat(person)
            }
        case actionTypes.DELETE_PERSON:
            console.log('ID', action.index);
            const newPersons = [...state.persons];
            newPersons.splice(action.index, 1);
            return{
                ...state,
                persons:newPersons
            }
    }

    //this return state will be available in containers/components
    return state;
}

export default reducer;