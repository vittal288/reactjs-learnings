import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "../../axios-order";
import Aux from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";

import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {...}
  // }

  state = {
    purchasing: false,
    loading: false,
    error: false,
  };

  //fetch data from back end firebase
  componentDidMount = () => {
    console.log(this.props);
    // axios.get('/ingredients.json')
    // .then(response =>{
    //     this.setState({ingredients:response.data});
    // })
    // .catch(error =>{
    //     this.setState({error:true})
    // })
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients) // ['salad','bacon']
      .map((key) => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return  sum > 0 ;
  };

  addIngredientHandler = (type) => {
    // const oldCount = this.state.ingredients[type];
    // const updatedCount = oldCount + 1;
    // const updatedIngredients = { ...this.state.ingredients };
    // updatedIngredients[type] = updatedCount;

    // //update the price
    // const priceAddition = INGREDIENTS_PRICE[type];
    // const oldPrice = this.state.totalPrice;
    // const newPrice = oldPrice + priceAddition;

    // this.setState({
    //   ingredients: updatedIngredients,
    //   totalPrice: newPrice,
    // });

    // this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    // const oldCount = this.state.ingredients[type];
    // //if ingredients are less than 0 or equal
    // if (oldCount <= 0) {
    //   return;
    // }
    // const updatedCnt = oldCount - 1;
    // const updatedIngredients = { ...this.state.ingredients };
    // updatedIngredients[type] = updatedCnt;

    // //update the price
    // const priceDeduction = INGREDIENTS_PRICE[type];
    // const oldPrice = this.state.totalPrice;
    // const newPrice = oldPrice - priceDeduction;

    // this.setState({
    //   ingredients: updatedIngredients,
    //   totalPrice: newPrice,
    // });

    // this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {    
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = { ...this.props.ings };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingredients Are Not Loaded !!!</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.props.price}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price:state.totalPrice
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      onIngredientAdded:(ingName)=> dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName:ingName}),
      onIngredientRemoved:(ingName)=> dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName:ingName})
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(BurgerBuilder, axios));
