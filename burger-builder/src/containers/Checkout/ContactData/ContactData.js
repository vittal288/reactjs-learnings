import React,{Component} from 'react';
import {connect} from 'react-redux';

import axios from '../../../axios-order';
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Form/Input/Input';

class ContactData extends Component {

    state ={
        orderForm:{
            name:{
                label:'Name',
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationErrorMessage:'Please enter your name'
            },
            street:{
                label:'Street',
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationErrorMessage:'Please enter street'
            },
            zipCode:{
                label:'ZIP Code',
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP code'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:5,
                    maxLength:5
                },
                valid:false,
                touched:false,
                validationErrorMessage:'Please enter valid ZIP code'
            },
            country:{
                label:'Country',
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Country '
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationErrorMessage:'Please enter country name'
            },
            email:{
                label:'Email',
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email Id'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationErrorMessage:'Please enter valid email id'
            },
            deliverMethod:{
                label:'Delivery Type',
                elementType:'select',
                elementConfig:{
                    options:[
                        {
                            value:'fastest',
                            displayValue:'Fastest'
                        },
                        {
                            value:'chepest',
                            displayValue:'Cheapest'
                        }
                    ],
                    placeholder:'Delivery Method'
                },
                value:'',
                validation:{},
                valid:true// even though is not mandatory but check the validity of the overall form, we have to mention this key here
            }
        },
        loading:false,
        formIsValid:false
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
    
    orderHandler = (event) =>{
        event.preventDefault();//avoid application reloading
        
        this.setState({loading:true});
        const formData ={};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }


        const order ={
            ingredients:this.props.ings,
            price:this.props.price,
            orderData:formData
        }
        axios.post('/order.json',order)
        .then( response=>{
            console.log('ORDER PLACED!!!');
            this.setState({
                loading:false
            })
            this.props.history.push('/');
        })
        .catch(error=>{
            console.log('Error !!!', error);
            this.setState({
                loading:false
            })
        })

    }

    inputChangeHandler =(event, inputIdentifer)=>{
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifer]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifer] = updatedFormElement;

        //to check overall form is valid or not
        let formIsValid = true;
        for(let inputIdentifer in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifer].valid && formIsValid;
        }

        this.setState({
            orderForm:updatedOrderForm,
            formIsValid
        });
    }

    render(){
        const formElementsArray =[];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]

            });
        }
        let form =(
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map((formElement)=>{
                    return(
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
                    )
                })}               

                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );

        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className={Classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state=>{
    return{
        ings: state.ingredients,
        price:state.totalPrice
    }
}
export default connect(mapStateToProps)(ContactData);