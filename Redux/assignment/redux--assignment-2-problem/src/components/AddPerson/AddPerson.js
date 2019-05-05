import React, {Component} from 'react';

import './AddPerson.css';

 class AddPerson extends Component { 
    state ={
        age:'',
        name:''
    }
    
    onAgeChangeHandler =(event)=>{
        this.setState({age:event.target.value});
    }

    onNameChangeHandler = (event)=>{
        this.setState({name:event.target.value});
    }
    render(){
        return(
            <div className="AddPerson">
                <input 
                    type='text' 
                    placeholder="Person Name" 
                    onChange={this.onNameChangeHandler}
                    value={this.state.name}/>
                <input 
                    type='text' 
                    placeholder="Person Age" 
                    onChange={this.onAgeChangeHandler}
                    value={this.state.age}/>
                <button onClick={()=>this.props.personAdded(this.state.age,this.state.name)}>Add Person</button>
            </div>
        )
    }
 }

export default AddPerson;