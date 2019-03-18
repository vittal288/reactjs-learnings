import React, {Component} from 'react';
import classes from './Child.css';



class MyChildComponent extends Component {

    state ={
            myChildData: 'Old value',
            users:[
                {
                    name:'vittal',
                    checked:false,
                    activeItem:-1,
                   
                },
                {
                    name:'Akhila',
                    checked:false,
                    activeItem:-1,
                   
                },
                {
                    name:'Anitha',
                    checked:false ,
                    activeItem:-1,                  
                }
            ]
      };


 
    onChangeHandler = (index, evt)=>{
       //console.log('checkBoxes',evt);
       var users = this.state.users;
       users.map((user)=>{
           if(user.name === evt.target.value){
               user.checked = evt.target.checked;
               user.activeItem = user.activeItem === index ? -1 : index;
            }
        });
        this.setState({users:users});
    }
    
    updateUserList =(value)=>{
      var users = this.state.users;
      users.map((user)=>{
            if(user.name === value){
                user.checked = false;
            }
       });

       this.setState({users:users});
    }


    


    render(){
        console.log('[Child.js] rendered()');
         return (
             <div>
                <p>{this.props.myChildDataProps}</p>
                <h3>CheckBoxes with states</h3>
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


