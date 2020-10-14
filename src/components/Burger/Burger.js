import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        // console.log('dhvcjsnkncl    ' + igKey);
        // console.log(props.ingredients+ '    akdsnklansmdl');
        // console.log(props.ingredients[igKey]+ ' shdvjkbslkbkl')
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={ igKey + i } type= {igKey} />
            
        }) //
    })
    .reduce((arr, currValue) => {
        return arr.concat(currValue)
    }, []);
    if(transformedIngredients.length === 0) {
        transformedIngredients= <p> ADD INGREDIENTS </p>
    }
    // console.log(' transformed Ingredients '+ transformedIngredients + '...');
    return (
        <div className= {classes.Burger}>
            <BurgerIngredient type= "bread-top" />
            {transformedIngredients}
            {/* <BurgerIngredient type= "cheese" />
            <BurgerIngredient type= "meat" /> */}
            <BurgerIngredient type= "bread-bottom" />
        </div>
    )
}

// const burger = ( props ) => {
//     let transformedIngredients = Object.keys( props.ingredients )
//         .map( igKey => {
//             return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
//                 return <BurgerIngredient key={igKey + i} type={igKey} />;
//             } );
//         } )
//         .reduce((arr, el) => {
//             return arr.concat(el)
//         }, []);
//     if (transformedIngredients.length === 0) {
//         transformedIngredients = <p>Please start adding ingredients!</p>;
//     }
//     return (
//         <div className={classes.Burger}>
//             <BurgerIngredient type="bread-top" />
//             {transformedIngredients}
//             <BurgerIngredient type="bread-bottom" />
//         </div>
//     );
// };

export default burger;