import React from 'react';
import './styles/IngredientList.css'

export const IngredientList = (props) => {
  if(props.ingredients){
    return(
      <div className='ingredient-list'>
        <h2>Ingredients: </h2>
        <ul className='list-group list-group-flush list'>
          {
            props.ingredients.map((ingredient) =>
            <li key={ingredient.id} className='list-group-item'>{ingredient.original}</li>
            )
          }
        </ul>
      </div>
    );
  }
  else
    return(null);
}
