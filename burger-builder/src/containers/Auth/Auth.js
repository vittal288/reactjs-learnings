import React, {Component} from 'react';

import Input from '../../components/UI/Form/Input/Input';
import Button from '../../components/UI/Button/Button';

import classes from './Auth.module.css';

class Auth extends Component{
    state ={
        controls:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false,
                validationErrorMessage:'Please enter your email'
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Your Password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:6
                },
                valid:false,
                touched:false,
                validationErrorMessage:'Please enter valid password'
            },
        }
    }

    checkValidity=(value,rules)=>{
        if(!rules){
            return true;
        }
        let isValid = true;
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangeHandler = (event, controlName)=>{
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value:event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched:true
            }
        }

        this.setState({
            controls:updatedControls
        })
    }
    render(){
        const formElementsArray =[];
        for(let key in this.state.controls){
            formElementsArray.push({
                id:key,
                config:this.state.controls[key]

            });
        }

        const loginForm =formElementsArray.map(formElement =>(
            <Input  
                key={formElement.id}
                label={formElement.config.label}
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig}
                value={formElement.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                validationErrorMessage={formElement.config.validationErrorMessage}
                changed={(event) =>this.inputChangeHandler(event,formElement.id)}/>
        ))
        return(
            <div>
                <form className={classes.Auth}>
                    {loginForm}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
            </div>
        );
    }
}


export default Auth;