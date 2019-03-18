import React, { Component } from 'react';
// here React is complete class but Component is object or constant 
// import Radium, {StyleRoot} from 'radium';//using radium we can the psedo css classes and inline styles 
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import classes from '../containers/App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import pClasses from '../components/Persons/Person/Person.css';
import withClass from '../hoc/withClass';//this is just a simple function it is retuning functional component 
import Aux from '../hoc/Auxillary';

import ChildComponent from '../components/Child/Child';

class App extends Component {
  //life cycles 
  constructor(props){
    super(props);
    console.log('[App.js] constructor');

    this.child = React.createRef();
  }


  state = {
    persons: [
      { id:'adasd', name: 'Vittal', age: 28,nonVeg:true },
      { id:'24eds',name: 'Sandy', age: 29,nonVeg:true },
      { id:'eqweqew',name: 'Harsha', age: 30, nonVeg:false }
    ],
    showPersons: false,
    showCockpit:true,
    enableRdBtn:false,
    myChildData: 'Some data...' ,
    updateCheckBox:true
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

  passDataToChild = ()=>{
    // this.setState(
    //   // state => (
    //   //     {myParentData: ++state.myParentData}

    //   // ),
    //   this.updateChildComponentState()
    // );

    
    //this.state.updateCheckBox = !this.state.updateCheckBox;
    // this.setState({
    //   nonVeg: !this.state.updateCheckBox
    // });

    this.child.current.selectNonVeg(true);
  }

  updateChildComponentState = () => {
    var value = false;
    value = !value;
    this.setState({nonVeg: value});
  }; 

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
            detectChange={this.state.enableRdBtn}
          />
        </div>
      );      
    }

    return (   
      <Aux classes={classes.App}>
        <button 
          onClick={()=>{
            this.setState({showCockpit:false})
        }}
        >Remove Cockpit Comp</button>
        <button onClick = {this.passDataToChild}>Pass Data </button>
        {this.state.showCockpit ? (<Cockpit 
          title ={this.props.appTitle}
          personsLength = {this.state.persons.length}
          clickEvent =    {this.togglePersonHandler}
          showPersons = {this.state.showPersons}
        />) : null}
       {persons}

       <ChildComponent ref={this.child} myChildDataProps={this.state.myChildData} />
      </Aux> 
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am react App'));
  }
}

// wrapping App component to higher level component
// export default Radium(App);//if we use Radium component 
export default withClass(App, classes.App);
