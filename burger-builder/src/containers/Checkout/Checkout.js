import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
    state ={
        ingredients :null,
        totalPrice:null
    }

    //before rendering the component and child component , this life cycle runs
    componentWillMount(){
        
        //read query parameters parameter 
        const query = new URLSearchParams(this.props.location.search);
        const ingredients ={};
        var price = 0;
        for(let param of query.entries()){
            //['salad','1']
            if(param[0] ==='price'){
                price = param[1];
            }else{
                ingredients[param[0]] = +param[1];
            }
        }

        //if key and value are same then no need to specify the value 
        //this.setState({ingredients:ingredients})
        this.setState({
            ingredients,
            totalPrice:price
        })
    }


    checkoutCancelledHandler = ()=>{
        this.props.history.goBack();
     }
     
     checkoutContinuedHandler = ()=>{
        this.props.history.replace('/checkout/contact-data');
     }
 
    

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />

                {/*
                     <Route path={this.props.match.path + '/contact-data'} 
                 component={ContactData} />
                
                */}

                <Route 
                    path={this.props.match.path+'/contact-data'}
                    render ={(props)=>(<ContactData 
                                        ingredients={this.state.ingredients} 
                                        price={this.state.totalPrice}
                                        {...props}  />
                            )}
                />
            </div>
        )
    }
} 


export default Checkout;