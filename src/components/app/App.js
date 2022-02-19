import {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FoodifyService from '../../FoodifyService';

import Header from "../UI/header/Header";
import RecipeCard from "../recipeCard/RecipeCard";
import FavouritesPage from '../favouritesPage/FavouritesPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      recipe: {},
      savedDishes: JSON.parse(window.sessionStorage.getItem('savedDishes')) || [],
      localStorageData: JSON.parse(window.localStorage.getItem('savedDishes')) || [],
      active: false,
    }

  }
  foodifyService = new FoodifyService();
  
  componentDidMount() {
    this.updateRecipe();
  }

  onRecipeLoaded = (recipe) => {
    this.setState({recipe});
  }

  updateRecipe = async () => {
    this.foodifyService.getRandomRecipe().then(this.onRecipeLoaded);
    this.onDishSaved();
  }

  saveToSessionStorage = () => {
    window.sessionStorage.setItem('savedDishes', JSON.stringify(this.state.savedDishes));
  }

  saveToLocalStorage = () => {
    window.localStorage.setItem('savedDishes', JSON.stringify([...this.state.localStorageData, ...this.state.savedDishes]));
  }

  saveData = () => {
    this.saveToSessionStorage();
    this.saveToLocalStorage();
  }

  onSaveDish = (newDish) => {
    this.setState(({savedDishes}) => ({
      savedDishes: [...savedDishes, newDish],
      active: true,
    }), this.saveData);
  }

  onDishSaved = () => {
    this.setState({active: false});
  }

  onRecipeAdd = (recipeName, recipeInstruction) => {
    const newCustomDish = {
      dishDescr: recipeInstruction,
      dishId: Date.now(),
      dishImg: '',
      dishName: recipeName
    }
    this.setState(({savedDishes}) => ({
      savedDishes: [...savedDishes, newCustomDish],
    }), this.saveData);
  }

  render() {
    const {recipe, savedDishes, active} = this.state;
    return (
      <Router>
        <div className="App">
          <Header active={active} />
          <Switch>
            <Route exact path="/foodify-app">
              <RecipeCard recipe={recipe} fetchRandomRecipe={this.updateRecipe} saveDish={this.onSaveDish} active={active} />
            </Route>
            <Route exact path="/favourites">
              <FavouritesPage savedDishes={savedDishes} addCustomRecipe={this.onRecipeAdd} />
            </Route>
            <Route path="*">
              <RecipeCard recipe={recipe} fetchRandomRecipe={this.updateRecipe} saveDish={this.onSaveDish} active={active} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
