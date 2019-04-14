import React, {Component} from 'react'

import axios from '../../axios-order';
import Aux from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.8
}

class BurgerBuilder extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }

    state ={
        ingredients:null,
        totalPrice:4,
        purchaseable:false,
        purchasing:false,
        loading:false,
        error:false
    }

    //fetch data from back end firebase
    componentDidMount =()=>{
        axios.get('/ingredients.json')
        .then(response =>{
            this.setState({ingredients:response.data});
        })
        .catch(error =>{
            this.setState({error:true})
        })
    }

    updatePurchaseState = (ingredients) =>{
      
        const sum = Object.keys(ingredients)// ['salad','bacon']
                .map((key)=>{
                    return ingredients[key]
                })
                .reduce((sum,el)=>{
                    return sum + el;
                },0);
        
        this.setState({purchaseable:sum >0 });
    }

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        //update the price 
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;



        this.setState({
            ingredients: updatedIngredients,
            totalPrice:newPrice
        });

        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        //if ingredients are less than 0 or equal
        if(oldCount <= 0){
            return;
        }
        const updatedCnt = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCnt;
        
        //update the price 
        const priceDeduction = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        });

        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = ()=>{
        this.setState({
            purchasing:true
        });  
    }

    purchaseCancelHandler = () =>{
        this.setState({
            purchasing:false
        }); 
    }

    purchaseContinueHandler =() =>{
        this.setState({
            loading:true
        })
        const order ={
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
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
            console.log('Success !!!', response);
            this.setState({
                loading:false,
                purchasing:false
            })
        })
        .catch(error=>{
            console.log('Error !!!', error);
            this.setState({
                loading:false,
                purchasing:false
            })
        })
    }

    render(){
        const disabledInfo ={...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
       

        let orderSummary =  null;
        let burger = this.state.error ? <p>Ingredients Are Not Loaded !!!</p> : <Spinner /> 

        if(this.state.ingredients){
            burger =(
                        <Aux>
                            <Burger ingredients ={this.state.ingredients}/>
                            <BuildControls
                                ingredientAdded = {this.addIngredientHandler}
                                ingredientRemoved = {this.removeIngredientHandler} 
                                disabled = {disabledInfo}
                                price ={this.state.totalPrice} 
                                purchasable ={this.state.purchaseable} 
                                ordered = {this.purchaseHandler}/>
                        </Aux>
                  );

            orderSummary = <OrderSummary 
                  ingredients={this.state.ingredients}
                  purchaseCanceled={this.purchaseCancelHandler}
                  purchaseContinued={this.purchaseContinueHandler}
                  price={this.state.totalPrice}
              />;
        } 
        
        if(this.state.loading){
            orderSummary = <Spinner />
        }


        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }

}


export default withErrorHandler(BurgerBuilder, axios);