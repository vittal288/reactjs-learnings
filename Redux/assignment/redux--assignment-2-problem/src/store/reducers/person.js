import * as actionTypes from '../actions';

const initialState = {
    personName:'',
    persons:[]
}

const reducer = (state= initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_PERSON:
            const person = {
                id: Math.random(), // not really unique but good enough here!
                name: state.personName,// text box entered value 
                age: Math.floor( Math.random() * 40 )
            }
            return{
                ...state,
                persons:state.persons.concat(person)
            }
        case actionTypes.DELETE_PERSON:
            const newPerons = [...state.persons];
            newPerons.splice(action.index,1);
            return{
                ...state,
                persons:newPerons
            }
        case actionTypes.PERSON_NAME_ENTER:
        return{
            ...state,
            personName:action.value
        }
    }

    //this return state will be available in containers/components
    return state;
}

export default reducer;