import React, {Component} from 'react';
import classes from './Child.css';



class MyChildComponent extends Component {

    state = {
            myChildData: 'Old value',
            myCheckBox:true,
            users:[
                {
                    name:'vittal',
                    checked:false,
                    activeItem:-1,
                   
                },
                {
                    name:'Akhila',
                    checked:true,
                    activeItem:-1,
                   
                },
                {
                    name:'Anitha',
                    checked:false ,
                    activeItem:-1,                  
                }
            ]
    };

    get initialState() {
        return {
            myChildData: 'Old value',
            myCheckBox:true,
            users:[
                {
                    name:'vittal',
                    checked:false,
                    activeItem:-1,
                   
                },
                {
                    name:'Akhila',
                    checked:true,
                    activeItem:-1,
                   
                },
                {
                    name:'Anitha',
                    checked:false ,
                    activeItem:-1,                  
                }
            ]
        };
    }

    constructor(props){
        super(props);
        this.state = this.initialState;
    }


 
    onChangeHandler = (index, evt)=>{
       var users =  [...this.state.users];
       users.map((user)=>{
           if(user.name === evt.target.value){
               user.checked = evt.target.checked;
               user.activeItem = user.activeItem === index ? -1 : index;
            }
        });
        this.setState({users:users});
    }

    onChangeCheckBox =(evt)=>{
        this.setState({
            myCheckBox:evt.target.checked
        })
    }
    
    updateUserList =(value)=>{
      var users = [...this.state.users];
      users.map((user)=>{
            if(user.name === value){
                user.checked = false;
                user.activeItem = -1
            }
       });
       this.setState({users:users});
    }

    //reset the state of child component 
    resetState = ()=>{
        this.setState(this.initialState);
    }


    


    render(){
        console.log('[Child.js] rendered()');
         return (
             <div className={classes.Child}>
                <i className="fa fa-car"></i>
                <button onClick={this.resetState}>Reset State</button>
                <div>
                    <input type="checkbox" checked={this.state.myCheckBox} onChange={this.onChangeCheckBox.bind(this)} />
                    <span>{this.props.myChildDataProps}</span> 
                </div>
                <div>
                    <ul className={classes.list}>
                        {this.state.users.map((user,index)=>{
                            return (
                                <div className={user.activeItem === index ? classes.active:null }>
                                    <li id={'list-item'+index} key={index}>
                                        <label for="checkid">
                                            <input className={classes.checkbox} 
                                                   onChange={this.onChangeHandler.bind(this,index)} 
                                                   type="checkbox" 
                                                   value={user.name} 
                                                   checked={user.checked} />
                                        </label>
                                        {user.name}
                                    </li>
                                </div>)
                        })}
                    </ul>   
                </div>
             </div>
        )
    }
}


export default MyChildComponent;


