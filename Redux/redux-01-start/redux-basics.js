// this file is completely out of ReactJS project 
const redux = require('redux');

const createStore = redux.createStore;


const initialState ={
    counter :0
}

// Reducer -->reducer is strongly connected to Store to update the state 
const reducer = (state = initialState, action) =>{
    if(action.type === 'INC_COUNTER'){
        // we should update the state immutable way , that is the reason we copying the state object and returning new object 
        return{
            ...state,
            counter:state.counter++
        }
    }
    if(action.type === 'ADD_COUNTER'){
        // we should update the state immutable way , that is the reason we copying the state object and returning new object 
        return{
            ...state,
            counter:state.counter+action.value
        }
    }
    return state;
}

// Store 
const store  = createStore(reducer);
console.log(store.getState());


//Subscription, should write this method , after store was created , to get to know future dispatcher 
store.subscribe(()=>{
    console.log('[SUBSCRIPTION]', store.getState());
})

// Dispatching  an Actions 
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER', value:10});
console.log(store.getState());



