import React, { Component } from 'react';
// here React is complete class but Component is object or constant 
// import Radium, {StyleRoot} from 'radium';//using radium we can the psedo css classes and inline styles 
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import pClasses from '../components/Persons/Person/Person.css';

class App extends Component {
  //life cycles 
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }


  state = {
    persons: [
      { id:'adasd', name: 'Vittal', age: 28 },
      { id:'24eds',name: 'Sandy', age: 29 },
      { id:'eqweqew',name: 'Harsha', age: 30 }
    ],
    showPersons: false,
    'someOtherState': 'Some Other state'
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStatesFromProps', props);
    return state;
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount()');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount()')
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate()');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponenetUpdate()');
    return true;
  }
  // react will pass the event object to this method 
  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex((person)=>{
      // if(person.id === id) {
      //   return person['id']
      // }
      return person.id === id;
    });

    // find out exact object needs to be update and create a copy of it to avoid mutating original state using spread operator 
    const person = {...this.state.persons[personIndex]};
    // OR
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    // create ad copy of original person array 
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  };

  togglePersonHandler = () => {
    //DO NOT use this way to update/mutate the state of react component 
    //this.state.persons[1].name ='Vittal Kamkar', instead use setState method
    
    
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  deletePersonHandler = (personIndex) =>{
    // this following method as flaw, because ARRAY and OBJECT are reference type or pointer 
    // --> so in below line of code we mutating the original array of persons by updating the same, hence we are updating the state of react component, supposedly we should not  
    // --> to avoid mutating, we have to create copy of persons, as shown in 2nd approach('New Method')


    // const persons = this.state.persons;
    // persons.splice(personIndex, 1);
    // console.log('Orginal Person array' , this.state.persons);
    // this.setState({
    //   persons:persons
    // });



    // @@@ New method 
    // const persons  = this.state.persons.slice();// ES 5, to copy or clone the array 
    const persons = [...this.state.persons]; // ES 6 , spread operator will spread through each array item and bind it into new array []
    persons.splice(personIndex,1);
    // console.log('Orginal Person array' , this.state.persons);
    this.setState({persons:persons});
  }

  // whenever state updates, react will re render this method 
  render() {
    console.log('[App.js] render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div className={pClasses.sample}>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );      
    }

    return (   
      <div className={classes.App}>
        <Cockpit 
          title ={this.props.appTitle}
          persons = {this.state.persons}
          clickEvent =    {this.togglePersonHandler}
          showPersons = {this.state.showPersons}
        />

       {persons}
      </div>  
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am react App'));
  }
}

// wrapping App component to higher level component
// export default Radium(App);//if we use Radium component 
export default App;
