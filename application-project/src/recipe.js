import React from "react"; 
import style from './recipe.module.css'; 

const Recipe = ({title,calories,image,ingredients}) =>{ 
	return( 
		<div className={style.recipe}> 
			<h1>{title}</h1> 
			<ol> 
				{ingredients.map(ingredient=>( 
					<li>{ingredient.text}</li> 
				))} 
			</ol> 
			<body>
				<button>
					Email Ingredient List
				</button>

				<script src="script.js"></script>
			</body>

			
			
<p>Calories : {calories}</p> 

			<img className={style.image} src={image} alt=""/> 

		</div> 
	); 

} 
export default Recipe;