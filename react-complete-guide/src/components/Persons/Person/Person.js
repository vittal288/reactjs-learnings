import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

// work flow builder can understand CSS file should import in JS and it can inject to HTML files sperately with webpack tool
import classes from  './Person.css';

// this component will change the state because setState method is not available in the function component 
class Person extends Component {   

    constructor(){
        super();
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;
    // it execute once this component renders 
    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.isAuthenticated);
    }
    //render method returns an JSX code
    render(){
        console.log('[person.js] is rendering...')
        return(
            <Aux>
                {this.context.isAuthenticated ? <b>Authenticated !</b> :<p>Please login</p>}

                <p onClick={this.props.click}>I'm a {this.props.name} and I am  {this.props.age} year old ! </p>
                <h1> {this.props.children}</h1>
                <input 
                    type="text" 
                    onChange={this.props.changeCustomName} 
                    value={this.props.name} 
                    //ref={(inputElement)=>{this.inputElement = inputElement}}
                    ref ={this.inputElementRef}
                    />
            </Aux>
        )
    }
}


//define the data types of the props using prop-types npm component 
Person.propTypes={
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changeCustomName:PropTypes.func
}

// we need react here to convert HTML code to JS X code : React.createElement
export default withClass(Person,classes.Person);
