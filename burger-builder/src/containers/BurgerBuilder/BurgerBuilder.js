import React, {Component} from 'react'


import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchaseable:false
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

    render(){
        const disabledInfo ={...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        //disabledInfo = {meat:false,salad:true..}

        return(
            <Aux>
                <Burger ingredients ={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler} 
                    disabled = {disabledInfo}
                    price ={this.state.totalPrice} 
                    purchasable ={this.state.purchaseable} />
            </Aux>
        );
    }

}


export default BurgerBuilder;