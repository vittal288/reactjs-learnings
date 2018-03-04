import React, { Component } from 'react';
// here React is complete class but Component is object or constant 
import Radium, {StyleRoot} from 'radium';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'adasd', name: 'Vittal', age: 28 },
      { id:'24eds',name: 'Sandy', age: 29 },
      { id:'eqweqew',name: 'Harsha', age: 30 }
    ],
    showPersons: false,
    'someOtherState': 'Some Other state'
  };


  // react will pass the event object to this method 
  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex((person)=>{
      // if(person.id === id) {
      //   return person['id']
      // }
      return person.id === id;
    });

    // findout exact object needs to be update and create a copy of it 
    const person = {...this.state.persons[personIndex]};
    // OR
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    // create ad copy of original person array 
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  };

  tooglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  };

  deletePersonHandler = (personIndex) =>{
    // this following method as flaw, because ARRAY and OBJECT are reference type or pointer 
    // --> so in below line of code we mutating the original array of persons by updating the same, hence we are updating the state of it 
    // --> to avoid mutating, we have to create copy of persons, as shown in 2nd approach('New Method')
    // const persons = this.state.persons;
    // persons.splice(personIndex, 1);
    // console.log('Orginal Person array' , this.state.persons);
    // this.setState({
    //   persons:persons
    // });



    // @@@ New method 
    // const persons  = this.state.persons.slice();// ES 5, to copy the array 
    const persons = [...this.state.persons]; // ES 6 , spread operator will iterate through each array object and bind it into new array 
    persons.splice(personIndex,1);
    // console.log('Orginal Person array' , this.state.persons);
    this.setState({persons:persons});
  }

  // whenever state updates, react will re render this method 
  render() {
    const styleConstName = {
      backgroundColor: 'green',
      color:'white',
      border: '1px solid #ccc',
      padding: '10px',    
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'salmon',
        color:'black'
      }
    }


    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
                      click={ () => this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changeCustomName={(event)=>this.nameChangedHandler(event, person.id)}/>
          })}        
        </div>
      );
      styleConstName.backgroundColor ='red';
      styleConstName[':hover'] ={
        backgroundColor:'lightred',
        color:'black'
      }
    }


    // dynamically adding classes
    const classes =[];
    if(this.state.persons.length <= 2){
      classes.push('red') // classes =['red]
    }
    if(this.state.persons.length <=1){
      classes.push('red','bold') // classes =['red','bold]
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>I am react App</h1>
        <p className={classes.join(" ")}>This is really working</p>        
        <button
          style={styleConstName}
          onClick={this.tooglePersonHandler}>Show Persons</button>
          {persons}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am react App'));
  }
}

// wrapping App component to higher level component
export default Radium(App);
