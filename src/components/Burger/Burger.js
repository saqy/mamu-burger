
import { withRouter } from 'react-router-dom';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import React, { Component } from 'react'

export class Burger extends Component {
    render() {
            console.log(this.props['ingredients']);
            let transformedIngredients = Object.keys(this.props.ingredients)
            .map(igKey => {
                return [...Array(this.props.ingredients[igKey])].map((_, i) => {
                    return <BurgerIngredient key={ igKey + i } type= {igKey} />
                })
            })
            .reduce((arr, currValue) => {
                return arr.concat(currValue)
            }, []);
            if(transformedIngredients.length === 0) {
                transformedIngredients= <p> ADD INGREDIENTS </p>
            }
        
        return (
            <div className= {classes.Burger}>
            <BurgerIngredient type= "bread-top" />
            {transformedIngredients}
            <BurgerIngredient type= "bread-bottom" />
        </div>
        )
    }
}

export default withRouter(Burger);
