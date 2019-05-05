import React, { Component } from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {

   
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAddHandler}/>
                {this.props.prsns.map((person,index) => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeleteHandler(index)}/>
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
        onPersonAddHandler: (age,name)=>{dispatch({type: actionTypes.ADD_PERSON, value:{age,name}})},
        onPersonDeleteHandler : (index)=>{dispatch({type:actionTypes.DELETE_PERSON, index})}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Persons);