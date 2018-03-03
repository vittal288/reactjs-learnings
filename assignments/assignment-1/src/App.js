import React, { Component } from 'react';

import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutPut from './UserOutput/UserOutput';

class App extends Component {
  state = {
    names: [
      { username: "Vittal Kamkar" }
    ]
  };
  
  // this should be ES 6 arrow function 
  updateUserNameHandler = () => {
    console.log('asdada');
    this.setState({
      names:[
        { username: "New Vittal Kamkar" }
      ]
    })
  }
  
  // event object will pass by react
  nameChangeHandler = (event)=>{
    this.setState({
      names:[
        {username:event.target.value}
      ]
    })
  }
  render() {
    const inputStyle ={
      border:'2px solid #ff0000'
    }
    return (
      <div className="App">
        <button onClick={this.updateUserNameHandler} style={inputStyle}>Update</button>
        <UserInput name={this.state.names[0].username} change={this.nameChangeHandler} />       
        <UserInput  name="Akhila"  change={this.nameChangeHandler} />

        <UserOutPut username={this.state.names[0].username} />
      </div>
    );
  }
}

export default App;
