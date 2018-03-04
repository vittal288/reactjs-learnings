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
    this.setState({
      names: [
        { username: "New Vittal Kamkar" }
      ]
    })
  }

  // event object will pass by react
  nameChangeHandler = (event) => {
    // here this keyword will encapsulates and still refer to class "App" but if you plan to handle event listern then you have to ES6 arrowed funtion
    this.setState({
      names: [
        { username: event.target.value }
      ]
    });
  }

  // in this type of method "this" object behavies differently , if you are not planned to use this then you can use normal method syntax like render(){ }
  // to handle event listener in this normal method syntax is not possible, throws an error !!
  // nameChangeHandler(event){
  //   this.setState({
  //     names: [
  //       { username: event.target.value }
  //     ]
  //   });
  // }
  render() {
    const inputStyle = {
      border: '2px solid #ff0000'
    }
    return (
      <div className="App">
        <button onClick={this.updateUserNameHandler} style={inputStyle}>Update</button>
        <UserInput name={this.state.names[0].username} change={this.nameChangeHandler} />
        

        <UserOutPut username={this.state.names[0].username} />
        <UserOutPut username={this.state.names[0].username} />
        <UserOutPut username="Akhila" />
      </div>
    );
  }
}

export default App;
