import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';


const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey)=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        })
    })
    //reduce method will transform the given array to other format 
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[])
    // transformedIngredients: returns an no of BurgerIngredient component of specified type
    console.log(transformedIngredients);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding Ingredients !!!</p>
    }
    return (
        <div className={classes.Berger}>
            {/*<BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="bread-bottom"/>*/}

            <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;
