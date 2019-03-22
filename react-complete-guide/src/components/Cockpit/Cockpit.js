import React,{useEffect,useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';



const cockpit = (props) =>{
    const toggleBtnRef = useRef(null);
    
    
    //useEffect will run after every render cycle runs for this component 
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect()');
        // const timer = setTimeout(()=>{
        //     alert('Push data to cloud !!');
        // },1000);
        
        toggleBtnRef.current.click();

        // this code will execute, once the cockpit component un mount 
        return ()=>{
            //clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect()');
        };
    },[]);// this [] as 2nd argument to useEffect() will  controls the behavior of useEffect()
    
    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect()');
        
        return ()=>{
            console.log('[Cockpit.js] cleanup work in 2nd useEffect()');
        };
    });


    // dynamically adding classes
    let btnClass = '';
    const assignedClasses =[];

    if(props.personsLength <= 2){
      assignedClasses.push(classes.red) // classes =['red]
    }
    if(props.personsLength <=1){
      assignedClasses.push(classes.bold) // classes =['red','bold]
    }
    
    if(props.showPersons){
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")} >This is really working</p>        
            <button          
                ref={toggleBtnRef}  
                className = {btnClass}
                onClick   = {props.clickEvent}>Show Persons
            </button>
            <AuthContext.Consumer>
                {(context)=><button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
        </div>   
    )   
}

export default React.memo(cockpit);