import React from 'react';
import Radium from 'radium';

// work flow builder can understand CSS file should import in JS and it can inject to HTML files sperately with webpack tool
import './Person.css';
// this component will change the state because setState method is not available in the function component 
const person = (props) => {
    const style = {
        '@media (min-width:500px)': {
            width: '450px',
            backgroundColor:'#ccc'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {props.name} and I am  {props.age} year old ! </p>
            <h1> {props.children}</h1>
            <input type="text" onChange={props.changeCustomName} value={props.name} />
        </div>
    )
}


// we need react here to convert HTML code to JS X code : React.createElement
export default Radium(person);