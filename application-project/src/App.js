import React, { useEffect, useState } from 'react'
import './App.css'; 
import Recipe from './recipe'; 


function App() {

const APP_ID = "0b2bdffa"; 
const APP_KEY = "2dea1eb59336a72b9ab887befd011ef1"; 

const [recipes, setRecipes] = useState([]); 
const [search, setSearch] = useState(""); 
const [query, setQuery] = useState(" "); 


useEffect(() => { 
	getRecipes(); 
}, [query]) 
const getRecipes = async () => { 
	const response = await fetch 
		(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
	const data = await response.json(); 
	setRecipes(data.hits); 

}; 
const updateSearch = e => { 
	setSearch(e.target.value); 
}; 
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };
} 

return (
  <div>
    <h1 onClick={getRecipeInfo}>Recipe Search Tool</h1>
    <form onSubmit={onSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Enter an ingredient"
        autoComplete="Off"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>

    <div>
    {recipes.map((recipe) => {
            return <p>{recipe["recipe"]["label"]}</p>;
    </div>
  </div>
);
} 

export default App; 