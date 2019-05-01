import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onIncrementCounterByValue}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementCounterByValue}  />

                <hr/>
                {/*communicate between the reducers or states  */}
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>STORE RESULT</button>
                <ul>
                    {this.props.storedResults.map((item)=>{
                        return  <li onClick={()=>this.props.onDeleteResult(item.id)} key={item.id}>{item.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}
// this object basically maps the component states to props and props it self is global state managed by redux 
const mapStateToProps = state => {
    console.log('GLOBAL STATE', state);
    return {
        ctr: state.ctr.counter,// state parameter is refers to global state which is  defined in index.js(rootReducer) through (store/reducer/counter or store/reducer/results)
        storedResults: state.res.results
    }
}

//dispatch an actions 
const mapDispatchToProps =  dispatch =>{
    return{
        onIncrementCounter: () =>{dispatch({type:actionTypes.INCREMENT})},
        onDecrementCounter: () =>{dispatch({type:actionTypes.DECREMENT})},
        onIncrementCounterByValue: () =>{dispatch({type:actionTypes.INCREMENT_BY_VALUE, value : 5})},
        onDecrementCounterByValue: () =>{dispatch({type:actionTypes.DECREMENT_BY_VALUE, value : 5})},

        onStoreResult: (ctr)=>{dispatch({type:actionTypes.STORE_RESULT, counter:ctr})},
        onDeleteResult: (id)=>{dispatch({type:actionTypes.DELETE_RESULT, resultElId:id})}
    }
}

// connect it self is a function and returns an function with parameter it is accepting 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);