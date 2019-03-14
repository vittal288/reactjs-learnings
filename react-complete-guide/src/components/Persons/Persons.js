import React, {PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {

    state ={myChildData: 'Old value'}
    
    
    //life cycle 
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps()');
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps()');
    //     console.log(props);
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Persons.js] shouldComponentUpdate()');
    //     if(nextProps.persons !== this.props.persons || 
    //        nextProps.changed !== this.props.changed || 
    //        nextProps.clicked !== this.props.clicked){//if previous state and current state are different then update the Persons component 
    //         return true;//if react should continue to update of not 
    //     }else{
    //         return false;
    //     }
    //     //return true means it re-renders the component 
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapShotBeforeUpdate()');
        //then , render method will get invoked 
        // here you can save some state, before the update 
        return {message:'Snapshot!'};
    }

    // componentWillUpdate(){
    //     console.log('[Persons.js] componentWillUpdate()')
    // }

    //once the component finished its update flow 
    componentDidUpdate(prevProps,prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate()');
        console.log(snapshot);
        console.log(this.state);
    }

    // executes when component deleted or removed ot destroyed 
    // do some clean up code
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount()');
    }

    render(){
        console.log('[Persons.js] rendering...');
        console.log('Data is changed',this.state);
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