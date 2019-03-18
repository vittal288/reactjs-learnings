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

    //    var parentNode = document.getElementById(evt.target.parentElement.parentElement.id);
    //    if(evt.target.checked){
    //        if(parentNode.className === 'active'){
    //            parentNode.removeAttribute('class');
    //         }else{
    //             parentNode.classList.add('active');
    //         }
    //     }else{
    //         parentNode.removeAttribute('class');
    //     }


        this.setState({users:users});
    }


    


    render(){
        console.log('[Child.js] rendered()');
        
        // const cUsers = [
        //     {
        //         name:'vittal',
        //         checked:true
        //     },
        //     {
        //         name:'Akhila',
        //         checked:false
        //     },
        //     {
        //         name:'Anitha',
        //         checked:true
        //     }
        // ];

        // onChangeHandlerWithConst = (evt)=>{
        //     //console.log('checkBoxes',evt);
        //    users.map((user)=>{
        //         if(user.name === evt.target.value){
        //             user.checked = evt.target.checked;
        //         }
        //    });
        // };

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
                

                {
                /* 
                    <h3>CheckBoxes with Const</h3>
                    <ul className={classes.list}>
                            {cUsers.map((user,index)=>{
                                    return (
                                    <div className={this.state.activeItem === index ? classes.active:null }>
                                        <li key={index}>
                                            <label for="checkid" className={classes.label}>
                                                <input className={classes.checkbox} 
                                                    onChange={this.onChangeHandlerWithConst} 
                                                    type="checkbox" 
                                                    value={user.name} 
                                                    checked={user.checked} />
                                            </label>
                                            {user.name}
                                        </li>
                                    </div>)
                            })}
                    </ul> 
                */
                }  

             </div>
        )
    }
}


export default MyChildComponent;


