import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component {
    
    //life cycle 
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps()');
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps()');
    //     console.log(props);
    // }

    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate()')
        return true//if react should continue to update of not 
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapShotBeforeUpdate()');
        //then , render method will get invoked 
        // here you can save some state, before the update 
        return {message:'Snapshot!'}
    }

    // componentWillUpdate(){
    //     console.log('[Persons.js] componentWillUpdate()')
    // }

    componentDidUpdate(prevProps,prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate()');
        console.log(snapshot)
    }
    render(){
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person,index) => {
            //here we are returning a Persons list so no need to wrap under DIV
            return (
                <Person 
                click={ () => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changeCustomName={(event)=>this.props.changed(event, person.id)}
                />
                )
            });
    }
}

export default Persons;