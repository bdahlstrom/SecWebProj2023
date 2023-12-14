import { useState } from "react";
import Axios from "axios";
import "./App.css";
import RecipeGrid from "./recipe";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("alcohol-cocktail");

  const YOUR_APP_ID = `0b2bdffa`;
  const YOUR_APP_KEY = "2dea1eb59336a72b9ab887befd011ef1";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Let's eat! - Recipe Search</h1>
      <form className="app-searchForm" onSubmit={onSubmit}>
        <input
          className="app-input"
          type="text"
          placeholder="Enter Ingredient Here"
          autoComplete="Off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app-submit" type="submit" value="Search" />

        <select className="app-setHealthLabels">
          onChange={(e) => setHealthLabel(e.target.value)}
          <option 
            value="alcohol-cocktail"
            >
              alcohol-cocktail
          </option>
          <option 
            value="alcohol-free"
            >
              alcohol-free
          </option>
          <option 
            value="celery-free"
            >
              celery-free
          </option>
          <option 
            value="crustacean-free"
            >
              crustacean-free
          </option>
          <option 
            value="dairy-free"
            >
              dairy-free
          </option>
          <option 
            value="DASH"
            >
              DASH
          </option>
          <option 
            value="egg-free"
            >
              egg-free
          </option>
          <option 
            value="fish-free"
            >
              fish-free
          </option>
          <option 
            value="fodmap-free"
            >
              fodmap-free
          </option>
          <option 
            value="gluten-free"
            >
              gluten-free
          </option>
          <option 
            value="vegetarian"
            >
              vegetarian
          </option>

        </select>

      </form>

      <div className="app-recipes">
        {recipes.map((recipe) => {
            return <RecipeGrid recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default App;