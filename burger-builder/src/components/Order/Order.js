import React from 'react';

import classes from './Order.module.css';
const order =(props)=>{
    const ingredients = [];
    //converting ingredient object to an array
    for(let ingredientName in props.ingredient){
        ingredients.push({
            name:ingredientName,
            amount:props.ingredient[ingredientName]
        });
    }

    const ingredientsOutput = ingredients.map((ingredient, index)=>{
        return(
            <span key={ingredient+index} 
                style={{
                    textTransform:'capitalize', 
                    margin:'0 8px',
                    border:'1px solid #ccc',
                    padding:'5px'}}>{ingredient.name} ({ingredient.amount})
            </span>
        )
    })
    return(
        <div className={classes.Order}>
            <div>Ingredients: {ingredientsOutput}</div>
            <p style={{fontWeight:'bold',fontSize:'20px'}}>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order;