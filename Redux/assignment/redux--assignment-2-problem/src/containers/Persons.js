import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {

   
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAddHandler} onPersonEnter={(event) => this.props.onPersonNameChangeHandler(event.target.value)}/>
                {this.props.prsns.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeleteHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

//map return state from reducer to props for this local component
const mapStateToProps =(state)=>{
    console.log('GLOBAL STATE', state);
    return {
        prsns:state.persons,
        prsnName: state.personName
    }
}

//map returned dispatched action from reducer to local handlers to props
const mapDispatchToProps = (dispatch)=>{
    return{
        onPersonAddHandler: ()=>{dispatch({type: actionTypes.ADD_PERSON})},
        onPersonDeleteHandler : (personIndex)=>{dispatch({type:actionTypes.DELETE_PERSON, index:personIndex})},
        onPersonNameChangeHandler: (name)=>{dispatch({type:actionTypes.PERSON_NAME_ENTER, value:name})}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Persons);