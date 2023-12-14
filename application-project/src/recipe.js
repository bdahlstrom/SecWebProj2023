import React from "react";
import "./recipe.css";


export default function RecipeGrid ({ recipe }) {
  return (
    
      <div
        className="recipeGrid" onClick={() => {
            window.open(recipe["recipe"]["url"])
        }}>
        
        <img className="recipeGrid-img" src={recipe["recipe"]["image"]} />
          <p className="recipeGrid-name">{recipe["recipe"]["label"]}</p>
      </div>
    
  );
}