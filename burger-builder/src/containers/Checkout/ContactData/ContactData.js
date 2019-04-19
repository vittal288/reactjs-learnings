import React,{Component} from 'react';

import axios from '../../../axios-order';
import Button from '../../../components/UI/Button/Button';
import Classes from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state ={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''   
        },
        loading:false
    }

    
    
    orderHandler = (event) =>{
        event.preventDefault();//avoid application reloading
        
        this.setState({
            loading:true
        })
        const order ={
            ingredients:this.props.ingredients,
            price:this.props.price,
            customer:{
                name:'Vittal',
                address:{
                    street:'Doddakanelli',
                    zipCode:560035,
                    country:'India',
                    city:'Bangalore'
                },
                email:'test@gmail.com',
            },
            deliverMethod:'fastest'
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

    render(){
        let form =(
            <form>
                <input className={Classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={Classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={Classes.Input} type="text" name="street" placeholder="Your name" />
                <input className={Classes.Input} type="text" name="postalCode" placeholder="Your Postal Code" />

                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                <Button btnType="Danger">CANCEL</Button>
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

export default ContactData;