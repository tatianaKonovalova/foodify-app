import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FoodifyService from '../../FoodifyService';

import Header from "../UI/header/Header";
import RecipeCard from "../recipeCard/RecipeCard";
import FavouritesPage from '../favouritesPage/FavouritesPage';

function App() {
  const [recipe, setRecipe] = useState({});
  const [savedDishes, setSavedDishes] = useState(JSON.parse(window.sessionStorage.getItem('savedDishes')) || []);
  const [localStorageData, setLocalStorageData] = useState(JSON.parse(window.localStorage.getItem('savedDishes')) || []);
  const [active, setActive] = useState(false);

  const foodifyService = new FoodifyService();

  useEffect(() => {
    updateRecipe();
  }, [])

  useEffect(() => {
    saveData();
  }, [savedDishes])

  const onRecipeLoaded = (recipe) => {
    setRecipe(recipe);
  }

  const updateRecipe = async () => {
    foodifyService.getRandomRecipe().then(onRecipeLoaded);
    onDishSaved();
  }

  const saveToSessionStorage = () => {
    window.sessionStorage.setItem('savedDishes', JSON.stringify(savedDishes));
  }

  const saveToLocalStorage = () => {
    window.localStorage.setItem('savedDishes', JSON.stringify([...localStorageData, ...savedDishes]));
  }

  const saveData = () => {
    saveToSessionStorage();
    saveToLocalStorage();
  }

  const onSaveDish = (newDish) => {
    setSavedDishes([...savedDishes, newDish]);
    setActive(true);
  }

  const onDishSaved = () => {
    setActive(false);
  }

  const onRecipeAdd = (recipeName, recipeInstruction) => {
    const newCustomDish = {
      dishDescr: recipeInstruction,
      dishId: Date.now(),
      dishImg: '',
      dishName: recipeName
    }
    setSavedDishes([...savedDishes, newCustomDish]);
  }

    return (
      <Router>
        <div className="App">
          <Header active={active} />
          <Switch>
            <Route exact path="/">
              <RecipeCard recipe={recipe} fetchRandomRecipe={updateRecipe} saveDish={onSaveDish} active={active} />
            </Route>
            <Route exact path="/favourites">
              <FavouritesPage savedDishes={savedDishes} addCustomRecipe={onRecipeAdd} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;
