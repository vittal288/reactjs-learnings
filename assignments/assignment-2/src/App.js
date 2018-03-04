import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {   
    inputText:'',
    // enteredTextArr:[]
  }

  nameChangeHandler = (event) => {   
    this.setState({    
      inputText: event.target.value 
    })       
  }

  removeCharHandler = (index) =>{   
    const inputTextArray = this.state.inputText.split("");
    inputTextArray.splice(index,1);
    this.setState({inputText:inputTextArray.join("")});
  }
  render() {
    const charList =  this.state.inputText.split("").map((text, index)=>{
      return <Char 
              key={index} 
              char={text} 
              click={ ()=>this.removeCharHandler(index)} />      
    });

    return (
      <div className="App">
        <input type="text" 
            onChange={this.nameChangeHandler} 
            value={this.state.inputText}/>
        <p>{this.state.inputText}</p>

        <Validation inputLength={parseInt(this.state.inputText.length)}/>

        {charList}       
      </div>
    );
  }
}

export default App;
