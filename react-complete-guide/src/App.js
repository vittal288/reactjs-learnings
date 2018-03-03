import React, { Component } from 'react';
// here React is complete class but Component is object or constant 

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Vittal', age: 28 },
      { name: 'Sandy', age: 29 },
      { name: 'Harsha', age: 30 }
    ],

    'someOtherState':'Some Other state'
  };


  // assigning an event handler to a button 
  switchNameHandler = (newName) =>{
   //  console.log('was clicked');
   // DONT USE LIKE THIS, do not mutate the state like this , this.state.persons[0].name ='Vittal Kamakr';
   this.setState({
    persons: [
      { name: newName, age: 28 },
      { name: 'Sandy', age: 29 },
      { name: 'Harsha', age: 30 }
    ]
   })
  };

  // react will pass the event object to this method 
  nameChangedHandler = (event)=>{
    this.setState({
      persons: [
        { name: 'Vittal', age: 28 },
        { name: 'Sandy', age: 29 },
        { name: event.target.value, age: 30 }
      ]
    })
  };


  render() {
    const styleConstName ={
      backgroundColor:'white',
      border:'1px solid #ccc',
      padding:'10px',
      color:'black',
      cursor:'pointer'
    }
    return (
      <div className="App">
        <h1>I am react App</h1>
        <p>This is really working</p>
        <button 
          style={styleConstName}
          onClick={() => this.switchNameHandler('Vittal Kamkar')}>Switch Name !</button>
        <Person 
            age={this.state.persons[0].age} 
            name={this.state.persons[0].name} />
        <Person   
            age={this.state.persons[1].age} 
            name={this.state.persons[1].name} />
        <Person 
            age={this.state.persons[2].age} 
            name={this.state.persons[2].name} 
            clickCustomName={this.switchNameHandler.bind(this,'Vittal ###123')}
            changeCustomName={this.nameChangedHandler}> My Hobbies: Racing</Person>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am react App'));
  }
}
export default App;
