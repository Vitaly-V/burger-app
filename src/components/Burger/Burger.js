import React from 'react';
import PropTypes from 'prop-types';

import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(k => [...Array(props.ingredients[k])].map((_, i) => <BurgerIngridient key={k + i} type={k} />))
    .reduce((arr, el) => arr.concat(el), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!!!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {transformedIngredients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  ingredients: PropTypes.object,
};

export default burger;
