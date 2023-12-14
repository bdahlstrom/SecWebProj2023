import Axios from "axios";
import { useState } from "react";
import "./App.css";
import RecipeTile from "./recipe";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("alcohol-cocktail");

  const YOUR_APP_ID = `0b2bdffa`;
  const YOUR_APP_KEY = "2dea1eb59336a72b9ab887befd011ef1";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingredient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />

        <select className="app__sethealthLabels">
          onChange={(e) => sethealthLabel(e.target.value)}
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

      <div className="app__recipes">
        {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe}/>;
          })}
      </div>
    </div>
  );
}

export default App;