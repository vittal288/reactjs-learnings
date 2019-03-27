
import React from 'react';

import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
   const ingredientsSummary = Object.keys(props.ingredients)
        .map((igKey,index)=>{
            return(
                    <li key={igKey+index}>
                        <span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                    </li>
             );
        });

   return (
    <Aux>
        <h3>Your Order:</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p><strong>Total Price: $ {props.price.toFixed(2)} </strong></p>
        <p>Continue to Checkout ?</p>

        <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
   )
}
export default orderSummary;